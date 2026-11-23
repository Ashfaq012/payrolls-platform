# Content approval register — Payrolls Lanka

Nothing on this list goes live as fact until the named owner signs it off. Update the matching flag in `src/sites/lanka/` when an item is approved.

## Brand and company

| Item | Current state | Needed | Where |
| --- | --- | --- | --- |
| Brand name "Payrolls Lanka" | Used as text wordmark | Confirm the official name and spelling | `lanka/index.ts → brand` |
| Logo | Placeholder geometric mark plus text | Approved logo files (SVG) | `components/layout/Brand.tsx` |
| Endorsement line (e.g. "A Manpower Holdings Company") | Off (`endorsement: null`) | Decide whether, and where, to show it | `lanka/index.ts → brand.endorsement` |
| Legal entity name | Placeholder in legal pages; footer shows the brand | Registered entity name and number | `contact.legalEntityName`, `lanka/pages.ts` |
| Email, phone, address, hours | Hidden (`contact.approved: false`) | Confirmed details | `lanka/index.ts → contact` |
| About page background, leadership, group relationship | Draft | Approved copy | `lanka/pages.ts → about` |

## Claims

| Claim | State | Evidence needed |
| --- | --- | --- |
| "#1 Payroll Outsourcing Partner in Sri Lanka" | Off; hero uses the safe headline | An independent ranking or source, plus legal sign-off |
| "Million+ payrolls processed" | Not shown live | Count, counting method, and whether it's group or brand data |
| "1000+ trusted clients" | Not shown live | Client count and definition |
| "Sister operations planned for India, Saudi Arabia and the UAE" (Why Us) | Live | Confirm it's OK to say publicly |
| Testimonials, case studies, client logos | None, and the section is omitted | Written client permission for each item |

## Services

| Service | Status | Open question |
| --- | --- | --- |
| Payroll Outsourcing, Managed Payroll, Payroll Compliance | Published | Confirm scope wording |
| Recruitment, HR Outsourcing, Staff Outsourcing | Published | Confirm they're offered under this brand. Staff Outsourcing: name the employing entity |
| Employer of Record | Draft | Sri Lankan employing entity, contract templates, liability terms |
| Remote Staffing, Managed Services | Draft | Positioning, scope, delivery model |

## Compliance content

The five tagged figures in `lanka/compliance.ts` were checked against official sources on 2026-11-23 and marked `verified: true`. `compliance.lastReviewed` records that source-check date, not professional legal sign-off. Direct evidence links are retained beside each topic on the website.

- [x] Check EPF figures against CBSL's contribution guidance
- [x] Check ETF figures against the ETF Board's employer guidance
- [x] Check and clarify gratuity eligibility and calculation against the Department of Labour's Act
- [x] Replace topic homepage links with direct official guidance, including IRD's APIT overview
- [x] Record the compliance block's source-check date
- [x] Check all three resource guides against official sources and record source-review dates (2026-11-23); replace generic source links with direct guidance
- [ ] Obtain professional/editorial approval of the broader compliance copy and the source-checked draft guides
- [ ] Review the three draft guides in `lanka/resources.ts`, then set `status: "published"` and the resources page to `published`

## Legal

The privacy policy, terms and cookie policy are `review` drafts written with Sri Lanka's PDPA (No. 9 of 2022) in mind. They contain bracketed placeholders for the entity, hosting location, cross-border transfers, retention period, DPO contact and liability clause. They need legal review.

## Imagery

No photography is used yet; the visuals are CSS and SVG compositions. If photography is added, record the licence for every image (source, licence type, expiry).
