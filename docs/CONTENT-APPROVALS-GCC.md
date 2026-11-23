# Content approval register — Payroll Arabia (GCC)

Nothing on this list goes live as fact until the named owner signs it off. Update the matching flag in `src/sites/arabia/` when an item is approved.

## The most important open question

**Delivery model outside Saudi Arabia and the UAE.** The site says payroll is offered in all six GCC countries. Before launch, confirm how Qatar, Kuwait, Bahrain and Oman are delivered (own entities, partners or both). If any country isn't covered yet, remove it from the hero, the GCC Payroll page, the FAQ and `country.areaServed`.

## Brand and company

| Item | Current state | Needed | Where |
| --- | --- | --- | --- |
| Brand name "Payroll Arabia" (domain payrollarabia.com) | Used as text wordmark | Confirm the official name and spelling | `arabia/index.ts → brand` |
| Logo | Placeholder text wordmark | Approved logo files (SVG) | `components/layout/Brand.tsx` |
| Operating entity for the website | Placeholder in legal pages | Which group company operates the site, and where | `contact.legalEntityName`, `arabia/pages.ts` |
| Email, phone, address, hours | Hidden (`contact.approved: false`) | Confirmed regional contact details | `arabia/index.ts → contact` |
| About page | Draft | Approved copy, including the country delivery model | `arabia/pages.ts → about` |
| Arabic version | Not built (English only) | Decide whether to launch bilingual | `arabia/index.ts → languages` |

## Claims

| Claim | State | Evidence needed |
| --- | --- | --- |
| Coverage of all six GCC countries | Live | See the open question above |
| "Sister operations in India and Sri Lanka" (Why Us) | Live | Confirm it's OK to say publicly |
| Group stats | Not shown live | Approval and counting method |

## Services

| Service | Status | Open question |
| --- | --- | --- |
| GCC Payroll, Payroll Outsourcing, Managed Payroll, Payroll Compliance | Published | Delivery model per country; scope wording |
| Recruitment | Published | Licences held in each country |
| HR Outsourcing | Published | Scope per country |
| Staff Outsourcing | Draft | Labour supply licences per country |
| Employer of Record | Draft | Employing entities or partners, licences and terms per country |

## Compliance content

All figures are `verified: false` and `compliance.lastReviewed` is `null`. Qualified professionals in each country need to:

- [ ] Saudi Arabia and UAE: keep consistent with the dedicated country sites (`saudia/`, `emirates/`)
- [ ] Qatar: confirm WPS, the three-week end-of-service minimum, minimum wage and GRSIA wording
- [ ] Kuwait: confirm PIFSS and the indemnity rates and cap
- [ ] Bahrain: confirm SIO contributions and how expatriate end-of-service is now funded
- [ ] Oman: confirm the Social Protection Fund coverage, current expatriate contributions and end-of-service wording
- [ ] Check every source URL
- [ ] Set `lastReviewed` (ISO date) on the compliance block and on each guide
- [ ] Review the two draft guides in `arabia/resources.ts`, then publish them and the resources page

## Legal

The privacy policy, terms and cookie policy are `review` drafts. Because the site is regional, the applicable data protection law and governing law depend on which entity operates it; both are left as placeholders. They need legal review.

## Overlap with the country sites

Saudi Arabia and the UAE have dedicated sites. This site covers the region and the four countries without their own site. Keep page topics distinct (regional and multi-country here, single-country there) so the sites don't compete in search.
