import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Target, Award, CheckCircle } from "lucide-react";
import { getCaseStudyBySlug, getCaseStudies } from "../../../lib/cms";

export async function generateStaticParams() {
  const allCaseStudies = await getCaseStudies();
  return allCaseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CaseStudySubPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const cs = await getCaseStudyBySlug(slug);

  if (!cs) {
    notFound();
  }

  return (
    <>
      {/* Page Header */}
      <section className="case-detail-header" aria-labelledby="page-title">
        <div className="container">
          <Link href="/case-studies" className="back-link">
            <ArrowLeft size={16} /> Back to All Case Studies
          </Link>
          <div className="case-detail-header-content">
            <div className="case-meta-tag-box">
              <span className="case-meta-industry">{cs.industry}</span>
              <span className="case-meta-divider">|</span>
              <span className="case-meta-type">{cs.solutionType}</span>
            </div>
            <h1 id="page-title" className="case-detail-title">{cs.title}</h1>
          </div>
        </div>
      </section>

      {/* Main Content & Outcomes */}
      <section className="section" style={{ backgroundColor: "#FFFFFF" }} aria-label="Case study details">
        <div className="container">
          {/* Prominent Metrics Dashboard */}
          <div className="case-metrics-dashboard" aria-label="Key Performance Indicators">
            <h2 className="sr-only">Key Impact Metrics</h2>
            <div className="case-metrics-row">
              {cs.metrics.map((metric, idx) => (
                <div key={idx} className="case-metric-card">
                  <div className="case-metric-value">{metric.value}</div>
                  <div className="case-metric-label">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Narrative Content */}
          <div className="case-narrative-layout">
            <div className="case-narrative-body">
              {/* Challenge */}
              <div className="narrative-section">
                <h2 className="narrative-heading">The Challenge</h2>
                <p className="narrative-text">{cs.challenge}</p>
              </div>

              {/* Solution */}
              <div className="narrative-section">
                <h2 className="narrative-heading">Our Transformation Solution</h2>
                <p className="narrative-text">{cs.solution}</p>
              </div>

              {/* Outcome */}
              <div className="narrative-section">
                <h2 className="narrative-heading">Business Outcome</h2>
                <p className="narrative-text">{cs.outcome}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="case-detail-cta-bar" aria-labelledby="cta-heading">
        <div className="container case-detail-cta-container">
          <h2 id="cta-heading" className="case-detail-cta-heading">Achieve similar outcomes for your enterprise</h2>
          <p className="case-detail-cta-sub">
            Let our consulting partners audit your existing operations and propose a pilot AI framework.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Schedule a Strategy Consultation &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
