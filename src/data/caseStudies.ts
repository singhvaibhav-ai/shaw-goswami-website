export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  industry: string;
  solutionType: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics: CaseStudyMetric[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "fmcg-demand-rebalancing",
    title: "Revolutionizing Inventory Management for a Global FMCG Leader",
    industry: "Retail & FMCG",
    solutionType: "Enterprise AI Strategy & Data Analytics",
    challenge: "A multinational consumer goods distributor suffered from a high 38% forecast error rate across its supply chain network, leading to $12M annually in carrying costs and frequent stockouts during seasonal demand swings.",
    solution: "We deployed a custom machine learning demand forecasting platform. By integrating historical POS transactions, localized weather forecasts, and distributor stock levels, we engineered a multi-variable predictive model mapping demand fluctuations at the individual SKU-location level. We also redesigned their Sales & Operations Planning (S&OP) processes to ingest predictions dynamically.",
    outcome: "The integration of predictive insights synchronized manufacturing targets with actual consumer buying cycles, dramatically lowering supply chain friction.",
    metrics: [
      { value: "26%", label: "Reduction in Forecast Error" },
      { value: "$4.5M", label: "Inventory Carrying Cost Savings" },
      { value: "14%", label: "Improvement in On-Shelf Product Availability" }
    ]
  },
  {
    slug: "automotive-digital-twin",
    title: "Scaling Production Efficiency with Digital Twin Simulation",
    industry: "Manufacturing",
    solutionType: "Digital Product Engineering",
    challenge: "A leading automotive parts supplier faced production bottlenecking on its heavy engine assembly line. Changing physical layouts was too high-risk and costly to test on live operations, causing optimization gridlocks.",
    solution: "We constructed a high-fidelity digital twin of the factory floor, mapping assembly steps, machinery cycle times, and buffer states. We ran over 50,000 simulated scenarios modeling mechanical variables, and designed an optimized scheduling model. The changes were implemented over a single weekend with zero startup delays.",
    outcome: "Enabled engineers to pressure-test optimizations virtually, ensuring complete operational continuity and maximum efficiency before layout adjustments.",
    metrics: [
      { value: "18%", label: "Increase in Daily Output Volume" },
      { value: "0 hours", label: "Operational Downtime During Re-layout" },
      { value: "4.8 months", label: "Project Capital Payback Period" }
    ]
  },
  {
    slug: "commercial-credit-audit",
    title: "Accelerating Loan Underwriting via Document Intelligence",
    industry: "Financial Services",
    solutionType: "AI & Intelligent Automation",
    challenge: "A commercial lender spent an average of 12-14 business days manually parsing corporate tax sheets, banking statements, and legal ledgers to underwrite small-business loans, creating a severe application backlog.",
    solution: "We built an advanced Document Intelligence processing pipeline utilizing custom Vision-LLMs. The system scanned, classified, and extracted key financial items from unstructured files, cross-referencing them against public filings. We deployed a Human-in-the-Loop validation desktop app for underwriters to audit anomalies.",
    outcome: "Standardized ledger parsing completely, enabling commercial underwriters to process double the application volume with zero compromise on risk profiles.",
    metrics: [
      { value: "98.8%", label: "Intake Automation Rate" },
      { value: "40 min", label: "Average Processing Time per Application" },
      { value: "92%", label: "Reduction in Loan Backlog Volume" }
    ]
  }
];
