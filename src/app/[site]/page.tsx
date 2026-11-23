import type { Metadata } from "next";
import { site as siteParam } from "next/root-params";
import { getSite, isVisible, visibleServices } from "@/sites";
import { pageMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { Industries } from "@/components/sections/Industries";
import { Compliance } from "@/components/sections/Compliance";
import { ResourcesPreview } from "@/components/sections/ResourcesPreview";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";

/** Homepage showcase order; unpublished services are skipped and the list is topped up. */
const FEATURED = [
  "payroll-outsourcing",
  "employer-of-record",
  "recruitment",
  "hr-outsourcing",
  "staff-outsourcing",
  "managed-services",
  "managed-payroll",
  "payroll-compliance",
];

export async function generateMetadata(): Promise<Metadata> {
  const site = getSite(await siteParam());
  return pageMetadata(site, { title: site.seo.defaultTitle, absoluteTitle: true, description: site.seo.description, path: "/" });
}

export default async function HomePage() {
  const site = getSite(await siteParam());
  const available = visibleServices(site);
  const featured = FEATURED.map((slug) => available.find((s) => s.slug === slug))
    .filter((s) => !!s)
    .slice(0, 6);
  const articles = site.resources.filter((r) => isVisible(r.status)).slice(0, 3);

  return (
    <>
      <Hero site={site} />
      <Stats site={site} />
      <ServiceGrid
        services={featured}
        title={`Workforce services for ${site.country.inSentence}`}
        intro="Start with payroll, then add the HR and staffing services your business needs as it grows."
      />
      <WhyUs heading={site.why.heading} intro={site.why.intro} items={site.why.items} />
      <Process heading={site.process.heading} intro={site.process.intro} steps={site.process.steps} />
      <Industries industries={site.industries} intro="Every industry pays its people differently. We configure payroll around the way yours works." />
      <Compliance content={site.compliance} countryName={site.country.shortName} />
      {/* Testimonials and case studies: none approved yet — section intentionally omitted. */}
      <ResourcesPreview articles={articles} />
      <FaqSection faqs={site.faqs.slice(0, 5)} intro={`Common questions about outsourcing payroll in ${site.country.inSentence}.`} moreHref={site.pages.faqs.path} />
      <FinalCta proposalHref={site.pages.proposal.path} contactHref={site.pages.contact.path} />
    </>
  );
}
