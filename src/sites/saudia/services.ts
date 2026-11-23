import type { Service } from "../types";

/**
 * Saudi Arabia service catalogue.
 * Status reflects what management has confirmed is offered under the
 * Payroll Saudia brand. See docs/CONTENT-APPROVALS-SAUDI.md.
 */
export const services: Service[] = [
  {
    slug: "payroll-outsourcing",
    status: "published",
    group: "payroll",
    icon: "wallet",
    name: "Payroll Outsourcing",
    summary: "End-to-end monthly payroll, from salary inputs to payslips, GOSI and the WPS file.",
    metaTitle: "Payroll Outsourcing in Saudi Arabia",
    metaDescription:
      "Outsource payroll in Saudi Arabia: salary calculation, GOSI, WPS wage files for Mudad, end-of-service accruals, payslips and reporting, managed every month by a dedicated team.",
    eyebrow: "Payroll Outsourcing",
    h1: "Payroll outsourcing for businesses in Saudi Arabia",
    intro:
      "Hand over the monthly payroll cycle to a team that does it every day. We calculate pay for Saudi and expatriate employees, keep GOSI and WPS aligned, prepare payslips and keep your records audit-ready.",
    includes: [
      {
        title: "Monthly salary processing",
        body: "Gross-to-net calculations covering basic pay, housing and transport allowances, overtime, bonuses, unpaid leave and deductions.",
        icon: "calculator",
      },
      {
        title: "GOSI contributions",
        body: "Saudi and expatriate contributions calculated each cycle, with joiner, leaver and wage updates prepared.",
        icon: "landmark",
      },
      {
        title: "WPS wage file",
        body: "The monthly Mudad wage file prepared and checked against contract and GOSI data before submission.",
        icon: "file-check",
      },
      {
        title: "End-of-service and leave accruals",
        body: "Monthly liability accruals and final settlement calculations for leavers.",
        icon: "scale",
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
      "Businesses with a mix of Saudi and expatriate employees",
      "International companies opening a regional headquarters in Saudi Arabia",
      "Finance teams that want to focus on reporting rather than processing",
    ],
    local: {
      heading: "Built around Saudi payroll requirements",
      body: "Saudi payroll depends on consistent data across payroll, contracts and government platforms. We keep them aligned and apply regulatory changes as they take effect.",
      points: [
        "GOSI contributions under the old and new Social Insurance rules",
        "WPS wage files prepared for Mudad every month",
        "End-of-service benefits calculated to the Labour Law",
        "Ramadan working hours and overtime applied correctly",
      ],
    },
    faqs: [
      {
        q: "What do you need from us each month?",
        a: "Usually attendance and leave data, joiners and leavers, salary changes and any one-off payments. We agree a simple input format and monthly cut-off during setup.",
      },
      {
        q: "Who approves the payroll before payment?",
        a: "You do. We prepare the payroll and reports for your review, and salaries are released only after your approval.",
      },
      {
        q: "Do you calculate final settlements?",
        a: "Yes. We calculate end-of-service benefits, leave encashment and other final dues for leavers, for your approval.",
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
    metaTitle: "Managed Payroll Services in Saudi Arabia",
    metaDescription:
      "Managed payroll in Saudi Arabia with a named payroll specialist, documented pay policies, maker-checker review and monthly reporting tailored to your business.",
    eyebrow: "Managed Payroll",
    h1: "Managed payroll with a dedicated team behind it",
    intro:
      "Managed payroll goes beyond processing. A named payroll specialist learns your pay structures, policies and approval process, and runs every cycle as part of your team.",
    includes: [
      {
        title: "Named payroll specialist",
        body: "One accountable point of contact who knows your business, backed by a reviewing team.",
        icon: "headset",
      },
      {
        title: "Policy configuration",
        body: "Allowances, overtime rules, leave policies and approval steps set up and documented.",
        icon: "settings",
      },
      {
        title: "Maker-checker review",
        body: "Every payroll is prepared, then independently reviewed before it reaches you for approval.",
        icon: "shield",
      },
      {
        title: "Change management",
        body: "Salary revisions, restructures and policy changes applied accurately with a clear audit trail.",
        icon: "clipboard",
      },
      {
        title: "Management reporting",
        body: "Headcount, payroll cost, nationality mix and variance reporting in the format your leadership uses.",
        icon: "chart",
      },
      {
        title: "Employee queries",
        body: "Optional first-line support for payslip and deduction questions.",
        icon: "users",
      },
    ],
    idealFor: [
      "Organisations with complex allowance structures or several cities",
      "Companies replacing or supplementing an in-house payroll team",
      "Businesses that need stronger controls and segregation of duties",
    ],
    local: {
      heading: "Local expertise, applied consistently",
      body: "Your specialist works with Saudi regulations and government platforms every day and applies them consistently across every cycle.",
      points: [
        "Regulatory changes reviewed and applied when they take effect",
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
        a: "Yes. We can agree a split of responsibilities, for example your team collects inputs and we handle calculation, review, WPS and reporting.",
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
    summary: "GOSI, WPS, end-of-service and Labour Law obligations handled with care.",
    metaTitle: "Payroll Compliance Services in Saudi Arabia — GOSI, WPS",
    metaDescription:
      "Payroll compliance support in Saudi Arabia covering GOSI, the Wage Protection System, end-of-service benefits, Labour Law calculations and Saudization reporting.",
    eyebrow: "Payroll Compliance",
    h1: "Payroll compliance support for employers in Saudi Arabia",
    intro:
      "Saudi payroll compliance means keeping payroll, contracts and government platforms in step. We prepare the figures, files and reports so you can meet your obligations with confidence.",
    includes: [
      {
        title: "GOSI",
        body: "Contribution calculations, monthly updates and reconciliation against the GOSI invoice.",
        icon: "landmark",
      },
      {
        title: "Wage Protection System",
        body: "Monthly Mudad wage files, checked for mismatches with contracts and GOSI data.",
        icon: "file-check",
      },
      {
        title: "End-of-service benefits",
        body: "Accruals during employment and final calculations at exit.",
        icon: "scale",
      },
      {
        title: "Labour Law calculations",
        body: "Overtime, leave, Ramadan hours and final dues calculated to the statutory rules.",
        icon: "book",
      },
      {
        title: "Saudization reporting",
        body: "Headcount and nationality reports that support Nitaqat tracking.",
        icon: "chart",
      },
      {
        title: "Compliance calendar",
        body: "One calendar of monthly and annual payroll deadlines for your business.",
        icon: "clipboard",
      },
    ],
    idealFor: [
      "Employers who want certainty on WPS and GOSI compliance",
      "Businesses preparing for audit, due diligence or a Ministry inspection",
      "Companies adjusting to the new Social Insurance Law and Labour Law amendments",
    ],
    local: {
      heading: "What Saudi payroll compliance involves",
      body: "Most employers deal with GOSI, the Ministry of Human Resources and Social Development through Mudad and Qiwa, and the Council of Health Insurance. Requirements depend on your workforce and activity, so we confirm what applies to you during setup.",
      points: [
        "GOSI — Social Insurance Law",
        "WPS — Mudad",
        "Contracts and Saudization — Qiwa and Nitaqat",
        "End of service, leave and overtime — Labour Law",
      ],
    },
    faqs: [
      {
        q: "Do you give legal advice?",
        a: "We apply statutory payroll rules in processing and flag issues we notice. For legal opinions on specific situations, we recommend your legal adviser.",
      },
      {
        q: "Can you help us fix past payroll or GOSI errors?",
        a: "We can review historical payroll and GOSI data, identify discrepancies and prepare corrected calculations for you and your advisers to act on.",
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
    summary: "Hire employees in Saudi Arabia without setting up a local entity.",
    metaTitle: "Employer of Record (EOR) in Saudi Arabia",
    metaDescription:
      "Employ staff in Saudi Arabia without a local entity. Our Employer of Record service handles contracts, payroll, GOSI, WPS and HR administration.",
    eyebrow: "Employer of Record",
    h1: "Employ people in Saudi Arabia without a local entity",
    intro:
      "Our Employer of Record service lets you hire in Saudi Arabia quickly. We become the legal employer, run payroll and statutory obligations, and you direct the employee's day-to-day work.",
    includes: [
      {
        title: "Local employment contracts",
        body: "Contracts prepared in line with the Saudi Labour Law and documented on Qiwa.",
        icon: "file-check",
      },
      {
        title: "Payroll and contributions",
        body: "Monthly payroll, GOSI and WPS handled as the legal employer.",
        icon: "wallet",
      },
      {
        title: "Onboarding",
        body: "Employee onboarding and documentation, including work permits and residency for expatriates.",
        icon: "users",
      },
      {
        title: "Benefits and HR administration",
        body: "Medical insurance, leave and employee records administered locally.",
        icon: "clipboard",
      },
    ],
    idealFor: [
      "Foreign companies hiring their first employees in Saudi Arabia",
      "Businesses testing the market before setting up an entity",
    ],
    local: {
      heading: "How EOR works in Saudi Arabia",
      body: "The EOR is the legal employer on record while you manage the employee's work. Responsibilities are set out in a services agreement.",
      points: ["Legal employment through our Saudi entity", "Statutory obligations handled locally"],
    },
    faqs: [],
    related: ["payroll-outsourcing", "hr-outsourcing"],
    approvalNote:
      "Requires the Saudi legal entity and licences that allow it to employ on behalf of clients, contract templates and liability terms before publishing.",
  },
  {
    slug: "recruitment",
    status: "published",
    group: "recruitment",
    icon: "user-search",
    name: "Recruitment Solutions",
    summary: "Permanent and contract hiring support, from role definition to offer.",
    metaTitle: "Recruitment Services in Saudi Arabia",
    metaDescription:
      "Recruitment support in Saudi Arabia for Saudi and expatriate roles: role scoping, sourcing, screening, interview coordination and offer support.",
    eyebrow: "Recruitment",
    h1: "Recruitment support that finds the right people",
    intro:
      "Hiring in Saudi Arabia means balancing skills, Saudization targets and onboarding requirements. We help define the role, source and screen candidates, and coordinate the process through to an accepted offer.",
    includes: [
      {
        title: "Role scoping",
        body: "Clear role profiles, salary benchmarks from available market data and a realistic hiring plan.",
        icon: "clipboard",
      },
      {
        title: "Saudi talent sourcing",
        body: "Targeted search for Saudi nationals to support your localisation goals.",
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
        body: "A smooth handover into payroll, GOSI registration and HR administration.",
        icon: "settings",
      },
    ],
    idealFor: [
      "Companies hiring for several roles at once",
      "Businesses working towards Saudization targets",
      "International firms building a first team in Saudi Arabia",
    ],
    local: {
      heading: "Hiring in the Saudi market",
      body: "We understand salary and allowance expectations, Saudization requirements and how candidates look for work, and we use that to plan your search.",
      points: [
        "Saudi and expatriate hiring planned together",
        "Allowance and benefit expectations explained up front",
        "Smooth handover to payroll and GOSI for new joiners",
      ],
    },
    faqs: [
      {
        q: "Do you recruit Saudi nationals and expatriates?",
        a: "We support both, subject to the applicable licensing and the work permit rules for each role.",
      },
    ],
    related: ["hr-outsourcing", "payroll-outsourcing"],
    approvalNote:
      "Confirm recruitment is offered under the Payroll Saudia brand, the licences held, and whether overseas recruitment is in scope.",
  },
  {
    slug: "hr-outsourcing",
    status: "published",
    group: "services",
    icon: "users",
    name: "HR Outsourcing",
    summary: "Day-to-day HR administration, including government platform updates.",
    metaTitle: "HR Outsourcing Services in Saudi Arabia",
    metaDescription:
      "HR outsourcing in Saudi Arabia: employee records, onboarding and exits, leave administration, Qiwa and GOSI updates, HR letters and policy support.",
    eyebrow: "HR Outsourcing",
    h1: "HR outsourcing that keeps your people operations running",
    intro:
      "Keep HR administration accurate and consistent without growing your internal team. We handle the routine work, including platform updates, so your managers can focus on their people.",
    includes: [
      {
        title: "Employee records",
        body: "Organised, confidential employee files and HR data maintained on your behalf.",
        icon: "lock",
      },
      {
        title: "Onboarding and exits",
        body: "Joiner and leaver processes, documentation and handovers into payroll.",
        icon: "users",
      },
      {
        title: "Platform updates",
        body: "Contract, wage and status updates kept consistent across Qiwa, GOSI and Mudad.",
        icon: "settings",
      },
      {
        title: "Leave administration",
        body: "Leave balances, entitlements and records tracked to the Labour Law and your policies.",
        icon: "clipboard",
      },
      {
        title: "HR letters and policies",
        body: "Employment letters, salary certificates and help maintaining your employee handbook.",
        icon: "file-check",
      },
      {
        title: "HR reporting",
        body: "Headcount, nationality mix, attrition and leave reporting for management.",
        icon: "chart",
      },
    ],
    idealFor: [
      "SMEs without a full-time HR function",
      "Companies with lean HR teams that need administrative support",
      "International businesses with a small Saudi workforce",
    ],
    local: {
      heading: "Aligned with Saudi employment practice",
      body: "We administer HR processes in line with the Saudi Labour Law and your policies, and keep platform records in step with payroll so there are no mismatches.",
      points: [
        "HR, payroll and platform records kept consistent",
        "Joiner and leaver dates flow straight into payroll and GOSI",
        "Leave and attendance data ready for each pay cycle",
      ],
    },
    faqs: [
      {
        q: "Can HR outsourcing be combined with payroll?",
        a: "Yes. Most clients combine them, which removes double data entry and keeps employee records aligned with payroll and government platforms.",
      },
    ],
    related: ["payroll-outsourcing", "recruitment", "payroll-compliance"],
    approvalNote: "Confirm which government platform transactions the team will perform on clients' behalf, and under what authorisations.",
  },
  {
    slug: "staff-outsourcing",
    status: "draft",
    group: "services",
    icon: "briefcase",
    name: "Staff Outsourcing",
    summary: "Outsourced staff employed and administered by us, working under your direction.",
    metaTitle: "Staff Outsourcing in Saudi Arabia",
    metaDescription:
      "Staff outsourcing in Saudi Arabia: we employ and administer outsourced staff, including payroll, GOSI and WPS, while they work on your projects.",
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
        body: "Salaries, GOSI and WPS processed for every outsourced employee.",
        icon: "wallet",
      },
      {
        title: "Flexible headcount",
        body: "Add or reduce staff as your needs change, within agreed terms.",
        icon: "trending-up",
      },
    ],
    idealFor: ["Project-based teams with defined timelines", "Seasonal or peak-period staffing"],
    local: {
      heading: "Compliant outsourced employment",
      body: "Supplying staff to other businesses is a licensed activity in Saudi Arabia.",
      points: [],
    },
    faqs: [],
    related: ["recruitment", "hr-outsourcing"],
    approvalNote:
      "Manpower supply requires a specific Ministry licence. Publish only once the employing entity holds it and the service agreement is approved.",
  },
  {
    slug: "managed-services",
    status: "draft",
    group: "services",
    icon: "building",
    name: "Managed Services",
    summary: "Outcome-based management of defined business functions.",
    metaTitle: "Managed Services in Saudi Arabia",
    metaDescription:
      "Managed workforce services in Saudi Arabia, where we take responsibility for delivering a defined business function to agreed service levels.",
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
    related: ["hr-outsourcing", "payroll-outsourcing"],
    approvalNote: "Which functions are offered as managed services is not yet defined.",
  },
];
