import type { ResourceArticle } from "../types";

/**
 * Regional guides. All remain drafts until reviewed by qualified
 * professionals in the countries covered and given a lastReviewed date.
 */
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
    lastReviewed: null,
    body: [
      {
        heading: "What the GCC has in common",
        paragraphs: [
          "None of the six GCC countries currently levies personal income tax on employment income, and all of them run social insurance for their own nationals. Most pay salaries through banks, often under a wage protection system.",
        ],
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
          "Saudi Arabia, Oman and Bahrain have all reformed social insurance or end-of-service rules since 2023. Regional employers should review each country payroll against the current rules.",
        ],
      },
    ],
    sources: [
      { label: "General Organization for Social Insurance (Saudi Arabia)", href: "https://www.gosi.gov.sa" },
      { label: "Ministry of Human Resources and Emiratisation (UAE)", href: "https://www.mohre.gov.ae" },
      { label: "Social Protection Fund (Oman)", href: "https://www.spf.gov.om" },
      { label: "Social Insurance Organization (Bahrain)", href: "https://www.sio.gov.bh" },
    ],
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
    lastReviewed: null,
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
