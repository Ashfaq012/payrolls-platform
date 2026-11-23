"use client";

import { AnimatePresence, motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { FeatureItem } from "@/sites/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Sticky storytelling on large screens: the left panel stays pinned and
 * updates as each point scrolls past. Native scrolling throughout — no scroll-jacking.
 * Small screens get a simple stacked list.
 */
export function WhyUs({ heading, intro, items }: { heading: string; intro: string; items: FeatureItem[] }) {
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <section aria-labelledby="why-title" className="relative bg-white py-24 lg:py-32">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <SectionHeading id="why-title" eyebrow="Why choose us" title={heading} intro={intro} />

          <div aria-hidden className="relative mt-12 hidden aspect-[5/4] overflow-hidden rounded-2xl bg-navy lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 flex flex-col justify-between p-10"
              >
                <p className="font-display text-[7rem] font-extrabold leading-none tabular-nums text-accent">
                  {String(active + 1).padStart(2, "0")}
                </p>
                <div>
                  <p className="font-display text-3xl font-bold text-white">{current.title}</p>
                  <p className="mt-3 max-w-sm text-white/60">{current.body}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <ol className="lg:py-[10vh]">
          {items.map((item, i) => (
            <WhyItem key={item.title} item={item} index={i} active={active === i} onActive={() => setActive(i)} />
          ))}
        </ol>
      </Container>
    </section>
  );
}

function WhyItem({ item, index, active, onActive }: { item: FeatureItem; index: number; active: boolean; onActive: () => void }) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });
  useEffect(() => {
    if (inView) onActive();
  }, [inView, onActive]);

  return (
    <li ref={ref} className="lg:flex lg:min-h-[38vh] lg:items-center">
      <Reveal className="w-full">
        <div
          className={`grid grid-cols-[2.5rem_1fr] gap-4 border-t py-6 transition-[border-color,opacity] duration-500 sm:py-8 ${
            active ? "border-ink lg:opacity-100" : "border-line lg:opacity-40"
          }`}
        >
          <span className="pt-1 font-display text-sm font-bold tabular-nums text-brand">{String(index + 1).padStart(2, "0")}</span>
          <div>
            <h3 className="text-xl font-bold sm:text-2xl">{item.title}</h3>
            <p className="mt-3 leading-relaxed text-body">{item.body}</p>
          </div>
        </div>
      </Reveal>
    </li>
  );
}
