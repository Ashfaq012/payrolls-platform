# Content approval register — Payroll Saudia

Nothing on this list goes live as fact until the named owner signs it off. Update the matching flag in `src/sites/saudia/` when an item is approved.

## Brand and company

| Item | Current state | Needed | Where |
| --- | --- | --- | --- |
| Brand name "Payroll Saudia" (domain payrollsaudia.com) | Used as text wordmark | Confirm the official name and spelling | `saudia/index.ts → brand` |
| Logo | Placeholder text wordmark | Approved logo files (SVG) | `components/layout/Brand.tsx` |
| Endorsement line | Off (`endorsement: null`) | Decide whether, and where, to show it | `saudia/index.ts → brand.endorsement` |
| Legal entity name, CR number, licences | Placeholder in legal pages | Registered Saudi entity details | `contact.legalEntityName`, `saudia/pages.ts` |
| Email, phone, address, hours | Hidden (`contact.approved: false`) | Confirmed details | `saudia/index.ts → contact` |
| About page background, leadership, group relationship | Draft | Approved copy | `saudia/pages.ts → about` |
| Arabic version | Not built (English only) | Decide whether to launch bilingual; needs language routing and an RTL font | `saudia/index.ts → languages` |

## Claims

| Claim | State | Evidence needed |
| --- | --- | --- |
| "Million+ payrolls processed", "1000+ trusted clients" | Not shown live | Whether group figures may be used on the Saudi site, and the counting method |
| "Sister operations in India and Sri Lanka, with the UAE planned" (Why Us) | Live | Confirm it's OK to say publicly |
| Testimonials, case studies, client logos | None | Written client permission for each item |

## Services

| Service | Status | Open question |
| --- | --- | --- |
| Payroll Outsourcing, Managed Payroll, Payroll Compliance | Published | Confirm scope wording |
| Recruitment | Published | Confirm it's offered under this brand, licences held, and whether overseas recruitment is in scope |
| HR Outsourcing | Published | Which Qiwa / GOSI / Mudad transactions the team performs for clients, and under what authorisations |
| Staff Outsourcing | Draft | Manpower supply needs a specific Ministry licence |
| Employer of Record | Draft | Saudi employing entity and licences, contract templates, liability terms |
| Managed Services | Draft | Scope and delivery model |

## Compliance content

All figures are `verified: false` and `compliance.lastReviewed` is `null`. A qualified Saudi payroll or labour-law professional needs to:

- [ ] Confirm GOSI rates for existing Saudi members, the phased rates for new entrants under the July 2024 Social Insurance Law, SANED, occupational hazards, and the contribution minimum and ceiling
- [ ] Confirm WPS / Mudad wording and current compliance thresholds
- [ ] Confirm end-of-service rates and resignation reductions, including any effect of the February 2025 Labour Law amendments
- [ ] Confirm overtime, annual leave and Ramadan hours wording
- [ ] Confirm the medical insurance summary with the Council of Health Insurance
- [ ] Check every source URL (gosi.gov.sa, hrsd.gov.sa, mudad.com.sa, qiwa.sa, chi.gov.sa)
- [ ] Set `lastReviewed` (ISO date) on the compliance block and on each guide
- [ ] Review the three draft guides in `saudia/resources.ts`, then publish them and the resources page

## Legal

The privacy policy, terms and cookie policy are `review` drafts written with Saudi Arabia's Personal Data Protection Law in mind. They contain bracketed placeholders for the entity, hosting location and transfers outside the Kingdom, retention, data protection contact and dispute forum. They need legal review, including whether an Arabic version is required.

## Imagery

No photography is used. If photography is added, record the licence for every image.
