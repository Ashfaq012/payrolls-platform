import { loadStaticPage, staticPageMetadata } from "@/lib/pages";
import { draftsEnabled, visibleServices } from "@/sites";
import { PageHero } from "@/components/sections/PageHero";
import { ProposalForm } from "@/components/forms/ProposalForm";
import { Container } from "@/components/ui/Container";
import { StatusNotice } from "@/components/ui/StatusNotice";

export const generateMetadata = () => staticPageMetadata("contact");

export default async function ContactPage() {
  const { site, page } = await loadStaticPage("contact");
  const { contact } = site;
  const services = visibleServices(site).map((s) => ({ slug: s.slug, name: s.name }));

  const details = contact.approved
    ? [
        contact.email && { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
        contact.phone && { label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
        contact.address && { label: "Office", value: contact.address },
      ].filter((d): d is { label: string; value: string; href?: string } => !!d)
    : [];

  return (
    <>
      <PageHero site={site} eyebrow={page.eyebrow} title={page.h1} intro={page.intro} trail={[{ name: "Contact", path: page.path }]} />
      <section className="relative -mt-10 pb-24 lg:pb-32">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:gap-14">
          <aside className="space-y-4 lg:pt-10">
            <h2 className="text-xl font-bold">Get in touch</h2>
            {details.length > 0 ? (
              <ul className="space-y-3">
                {details.map((d) => (
                  <li key={d.label} className="border-t border-line pt-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted">{d.label}</p>
                      {d.href ? (
                        <a href={d.href} className="font-semibold text-ink hover:text-brand">
                          {d.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-ink">{d.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="overflow-hidden rounded-2xl border border-line bg-white">
                {draftsEnabled() && <StatusNotice status="draft" note="Office address, phone and email will appear here once confirmed." />}
                <p className="p-5 text-sm text-body">Use the form and our team will respond to you directly.</p>
              </div>
            )}
            {contact.hours && <p className="text-sm text-muted">{contact.hours}</p>}
          </aside>
          <ProposalForm services={services} countryOptions={site.leads.countryOptions} defaultCountry={site.country.name} privacyHref={site.pages.privacy.path} dialCode={site.leads.dialCode} />
        </Container>
      </section>
    </>
  );
}
