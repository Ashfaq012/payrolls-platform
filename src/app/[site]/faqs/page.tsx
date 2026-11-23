import { loadStaticPage, staticPageMetadata } from "@/lib/pages";
import { isVisible } from "@/sites";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { FaqList } from "@/components/sections/Faq";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export const generateMetadata = () => staticPageMetadata("faqs");

export default async function FaqsPage() {
  const { site, page } = await loadStaticPage("faqs");
  const serviceFaqs = site.services
    .filter((s) => isVisible(s.status) && s.faqs.length > 0)
    .map((s) => ({ title: s.name, faqs: s.faqs }));
  const groups = [{ title: "General", faqs: site.faqs }, ...serviceFaqs];

  return (
    <>
      <PageHero site={site} eyebrow={page.eyebrow} title={page.h1} intro={page.intro} trail={[{ name: "FAQs", path: page.path }]} />
      <section className="py-24 lg:py-28">
        <Container className="max-w-4xl! space-y-14">
          {groups.map((g, i) => (
            <Reveal key={g.title}>
              <h2 className="mb-6 text-2xl font-bold">{g.title}</h2>
              <FaqList faqs={g.faqs} defaultOpen={i === 0 ? 0 : null} />
            </Reveal>
          ))}
        </Container>
      </section>
      <FinalCta
        proposalHref={site.pages.proposal.path}
        contactHref={site.pages.contact.path}
        title="Still have questions?"
        body="Talk to our team about your payroll and we'll answer them directly."
      />
    </>
  );
}
