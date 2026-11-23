import type { ComplianceContent } from "../types";
import { gccReviewedOn, gccSources as sources } from "../gcc-sources";

/** Official sources reviewed; business and publication approval remain separate. */
export const compliance: ComplianceContent = {
  heading: "GCC payroll compliance, country by country",
  intro:
    "Social insurance, salary payments and end-of-service obligations differ across the six GCC countries. Oman has also enacted personal income tax effective from 2028; regional payroll planning must account for commencement dates.",
  disclaimer:
    "This overview is general information, not legal advice. Rules vary by country, by free zone and over time, so always confirm them against the official sources listed.",
  lastReviewed: gccReviewedOn,
  topics: [
    {
      id: "saudi-arabia",
      name: "Saudi Arabia",
      fullName: "GOSI, WPS and end of service",
      icon: "landmark",
      summary:
        "Social insurance through GOSI for Saudis (with occupational hazard cover for expatriates), salaries paid through the Wage Protection System on Mudad, and end-of-service benefits under the Labour Law.",
      keyPoints: [
        "The new GOSI pension schedule applies to eligible Saudi entrants without earlier civil retirement or social insurance periods as of 3 July 2024; GCC nationals require separate coverage checks",
        "Reconcile WPS payments with contracts and payroll; GOSI contribution wages and net salary use different rules",
        "Saudization (Nitaqat) quotas apply by activity and company size",
      ],
      weHandle: ["GOSI calculations and updates", "WPS wage files for Mudad", "End-of-service accruals and settlements"],
      sources: [sources.saudiGosi, sources.saudiRates, sources.saudiWps, sources.saudiLabour, sources.saudiNitaqat],
    },
    {
      id: "uae",
      name: "UAE",
      fullName: "WPS, gratuity and pensions",
      icon: "wallet",
      summary:
        "Salaries paid through the Wage Protection System, end-of-service gratuity for expatriates, pension contributions for UAE and GCC nationals, and Emiratisation targets.",
      keyPoints: [
        "Federal employment law covers most free zones; DIFC and ADGM have distinct employment regimes",
        "Federal gratuity for foreign full-time workers requires one year of service, uses last basic wage, and is capped at two years' wage; approved savings schemes require separate treatment",
        "Eligible workers must subscribe to ILOE; exemptions include domestic workers, temporary workers, under-18s and specified owners and pensioners",
      ],
      weHandle: ["WPS salary files", "Gratuity accruals and settlements", "Pension contributions for nationals"],
      figures: [{ label: "Gratuity (first five years)", value: "21 days' basic wage per year", verified: true }],
      sources: [sources.uaeLaw, sources.uaePensions, sources.uaeIloe, sources.uaeAdgm],
    },
    {
      id: "qatar",
      name: "Qatar",
      fullName: "WPS, end of service and social insurance",
      icon: "scale",
      summary:
        "Salaries paid through the Wage Protection System, a statutory end-of-service gratuity for expatriates, a national minimum wage, and social insurance for Qatari nationals.",
      keyPoints: [
        "Employers covered by the Labour Law pay wages through the applicable bank-transfer and WPS requirements",
        "Article 54 provides at least three weeks of last basic wage per service year after one year's service, with proportionate fractions",
        "Check Qatari employees' coverage under the Social Insurance Law; minimum wage allowances are QAR 500 for housing and QAR 300 for food unless provided",
      ],
      weHandle: ["WPS salary files", "End-of-service accruals and settlements", "Social insurance contributions for Qataris"],
      figures: [
        { label: "End-of-service minimum", value: "3 weeks' basic wage per year", verified: true },
        { label: "Minimum basic wage", value: "QAR 1,000/month; housing and food additional unless provided", verified: true },
      ],
      sources: [sources.qatarWps, sources.qatarGratuity, sources.qatarWages, sources.qatarInsurance],
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
        "Monthly-paid workers: 15 days' wage per year for the first five years, then one month per year, capped at 18 months' wage. Other pay frequencies have different rates and caps; termination circumstances can affect entitlement",
        "Salaries are paid through local bank accounts",
      ],
      weHandle: ["PIFSS contributions for Kuwaitis", "Indemnity accruals and settlements", "Bank salary files"],
      figures: [
        { label: "Monthly-paid indemnity (first five years)", value: "15 days' wage per year", verified: true },
        { label: "Monthly-paid indemnity (after five years)", value: "One month's wage per year", verified: true },
      ],
      sources: [sources.kuwaitLabour, sources.kuwaitInsurance],
    },
    {
      id: "bahrain",
      name: "Bahrain",
      fullName: "SIO contributions and end of service",
      icon: "shield",
      summary:
        "Bahrain's SIO administers social insurance and, from 1 March 2024, the end-of-service scheme for covered non-Bahraini private-sector workers. Employers remain responsible for benefits attributable to earlier service.",
      keyPoints: [
        "Contributions cover pensions for Bahrainis, and work injury and unemployment cover more widely",
        "Distinguish pre-1 March 2024 employer liabilities from subsequent SIO-funded service; domestic workers have separate treatment",
        "Expatriate work permits are managed through the Labour Market Regulatory Authority",
      ],
      weHandle: ["SIO contribution calculations", "Monthly contribution schedules", "Joiner and leaver updates"],
      sources: [sources.bahrainGratuity, sources.bahrainTransition],
    },
    {
      id: "oman",
      name: "Oman",
      fullName: "Social Protection Fund and Labour Law",
      icon: "book",
      summary:
        "Oman's 2023 Labour Law and Social Protection Law changed benefits, with coverage introduced in phases. Do not assume every non-Omani benefit branch or savings arrangement is already operational.",
      keyPoints: [
        "The SPF's June 2026 report schedules non-Omani savings coverage by July 2027 and work-injury coverage by July 2028; check implementing commencement decisions",
        "Article 61 provides workers not benefiting from Social Protection Law benefits at least one month's last basic wage per service year, including proportionate fractions, subject to the savings-system transition",
        "Personal income tax starts in 2028: the law covers specified income types above OMR 42,000 total annual income, with 5% on taxable income after applicable deductions and exemptions",
      ],
      weHandle: ["Social Protection Fund contributions", "End-of-service accruals and settlements", "Bank salary files"],
      figures: [{ label: "Article 61 end of service (eligible workers)", value: "One month's basic wage per year", verified: true }],
      sources: [sources.omanLabour, sources.omanProtection, sources.omanTax],
    },
  ],
};
