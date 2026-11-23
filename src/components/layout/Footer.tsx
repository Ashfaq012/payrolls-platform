import Link from "next/link";
import type { NavData } from "@/lib/nav";
import type { SiteConfig } from "@/sites/types";
import { isVisible } from "@/sites";
import { Container } from "@/components/ui/Container";
import { Brand } from "./Brand";

/** Cached so the prerendered shell can include the year (Cache Components disallows bare `new Date()`). */
async function currentYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer({ site, nav }: { site: SiteConfig; nav: NavData }) {
  const year = await currentYear();
  const columns = nav.menus
    .filter((m) => ["payroll", "services", "solutions"].includes(m.id))
    .map((m) => ({ title: m.label, links: m.items }));

  // Single-item menus (EOR, Recruitment) fold into the Services column.
  const singles = nav.menus.filter((m) => m.items.length === 1 && !["solutions", "resources"].includes(m.id));
  const servicesCol = columns.find((c) => c.title === "Services");
  if (servicesCol) servicesCol.links = [...singles.flatMap((m) => m.items), ...servicesCol.links];

  const company = [
    ...nav.utility,
    ...nav.menus.filter((m) => m.id === "resources").flatMap((m) => m.items.filter((i) => !i.href.includes("#"))),
    nav.cta,
  ];

  const legal = (["privacy", "terms", "cookies"] as const)
    .map((k) => site.pages[k])
    .filter((p) => isVisible(p.status));

  const { contact } = site;

  return (
    <footer className="on-dark border-t border-white/10 bg-navy-900 text-white/70">
      <Container className="relative">
        <div className="grid gap-12 py-16 lg:grid-cols-[1.3fr_repeat(4,1fr)] lg:py-20">
          <div className="max-w-xs">
            <Brand brand={site.brand} tone="light" />
            <p className="mt-5 text-sm leading-relaxed">
              Payroll outsourcing, HR outsourcing and workforce services for businesses in {site.country.inSentence}.
            </p>
            <div className="mt-6 space-y-1.5 text-sm">
              {contact.approved && contact.email ? (
                <a href={`mailto:${contact.email}`} className="block text-white hover:text-accent">
                  {contact.email}
                </a>
              ) : null}
              {contact.approved && contact.phone ? (
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="block text-white hover:text-accent">
                  {contact.phone}
                </a>
              ) : null}
              {!contact.approved && (
                <Link href={site.pages.contact.path} className="font-semibold text-accent hover:text-white">
                  Contact our team →
                </Link>
              )}
            </div>
          </div>

          {columns.map((col) => (
            <FooterCol key={col.title} title={col.title} links={col.links} />
          ))}
          <FooterCol title="Company" links={company} />
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {contact.approved && contact.legalEntityName ? contact.legalEntityName : site.brand.name}. All
            rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legal.map((p) => (
              <li key={p.path}>
                <Link href={p.path} className="hover:text-white">
                  {p.h1}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  if (!links.length) return null;
  return (
    <div>
      <p className="font-display text-sm font-semibold text-white">{title}</p>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="transition-colors hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
