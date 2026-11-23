import type { SiteKey } from "./hosts";
import { india } from "./india";
import { lanka } from "./lanka";
import type { SiteConfig } from "./types";

/** Pure data registry (no Next.js imports) so the proxy can use it too. */
export const SITES: Partial<Record<SiteKey, SiteConfig>> = { lanka, india };
