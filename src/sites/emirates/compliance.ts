import type { ComplianceContent } from "../types";

/**
 * Educational compliance content for the UAE (mainland, federal rules unless stated).
 *
 * Figures are `verified: false` until a qualified UAE payroll or employment-law
 * professional checks them against the official source. Free zones, and the
 * DIFC and ADGM, have their own employment regimes, and pension rules for
 * nationals differ between the federal GPSSA and some emirate-level funds.
 * Emiratisation targets change year to year. See docs/CONTENT-APPROVALS-UAE.md.
 */
export const compliance: ComplianceContent = {
  heading: "UAE payroll compliance, explained",
  intro:
    "UAE payroll has no income tax, but it does have salary payment rules, end-of-service obligations, pensions for nationals and Emiratisation targets. Here is an overview of the main ones and how we support each.",
  disclaimer:
    "This overview is general information, not legal advice. It reflects mainland federal rules unless stated. Free zones, the DIFC and ADGM have their own rules, and requirements change over time, so always confirm them against the official sources listed.",
  lastReviewed: null,
  topics: [
    {
      id: "wps",
      name: "WPS",
      fullName: "Wage Protection System",
      icon: "wallet",
      summary:
        "A Ministry of Human Resources and Emiratisation (MOHRE) system that checks mainland private-sector salaries are paid in full and on time, through approved banks and exchange houses.",
      keyPoints: [
        "Salaries are paid electronically through WPS-registered agents, not in cash",
        "A salary information file is submitted with each payment",
        "Late or missing salary payments can lead to fines and restrictions on Ministry services",
      ],
      weHandle: [
        "Monthly WPS salary file preparation",
        "Checks that paid salaries match contracts",
        "Payment calendars that keep you within the deadlines",
      ],
      sources: [{ label: "Ministry of Human Resources and Emiratisation", href: "https://www.mohre.gov.ae" }],
    },
    {
      id: "gratuity",
      name: "Gratuity",
      fullName: "End-of-service gratuity",
      icon: "scale",
      summary:
        "A lump-sum benefit owed to expatriate employees under the Labour Law when employment ends after at least one year of service, based on basic wage and years of service.",
      keyPoints: [
        "The award is calculated on basic wage, with a higher rate for service beyond five years",
        "The total award is capped",
        "Employers may join an approved alternative end-of-service savings scheme; the DIFC uses its own workplace savings plan",
      ],
      weHandle: [
        "Monthly gratuity accruals",
        "Final settlement calculations at exit",
        "Liability reports to support financial statements",
      ],
      figures: [
        { label: "First five years", value: "21 days' basic wage per year", verified: false },
        { label: "After five years", value: "30 days' basic wage per year", verified: false },
        { label: "Cap", value: "Two years' wage in total", verified: false },
      ],
      sources: [
        { label: "Ministry of Human Resources and Emiratisation", href: "https://www.mohre.gov.ae" },
        { label: "UAE Government portal — end-of-service benefits", href: "https://u.ae" },
      ],
    },
    {
      id: "pensions",
      name: "Pensions",
      fullName: "Pensions for UAE and GCC nationals",
      icon: "landmark",
      summary:
        "UAE nationals in the private sector are registered for pension contributions, shared between employee, employer and government. GCC nationals are covered under their home country's scheme.",
      keyPoints: [
        "Most private-sector Emiratis are covered by the federal GPSSA; Abu Dhabi nationals are covered by the Abu Dhabi Pension Fund",
        "Contributions are calculated on contributory salary and paid monthly",
        "GCC nationals working in the UAE contribute to their home country's scheme through the GCC extension",
      ],
      weHandle: [
        "Contribution calculations for Emirati and GCC national employees",
        "Monthly contribution schedules",
        "Joiner and leaver updates to the pension authority",
      ],
      sources: [
        { label: "General Pension and Social Security Authority (GPSSA)", href: "https://gpssa.gov.ae" },
        { label: "Abu Dhabi Pension Fund", href: "https://www.pension.gov.ae" },
      ],
    },
    {
      id: "emiratisation",
      name: "Emiratisation",
      fullName: "Emiratisation targets",
      icon: "chart",
      summary:
        "Private companies above a size threshold must increase the share of UAE nationals in skilled roles each year, with financial contributions for shortfalls.",
      keyPoints: [
        "Companies with 50 or more employees have annual targets for Emiratis in skilled roles",
        "Some smaller companies in selected sectors must also hire UAE nationals",
        "Emirati employees must be registered for pension contributions and paid through WPS to count",
      ],
      weHandle: [
        "Payroll and pension data that supports Emiratisation reporting",
        "Headcount reports by nationality",
        "Correct pension and WPS treatment for every Emirati hire",
      ],
      figures: [{ label: "Annual target (50+ employees)", value: "2% more skilled Emiratis a year", verified: false }],
      sources: [
        { label: "Ministry of Human Resources and Emiratisation", href: "https://www.mohre.gov.ae" },
        { label: "Nafis", href: "https://www.nafis.gov.ae" },
      ],
    },
    {
      id: "insurance",
      name: "ILOE and health",
      fullName: "Unemployment and health insurance",
      icon: "heart-pulse",
      summary:
        "Employees must subscribe to Involuntary Loss of Employment (ILOE) insurance, and employers must provide health insurance for their staff.",
      keyPoints: [
        "ILOE is mandatory for most private-sector and federal government employees, who pay the premium themselves",
        "Health insurance for private-sector employees is mandatory across the emirates, with emirate-level rules in Dubai and Abu Dhabi",
        "Insurance status is linked to residency and other government services",
      ],
      weHandle: [
        "ILOE subscription tracking for employees",
        "Joiner and leaver lists for your health insurer",
        "Premium cost allocation in payroll reports",
      ],
      sources: [
        { label: "ILOE insurance", href: "https://www.iloe.ae" },
        { label: "Ministry of Human Resources and Emiratisation", href: "https://www.mohre.gov.ae" },
      ],
    },
    {
      id: "labour-law",
      name: "Labour Law",
      fullName: "Working time, leave and free zones",
      icon: "book",
      summary:
        "The federal Labour Law sets working hours, overtime, leave and fixed-term contracts for the mainland and most free zones. The DIFC and ADGM have their own employment laws.",
      keyPoints: [
        "Employment contracts are fixed-term",
        "Overtime is paid at a premium, with a higher rate for night work",
        "Annual leave is 30 days a year after one year of service, and working hours are reduced during Ramadan",
      ],
      weHandle: [
        "Overtime and leave calculations to the applicable rules",
        "Leave balance tracking and encashment at exit",
        "The right rules for each mainland, free zone, DIFC or ADGM entity",
      ],
      figures: [
        { label: "Overtime premium", value: "25% (50% at night)", verified: false },
        { label: "Annual leave", value: "30 days a year", verified: false },
      ],
      sources: [
        { label: "Ministry of Human Resources and Emiratisation", href: "https://www.mohre.gov.ae" },
        { label: "DIFC Employment Law", href: "https://www.difc.ae" },
        { label: "ADGM Employment Regulations", href: "https://www.adgm.com" },
      ],
    },
  ],
};
