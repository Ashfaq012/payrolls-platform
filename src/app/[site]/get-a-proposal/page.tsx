import { loadStaticPage, staticPageMetadata } from "@/lib/pages";
import { visibleServices } from "@/sites";
import { PageHero } from "@/components/sections/PageHero";
import { ProposalForm } from "@/components/forms/ProposalForm";
import { Container } from "@/components/ui/Container";

export const generateMetadata = () => staticPageMetadata("proposal");

export default async function ProposalPage() {
  const { site, page } = await loadStaticPage("proposal");
  const services = visibleServices(site).map((s) => ({ slug: s.slug, name: s.name }));

  return (
    <>
      <PageHero site={site} eyebrow={page.eyebrow} title={page.h1} intro={page.intro} trail={[{ name: "Get a Proposal", path: page.path }]} />
      <section className="relative -mt-10 pb-24 lg:pb-32">
        <Container className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:gap-14">
          <ProposalForm services={services} countryOptions={site.leads.countryOptions} defaultCountry={site.leads.countryOptions.includes(site.country.name) ? site.country.name : ""} privacyHref={site.pages.privacy.path} dialCode={site.leads.dialCode} />
          <aside className="space-y-5 lg:pt-10">
            <h2 className="text-xl font-bold">What happens next</h2>
            <ol className="space-y-5">
              {[
                { title: "We review your request", body: "The right specialist looks at your requirements and headcount." },
                { title: "A short conversation", body: "We confirm scope, timelines and any specific needs with you." },
                { title: "Your tailored proposal", body: "You receive a clear proposal with scope and pricing. No obligation." },
              ].map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="w-6 shrink-0 font-display text-sm font-bold tabular-nums text-brand">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-semibold text-ink">{s.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-body">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="rounded-2xl border border-line bg-white p-5 text-sm text-body">
              <p className="font-semibold text-ink">Please don&apos;t send payroll data here</p>
              <p className="mt-1">
                This form is for enquiries only. Once we work together, we set up a secure way to exchange employee and salary information.
              </p>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
