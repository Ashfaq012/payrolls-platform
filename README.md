# Payrolls Platform

One Next.js codebase that serves the Payrolls country websites. Each domain gets its own content, SEO and lead routing. **Sri Lanka (PayrollsLanka.com) is the reference site and the only live configuration so far.**

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000 or http://lanka.localhost:3000. `*.localhost` resolves without editing `/etc/hosts`. Drafts are visible in development, marked with amber banners and "Draft" tags.

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## How it works

| Piece | Where |
| --- | --- |
| Host → site resolution (allow-list, `www` redirect, 404 for unknown hosts and unpublished paths) | `src/proxy.ts`, `src/sites/hosts.ts`, `src/sites/routes.ts` |
| Site configuration and content (typed) | `src/sites/<site>/` |
| Draft / review / published visibility | `src/sites/visibility.ts` |
| Pages (rendered per site under the `[site]` root segment) | `src/app/[site]/` |
| Shared sections and design system | `src/components/` |
| SEO helpers (metadata, canonical, JSON-LD) | `src/lib/seo.ts` |
| Proposal form and secure lead handling | `src/components/forms/`, `src/lib/leads/` |

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md), [docs/CONTENT-APPROVALS.md](docs/CONTENT-APPROVALS.md) and [docs/LAUNCH-CHECKLIST.md](docs/LAUNCH-CHECKLIST.md).
