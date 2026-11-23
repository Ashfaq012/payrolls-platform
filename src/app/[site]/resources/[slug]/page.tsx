import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site as siteParam } from "next/root-params";
import { ExternalLink } from "lucide-react";
import { atLeastOneParam, getSite, isVisible } from "@/sites";
import { articleJsonLd, pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { StatusNotice } from "@/components/ui/StatusNotice";

/**
 * Every routable slug is prerendered and the proxy 404s anything else, so the
 * dynamic-param fallback shell never serves real traffic. Opt out of the instant-shell check.
 */
export const instant = false;

export async function generateStaticParams() {
  const site = getSite(await siteParam());
  return atLeastOneParam(site.resources.filter((r) => isVisible(r.status)).map((r) => ({ slug: r.slug })), "slug");
}

async function load(params: Promise<{ slug: string }>) {
  const site = getSite(await siteParam());
  const { slug } = await params;
  const article = site.resources.find((r) => r.slug === slug);
  if (!article || !isVisible(article.status) || !isVisible(site.pages.resources.status)) notFound();
  return { site, article };
}

const fmt = (iso: string) => new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

export async function generateMetadata({ params }: PageProps<"/[site]/resources/[slug]">): Promise<Metadata> {
  const { site, article } = await load(params);
  return pageMetadata(site, { title: article.title, description: article.metaDescription, path: `/resources/${article.slug}`, status: article.status });
}

export default async function ArticlePage({ params }: PageProps<"/[site]/resources/[slug]">) {
  const { site, article } = await load(params);
  return (
    <>
      <StatusNotice status={article.status} note="Requires review by a qualified payroll or tax professional before publishing." />
      {article.status === "published" && <JsonLd data={articleJsonLd(site, article)} />}
      <PageHero
        site={site}
        eyebrow={article.type === "guide" ? "Guide" : "Article"}
        title={article.title}
        intro={article.excerpt}
        trail={[
          { name: "Resources", path: "/resources" },
          { name: article.title, path: `/resources/${article.slug}` },
        ]}
      />
      <article className="py-20 lg:py-24">
        <Container className="max-w-3xl!">
          <p className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
            <span>{article.readingMinutes} min read</span>
            <span>Last reviewed: {article.lastReviewed ? fmt(article.lastReviewed) : "pending expert review"}</span>
          </p>
          <div className="mt-10 space-y-10">
            {article.body.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-bold">{section.heading}</h2>
                {section.paragraphs.map((p) => (
                  <p key={p} className="mt-4 text-lg leading-relaxed text-body">
                    {p}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="mt-4 list-disc space-y-2 ps-6 text-lg text-body marker:text-accent">
                    {section.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
          <aside className="mt-14 rounded-2xl border border-line bg-white p-6">
            <h2 className="text-base font-bold">Official sources</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {article.sources.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-brand hover:underline">
                    {s.label}
                    <ExternalLink aria-hidden className="size-3" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted">{site.compliance.disclaimer}</p>
          </aside>
        </Container>
      </article>
      <FinalCta proposalHref={site.pages.proposal.path} contactHref={site.pages.contact.path} />
    </>
  );
}
