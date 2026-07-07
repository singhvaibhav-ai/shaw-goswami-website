"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { solutions } from "../data/solutions";
import { industries } from "../data/industries";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
    setIndustriesDropdownOpen(false);
  }, [pathname]);

  return (
    <>
      <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
        <div className="header-container">
          {/* Logo */}
          <Link href="/" className="logo-link" aria-label="Shaw & Goswami Consulting Home">
            <div className="logo-icon">
              <span>SG</span>
            </div>
            <div className="logo-text">
              <span className="logo-title">Shaw & Goswami</span>
              <span className="logo-subtitle">CONSULTING</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              <li>
                <Link href="/" className={`nav-link ${pathname === "/" ? "active" : ""}`}>
                  Home
                </Link>
              </li>

              {/* Solutions Dropdown */}
              <li 
                className="dropdown-item"
                onMouseEnter={() => setSolutionsDropdownOpen(true)}
                onMouseLeave={() => setSolutionsDropdownOpen(false)}
              >
                <button 
                  className={`nav-link dropdown-toggle ${pathname.startsWith("/solutions") ? "active" : ""}`}
                  aria-expanded={solutionsDropdownOpen}
                  aria-haspopup="true"
                >
                  Solutions <ChevronDown size={14} />
                </button>
                <ul className={`dropdown-menu ${solutionsDropdownOpen ? "show" : ""}`}>
                  {solutions.map((item) => (
                    <li key={item.slug}>
                      <Link href={`/solutions/${item.slug}`} className="dropdown-link">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                  <li className="dropdown-divider-li">
                    <Link href="/solutions" className="dropdown-link view-all-link">
                      View All Solutions <ArrowRight size={14} />
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Industries Dropdown */}
              <li 
                className="dropdown-item"
                onMouseEnter={() => setIndustriesDropdownOpen(true)}
                onMouseLeave={() => setIndustriesDropdownOpen(false)}
              >
                <button 
                  className={`nav-link dropdown-toggle ${pathname.startsWith("/industries") ? "active" : ""}`}
                  aria-expanded={industriesDropdownOpen}
                  aria-haspopup="true"
                >
                  Industries <ChevronDown size={14} />
                </button>
                <ul className={`dropdown-menu ${industriesDropdownOpen ? "show" : ""}`}>
                  {industries.map((item) => (
                    <li key={item.slug}>
                      <Link href={`/industries/${item.slug}`} className="dropdown-link">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                  <li className="dropdown-divider-li">
                    <Link href="/industries" className="dropdown-link view-all-link">
                      View All Industries <ArrowRight size={14} />
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link href="/case-studies" className={`nav-link ${pathname.startsWith("/case-studies") ? "active" : ""}`}>
                  Case Studies
                </Link>
              </li>

              <li>
                <Link href="/insights" className={`nav-link ${pathname.startsWith("/insights") ? "active" : ""}`}>
                  Insights
                </Link>
              </li>

              <li>
                <Link href="/about" className={`nav-link ${pathname === "/about" ? "active" : ""}`}>
                  About
                </Link>
              </li>

              <li>
                <Link href="/contact" className={`nav-link ${pathname === "/contact" ? "active" : ""}`}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="header-cta-wrapper">
            <Link href="/contact" className="btn btn-primary header-cta">
              Book a Strategy Consultation
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? "open" : ""}`} aria-hidden={!mobileMenuOpen}>
        <div className="mobile-nav-container">
          <nav className="mobile-nav-menu" aria-label="Mobile Navigation">
            <ul>
              <li>
                <Link href="/" className="mobile-nav-link">Home</Link>
              </li>
              <li>
                <div className="mobile-submenu-header">Solutions</div>
                <ul className="mobile-submenu-list">
                  <li>
                    <Link href="/solutions" className="mobile-submenu-link bold">
                      All Solutions
                    </Link>
                  </li>
                  {solutions.map((item) => (
                    <li key={item.slug}>
                      <Link href={`/solutions/${item.slug}`} className="mobile-submenu-link">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <div className="mobile-submenu-header">Industries</div>
                <ul className="mobile-submenu-list">
                  <li>
                    <Link href="/industries" className="mobile-submenu-link bold">
                      All Industries
                    </Link>
                  </li>
                  {industries.map((item) => (
                    <li key={item.slug}>
                      <Link href={`/industries/${item.slug}`} className="mobile-submenu-link">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <Link href="/case-studies" className="mobile-nav-link">Case Studies</Link>
              </li>
              <li>
                <Link href="/insights" className="mobile-nav-link">Insights</Link>
              </li>
              <li>
                <Link href="/about" className="mobile-nav-link">About</Link>
              </li>
              <li>
                <Link href="/contact" className="mobile-nav-link">Contact Us</Link>
              </li>
              <li style={{ marginTop: "2rem" }}>
                <Link href="/contact" className="btn btn-primary" style={{ width: "100%" }}>
                  Book a Consultation
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

    </>
  );
}
