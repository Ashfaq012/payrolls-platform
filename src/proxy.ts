import { NextResponse, type NextRequest } from "next/server";
import { resolveHost } from "@/sites/hosts";
import { routablePaths } from "@/sites/routes";

/**
 * Maps the request hostname to a site and rewrites to the internal
 * `/[site]/...` route tree. Visitors never see the site key in the URL.
 * There is deliberately no IP/geo redirect — visitors choose a country.
 */
export function proxy(request: NextRequest) {
  const resolution = resolveHost(request.headers.get("host"), {
    isDev: process.env.NODE_ENV === "development",
    fallbackSite: process.env.DEFAULT_SITE,
  });

  if (resolution.kind === "redirect") {
    const url = request.nextUrl.clone();
    url.host = resolution.host;
    url.port = "";
    url.protocol = "https:";
    return NextResponse.redirect(url, 308);
  }

  if (resolution.kind === "unknown") {
    return new NextResponse("Not found", { status: 404 });
  }

  const url = request.nextUrl.clone();
  const pathname = request.nextUrl.pathname.replace(/\/+$/, "") || "/";
  // Unknown or unpublished pages go to a path no route matches, so the
  // response carries a real 404 status rather than a 200 "soft 404".
  const known = routablePaths(resolution.site).has(pathname);
  url.pathname = known ? `/${resolution.site}${request.nextUrl.pathname}` : `/${resolution.site}/_not-found/_`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    // Everything except Next internals, API routes and static asset files.
    // robots.txt and sitemap.xml are intentionally matched so they resolve per site.
    "/((?!api|_next/static|_next/image|__nextjs|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|css|js|map|woff2?)$).*)",
  ],
};
