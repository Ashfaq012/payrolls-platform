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

Official-source review completed on **2026-11-23**. Reviewed numeric statements now have `verified: true`; compliance and resource review dates are set. Specific government sources are linked beside the content and catalogued in `src/sites/gcc-sources.ts`.

Reviewed scope: Federal and financial-free-zone scope; gratuity eligibility and final-payment deadline; pension jurisdiction; Emiratisation; ILOE exemptions; phased health insurance and working hours.

This records source verification, not approval of business claims or a professional legal sign-off. Resource guides remain drafts. The consolidation article is editorial process guidance, not a government-endorsed method.

- [ ] Obtain jurisdiction-specific professional review for the operating entity and workforce.
- [ ] Approve publication of draft resources separately.
- [ ] Confirm service licences, business claims and operating details listed above.
- [ ] Recheck scheduled reforms at commencement and keep review dates current.

## Legal

The privacy policy, terms and cookie policy are `review` drafts written with the UAE Personal Data Protection Law (Federal Decree-Law No. 45 of 2021) in mind. If the operating entity is in the DIFC or ADGM, their own data protection laws apply instead. The drafts contain bracketed placeholders for the entity, hosting location and transfers outside the UAE, retention, data protection contact and governing emirate. They need legal review.

## Imagery

No photography is used. If photography is added, record the licence for every image.
