import type { ComplianceContent } from "../types";
import { gccReviewedOn, gccSources as sources } from "../gcc-sources";

/** Official sources reviewed; business and publication approval remain separate. */
export const compliance: ComplianceContent = {
  heading: "UAE payroll compliance, explained",
  intro:
    "UAE employment wages are not subject to personal income tax. Payroll still involves salary-payment rules, end-of-service obligations, pensions and Emiratisation. The applicable regime depends on the employer and employee.",
  disclaimer:
    "This overview covers the federal private-sector regime unless stated. Free-zone administration and salary-payment requirements must be checked separately; DIFC and ADGM have distinct employment laws. Government and domestic-worker regimes are outside this summary.",
  lastReviewed: gccReviewedOn,
  topics: [
    {
      id: "wps",
      name: "WPS",
      fullName: "Wage Protection System",
      icon: "wallet",
      summary:
        "MOHRE's Wage Protection System monitors electronic wage payments by covered establishments through approved financial institutions, against contractual amounts and payment dates.",
      keyPoints: [
        "Covered employers use WPS-approved payment channels; check the applicable establishment and employee exemptions",
        "A salary information file is submitted with each payment",
        "Late or missing salary payments can lead to fines and restrictions on Ministry services",
      ],
      weHandle: [
        "Monthly WPS salary file preparation",
        "Checks that paid salaries match contracts",
        "Payment calendars that keep you within the deadlines",
      ],
      sources: [sources.uaeWps, sources.uaeTax],
    },
    {
      id: "gratuity",
      name: "Gratuity",
      fullName: "End-of-service gratuity",
      icon: "scale",
      summary:
        "Under the federal private-sector regime, eligible foreign full-time workers receive gratuity after at least one year of continuous service, using their last basic wage. Other work patterns and approved savings schemes require different treatment.",
      keyPoints: [
        "The award is calculated on basic wage, with a higher rate for service beyond five years",
        "The award is capped at two years' wage; unpaid absence is excluded from qualifying service, and eligible fractions of a year are calculated proportionately",
        "Final wages and entitlements are due within 14 days of contract termination. Approved alternative savings schemes and DIFC arrangements must be assessed separately",
      ],
      weHandle: [
        "Monthly gratuity accruals",
        "Final settlement calculations at exit",
        "Liability reports to support financial statements",
      ],
      figures: [
        { label: "First five years", value: "21 days' basic wage per year", verified: true },
        { label: "After five years", value: "30 days' basic wage per year", verified: true },
        { label: "Cap", value: "Two years' wage in total", verified: true },
      ],
      sources: [sources.uaeLaw, sources.uaeDews],
    },
    {
      id: "pensions",
      name: "Pensions",
      fullName: "Pensions for UAE and GCC nationals",
      icon: "landmark",
      summary:
        "UAE nationals in the private sector are registered for pension contributions, shared between employee, employer and government. GCC nationals are covered under their home country's scheme.",
      keyPoints: [
        "GPSSA covers eligible Emiratis working for private-sector employers in the UAE except Abu Dhabi. Determine the responsible fund from the employer's jurisdiction and scheme coverage, not the employee's home emirate",
        "Check whether the insured is covered by Federal Law 7/1999, Decree-Law 57/2023 or an emirate fund; contribution rates and salary limits differ",
        "GCC nationals working in the UAE contribute to their home country's scheme through the GCC extension",
      ],
      weHandle: [
        "Contribution calculations for Emirati and GCC national employees",
        "Monthly contribution schedules",
        "Joiner and leaver updates to the pension authority",
      ],
      sources: [sources.uaePensions, sources.uaePensionRates, sources.gccPensions],
    },
    {
      id: "emiratisation",
      name: "Emiratisation",
      fullName: "Emiratisation targets",
      icon: "chart",
      summary:
        "Covered MOHRE private-sector establishments with at least 50 employees must achieve the prescribed Emiratisation growth in skilled jobs. Selected establishments with 20–49 employees have a separate hiring requirement.",
      keyPoints: [
        "For covered 50+ establishments, the scheduled increase is 1 percentage point each half-year, reaching 10% by the end of 2026",
        "Selected 20–49 establishments were required to hire one Emirati in 2024 and one additional Emirati in 2025; check ongoing retention and replacement requirements",
        "Emirati employees must be registered for pension contributions and paid through WPS to count",
      ],
      weHandle: [
        "Payroll and pension data that supports Emiratisation reporting",
        "Headcount reports by nationality",
        "Correct pension and WPS treatment for every Emirati hire",
      ],
      figures: [{ label: "Covered 50+ establishments: end-2026 target", value: "10% Emiratisation in skilled jobs", verified: true }],
      sources: [sources.uaeEmployers],
    },
    {
      id: "insurance",
      name: "ILOE and health",
      fullName: "Unemployment and health insurance",
      icon: "heart-pulse",
      summary:
        "ILOE subscription applies to eligible employees, while employer health-insurance duties depend on the applicable emirate rules and residence-issuance or renewal requirements.",
      keyPoints: [
        "ILOE generally covers private-sector and federal-government employees. Exemptions include domestic workers, under-18s, qualifying owner-investors, temporary-contract workers and pension-receiving retirees who rejoin employment",
        "The health-insurance expansion took effect on 1 January 2025; previously issued residencies transition at renewal. Dubai and Abu Dhabi retain their emirate-specific arrangements",
        "Insurance status is linked to residency and other government services",
      ],
      weHandle: [
        "ILOE subscription tracking for employees",
        "Joiner and leaver lists for your health insurer",
        "Premium cost allocation in payroll reports",
      ],
      sources: [sources.uaeIloe, sources.uaeHealth],
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
        "Federal overtime is based on basic hourly wage plus at least 25%; work between 10 pm and 4 am attracts at least 50%, except for shift workers",
        "Annual leave is 30 days after a year; workers with more than six months but less than a year receive two days per month. Normal working hours reduce by two hours during Ramadan",
      ],
      weHandle: [
        "Overtime and leave calculations to the applicable rules",
        "Leave balance tracking and encashment at exit",
        "The right rules for each mainland, free zone, DIFC or ADGM entity",
      ],
      figures: [
        { label: "Overtime premium", value: "At least 25%; 50% for qualifying night overtime", verified: true },
        { label: "Annual leave", value: "30 days after one year of service", verified: true },
      ],
      sources: [sources.uaeLaw, sources.uaeHours, sources.uaeAdgm],
    },
  ],
};
