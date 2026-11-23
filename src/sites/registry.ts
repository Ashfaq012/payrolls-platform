import type { SiteKey } from "./hosts";
import { emirates } from "./emirates";
import { india } from "./india";
import { lanka } from "./lanka";
import { saudia } from "./saudia";
import type { SiteConfig } from "./types";

/** Pure data registry (no Next.js imports) so the proxy can use it too. */
export const SITES: Partial<Record<SiteKey, SiteConfig>> = { lanka, india, saudia, emirates };
