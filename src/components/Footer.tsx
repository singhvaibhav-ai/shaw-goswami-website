import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { solutions } from "../data/solutions";
import { industries } from "../data/industries";

export default function Footer() {
  return (
    <footer className="footer" aria-label="Main Footer">
      <div className="container footer-grid-container">
        {/* Logo and Tagline Column */}
        <div className="footer-brand-col">
          <Link href="/" className="logo-link footer-logo" aria-label="Shaw & Goswami Consulting Home">
            <div className="logo-icon footer-logo-icon">
              <span>SG</span>
            </div>
            <div className="logo-text">
              <span className="logo-title footer-logo-title">Shaw & Goswami</span>
              <span className="logo-subtitle footer-logo-subtitle">CONSULTING</span>
            </div>
          </Link>
          <p className="footer-tagline">
            Business consulting and AI solutions that help organizations transform, innovate and grow in the AI era.
          </p>
          <div className="footer-socials" aria-label="Social media channels">
            {/* Custom Inline SVG for LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            {/* Custom Inline SVG for Twitter / X */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            {/* Custom Inline SVG for YouTube */}
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
          </div>
        </div>

        {/* Solutions Column */}
        <div className="footer-col">
          <h3 className="footer-col-title">Solutions</h3>
          <ul className="footer-links">
            {solutions.slice(0, 5).map((sol) => (
              <li key={sol.slug}>
                <Link href={`/solutions/${sol.slug}`}>{sol.title}</Link>
              </li>
            ))}
            {solutions.length > 5 && (
              <li className="footer-more-link-li">
                <Link href="/solutions" className="footer-more-link">
                  View All Solutions &rarr;
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* Industries Column */}
        <div className="footer-col">
          <h3 className="footer-col-title">Industries</h3>
          <ul className="footer-links">
            {industries.slice(0, 5).map((ind) => (
              <li key={ind.slug}>
                <Link href={`/industries/${ind.slug}`}>{ind.title}</Link>
              </li>
            ))}
            {industries.length > 5 && (
              <li className="footer-more-link-li">
                <Link href="/industries" className="footer-more-link">
                  View All Industries &rarr;
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* Company Column */}
        <div className="footer-col">
          <h3 className="footer-col-title">Company</h3>
          <ul className="footer-links">
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/about#approach">Our Approach</Link>
            </li>
            <li>
              <Link href="/insights">Insights</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="footer-col footer-contact-col">
          <h3 className="footer-col-title">Get in Touch</h3>
          <ul className="footer-contact-info">
            <li>
              <a href="mailto:info@shawandgoswami.in" className="contact-link">
                <Mail size={16} />
                <span>info@shawandgoswami.in</span>
              </a>
            </li>
            <li>
              <a href="tel:+919830098059" className="contact-link">
                <Phone size={16} />
                <span>+91 98300 98059</span>
              </a>
            </li>
            <li>
              <div className="contact-address">
                <MapPin size={16} />
                <span>Kolkata, India</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Shaw & Goswami Consulting. All Rights Reserved.
          </p>
          <div className="footer-bottom-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
