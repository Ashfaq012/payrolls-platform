import type { ResourceArticle } from "../types";
import { gccReviewedOn, gccSources as sources } from "../gcc-sources";

/** Official sources reviewed; business and publication approval remain separate. */
export const resources: ResourceArticle[] = [
  {
    slug: "gcc-payroll-differences",
    status: "draft",
    type: "guide",
    title: "Payroll across the GCC: how the six countries differ",
    metaDescription:
      "A comparison of payroll in Saudi Arabia, the UAE, Qatar, Kuwait, Bahrain and Oman: social insurance, wage protection, end-of-service and localisation.",
    excerpt: "Social insurance, wage protection, end-of-service and localisation, compared.",
    readingMinutes: 7,
    publishedAt: null,
    lastReviewed: gccReviewedOn,
    body: [
      {
        heading: "What the GCC has in common",
        paragraphs: [
          "All six countries have national social insurance systems, but coverage and contribution bases differ. Bank salary payments and wage protection requirements must be checked by jurisdiction. Oman has enacted personal income tax from 2028 for specified income types above OMR 42,000 total annual income, at 5% of taxable income subject to deductions and exemptions.",
        ],
      },
      {
        heading: "End-of-service differences",
        paragraphs: ["Under the UAE federal regime, eligible foreign full-time workers accrue 21 days of last basic wage per year for the first five years and 30 thereafter, subject to the one-year qualifying period and two-year wage cap. Qatar requires at least three weeks of last basic wage per year after one year of service. Kuwait's 15-day/one-month progression applies to monthly-paid workers, with an 18-month wage cap; other pay frequencies and termination circumstances differ."],
      },
      {
        heading: "Where they differ",
        paragraphs: ["The details vary in ways that matter for payroll:"],
        bullets: [
          "Whether expatriates contribute to social insurance, and for which benefits",
          "How end-of-service benefits are calculated, and whether they are paid at exit or funded monthly",
          "Which wage protection system applies, and how salary files are submitted",
          "Localisation targets for national employees",
        ],
      },
      {
        heading: "Recent reforms",
        paragraphs: [
          "Saudi GOSI pension rates depend on the employee's statutory cohort: eligible new entrants contribute 10% each for employee and employer from July 2026 through June 2027, separate from other insurance branches. Bahrain's SIO end-of-service scheme covers eligible non-Bahraini service from 1 March 2024; earlier liabilities remain with employers. Oman has phased implementation, including scheduled non-Omani savings coverage by July 2027. Check actual commencement and eligibility before changing payroll.",
        ],
      },
    ],
    sources: [sources.saudiRates, sources.saudiGosi, sources.uaeLaw, sources.qatarGratuity, sources.kuwaitLabour, sources.bahrainGratuity, sources.bahrainTransition, sources.omanProtection, sources.omanTax],
  },
  {
    slug: "consolidating-gcc-payroll",
    status: "draft",
    type: "article",
    title: "Consolidating payroll across GCC countries",
    metaDescription:
      "Why regional groups consolidate GCC payroll with one provider, and what to put in place: common inputs, one calendar and consolidated reporting.",
    excerpt: "Common inputs, one calendar and consolidated reporting for regional groups.",
    readingMinutes: 4,
    publishedAt: null,
    lastReviewed: gccReviewedOn,
    body: [
      {
        heading: "The problem with many providers",
        paragraphs: [
          "Groups that grow country by country often end up with a different payroll provider, format and calendar in each market. That makes regional reporting slow and controls uneven.",
        ],
      },
      {
        heading: "What consolidation looks like",
        paragraphs: ["A consolidated approach usually includes:"],
        bullets: [
          "One input template and cut-off calendar for every country",
          "The same review and approval steps everywhere",
          "Country outputs that meet local rules",
          "A regional report of cost, headcount and liabilities in one currency",
        ],
      },
    ],
    sources: [],
  },
];
