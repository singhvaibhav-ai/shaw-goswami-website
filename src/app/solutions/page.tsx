"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Cpu, Compass, PieChart, BookOpen, FileText, MessageSquare, Layers, Activity, TrendingUp } from "lucide-react";
import { solutions } from "../../data/solutions";

const CATEGORIES = [
  { id: "all", label: "All Solutions" },
  { id: "ops-supply", label: "Operations & Supply Chain" },
  { id: "decision", label: "Decision Support" },
  { id: "agents", label: "AI Agents & Automation" }
];

export default function SolutionsIndex() {
  const [activeCategory, setActiveCategory] = useState("all");

  const iconMap: { [key: string]: React.ComponentType<any> } = {
    TrendingUp,
    Compass,
    PieChart,
    BookOpen,
    FileText,
    MessageSquare,
    Layers,
    Activity,
    Cpu
  };

  const getFilteredSolutions = () => {
    if (activeCategory === "all") return solutions;
    
    return solutions.filter(sol => {
      if (activeCategory === "ops-supply") {
        return ["demand-forecasting", "supply-chain-tower", "digital-twin-simulation"].includes(sol.slug);
      }
      if (activeCategory === "decision") {
        return ["executive-decision-intelligence", "knowledge-assistant", "healthcare-ai-assistant"].includes(sol.slug);
      }
      if (activeCategory === "agents") {
        return ["document-intelligence", "ai-customer-support", "process-automation"].includes(sol.slug);
      }
      return true;
    });
  };

  const filtered = getFilteredSolutions();

  return (
    <>
      {/* Subpage Header */}
      <section className="solutions-header-section" aria-labelledby="page-title">
        <div className="container">
          <div className="subpage-header-content">
            <span className="section-tagline">Capabilities</span>
            <h1 id="page-title" className="subpage-title">Our Transformation Solutions</h1>
            <p className="subpage-lead">
              We deploy custom analytics pipelines, cognitive architectures, and simulation twins designed to solve complex operational challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Grid */}
      <section className="section" style={{ backgroundColor: "#FFFFFF" }} aria-label="Solutions Filter Grid">
        <div className="container">
          {/* Filters */}
          <div className="filter-bar" aria-label="Filter solutions by capability">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`filter-btn ${activeCategory === cat.id ? "active" : ""}`}
                aria-pressed={activeCategory === cat.id}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid-3" style={{ marginTop: "3rem" }}>
            {filtered.map((sol) => {
              const SolIcon = iconMap[sol.iconName] || Cpu;
              return (
                <article key={sol.slug} className="card solution-index-card">
                  <div className="solution-index-icon">
                    <SolIcon size={24} />
                  </div>
                  <h2 className="solution-index-title">
                    <Link href={`/solutions/${sol.slug}`}>{sol.title}</Link>
                  </h2>
                  <p className="solution-index-desc">
                    {sol.summary}
                  </p>
                  <div className="solution-index-footer">
                    <Link href={`/solutions/${sol.slug}`} className="text-link">
                      Explore Solution &rarr;
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="no-results">
              No solutions match this category filter.
            </div>
          )}
        </div>
      </section>

      {/* Bottom Consultation CTA */}
      <section className="solutions-cta-bar" aria-labelledby="consultation-heading">
        <div className="container solutions-cta-container">
          <h2 id="consultation-heading" className="solutions-cta-heading">Ready to optimize your operations?</h2>
          <p className="solutions-cta-sub">
            Let our consulting partners audit your existing data stacks and define a high-yield AI implementation roadmap.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Book a Strategy Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
