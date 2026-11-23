import type { LegalDocument, SiteConfig, StaticPage } from "@/sites/types";
import { PageHero } from "./PageHero";
import { Container } from "@/components/ui/Container";
import { StatusNotice } from "@/components/ui/StatusNotice";

export function LegalPage({ site, page, doc }: { site: SiteConfig; page: StaticPage; doc: LegalDocument }) {
  return (
    <>
      <StatusNotice status={page.status} />
      <PageHero site={site} eyebrow={page.eyebrow} title={page.h1} intro={page.intro} trail={[{ name: page.h1, path: page.path }]} />
      <section className="py-20 lg:py-24">
        <Container className="max-w-3xl!">
          <p className="text-sm text-muted">
            Last updated: {new Date(doc.updatedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </p>
          <div className="mt-10 space-y-10">
            {doc.sections.map((s) => (
              <section key={s.heading}>
                <h2 className="text-xl font-bold">{s.heading}</h2>
                {s.paragraphs.map((p) => (
                  <p key={p} className="mt-3 leading-relaxed text-body">
                    {p}
                  </p>
                ))}
                {s.bullets && (
                  <ul className="mt-3 list-disc space-y-2 ps-6 text-body marker:text-accent">
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
