"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Filter, Target, Database } from "lucide-react";
import { caseStudies } from "../../data/caseStudies";

const SECTORS = [
  { id: "all", label: "All Sectors" },
  { id: "retail", label: "Retail & FMCG" },
  { id: "manufacturing", label: "Manufacturing" },
  { id: "financial", label: "Financial Services" }
];

export default function CaseStudiesIndex() {
  const [selectedSector, setSelectedSector] = useState("all");

  const getFilteredCaseStudies = () => {
    if (selectedSector === "all") return caseStudies;
    
    return caseStudies.filter(cs => {
      if (selectedSector === "retail") return cs.industry === "Retail & FMCG";
      if (selectedSector === "manufacturing") return cs.industry === "Manufacturing";
      if (selectedSector === "financial") return cs.industry === "Financial Services";
      return true;
    });
  };

  const filtered = getFilteredCaseStudies();

  return (
    <>
      {/* Page Header */}
      <section className="case-header-section" aria-labelledby="page-title">
        <div className="container">
          <div className="subpage-header-content">
            <span className="section-tagline">Track Record</span>
            <h1 id="page-title" className="subpage-title">Client Success Stories</h1>
            <p className="subpage-lead">
              Review how we help mid-market and enterprise organizations achieve measurable business outcomes through data, automation, and AI.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Grid */}
      <section className="section" style={{ backgroundColor: "#FFFFFF" }} aria-label="Case studies listing">
        <div className="container">
          {/* Sector Filters */}
          <div className="filter-bar" aria-label="Filter case studies by industry">
            <div className="filter-title-label">
              <Filter size={14} /> Filter by Sector:
            </div>
            {SECTORS.map((sec) => (
              <button
                key={sec.id}
                onClick={() => setSelectedSector(sec.id)}
                className={`filter-btn ${selectedSector === sec.id ? "active" : ""}`}
                aria-pressed={selectedSector === sec.id}
              >
                {sec.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid-3" style={{ marginTop: "3rem" }}>
            {filtered.map((cs) => (
              <article key={cs.slug} className="card case-index-card">
                <div className="case-index-meta">
                  <span className="case-index-industry">{cs.industry}</span>
                  <span className="case-index-type">{cs.solutionType}</span>
                </div>
                <h2 className="case-index-title">
                  <Link href={`/case-studies/${cs.slug}`}>{cs.title}</Link>
                </h2>
                <p className="case-index-challenge">
                  <strong>Challenge:</strong> {cs.challenge.slice(0, 140)}...
                </p>
                <div className="case-index-metrics-box">
                  {cs.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx} className="case-index-metric">
                      <span className="case-index-metric-val">{m.value}</span>
                      <span className="case-index-metric-lbl">{m.label}</span>
                    </div>
                  ))}
                </div>
                <div className="case-index-footer">
                  <Link href={`/case-studies/${cs.slug}`} className="text-link">
                    Read Case Study &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="no-results">
              No case studies found for this sector.
            </div>
          )}
        </div>
      </section>

      {/* CTA section bottom */}
      <section className="case-cta-bar" aria-labelledby="cta-heading">
        <div className="container case-cta-container">
          <h2 id="cta-heading" className="case-cta-heading">Let's build your success story</h2>
          <p className="case-cta-sub">
            Let our consulting team design and execute a pilot program matching your organization's core operations.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Schedule a Pilot Discussion
          </Link>
        </div>
      </section>
    </>
  );
}
