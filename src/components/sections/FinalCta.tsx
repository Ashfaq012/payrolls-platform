import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export function FinalCta({
  proposalHref,
  contactHref,
  title = "Ready to Simplify Your Payroll?",
  body = "Tell us about your business and we'll prepare a proposal for your requirements. No obligation.",
}: {
  proposalHref: string;
  contactHref: string;
  title?: string;
  body?: string;
}) {
  return (
    <section aria-labelledby="cta-title" className="on-dark bg-navy py-24 text-white lg:py-28">
      <Container>
        <Reveal className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <h2 id="cta-title" className="text-4xl font-extrabold leading-tight text-white! sm:text-5xl">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-lg text-white/70">{body}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <ButtonLink href={proposalHref} variant="accent" size="lg" arrow>
              Get a Free Proposal
            </ButtonLink>
            <ButtonLink href={contactHref} variant="ghost-dark" size="lg">
              Talk to our team
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
