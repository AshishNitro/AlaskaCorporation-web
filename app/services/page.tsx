import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: "Installation, commissioning, operations, maintenance, utilities, automation and fabrication for brewery, beverage and distillery plants.",
};

const services = [
  {
    number: "01",
    title: "Installation & commissioning",
    summary: "Bringing process, fermentation and packaging systems into operation.",
    items: [
      "Mash filters, malt and rice hammer mills, mashers and whirlpools",
      "Uni-tanks, yeast propagators and fermentation lines",
      "Steam accumulators, centrifuges and candle filters",
      "Can, RGB and PET filling lines",
    ],
  },
  {
    number: "02",
    title: "Operations & maintenance",
    summary: "Technical support across electrical, mechanical and instrumentation systems.",
    items: [
      "Process and packaging line operation",
      "LT and HT equipment, transformers and power plants",
      "Hydraulic and pneumatic systems",
      "Mechanical and instrumentation maintenance",
    ],
  },
  {
    number: "03",
    title: "Plant utilities",
    summary: "Keeping the supporting infrastructure of a production facility running.",
    items: [
      "Boilers and turbines",
      "Ammonia refrigeration and compressors",
      "CO₂ plants and air compressors",
      "Water and effluent treatment plants",
    ],
  },
  {
    number: "04",
    title: "Automation & fabrication",
    summary: "Updating existing controls and supplying fabricated plant equipment.",
    items: [
      "PLC and SCADA upgrades",
      "Automation of existing uni-tanks and bright beer tanks",
      "Mechanical, electrical and instrumentation fabrication",
      "Equipment supply for breweries, beverage and distillery plants",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero page-hero-grid">
        <div className="container page-hero-grid-inner">
          <div className="page-hero-copy">
            <p className="eyebrow">Our services</p>
            <h1>Plant services, from start-up to upkeep.</h1>
            <p>Hands-on support for the equipment and systems behind production, packaging and utilities.</p>
            <Link className="button button-accent" href="/contact/">Discuss a requirement</Link>
          </div>
          <div className="page-hero-photo">
            <Image src="/images/automation.jpg" alt="Illustrative engineer inspecting an industrial control panel" width={1400} height={1050} sizes="(max-width: 800px) 100vw, 50vw" priority />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Across the production floor.</h2>
            <p>Our company profile covers installation, ongoing operation, technical maintenance and plant upgrades.</p>
          </div>
          <div className="service-stack">
            {services.map((service) => (
              <article className="service-row" key={service.number}>
                <div className="service-row-title">
                  <span className="service-number">{service.number}</span>
                  <h3>{service.title}</h3>
                </div>
                <div>
                  <p>{service.summary}</p>
                  <ul className="detail-grid">
                    {service.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-band">
        <div className="container contact-band-inner">
          <div><h2>Have a project in mind?</h2><p>Tell us about your plant, equipment and scope of work.</p></div>
          <Link className="button button-accent" href="/contact/">Contact our team</Link>
        </div>
      </section>
    </main>
  );
}
