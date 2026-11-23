import type { Industry } from "@/sites/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

/**
 * Interactive industry cards. Details reveal on hover or keyboard focus on
 * larger screens and are always visible on touch/small screens.
 */
export function Industries({
  industries,
  title = "Payroll shaped around your industry",
  intro,
  showLink = true,
  headingLevel = "h2",
}: {
  industries: Industry[];
  title?: string;
  intro?: string;
  showLink?: boolean;
  headingLevel?: "h2" | "none";
}) {
  return (
    <section aria-labelledby={headingLevel === "h2" ? "industries-title" : undefined} aria-label={headingLevel === "none" ? "Industries" : undefined} className="bg-white py-24 lg:py-32">
      <Container>
        {headingLevel === "h2" && (
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading id="industries-title" eyebrow="Industries" title={title} intro={intro} />
            {showLink && (
              <ButtonLink href="/industries" variant="secondary" arrow className="self-start lg:self-auto">
                All industry solutions
              </ButtonLink>
            )}
          </div>
        )}
        <Stagger as="ul" className={`${headingLevel === "h2" ? "mt-14" : ""} grid gap-4 sm:grid-cols-2 lg:grid-cols-4`}>
          {industries.map((ind) => (
            <StaggerItem as="li" key={ind.slug}>
              <article
                tabIndex={0}
                className="group relative h-full overflow-hidden rounded-2xl border border-line bg-canvas p-6 outline-none transition-[background-color,border-color] duration-300 hover:border-transparent hover:bg-navy focus-visible:border-transparent focus-visible:bg-navy focus-visible:ring-2 focus-visible:ring-accent lg:min-h-[14rem]"
              >
                <h3 className="relative text-lg font-bold transition-colors duration-300 group-hover:text-white! group-focus-visible:text-white!">
                  {ind.name}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-body transition-colors duration-300 group-hover:text-white/70 group-focus-visible:text-white/70">
                  {ind.summary}
                </p>
                <ul
                  className="relative mt-4 space-y-1.5 text-sm text-ink transition-all duration-300 lg:translate-y-2 lg:text-white/85 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-visible:translate-y-0 lg:group-focus-visible:opacity-100"
                  aria-label={`Payroll considerations for ${ind.name}`}
                >
                  {ind.considerations.map((c) => (
                    <li key={c} className="flex gap-2">
                      <span aria-hidden className="text-accent">–</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
