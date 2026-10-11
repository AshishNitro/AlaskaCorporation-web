import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products & Supplies",
  description: "Mechanical spare parts, electrical and instrumentation components, and water-treatment chemicals for industrial plants.",
};

export default function ProductsPage() {
  return (
    <main>
      <section className="page-hero page-hero-grid">
        <div className="container page-hero-grid-inner">
          <div className="page-hero-copy">
            <p className="eyebrow">Products & supplies</p>
            <h1>The parts behind reliable production.</h1>
            <p>Mechanical spares, electrical components and treatment chemicals for process plants and utilities.</p>
            <Link className="button button-accent" href="/contact/">Enquire about supply</Link>
          </div>
          <div className="page-hero-photo">
            <Image src="/images/process-pump.jpg" alt="Illustrative pump and stainless steel process piping" width={1400} height={1050} sizes="(max-width: 800px) 100vw, 50vw" priority />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container product-layout">
          <div className="product-number">01 / Mechanical</div>
          <div className="product-content">
            <h2>Mechanical spare parts</h2>
            <p>Pumps, mechanical seals, valves, unions and gaskets for plant maintenance and replacement needs.</p>
            <div className="product-spec">
              <h3>Manufacturers named in the company profile</h3>
              <p>Microfinish, Alfa Laval, Grundfos, IDMC, Fristam, Kirloskar, Lubi, Ebara and Lowara.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-subtle">
        <div className="container product-layout">
          <div className="product-number">02 / Electrical</div>
          <div className="product-content">
            <h2>Electrical & instrumentation</h2>
            <p>Components for controls, operation and maintenance across plant systems.</p>
            <div className="product-tags" aria-label="Electrical and instrumentation products">
              <span>Switches</span><span>Relays</span><span>Starters</span><span>Sensors</span><span>PLCs</span><span>HMIs</span><span>Drives</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container product-layout">
          <div className="product-number">03 / Treatment</div>
          <div className="product-content">
            <h2>Water-treatment chemicals</h2>
            <p>Chembond make chemicals for RO systems, boilers, cooling towers and effluent treatment plants, as listed in the company profile.</p>
            <Link className="text-link" href="/contact/">Ask about your application <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
      <section className="section contact-band">
        <div className="container contact-band-inner">
          <div><h2>Need a specific part?</h2><p>Send the equipment make, model and required quantity so we can discuss your enquiry.</p></div>
          <Link className="button button-accent" href="/contact/">Send an enquiry</Link>
        </div>
      </section>
    </main>
  );
}
