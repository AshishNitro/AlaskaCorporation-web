import Image from "next/image";
import Link from "next/link";

const capabilities = [
  { title: "Installation & commissioning", text: "Process equipment, fermentation systems and packaging lines brought into operation." },
  { title: "Operations & maintenance", text: "Mechanical, electrical and instrumentation support across plant operations." },
  { title: "Controls & automation", text: "PLC and SCADA upgrades, with automation for existing tanks and systems." },
  { title: "Parts & plant supplies", text: "Mechanical spares, electrical components and water-treatment chemicals." },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-image" aria-hidden="true" />
        <div className="container hero-content">
          <p className="eyebrow">Brewery · Beverage · Distillery</p>
          <h1>Industrial work,<br /><span>done end to end.</span></h1>
          <p className="hero-lead">Installation, maintenance, automation and plant supplies for production facilities that need to keep moving.</p>
          <div className="button-row">
            <Link className="button button-accent" href="/services/">Explore services</Link>
            <Link className="button button-outline" href="/contact/">Start an enquiry</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>One plant. Many moving parts.</h2>
            <p>Alaska Corporation supports the equipment, utilities and systems behind brewery, beverage and distillery operations.</p>
          </div>
          <div className="capability-grid">
            {capabilities.map((item) => (
              <article className="capability" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="feature-split">
        <div className="feature-media">
          <Image src="/images/process-pump.jpg" alt="Illustrative stainless steel process piping and pump in a production plant" width={1400} height={1050} sizes="(max-width: 800px) 100vw, 50vw" />
        </div>
        <div className="feature-content">
          <div className="feature-inner">
            <h2>From the brewhouse to the utility room.</h2>
            <p>Our scope spans process and packaging equipment, electrical and instrumentation systems, and the utilities that support daily production.</p>
            <div className="feature-list">
              <span>Process & fermentation</span>
              <span>Packaging & filling</span>
              <span>Utilities & controls</span>
            </div>
            <Link className="text-link" href="/services/">See the full service scope <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="section sector-section">
        <div className="container sector-layout">
          <div>
            <h2>Built around production.</h2>
            <p>Practical support for plant teams, from commissioning new equipment to maintaining existing lines and sourcing critical parts.</p>
            <Link className="text-link" href="/products/">Explore products & supplies <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="sector-list" aria-label="Industries served">
            <div><span>01</span><strong>Breweries</strong></div>
            <div><span>02</span><strong>Beverage plants</strong></div>
            <div><span>03</span><strong>Distilleries</strong></div>
          </div>
        </div>
      </section>

      <section className="section contact-band">
        <div className="container contact-band-inner">
          <div>
            <h2>Tell us what your plant needs.</h2>
            <p>Share your equipment, maintenance or supply requirement with our Gwalior team.</p>
          </div>
          <Link className="button button-accent" href="/contact/">Contact Alaska Corporation</Link>
        </div>
      </section>
    </main>
  );
}
