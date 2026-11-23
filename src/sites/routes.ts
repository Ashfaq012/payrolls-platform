import type { SiteKey } from "./hosts";
import { SITES } from "./registry";
import { isVisible } from "./visibility";

const cache = new Map<SiteKey, Set<string>>();

/**
 * Every routable page path for a site, given current draft visibility.
 * The proxy uses this to return a real 404 status for unknown or unpublished
 * paths (Cache Components serves dynamic-param fallbacks with a 200 shell).
 */
export function routablePaths(key: SiteKey): Set<string> {
  const hit = cache.get(key);
  if (hit) return hit;
  const site = SITES[key];
  const paths = new Set<string>(["/", "/robots.txt", "/sitemap.xml"]);
  if (site) {
    for (const p of Object.values(site.pages)) if (isVisible(p.status)) paths.add(p.path);
    for (const s of site.services) if (isVisible(s.status)) paths.add(`/${s.slug}`);
    if (isVisible(site.pages.resources.status)) {
      for (const r of site.resources) if (isVisible(r.status)) paths.add(`/resources/${r.slug}`);
    }
  }
  cache.set(key, paths);
  return paths;
}
