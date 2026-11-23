"use client";

import { Plus } from "lucide-react";
import { useId, useState } from "react";
import type { Faq as FaqItem } from "@/sites/types";

export function FaqList({ faqs, defaultOpen = 0 }: { faqs: FaqItem[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const baseId = useId();

  return (
    <ul className="divide-y divide-line rounded-3xl border border-line bg-white px-6 shadow-card sm:px-8">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;
        return (
          <li key={f.q}>
            <h3 className="text-base sm:text-lg">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-start font-display font-semibold text-ink transition-colors hover:text-brand"
              >
                {f.q}
                <span
                  aria-hidden
                  className={`grid size-8 shrink-0 place-items-center rounded-full transition-[background-color,color,transform] duration-300 ${
                    isOpen ? "rotate-45 bg-brand text-white" : "bg-soft text-brand"
                  }`}
                >
                  <Plus className="size-4" />
                </span>
              </button>
            </h3>
            {/* Answers stay in the DOM (crawlable); closed panels are inert and collapsed. */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!isOpen}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out-expo ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl pb-6 leading-relaxed text-body">{f.a}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
