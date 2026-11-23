"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import type { ProcessStep } from "@/sites/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

/** Four-step process with a progress line that fills as the section scrolls through view. */
export function Process({ heading, intro, steps }: { heading: string; intro: string; steps: ProcessStep[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const scale = reduce ? 1 : progress;

  return (
    <section aria-labelledby="process-title" className="relative overflow-hidden bg-canvas py-24 lg:py-32">
      <Container>
        <SectionHeading id="process-title" eyebrow="Our process" title={heading} intro={intro} align="center" />

        <div ref={ref} className="relative mt-16">
          {/* Desktop: horizontal line */}
          <div aria-hidden className="absolute start-[12.5%] end-[12.5%] top-7 hidden h-0.5 rounded-full bg-line lg:block">
            <motion.div style={{ scaleX: scale }} className="h-full origin-left rounded-full bg-brand rtl:origin-right" />
          </div>
          {/* Mobile: vertical line */}
          <div aria-hidden className="absolute bottom-6 start-7 top-6 w-0.5 rounded-full bg-line lg:hidden">
            <motion.div style={{ scaleY: scale }} className="h-full w-full origin-top rounded-full bg-brand" />
          </div>

          <Stagger as="ol" className="relative grid gap-10 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, i) => (
              <StaggerItem as="li" key={step.title} className="relative flex gap-6 lg:flex-col lg:items-center lg:text-center">
                <span className="relative z-10 grid size-14 shrink-0 place-items-center rounded-full bg-canvas font-display text-lg font-extrabold text-brand ring-1 ring-line">
                  {i + 1}
                </span>
                <div className="lg:mt-6">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-body">{step.body}</p>
                  <ul className="mt-4 space-y-1.5 text-sm text-muted lg:inline-block lg:text-start">
                    {step.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
