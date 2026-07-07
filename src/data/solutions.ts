export interface SolutionCaseStudy {
  challenge: string;
  solution: string;
  outcome: string;
}

export interface Solution {
  slug: string;
  title: string;
  iconName: string;
  summary: string;
  challenges: string[];
  approach: string;
  services: string[];
  deliverables: string[];
  outcomes: string[];
  caseStudy: SolutionCaseStudy;
}

export const solutions: Solution[] = [
  {
    slug: "demand-forecasting",
    title: "Enterprise Demand Forecasting",
    iconName: "TrendingUp",
    summary: "Leverage advanced machine learning algorithms and real-time market signals to predict consumer demand with unprecedented precision, minimizing inventory overhead and maximizing sales.",
    challenges: [
      "High inventory carrying costs due to over-stocking.",
      "Stockouts of critical items leading to lost revenue and customer churn.",
      "Lack of integration between promotion calendars and supply planning systems."
    ],
    approach: "We design and deploy custom predictive pipelines that ingest transactional history, macroeconomic indicators, weather forecasts, and marketing activities to forecast demand at the SKU-location level.",
    services: [
      "Data Audit & Feature Engineering",
      "Custom Forecasting Engine Selection (Prophet, XGBoost, Neural Nets)",
      "S&OP Process Integration Consulting",
      "Continuous Calibration & MLOps Infrastructure Setup"
    ],
    deliverables: [
      "SKU-level Predictive Forecasting Engine",
      "Executive Demand Control Dashboard",
      "Data Pipeline Integration Blueprint",
      "Team Training & SOP Documentation"
    ],
    outcomes: [
      "22-30% Reduction in Excess Inventory",
      "15% Improvement in On-Shelf Availability",
      "8-12% Increase in Operating Margin for Target Categories"
    ],
    caseStudy: {
      challenge: "A leading regional FMCG distributor struggled with a 35% forecast error rate, resulting in severe supply chains friction.",
      solution: "Implemented a multi-variable forecasting engine integrating localized weather inputs and distributor inventory data.",
      outcome: "Reduced forecast error to 12%, saving $4.2M in annual inventory holding costs and improving fulfillment rates by 6%."
    }
  },
  {
    slug: "supply-chain-tower",
    title: "Supply Chain Control Tower",
    iconName: "Compass",
    summary: "Establish complete end-to-end visibility across global logistics, warehousing, and procurement operations with real-time exception management and automated response recommendations.",
    challenges: [
      "Fragmented visibility across multiple third-party logistics (3PL) providers.",
      "Delayed reaction to disruptions (port delays, material shortages).",
      "Manual and slow exception resolution processes."
    ],
    approach: "We map the entire physical supply network into a digital orchestration layer, connecting raw API streams from logistics partners into a centralized rules and intelligence engine.",
    services: [
      "Multi-system Integration (ERP, WMS, TMS)",
      "Automated Exception Alerting Architecture",
      "Prescriptive Analytics Configuration",
      "Control Tower Operating Model Design"
    ],
    deliverables: [
      "Real-time Logistics Monitoring Dashboard",
      "Prescriptive Action Advisory Portal",
      "Unified Supply Chain Data Hub Schema",
      "Change Management & Training Materials"
    ],
    outcomes: [
      "Real-time visibility over 95% of transit legs",
      "40% faster response time to shipping exceptions",
      "18% reduction in expedited shipping fees"
    ],
    caseStudy: {
      challenge: "An automotive components manufacturer suffered from frequent production halts caused by unpredicted supply shipments delays.",
      solution: "Deployed a centralized Supply Chain Control Tower capturing GPS signals from container vessels and freight carriers.",
      outcome: "Elminated production delays entirely over 12 months, saving an estimated $3.5M in downtime costs."
    }
  },
  {
    slug: "executive-decision-intelligence",
    title: "Executive Decision Intelligence",
    iconName: "PieChart",
    summary: "Enable C-suite executives to model complex corporate strategies, simulate market shifts, and evaluate scenarios through interactive AI-powered decision frameworks.",
    challenges: [
      "Decisions made on stale, siloed data from offline spreadsheets.",
      "Inability to simulate the cascading impacts of strategic pivots.",
      "Lack of structured feedback loops to track decision outcomes."
    ],
    approach: "We build tailored corporate decision cockpits that merge financial sheets, operational models, and market intelligence into a real-time simulation layer.",
    services: [
      "Strategic Driver Mapping & Modeling",
      "Scenario Simulation Engine Engineering",
      "C-Suite Analytics Strategy Development",
      "Executive Dashboard UI/UX Design"
    ],
    deliverables: [
      "Scenario Modeling Simulator Web App",
      "C-Suite Decision Support Dashboard",
      "Corporate Data Integration Protocols",
      "Strategic Alignment Framework Docs"
    ],
    outcomes: [
      "Reduction of strategic evaluation cycles from weeks to minutes",
      "100% alignment on data sources across finance, sales, and operations",
      "Double-digit increases in capital allocation efficiency scores"
    ],
    caseStudy: {
      challenge: "A private equity firm needed to continuously optimize portfolio company allocations amid highly volatile raw material prices.",
      solution: "Designed a multi-factor portfolio simulator that models input cost adjustments and pricing elasticity.",
      outcome: "Enabled real-time strategic pricing adjustments, capturing an additional 240bps of portfolio EBITDA margin."
    }
  },
  {
    slug: "knowledge-assistant",
    title: "Enterprise Knowledge Assistant",
    iconName: "BookOpen",
    summary: "Transform internal documentation, wikis, research reports, and chats into an intelligent semantic retrieval engine, putting institutional knowledge at your employees' fingertips.",
    challenges: [
      "Valuable engineering and operational knowledge buried in thousands of PDFs and folders.",
      "Onboarding new team members is slow due to fragmented knowledge access.",
      "High volume of repetitive queries routing to senior domain experts."
    ],
    approach: "We construct secure, enterprise-grade Retrieval-Augmented Generation (RAG) platforms using local or hosted vector stores with zero data-leak guarantees.",
    services: [
      "Document Parsing & Vectorization Pipeline Design",
      "Retrieval Optimization & Guardrails Implementation",
      "Enterprise Access Controls Integration",
      "Custom Web Chat & API Endpoint Delivery"
    ],
    deliverables: [
      "Secure Web-based Knowledge Portal",
      "Data Ingestion & Invalidation Pipelines",
      "Compliance, Safety & Accuracy Logs Dashboard",
      "Developer & User API Documentation"
    ],
    outcomes: [
      "70% reduction in time spent searching for internal documentation",
      "90% user rating for answer accuracy and source citation relevance",
      "35% acceleration in new employee ramp-up timelines"
    ],
    caseStudy: {
      challenge: "A global engineering consultancy spent thousands of hours searching through 20 years of legacy proposal docs and blueprints.",
      solution: "Engineered a secure, custom RAG Knowledge Assistant indexing over 450,000 files with strict metadata tagging.",
      outcome: "Halved proposal response draft times and recovered 14 engineering hours per consultant per month."
    }
  },
  {
    slug: "document-intelligence",
    title: "Document Intelligence",
    iconName: "FileText",
    summary: "Automate the ingestion, extraction, and verification of unstructured business documents like invoices, contracts, receipts, and regulatory filings.",
    challenges: [
      "High operational costs and error rates from manual data entry.",
      "Slow turnaround times for processing customer applications or vendor invoices.",
      "Inability to run audit checks at scale across historic contracts."
    ],
    approach: "We utilize advanced Vision-LLMs and optical character recognition (OCR) models to extract structured JSON data from complex multi-format document sets.",
    services: [
      "Document Classification & Ingestion Strategy",
      "Vision-Language Model Extraction Engineering",
      "ERP / CRM Data Integration Pipeline",
      "Human-in-the-Loop Verification Workspace Setup"
    ],
    deliverables: [
      "Document Processing Orchestration Pipeline",
      "Validation & Correction Admin UI",
      "Pre-trained Extraction Schemas",
      "Security & Compliance Audit Dashboard"
    ],
    outcomes: [
      "85% reduction in document processing operational costs",
      "99.2% accuracy when paired with a verification dashboard",
      "Turnaround cycles dropped from days to under 4 minutes"
    ],
    caseStudy: {
      challenge: "A supply chain logistics operator processed 8,000 international customs bills manually every week, causing frequent delays.",
      solution: "Built a Vision-LLM document intelligence pipeline that classified documents, extracted fields, and flag discrepancies.",
      outcome: "Automated 82% of bill entries directly into the ERP, reducing customs clearance delays by 92%."
    }
  },
  {
    slug: "ai-customer-support",
    title: "AI Customer Support",
    iconName: "MessageSquare",
    summary: "Deploy voice and text conversational agents that handle customer issues instantly, handle escalations intelligently, and maintain brand voice perfectly.",
    challenges: [
      "Overwhelmed contact centers leading to long hold times and poor CSAT.",
      "High costs of scaling customer support for international, multi-lingual markets.",
      "Inconsistent response quality across human support tiers."
    ],
    approach: "We implement advanced conversational voice/chat agents backed by custom enterprise logic and automated tool execution.",
    services: [
      "Conversational Flow Design & Brand Alignment",
      "CRM & Ticketing System Integrations",
      "Guardrail Modeling & Safety Layer Implementation",
      "Call-routing & Human-Handoff Architecture"
    ],
    deliverables: [
      "Interactive Omnichannel Conversational Chatbot",
      "Live Agent Handoff Desktop Portal",
      "Analytics Dashboard (CSAT, Resolution Rates, Sentiment)",
      "Training Datasets & System Testing Logs"
    ],
    outcomes: [
      "65% of incoming support queries resolved without human intervention",
      "40% reduction in average customer wait times",
      "CSAT score increases of up to 1.2 points out of 5"
    ],
    caseStudy: {
      challenge: "An online travel platform suffered from massive ticket surges during flight cancellation waves.",
      solution: "Developed an AI-agent integrating with flight reservation systems to manage rebookings and refunds.",
      outcome: "Resolved 74% of cancellation tickets autonomously, maintaining stable support operations during system crises."
    }
  },
  {
    slug: "digital-twin-simulation",
    title: "Digital Twin & Simulation",
    iconName: "Layers",
    summary: "Build virtual replicas of warehouse layouts, manufacturing lines, and process maps to simulate operational changes and pressure-test optimizations before deployment.",
    challenges: [
      "High risks and costs of testing process innovations on live operations.",
      "Inability to isolate bottlenecks in complex multi-step manufacturing lines.",
      "Suboptimal space utilization in expanding fulfillment centers."
    ],
    approach: "We create mathematical and visual representations of physical systems, running thousands of Monte Carlo and physics-based simulations.",
    services: [
      "Physical Process Mapping & Asset Modeling",
      "Simulation Scenario Development & Testing",
      "Sensor Data (IoT) Integration",
      "Predictive Maintenance Modeling"
    ],
    deliverables: [
      "Operational Simulation Modeling Software",
      "Process Optimization Recommendations Log",
      "Interactive 3D Process Visualizer Dashboard",
      "Sensor Deployment Architecture Guide"
    ],
    outcomes: [
      "Up to 25% increase in throughput on modeled assembly lines",
      "Zero operational downtime during physical machinery upgrades",
      "Optimized warehouse footprint planning, saving millions in expansion capital"
    ],
    caseStudy: {
      challenge: "A heavy machinery manufacturer wanted to redesign a complex engine assembly plant without pausing output.",
      solution: "Developed a comprehensive digital twin of the factory floor, simulating and iterating assembly line changes.",
      outcome: "Implemented the new configuration over a single weekend with zero start-up delays, increasing daily throughput by 18%."
    }
  },
  {
    slug: "healthcare-ai-assistant",
    title: "Healthcare AI Assistant",
    iconName: "Activity",
    summary: "Support clinicians with smart charting, medical document parsing, and patient triage workflows while maintaining strict HIPAA compliance and medical accuracy.",
    challenges: [
      "Severe clinician burnout due to administrative charting burdens.",
      "Delayed access to historical patient records in complex cases.",
      "Inconsistent patient intake and triage flows."
    ],
    approach: "We engineer secure clinical companion applications that capture audio consults or parse charts, extracting key metrics and formatting clinical notes.",
    services: [
      "Ambient Audio Consultation Recording & Summarization",
      "EHR Integration Consulting (FHIR APIs)",
      "HIPAA Compliance & Clinical Safety Guardrails",
      "Clinical Dashboard Design"
    ],
    deliverables: [
      "Clinical Scribe Web Application",
      "EHR Ingestion Pipeline Middleware",
      "Data De-identification & Compliance Logging Portal",
      "Medical Guardrails Verification Audits"
    ],
    outcomes: [
      "2.5 hours saved per physician per day on charting administrative work",
      "98% accuracy in clinical summary medical terminology extraction",
      "30% reduction in patient check-in wait times"
    ],
    caseStudy: {
      challenge: "A multi-specialty medical group struggled with doctor burnout and declining face-to-face patient time.",
      solution: "Deployed an ambient AI scribe that listened to patient visits and generated structured SOAP charts for EHR review.",
      outcome: "Restored physician satisfaction, allowing them to see an average of 3 more patients per day while finishing charting before leaving."
    }
  },
  {
    slug: "process-automation",
    title: "Intelligent Process Automation",
    iconName: "Cpu",
    summary: "Automate highly repetitive back-office tasks by combining traditional Robotic Process Automation (RPA) with LLM decision routing capabilities.",
    challenges: [
      "Ineffective legacy RPA scripts that break when layouts change slightly.",
      "Hundreds of daily data reconciliations performed manually across departments.",
      "Inefficient processing of unstructured vendor email requests."
    ],
    approach: "We design cognitive automated workflows that can read emails, classify intents, query internal systems, cross-reference sheets, and update databases.",
    services: [
      "Back-Office Process Bottleneck Analysis",
      "Cognitive Agent Workflow Implementation",
      "API Integration & Legacy Script Upgrade",
      "Workflow Quality Assurance & Control Setup"
    ],
    deliverables: [
      "Cognitive Orchestration Workflow Dashboard",
      "Active Automated Agent Execution Scripts",
      "Reconciliation Logs & Discrepancy Alerting Hub",
      "Operations Transition Roadmap & SOPs"
    ],
    outcomes: [
      "80% reduction in manual reconciliation labor hours",
      "10x faster execution speed of customer onboarding requests",
      "Payback period on implementation costs achieved in under 6 months"
    ],
    caseStudy: {
      challenge: "A financial services institution manually audited and reconciled vendor ledger invoices against bank receipts daily.",
      solution: "Deployed a cognitive agent that retrieved receipts, parsed PDF invoices, reconciled line items, and queued payment approvals.",
      outcome: "Automated 94% of the daily audit volume, reducing processing overhead by 88% and eliminating payment errors."
    }
  }
];
