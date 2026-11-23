import type { ResourceArticle } from "../types";

/**
 * Compliance guides. All remain drafts until reviewed by a qualified
 * Saudi payroll or labour-law professional and given a lastReviewed date.
 */
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
    lastReviewed: null,
    body: [
      {
        heading: "Who is covered",
        paragraphs: [
          "Saudi employees are covered for pensions (annuities), unemployment insurance (SANED) and occupational hazards. Expatriate employees are covered for occupational hazards, which the employer pays.",
          "Contributions are calculated on basic salary plus housing allowance, within a minimum and a maximum.",
        ],
      },
      {
        heading: "The new Social Insurance Law",
        paragraphs: [
          "A new Social Insurance Law took effect in July 2024. For Saudis who join the system after that date, annuity contribution rates increase in stages over several years. Existing members stay on the previous rates, so many employers now run two sets of rules in one payroll.",
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
    sources: [{ label: "General Organization for Social Insurance", href: "https://www.gosi.gov.sa" }],
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
    lastReviewed: null,
    body: [
      {
        heading: "What WPS is",
        paragraphs: [
          "The Wage Protection System checks that private-sector employers pay salaries on time and in line with employment contracts. Salaries are paid through banks, and a monthly wage file is submitted through the Mudad platform.",
        ],
      },
      {
        heading: "Avoiding mismatches",
        paragraphs: [
          "Most WPS problems come from differences between the wage paid, the contract on Qiwa and the wage registered with GOSI. Keeping the three aligned whenever salaries change is the simplest way to stay compliant.",
        ],
      },
    ],
    sources: [
      { label: "Mudad", href: "https://mudad.com.sa" },
      { label: "Ministry of Human Resources and Social Development", href: "https://www.hrsd.gov.sa" },
    ],
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
    lastReviewed: null,
    body: [
      {
        heading: "The basics",
        paragraphs: [
          "When employment ends, the Labour Law entitles employees to an end-of-service award based on their last wage and years of service, with a higher rate for service beyond five years.",
          "Where an employee resigns, the award may be reduced depending on their length of service.",
        ],
      },
      {
        heading: "Planning for the liability",
        paragraphs: [
          "Because the award builds up every year, many employers accrue it monthly rather than meeting it only when someone leaves. This also supports accurate financial statements.",
        ],
      },
    ],
    sources: [{ label: "Ministry of Human Resources and Social Development", href: "https://www.hrsd.gov.sa" }],
  },
];
