import type { SiteConfig } from "@/sites/types";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Parallax } from "@/components/motion/Parallax";

/**
 * Homepage hero. Entrance uses CSS keyframes (not JS) so the headline paints
 * immediately in server HTML — good for LCP and for visitors without JS.
 */
export function Hero({ site }: { site: SiteConfig }) {
  const { hero } = site;
  const h1 = hero.pendingClaimH1?.approved ? hero.pendingClaimH1.text : hero.h1;

  return (
    <section aria-labelledby="hero-title" className="on-dark relative overflow-hidden bg-navy pb-20 pt-36 text-white sm:pt-40 lg:pb-28 lg:pt-48">
      <Container className="grid items-end gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <div>
          <p className="animate-rise text-sm font-medium text-accent">{hero.eyebrow}</p>
          <h1
            id="hero-title"
            className="animate-rise delay-1 mt-5 text-[2.6rem] font-extrabold leading-[1.04] text-white! sm:text-6xl lg:text-[4.1rem]"
          >
            {h1}
          </h1>
          <p className="animate-rise delay-2 mt-6 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">{hero.body}</p>

          <div className="animate-rise delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={site.pages.proposal.path} variant="accent" size="lg" arrow>
              Get a Free Proposal
            </ButtonLink>
            <ButtonLink href="#services" variant="ghost-dark" size="lg">
              Explore Our Services
            </ButtonLink>
          </div>

          <ul className="animate-rise delay-4 mt-12 grid gap-4 border-t border-white/15 pt-6 text-sm text-white/65 sm:grid-cols-3">
            {hero.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>

        <Parallax offset={-40} className="animate-rise delay-3">
          <HeroCycle statutory={hero.statutorySummary} />
        </Parallax>
      </Container>
    </section>
  );
}

/** A typical month, set as a plain schedule — a process outline, not a software screenshot. */
function HeroCycle({ statutory }: { statutory: string }) {
  const steps = [
    { label: "Inputs received", detail: "Attendance, joiners, leavers and changes" },
    { label: "Pay calculated", detail: "Allowances, overtime and deductions" },
    { label: "Statutory figures prepared", detail: statutory },
    { label: "Independent review", detail: "A second specialist checks every run" },
    { label: "Your approval", detail: "Nothing is paid without it" },
  ];
  return (
    <figure className="rounded-2xl bg-navy-800 p-6 sm:p-8">
      <figcaption className="flex items-baseline justify-between border-b border-white/15 pb-4">
        <span className="font-display text-base font-semibold text-white">A typical payroll month</span>
        <span className="text-xs text-white/50">5 stages</span>
      </figcaption>
      <ol>
        {steps.map((s, i) => {
          const last = i === steps.length - 1;
          return (
            <li key={s.label} className={`grid grid-cols-[2.5rem_1fr] gap-3 py-4 ${last ? "" : "border-b border-white/10"}`}>
              <span className={`font-display text-sm font-bold tabular-nums ${last ? "text-accent" : "text-white/40"}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className={`text-[0.95rem] font-semibold ${last ? "text-accent" : "text-white"}`}>{s.label}</p>
                <p className="mt-0.5 text-sm text-white/55">{s.detail}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </figure>
  );
}
