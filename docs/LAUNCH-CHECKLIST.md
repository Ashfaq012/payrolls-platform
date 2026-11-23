# Deployment and launch checklist

## Hosting (recommended: Vercel)

1. Import the repository. The framework is detected automatically.
2. Add the domains `payrollslanka.com` and `www.payrollslanka.com`. The proxy redirects `www` to the apex with a 308.
3. Production environment variables (see `.env.example`):
   - `ALLOW_INDEXING=true` (production only)
   - `LEADS_WEBHOOK_URL`, `LEADS_WEBHOOK_SECRET`. Required: production refuses to accept leads without them.
   - `TURNSTILE_SECRET_KEY`, `NEXT_PUBLIC_TURNSTILE_SITE_KEY` (recommended)
   - `NEXT_PUBLIC_ENABLE_ANALYTICS=true` once the Plausible site exists
4. Preview and staging: set `DEFAULT_SITE=lanka` and `SHOW_DRAFTS=true` to review drafts. Leave `ALLOW_INDEXING` unset.
5. The in-memory rate limiter is per instance. Before high traffic, move it to a shared store (Upstash Redis or the database).

## DNS (per domain)

| Record | Name | Value |
| --- | --- | --- |
| A | `@` | Host's apex IP (Vercel: `76.76.21.21`; confirm in the dashboard) |
| CNAME | `www` | Host's CNAME target (Vercel shows it per project) |

Confirm the exact values in the hosting dashboard when you add each domain. Repeat for each country domain when its site goes live.

## Pre-launch

- [ ] Every item in `CONTENT-APPROVALS.md` resolved, or deliberately left as a draft
- [ ] Contact details approved and `contact.approved = true`
- [ ] Legal pages reviewed, and their `status` moved from `review` to `published`
- [ ] Webhook receives a test lead, and the CRM or inbox routes `LK-PAYROLL` correctly
- [ ] `npm run lint`, `npx tsc --noEmit` and `npm run build` pass
- [ ] `robots.txt` allows crawling and lists the sitemap on production only
- [ ] `sitemap.xml` lists only published pages
- [ ] Unknown paths and draft pages return HTTP 404
- [ ] Lighthouse on mobile: performance, accessibility, best practices and SEO all at 90+
- [ ] Keyboard pass: skip link, mega menus (Esc closes), mobile menu, FAQ, form errors
- [ ] Reduced-motion pass with the OS setting enabled
- [ ] Submit the sitemap in Google Search Console

## Post-launch

- [ ] Review compliance content after each Budget or tax change, and update `lastReviewed`
- [ ] Track proposal conversions by `utm_campaign` in the CRM
