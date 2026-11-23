import type { ResourceArticle } from "../types";
import { gccReviewedOn, gccSources as sources } from "../gcc-sources";

/** Official sources reviewed; business and publication approval remain separate. */
export const resources: ResourceArticle[] = [
  {
    slug: "gosi-guide-for-employers",
    status: "draft",
    type: "guide",
    title: "GOSI: a practical guide for employers in Saudi Arabia",
    metaDescription:
      "How GOSI contributions work for employers in Saudi Arabia: Saudi and expatriate coverage, the contribution base, the new Social Insurance Law and monthly updates.",
    excerpt: "Saudi and expatriate coverage, the contribution base, and what changed with the new law.",
    readingMinutes: 6,
    publishedAt: null,
    lastReviewed: gccReviewedOn,
    body: [
      {
        heading: "Who is covered",
        paragraphs: [
          "Eligible Saudi workers have annuity, SANED and occupational-hazard coverage. Non-Saudi workers generally have employer-paid occupational-hazard coverage; GCC nationals require a separate check under insurance-extension rules.",
          "Apply GOSI's contribution-base rules for basic salary, housing and any relevant commissions. The monthly contributory wage ceiling is SAR 45,000; minimum bases and branch eligibility require separate checks.",
        ],
      },
      {
        heading: "The new Social Insurance Law",
        paragraphs: [
          "The new law applies to entrants with no earlier civil-retirement or social-insurance contribution periods on 3 July 2024. For that cohort, employee and employer annuity rates are each 10% from 1 July 2026, 10.5% from 1 July 2027 and 11% from 1 July 2028. The previous scheme retains 9% each. SANED is 0.75% each for covered workers; occupational hazards is normally 2% employer-funded. These are separate branches, not alternative total rates.",
        ],
      },
      {
        heading: "Monthly responsibilities",
        paragraphs: ["Employers typically need to:"],
        bullets: [
          "Register joiners and remove leavers promptly",
          "Update wages when basic salary or housing allowance changes",
          "Pay the monthly contribution invoice on time",
          "Reconcile the GOSI invoice to payroll",
        ],
      },
    ],
    sources: [sources.saudiGosi, sources.saudiRates, sources.saudiExisting, sources.gccPensions],
  },
  {
    slug: "wage-protection-system",
    status: "draft",
    type: "guide",
    title: "The Wage Protection System and Mudad, explained",
    metaDescription:
      "An employer's overview of Saudi Arabia's Wage Protection System: paying salaries through banks, monthly Mudad wage files and avoiding mismatches.",
    excerpt: "Bank salary payments, monthly wage files and the mismatches that cause problems.",
    readingMinutes: 5,
    publishedAt: null,
    lastReviewed: gccReviewedOn,
    body: [
      {
        heading: "What WPS is",
        paragraphs: [
          "For covered establishments, WPS checks bank salary payments against contractual obligations through Mudad. From 1 March 2025 the permitted wage-file upload window is 30 days instead of 60. This is a reporting window, not permission to delay wages.",
        ],
      },
      {
        heading: "Avoiding mismatches",
        paragraphs: [
          "Check employee identifiers, pay periods, bank results, contractual wage components and lawful deductions before uploading. GOSI contributory wages and net bank payments use different bases, so they need reconciliation rather than identical totals. Record the reason for any discrepancy and resolve rejected payments.",
        ],
      },
    ],
    sources: [sources.saudiWps, sources.saudiContracts],
  },
  {
    slug: "end-of-service-benefits",
    status: "draft",
    type: "guide",
    title: "End-of-service benefits in Saudi Arabia: what employers should know",
    metaDescription:
      "An overview of end-of-service benefits under the Saudi Labour Law: how the award is calculated, the effect of resignation and planning for the liability.",
    excerpt: "How the award is calculated, how resignation affects it, and why accruing monthly helps.",
    readingMinutes: 5,
    publishedAt: null,
    lastReviewed: gccReviewedOn,
    body: [
      {
        heading: "The basics",
        paragraphs: [
          "Article 84 provides half a month's last wage for each of the first five years and one month's last wage for each later year, with proportional credit for fractions of a year. It is not automatically a basic-salary-only calculation; Article 86 permits agreed exclusion of specified variable commissions.",
          "For ordinary resignation, Article 85 provides one-third for 2–5 years, two-thirds for more than 5 but under 10 years, and the full award from 10 years. Check Article 87 exceptions and the reason for termination, including Article 80 cases, before calculating entitlement. Final dues are normally due within one week, or two weeks if the worker ends the contract.",
        ],
      },
      {
        heading: "Planning for the liability",
        paragraphs: [
          "Because the award builds up every year, many employers accrue it monthly rather than meeting it only when someone leaves. This also supports accurate financial statements.",
        ],
      },
    ],
    sources: [sources.saudiLabour],
  },
];
