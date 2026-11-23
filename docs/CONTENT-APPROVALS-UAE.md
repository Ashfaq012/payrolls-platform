# Content approval register — Payroll Emirates

Nothing on this list goes live as fact until the named owner signs it off. Update the matching flag in `src/sites/emirates/` when an item is approved.

## Brand and company

| Item | Current state | Needed | Where |
| --- | --- | --- | --- |
| Brand name "Payroll Emirates" (domain payrollemirates.com) | Used as text wordmark | Confirm the official name and spelling | `emirates/index.ts → brand` |
| Logo | Placeholder text wordmark | Approved logo files (SVG) | `components/layout/Brand.tsx` |
| Endorsement line | Off (`endorsement: null`) | Decide whether, and where, to show it | `emirates/index.ts → brand.endorsement` |
| Legal entity name, trade licence, licensing authority (mainland or free zone) | Placeholder in legal pages | Registered UAE entity details | `contact.legalEntityName`, `emirates/pages.ts` |
| Email, phone, address, hours | Hidden (`contact.approved: false`) | Confirmed details | `emirates/index.ts → contact` |
| About page background, leadership, group relationship | Draft | Approved copy | `emirates/pages.ts → about` |
| Arabic version | Not built (English only) | Decide whether to launch bilingual; needs language routing and an RTL font | `emirates/index.ts → languages` |

## Claims

| Claim | State | Evidence needed |
| --- | --- | --- |
| "Million+ payrolls processed", "1000+ trusted clients" | Not shown live | Whether group figures may be used on the UAE site, and the counting method |
| "Sister operations in Saudi Arabia, India and Sri Lanka" (Why Us) | Live | Confirm it's OK to say publicly |
| Testimonials, case studies, client logos | None | Written client permission for each item |

## Services

| Service | Status | Open question |
| --- | --- | --- |
| Payroll Outsourcing, Managed Payroll, Payroll Compliance | Published | Confirm scope wording, and whether DIFC/ADGM entities are in scope |
| Recruitment | Published | Confirm it's offered under this brand and the MOHRE licence held |
| HR Outsourcing | Published | Whether PRO / government transaction services are in scope |
| Staff Outsourcing | Draft | Temporary work / labour supply needs a MOHRE licence |
| Employer of Record | Draft | UAE employing and sponsoring entity, licences, contract templates, liability terms |
| Managed Services | Draft | Scope and delivery model |

## Compliance content

All figures are `verified: false` and `compliance.lastReviewed` is `null`. A qualified UAE payroll or employment-law professional needs to:

- [ ] Confirm WPS wording, including how it applies in free zones
- [ ] Confirm gratuity rates (21 / 30 days' basic wage), the two-year cap, and the alternative end-of-service scheme and DIFC DEWS wording
- [ ] Confirm pension wording for GPSSA, the Abu Dhabi Pension Fund and GCC nationals; add contribution rates if wanted
- [ ] Confirm current Emiratisation targets and the smaller-company sector rules
- [ ] Confirm ILOE and nationwide health insurance wording
- [ ] Confirm overtime, annual leave, Ramadan hours and DIFC / ADGM wording
- [ ] Check every source URL (mohre.gov.ae, u.ae, gpssa.gov.ae, pension.gov.ae, nafis.gov.ae, iloe.ae, difc.ae, adgm.com)
- [ ] Set `lastReviewed` (ISO date) on the compliance block and on each guide
- [ ] Review the three draft guides in `emirates/resources.ts`, then publish them and the resources page

## Legal

The privacy policy, terms and cookie policy are `review` drafts written with the UAE Personal Data Protection Law (Federal Decree-Law No. 45 of 2021) in mind. If the operating entity is in the DIFC or ADGM, their own data protection laws apply instead. The drafts contain bracketed placeholders for the entity, hosting location and transfers outside the UAE, retention, data protection contact and governing emirate. They need legal review.

## Imagery

No photography is used. If photography is added, record the licence for every image.
