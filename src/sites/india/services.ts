import type { Service } from "../types";

/**
 * India service catalogue.
 * Status reflects what management has confirmed is offered under the
 * Payrolls India brand. See docs/CONTENT-APPROVALS-INDIA.md.
 */
export const services: Service[] = [
  {
    slug: "payroll-outsourcing",
    status: "published",
    group: "payroll",
    icon: "wallet",
    name: "Payroll Outsourcing",
    summary: "End-to-end monthly payroll, from salary inputs to payslips, challans and returns.",
    metaTitle: "Payroll Outsourcing in India",
    metaDescription:
      "Outsource payroll in India: salary calculation, PF, ESI, TDS and professional tax, payslips and reporting, managed every month by a dedicated payroll team.",
    eyebrow: "Payroll Outsourcing",
    h1: "Payroll outsourcing for businesses in India",
    intro:
      "Hand over the monthly payroll cycle to a team that does it every day. We calculate pay, apply central and state deductions, prepare payslips and keep your records audit-ready, so your people are paid correctly and on time.",
    includes: [
      {
        title: "Monthly salary processing",
        body: "Gross-to-net calculations covering CTC components, allowances, overtime, bonuses, loss of pay, arrears and reimbursements.",
        icon: "calculator",
      },
      {
        title: "PF and ESI",
        body: "Employee and employer contributions calculated each cycle, with ECR and ESI filings prepared.",
        icon: "landmark",
      },
      {
        title: "TDS on salary",
        body: "Regime-wise tax computation, investment declarations and proofs, quarterly statements and annual certificates.",
        icon: "file-check",
      },
      {
        title: "Professional tax and LWF",
        body: "Deductions assessed under applicable state law, establishment coverage, salary slabs and employee exemptions.",
        icon: "map",
      },
      {
        title: "Payslips and bank files",
        body: "Itemised payslips delivered securely, and salary transfer files in your bank's format.",
        icon: "clipboard",
      },
      {
        title: "Payroll reporting",
        body: "Payroll registers, cost-centre summaries and variance reports to support finance and audit.",
        icon: "chart",
      },
    ],
    idealFor: [
      "Growing companies without an in-house payroll specialist",
      "Businesses with employees in several states",
      "Finance teams that want to focus on reporting rather than processing",
      "International companies with an Indian subsidiary or GCC",
    ],
    local: {
      heading: "Built around Indian payroll requirements",
      body: "Indian payroll layers central social security and tax law over state levies and holiday rules, and the labour codes are changing how wages are defined. We track these changes and apply them to your payroll.",
      points: [
        "PF ECR and ESI contributions prepared every month",
        "TDS computed using annual regime intimations, with the new regime as default",
        "Professional tax and LWF applied state by state",
        "Full and final settlements, including gratuity and leave encashment",
      ],
    },
    faqs: [
      {
        q: "What do you need from us each month?",
        a: "Usually attendance and leave data, joiners and leavers, salary revisions, one-off payments and reimbursement claims. We agree a simple input format and a monthly cut-off during setup.",
      },
      {
        q: "Who approves the payroll before payment?",
        a: "You do. We prepare the payroll and reports for your review, and salaries are released only after your approval.",
      },
      {
        q: "Do you handle full and final settlements?",
        a: "Yes. We calculate final dues for leavers, including notice pay, leave encashment and gratuity where applicable, for your approval.",
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
    metaTitle: "Managed Payroll Services in India",
    metaDescription:
      "Managed payroll in India with a named payroll specialist, documented salary structures, maker-checker review and monthly reporting tailored to your business.",
    eyebrow: "Managed Payroll",
    h1: "Managed payroll with a dedicated team behind it",
    intro:
      "Managed payroll goes beyond processing. A named payroll specialist learns your salary structures, policies and approval process, and runs every cycle as part of your team.",
    includes: [
      {
        title: "Named payroll specialist",
        body: "One accountable point of contact who knows your business, backed by a reviewing team.",
        icon: "headset",
      },
      {
        title: "Salary structure configuration",
        body: "CTC components, flexible benefit plans, overtime and leave rules set up and documented.",
        icon: "settings",
      },
      {
        title: "Maker-checker review",
        body: "Every payroll is prepared, then independently reviewed before it reaches you for approval.",
        icon: "shield",
      },
      {
        title: "Change management",
        body: "Appraisal cycles, restructures and policy changes applied accurately with a clear audit trail.",
        icon: "clipboard",
      },
      {
        title: "Management reporting",
        body: "Headcount, payroll cost and variance reporting in the format your leadership uses.",
        icon: "chart",
      },
      {
        title: "Employee helpdesk",
        body: "Optional first-line support for payslip, tax declaration and deduction questions.",
        icon: "users",
      },
    ],
    idealFor: [
      "Organisations with complex CTC structures or many locations",
      "Companies replacing or supplementing an in-house payroll team",
      "Businesses that need stronger controls and segregation of duties",
    ],
    local: {
      heading: "Local expertise, applied consistently",
      body: "Your specialist works with Indian statutory requirements every day and applies them consistently across states and cycles.",
      points: [
        "Budget and labour code changes applied when they take effect",
        "Documented processes that survive staff changes on your side",
        "Tax declaration windows and proof deadlines managed for employees",
      ],
    },
    faqs: [
      {
        q: "How is managed payroll different from payroll outsourcing?",
        a: "Both cover processing. Managed payroll adds a named specialist, documented structure configuration, deeper reporting and an optional employee helpdesk.",
      },
      {
        q: "Can we keep some payroll work in-house?",
        a: "Yes. We can agree a split of responsibilities, for example your team collects inputs and we handle calculation, review, filings and reporting.",
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
    summary: "PF, ESI, TDS, professional tax and labour law obligations handled with care.",
    metaTitle: "Payroll Compliance Services in India — PF, ESI, TDS, PT",
    metaDescription:
      "Payroll compliance support in India covering PF, ESI, TDS, professional tax, labour welfare fund, gratuity and statutory registers, with every figure prepared for your review.",
    eyebrow: "Payroll Compliance",
    h1: "Payroll compliance support for employers in India",
    intro:
      "Statutory payroll obligations in India involve central authorities, state departments, monthly challans and quarterly returns. We prepare the figures, filings and registers so you can meet them with confidence.",
    includes: [
      {
        title: "PF and ESI filings",
        body: "Monthly contributions, ECR and ESI returns, and UAN and IP management.",
        icon: "landmark",
      },
      {
        title: "TDS statements",
        body: "Monthly deposits computed, quarterly TDS statements prepared and annual certificates issued.",
        icon: "file-check",
      },
      {
        title: "Professional tax and LWF",
        body: "State-wise registrations, deductions and returns support.",
        icon: "map",
      },
      {
        title: "Gratuity and bonus",
        body: "Gratuity liability tracking and statutory bonus calculations for eligible employees.",
        icon: "scale",
      },
      {
        title: "Statutory registers",
        body: "Wage, attendance and leave registers maintained in an organised, retrievable form.",
        icon: "book",
      },
      {
        title: "Compliance calendar",
        body: "One calendar of central and state deadlines for every state you operate in.",
        icon: "clipboard",
      },
    ],
    idealFor: [
      "Employers expanding into new states",
      "Businesses preparing for audit, inspection or due diligence",
      "Companies reviewing salary structures under the labour codes",
    ],
    local: {
      heading: "What Indian payroll compliance involves",
      body: "Most employers deal with the EPFO, ESIC, the Income Tax Department and state authorities for professional tax, labour welfare and shops and establishments rules. Requirements depend on your headcount and states, so we confirm what applies to you during setup.",
      points: [
        "PF and ESI — Code on Social Security, 2020",
        "TDS on salary — Income-tax Act, 2025",
        "Wages and bonus — Code on Wages, 2019",
        "Professional tax and LWF — state legislation",
      ],
    },
    faqs: [
      {
        q: "Do you give legal or tax advice?",
        a: "We apply statutory payroll rules in processing and flag issues we notice. For legal or tax opinions on specific situations, we recommend your legal adviser or chartered accountant.",
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
    summary: "Hire employees in India without setting up a local entity.",
    metaTitle: "Employer of Record (EOR) in India",
    metaDescription:
      "Employ staff in India without a local entity. Our Employer of Record service handles employment contracts, payroll, PF, ESI, TDS and HR administration.",
    eyebrow: "Employer of Record",
    h1: "Employ people in India without a local entity",
    intro:
      "Our Employer of Record service lets you hire in India quickly. We become the legal employer, run payroll and statutory obligations, and you direct the employee's day-to-day work.",
    includes: [
      {
        title: "Local employment contracts",
        body: "Employment contracts prepared in line with Indian labour law and the relevant state rules.",
        icon: "file-check",
      },
      {
        title: "Payroll and contributions",
        body: "Monthly payroll, PF, ESI, TDS and professional tax handled as the legal employer.",
        icon: "wallet",
      },
      {
        title: "Onboarding",
        body: "Documentation, background verification coordination and statutory registrations.",
        icon: "users",
      },
      {
        title: "Benefits and HR administration",
        body: "Leave, group health insurance and employee records administered locally.",
        icon: "clipboard",
      },
    ],
    idealFor: [
      "Foreign companies hiring their first employees in India",
      "Businesses testing the market before setting up a subsidiary",
    ],
    local: {
      heading: "How EOR works in India",
      body: "The EOR is the legal employer on record while you manage the employee's work. Responsibilities are set out in a services agreement.",
      points: ["Legal employment through our Indian entity", "Statutory obligations handled locally"],
    },
    faqs: [],
    related: ["payroll-outsourcing", "staff-outsourcing"],
    approvalNote:
      "Requires the Indian legal entity that will act as employer, contract templates, liability terms and a view on permanent establishment risk before publishing.",
  },
  {
    slug: "recruitment",
    status: "published",
    group: "recruitment",
    icon: "user-search",
    name: "Recruitment Solutions",
    summary: "Permanent and contract hiring support, from role definition to offer.",
    metaTitle: "Recruitment Services in India",
    metaDescription:
      "Recruitment support in India for permanent and contract roles: role scoping, sourcing, screening, interview coordination and offer support.",
    eyebrow: "Recruitment",
    h1: "Recruitment support that finds the right people",
    intro:
      "India's talent market is large and competitive. We help define the role, source and screen candidates, and coordinate the process through to an accepted offer and a smooth first day.",
    includes: [
      {
        title: "Role scoping",
        body: "Clear role profiles, CTC benchmarks from available market data and a realistic hiring plan.",
        icon: "clipboard",
      },
      {
        title: "Sourcing",
        body: "Targeted search across job portals, professional networks and referrals.",
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
        title: "Offer and joining support",
        body: "Offer preparation and follow-up through the notice period to reduce drop-offs.",
        icon: "briefcase",
      },
      {
        title: "Onboarding handover",
        body: "A smooth handover into payroll and HR administration when you need it.",
        icon: "settings",
      },
    ],
    idealFor: [
      "Companies hiring for several roles or cities at once",
      "Businesses without an internal talent acquisition team",
      "International firms building a first team in India",
    ],
    local: {
      heading: "Hiring in the Indian market",
      body: "We understand CTC expectations, long notice periods, counter-offers and how candidates in different cities look for work, and we use that to plan your search.",
      points: [
        "Realistic timelines based on typical notice periods",
        "CTC and benefit expectations explained up front",
        "Engagement through the notice period to reduce offer drop-offs",
      ],
    },
    faqs: [
      {
        q: "Do you recruit for permanent and contract roles?",
        a: "Yes. We support both, and contract hires can be combined with our staff outsourcing service.",
      },
    ],
    related: ["staff-outsourcing", "hr-outsourcing", "payroll-outsourcing"],
    approvalNote: "Confirm recruitment is offered under the Payrolls India brand and whether any replacement guarantees apply.",
  },
  {
    slug: "hr-outsourcing",
    status: "published",
    group: "services",
    icon: "users",
    name: "HR Outsourcing",
    summary: "Day-to-day HR administration handled by experienced HR professionals.",
    metaTitle: "HR Outsourcing Services in India",
    metaDescription:
      "HR outsourcing in India: employee records, onboarding and exits, leave and attendance administration, HR letters and policy support.",
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
        title: "Onboarding and exits",
        body: "Joining formalities, exit processes and full and final handovers into payroll.",
        icon: "users",
      },
      {
        title: "Leave and attendance",
        body: "Leave balances, holiday calendars by state and attendance records tracked to your policies.",
        icon: "clipboard",
      },
      {
        title: "HR letters",
        body: "Offer, appointment, confirmation, experience and relieving letters prepared accurately.",
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
      "SMEs and startups without a full-time HR function",
      "Companies with lean HR teams that need administrative support",
      "International businesses with a small Indian workforce",
    ],
    local: {
      heading: "Aligned with Indian employment practice",
      body: "We administer HR processes in line with Indian employment practice, state rules and your own policies, and connect them to payroll so there are no gaps.",
      points: [
        "HR and payroll records kept consistent",
        "Joining and relieving dates flow straight into payroll",
        "State holiday calendars applied by location",
      ],
    },
    faqs: [
      {
        q: "Can HR outsourcing be combined with payroll?",
        a: "Yes. Combining these services can reduce double data entry and keep employee records aligned with payroll.",
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
    metaTitle: "Staff Outsourcing in India",
    metaDescription:
      "Staff outsourcing in India: we employ and administer outsourced staff, including payroll, PF, ESI and contract labour compliance, while they work on your projects.",
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
        body: "Salaries processed for outsourced employees, with PF, ESI, TDS and professional tax applied according to coverage and eligibility.",
        icon: "wallet",
      },
      {
        title: "Flexible headcount",
        body: "Add or reduce staff as your needs change, within agreed terms.",
        icon: "trending-up",
      },
      {
        title: "Contract labour compliance",
        body: "Licences, registers and returns maintained, with compliance evidence available to you as principal employer.",
        icon: "shield",
      },
    ],
    idealFor: [
      "Project-based teams with defined timelines",
      "Seasonal or peak-period staffing",
      "Companies managing headcount limits",
    ],
    local: {
      heading: "Compliant outsourced employment",
      body: "Outsourced staff are employed in line with Indian labour law. Principal employers can carry liability for unpaid dues, so we give you evidence that wages and contributions are paid every month.",
      points: [
        "Clear service agreements defining responsibilities",
        "Monthly proof of PF and ESI payments",
        "Transparent monthly invoicing",
      ],
    },
    faqs: [
      {
        q: "Who manages the outsourced staff day to day?",
        a: "You direct their work. We handle employment, payroll, statutory compliance and HR administration.",
      },
    ],
    related: ["recruitment", "hr-outsourcing", "payroll-outsourcing"],
    approvalNote: "Confirm the employing entity, contract labour licensing position and the standard service agreement before launch.",
  },
  {
    slug: "remote-staffing",
    status: "draft",
    group: "services",
    icon: "laptop",
    name: "Remote Staffing",
    summary: "Dedicated remote professionals in India working for international teams.",
    metaTitle: "Remote Staffing from India",
    metaDescription:
      "Build a dedicated remote team in India. We recruit, employ and administer remote professionals who work exclusively for your business.",
    eyebrow: "Remote Staffing",
    h1: "Build a dedicated remote team in India",
    intro:
      "Access skilled professionals in India who work exclusively on your business. We recruit, employ and administer them locally.",
    includes: [
      { title: "Recruitment", body: "Candidates sourced and screened for your requirements.", icon: "user-search" },
      { title: "Local employment", body: "Employment, payroll and benefits administered in India.", icon: "file-check" },
      { title: "Ongoing support", body: "HR support for your remote team members.", icon: "headset" },
    ],
    idealFor: ["International companies building offshore teams"],
    local: {
      heading: "Why India for remote teams",
      body: "To be completed with approved positioning.",
      points: [],
    },
    faqs: [],
    related: ["recruitment", "staff-outsourcing"],
    approvalNote: "Positioning, workspace and equipment model, and pricing approach to be confirmed.",
  },
  {
    slug: "managed-services",
    status: "draft",
    group: "services",
    icon: "building",
    name: "Managed Services",
    summary: "Outcome-based management of defined business functions.",
    metaTitle: "Managed Services in India",
    metaDescription:
      "Managed workforce services in India, where we take responsibility for delivering a defined business function to agreed service levels.",
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
