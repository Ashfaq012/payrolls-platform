
import type { SourceLink } from "../types";

/** Official sources checked on 2026-11-23; review dates are not professional sign-off. */
export const reviewedOn = "2026-11-23";
export const sources = {
  labour: { label: "Ministry of Labour: labour codes and central rules FAQs (25 October 2026)", href: "https://www.labour.gov.in/static/uploads/2026/11/da640b1558a315e81e22ce5ac12f463f.pdf" },
  pf: { label: "EPFO: contribution rates and exceptions (read with the newer Ministry FAQs)", href: "https://www.epfindia.nic.in/site_docs/PDFs/MiscPDFs/ContributionRate.pdf" },
  esi: { label: "ESIC: coverage, contributions and employee exemption", href: "https://esic.gov.in/attachments/publicationfile/c43a36cc29d396ce352ba3c525e2a855.pdf" },
  tds: { label: "Income Tax Department: transition to the Income-tax Act, 2025", href: "https://www.incometax.gov.in/iec/foportal/help/all-topics/e-filing-services/tds-compliance" },
  forms: { label: "Income Tax Rules, 2026: salary TDS certificate and evidence forms", href: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-03/En-Notified-IT-Rules-2026-20-03-2026.pdf" },
  quarterly: { label: "Income Tax Department: Form 138 and quarterly deadlines", href: "https://www.incometax.gov.in/iec/foportal/newformpage/forms/form138-um" },
  pt: { label: "Legislative Department: Constitution (Sixtieth Amendment) Act, Article 276", href: "https://www.legislative.gov.in/static/uploads/2025/07/1f71451452256d6fa3063c5678d7f8a9.pdf" },
  maharashtra: { label: "Maharashtra GST Department: Profession Tax Act and Schedule I", href: "https://www.mahagst.gov.in/public/uploads/mvatservices/1760346808Maharashtra%20Profession%20Tax%20Act%201975.pdf" },
  lwf: { label: "Maharashtra Labour Welfare Board: employer registration and contributions", href: "https://public.mlwb.in/public?language=eng" },
  privacy: { label: "MeitY: DPDP Act commencement notification, G.S.R. 843(E)", href: "https://www.meity.gov.in/static/uploads/2025/11/c56ceae6c383460ca69577428d36828b.pdf" },
} satisfies Record<string, SourceLink>;
