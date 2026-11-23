import type { ReactNode } from "react";
import type { SiteConfig } from "@/sites/types";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";

/** Hero for inner pages. Dark so the transparent header reads consistently site-wide. */
export function PageHero({
  site,
  eyebrow,
  title,
  intro,
  trail,
  children,
}: {
  site: SiteConfig;
  eyebrow: string;
  title: string;
  intro?: string;
  trail: { name: string; path: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="on-dark bg-navy pb-20 pt-32 text-white lg:pb-24 lg:pt-40">
      <Container>
        <div className="animate-fade">
          <Breadcrumbs site={site} trail={trail} />
        </div>
        <div className="mt-8 max-w-3xl">
          <div className="animate-rise">
            <Eyebrow tone="dark">{eyebrow}</Eyebrow>
          </div>
          <h1 className="animate-rise delay-1 mt-5 text-4xl font-extrabold leading-[1.08] text-white! sm:text-5xl lg:text-6xl">{title}</h1>
          {intro && <p className="animate-rise delay-2 mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">{intro}</p>}
          {children && <div className="animate-rise delay-3 mt-9">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
