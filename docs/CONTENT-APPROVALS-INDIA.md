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

Official-source review completed on **2026-11-23** for all six compliance topics, all four resource guides, service explanations, FAQs and legal information. The remaining numeric cards are source-verified; their verification tags are removed. Review dates record this source check, not accountant or legal approval.

| Area | Evidence and correction |
| --- | --- |
| PF | EPFO contribution sheet: 12% usual rate, 10% exceptions, EPS eligibility and additional charges. Ministry FAQs dated 25 October 2026, questions 111-113, refer to a Rs 25,000 EPF ceiling; the older EPFO sheet still says Rs 15,000. Removed the unsupported current EPS ceiling card rather than equating EPF and EPS. Notification/effective-date and EPS transition checks remain necessary for an actual payroll. |
| ESI | ESIC publication: 0.75% employee, 3.25% employer, Rs 21,000 ordinary entry ceiling, Rs 25,000 disability ceiling, average daily wage exemption up to Rs 176. |
| TDS | Income Tax Department transition guidance, Form 138 manual and notified 2026 Rules: section 392, Form 138 quarterly statement, Form 130 certificate, Form 124 evidence. Prior periods retain their applicable forms. |
| PT/LWF | Article 276 amendment confirms Rs 2,500 annual PT cap. Maharashtra tax law and Labour Welfare Board replace the generic national portal link. State examples are not represented as a nationwide schedule. |
| Gratuity / codes | Ministry FAQs confirm eligibility exceptions, one-year fixed-term rule, usual monthly-rated 15/26 formula, Rs 20 lakh cap and 30-day payment deadline. Clarified the 50% add-back rule rather than a mandatory basic-pay/CTC ratio. |
| Privacy | MeitY G.S.R. 843(E): core DPDP processing duties and sections 11-17 commence eighteen months after November 2025 Gazette publication; they are not described as already effective in November 2026. |

Direct evidence links are maintained in src/sites/india/sources.ts and displayed on the relevant compliance topics, guides and privacy page. Some official older documents contain superseded amounts: use them only for the specific unchanged provisions identified above.

- [ ] Qualified professional review of establishment-specific applicability, state notifications and PF/EPS transition before operational use.
- [ ] Editorial approval to publish the four guides and resources index (existing draft status retained).
- [ ] Management approval for business claims, services and legal-policy placeholders listed elsewhere in this register.

## Legal

The privacy notice, terms and cookie policy are `review` drafts written with India's Digital Personal Data Protection Act, 2023 and its rules in mind. They contain bracketed placeholders for the entity, hosting location and transfers outside India, retention, grievance officer and jurisdiction. They need legal review.

## Imagery

No photography is used. If photography is added, record the licence for every image.
