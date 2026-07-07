export interface IndustryRoadmapStep {
  phase: string;
  title: string;
  duration: string;
  description: string;
}

export interface IndustryCaseStudy {
  title: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics: string[];
}

export interface Industry {
  slug: string;
  title: string;
  summary: string;
  iconName: string;
  bgImage: string;
  challenges: string[];
  opportunities: string[];
  roadmap: IndustryRoadmapStep[];
  solutions: string[]; // Linked solution slugs
  caseStudies: IndustryCaseStudy[];
  outcomes: string[];
}

export const industries: Industry[] = [
  {
    slug: "healthcare",
    title: "Healthcare",
    summary: "Deliver patient-centric care, reduce clinician administrative burdens, and optimize diagnostic operations using secure, HIPAA-compliant AI models.",
    iconName: "Activity",
    bgImage: "/images/healthcare_consulting.jpg",
    challenges: [
      "Clinician burnout from excessive EHR documentation workload.",
      "Fragmented patient data and slow clinical triage flows.",
      "Increasing costs of patient administration and claims management."
    ],
    opportunities: [
      "Clinical Charting Automation: Ambient audio-to-soap notes scribing.",
      "Intelligent Patient Triage: Predicting readmission risks and triaging ER queues.",
      "Medical Document Ingestion: Automating prior-authorization request audits."
    ],
    roadmap: [
      { phase: "Phase 1", title: "Compliance & Data Governance Setup", duration: "1-2 Months", description: "Establish HIPAA-compliant cloud and data-sharing interfaces, mapping legacy EHR APIs (HL7/FHIR)." },
      { phase: "Phase 2", title: "Ambient Scribe Pilot", duration: "3-4 Months", description: "Deploy ambient AI transcription to a test cohort of doctors to automate clinical charting and note creation." },
      { phase: "Phase 3", title: "Claims Ingestion Automation", duration: "5-6 Months", description: "Roll out AI Document Intelligence to automatically process and pre-audit health insurance claims and referrals." },
      { phase: "Phase 4", title: "Clinical Support Scaling", duration: "Ongoing", description: "Incorporate predictive AI models for preventive diagnostic suggestions and patient readmission risk alerts." }
    ],
    solutions: ["healthcare-ai-assistant", "document-intelligence", "knowledge-assistant"],
    caseStudies: [
      {
        title: "Ambient Scribe Integration for Hospital System",
        challenge: "Clinicians at a large healthcare network spent 3.5 hours per day on administrative documentation, causing severe burnout.",
        solution: "Integrated a custom ambient clinical transcription system mapping to the hospital's EHR API.",
        outcome: "Drastically reduced administrative time and restored doctor-patient interaction quality.",
        metrics: [
          "2.2 Hours saved per doctor/day",
          "98.5% EHR Chart Accuracy",
          "15% increase in daily patient visits capacity"
        ]
      }
    ],
    outcomes: [
      "Substantive reduction in administrative overhead",
      "Improved clinical accuracy and clinical audit trail compliance",
      "Faster prior-authorization and billing cycles"
    ]
  },
  {
    slug: "retail-fmcg",
    title: "Retail & FMCG",
    summary: "Align inventory dynamically with shifting consumer demands, optimize pricing strategies, and personalize customer experiences at scale.",
    iconName: "ShoppingBag",
    bgImage: "/images/retail_consulting.jpg",
    challenges: [
      "Unpredictable seasonal demand swings causing inventory stockouts and markdowns.",
      "Siloed sales and marketing channels leading to disjointed data.",
      "High customer acquisition costs coupled with low retention rates."
    ],
    opportunities: [
      "Predictive Merchandising: High-precision demand forecasting at SKU-level.",
      "Dynamic Pricing Engines: Adjusting margins in real-time based on competitors and supply.",
      "Autonomous Customer Care: Conversational agents handling refunds, rebookings, and tracking."
    ],
    roadmap: [
      { phase: "Phase 1", title: "Omnichannel Data Ingestion", duration: "2 Months", description: "Consolidate ERP, web commerce, and store POS transaction logs into a clean, modern data warehouse." },
      { phase: "Phase 2", title: "SKU Forecasting Rollout", duration: "3-4 Months", description: "Deploy localized demand forecasting models across top-performing distribution zones." },
      { phase: "Phase 3", title: "Dynamic Pricing Engine", duration: "5 Months", description: "Implement real-time market scrapers and margin optimizers to dynamically adjust ecommerce prices." },
      { phase: "Phase 4", title: "AI Loyalty & Chat Agents", duration: "6 Months+", description: "Deploy transactional chat agents for customized customer offers and support resolution." }
    ],
    solutions: ["demand-forecasting", "ai-customer-support", "document-intelligence"],
    caseStudies: [
      {
        title: "Supply-Demand Rebalancing for Multi-Brand Retailer",
        challenge: "A national clothing brand suffered from huge end-of-season inventory write-offs due to inaccurate demand predictions.",
        solution: "Deployed custom predictive SKU forecasting pipelines utilizing localized marketing budgets and weather trends.",
        outcome: "Synchronized manufacturing targets directly with forecasted customer buying cycles.",
        metrics: [
          "32% Reduction in end-of-season inventory markdowns",
          "18% Increase in full-price sales volumes",
          "ROI on implementation achieved in 4.5 months"
        ]
      }
    ],
    outcomes: [
      "Drastic reduction in warehouse inventory carrying costs",
      "Minimized shelf stockouts of top-margin items",
      "Unified operational visibility across online and offline channels"
    ]
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    summary: "Optimize heavy asset performance, prevent assembly line bottlenecks, and scale quality control through digital twins and computer vision.",
    iconName: "Cpu",
    bgImage: "/images/manufacturing_consulting.jpg",
    challenges: [
      "Unexpected machinery breakdowns leading to expensive factory downtime.",
      "Manual and slow visual quality assurance inspections.",
      "Complex manufacturing line scheduling with high variable dependencies."
    ],
    opportunities: [
      "Predictive Maintenance: IoT sensor analytics identifying anomalies before failures occur.",
      "Assembly Simulation: Running digital twins to optimize factory layout modifications.",
      "Automated Defect Detection: Real-time high-speed computer vision audits."
    ],
    roadmap: [
      { phase: "Phase 1", title: "Factory Floor Digitization", duration: "2 Months", description: "Instrument production machinery with vibration, temperature, and cycle sensors connecting to a central pipeline." },
      { phase: "Phase 2", title: "Predictive Maintenance Modeling", duration: "3 Months", description: "Train anomaly detection models on historical machine downtime logs and real-time streams." },
      { phase: "Phase 3", title: "Digital Twin Construction", duration: "4-5 Months", description: "Construct a 3D simulation of assembly processes to test line modifications." },
      { phase: "Phase 4", title: "Closed-Loop Automation", duration: "6 Months+", description: "Integrate predictive alerts directly into the ERP to automate maintenance dispatch." }
    ],
    solutions: ["digital-twin-simulation", "process-automation", "supply-chain-tower"],
    caseStudies: [
      {
        title: "Downtime Prevention at Heavy Machinery Plant",
        challenge: "An automotive supplier lost an average of $80,000 per hour during unexpected casting-press failure events.",
        solution: "Installed vibration sensors and trained models to flag abnormal wear patterns.",
        outcome: "Moved from reactive to predictive maintenance scheduling.",
        metrics: [
          "74% Reduction in unplanned machine downtime",
          "22% Extension in heavy machinery tool life",
          "$1.4M saved in plant operational budgets in Year 1"
        ]
      }
    ],
    outcomes: [
      "Increased plant equipment efficiency (OEE)",
      "Minimized material wastage through real-time defect audits",
      "Reduced safety hazards by predicting mechanical failures"
    ]
  },
  {
    slug: "financial-services",
    title: "Financial Services",
    summary: "Accelerate credit auditing, detect complex transaction fraud patterns, and provide personalized wealth management advisory with robust AI risk controls.",
    iconName: "DollarSign",
    bgImage: "/images/financial_consulting.jpg",
    challenges: [
      "Rigid legacy fraud engines generating high false-alarm rates.",
      "Slow, manual credit auditing and document review for commercial loans.",
      "High compliance overhead and audit trail management requirements."
    ],
    opportunities: [
      "Real-time Fraud Modeling: Self-learning neural networks auditing transaction queues.",
      "Credit Extraction Pipeline: Automated parsing of corporate tax sheets and banking logs.",
      "Regulatory Audit Agent: LLM agents cross-referencing files against compliance logs."
    ],
    roadmap: [
      { phase: "Phase 1", title: "Security & Sandbox Architecture", duration: "2 Months", description: "Deploy a highly secure, private cloud environment conforming to SOC2 and financial privacy regulations." },
      { phase: "Phase 2", title: "Document Intelligence Intake", duration: "3 Months", description: "Deploy AI parsing engines for processing loan applications and extracting financial tables." },
      { phase: "Phase 3", title: "Fraud Model Upgrade", duration: "4-5 Months", description: "Integrate advanced graph neural network layers into active transaction queues." },
      { phase: "Phase 4", title: "Compliance Automation Agent", duration: "6 Months+", description: "Automate regulatory audit report generation and compliance monitoring." }
    ],
    solutions: ["document-intelligence", "executive-decision-intelligence", "process-automation"],
    caseStudies: [
      {
        title: "Credit Audit Automation for Commercial Lender",
        challenge: "An investment bank spent weeks parsing unstructured company reports during small-business loan evaluations.",
        solution: "Built a Vision-LLM spreadsheet extractor that standardizes ledger and tax returns data.",
        outcome: "Accelerated credit audit loops, enabling faster approvals without compromising risk profiles.",
        metrics: [
          "Loan evaluation cycles cut from 14 days to 40 minutes",
          "99.6% Extraction Accuracy of financial cells",
          "45% Increase in loan processing volume capability"
        ]
      }
    ],
    outcomes: [
      "Drastic reduction in compliance audit times",
      "Minimized fraud losses while reducing customer transaction friction",
      "Higher commercial underwriting throughput"
    ]
  },
  {
    slug: "logistics",
    title: "Logistics",
    summary: "Optimize multi-modal distribution routes, automate warehouse inventory auditing, and orchestrate global carrier networks dynamically.",
    iconName: "Truck",
    bgImage: "/images/logistics_consulting.jpg",
    challenges: [
      "Unpredictable freight market pricing and capacity volatility.",
      "Inefficient route planning leading to excess fuel usage and delivery delays.",
      "Lack of dynamic exception handling in last-mile transport."
    ],
    opportunities: [
      "Dynamic Routing Engines: Simulating weather, traffic, and vehicle states to calculate optimal routes.",
      "Global Network Visibility: Control towers monitoring carrier APIs and GPS updates.",
      "Automated Bill of Lading Audit: Vision-AI ingesting customs and loading slips."
    ],
    roadmap: [
      { phase: "Phase 1", title: "Carrier API Aggregation", duration: "2 Months", description: "Build unified API bridges across all 3PL partners to pull real-time location logs." },
      { phase: "Phase 2", title: "Custom Routing Deployment", duration: "3 Months", description: "Integrate dynamic routing models with dispatch dispatch dashboards." },
      { phase: "Phase 3", title: "Exception Automation", duration: "4-5 Months", description: "Deploy alert agents that auto-reroute cargo when bottlenecks are flagged." },
      { phase: "Phase 4", title: "Logistics Control Tower Integration", duration: "6 Months+", description: "Connect freight data directly with customer notification systems." }
    ],
    solutions: ["supply-chain-tower", "demand-forecasting", "process-automation"],
    caseStudies: [
      {
        title: "Dynamic Dispatch Re-routing for Freight Carrier",
        challenge: "A global logistics firm incurred heavy delay penalty fees due to unpredictable harbor congestion issues.",
        solution: "Developed an exception-management control tower that monitored port wait times and auto-re-routed trucks.",
        outcome: "Created a self-correcting logistics routing web, optimizing transport asset utilization.",
        metrics: [
          "26% Reduction in late-delivery penalties",
          "14% Lower fuel consumption costs through route optimization",
          "Improved cargo turnaround times by 1.5 days"
        ]
      }
    ],
    outcomes: [
      "Optimized fleet resource utilization",
      "Lower fuel costs and greenhouse emissions profiles",
      "Unified operational control over disjoint carrier platforms"
    ]
  },
  {
    slug: "energy",
    title: "Energy & Utilities",
    summary: "Predict power grid demand anomalies, schedule turbine predictive maintenance, and balance renewable energy distribution grids using machine learning.",
    iconName: "Zap",
    bgImage: "/images/energy_consulting.jpg",
    challenges: [
      "Volatile solar and wind production levels disrupting grid stability.",
      "Extremely expensive emergency maintenance events on remote infrastructure.",
      "Highly complex regulatory frameworks governing energy generation."
    ],
    opportunities: [
      "Grid Load Forecasting: Modeling grid load patterns by combining weather forecasts and industrial usage data.",
      "Predictive Asset Maintenance: Thermal imagery and sensor analysis flagging wear in turbines.",
      "Dynamic Pricing Integration: Adjusting grid pricing models automatically based on demand."
    ],
    roadmap: [
      { phase: "Phase 1", title: "Grid Data Consolidation", duration: "2-3 Months", description: "Consolidate telemetry feeds from sub-stations, smart meters, and solar farms." },
      { phase: "Phase 2", title: "Load Forecasting Engine", duration: "3 Months", description: "Deploy high-accuracy predictive load simulators to prevent grid overloads." },
      { phase: "Phase 3", title: "Predictive Maintenance Pilots", duration: "4-5 Months", description: "Deploy drone visual analysis pipelines to scan remote grid equipment." },
      { phase: "Phase 4", title: "Automated Grid Balancing", duration: "6 Months+", description: "Automate dynamic power routing to optimize battery storage grids." }
    ],
    solutions: ["demand-forecasting", "digital-twin-simulation", "knowledge-assistant"],
    caseStudies: [
      {
        title: "Wind Turbine Lifetime Extension through Predictive AI",
        challenge: "An offshore wind farm suffered from frequent, unpredicted gearbox failures that took weeks to repair.",
        solution: "Built anomaly-detection models utilizing vibration sensors and oil-quality telemetry feeds.",
        outcome: "Enabled engineers to schedule repairs during low-wind windows, avoiding emergency costs.",
        metrics: [
          "82% Reduction in emergency offshore logistics fees",
          "5% Higher annual wind energy production (AEP)",
          "Extended gearbox asset life by an average of 4 years"
        ]
      }
    ],
    outcomes: [
      "Drastically lower grid operational risks",
      "Higher yield integration of fluctuating renewable assets",
      "Lower compliance reporting overhead through automated logs"
    ]
  },
  {
    slug: "public-sector",
    title: "Government & Public Sector",
    summary: "Enhance citizen services delivery, optimize resource allocation budgets, and streamline public records filing using highly secure, sovereign AI models.",
    iconName: "Globe",
    bgImage: "/images/public_sector_consulting.jpg",
    challenges: [
      "Outdated municipal back-office software and slow paper filing.",
      "Overburdened support centers causing poor citizen experiences.",
      "Strict data sovereignty and public compliance requirements."
    ],
    opportunities: [
      "Citizen Document Audit: Ingesting license filings and building permits.",
      "Sovereign Knowledge Portal: RAG portals answering administrative queries safely.",
      "Resource Allocation Simulation: Optimizing city public transit lines."
    ],
    roadmap: [
      { phase: "Phase 1", title: "On-Prem / Sovereign Cloud Setup", duration: "3 Months", description: "Configure localized cloud hostings conforming to municipal data sovereignty laws." },
      { phase: "Phase 2", title: "Citizen Portal Assist", duration: "3 Months", description: "Launch secure semantic assistants helping citizens find services and file documents." },
      { phase: "Phase 3", title: "Municipal Ingestion Automation", duration: "4-5 Months", description: "Deploy document extraction tools to process permits and licenses." },
      { phase: "Phase 4", title: "Transit Network Simulation", duration: "6 Months+", description: "Utilize digital twin simulation systems to plan bus and transit network routes." }
    ],
    solutions: ["knowledge-assistant", "document-intelligence", "digital-twin-simulation"],
    caseStudies: [
      {
        title: "Municipal Build Permit Extraction System",
        challenge: "A city administration had a backlog of 14,000 building permit forms, delaying infrastructure projects.",
        solution: "Built a secure local Document Intelligence system to classify permits and verify inputs.",
        outcome: "Cleaned the application backlog, accelerating municipal zoning review cycles.",
        metrics: [
          "Permit intake processing time cut by 85%",
          "Zero public data leaks or compliance violations",
          "Cleared backlog within 3 months of deployment"
        ]
      }
    ],
    outcomes: [
      "Faster citizen filing and turnaround times",
      "Reduced municipal operational backlogs",
      "Complete transparency and security audit logs"
    ]
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    summary: "Boost billable consultant productivity, automate complex proposal workflows, and run high-accuracy contract audits using intelligent document analysis.",
    iconName: "Briefcase",
    bgImage: "/images/professional_services_consulting.jpg",
    challenges: [
      "Billable hours lost to manual legal research and presentation compilation.",
      "High costs and errors in auditing thousands of third-party contracts.",
      "Slow, manual RFP proposal writing processes."
    ],
    opportunities: [
      "Strategic Proposal Assistants: Ingesting project scope sheets to output tailored bids.",
      "Contract Audit Scanners: Vision-LLMs scanning documents for unfavorable clauses.",
      "Automated Report Generation: Compiling technical data logs into readable PDFs."
    ],
    roadmap: [
      { phase: "Phase 1", title: "Knowledge Hub Compilation", duration: "2 Months", description: "Extract and vectorize historical proposal documents and template archives." },
      { phase: "Phase 2", title: "Proposal Assistant Pilot", duration: "3 Months", description: "Deploy a RAG-based drafting assistant for the business development team." },
      { phase: "Phase 3", title: "Contract Analysis Engine", duration: "4-5 Months", description: "Integrate contract auditing tools into legal and procurement workflows." },
      { phase: "Phase 4", title: "Operational Scaling", duration: "6 Months+", description: "Roll out automated report-writing and slide deck outline builders." }
    ],
    solutions: ["knowledge-assistant", "document-intelligence", "process-automation"],
    caseStudies: [
      {
        title: "Proposal Automation for Consulting Network",
        challenge: "A professional services group spent days drafting complex technical responses to corporate RFPs.",
        solution: "Engineered an AI Proposal Assistant using historic bids data with strict quality gates.",
        outcome: "Accelerated the bidding cycle, allowing BD teams to double daily output.",
        metrics: [
          "RFP proposal draft cycle reduced by 60%",
          "30% increase in contract win rate due to personalized scope details",
          "Recovered 18 monthly administrative hours per consultant"
        ]
      }
    ],
    outcomes: [
      "Increased billable team utilization rates",
      "Faster proposal turnaround times, capturing more market share",
      "Standardized contract compliance and risk mitigations"
    ]
  }
];
