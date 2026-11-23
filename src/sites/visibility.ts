import type { ContentStatus } from "./types";

/** Drafts render in development, or anywhere SHOW_DRAFTS=true (e.g. a review deployment). */
export function draftsEnabled(): boolean {
  return process.env.NODE_ENV === "development" || process.env.SHOW_DRAFTS === "true";
}

export function isVisible(status: ContentStatus): boolean {
  return status !== "draft" || draftsEnabled();
}

export function isIndexable(status: ContentStatus): boolean {
  return status === "published";
}
