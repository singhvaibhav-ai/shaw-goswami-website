"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Briefcase, FileText, TrendingUp, Mail, CheckCircle2 } from "lucide-react";

export default function InsightsPage() {
  const blogPosts = [
    {
      category: "AI STRATEGY",
      date: "May 20, 2025",
      title: "From AI Potential to Business Value: Closing the Last Mile",
      summary: "Why most AI initiatives stall—and how leaders can bridge the gap between experimentation and measurable impact.",
      readTime: "5 min read"
    },
    {
      category: "BUSINESS STRATEGY",
      date: "May 13, 2025",
      title: "Strategy in the Age of Uncertainty",
      summary: "A practical framework for building resilient strategies that adapt to disruption and drive long-term growth.",
      readTime: "6 min read"
    },
    {
      category: "DATA & ANALYTICS",
      date: "May 6, 2025",
      title: "The Data Foundation of an AI-First Enterprise",
      summary: "Key principles for building a modern data architecture that powers intelligent decision-making.",
      readTime: "7 min read"
    },
    {
      category: "INDUSTRY PERSPECTIVE",
      date: "Apr 29, 2025",
      title: "Digital and AI in Oil & Gas: Beyond Efficiency",
      summary: "How energy companies are leveraging AI to enhance safety, resilience, and sustainable performance.",
      readTime: "6 min read"
    }
  ];

  const caseStudies = [
    {
      industry: "HEALTHCARE",
      title: "AI-Powered Patient Support Platform",
      desc: "Helping a healthcare provider enhance patient engagement and reduce administrative workload with an AI-powered assistant.",
      metrics: [
        { val: "40%", label: "Reduction in Admin Tasks" },
        { val: "35%", label: "Improved Patient Satisfaction" }
      ]
    },
    {
      industry: "OIL & GAS",
      title: "Predictive Maintenance for Operational Excellence",
      desc: "Implemented AI-driven predictive maintenance to minimize downtime and optimize asset performance.",
      metrics: [
        { val: "30%", label: "Reduction in Downtime" },
        { val: "$2M+", label: "Annual Cost Savings" }
      ]
    },
    {
      industry: "FMCG",
      title: "Demand Forecasting & Inventory Optimization",
      desc: "Built a machine learning solution to improve forecast accuracy and optimize inventory across the supply chain.",
      metrics: [
        { val: "25%", label: "Improvement in Forecast Accuracy" },
        { val: "20%", label: "Lower Holding Costs" }
      ]
    },
    {
      industry: "EQUINE SERVICES",
      title: "Data-Driven Performance Analytics Platform",
      desc: "Developed a performance analytics platform to track health, training, and outcomes for better decision-making.",
      metrics: [
        { val: "50%", label: "Improvement in Tracking Accuracy" },
        { val: "Better", label: "Performance Outcomes" }
      ]
    }
  ];

  return (
    <div className="insights-page-wrapper">
      {/* 1. HERO SECTION */}
      <section className="insights-hero">
        <div className="container-custom">
          <div className="hero-grid">
            <div className="hero-text-block">
              <span className="section-tag">INSIGHTS</span>
              <h1 className="hero-heading">
                Ideas. Insights. Impact.
              </h1>
              <p className="hero-subtext">
                Thought leadership, industry perspectives, and real-world case studies from our work with organizations around the world.
              </p>

              <div className="metrics-row">
                <div className="metric-badge-box">
                  <FileText size={24} className="metric-icon" />
                  <div>
                    <strong>100+</strong>
                    <span>Articles & Insights</span>
                  </div>
                </div>
                <div className="metric-badge-box">
                  <Briefcase size={24} className="metric-icon" />
                  <div>
                    <strong>25+</strong>
                    <span>Case Studies</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Graphic mock */}
            <div className="hero-tablet-mock">
              <div className="tablet-screen">
                <div className="tablet-header">
                  <span className="sg-brand">S&G</span>
                  <span className="doc-title">Executive Summary</span>
                </div>
                <div className="tablet-content">
                  <div className="mock-bar-chart">
                    <div className="bar b1" />
                    <div className="bar b2" />
                    <div className="bar b3" />
                    <div className="bar b4" />
                  </div>
                  <div className="mock-pie-chart" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BLOGS & PERSPECTIVES */}
      <section className="blogs-section">
        <div className="container-custom">
          <div className="section-header-row">
            <div>
              <h2 className="section-title-serif">Blogs & Perspectives</h2>
              <p className="section-subtitle-text">Explore expert articles on AI, strategy, data, and transformation shaping the future of business.</p>
            </div>
            <Link href="/insights" className="view-all-link">
              VIEW ALL BLOGS <ArrowRight size={16} />
            </Link>
          </div>

          <div className="blogs-grid">
            {blogPosts.map((post, idx) => (
              <div key={idx} className="blog-card">
                <div className="blog-meta">
                  <span className="blog-cat">{post.category}</span>
                  <span className="blog-date">{post.date}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-summary">{post.summary}</p>
                <Link href="/contact" className="read-more-link">
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CASE STUDIES */}
      <section className="case-studies-section">
        <div className="container-custom">
          <div className="section-header-row">
            <div>
              <h2 className="section-title-serif">Case Studies</h2>
              <p className="section-subtitle-text">Real challenges. Strategic solutions. Measurable outcomes.</p>
            </div>
            <Link href="/case-studies" className="view-all-link">
              VIEW ALL CASE STUDIES <ArrowRight size={16} />
            </Link>
          </div>

          <div className="cases-grid">
            {caseStudies.map((cs, idx) => (
              <div key={idx} className="case-card">
                <span className="cs-ind-tag">{cs.industry}</span>
                <h3 className="cs-title">{cs.title}</h3>
                <p className="cs-desc">{cs.desc}</p>
                
                <div className="cs-metrics-box">
                  {cs.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="cs-metric-item">
                      <strong className="m-val">{m.val}</strong>
                      <span className="m-lbl">{m.label}</span>
                    </div>
                  ))}
                </div>

                <Link href="/case-studies" className="read-more-link">
                  View Case Study <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NEWSLETTER SUBSCRIBE BANNER */}
      <section className="newsletter-section">
        <div className="container-custom">
          <div className="newsletter-card">
            <div className="nl-text">
              <h2>Stay Ahead with Strategic Insights</h2>
              <p>Subscribe to our newsletter and get the latest insights on AI, strategy, and industry trends delivered to your inbox.</p>
              
              <div className="nl-features">
                <span><CheckCircle2 size={16} color="#E88270" /> Expert Perspectives</span>
                <span><CheckCircle2 size={16} color="#E88270" /> Emerging Trends</span>
                <span><CheckCircle2 size={16} color="#E88270" /> Exclusive Updates</span>
              </div>
            </div>

            <div className="nl-form-block">
              <div className="form-input-group">
                <input type="email" placeholder="Enter your business email" className="nl-input" />
                <button className="btn-cta-coral">SUBSCRIBE NOW <ArrowRight size={16} /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA BANNER */}
      <section className="cta-banner-section">
        <div className="container-custom">
          <div className="cta-inner-card">
            <div className="cta-left-text">
              <h2>Have a challenge to solve?</h2>
              <p>Let’s turn insights into impact. Book a strategy call with our experts.</p>
            </div>
            <div className="cta-right-btn">
              <Link href="/contact" className="btn-cta-coral">
                BOOK A STRATEGY CALL <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* HERO */
        .insights-hero {
          background-color: var(--color-coral-hero);
          padding: 5.5rem 0 4.5rem 0;
        }

        .container-custom {
          max-width: var(--max-width-desktop);
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 3rem;
          align-items: center;
        }

        .section-tag {
          font-family: var(--font-secondary);
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--color-navy-dark);
          opacity: 0.8;
          display: block;
          margin-bottom: 0.75rem;
        }

        .hero-heading {
          font-family: var(--font-primary);
          font-size: clamp(3rem, 2.5rem + 2.5vw, 4.25rem);
          font-weight: 700;
          color: var(--color-navy-dark);
          line-height: 1.1;
          margin-bottom: 1.25rem;
        }

        .hero-subtext {
          font-size: 1.125rem;
          color: var(--color-navy-dark);
          opacity: 0.9;
          line-height: 1.6;
          max-width: 580px;
          margin-bottom: 2.25rem;
        }

        .metrics-row {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .metric-badge-box {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.35);
          backdrop-filter: blur(8px);
          padding: 0.85rem 1.35rem;
          border-radius: var(--border-radius-md);
          border: 1px solid rgba(11, 19, 43, 0.1);
        }

        .metric-badge-box strong {
          display: block;
          font-family: var(--font-primary);
          font-size: 1.5rem;
          color: var(--color-navy-dark);
        }

        .metric-badge-box span {
          font-size: 0.8125rem;
          color: var(--color-navy-dark);
        }

        /* TABLET MOCK */
        .hero-tablet-mock {
          background-color: var(--color-navy-dark);
          border-radius: 20px;
          padding: 1rem;
          box-shadow: 0 16px 40px rgba(11, 19, 43, 0.3);
        }

        .tablet-screen {
          background-color: var(--color-white);
          border-radius: 12px;
          padding: 1.5rem;
          height: 280px;
        }

        .tablet-header {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid var(--color-border-light);
          padding-bottom: 0.75rem;
          margin-bottom: 1rem;
        }

        .sg-brand {
          font-family: var(--font-primary);
          font-weight: 700;
          color: var(--color-navy-dark);
        }

        .doc-title {
          font-size: 0.8125rem;
          color: var(--color-text-muted);
        }

        .tablet-content {
          display: flex;
          gap: 1.5rem;
          align-items: center;
          height: 180px;
        }

        .mock-bar-chart {
          display: flex;
          align-items: flex-end;
          gap: 0.75rem;
          height: 140px;
          flex-grow: 1;
        }

        .bar {
          background-color: var(--color-coral-hero);
          border-radius: 4px 4px 0 0;
          flex-grow: 1;
        }

        .b1 { height: 40%; }
        .b2 { height: 65%; }
        .b3 { height: 85%; }
        .b4 { height: 100%; background-color: var(--color-navy-dark); }

        .mock-pie-chart {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: conic-gradient(var(--color-navy-dark) 0% 40%, var(--color-coral-hero) 40% 75%, #F7B5A8 75% 100%);
        }

        /* BLOGS */
        .blogs-section {
          padding: var(--spacing-section) 0;
          background-color: var(--color-cream-bg);
        }

        .section-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 2.5rem;
        }

        .section-title-serif {
          font-family: var(--font-primary);
          font-size: 2.25rem;
          color: var(--color-navy-dark);
          margin-bottom: 0.5rem;
        }

        .section-subtitle-text {
          font-size: 1.05rem;
          color: var(--color-text-muted);
        }

        .view-all-link {
          font-family: var(--font-secondary);
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--color-navy-dark);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
        }

        .blogs-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .blog-card {
          background-color: var(--color-white);
          padding: 1.75rem;
          border-radius: var(--border-radius-md);
          border: 1px solid var(--color-border-subtle);
          box-shadow: var(--color-card-shadow);
          display: flex;
          flex-direction: column;
        }

        .blog-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-coral-hero);
          margin-bottom: 0.75rem;
        }

        .blog-title {
          font-family: var(--font-primary);
          font-size: 1.15rem;
          color: var(--color-navy-dark);
          margin-bottom: 0.75rem;
          line-height: 1.35;
        }

        .blog-summary {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }

        .read-more-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--color-navy-dark);
          text-decoration: none;
        }

        /* CASE STUDIES */
        .case-studies-section {
          padding: var(--spacing-section) 0;
          background-color: var(--color-white);
        }

        .cases-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .case-card {
          background-color: var(--color-cream-bg);
          padding: 1.75rem;
          border-radius: var(--border-radius-md);
          border: 1px solid var(--color-border-subtle);
          display: flex;
          flex-direction: column;
        }

        .cs-ind-tag {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--color-coral-hero);
          margin-bottom: 0.5rem;
        }

        .cs-title {
          font-family: var(--font-primary);
          font-size: 1.15rem;
          color: var(--color-navy-dark);
          margin-bottom: 0.75rem;
        }

        .cs-desc {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }

        .cs-metrics-box {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          background-color: var(--color-white);
          padding: 0.85rem;
          border-radius: 8px;
          margin-bottom: 1.25rem;
        }

        .m-val {
          display: block;
          font-family: var(--font-primary);
          font-size: 1.25rem;
          color: var(--color-navy-dark);
        }

        .m-lbl {
          font-size: 0.725rem;
          color: var(--color-text-muted);
        }

        /* NEWSLETTER */
        .newsletter-section {
          padding: 3rem 0;
          background-color: var(--color-cream-bg);
        }

        .newsletter-card {
          background-color: var(--color-navy-dark);
          border-radius: var(--border-radius-lg);
          padding: 3.5rem;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 3rem;
          align-items: center;
          color: var(--color-white);
        }

        .nl-text h2 {
          font-family: var(--font-primary);
          font-size: 2.25rem;
          color: var(--color-white);
          margin-bottom: 0.75rem;
        }

        .nl-text p {
          color: #A0AEC0;
          font-size: 1rem;
          margin-bottom: 1.5rem;
        }

        .nl-features {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          font-size: 0.875rem;
          color: #CBD5E0;
        }

        .nl-features span {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
        }

        .form-input-group {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .nl-input {
          padding: 1rem 1.25rem;
          border-radius: var(--border-radius-sm);
          border: 1px solid rgba(255, 255, 255, 0.2);
          background-color: rgba(255, 255, 255, 0.08);
          color: var(--color-white);
          font-size: 0.9375rem;
        }

        .nl-input::placeholder {
          color: #A0AEC0;
        }

        /* CTA BANNER */
        .cta-banner-section {
          padding: 3rem 0;
          background-color: var(--color-white);
        }

        .cta-inner-card {
          background-color: var(--color-navy-dark);
          border-radius: var(--border-radius-lg);
          padding: 4rem 3.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          color: var(--color-white);
        }

        .cta-left-text h2 {
          font-family: var(--font-primary);
          font-size: 2.25rem;
          color: var(--color-white);
          margin-bottom: 0.75rem;
        }

        .cta-left-text p {
          color: #A0AEC0;
          font-size: 1.1rem;
        }

        .btn-cta-coral {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background-color: var(--color-coral-hero);
          color: var(--color-navy-dark);
          font-family: var(--font-secondary);
          font-size: 0.875rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          padding: 1rem 1.85rem;
          border-radius: var(--border-radius-sm);
          text-decoration: none;
          white-space: nowrap;
          transition: all 0.25s ease;
        }

        .btn-cta-coral:hover {
          background-color: #f09583;
          transform: translateY(-2px);
        }

        @media (max-width: 992px) {
          .hero-grid,
          .newsletter-card {
            grid-template-columns: 1fr;
          }
          .blogs-grid,
          .cases-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .blogs-grid,
          .cases-grid {
            grid-template-columns: 1fr;
          }
          .nl-features {
            flex-direction: column;
            align-items: flex-start;
          }
          .cta-inner-card {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
