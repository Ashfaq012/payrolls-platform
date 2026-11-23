"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const formatter = new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 });
const full = new Intl.NumberFormat("en");

function format(n: number, compact: boolean) {
  return compact ? formatter.format(n) : full.format(Math.round(n));
}

/** Counts up once when scrolled into view. Server HTML contains the final value. */
export function Counter({ value, suffix = "", className }: { value: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();
  const compact = value >= 100_000;
  const [display, setDisplay] = useState(() => format(value, compact));

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(format(v, compact)),
    });
    return () => controls.stop();
  }, [inView, reduce, value, compact]);

  return (
    <span ref={ref} className={className}>
      <span aria-hidden>
        {display}
        {suffix}
      </span>
      <span className="sr-only">
        {format(value, compact)}
        {suffix}
      </span>
    </span>
  );
}
