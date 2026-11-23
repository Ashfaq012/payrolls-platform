import { getSite, isIndexable, siteStaticParams, siteUrl } from "@/sites";

export function generateStaticParams() {
  return siteStaticParams();
}

const escape = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Lists only published (indexable) content for the requesting site. */
export async function GET(_req: Request, { params }: RouteContext<"/[site]/sitemap.xml">) {
  const site = getSite((await params).site);
  const paths: { path: string; priority: string; lastmod?: string }[] = [{ path: "/", priority: "1.0" }];

  for (const s of site.services) if (isIndexable(s.status)) paths.push({ path: `/${s.slug}`, priority: "0.9" });
  for (const p of Object.values(site.pages)) if (isIndexable(p.status)) paths.push({ path: p.path, priority: "0.6" });
  if (isIndexable(site.pages.resources.status)) {
    for (const r of site.resources) {
      if (isIndexable(r.status)) paths.push({ path: `/resources/${r.slug}`, priority: "0.7", lastmod: r.lastReviewed ?? r.publishedAt ?? undefined });
    }
  }

  const urls = paths
    .map(
      (p) =>
        `  <url><loc>${escape(siteUrl(site, p.path))}</loc>${p.lastmod ? `<lastmod>${p.lastmod}</lastmod>` : ""}<priority>${p.priority}</priority></url>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { "content-type": "application/xml; charset=utf-8" } });
}
