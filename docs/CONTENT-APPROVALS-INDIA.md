# Content approval register — Payrolls India

Nothing on this list goes live as fact until the named owner signs it off. Update the matching flag in `src/sites/india/` when an item is approved.

## Brand and company

| Item | Current state | Needed | Where |
| --- | --- | --- | --- |
| Brand name "Payrolls India" | Used as text wordmark | Confirm the official name and spelling | `india/index.ts → brand` |
| Logo | Placeholder text wordmark | Approved logo files (SVG) | `components/layout/Brand.tsx` |
| Endorsement line | Off (`endorsement: null`) | Decide whether, and where, to show it | `india/index.ts → brand.endorsement` |
| Legal entity name, CIN, registered office | Placeholder in legal pages | Registered Indian entity details | `contact.legalEntityName`, `india/pages.ts` |
| Email, phone, address, hours | Hidden (`contact.approved: false`) | Confirmed details | `india/index.ts → contact` |
| About page background, leadership, group relationship | Draft | Approved copy | `india/pages.ts → about` |

## Claims

| Claim | State | Evidence needed |
| --- | --- | --- |
| "Million+ payrolls processed", "1000+ trusted clients" | Not shown live | Whether group figures may be used on the India site, and the counting method |
| "Sister operations in Sri Lanka, with Saudi Arabia and the UAE planned" (Why Us) | Live | Confirm it's OK to say publicly |
| No "#1" headline | None proposed for India | — |
| Testimonials, case studies, client logos | None | Written client permission for each item |

## Services

| Service | Status | Open question |
| --- | --- | --- |
| Payroll Outsourcing, Managed Payroll, Payroll Compliance | Published | Confirm scope wording |
| Recruitment, HR Outsourcing, Staff Outsourcing | Published | Confirm they're offered under this brand. Staff Outsourcing: employing entity and contract labour licensing |
| Employer of Record | Draft | Indian employing entity, contract templates, liability terms, permanent establishment position |
| Remote Staffing, Managed Services | Draft | Positioning, scope, delivery model |

## Compliance content

All figures are `verified: false` and `compliance.lastReviewed` is `null`. A qualified Indian payroll professional or chartered accountant needs to:

- [ ] Confirm PF rates, the EPS split and the ₹15,000 wage ceiling, and the coverage threshold under the Code on Social Security
- [ ] Confirm ESI rates and the ₹21,000 wage threshold
- [ ] Confirm TDS wording against the Income-tax Act, 2025 (in force from 1 April 2026), including current form names
- [ ] Confirm gratuity basis, the ₹20 lakh ceiling and the one-year rule for fixed-term employees
- [ ] Confirm the labour codes summary and the 50% wage-definition rule against notified central and state rules
- [ ] Replace the generic india.gov.in link on the PT/LWF topic with better sources, or keep it deliberately
- [ ] Check every source URL (epfindia.gov.in, esic.gov.in, incometaxindia.gov.in, tdscpc.gov.in, labour.gov.in)
- [ ] Set `lastReviewed` (ISO date) on the compliance block and on each guide
- [ ] Review the four draft guides in `india/resources.ts`, then publish them and the resources page

## Legal

The privacy notice, terms and cookie policy are `review` drafts written with India's Digital Personal Data Protection Act, 2023 and its rules in mind. They contain bracketed placeholders for the entity, hosting location and transfers outside India, retention, grievance officer and jurisdiction. They need legal review.

## Imagery

No photography is used. If photography is added, record the licence for every image.
