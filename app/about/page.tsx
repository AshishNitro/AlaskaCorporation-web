import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Alaska Corporation, a Gwalior-based provider of industrial plant services and supplies for breweries, beverage and distillery facilities.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero about-hero">
        <div className="container">
          <p className="eyebrow">About Alaska Corporation</p>
          <h1>Practical support for complex plants.</h1>
          <p>Based in Gwalior, Madhya Pradesh, Alaska Corporation works across installation, operations, maintenance, fabrication and plant supply.</p>
        </div>
      </section>

      <section className="feature-split about-feature">
        <div className="feature-media">
          <Image src="/images/automation.jpg" alt="Illustrative control system inside a beverage production plant" width={1400} height={1050} sizes="(max-width: 800px) 100vw, 50vw" />
        </div>
        <div className="feature-content">
          <div className="feature-inner">
            <h2>Focused on the whole operation.</h2>
            <p>The company profile brings together process equipment, packaging lines, electrical and instrumentation work, utility systems and spare-part supply.</p>
            <p>That breadth helps plant teams discuss connected needs in one place, from commissioning to day-to-day upkeep.</p>
            <Link className="text-link" href="/services/">Explore our services <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-details">
          <div><h2>Company details</h2><p>Information provided in Alaska Corporation’s company profile.</p></div>
          <dl>
            <div><dt>Location</dt><dd>Gwalior, Madhya Pradesh, India</dd></div>
            <div><dt>Industry focus</dt><dd>Breweries, beverage plants and distilleries</dd></div>
            <div><dt>Client listed in profile</dt><dd>Bapuna Breweries Pvt. Ltd., Gwalior</dd></div>
            <div><dt>Registration number</dt><dd>23BGFPR6020R1Z1</dd></div>
          </dl>
        </div>
      </section>

      <section className="section contact-band">
        <div className="container contact-band-inner">
          <div><h2>Work with Alaska Corporation.</h2><p>Reach out with a service or supply requirement for your facility.</p></div>
          <Link className="button button-accent" href="/contact/">Get in touch</Link>
        </div>
      </section>
    </main>
  );
}
