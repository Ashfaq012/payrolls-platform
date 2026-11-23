import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site as siteParam } from "next/root-params";
import { atLeastOneParam, getSite, isVisible, visibleServices } from "@/sites";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { FaqSection } from "@/components/sections/FaqSection";
import { ServiceCard } from "@/components/sections/ServiceGrid";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusNotice } from "@/components/ui/StatusNotice";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

/**
 * Every routable slug is prerendered and the proxy 404s anything else, so the
 * dynamic-param fallback shell never serves real traffic. Opt out of the instant-shell check.
 */
export const instant = false;

export async function generateStaticParams() {
  const site = getSite(await siteParam());
  return atLeastOneParam(visibleServices(site).map((s) => ({ slug: s.slug })), "slug");
}

async function load(params: Promise<{ slug: string }>) {
  const site = getSite(await siteParam());
  const { slug } = await params;
  const service = site.services.find((s) => s.slug === slug);
  if (!service || !isVisible(service.status)) notFound();
  return { site, service };
}

export async function generateMetadata({ params }: PageProps<"/[site]/[slug]">): Promise<Metadata> {
  const { site, service } = await load(params);
  return pageMetadata(site, {
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/${service.slug}`,
    status: service.status,
  });
}

export default async function ServicePage({ params }: PageProps<"/[site]/[slug]">) {
  const { site, service } = await load(params);
  const related = service.related
    .map((slug) => site.services.find((s) => s.slug === slug))
    .filter((s) => !!s && isVisible(s.status));
  const proposalHref = `${site.pages.proposal.path}?service=${service.slug}`;

  return (
    <>
      <StatusNotice status={service.status} note={service.approvalNote} />
      {service.status === "published" && <JsonLd data={serviceJsonLd(site, service)} />}
      <PageHero site={site} eyebrow={service.eyebrow} title={service.h1} intro={service.intro} trail={[{ name: service.name, path: `/${service.slug}` }]}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={proposalHref} variant="accent" size="lg" arrow>
            Get a Free Proposal
          </ButtonLink>
          <ButtonLink href={site.pages.contact.path} variant="ghost-dark" size="lg">
            Talk to our team
          </ButtonLink>
        </div>
      </PageHero>

      <section aria-labelledby="includes-title" className="py-24 lg:py-28">
        <Container>
          <SectionHeading id="includes-title" eyebrow="What's included" title={`What our ${service.name.toLowerCase()} service covers`} />
          <Stagger as="ul" className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {service.includes.map((f, i) => (
              <StaggerItem as="li" key={f.title}>
                <div className="h-full border-t border-ink pt-5">
                  <span className="font-display text-sm font-bold tabular-nums text-brand">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 text-lg font-bold">{f.title}</h3>
                  <p className="mt-2 leading-relaxed text-body">{f.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section aria-labelledby="local-title" className="bg-white py-24 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading id="local-title" eyebrow={site.country.shortName} title={service.local.heading} intro={service.local.body} />
            {service.local.points.length > 0 && (
              <ul className="mt-8 space-y-3">
                {service.local.points.map((p) => (
                  <li key={p} className="flex gap-3 text-ink">
                    <span aria-hidden className="text-brand">–</span>
                    {p}
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
          <Reveal delay={0.1}>
            <div className="on-dark relative h-full rounded-2xl bg-navy p-8 text-white sm:p-10">
              <h3 className="relative text-2xl font-bold text-white!">Who it&apos;s for</h3>
              <ul className="relative mt-6 space-y-4">
                {service.idealFor.map((p) => (
                  <li key={p} className="flex gap-3 text-white/85">
                    <span aria-hidden className="text-accent">–</span>
                    {p}
                  </li>
                ))}
              </ul>
              <ButtonLink href={proposalHref} variant="accent" arrow className="relative mt-8">
                Request a proposal
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <FaqSection faqs={service.faqs} title={`${service.name} questions`} />

      {related.length > 0 && (
        <section aria-labelledby="related-title" className="py-24 lg:py-28">
          <Container>
            <SectionHeading id="related-title" eyebrow="Related services" title="Often combined with" />
            <Stagger as="ul" className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => (
                <StaggerItem as="li" key={s!.slug}>
                  <ServiceCard service={s!} />
                </StaggerItem>
              ))}
            </Stagger>
          </Container>
        </section>
      )}

      <FinalCta proposalHref={proposalHref} contactHref={site.pages.contact.path} />
    </>
  );
}
