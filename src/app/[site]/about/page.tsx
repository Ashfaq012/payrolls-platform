import { loadStaticPage, staticPageMetadata } from "@/lib/pages";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusNotice } from "@/components/ui/StatusNotice";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export const generateMetadata = () => staticPageMetadata("about");

export default async function AboutPage() {
  const { site, page } = await loadStaticPage("about");
  return (
    <>
      <StatusNotice status={page.status} note="Company background, leadership and any group relationship need management approval." />
      <PageHero site={site} eyebrow={page.eyebrow} title={page.h1} intro={page.intro} trail={[{ name: "About Us", path: page.path }]} />
      <section className="py-24 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-3">
          {site.about.sections.map((s, i) => (
            <Reveal key={s.heading} delay={i * 0.08}>
              <h2 className="text-2xl font-bold">{s.heading}</h2>
              <p className="mt-4 leading-relaxed text-body">{s.body}</p>
            </Reveal>
          ))}
        </Container>
      </section>
      <section aria-labelledby="values-title" className="bg-white py-24 lg:py-28">
        <Container>
          <SectionHeading id="values-title" eyebrow="Our values" title="What you can expect from us" />
          <Stagger as="ul" className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {site.about.values.map((v) => (
              <StaggerItem as="li" key={v.title}>
                <div className="h-full border-t border-ink pt-5">
                  <h3 className="text-lg font-bold">{v.title}</h3>
                  <p className="mt-2 text-body">{v.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>
      <FinalCta proposalHref={site.pages.proposal.path} contactHref={site.pages.contact.path} />
    </>
  );
}
