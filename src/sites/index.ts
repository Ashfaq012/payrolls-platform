import { notFound } from "next/navigation";
import { isLiveSiteKey, LIVE_SITE_KEYS } from "./hosts";
import { SITES } from "./registry";
import type { PlannedSite, Service, SiteConfig } from "./types";
import { isVisible } from "./visibility";

export { draftsEnabled, isIndexable, isVisible } from "./visibility";

/** Sites shown as "coming soon" in the country selector. */
export const PLANNED_SITES: PlannedSite[] = [
];

export function liveSites(): SiteConfig[] {
  return LIVE_SITE_KEYS.map((k) => SITES[k]).filter((s): s is SiteConfig => !!s);
}

export function getSite(key: string): SiteConfig {
  const site = isLiveSiteKey(key) ? SITES[key] : undefined;
  if (!site) notFound();
  return site;
}

export function siteStaticParams() {
  return LIVE_SITE_KEYS.map((site) => ({ site }));
}

export function visibleServices(site: SiteConfig): Service[] {
  return site.services.filter((s) => isVisible(s.status));
}

export function siteUrl(site: SiteConfig, path = "/"): string {
  return new URL(path, `https://${site.domain}`).toString();
}

/**
 * Cache Components requires generateStaticParams to return at least one entry.
 * When nothing is publishable, return a placeholder that resolves to a 404.
 */
export function atLeastOneParam<T extends Record<string, string>>(params: T[], key: keyof T): T[] {
  return params.length ? params : [{ [key]: "__none__" } as T];
}
