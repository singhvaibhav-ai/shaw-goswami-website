"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Target, 
  TrendingUp, 
  Search, 
  Compass, 
  Settings, 
  Lightbulb, 
  Database, 
  Code, 
  ShieldCheck,
  CheckCircle2,
  Building2,
  Users,
  MapPin,
  ChevronRight
} from "lucide-react";
import { consultingServices, productsList } from "../data/solutions";
import { industries } from "../data/industries";
import { clientsData } from "../data/clients";
import { quickAnswerHighlights } from "../data/faqs";

export default function HomePage() {
  const serviceIcons: { [key: string]: React.ReactNode } = {
    Compass: <Compass size={24} />,
    Settings: <Settings size={24} />,
    Lightbulb: <Lightbulb size={24} />,
    Database: <Database size={24} />,
    Code: <Code size={24} />,
    ShieldCheck: <ShieldCheck size={24} />
  };

  return (
    <div className="home-page-wrapper">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Where AI<br />
              Meets Business Goals
            </h1>
            <p className="hero-subtitle">
              Businesses don’t need more AI experiments — they need P&L growth. We help leadership teams pinpoint operational friction and execute AI roadmaps that solve real problems.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn-solid-navy">
                BOOK A STRATEGY CALL <ArrowRight size={16} />
              </Link>
              <Link href="/about" className="btn-outline-navy">
                EXPLORE OUR APPROACH <ArrowRight size={16} />
              </Link>
            </div>

            {/* Bottom Feature Strip */}
            <div className="hero-pills-bar">
              <div className="pill-item">
                <Target size={18} />
                <span>Diagnose Friction</span>
              </div>
              <div className="pill-divider" />
              <div className="pill-item">
                <Compass size={18} />
                <span>Design AI Roadmaps</span>
              </div>
              <div className="pill-divider" />
              <div className="pill-item">
                <TrendingUp size={18} />
                <span>Deliver Measurable Impact</span>
              </div>
            </div>
          </div>

          {/* Hero Right Graphic */}
          <div className="hero-graphic-col">
            <div className="graphic-canvas">
              {/* Exact SVG Vector Trend Illustration from Home Page.png */}
              <svg className="hero-trend-graphic-svg" viewBox="0 0 440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  {/* Pattern for dotted circle grid */}
                  <pattern id="dotGrid" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
                    <circle cx="3" cy="3" r="1.4" fill="#0B132B" opacity="0.38" />
                  </pattern>
                  {/* Drop shadow for nodes */}
                  <filter id="nodeShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0B132B" floodOpacity="0.3" />
                  </filter>
                </defs>

                {/* 1. Dotted Circle Background Grid */}
                <mask id="circleMask">
                  <circle cx="220" cy="200" r="160" fill="#FFFFFF" />
                </mask>
                <circle cx="220" cy="200" r="160" fill="url(#dotGrid)" mask="url(#circleMask)" />

                {/* 2. Ascending Curvy Trend Line */}
                <circle cx="50" cy="305" r="5.5" fill="#0B132B" />
                <path d="M 50 305 Q 190 230 375 45" stroke="#0B132B" strokeWidth="4" strokeLinecap="round" fill="none" />
                {/* Arrowhead at (375, 45) */}
                <path d="M 345 45 L 375 45 L 375 75" stroke="#0B132B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />

                {/* 3. Node 1: Magnifying Glass (Search) centered at (114, 267) */}
                <g filter="url(#nodeShadow)">
                  <circle cx="114" cy="267" r="26" fill="#0B132B" />
                  <circle cx="110" cy="263" r="7.5" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
                  <line x1="115.5" y1="268.5" x2="123" y2="276" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
                </g>

                {/* 4. Node 2: Target/Crosshair centered at (208, 197) */}
                <g filter="url(#nodeShadow)">
                  <circle cx="208" cy="197" r="26" fill="#0B132B" />
                  <circle cx="208" cy="197" r="9.5" stroke="#FFFFFF" strokeWidth="2" fill="none" />
                  <circle cx="208" cy="197" r="4.5" stroke="#FFFFFF" strokeWidth="2" fill="none" />
                  <line x1="208" y1="183" x2="208" y2="211" stroke="#FFFFFF" strokeWidth="2" />
                  <line x1="194" y1="197" x2="222" y2="197" stroke="#FFFFFF" strokeWidth="2" />
                </g>

                {/* 5. Node 3: Bar Chart centered at (303, 116) */}
                <g filter="url(#nodeShadow)">
                  <circle cx="303" cy="116" r="26" fill="#0B132B" />
                  <rect x="292" y="118" width="4.5" height="9" rx="1" fill="#FFFFFF" />
                  <rect x="300.5" y="112" width="4.5" height="15" rx="1" fill="#FFFFFF" />
                  <rect x="309" y="105" width="4.5" height="22" rx="1" fill="#FFFFFF" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT US / OUR STORY SECTION */}
      <section className="story-section">
        <div className="container-narrow">
          <div className="story-header">
            <span className="story-badge">About US</span>
            <h2 className="story-title">Our Story</h2>
            <div className="title-underline" />
          </div>

          <div className="story-card">
            <p className="story-lead">
              AI is changing how businesses operate and grow. Yet, there remains a gap between what AI makes possible and what businesses are actually able to achieve with it.
            </p>
            <p>
              Leadership teams don't need more AI experiments. They need clarity on where AI fits, which problems are worth solving, and how it can deliver measurable business value.
            </p>
            <div className="highlight-callout">
              <strong>Shaw & Goswami was built to bridge this gap.</strong>
            </div>
            <p>
              With 40+ years of combined experience across AI, data engineering, product development, and business consulting, we bring technology and business thinking together.
            </p>
            <p>
              We start with the business—not the technology. We go deep into your operations, identify where the real opportunities lie, and find the right solutions to unlock growth.
            </p>

            <div className="story-tagline-box">
              <span>Understand the business.</span>
              <span className="dot">•</span>
              <span>Find the right fit.</span>
              <span className="dot">•</span>
              <span>Deliver measurable growth.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO / CONSULTING SERVICES */}
      <section className="services-section">
        <div className="container-custom">
          <div className="section-title-block text-center">
            <span className="section-subtitle">What We Do</span>
            <h2 className="section-main-heading">Our Consulting Services</h2>
            <p className="section-desc">From strategy to execution, we help you transform with AI and achieve lasting impact.</p>
          </div>

          <div className="services-grid">
            {consultingServices.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon-box">
                  {serviceIcons[service.iconName] || <Compass size={24} />}
                </div>
                <h3 className="service-card-title">{service.number}. {service.title}</h3>
                <p className="service-card-desc">{service.description}</p>
                <div className="service-bullets">
                  <div className="bullet-col">
                    {service.capabilitiesLeft.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="bullet-item">• {item}</div>
                    ))}
                  </div>
                  <div className="bullet-col">
                    {service.capabilitiesRight.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="bullet-item">• {item}</div>
                    ))}
                  </div>
                </div>
                <Link href="/solutions" className="service-learn-more">
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INDUSTRIES WE SERVE PREVIEW */}
      <section className="industries-preview-section">
        <div className="container-custom">
          <div className="section-title-block text-center">
            <span className="section-subtitle">Sector Agnostic</span>
            <h2 className="section-main-heading">Industries We Serve</h2>
            <p className="section-desc">We bring deep AI and business expertise to every industry, helping organizations solve complex challenges.</p>
          </div>

          <div className="industries-grid">
            {industries.slice(0, 8).map((ind) => (
              <Link href={`/industries/${ind.slug}`} key={ind.slug} className="industry-card-item">
                <h4 className="ind-name">{ind.title}</h4>
                <p className="ind-summary">{ind.summary}</p>
                <span className="ind-link">Explore Solutions <ArrowRight size={14} /></span>
              </Link>
            ))}
          </div>
          
          <div className="text-center" style={{ marginTop: "2.5rem" }}>
            <Link href="/industries" className="btn-solid-navy">
              VIEW ALL INDUSTRIES <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. ORGANIZATIONS WE'VE WORKED WITH */}
      <section className="clients-preview-section">
        <div className="container-custom">
          <div className="section-title-block text-center">
            <span className="section-subtitle">Global Impact</span>
            <h2 className="section-main-heading">Organizations We’ve Worked With</h2>
          </div>

          <div className="clients-logo-grid">
            {clientsData.map((client) => (
              <div key={client.id} className="client-badge-card">
                <div className="client-badge-header">
                  <Building2 size={20} className="client-icon" />
                  <div>
                    <h4 className="client-title">{client.name}</h4>
                    <span className="client-loc">{client.location}, {client.country}</span>
                  </div>
                </div>
                <span className="client-ind-tag">{client.industry}</span>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: "2rem" }}>
            <Link href="/clients" className="btn-outline-navy">
              VIEW GLOBAL PRESENCE MAP <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. SMART FAQS QUICK HIGHLIGHTS */}
      <section className="faq-preview-section">
        <div className="container-custom">
          <div className="section-title-block text-center">
            <span className="section-subtitle">Answers to the Questions That Matter</span>
            <h2 className="section-main-heading">Common Questions</h2>
          </div>

          <div className="faq-grid">
            {quickAnswerHighlights.map((faq, idx) => (
              <div key={idx} className="faq-card-box">
                <h4 className="faq-q">{faq.question}</h4>
                <p className="faq-a">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: "2rem" }}>
            <Link href="/faqs" className="btn-solid-navy">
              EXPLORE ALL FAQS <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA BANNER */}
      <section className="cta-banner-section">
        <div className="container-custom">
          <div className="cta-inner-card">
            <div className="cta-left-text">
              <h2>Ready to unlock AI’s true potential in your business?</h2>
              <p>Let’s build your roadmap to growth with strategy, data, and execution.</p>
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
        /* HERO SECTION STYLES */
        .hero-section {
          background-color: var(--color-coral-hero);
          padding: 6rem 0 5rem 0;
          position: relative;
          overflow: hidden;
        }

        .hero-container {
          max-width: var(--max-width-desktop);
          margin: 0 auto;
          padding: 0 1.5rem;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 3rem;
          align-items: center;
        }

        .hero-title {
          font-family: var(--font-primary);
          font-size: clamp(3rem, 2.5rem + 3vw, 4.75rem);
          font-weight: 700;
          color: var(--color-navy-dark);
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 1.5rem;
        }

        .hero-subtitle {
          font-family: var(--font-secondary);
          font-size: clamp(1.05rem, 1rem + 0.4vw, 1.25rem);
          color: var(--color-navy-dark);
          opacity: 0.9;
          line-height: 1.6;
          max-width: 580px;
          margin-bottom: 2.25rem;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 3.5rem;
        }

        .btn-solid-navy {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background-color: #0B1B3D;
          color: var(--color-white);
          font-family: var(--font-secondary);
          font-size: 0.875rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          padding: 0.95rem 1.85rem;
          border-radius: 4px;
          text-decoration: none;
          transition: all 0.25s ease;
          border: 1.5px solid #0B1B3D;
          box-shadow: 0 4px 14px rgba(11, 27, 61, 0.25);
        }

        .btn-solid-navy:hover {
          background-color: #060B18;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(11, 27, 61, 0.35);
        }

        .btn-outline-navy {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background-color: transparent;
          color: #0B1B3D;
          border: 1.5px solid #0B1B3D;
          font-family: var(--font-secondary);
          font-size: 0.875rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          padding: 0.95rem 1.85rem;
          border-radius: 4px;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .btn-outline-navy:hover {
          background-color: rgba(11, 27, 61, 0.08);
          transform: translateY(-2px);
        }

        .hero-pills-bar {
          display: inline-flex;
          align-items: center;
          gap: 1.25rem;
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(8px);
          padding: 0.75rem 1.25rem;
          border-radius: 40px;
          border: 1px solid rgba(11, 19, 43, 0.12);
        }

        .pill-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-navy-dark);
        }

        .pill-divider {
          width: 1px;
          height: 18px;
          background-color: rgba(11, 19, 43, 0.2);
        }

        /* GRAPHIC CANVAS */
        .graphic-canvas {
          position: relative;
          width: 100%;
          max-width: 440px;
          height: 400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-trend-graphic-svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        .chart-svg {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 2;
        }

        .node-circle {
          position: absolute;
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background-color: var(--color-navy-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(11, 19, 43, 0.3);
          z-index: 3;
        }

        .node-1 { top: 50%; left: 12%; }
        .node-2 { top: 32%; left: 52%; }
        .node-3 { top: 8%; left: 82%; }

        /* STORY SECTION */
        .story-section {
          padding: var(--spacing-section) 0;
          background-color: var(--color-cream-bg);
        }

        .container-narrow {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .story-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .story-badge {
          font-family: var(--font-secondary);
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-coral-hero);
          display: block;
          margin-bottom: 0.5rem;
        }

        .story-title {
          font-family: var(--font-primary);
          font-size: 2.75rem;
          color: var(--color-navy-dark);
          margin-bottom: 0.75rem;
        }

        .title-underline {
          width: 50px;
          height: 3px;
          background-color: var(--color-navy-dark);
          margin: 0 auto;
          border-radius: 2px;
        }

        .story-card {
          background-color: var(--color-white);
          padding: 3rem;
          border-radius: var(--border-radius-md);
          box-shadow: var(--color-card-shadow);
          border: 1px solid var(--color-border-subtle);
        }

        .story-lead {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--color-navy-dark);
          line-height: 1.6;
        }

        .highlight-callout {
          background-color: var(--color-coral-light);
          padding: 1rem 1.5rem;
          border-left: 4px solid var(--color-coral-hero);
          border-radius: var(--border-radius-sm);
          margin: 1.5rem 0;
          color: var(--color-navy-dark);
        }

        .story-tagline-box {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-top: 2.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--color-border-light);
          font-family: var(--font-primary);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-navy-dark);
        }

        .dot {
          color: var(--color-coral-hero);
        }

        /* SERVICES SECTION */
        .services-section {
          padding: var(--spacing-section) 0;
          background-color: var(--color-white);
        }

        .container-custom {
          max-width: var(--max-width-desktop);
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .section-title-block {
          margin-bottom: 3.5rem;
        }

        .text-center { text-align: center; }

        .section-subtitle {
          font-family: var(--font-secondary);
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-coral-hero);
          display: block;
          margin-bottom: 0.5rem;
        }

        .section-main-heading {
          font-family: var(--font-primary);
          font-size: 2.5rem;
          color: var(--color-navy-dark);
          margin-bottom: 0.75rem;
        }

        .section-desc {
          color: var(--color-text-muted);
          font-size: 1.0625rem;
          max-width: 650px;
          margin: 0 auto;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .service-card {
          background-color: var(--color-cream-bg);
          padding: 2.25rem;
          border-radius: var(--border-radius-md);
          border: 1px solid var(--color-border-subtle);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--color-card-shadow-hover);
          border-color: var(--color-coral-border);
        }

        .service-icon-box {
          width: 50px;
          height: 50px;
          border-radius: var(--border-radius-sm);
          background-color: var(--color-coral-hero);
          color: var(--color-navy-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .service-card-title {
          font-family: var(--font-primary);
          font-size: 1.25rem;
          color: var(--color-navy-dark);
          margin-bottom: 0.75rem;
        }

        .service-card-desc {
          font-size: 0.9375rem;
          color: var(--color-text-muted);
          margin-bottom: 1.5rem;
        }

        .service-bullets {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
          margin-top: auto;
          margin-bottom: 1.5rem;
          padding-top: 1rem;
          border-top: 1px dashed var(--color-border-light);
        }

        .bullet-item {
          font-size: 0.8125rem;
          color: var(--color-navy-dark);
          font-weight: 500;
        }

        .service-learn-more {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--color-navy-dark);
          text-decoration: none;
        }

        .service-learn-more:hover {
          color: var(--color-coral-hero);
        }

        /* INDUSTRIES PREVIEW */
        .industries-preview-section {
          padding: var(--spacing-section) 0;
          background-color: var(--color-cream-bg);
        }

        .industries-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .industry-card-item {
          background-color: var(--color-white);
          padding: 1.75rem;
          border-radius: var(--border-radius-md);
          border: 1.5px solid #CBD5E1 !important;
          box-shadow: 0 4px 14px rgba(11, 19, 43, 0.05);
          text-decoration: none;
          transition: all 0.25s ease;
          display: flex;
          flex-direction: column;
        }

        .industry-card-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(11, 19, 43, 0.1);
          border-color: #0B132B !important;
        }

        .ind-name {
          font-family: var(--font-primary);
          font-size: 1.2rem;
          color: var(--color-navy-dark);
          margin-bottom: 0.5rem;
        }

        .ind-summary {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }

        .ind-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--color-navy-dark);
        }

        /* CLIENTS PREVIEW */
        .clients-preview-section {
          padding: var(--spacing-section) 0;
          background-color: var(--color-white);
        }

        .clients-logo-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .client-badge-card {
          background-color: var(--color-cream-bg);
          padding: 1.5rem;
          border-radius: var(--border-radius-md);
          border: 1px solid var(--color-border-subtle);
        }

        .client-badge-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.75rem;
        }

        .client-icon {
          color: var(--color-coral-hero);
        }

        .client-title {
          font-family: var(--font-primary);
          font-size: 1.05rem;
          color: var(--color-navy-dark);
        }

        .client-loc {
          font-size: 0.8125rem;
          color: var(--color-text-light);
          display: block;
        }

        .client-ind-tag {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          background-color: var(--color-coral-light);
          color: var(--color-navy-dark);
          padding: 0.25rem 0.6rem;
          border-radius: 4px;
        }

        /* FAQ PREVIEW */
        .faq-preview-section {
          padding: var(--spacing-section) 0;
          background-color: var(--color-cream-bg);
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.75rem;
        }

        .faq-card-box {
          background-color: var(--color-white);
          padding: 2rem;
          border-radius: var(--border-radius-md);
          border: 1px solid var(--color-border-subtle);
        }

        .faq-q {
          font-family: var(--font-primary);
          font-size: 1.15rem;
          color: var(--color-navy-dark);
          margin-bottom: 0.75rem;
        }

        .faq-a {
          font-size: 0.9375rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        /* CTA BANNER */
        .cta-banner-section {
          padding: 3rem 0;
          background-color: var(--color-white);
        }

        .cta-inner-card {
          background-color: var(--color-navy-dark);
          border-radius: var(--border-radius-lg);
          padding: 2.25rem 3rem;
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
          .hero-container {
            grid-template-columns: 1fr;
          }
          .services-grid {
            grid-template-columns: 1fr 1fr;
          }
          .industries-grid {
            grid-template-columns: 1fr 1fr;
          }
          .clients-logo-grid {
            grid-template-columns: 1fr 1fr;
          }
          .cta-inner-card {
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 600px) {
          .services-grid,
          .industries-grid,
          .clients-logo-grid,
          .faq-grid {
            grid-template-columns: 1fr;
          }
          .hero-actions {
            flex-direction: column;
          }
          .hero-pills-bar {
            flex-direction: column;
            align-items: flex-start;
          }
          .pill-divider {
            display: none;
          }
          .story-tagline-box {
            flex-direction: column;
            gap: 0.4rem;
          }
          .dot { display: none; }
        }
      `}</style>
    </div>
  );
}
