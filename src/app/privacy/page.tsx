import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <>
      <section className="legal-header-section" aria-labelledby="page-title">
        <div className="container">
          <Link href="/" className="back-link">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 id="page-title" className="legal-title">Privacy Policy</h1>
          <p className="legal-subtitle">Effective Date: July 7, 2026</p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: "#FFFFFF" }} aria-label="Privacy Policy document">
        <div className="container legal-text-container">
          <h2>1. Introduction</h2>
          <p>
            Shaw & Goswami Consulting ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy describes how we collect, process, and protect your information when you visit our website (shawandgoswami.in) or submit consultation requests.
          </p>

          <h2>2. Data We Collect</h2>
          <p>
            When you submit a consultation request through our contact form, we collect the personal data you provide, which includes: name, corporate email address, company name, job role, telephone number, and details regarding your operational challenges.
          </p>

          <h2>3. How We Use Your Data</h2>
          <p>
            We process your information to evaluate your AI transformation requirements, coordinate partner schedule calls, and deliver strategic transformation services. We do not sell or distribute your data to third-party marketing companies.
          </p>

          <h2>4. Data Sovereignty and Security</h2>
          <p>
            We enforce strict technical security parameters and administrative controls to protect corporate data from unauthorized extraction. Our client sandboxes are configured to adhere to private vector boundaries.
          </p>

          <h2>5. Contact Us</h2>
          <p>
            For questions regarding this policy or our data safety measures, please contact us at info@shawandgoswami.in.
          </p>
        </div>
      </section>
    </>
  );
}
