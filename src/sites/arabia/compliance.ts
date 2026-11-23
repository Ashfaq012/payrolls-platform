import type { ComplianceContent } from "../types";

/**
 * Educational overview of payroll obligations in each GCC country.
 *
 * Figures are `verified: false` until a qualified professional in each country
 * checks them against the official source. Several GCC countries have recently
 * reformed social insurance and end-of-service rules (Saudi Arabia 2024,
 * Oman 2023 onwards, Bahrain 2024), so this content needs careful review.
 * See docs/CONTENT-APPROVALS-GCC.md.
 */
export const compliance: ComplianceContent = {
  heading: "GCC payroll compliance, country by country",
  intro:
    "GCC countries share some features, such as no personal income tax and social insurance for nationals, but the details differ in every country. Here is an overview of each one and how we support it.",
  disclaimer:
    "This overview is general information, not legal advice. Rules vary by country, by free zone and over time, so always confirm them against the official sources listed.",
  lastReviewed: null,
  topics: [
    {
      id: "saudi-arabia",
      name: "Saudi Arabia",
      fullName: "GOSI, WPS and end of service",
      icon: "landmark",
      summary:
        "Social insurance through GOSI for Saudis (with occupational hazard cover for expatriates), salaries paid through the Wage Protection System on Mudad, and end-of-service benefits under the Labour Law.",
      keyPoints: [
        "A new Social Insurance Law from July 2024 phases in higher pension rates for new Saudi entrants",
        "Monthly WPS wage files must match contracts and GOSI wages",
        "Saudization (Nitaqat) quotas apply by activity and company size",
      ],
      weHandle: ["GOSI calculations and updates", "WPS wage files for Mudad", "End-of-service accruals and settlements"],
      sources: [
        { label: "General Organization for Social Insurance", href: "https://www.gosi.gov.sa" },
        { label: "Ministry of Human Resources and Social Development", href: "https://www.hrsd.gov.sa" },
      ],
    },
    {
      id: "uae",
      name: "UAE",
      fullName: "WPS, gratuity and pensions",
      icon: "wallet",
      summary:
        "Salaries paid through the Wage Protection System, end-of-service gratuity for expatriates, pension contributions for UAE and GCC nationals, and Emiratisation targets.",
      keyPoints: [
        "Free zones, the DIFC and ADGM have their own employment rules",
        "Gratuity is calculated on basic wage and capped",
        "Employees must hold unemployment (ILOE) insurance",
      ],
      weHandle: ["WPS salary files", "Gratuity accruals and settlements", "Pension contributions for nationals"],
      figures: [{ label: "Gratuity (first five years)", value: "21 days' basic wage per year", verified: false }],
      sources: [
        { label: "Ministry of Human Resources and Emiratisation", href: "https://www.mohre.gov.ae" },
        { label: "General Pension and Social Security Authority", href: "https://gpssa.gov.ae" },
      ],
    },
    {
      id: "qatar",
      name: "Qatar",
      fullName: "WPS, end of service and social insurance",
      icon: "scale",
      summary:
        "Salaries paid through the Wage Protection System, a statutory end-of-service gratuity for expatriates, a national minimum wage, and social insurance for Qatari nationals.",
      keyPoints: [
        "Employers pay wages electronically through the WPS",
        "Expatriates with at least one year of service are owed an end-of-service gratuity",
        "Qatari employees are covered by the General Retirement and Social Insurance Authority",
      ],
      weHandle: ["WPS salary files", "End-of-service accruals and settlements", "Social insurance contributions for Qataris"],
      figures: [
        { label: "End-of-service minimum", value: "3 weeks' basic wage per year", verified: false },
        { label: "Minimum basic wage", value: "QAR 1,000 a month plus allowances", verified: false },
      ],
      sources: [
        { label: "Ministry of Labour", href: "https://www.mol.gov.qa" },
        { label: "General Retirement and Social Insurance Authority", href: "https://www.grsia.gov.qa" },
      ],
    },
    {
      id: "kuwait",
      name: "Kuwait",
      fullName: "PIFSS and end-of-service indemnity",
      icon: "landmark",
      summary:
        "Social security contributions for Kuwaiti nationals through PIFSS, and an end-of-service indemnity for expatriates under the private-sector Labour Law.",
      keyPoints: [
        "Kuwaiti employees and employers contribute to the Public Institution for Social Security",
        "The indemnity grows with service, with a higher rate after five years, and is capped",
        "Salaries are paid through local bank accounts",
      ],
      weHandle: ["PIFSS contributions for Kuwaitis", "Indemnity accruals and settlements", "Bank salary files"],
      figures: [
        { label: "Indemnity (first five years)", value: "15 days' wage per year", verified: false },
        { label: "Indemnity (after five years)", value: "One month's wage per year", verified: false },
      ],
      sources: [
        { label: "Public Institution for Social Security", href: "https://www.pifss.gov.kw" },
        { label: "Public Authority of Manpower", href: "https://www.manpower.gov.kw" },
      ],
    },
    {
      id: "bahrain",
      name: "Bahrain",
      fullName: "SIO contributions and end of service",
      icon: "shield",
      summary:
        "Social insurance through the Social Insurance Organization for Bahrainis and expatriates, with expatriate end-of-service benefits now funded through monthly contributions rather than paid by employers at exit.",
      keyPoints: [
        "Contributions cover pensions for Bahrainis, and work injury and unemployment cover more widely",
        "Expatriate end-of-service benefits have moved into the social insurance system",
        "Expatriate work permits are managed through the Labour Market Regulatory Authority",
      ],
      weHandle: ["SIO contribution calculations", "Monthly contribution schedules", "Joiner and leaver updates"],
      sources: [
        { label: "Social Insurance Organization", href: "https://www.sio.gov.bh" },
        { label: "Labour Market Regulatory Authority", href: "https://www.lmra.gov.bh" },
      ],
    },
    {
      id: "oman",
      name: "Oman",
      fullName: "Social Protection Fund and Labour Law",
      icon: "book",
      summary:
        "A new Social Protection Law and Labour Law, both from 2023, reshaped contributions for Omanis, introduced cover for expatriates and changed end-of-service rules.",
      keyPoints: [
        "The Social Protection Fund manages contributions for Omanis and, increasingly, expatriates",
        "Expatriate end-of-service benefits are based on basic wage and years of service",
        "Omanisation requirements apply in many sectors and roles",
      ],
      weHandle: ["Social Protection Fund contributions", "End-of-service accruals and settlements", "Bank salary files"],
      figures: [{ label: "Expatriate end of service", value: "One month's basic wage per year", verified: false }],
      sources: [
        { label: "Social Protection Fund", href: "https://www.spf.gov.om" },
        { label: "Ministry of Labour", href: "https://www.mol.gov.om" },
      ],
    },
  ],
};
