import { loadStaticPage, staticPageMetadata } from "@/lib/pages";
import { PageHero } from "@/components/sections/PageHero";
import { Industries } from "@/components/sections/Industries";
import { FinalCta } from "@/components/sections/FinalCta";
import { ButtonLink } from "@/components/ui/Button";

export const generateMetadata = () => staticPageMetadata("industries");

export default async function IndustriesPage() {
  const { site, page } = await loadStaticPage("industries");
  return (
    <>
      <PageHero site={site} eyebrow={page.eyebrow} title={page.h1} intro={page.intro} trail={[{ name: "Industry Solutions", path: page.path }]}>
        <ButtonLink href={site.pages.proposal.path} variant="accent" size="lg" arrow>
          Get a Free Proposal
        </ButtonLink>
      </PageHero>
      <Industries industries={site.industries} headingLevel="none" />
      <FinalCta proposalHref={site.pages.proposal.path} contactHref={site.pages.contact.path} />
    </>
  );
}
