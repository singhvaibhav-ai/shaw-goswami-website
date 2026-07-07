import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, User, Calendar, Clock, Share2, ArrowRight } from "lucide-react";
import { getInsightBySlug, getInsights } from "../../../lib/cms";

export async function generateStaticParams() {
  const allInsights = await getInsights();
  return allInsights.map((art) => ({
    slug: art.slug,
  }));
}

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ArticleSubPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getInsightBySlug(slug);

  if (!article) {
    notFound();
  }

  // Get related articles (exclude current one)
  const allInsights = await getInsights();
  const relatedArticles = allInsights
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  return (
    <>
      {/* Header */}
      <section className="article-header-section" aria-label="Article header">
        <div className="container">
          <Link href="/insights" className="back-link">
            <ArrowLeft size={16} /> Back to All Insights
          </Link>
          <div className="article-header-container">
            <span className="article-category-label">{article.category}</span>
            <h1 className="article-main-title">{article.title}</h1>
            <div className="article-meta-row" style={{ marginTop: "1.5rem" }}>
              <span className="meta-item text-white-opacity">
                <User size={14} /> {article.author}
              </span>
              <span className="meta-item text-white-opacity">
                <Calendar size={14} /> {article.date}
              </span>
              <span className="meta-item text-white-opacity">
                <Clock size={14} /> {article.readingTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <article className="section article-body-section" aria-label="Article content">
        <div className="container article-read-container">
          <div className="article-layout">
            {/* Share / Sidebar */}
            <aside className="article-share-aside" aria-label="Share options">
              <span className="share-aside-title">Share Article</span>
              <div className="share-aside-links">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="share-btn" aria-label="Share on LinkedIn">
                  <Share2 size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </aside>

            {/* Read Core Text */}
            <div className="article-rich-text">
              {/* Dynamic render containing headings, text paragraphs, blockquotes, and lists */}
              <div 
                className="cms-content-wrapper"
                dangerouslySetInnerHTML={{ __html: article.content }} 
              />
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles Footer Bar */}
      {relatedArticles.length > 0 && (
        <section className="section related-section" style={{ borderTop: "1px solid var(--color-border)", backgroundColor: "var(--color-bg)" }} aria-labelledby="related-heading">
          <div className="container">
            <h2 id="related-heading" className="related-section-title">Related Insights</h2>
            <div className="grid-2" style={{ marginTop: "2rem" }}>
              {relatedArticles.map((art) => (
                <div key={art.slug} className="card related-card">
                  <span className="article-category-tag" style={{ marginBottom: "0.5rem" }}>{art.category}</span>
                  <h3 style={{ fontSize: "1.2rem", color: "var(--color-navy)", marginBottom: "0.75rem" }}>
                    <Link href={`/insights/${art.slug}`}>{art.title}</Link>
                  </h3>
                  <p style={{ fontSize: "0.9375rem", marginBottom: "1.5rem" }}>{art.excerpt}</p>
                  <Link href={`/insights/${art.slug}`} className="text-link">
                    Read Article <ArrowRight size={12} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
