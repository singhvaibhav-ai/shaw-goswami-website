import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <>
      <section className="legal-header-section" aria-labelledby="page-title">
        <div className="container">
          <Link href="/" className="back-link">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 id="page-title" className="legal-title">Terms of Use</h1>
          <p className="legal-subtitle">Effective Date: July 7, 2026</p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: "#FFFFFF" }} aria-label="Terms of Use document">
        <div className="container legal-text-container">
          <h2>1. Terms Acceptance</h2>
          <p>
            By accessing or using this website (shawandgoswami.in), you agree to comply with and be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.
          </p>

          <h2>2. Intellectual Property Rights</h2>
          <p>
            The content, design systems, illustrations, icons, code files, and case studies displayed on this website are the proprietary property of Shaw & Goswami Consulting and are protected under international copyright and intellectual property laws.
          </p>

          <h2>3. Service Disclaimer</h2>
          <p>
            The information provided on this website is for general informational and marketing purposes only. While we aim to represent AI solutions accurately, actual project outcomes depend on corporate parameters and software limitations. This website does not constitute formal technical counsel.
          </p>

          <h2>4. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of India. Any legal action arising from your use of this site shall be handled in the courts of Kolkata, India.
          </p>
        </div>
      </section>
    </>
  );
}
