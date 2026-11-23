import { getSite, siteStaticParams, siteUrl } from "@/sites";
import { indexingAllowed } from "@/lib/seo";

export function generateStaticParams() {
  return siteStaticParams();
}

export async function GET(_req: Request, { params }: RouteContext<"/[site]/robots.txt">) {
  const site = getSite((await params).site);
  const body = indexingAllowed()
    ? ["User-agent: *", "Allow: /", "", `Sitemap: ${siteUrl(site, "/sitemap.xml")}`, ""].join("\n")
    : ["# Indexing disabled for this deployment (set ALLOW_INDEXING=true in production).", "User-agent: *", "Disallow: /", ""].join("\n");
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
