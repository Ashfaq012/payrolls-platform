/**
 * Hostname → site resolution.
 *
 * This file is imported by `src/proxy.ts`, so keep it dependency-free and small.
 * Only hostnames listed here are served. Anything else gets a 404, which keeps
 * stray hosts (raw deployment URLs, spoofed Host headers) from producing
 * duplicate copies of a site.
 */

export const SITE_KEYS = ["lanka", "india", "saudia", "arabia", "emirates"] as const;
export type SiteKey = (typeof SITE_KEYS)[number];

/** Sites that are built and served. Add a key here when its config is ready. */
export const LIVE_SITE_KEYS: readonly SiteKey[] = ["lanka", "india"];

/** Production apex domains. `www.` variants redirect to these. */
export const PRODUCTION_HOSTS: Record<string, SiteKey> = {
  "payrollslanka.com": "lanka",
  "payrollsindia.com": "india",
  "payrollsaudia.com": "saudia",
  "payrollarabia.com": "arabia",
  "payrollemirates.com": "emirates",
};

/**
 * Local development hosts. `*.localhost` resolves to 127.0.0.1 in modern
 * browsers without editing /etc/hosts, e.g. http://lanka.localhost:3000
 */
export const DEV_HOSTS: Record<string, SiteKey> = {
  "lanka.localhost": "lanka",
  "india.localhost": "india",
  "saudia.localhost": "saudia",
  "arabia.localhost": "arabia",
  "emirates.localhost": "emirates",
};

export function normalizeHost(rawHost: string | null | undefined): string | null {
  if (!rawHost) return null;
  const host = rawHost.trim().toLowerCase().split(":")[0];
  // Hostnames only: letters, digits, dots and hyphens.
  if (!/^[a-z0-9.-]{1,253}$/.test(host)) return null;
  return host;
}

export function isLiveSiteKey(value: string | null | undefined): value is SiteKey {
  return !!value && (LIVE_SITE_KEYS as readonly string[]).includes(value);
}

export type HostResolution =
  | { kind: "site"; site: SiteKey }
  | { kind: "redirect"; host: string }
  | { kind: "unknown" };

export function resolveHost(
  rawHost: string | null | undefined,
  opts: { isDev: boolean; fallbackSite?: string | null },
): HostResolution {
  const host = normalizeHost(rawHost);
  if (!host) return { kind: "unknown" };

  if (host.startsWith("www.") && PRODUCTION_HOSTS[host.slice(4)]) {
    return { kind: "redirect", host: host.slice(4) };
  }

  const prod = PRODUCTION_HOSTS[host];
  if (prod) return isLiveSiteKey(prod) ? { kind: "site", site: prod } : { kind: "unknown" };

  if (opts.isDev) {
    const dev = DEV_HOSTS[host];
    if (dev) return isLiveSiteKey(dev) ? { kind: "site", site: dev } : { kind: "unknown" };
    if (host === "localhost" || host === "127.0.0.1") return { kind: "site", site: "lanka" };
  }

  // Preview/staging deployments (e.g. *.vercel.app) opt in with DEFAULT_SITE.
  if (isLiveSiteKey(opts.fallbackSite)) return { kind: "site", site: opts.fallbackSite };

  return { kind: "unknown" };
}
