import { AlertTriangle } from "lucide-react";
import type { ContentStatus } from "@/sites/types";

const COPY: Record<Exclude<ContentStatus, "published">, string> = {
  draft: "Draft — pending management approval. Not visible on the live site.",
  review: "Pending legal review. This page is not indexed by search engines until it is approved.",
};

/** Visible banner for non-published content, so reviewers can't mistake drafts for final copy. */
export function StatusNotice({ status, note }: { status: ContentStatus; note?: string }) {
  if (status === "published") return null;
  return (
    <div role="note" className="border-b border-amber-200 bg-warn-soft text-warn">
      <div className="mx-auto flex max-w-7xl items-start gap-2 px-4 py-2.5 text-sm sm:px-6 lg:px-8">
        <AlertTriangle aria-hidden className="mt-0.5 size-4 shrink-0" />
        <p>
          <strong className="font-semibold">{COPY[status]}</strong>
          {note && <span className="ms-1">{note}</span>}
        </p>
      </div>
    </div>
  );
}

export function VerifyBadge({ label = "Verify before launch" }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-warn-soft px-2 py-0.5 text-[0.7rem] font-semibold uppercase tracking-wide text-warn">
      <AlertTriangle aria-hidden className="size-3" />
      {label}
    </span>
  );
}
