import { loadStaticPage, staticPageMetadata } from "@/lib/pages";
import { isVisible } from "@/sites";
import { PageHero } from "@/components/sections/PageHero";
import { ArticleCard } from "@/components/sections/ResourcesPreview";
import { FinalCta } from "@/components/sections/FinalCta";
import { Container } from "@/components/ui/Container";
import { StatusNotice } from "@/components/ui/StatusNotice";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

export const generateMetadata = () => staticPageMetadata("resources");

export default async function ResourcesPage() {
  const { site, page } = await loadStaticPage("resources");
  const articles = site.resources.filter((r) => isVisible(r.status));
  return (
    <>
      <StatusNotice status={page.status} note="Guides need expert review and a last-reviewed date before publishing." />
      <PageHero site={site} eyebrow={page.eyebrow} title={page.h1} intro={page.intro} trail={[{ name: "Resources", path: page.path }]} />
      <section className="py-24 lg:py-28">
        <Container>
          <Stagger as="ul" className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <StaggerItem as="li" key={a.slug}>
                <ArticleCard article={a} />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>
      <FinalCta proposalHref={site.pages.proposal.path} contactHref={site.pages.contact.path} />
    </>
  );
}
