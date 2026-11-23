import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/sites/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

export function ServiceGrid({
  services,
  eyebrow = "What we do",
  title,
  intro,
  id = "services",
}: {
  services: Service[];
  eyebrow?: string;
  title: string;
  intro?: string;
  id?: string;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="py-24 lg:py-32">
      <Container>
        <SectionHeading id={`${id}-title`} eyebrow={eyebrow} title={title} intro={intro} />
        <Stagger as="ul" className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <StaggerItem as="li" key={s.slug}>
              <ServiceCard service={s} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

const GROUP_LABEL: Record<Service["group"], string> = {
  payroll: "Payroll",
  eor: "Employment",
  recruitment: "Recruitment",
  services: "Workforce",
  solutions: "Solutions",
};

export function ServiceCard({ service: s }: { service: Service }) {
  return (
    <Link
      href={`/${s.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-7 transition-[box-shadow,border-color] duration-300 ease-out hover:border-ink/20 hover:shadow-card"
    >
      <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100 rtl:origin-right" />
      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{GROUP_LABEL[s.group]}</span>
      <h3 className="relative mt-3 flex items-center gap-2 text-xl font-bold">
        {s.name}
        {s.status === "draft" && (
          <span className="rounded-full bg-warn-soft px-1.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-wide text-warn">Draft</span>
        )}
      </h3>
      <p className="relative mt-3 flex-1 leading-relaxed text-body">{s.summary}</p>
      <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
        Learn more
        <ArrowUpRight aria-hidden className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
