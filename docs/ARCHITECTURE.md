# Architecture

## Request flow

```
payrollslanka.com/payroll-outsourcing
        │
        ▼
src/proxy.ts ── resolveHost() ── allow-listed host? ── no ──► 404
        │                         www.? ──► 308 to apex
        │ yes (site = "lanka")
        ▼
routablePaths("lanka") has "/payroll-outsourcing"? ── no ──► rewrite to unmatched path ──► real 404
        │ yes
        ▼
rewrite ──► /lanka/payroll-outsourcing ──► app/[site]/[slug]/page.tsx (prerendered)
```

- `[site]` is the **root segment**: `app/[site]/layout.tsx` is the root layout, and server components read the site with `next/root-params`, so nothing is prop-drilled.
- Pages are statically prerendered per site (`generateStaticParams`). Cache Components is on.
- The proxy's path allow-list exists because Cache Components serves a fallback shell with HTTP 200 for unknown dynamic params. Without it, drafts and typos would be soft 404s.
- No IP or geo redirects. Visitors pick a country in the selector.

## Content model

`SiteConfig` (`src/sites/types.ts`) holds identity, languages, currency, contacts, SEO, analytics, lead routing, hero, stats, services, industries, compliance, FAQs, resources, static pages and legal documents.

Every content item has a `status`:

| Status | Rendered | Indexed | Banner |
| --- | --- | --- | --- |
| `published` | everywhere | yes, when `ALLOW_INDEXING=true` | none |
| `review` | everywhere | no | "Pending legal review" |
| `draft` | only with drafts enabled (dev, or `SHOW_DRAFTS=true`) | no | "Draft — pending approval" |

Statistics and claims have their own `approved` flags. Unapproved stats never render on live pages, and the "#1" hero claim stays off until approved. Compliance figures carry `verified: false` and show a "Verify with official source" badge.

### Path to a CMS

Content is typed TypeScript for now, so the structure can be reviewed in pull requests before a CMS is chosen. The types map one-to-one onto CMS collections (Sites, Services, Pages, FAQs, Resources, Stats, Legal). The recommended next step is **Payload CMS embedded in this app**, because:

- documents can be scoped by site with per-country editor roles, so the India team can't see Sri Lanka drafts
- it has draft/published versions
- the admin panel isn't exposed publicly

Pages already read through `getSite()`, so swapping the source is local to `src/sites/`.

## Adding a country

1. Create `src/sites/<key>/` with a `SiteConfig`. Don't copy Sri Lanka's copy: write content for that market.
2. Register it in `src/sites/registry.ts` and add the key to `LIVE_SITE_KEYS` in `src/sites/hosts.ts`.
3. For an RTL language, add a `Language` with `dir: "rtl"` and load IBM Plex Sans Arabic as `--font-arabic` in the layout.
4. When a page has a genuine equivalent on another site, add it to `alternates.languages` in `src/lib/seo.ts` for hreflang.
5. Add the domain in hosting and DNS (see the launch checklist).

## Lead handling

- The form validates with the same Zod schema on the client and in the server action (`src/lib/leads/`).
- The site is derived from the Host header through the same allow-list as the proxy, never from a form field.
- Anti-abuse:
  - a honeypot field
  - a minimum fill time
  - a per-IP rate limit (in memory; swap for Redis or a database on multi-instance hosting)
  - optional Cloudflare Turnstile
- Each lead stores the source host, the site routing key, the service and campaign attribution: first touch, or the latest tagged campaign link, kept in sessionStorage with no cookies.
- Delivery goes through `deliverLead()`. A signed webhook (`LEADS_WEBHOOK_URL`) is the integration boundary for the future Manpower CRM. In development, leads are written to `.data/leads.jsonl`. In production with no webhook configured, delivery fails loudly rather than dropping leads.
- The form doesn't accept files, and it tells visitors not to send salaries, ID numbers or payroll files.

## Motion

- Motion for React only (no GSAP). `MotionConfig reducedMotion="user"` plus a global CSS reduced-motion rule.
- Hero and page-hero entrances are CSS keyframes, so the H1 paints from server HTML (good for LCP).
- Section reveals (`Reveal`, `Stagger`), count-up stats, hero parallax, a sticky storytelling panel (Why Us), a scroll-linked process line and grid-row FAQ expansion. FAQ answers stay in the DOM so they're crawlable.
- No scroll-jacking. Scrolling is native everywhere.
