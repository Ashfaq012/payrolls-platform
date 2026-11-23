import { ExternalLink } from "lucide-react";
import type { ComplianceContent } from "@/sites/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VerifyBadge } from "@/components/ui/StatusNotice";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

/**
 * Country compliance overview. Each topic separates general legal context
 * ("What the law requires") from the services we actually provide ("How we help").
 */
export function Compliance({ content, countryName }: { content: ComplianceContent; countryName: string }) {
  return (
    <section id="compliance" aria-labelledby="compliance-title" className="relative overflow-hidden bg-canvas py-24 lg:py-32">
      <Container>
        <SectionHeading id="compliance-title" eyebrow={`${countryName} compliance`} title={content.heading} intro={content.intro} />

        <Stagger className="mt-14 grid gap-5 lg:grid-cols-2">
          {content.topics.map((t) => (
            <StaggerItem key={t.id}>
              <article className="h-full rounded-2xl border border-line bg-white p-7 sm:p-8" aria-labelledby={`topic-${t.id}`}>
                <header className="flex flex-col gap-1 border-b border-line pb-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h3 id={`topic-${t.id}`} className="text-3xl font-extrabold">
                    {t.name}
                  </h3>
                  <p className="text-sm font-medium text-muted">{t.fullName}</p>
                </header>
                <p className="mt-5 leading-relaxed text-body">{t.summary}</p>

                {t.figures && t.figures.length > 0 && (
                  <dl className="mt-5 grid gap-2 sm:grid-cols-2">
                    {t.figures.map((f) => (
                      <div key={f.label} className="rounded-2xl bg-canvas p-4">
                        <dt className="text-xs font-medium text-muted">{f.label}</dt>
                        <dd className="mt-1 font-display text-base font-bold text-ink">{f.value}</dd>
                        {!f.verified && (
                          <dd className="mt-2">
                            <VerifyBadge label="Verify with official source" />
                          </dd>
                        )}
                      </div>
                    ))}
                  </dl>
                )}

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">What the law requires</h4>
                    <ul className="mt-3 space-y-2 text-sm text-body">
                      {t.keyPoints.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span aria-hidden className="text-muted">–</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-brand">How we help</h4>
                    <ul className="mt-3 space-y-2 text-sm text-ink">
                      {t.weHandle.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span aria-hidden className="text-brand">–</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <footer className="mt-6 border-t border-line pt-4">
                  <p className="text-xs font-semibold text-muted">Official sources</p>
                  <ul className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                    {t.sources.map((s) => (
                      <li key={s.href}>
                        <a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-brand hover:underline">
                          {s.label}
                          <ExternalLink aria-hidden className="size-3" />
                          <span className="sr-only">(opens in a new tab)</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </footer>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal>
          <div className="mt-8 border-s-2 border-brand ps-5 text-sm text-body">
            <p>
              {content.disclaimer}{" "}
              <span className="font-medium text-ink">
                Last reviewed: {content.lastReviewed ? new Date(content.lastReviewed).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) : "pending expert review"}.
              </span>
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
