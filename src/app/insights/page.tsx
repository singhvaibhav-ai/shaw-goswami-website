"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, User, Clock, Filter } from "lucide-react";
import { insights } from "../../data/insights";

const INSIGHT_CATEGORIES = [
  { id: "all", label: "All Insights" },
  { id: "Operations", label: "Operations" },
  { id: "AI Governance", label: "AI Governance" },
  { id: "Technology Transformation", label: "Technology" }
];

export default function InsightsIndex() {
  const [activeCategory, setActiveCategory] = useState("all");

  const getFilteredArticles = () => {
    if (activeCategory === "all") return insights;
    return insights.filter(art => art.category === activeCategory);
  };

  const filtered = getFilteredArticles();
  
  // The first article serves as our "Featured" article
  const featuredArticle = insights[0];
  
  // Recent articles are the rest of the list, filtered
  const gridArticles = filtered.filter(art => art.slug !== featuredArticle.slug || activeCategory !== "all");

  return (
    <>
      {/* Header */}
      <section className="insights-header-section" aria-labelledby="page-title">
        <div className="container">
          <div className="subpage-header-content">
            <span className="section-tagline">Intellect & Research</span>
            <h1 id="page-title" className="subpage-title">Insights</h1>
            <p className="subpage-lead">
              Strategic analysis, technology implementation briefings, and executive guides authored by our consulting partners.
            </p>
          </div>
        </div>
      </section>

      {/* Main Blog Core */}
      <section className="section" style={{ backgroundColor: "#FFFFFF" }} aria-label="Insights feed">
        <div className="container">
          {/* Featured Article - Only show when filtering "All" */}
          {activeCategory === "all" && featuredArticle && (
            <div className="featured-container" aria-label="Featured Article">
              <span className="featured-badge">Featured Post</span>
              <article className="featured-card">
                <div className="featured-content">
                  <span className="article-category-tag">{featuredArticle.category}</span>
                  <h2 className="featured-title">
                    <Link href={`/insights/${featuredArticle.slug}`}>{featuredArticle.title}</Link>
                  </h2>
                  <p className="featured-excerpt">{featuredArticle.excerpt}</p>
                  <div className="article-meta-row">
                    <span className="meta-item">
                      <User size={14} /> {featuredArticle.author}
                    </span>
                    <span className="meta-item">
                      <Calendar size={14} /> {featuredArticle.date}
                    </span>
                    <span className="meta-item">
                      <Clock size={14} /> {featuredArticle.readingTime}
                    </span>
                  </div>
                  <div style={{ marginTop: "2rem" }}>
                    <Link href={`/insights/${featuredArticle.slug}`} className="btn btn-primary">
                      Read Article &rarr;
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          )}

          {/* Filters */}
          <div className="filter-bar" style={{ marginTop: activeCategory === "all" ? "5rem" : "0" }} aria-label="Filter insights by category">
            <div className="filter-title-label">
              <Filter size={14} /> Filter by Topic:
            </div>
            {INSIGHT_CATEGORIES.map((cat) => (
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

          {/* Grid of Articles */}
          <div className="grid-3" style={{ marginTop: "3rem" }}>
            {gridArticles.map((article) => (
              <article key={article.slug} className="card blog-grid-card">
                <span className="article-category-tag" style={{ marginBottom: "0.75rem" }}>
                  {article.category}
                </span>
                <h2 className="blog-grid-title">
                  <Link href={`/insights/${article.slug}`}>{article.title}</Link>
                </h2>
                <p className="blog-grid-excerpt">
                  {article.excerpt}
                </p>
                <div className="article-meta-row" style={{ marginTop: "auto", borderTop: "1px solid var(--color-border)", paddingTop: "1rem" }}>
                  <span className="meta-item text-xs">
                    <Calendar size={12} /> {article.date}
                  </span>
                  <span className="meta-item text-xs">
                    <Clock size={12} /> {article.readingTime}
                  </span>
                </div>
                <div style={{ marginTop: "1.25rem" }}>
                  <Link href={`/insights/${article.slug}`} className="text-link">
                    Read Article &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="no-results">
              No insights articles match this category.
            </div>
          )}
        </div>
      </section>

      {/* Newsletter signup / contact footer */}
      <section className="insights-newsletter-bar" aria-labelledby="newsletter-heading">
        <div className="container insights-newsletter-container">
          <h2 id="newsletter-heading" className="insights-newsletter-heading">Get insights delivered to your inbox</h2>
          <p className="insights-newsletter-sub">
            Subscribe to receive our latest strategic frameworks, case studies, and research publications.
          </p>
          <div className="newsletter-form-wrapper">
            <Link href="/contact" className="btn btn-primary">
              Subscribe & Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
