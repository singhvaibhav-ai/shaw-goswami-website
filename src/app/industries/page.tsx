import React from "react";
import Link from "next/link";
import { 
  Activity, 
  ShoppingBag, 
  Cpu, 
  DollarSign, 
  Truck, 
  Zap, 
  Globe, 
  Briefcase,
  ArrowRight
} from "lucide-react";
import { getIndustries } from "../../lib/cms";

export default async function IndustriesIndex() {
  const allIndustries = await getIndustries();

  const iconMap: { [key: string]: React.ComponentType<any> } = {
    Activity,
    ShoppingBag,
    Cpu,
    DollarSign,
    Truck,
    Zap,
    Globe,
    Briefcase
  };

  return (
    <>
      {/* Subpage Header */}
      <section className="industries-header-section" aria-labelledby="page-title">
        <div className="container">
          <div className="subpage-header-content">
            <span className="section-tagline">Sectors We Transform</span>
            <h1 id="page-title" className="subpage-title">Industry Expertise</h1>
            <p className="subpage-lead">
              We translate cutting-edge AI technologies into core operational value across regulatory, mechanical, and transactional sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Grid of Industries */}
      <section className="section" style={{ backgroundColor: "#FFFFFF" }} aria-label="Target sectors listing">
        <div className="container">
          <div className="grid-2">
            {allIndustries.map((ind) => {
              const IndIcon = iconMap[ind.iconName] || Globe;
              return (
                <article key={ind.slug} className="card industry-index-card">
                  <div className="industry-index-flex">
                    <div className="industry-index-icon-box">
                      <IndIcon size={24} />
                    </div>
                    <div className="industry-index-content">
                      <h2 className="industry-index-title">
                        <Link href={`/industries/${ind.slug}`}>{ind.title}</Link>
                      </h2>
                      <p className="industry-index-desc">{ind.summary}</p>
                      <Link href={`/industries/${ind.slug}`} className="text-link">
                        Explore Sector Practice &rarr;
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom Consultation CTA */}
      <section className="industries-cta-bar" aria-labelledby="cta-heading">
        <div className="container industries-cta-container">
          <h2 id="cta-heading" className="industries-cta-heading">Let's audit your industry metrics</h2>
          <p className="industries-cta-sub">
            Our specialized consulting partners understand the unique compliance standards and software constraints of your sector.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Schedule an Industry Strategy Call
          </Link>
        </div>
      </section>
    </>
  );
}
