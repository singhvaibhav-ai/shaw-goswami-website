import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  TrendingUp, 
  Compass, 
  PieChart, 
  BookOpen, 
  FileText, 
  MessageSquare, 
  Layers, 
  Activity, 
  Cpu, 
  Globe, 
  Briefcase, 
  Shield, 
  Calendar, 
  Award, 
  Users, 
  ArrowRight,
  Workflow,
  Search,
  Eye,
  CheckCircle,
  Zap,
  Quote
} from "lucide-react";
import styles from "./page.module.css";
import { getSolutions } from "../lib/cms";
import { getIndustries } from "../lib/cms";
import { getInsights } from "../lib/cms";

// Grayscale logos mock
const LOGOS = [
  { name: "Boeing" },
  { name: "Microsoft" },
  { name: "PwC" },
  { name: "Telespazio" },
  { name: "Applied Materials" },
  { name: "mPokket" }
];

export default async function HomePage() {
  const allSolutions = await getSolutions();
  const allIndustries = await getIndustries();
  const allInsights = await getInsights();

  // Map icon strings to Lucide components
  const iconMap: { [key: string]: React.ComponentType<any> } = {
    TrendingUp,
    Compass,
    PieChart,
    BookOpen,
    FileText,
    MessageSquare,
    Layers,
    Activity,
    Cpu,
    Globe,
    Briefcase
  };

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className={styles.heroSection} aria-label="Introduction">
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroHeading}>
                Business Consulting <br />
                for the <span className={styles.heroHighlight}>AI Era</span>
              </h1>
              <p className={styles.heroSubtext}>
                We help organizations transform operations, modernize decision-making, and build sustainable competitive advantage through business strategy, data analytics, and artificial intelligence.
              </p>
              <div className={styles.heroButtons}>
                <Link href="/contact" className="btn btn-primary">
                  Book a Strategy Consultation &rarr;
                </Link>
                <Link href="/solutions" className="btn btn-secondary-dark">
                  Explore Our Solutions
                </Link>
              </div>
            </div>
            <div className={styles.heroImageContainer}>
              <Image 
                src="/images/boardroom_hero.png" 
                alt="Executives in modern boardroom with AI data overlays" 
                width={800} 
                height={800} 
                className={styles.heroImage}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CREDIBILITY METRICS BAR */}
      <section className={styles.metricsWrapper} aria-label="Credibility Metrics">
        <div className="container">
          <div className={styles.metricsCard}>
            <div className={styles.metricsGrid}>
              <div className={styles.metricItem}>
                <div className={styles.metricIcon}>
                  <Award size={20} />
                </div>
                <div>
                  <div className={styles.metricVal}>16+</div>
                  <div className={styles.metricLabel}>Years</div>
                  <div className={styles.metricDesc}>Enterprise Technology & Product Leadership</div>
                </div>
              </div>

              <div className={`${styles.metricItem} ${styles.metricSeparator}`}>
                <div className={styles.metricIcon}>
                  <Users size={20} />
                </div>
                <div style={{ paddingLeft: "0.5rem" }}>
                  <div className={styles.metricVal}>500K+</div>
                  <div className={styles.metricLabel}>Users</div>
                  <div className={styles.metricDesc}>Served Through AI-powered Platforms</div>
                </div>
              </div>

              <div className={`${styles.metricItem} ${styles.metricSeparator}`}>
                <div className={styles.metricIcon}>
                  <Layers size={20} />
                </div>
                <div style={{ paddingLeft: "0.5rem" }}>
                  <div className={styles.metricVal}>Multiple</div>
                  <div className={styles.metricLabel}>Industries</div>
                  <div className={styles.metricDesc}>Across Healthcare, Manufacturing, Retail, Finance & Energy</div>
                </div>
              </div>

              <div className={`${styles.metricItem} ${styles.metricSeparator}`}>
                <div className={styles.metricIcon}>
                  <Globe size={20} />
                </div>
                <div style={{ paddingLeft: "0.5rem" }}>
                  <div className={styles.metricVal}>Global</div>
                  <div className={styles.metricLabel}>Experience</div>
                  <div className={styles.metricDesc}>Consulting & Delivery Across the Globe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BUSINESS PROBLEMS WE SOLVE */}
      <section className="section" aria-labelledby="problems-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-tagline">Client Focus</span>
            <h2 id="problems-heading">Business Problems We Solve</h2>
            <p>We work with enterprise leadership to resolve operational frictions and align emerging technologies with clear business goals.</p>
          </div>

          <div className={styles.metricsGrid}>
            <div className="card">
              <div className={styles.problemCard}>
                <TrendingUp className={styles.problemIcon} />
                <h3 className={styles.problemTitle}>Improve Operational Efficiency</h3>
                <p className={styles.metricDesc}>Automate processes, reduce costs and improve speed, quality and scalability.</p>
              </div>
            </div>

            <div className="card">
              <div className={styles.problemCard}>
                <PieChart className={styles.problemIcon} />
                <h3 className={styles.problemTitle}>Build Intelligent Decision Making</h3>
                <p className={styles.metricDesc}>Transform data into predictive insights and make better decisions faster.</p>
              </div>
            </div>

            <div className="card">
              <div className={styles.problemCard}>
                <Cpu className={styles.problemIcon} />
                <h3 className={styles.problemTitle}>Modernize Legacy Operations</h3>
                <p className={styles.metricDesc}>Integrate AI into your existing systems and modernize operations without disruption.</p>
              </div>
            </div>

            <div className="card">
              <div className={styles.problemCard}>
                <Compass className={styles.problemIcon} />
                <h3 className={styles.problemTitle}>Optimize Supply Chains</h3>
                <p className={styles.metricDesc}>Improve forecasting, inventory management, procurement and logistics with intelligent algorithms.</p>
              </div>
            </div>

            <div className="card">
              <div className={styles.problemCard}>
                <Zap className={styles.problemIcon} />
                <h3 className={styles.problemTitle}>Accelerate Digital Innovation</h3>
                <p className={styles.metricDesc}>Build AI-powered products and new digital experiences that drive client value and growth.</p>
              </div>
            </div>

            <div className="card">
              <div className={styles.problemCard}>
                <Shield className={styles.problemIcon} />
                <h3 className={styles.problemTitle}>Prepare Your Organization for AI</h3>
                <p className={styles.metricDesc}>Build custom AI strategy, operational governance, and capabilities for long-term transformation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR CONSULTING SERVICES */}
      <section className="section" style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }} aria-labelledby="services-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-tagline">Capabilities</span>
            <h2 id="services-heading">Our Consulting Services</h2>
            <p>Professional guidance and hands-on implementation capabilities across strategic, technological, and corporate domains.</p>
          </div>

          <div className="grid-3">
            {/* Strategy Card */}
            <div className="card">
              <div className={styles.serviceCard}>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIcon}>
                    <Shield size={22} />
                  </div>
                  <h3 className={styles.serviceTitle}>Enterprise AI Strategy</h3>
                </div>
                <p className={styles.serviceDesc}>
                  Define clear AI roadmaps aligned with corporate objectives, operational targets, and measurable business outcomes.
                </p>
                <Link href="/solutions" className="text-link">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Transformation Card */}
            <div className="card">
              <div className={styles.serviceCard}>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIcon}>
                    <Workflow size={22} />
                  </div>
                  <h3 className={styles.serviceTitle}>Business Transformation</h3>
                </div>
                <p className={styles.serviceDesc}>
                  Redesign business processes, improve cross-functional operations, and drive transformation across the enterprise.
                </p>
                <Link href="/solutions" className="text-link">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Data & Analytics Card */}
            <div className="card">
              <div className={styles.serviceCard}>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIcon}>
                    <PieChart size={22} />
                  </div>
                  <h3 className={styles.serviceTitle}>Data & Analytics</h3>
                </div>
                <p className={styles.serviceDesc}>
                  Build modern data architectures and integration layers that drive analytical insights and fuel intelligent decisions.
                </p>
                <Link href="/solutions" className="text-link">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* AI Automation Card */}
            <div className="card">
              <div className={styles.serviceCard}>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIcon}>
                    <Cpu size={22} />
                  </div>
                  <h3 className={styles.serviceTitle}>AI & Automation</h3>
                </div>
                <p className={styles.serviceDesc}>
                  Engineer custom AI solutions that automate back-office operations, augment decision-making, and create customer value.
                </p>
                <Link href="/solutions" className="text-link">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Product Engineering Card */}
            <div className="card">
              <div className={styles.serviceCard}>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIcon}>
                    <Layers size={22} />
                  </div>
                  <h3 className={styles.serviceTitle}>Product Engineering</h3>
                </div>
                <p className={styles.serviceDesc}>
                  Design, build, and deploy scalable digital products, SaaS applications, and enterprise platforms that deliver impact.
                </p>
                <Link href="/solutions" className="text-link">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* AI Governance Card */}
            <div className="card">
              <div className={styles.serviceCard}>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIcon}>
                    <Globe size={22} />
                  </div>
                  <h3 className={styles.serviceTitle}>AI Governance & Risk</h3>
                </div>
                <p className={styles.serviceDesc}>
                  Establish ethical AI frameworks, private data sanitization lines, model audit trails, and strict compliance structures.
                </p>
                <Link href="/solutions" className="text-link">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE */}
      <section className="section" aria-labelledby="industries-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-tagline">Sectors</span>
            <h2 id="industries-heading">Industries We Serve</h2>
            <p>Providing specialized technology guidance tailored to the regulatory and operational realities of core global industries.</p>
          </div>

          <div className={styles.industryGrid}>
            {allIndustries.slice(0, 8).map((ind) => {
              const IndIcon = iconMap[ind.iconName] || Globe;
              return (
                <Link 
                  href={`/industries/${ind.slug}`} 
                  key={ind.slug} 
                  className={styles.industryCard}
                  aria-label={`Learn about our ${ind.title} consulting solutions`}
                >
                  <div className={styles.industryCardContent}>
                    <IndIcon className={styles.industryCardIcon} size={28} />
                    <h3 className={styles.industryCardTitle}>{ind.title}</h3>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className={styles.industryFooterLink}>
            <Link href="/industries" className="text-link">
              View All Industries <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. FEATURED SOLUTIONS */}
      <section className="section section-dark" aria-labelledby="solutions-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-tagline" style={{ color: "var(--color-cyan)" }}>Core Engines</span>
            <h2 id="solutions-heading">Featured Solutions</h2>
            <p style={{ color: "#94A3B8" }}>Proven frameworks and cognitive engines deployed to unlock immediate optimization value.</p>
          </div>

          <div className={styles.solutionsGrid}>
            {allSolutions.slice(0, 9).map((sol) => {
              const SolIcon = iconMap[sol.iconName] || Cpu;
              return (
                <Link 
                  href={`/solutions/${sol.slug}`} 
                  key={sol.slug} 
                  className={styles.solutionCard}
                  aria-label={`Explore our ${sol.title} solution`}
                >
                  <div className={styles.solutionCardHeader}>
                    <h3 className={styles.solutionCardTitle}>{sol.title}</h3>
                    <SolIcon className={styles.solutionCardIcon} size={20} />
                  </div>
                  <p className={styles.solutionCardDesc}>
                    {sol.summary.slice(0, 110)}...
                  </p>
                </Link>
              );
            })}
          </div>

          <div className={styles.solutionsFooterLink}>
            <Link href="/solutions" className="text-link" style={{ color: "var(--color-cyan)" }}>
              Explore All Solutions <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. HOW WE WORK (TIMELINE) */}
      <section className="section" aria-labelledby="work-heading">
        <div className="container">
          <div className="section-header" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
            <span className="section-tagline">Methodology</span>
            <h2 id="work-heading">How We Work</h2>
            <p>Our structured execution framework ensures alignment, technical excellence, and smooth scaling across teams.</p>
          </div>

          <div className={styles.timelineContainer}>
            <div className={styles.timelineStep}>
              <div className={styles.timelineNode}>
                <Search size={20} />
              </div>
              <span className={styles.timelineIndex}>Step 1</span>
              <h3 className={styles.timelineStepName}>Discover</h3>
              <p className={styles.timelineStepDesc}>Understand your business model, core operational pain points and objectives.</p>
            </div>

            <div className={styles.timelineStep}>
              <div className={styles.timelineNode}>
                <Eye size={20} />
              </div>
              <span className={styles.timelineIndex}>Step 2</span>
              <h3 className={styles.timelineStepName}>Diagnose</h3>
              <p className={styles.timelineStepDesc}>Assess current data stacks and map out the highest-value opportunities for AI.</p>
            </div>

            <div className={styles.timelineStep}>
              <div className={styles.timelineNode}>
                <PieChart size={20} />
              </div>
              <span className={styles.timelineIndex}>Step 3</span>
              <h3 className={styles.timelineStepName}>Design</h3>
              <p className={styles.timelineStepDesc}>Architect a tailored technical roadmap, security boundaries, and validation plans.</p>
            </div>

            <div className={styles.timelineStep}>
              <div className={styles.timelineNode}>
                <Workflow size={20} />
              </div>
              <span className={styles.timelineIndex}>Step 4</span>
              <h3 className={styles.timelineStepName}>Deliver</h3>
              <p className={styles.timelineStepDesc}>Build, validate and integrate custom engines into active business operations with agility.</p>
            </div>

            <div className={styles.timelineStep}>
              <div className={styles.timelineNode}>
                <CheckCircle size={20} />
              </div>
              <span className={styles.timelineIndex}>Step 5</span>
              <h3 className={styles.timelineStepName}>Scale</h3>
              <p className={styles.timelineStepDesc}>Optimize model performance, establish governance, and continuously add capabilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TRUSTED BY LOGO BAR */}
      <section className={styles.logosBar} aria-label="Organizations that trust us">
        <div className="container">
          <h2 className={styles.logosTitle}>Trusted by Organizations Across the Globe</h2>
          <div className={styles.logosGrid}>
            {LOGOS.map((logo, idx) => (
              <div key={idx} className={styles.logoItem}>
                <span className={styles.logoDot} />
                <span>{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. WHY SHAW & GOSWAMI */}
      <section className="section" aria-labelledby="why-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-tagline">Differentiators</span>
            <h2 id="why-heading">Why Shaw & Goswami</h2>
            <p>We blend institutional strategic rigor with deep AI engineering expertise to deliver real, measurable business value.</p>
          </div>

          <div className={styles.whyColumns}>
            <div className={styles.whyColumn}>
              <PieChart className={styles.whyIcon} />
              <h3 className={styles.whyTitle}>Business First</h3>
              <p className={styles.whyDesc}>We start with your strategic business objectives and model technical inputs to deliver hard EBITDA outcomes.</p>
            </div>

            <div className={styles.whyColumn}>
              <Compass className={styles.whyIcon} />
              <h3 className={styles.whyTitle}>Independent Advice</h3>
              <p className={styles.whyDesc}>We recommend the tools and frameworks that create real value for your business, not proprietary vendor solutions.</p>
            </div>

            <div className={styles.whyColumn}>
              <Award className={styles.whyIcon} />
              <h3 className={styles.whyTitle}>Enterprise Expertise</h3>
              <p className={styles.whyDesc}>Deep experience architecting secure pipelines inside complex multi-platform legacy infrastructures.</p>
            </div>

            <div className={styles.whyColumn}>
              <Workflow className={styles.whyIcon} />
              <h3 className={styles.whyTitle}>End-to-End Execution</h3>
              <p className={styles.whyDesc}>From initial strategic mapping to deploying production-ready code, we partner with you at every single step.</p>
            </div>

            <div className={styles.whyColumn}>
              <Shield className={styles.whyIcon} />
              <h3 className={styles.whyTitle}>Responsible AI</h3>
              <p className={styles.whyDesc}>We enforce strict compliance, vector boundaries, and ethical audit guardrails to protect your brand equity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CLIENT QUOTE */}
      <section className={styles.quoteSection} aria-label="Client Testimonial">
        <div className={styles.quoteContainer}>
          <Quote size={40} style={{ color: "var(--color-cyan)", marginBottom: "1.5rem" }} />
          <blockquote className={styles.quoteText}>
            "Shaw & Goswami helped us turn complex data into clear decisions and real business impact."
          </blockquote>
          <cite className={styles.quoteAuthor}>— Client Partner, Manufacturing Division</cite>
        </div>
      </section>

      {/* 11. INSIGHTS CAROUSEL */}
      <section className="section" style={{ backgroundColor: "#FFFFFF", borderBottom: "1px solid var(--color-border)" }} aria-labelledby="insights-heading">
        <div className="container">
          <div className="section-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <span className="section-tagline">Intellect</span>
              <h2 id="insights-heading" style={{ margin: 0 }}>Latest Insights</h2>
            </div>
            <Link href="/insights" className="text-link">
              View All Articles <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid-3" style={{ marginTop: "2rem" }}>
            {allInsights.slice(0, 3).map((article) => (
              <article key={article.slug} className="card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <span className="section-tagline" style={{ fontSize: "0.75rem", marginBottom: "0.5rem" }}>
                  {article.category}
                </span>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "0.75rem", color: "var(--color-navy)" }}>
                  <Link href={`/insights/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>
                <p style={{ fontSize: "0.9375rem", flexGrow: 1, marginBottom: "1.5rem" }}>
                  {article.excerpt}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--color-border)", paddingTop: "1rem" }}>
                  <span style={{ fontSize: "0.8125rem", color: "var(--color-text-gray)" }}>
                    {article.date}
                  </span>
                  <Link href={`/insights/${article.slug}`} className="text-link">
                    Read Article <ArrowRight size={12} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 12. BOTTOM CTA SECTION */}
      <section className={styles.bottomCtaSection} aria-labelledby="cta-heading">
        <div 
          className={styles.bottomCtaBg} 
          style={{ backgroundImage: `url('/images/network_globe.png')` }}
        />
        <div className={styles.bottomCtaContainer}>
          <h2 id="cta-heading" className={styles.bottomCtaHeading}>
            Let's Build Your Intelligent Enterprise
          </h2>
          <p className={styles.bottomCtaSub}>
            Whether you are exploring AI opportunities or scaling enterprise-wide operations, our consulting partners can guide your strategy and implementation.
          </p>
          <Link href="/contact" className="btn btn-primary" style={{ padding: "1rem 2rem", fontSize: "1rem" }}>
            Schedule a Strategy Consultation &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
