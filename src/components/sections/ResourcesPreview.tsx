import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ResourceArticle } from "@/sites/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

export function ResourcesPreview({ articles, title = "Payroll compliance guides" }: { articles: ResourceArticle[]; title?: string }) {
  if (!articles.length) return null;
  return (
    <section aria-labelledby="resources-title" className="bg-white py-24 lg:py-32">
      <Container>
        <SectionHeading
          id="resources-title"
          eyebrow="Resources"
          title={title}
          intro="Practical guides with links to the official sources, so you can check every requirement for yourself."
        />
        <Stagger as="ul" className="mt-14 grid gap-5 md:grid-cols-3">
          {articles.map((a) => (
            <StaggerItem as="li" key={a.slug}>
              <ArticleCard article={a} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

export function ArticleCard({ article: a }: { article: ResourceArticle }) {
  return (
    <Link
      href={`/resources/${a.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-line bg-canvas p-7 transition-[background-color,border-color] duration-300 hover:border-ink/20 hover:bg-white"
    >
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand">
        {a.type === "guide" ? "Guide" : a.type === "case-study" ? "Case study" : "Article"}
        <span className="text-muted">· {a.readingMinutes} min read</span>
        {a.status === "draft" && (
          <span className="rounded-full bg-warn-soft px-1.5 py-0.5 text-[0.6rem] font-bold text-warn">Draft</span>
        )}
      </div>
      <h3 className="mt-4 text-xl font-bold leading-snug group-hover:text-brand">{a.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-body">{a.excerpt}</p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
        Read guide
        <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
