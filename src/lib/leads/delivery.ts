import "server-only";
import { createHmac } from "node:crypto";
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import type { Attribution, ProposalInput } from "./schema";

export interface Lead extends Omit<ProposalInput, "consent"> {
  reference: string;
  receivedAt: string;
  consentGiven: true;
  site: { key: string; domain: string; routingKey: string };
  sourceHost: string;
  attribution: Attribution;
}

/**
 * Integration boundary for lead delivery.
 *
 * - LEADS_WEBHOOK_URL: leads are POSTed as JSON, signed with an HMAC-SHA256
 *   header (`x-signature`) using LEADS_WEBHOOK_SECRET. This is the seam for
 *   the future Manpower CRM integration, an automation tool or an email relay.
 * - Development without a webhook: leads are appended to .data/leads.jsonl.
 * - Production without a webhook: delivery fails loudly instead of silently
 *   dropping enquiries.
 */
export async function deliverLead(lead: Lead): Promise<void> {
  const url = process.env.LEADS_WEBHOOK_URL;
  if (url) {
    const body = JSON.stringify(lead);
    const headers: Record<string, string> = { "content-type": "application/json" };
    const secret = process.env.LEADS_WEBHOOK_SECRET;
    if (secret) headers["x-signature"] = createHmac("sha256", secret).update(body).digest("hex");
    const res = await fetch(url, { method: "POST", headers, body, signal: AbortSignal.timeout(8000) });
    if (!res.ok) throw new Error(`Lead webhook responded ${res.status}`);
    return;
  }

  if (process.env.NODE_ENV !== "production") {
    const dir = path.join(process.cwd(), ".data");
    await mkdir(dir, { recursive: true });
    await appendFile(path.join(dir, "leads.jsonl"), JSON.stringify(lead) + "\n", "utf8");
    return;
  }

  throw new Error("No lead delivery configured. Set LEADS_WEBHOOK_URL.");
}
