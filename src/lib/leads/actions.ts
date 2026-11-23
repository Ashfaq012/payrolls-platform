"use server";

import { randomUUID } from "node:crypto";
import { headers } from "next/headers";
import { resolveHost } from "@/sites/hosts";
import { getSite, visibleServices } from "@/sites";
import { deliverLead, type Lead } from "./delivery";
import { rateLimit } from "./rate-limit";
import { attributionSchema, proposalSchema, type FieldErrors, type ProposalState } from "./schema";
import { verifyTurnstile } from "./turnstile";

const MIN_FILL_MS = 2500;
const NOT_SURE = "Not sure yet";

export async function submitProposal(_prev: ProposalState, formData: FormData): Promise<ProposalState> {
  const h = await headers();
  const host = h.get("host");
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || null;

  // The site comes from the Host header via the same allow-list as the proxy,
  // never from a form field.
  const resolution = resolveHost(host, {
    isDev: process.env.NODE_ENV === "development",
    fallbackSite: process.env.DEFAULT_SITE,
  });
  if (resolution.kind !== "site") return { status: "error", message: "This form can't be submitted from this address." };
  const site = getSite(resolution.site);

  const raw = Object.fromEntries(
    [...formData.entries()].filter(([, v]) => typeof v === "string") as [string, string][],
  );
  const values = {
    fullName: raw.fullName,
    businessName: raw.businessName,
    email: raw.email,
    phone: raw.phone,
    country: raw.country,
    service: raw.service,
    employees: raw.employees,
    message: raw.message,
  };

  // Honeypot: real visitors never see or fill this field. Pretend success.
  if (raw.website) return { status: "success", reference: "received" };

  // Submissions faster than a human could type are treated as automated.
  const startedAt = Number(raw.startedAt);
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FILL_MS) {
    return { status: "error", message: "Please take a moment to check your details, then submit again.", values };
  }

  const limited = rateLimit(`proposal:${ip ?? "unknown"}`);
  if (!limited.ok) {
    return { status: "error", message: "Too many requests. Please try again in a few minutes.", values };
  }

  if (!(await verifyTurnstile(raw["cf-turnstile-response"] ?? null, ip))) {
    return { status: "error", message: "We couldn't verify the security check. Please try again.", values };
  }

  const parsed = proposalSchema.safeParse({ ...values, consent: raw.consent });
  if (!parsed.success) {
    const fieldErrors: FieldErrors = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof FieldErrors;
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { status: "error", message: "Please correct the highlighted fields.", fieldErrors, values };
  }

  const data = parsed.data;
  const allowedServices = [...visibleServices(site).map((s) => s.name), NOT_SURE];
  if (!allowedServices.includes(data.service)) {
    return { status: "error", message: "Please correct the highlighted fields.", fieldErrors: { service: "Please select a service." }, values };
  }
  if (!site.leads.countryOptions.includes(data.country)) {
    return { status: "error", message: "Please correct the highlighted fields.", fieldErrors: { country: "Please select a country." }, values };
  }

  const attribution = attributionSchema.safeParse({
    utm_source: raw.utm_source || undefined,
    utm_medium: raw.utm_medium || undefined,
    utm_campaign: raw.utm_campaign || undefined,
    utm_term: raw.utm_term || undefined,
    utm_content: raw.utm_content || undefined,
    gclid: raw.gclid || undefined,
    referrer: raw.referrer || undefined,
    landingPage: raw.landingPage || undefined,
  });

  const { consent: _consent, ...fields } = data;
  void _consent;
  const reference = `${site.leads.routingKey}-${randomUUID().slice(0, 8).toUpperCase()}`;
  const lead: Lead = {
    ...fields,
    reference,
    receivedAt: new Date().toISOString(),
    consentGiven: true,
    site: { key: site.key, domain: site.domain, routingKey: site.leads.routingKey },
    sourceHost: host ?? "",
    attribution: attribution.success ? attribution.data : {},
  };

  try {
    await deliverLead(lead);
  } catch (err) {
    console.error("[lead] delivery failed", { reference, site: site.key, error: (err as Error).message });
    return {
      status: "error",
      message: "Sorry, we couldn't send your request just now. Please try again shortly.",
      values,
    };
  }

  return { status: "success", reference };
}
