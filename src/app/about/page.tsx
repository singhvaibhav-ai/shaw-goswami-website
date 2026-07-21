"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Brain, Signpost, HelpCircle, Users, Layers, Target, TrendingUp, Search, Compass, Code, BarChart3 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="about-page-wrapper">
      {/* 1. HERO SECTION */}
      <section className="about-hero">
        <div className="container-custom">
          <div className="about-hero-grid">
            <div className="hero-text-block">
              <h1 className="hero-heading">
                About<br />
                Shaw & Goswami
              </h1>
              <div className="title-divider" />
              <p className="hero-lead">
                We bridge the gap between AI potential and business performance.
              </p>
              <p className="hero-sub">
                Our mission is simple: help leadership teams identify where AI creates real value and execute roadmaps that deliver measurable growth.
              </p>
            </div>

            {/* Stadium-Cropped Graphic */}
            <div className="hero-image-block">
              <div className="stadium-frame">
                <div className="skyline-mock-bg" />
              </div>
              <div className="dotted-bg-pattern" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE GAP WE SEE */}
      <section className="gap-section">
        <div className="container-custom">
          <div className="text-center" style={{ marginBottom: "3rem" }}>
            <h2 className="section-title-serif">THE GAP WE SEE</h2>
            <div className="title-underline-center" />
          </div>

          <div className="gap-grid">
            {/* Col 1 */}
            <div className="gap-card">
              <div className="gap-icon-circle">
                <Brain size={28} />
              </div>
              <h3>AI IS ADVANCING</h3>
              <p>Technology is evolving at unprecedented speed.</p>
            </div>

            {/* Col 2 */}
            <div className="gap-card border-x">
              <div className="gap-icon-circle">
                <Signpost size={28} />
              </div>
              <h3>BUT CLARITY IS MISSING</h3>
              <p>Business leaders struggle to know where AI fits and what will drive real impact.</p>
            </div>

            {/* Col 3 */}
            <div className="gap-card">
              <div className="gap-icon-circle">
                <HelpCircle size={28} />
              </div>
              <h3>THE RESULT</h3>
              <p>Confusion, scattered pilots, and missed opportunities for growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR STORY */}
      <section className="story-metrics-section">
        <div className="container-custom">
          <div className="story-metrics-grid">
            <div className="story-text-col">
              <h2 className="section-title-serif">OUR STORY</h2>
              <div className="title-underline-left" />
              <p className="story-paragraph">
                Shaw & Goswami was built to bridge this gap.
              </p>
              <p className="story-paragraph">
                With 40+ years of combined experience across AI, data engineering, product development, and business consulting, we combine deep technical expertise with business acumen to turn AI potential into measurable outcomes.
              </p>
            </div>

            <div className="metrics-cards-grid">
              <div className="metric-box">
                <Users size={32} className="metric-icon" />
                <div className="metric-num">40+</div>
                <div className="metric-lbl">YEARS</div>
                <p className="metric-desc">Combined experience across technology and business</p>
              </div>

              <div className="metric-box">
                <Layers size={32} className="metric-icon" />
                <div className="metric-num">4</div>
                <div className="metric-lbl">CORE EXPERTISE</div>
                <p className="metric-desc">AI Strategy, Data Engineering, Product Development, Business Consulting</p>
              </div>

              <div className="metric-box">
                <Target size={32} className="metric-icon" />
                <div className="metric-num">100%</div>
                <div className="metric-lbl">FOCUS</div>
                <p className="metric-desc">On solving real business problems with AI</p>
              </div>

              <div className="metric-box">
                <TrendingUp size={32} className="metric-icon" />
                <div className="metric-num">RESULTS</div>
                <div className="metric-lbl">THAT MATTER</div>
                <p className="metric-desc">Strategies that drive measurable growth and efficiency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW WE WORK */}
      <section className="how-we-work-section">
        <div className="container-custom">
          <div className="text-center" style={{ marginBottom: "3.5rem" }}>
            <h2 className="section-title-serif">HOW WE WORK</h2>
            <div className="title-underline-center" />
          </div>

          <div className="work-steps-flow">
            {/* Step 01 */}
            <div className="step-card">
              <div className="step-icon-wrapper">
                <Search size={24} />
              </div>
              <div className="step-num">01</div>
              <h4 className="step-title">UNDERSTAND</h4>
              <p className="step-desc">We go deep into your business to identify operational friction and growth opportunities.</p>
            </div>

            {/* Step 02 */}
            <div className="step-card">
              <div className="step-icon-wrapper">
                <Compass size={24} />
              </div>
              <div className="step-num">02</div>
              <h4 className="step-title">DESIGN</h4>
              <p className="step-desc">We define the right AI strategy and roadmap aligned to your business goals.</p>
            </div>

            {/* Step 03 */}
            <div className="step-card">
              <div className="step-icon-wrapper">
                <Code size={24} />
              </div>
              <div className="step-num">03</div>
              <h4 className="step-title">BUILD</h4>
              <p className="step-desc">We develop and integrate AI solutions that are secure, scalable, and practical.</p>
            </div>

            {/* Step 04 */}
            <div className="step-card">
              <div className="step-icon-wrapper">
                <BarChart3 size={24} />
              </div>
              <div className="step-num">04</div>
              <h4 className="step-title">DELIVER</h4>
              <p className="step-desc">We drive adoption, measure impact, and ensure continuous value realization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA BANNER */}
      <section className="cta-banner-section">
        <div className="container-custom">
          <div className="cta-inner-card">
            <div className="cta-left-text">
              <h2>Ready to unlock AI’s true potential in your business?</h2>
              <p>Let’s build your roadmap to growth.</p>
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
        .about-hero {
          background-color: var(--color-coral-hero);
          padding: 5rem 0 4.5rem 0;
        }

        .container-custom {
          max-width: var(--max-width-desktop);
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .about-hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 3rem;
          align-items: center;
        }

        .hero-heading {
          font-family: var(--font-primary);
          font-size: clamp(3rem, 2.5rem + 2.5vw, 4.25rem);
          font-weight: 700;
          color: var(--color-navy-dark);
          line-height: 1.1;
          margin-bottom: 1rem;
        }

        .title-divider {
          width: 60px;
          height: 3px;
          background-color: var(--color-navy-dark);
          margin-bottom: 1.75rem;
        }

        .hero-lead {
          font-family: var(--font-secondary);
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--color-navy-dark);
          line-height: 1.5;
          margin-bottom: 1rem;
        }

        .hero-sub {
          font-family: var(--font-secondary);
          font-size: 1.05rem;
          color: var(--color-navy-dark);
          opacity: 0.9;
          line-height: 1.6;
        }

        .hero-image-block {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .stadium-frame {
          width: 380px;
          height: 380px;
          border-radius: 190px 190px 20px 20px;
          overflow: hidden;
          background-color: #1E293B;
          box-shadow: 0 16px 40px rgba(11, 19, 43, 0.25);
          position: relative;
          z-index: 2;
        }

        .skyline-mock-bg {
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 0.85) 100%),
                      url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80") center/cover no-repeat;
        }

        .dotted-bg-pattern {
          position: absolute;
          top: -20px;
          right: 20px;
          width: 260px;
          height: 260px;
          border-radius: 50%;
          border: 2px dashed rgba(11, 19, 43, 0.2);
          z-index: 1;
        }

        /* GAP SECTION */
        .gap-section {
          padding: var(--spacing-section) 0;
          background-color: var(--color-cream-bg);
        }

        .section-title-serif {
          font-family: var(--font-primary);
          font-size: 2.25rem;
          color: var(--color-navy-dark);
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
        }

        .title-underline-center {
          width: 50px;
          height: 3px;
          background-color: var(--color-coral-hero);
          margin: 0 auto;
        }

        .title-underline-left {
          width: 50px;
          height: 3px;
          background-color: var(--color-coral-hero);
          margin-bottom: 1.5rem;
        }

        .gap-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          text-align: center;
        }

        .gap-card {
          padding: 2.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .border-x {
          border-left: 1px solid var(--color-border-subtle);
          border-right: 1px solid var(--color-border-subtle);
        }

        .gap-icon-circle {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background-color: var(--color-coral-light);
          color: var(--color-navy-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .gap-card h3 {
          font-family: var(--font-secondary);
          font-size: 0.9375rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--color-navy-dark);
          margin-bottom: 0.75rem;
        }

        .gap-card p {
          font-size: 0.9375rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        /* STORY & METRICS */
        .story-metrics-section {
          padding: var(--spacing-section) 0;
          background-color: var(--color-coral-light);
        }

        .story-metrics-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 3.5rem;
          align-items: center;
        }

        .story-paragraph {
          font-size: 1.05rem;
          color: var(--color-navy-dark);
          line-height: 1.7;
          margin-bottom: 1.25rem;
        }

        .metrics-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .metric-box {
          background-color: var(--color-white);
          padding: 2rem;
          border-radius: var(--border-radius-md);
          border: 1px solid var(--color-border-subtle);
          box-shadow: var(--color-card-shadow);
        }

        .metric-icon {
          color: var(--color-navy-dark);
          margin-bottom: 0.75rem;
        }

        .metric-num {
          font-family: var(--font-primary);
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--color-navy-dark);
          line-height: 1;
        }

        .metric-lbl {
          font-family: var(--font-secondary);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--color-navy-dark);
          margin-bottom: 0.5rem;
        }

        .metric-desc {
          font-size: 0.8125rem;
          color: var(--color-text-muted);
          line-height: 1.5;
        }

        /* HOW WE WORK */
        .how-we-work-section {
          padding: var(--spacing-section) 0;
          background-color: var(--color-white);
        }

        .work-steps-flow {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          position: relative;
        }

        .step-card {
          background-color: var(--color-cream-bg);
          padding: 2rem 1.5rem;
          border-radius: var(--border-radius-md);
          border: 1px solid var(--color-border-subtle);
          text-align: center;
          position: relative;
        }

        .step-icon-wrapper {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background-color: var(--color-coral-hero);
          color: var(--color-navy-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.25rem auto;
        }

        .step-num {
          font-family: var(--font-primary);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-coral-hero);
          margin-bottom: 0.25rem;
        }

        .step-title {
          font-family: var(--font-secondary);
          font-size: 0.9375rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--color-navy-dark);
          margin-bottom: 0.75rem;
        }

        .step-desc {
          font-size: 0.875rem;
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
          .about-hero-grid,
          .story-metrics-grid {
            grid-template-columns: 1fr;
          }
          .gap-grid,
          .work-steps-flow {
            grid-template-columns: 1fr 1fr;
          }
          .border-x {
            border: none;
          }
        }

        @media (max-width: 600px) {
          .gap-grid,
          .metrics-cards-grid,
          .work-steps-flow {
            grid-template-columns: 1fr;
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
