"use client";

import { useEffect } from "react";

export const ATTRIBUTION_KEY = "pl_attribution";
const PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"] as const;

/**
 * Remembers how the visitor arrived in this browser tab (sessionStorage only,
 * no cookies) so proposal requests can be attributed to a campaign.
 */
export function AttributionCapture() {
  useEffect(() => {
    try {
      const url = new URL(window.location.href);
      const hasCampaign = PARAMS.some((p) => url.searchParams.has(p));
      // Keep the first touch, unless a later visit arrives from a tagged campaign link.
      if (sessionStorage.getItem(ATTRIBUTION_KEY) && !hasCampaign) return;
      const data: Record<string, string> = { landingPage: url.pathname };
      for (const p of PARAMS) {
        const v = url.searchParams.get(p);
        if (v) data[p] = v.slice(0, 200);
      }
      if (document.referrer && !document.referrer.startsWith(window.location.origin)) {
        data.referrer = document.referrer.slice(0, 500);
      }
      sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(data));
    } catch {
      // Storage unavailable (private mode, blocked) — attribution is optional.
    }
  }, []);
  return null;
}

export function readAttribution(): Record<string, string> {
  try {
    return JSON.parse(sessionStorage.getItem(ATTRIBUTION_KEY) ?? "{}");
  } catch {
    return {};
  }
}
