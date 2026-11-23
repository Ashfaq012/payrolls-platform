import type { SiteConfig } from "@/sites/types";
import { draftsEnabled } from "@/sites";
import { Container } from "@/components/ui/Container";
import { VerifyBadge } from "@/components/ui/StatusNotice";
import { Counter } from "@/components/motion/Counter";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Trust statistics. Only approved figures render on live pages. In draft
 * preview, unapproved figures are shown with a warning so reviewers can see
 * the intended layout.
 */
export function Stats({ site }: { site: SiteConfig }) {
  const preview = draftsEnabled();
  const stats = site.stats.filter((s) => s.approved || preview);
  if (!stats.length) return null;

  return (
    <section aria-label="Key figures" className="relative bg-navy pb-20 text-white">
      <Container>
        <Reveal>
          <dl className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center bg-navy px-8 py-10 text-center">
                <dt className="order-2 mt-2 text-sm font-medium uppercase tracking-widest text-white/60">{s.label}</dt>
                <dd className="order-1 font-display text-5xl font-extrabold text-white sm:text-6xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </dd>
                {!s.approved && (
                  <div className="order-3 mt-4 flex flex-col items-center gap-1.5">
                    <VerifyBadge label="Unverified — not shown live" />
                    <p className="max-w-xs text-xs text-white/50">{s.evidenceNote}</p>
                  </div>
                )}
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
