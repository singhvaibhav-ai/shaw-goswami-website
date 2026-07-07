import React from "react";
import Link from "next/link";
import { Shield, Target, Compass, Award, Globe, HelpCircle } from "lucide-react";

const TEAM = [
  {
    name: "Pritha Shaw",
    title: "Co-Founder & Senior Partner",
    bio: "Over 18 years of experience leading technology modernization for Fortune 500 banks and retail chains. Specialized in S&OP and machine learning pipelines."
  },
  {
    name: "Anirban Goswami",
    title: "Co-Founder & Managing Partner",
    bio: "Former management consultant at top-tier institutional firms. Expert in corporate strategy, digital twin systems, and emerging market expansions."
  },
  {
    name: "Siddharth Roy",
    title: "Director of AI Technology",
    bio: "Deep learning engineer and systems architect. Over a decade of experience designing vector pipelines, LLM agent sandboxes, and HIPAA-compliant data grids."
  }
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="about-header-section" aria-labelledby="page-title">
        <div className="container">
          <div className="subpage-header-content">
            <span className="section-tagline">Who We Are</span>
            <h1 id="page-title" className="subpage-title">Where Strategy Meets Intelligent Technology</h1>
            <p className="subpage-lead">
              Shaw & Goswami Consulting is a premium global boutique management consulting firm specializing in AI-powered business transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section" style={{ backgroundColor: "#FFFFFF" }} aria-label="Our founding story">
        <div className="container">
          <div className="grid-2">
            <div>
              <h2 style={{ fontSize: "2rem", color: "var(--color-navy)", marginBottom: "1.5rem" }}>Our Story</h2>
              <p style={{ fontSize: "1.125rem", color: "var(--color-text-gray)", lineHeight: "1.7", marginBottom: "1.5rem" }}>
                Founded by veteran enterprise architects and management consultants, Shaw & Goswami Consulting was established to bridge the gap between high-level business strategy and advanced artificial intelligence engineering.
              </p>
              <p style={{ fontSize: "1.125rem", color: "var(--color-text-gray)", lineHeight: "1.7" }}>
                We believe that emerging technology should never be implemented for its own sake. Instead, we work back from our clients' core business objectives—revenue expansion, margin protection, and operational velocity—to build custom intelligence systems that drive measurable real-world outcomes.
              </p>
            </div>
            <div style={{ backgroundColor: "var(--color-bg)", padding: "3rem", borderRadius: "var(--border-radius-lg)", border: "1px solid var(--color-border)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3 style={{ fontSize: "1.5rem", color: "var(--color-navy)", marginBottom: "1rem", fontWeight: "700" }}>Our Vision</h3>
              <p style={{ fontSize: "1.125rem", color: "var(--color-text-gray)", lineHeight: "1.6", fontStyle: "italic", marginBottom: "0" }}>
                "To position Shaw & Goswami as the trusted partner of choice for CEOs, COOs, and CIOs navigating the complex transition into AI-orchestrated business ecosystems."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="approach" className="section" style={{ borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }} aria-labelledby="values-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-tagline">Principles</span>
            <h2 id="values-heading">Our Values & Approach</h2>
            <p>Our work is governed by institutional values that protect corporate privacy and drive measurable value.</p>
          </div>

          <div className="grid-3">
            <div className="card">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Target size={32} style={{ color: "var(--color-blue)", marginBottom: "1.25rem" }} />
                <h3 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "0.75rem", color: "var(--color-navy)" }}>Business First</h3>
                <p style={{ fontSize: "0.9375rem", color: "var(--color-text-gray)", lineHeight: "1.5", marginBottom: "0" }}>
                  We map technical algorithms directly to corporate financial statements, ensuring that AI investments deliver visible, measurable EBITDA improvements.
                </p>
              </div>
            </div>

            <div className="card">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Compass size={32} style={{ color: "var(--color-blue)", marginBottom: "1.25rem" }} />
                <h3 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "0.75rem", color: "var(--color-navy)" }}>Independent Counsel</h3>
                <p style={{ fontSize: "0.9375rem", color: "var(--color-text-gray)", lineHeight: "1.5", marginBottom: "0" }}>
                  We do not resell vendor software. We provide unbiased strategic analysis and recommend open, private, or hybrid tech stacks that fit your needs.
                </p>
              </div>
            </div>

            <div className="card">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Shield size={32} style={{ color: "var(--color-blue)", marginBottom: "1.25rem" }} />
                <h3 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "0.75rem", color: "var(--color-navy)" }}>Ethical & Responsible AI</h3>
                <p style={{ fontSize: "0.9375rem", color: "var(--color-text-gray)", lineHeight: "1.5", marginBottom: "0" }}>
                  We design strict vector containment borders, user access limits, and MLOps testing loops to protect corporate data integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section" style={{ backgroundColor: "#FFFFFF" }} aria-labelledby="team-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-tagline">Leadership</span>
            <h2 id="team-heading">Our Executive Team</h2>
            <p>Our partners bring decades of combined technology architecture and management consulting experience to your board table.</p>
          </div>

          <div className="grid-3">
            {TEAM.map((member, idx) => (
              <div key={idx} className="card team-card">
                <div className="team-avatar-placeholder">
                  <span>{member.name.split(" ").map(n => n[0]).join("")}</span>
                </div>
                <h3 className="team-member-name">{member.name}</h3>
                <span className="team-member-title">{member.title}</span>
                <p className="team-member-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="section" style={{ backgroundColor: "var(--color-navy)", color: "var(--color-white)" }} aria-labelledby="global-heading">
        <div className="container">
          <div className="global-grid">
            <div>
              <span className="section-tagline" style={{ color: "var(--color-cyan)" }}>Global Scale</span>
              <h2 id="global-heading" style={{ color: "var(--color-white)", fontSize: "2rem", marginBottom: "1.5rem" }}>Our Global Presence</h2>
              <p style={{ color: "#94A3B8", fontSize: "1.125rem", lineHeight: "1.7", marginBottom: "1.5rem" }}>
                Headquartered in Kolkata, India, Shaw & Goswami Consulting serves client sites across the globe. Our model bridges localized management support with high-end, remote deep learning execution pipelines.
              </p>
              <p style={{ color: "#94A3B8", fontSize: "1.125rem", lineHeight: "1.7" }}>
                Our global delivery architecture ensures round-the-clock implementation agility, optimizing client turnaround times for critical systems deployments.
              </p>
            </div>
            <div className="global-map-mock">
              <Globe size={180} className="global-globe-icon" />
              <div className="location-pin" style={{ top: "60%", left: "68%" }}>Kolkata Hub</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="about-cta-bar" aria-labelledby="cta-heading-bottom">
        <div className="container about-cta-container">
          <h2 id="cta-heading-bottom" className="about-cta-heading">Partner with us on your AI roadmap</h2>
          <p className="about-cta-sub">
            Let our consulting partners audit your existing workflows and evaluate potential AI performance yield scores.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Schedule a Partner Call &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
