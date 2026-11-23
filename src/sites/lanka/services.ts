import type { Service } from "../types";

/**
 * Sri Lanka service catalogue.
 * Status reflects what management has confirmed is offered under the
 * Payrolls Lanka brand. See docs/CONTENT-APPROVALS.md.
 */
export const services: Service[] = [
  {
    slug: "payroll-outsourcing",
    status: "published",
    group: "payroll",
    icon: "wallet",
    name: "Payroll Outsourcing",
    summary: "End-to-end monthly payroll, from salary inputs to payslips and statutory filings.",
    metaTitle: "Payroll Outsourcing in Sri Lanka",
    metaDescription:
      "Outsource payroll in Sri Lanka: salary calculation, EPF, ETF and APIT handling, payslips and reporting, managed every month by a dedicated payroll team.",
    eyebrow: "Payroll Outsourcing",
    h1: "Payroll outsourcing for businesses in Sri Lanka",
    intro:
      "Hand over the monthly payroll cycle to a team that does it every day. We calculate pay, apply statutory deductions, prepare payslips and keep your records audit-ready, so your people are paid correctly and on time.",
    includes: [
      {
        title: "Monthly salary processing",
        body: "Gross-to-net calculations covering basic pay, allowances, overtime, bonuses, unpaid leave and deductions.",
        icon: "calculator",
      },
      {
        title: "EPF and ETF calculations",
        body: "Employee and employer contributions calculated each cycle and prepared for remittance and returns.",
        icon: "landmark",
      },
      {
        title: "APIT withholding",
        body: "Advance Personal Income Tax calculated on employment income and reported in line with Inland Revenue requirements.",
        icon: "file-check",
      },
      {
        title: "Payslips",
        body: "Clear, itemised payslips delivered to employees securely every pay period.",
        icon: "clipboard",
      },
      {
        title: "Bank payment files",
        body: "Salary transfer files prepared in your bank's format, ready for your approval and release.",
        icon: "wallet",
      },
      {
        title: "Payroll reporting",
        body: "Payroll registers, cost-centre summaries and variance reports to support finance and audit.",
        icon: "chart",
      },
    ],
    idealFor: [
      "Growing companies without an in-house payroll specialist",
      "Finance teams that want to focus on reporting rather than processing",
      "Businesses with frequent joiners, leavers or variable pay",
      "Foreign companies with employees in Sri Lanka through a local entity",
    ],
    local: {
      heading: "Built around Sri Lankan payroll requirements",
      body: "Sri Lankan payroll combines statutory contributions, tax withholding and employment-law obligations that change from time to time. We track these changes and apply them to your payroll.",
      points: [
        "EPF and ETF contributions prepared every month",
        "APIT calculated using the current tax tables",
        "Gratuity liability tracked for eligible employees",
        "Year-end employee tax documentation supported",
      ],
    },
    faqs: [
      {
        q: "What do you need from us each month?",
        a: "Usually attendance or leave data, new joiners and leavers, salary changes and any one-off payments. We agree a simple input format and monthly cut-off date during setup.",
      },
      {
        q: "Who approves the payroll before payment?",
        a: "You do. We prepare the payroll and reports for your review, and salaries are released only after your approval.",
      },
      {
        q: "Can you work with our existing bank?",
        a: "Yes. We prepare salary transfer files in the format your bank requires.",
      },
    ],
    related: ["managed-payroll", "payroll-compliance", "hr-outsourcing"],
  },
  {
    slug: "managed-payroll",
    status: "published",
    group: "payroll",
    icon: "settings",
    name: "Managed Payroll",
    summary: "A dedicated payroll team that runs your payroll as an extension of your finance function.",
    metaTitle: "Managed Payroll Services in Sri Lanka",
    metaDescription:
      "Managed payroll in Sri Lanka with a named payroll specialist, agreed cut-offs, multi-level review and monthly reporting tailored to your business.",
    eyebrow: "Managed Payroll",
    h1: "Managed payroll with a dedicated team behind it",
    intro:
      "Managed payroll goes beyond processing. You get a named payroll specialist who learns your pay structures, policies and approval process, and runs every cycle as part of your team.",
    includes: [
      {
        title: "Named payroll specialist",
        body: "One accountable point of contact who knows your business, supported by a reviewing team.",
        icon: "headset",
      },
      {
        title: "Policy configuration",
        body: "Your allowances, overtime rules, leave policies and approval steps set up and documented.",
        icon: "settings",
      },
      {
        title: "Maker-checker review",
        body: "Every payroll is prepared and then independently reviewed before it reaches you for approval.",
        icon: "shield",
      },
      {
        title: "Change management",
        body: "Salary revisions, restructures and policy changes applied accurately with a clear audit trail.",
        icon: "clipboard",
      },
      {
        title: "Management reporting",
        body: "Headcount, payroll cost and variance reporting in the format your leadership team uses.",
        icon: "chart",
      },
      {
        title: "Employee queries",
        body: "Optional first-line support for employee payslip and deduction questions.",
        icon: "users",
      },
    ],
    idealFor: [
      "Organisations with complex pay structures or multiple locations",
      "Companies replacing or supplementing an in-house payroll team",
      "Businesses that need stronger controls and segregation of duties",
    ],
    local: {
      heading: "Local expertise, applied consistently",
      body: "Your payroll specialist works with Sri Lankan statutory requirements every day and applies them consistently across every cycle.",
      points: [
        "Statutory changes reviewed and applied when they take effect",
        "Documented processes that survive staff changes on your side",
        "Monthly cut-off and payment calendars agreed in advance",
      ],
    },
    faqs: [
      {
        q: "How is managed payroll different from payroll outsourcing?",
        a: "Both cover processing. Managed payroll adds a named specialist, documented policy configuration, deeper reporting and optional employee query handling.",
      },
      {
        q: "Can we keep some payroll work in-house?",
        a: "Yes. We can agree a split of responsibilities, for example your team collects inputs and we handle calculation, review and reporting.",
      },
    ],
    related: ["payroll-outsourcing", "payroll-compliance", "managed-services"],
  },
  {
    slug: "payroll-compliance",
    status: "published",
    group: "payroll",
    icon: "shield",
    name: "Payroll Compliance",
    summary: "Statutory contribution, tax withholding and record-keeping obligations handled with care.",
    metaTitle: "Payroll Compliance Services in Sri Lanka — EPF, ETF, APIT",
    metaDescription:
      "Payroll compliance support in Sri Lanka covering EPF, ETF, APIT, gratuity tracking and statutory records, with every figure prepared for your review.",
    eyebrow: "Payroll Compliance",
    h1: "Payroll compliance support for Sri Lankan employers",
    intro:
      "Statutory payroll obligations in Sri Lanka involve several authorities, deadlines and calculation rules. We prepare the figures, returns and records so you can meet them with confidence.",
    includes: [
      {
        title: "EPF contributions and returns",
        body: "Monthly contribution calculations and the supporting schedules for remittance.",
        icon: "landmark",
      },
      {
        title: "ETF contributions",
        body: "Employer contributions calculated and scheduled alongside your EPF obligations.",
        icon: "landmark",
      },
      {
        title: "APIT calculations",
        body: "Tax withheld on employment income using the applicable tables, with supporting reports.",
        icon: "file-check",
      },
      {
        title: "Gratuity tracking",
        body: "Service-period tracking and liability estimates for employees approaching or past eligibility.",
        icon: "scale",
      },
      {
        title: "Statutory records",
        body: "Payroll registers and records maintained in an organised, retrievable form.",
        icon: "book",
      },
      {
        title: "Compliance calendar",
        body: "A clear calendar of monthly and annual payroll deadlines for your business.",
        icon: "clipboard",
      },
    ],
    idealFor: [
      "Employers who want certainty on statutory deadlines",
      "Businesses preparing for audit or due diligence",
      "Companies that have recently grown past key employee thresholds",
    ],
    local: {
      heading: "What Sri Lankan payroll compliance involves",
      body: "Most employers deal with the Employees' Provident Fund, the Employees' Trust Fund, APIT under the Inland Revenue Act and gratuity obligations. Requirements depend on your workforce, so we confirm what applies to you during setup.",
      points: [
        "EPF — Employees' Provident Fund Act",
        "ETF — Employees' Trust Fund Act",
        "APIT — Inland Revenue Act",
        "Gratuity — Payment of Gratuity Act",
      ],
    },
    faqs: [
      {
        q: "Do you give legal or tax advice?",
        a: "We apply statutory payroll rules in processing and flag issues we notice. For legal or tax opinions on specific situations, we recommend your legal adviser or tax consultant.",
      },
      {
        q: "Can you help us fix past payroll errors?",
        a: "We can review historical payroll data, identify discrepancies and prepare corrected calculations for you and your advisers to act on.",
      },
    ],
    related: ["payroll-outsourcing", "managed-payroll", "hr-outsourcing"],
  },
  {
    slug: "employer-of-record",
    status: "draft",
    group: "eor",
    icon: "globe",
    name: "Employer of Record",
    summary: "Hire employees in Sri Lanka without setting up a local entity.",
    metaTitle: "Employer of Record (EOR) in Sri Lanka",
    metaDescription:
      "Employ staff in Sri Lanka without a local entity. Our Employer of Record service handles employment contracts, payroll, statutory contributions and HR administration.",
    eyebrow: "Employer of Record",
    h1: "Employ people in Sri Lanka without a local entity",
    intro:
      "Our Employer of Record service lets you hire in Sri Lanka quickly. We become the legal employer, run payroll and statutory obligations, and you direct the employee's day-to-day work.",
    includes: [
      {
        title: "Local employment contracts",
        body: "Employment contracts prepared in line with Sri Lankan employment law.",
        icon: "file-check",
      },
      {
        title: "Payroll and contributions",
        body: "Monthly payroll, EPF, ETF and APIT handled as the legal employer.",
        icon: "wallet",
      },
      {
        title: "Onboarding",
        body: "Employee onboarding, documentation and statutory registrations.",
        icon: "users",
      },
      {
        title: "HR administration",
        body: "Leave, benefits and employee records administered locally.",
        icon: "clipboard",
      },
    ],
    idealFor: [
      "Foreign companies hiring their first employees in Sri Lanka",
      "Businesses testing the market before setting up an entity",
    ],
    local: {
      heading: "How EOR works in Sri Lanka",
      body: "The EOR is the legal employer on record while you manage the employee's work. Responsibilities are set out in a services agreement.",
      points: ["Legal employment through our Sri Lankan entity", "Statutory obligations handled locally"],
    },
    faqs: [],
    related: ["payroll-outsourcing", "staff-outsourcing"],
    approvalNote:
      "Requires confirmation of the Sri Lankan legal entity that will act as employer, contract templates and liability terms before publishing.",
  },
  {
    slug: "recruitment",
    status: "published",
    group: "recruitment",
    icon: "user-search",
    name: "Recruitment Solutions",
    summary: "Permanent and contract hiring support, from role definition to offer.",
    metaTitle: "Recruitment Services in Sri Lanka",
    metaDescription:
      "Recruitment support in Sri Lanka for permanent and contract roles: role scoping, sourcing, screening, interview coordination and offer support.",
    eyebrow: "Recruitment",
    h1: "Recruitment support that finds the right people",
    intro:
      "Finding the right people takes time your team may not have. We help define the role, source and screen candidates, and coordinate the process through to an accepted offer.",
    includes: [
      {
        title: "Role scoping",
        body: "Clear role profiles, salary benchmarks from available market data, and a realistic hiring plan.",
        icon: "clipboard",
      },
      {
        title: "Sourcing",
        body: "Targeted search across job boards, professional networks and referrals.",
        icon: "user-search",
      },
      {
        title: "Screening",
        body: "Structured screening against agreed criteria, so you only interview relevant candidates.",
        icon: "file-check",
      },
      {
        title: "Interview coordination",
        body: "Scheduling, candidate communication and feedback collection handled for you.",
        icon: "users",
      },
      {
        title: "Offer support",
        body: "Offer preparation and candidate follow-up through to acceptance.",
        icon: "briefcase",
      },
      {
        title: "Onboarding handover",
        body: "A smooth handover into payroll and HR administration when you need it.",
        icon: "settings",
      },
    ],
    idealFor: [
      "Companies hiring for several roles at once",
      "Businesses without an internal talent acquisition team",
      "Organisations entering Sri Lanka and building a first team",
    ],
    local: {
      heading: "Hiring in the Sri Lankan market",
      body: "We understand local salary expectations, notice periods and how candidates in Sri Lanka look for work, and we use that knowledge to plan your search.",
      points: [
        "Realistic timelines based on local notice periods",
        "Salary and benefit expectations explained up front",
        "Smooth handover to payroll for new joiners",
      ],
    },
    faqs: [
      {
        q: "Do you recruit for permanent and contract roles?",
        a: "Yes. We support both, and contract hires can be combined with our staff outsourcing service.",
      },
    ],
    related: ["staff-outsourcing", "hr-outsourcing", "payroll-outsourcing"],
    approvalNote: "Confirm recruitment is offered under the Payrolls Lanka brand and whether any fee guarantees apply.",
  },
  {
    slug: "hr-outsourcing",
    status: "published",
    group: "services",
    icon: "users",
    name: "HR Outsourcing",
    summary: "Day-to-day HR administration handled by experienced HR professionals.",
    metaTitle: "HR Outsourcing Services in Sri Lanka",
    metaDescription:
      "HR outsourcing in Sri Lanka: employee records, onboarding and offboarding, leave administration, HR documentation and policy support.",
    eyebrow: "HR Outsourcing",
    h1: "HR outsourcing that keeps your people operations running",
    intro:
      "Keep HR administration accurate and consistent without growing your internal team. We handle the routine work so your managers can focus on their people.",
    includes: [
      {
        title: "Employee records",
        body: "Organised, confidential employee files and HR data maintained on your behalf.",
        icon: "lock",
      },
      {
        title: "Onboarding and offboarding",
        body: "Joiner and leaver processes, documentation and handovers into payroll.",
        icon: "users",
      },
      {
        title: "Leave administration",
        body: "Leave balances, entitlements and records tracked according to your policies.",
        icon: "clipboard",
      },
      {
        title: "HR documentation",
        body: "Offer letters, employment letters and standard HR correspondence prepared accurately.",
        icon: "file-check",
      },
      {
        title: "Policy support",
        body: "Help drafting and maintaining employee handbooks and HR policies.",
        icon: "book",
      },
      {
        title: "HR reporting",
        body: "Headcount, attrition and leave reporting for management.",
        icon: "chart",
      },
    ],
    idealFor: [
      "SMEs without a full-time HR function",
      "Companies with lean HR teams that need administrative support",
      "International businesses with a small Sri Lankan workforce",
    ],
    local: {
      heading: "Aligned with Sri Lankan employment practice",
      body: "We administer HR processes in line with Sri Lankan employment practice and your own policies, and connect them to payroll so there are no gaps.",
      points: [
        "HR and payroll records kept consistent",
        "Joiner and leaver dates flow straight into payroll",
        "Leave and attendance data ready for each pay cycle",
      ],
    },
    faqs: [
      {
        q: "Can HR outsourcing be combined with payroll?",
        a: "Yes. Most clients combine them, which removes double data entry and keeps employee records aligned with payroll.",
      },
    ],
    related: ["payroll-outsourcing", "staff-outsourcing", "recruitment"],
  },
  {
    slug: "staff-outsourcing",
    status: "published",
    group: "services",
    icon: "briefcase",
    name: "Staff Outsourcing",
    summary: "Outsourced staff employed and administered by us, working under your direction.",
    metaTitle: "Staff Outsourcing in Sri Lanka",
    metaDescription:
      "Staff outsourcing in Sri Lanka: we employ and administer outsourced staff, including payroll and statutory obligations, while they work on your projects.",
    eyebrow: "Staff Outsourcing",
    h1: "Staff outsourcing for flexible, compliant teams",
    intro:
      "Scale your team for projects, seasonal demand or ongoing roles without adding to your own headcount. We employ and administer the staff; they work under your direction.",
    includes: [
      {
        title: "Employment administration",
        body: "Contracts, onboarding and employee records handled by us.",
        icon: "file-check",
      },
      {
        title: "Payroll and statutory contributions",
        body: "Salaries, EPF, ETF and APIT processed for every outsourced employee.",
        icon: "wallet",
      },
      {
        title: "Flexible headcount",
        body: "Add or reduce staff as your needs change, within agreed terms.",
        icon: "trending-up",
      },
      {
        title: "Attendance and leave",
        body: "Attendance and leave tracked and reconciled every cycle.",
        icon: "clipboard",
      },
    ],
    idealFor: [
      "Project-based teams with defined timelines",
      "Seasonal or peak-period staffing",
      "Companies managing headcount limits",
    ],
    local: {
      heading: "Compliant outsourced employment",
      body: "Outsourced staff are employed in line with Sri Lankan employment requirements, with statutory obligations handled by us.",
      points: [
        "Clear service agreements defining responsibilities",
        "Statutory contributions handled every month",
        "Transparent monthly invoicing",
      ],
    },
    faqs: [
      {
        q: "Who manages the outsourced staff day to day?",
        a: "You direct their work. We handle employment, payroll and HR administration.",
      },
    ],
    related: ["recruitment", "hr-outsourcing", "payroll-outsourcing"],
    approvalNote: "Confirm the employing entity and the standard service agreement before launch.",
  },
  {
    slug: "remote-staffing",
    status: "draft",
    group: "services",
    icon: "laptop",
    name: "Remote Staffing",
    summary: "Dedicated remote professionals in Sri Lanka working for international teams.",
    metaTitle: "Remote Staffing from Sri Lanka",
    metaDescription:
      "Build a dedicated remote team in Sri Lanka. We recruit, employ and administer remote professionals who work exclusively for your business.",
    eyebrow: "Remote Staffing",
    h1: "Build a dedicated remote team in Sri Lanka",
    intro:
      "Access skilled professionals in Sri Lanka who work exclusively on your business. We recruit, employ and administer them locally.",
    includes: [
      { title: "Recruitment", body: "Candidates sourced and screened for your requirements.", icon: "user-search" },
      { title: "Local employment", body: "Employment, payroll and benefits administered in Sri Lanka.", icon: "file-check" },
      { title: "Ongoing support", body: "HR support for your remote team members.", icon: "headset" },
    ],
    idealFor: ["International companies building offshore teams"],
    local: {
      heading: "Why Sri Lanka for remote teams",
      body: "To be completed with approved positioning.",
      points: [],
    },
    faqs: [],
    related: ["recruitment", "staff-outsourcing"],
    approvalNote: "Positioning, workspace/equipment model and pricing approach to be confirmed.",
  },
  {
    slug: "managed-services",
    status: "draft",
    group: "services",
    icon: "building",
    name: "Managed Services",
    summary: "Outcome-based management of defined business functions.",
    metaTitle: "Managed Services in Sri Lanka",
    metaDescription:
      "Managed workforce services in Sri Lanka, where we take responsibility for delivering a defined business function to agreed service levels.",
    eyebrow: "Managed Services",
    h1: "Managed services for defined business functions",
    intro:
      "Hand over a defined function, such as back-office administration, and we take responsibility for delivering it to agreed service levels.",
    includes: [
      { title: "Defined scope", body: "Clear scope and service levels agreed up front.", icon: "clipboard" },
      { title: "Managed team", body: "We recruit, manage and administer the delivery team.", icon: "users" },
      { title: "Performance reporting", body: "Regular reporting against agreed service levels.", icon: "chart" },
    ],
    idealFor: ["Organisations outsourcing a complete function"],
    local: { heading: "Local delivery", body: "To be completed with approved scope.", points: [] },
    faqs: [],
    related: ["staff-outsourcing", "hr-outsourcing"],
    approvalNote: "Which functions are offered as managed services is not yet defined.",
  },
];
