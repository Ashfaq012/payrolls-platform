import type { Metadata } from "next";
import { isIndexable, siteUrl } from "@/sites";
import type { ContentStatus, SiteConfig } from "@/sites/types";

/** Indexing is opt-in per deployment so previews and staging never get indexed. */
export function indexingAllowed(): boolean {
  return process.env.ALLOW_INDEXING === "true";
}

export function pageMetadata(
  site: SiteConfig,
  opts: { title?: string; description: string; path: string; status?: ContentStatus; absoluteTitle?: boolean },
): Metadata {
  const url = siteUrl(site, opts.path);
  const indexable = indexingAllowed() && isIndexable(opts.status ?? "published");
  const ogTitle = opts.title ? `${opts.title} | ${site.brand.name}` : site.seo.defaultTitle;

  return {
    title: opts.title ? (opts.absoluteTitle ? { absolute: opts.title } : opts.title) : undefined,
    description: opts.description,
    alternates: {
      canonical: url,
      // Only self-referencing for now. Add equivalents here when a page has a
      // genuine counterpart on another country site or in another language.
      languages: Object.fromEntries(site.languages.map((l) => [l.hreflang, url])),
    },
    openGraph: {
      type: "website",
      url,
      title: ogTitle,
      description: opts.description,
      siteName: site.brand.name,
      locale: site.seo.ogLocale,
    },
    twitter: { card: "summary_large_image", title: ogTitle, description: opts.description },
    robots: indexable ? { index: true, follow: true } : { index: false, follow: true },
  };
}

function areaServed(site: SiteConfig) {
  const countries = (site.country.areaServed ?? [site.country.name]).map((name) => ({ "@type": "Country", name }));
  return countries.length === 1 ? countries[0] : countries;
}

export function organizationJsonLd(site: SiteConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.brand.name,
    url: siteUrl(site),
    areaServed: areaServed(site),
    ...(site.contact.approved && site.contact.legalEntityName ? { legalName: site.contact.legalEntityName } : {}),
    ...(site.contact.approved && site.contact.email ? { email: site.contact.email } : {}),
    ...(site.contact.approved && site.contact.phone ? { telephone: site.contact.phone } : {}),
  };
}

export function serviceJsonLd(site: SiteConfig, s: { name: string; metaDescription: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.metaDescription,
    url: siteUrl(site, `/${s.slug}`),
    areaServed: areaServed(site),
    provider: { "@type": "Organization", name: site.brand.name, url: siteUrl(site) },
  };
}

export function breadcrumbJsonLd(site: SiteConfig, crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: siteUrl(site, c.path),
    })),
  };
}

export function articleJsonLd(
  site: SiteConfig,
  a: { title: string; metaDescription: string; slug: string; publishedAt: string | null; lastReviewed: string | null },
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.metaDescription,
    url: siteUrl(site, `/resources/${a.slug}`),
    ...(a.publishedAt ? { datePublished: a.publishedAt } : {}),
    ...(a.lastReviewed ? { dateModified: a.lastReviewed } : {}),
    publisher: { "@type": "Organization", name: site.brand.name },
  };
}
