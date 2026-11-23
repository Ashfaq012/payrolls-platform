import type { Faq } from "@/sites/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { FaqList } from "./Faq";

export function FaqSection({ faqs, title = "Frequently asked questions", intro, moreHref }: { faqs: Faq[]; title?: string; intro?: string; moreHref?: string }) {
  if (!faqs.length) return null;
  return (
    <section aria-labelledby="faq-title" className="bg-canvas py-24 lg:py-32">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <SectionHeading id="faq-title" eyebrow="FAQs" title={title} intro={intro} />
          {moreHref && (
            <ButtonLink href={moreHref} variant="secondary" arrow className="mt-8">
              View all FAQs
            </ButtonLink>
          )}
        </div>
        <Reveal>
          <FaqList faqs={faqs} />
        </Reveal>
      </Container>
    </section>
  );
}
