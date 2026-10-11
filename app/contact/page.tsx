import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Alaska Corporation in Gwalior for brewery, beverage and distillery plant services, equipment and supplies.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero contact-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Let’s talk about your plant.</h1>
          <p>Tell us what you need installed, maintained, upgraded or supplied. We’ll take the conversation from there.</p>
        </div>
      </section>
      <section className="section">
        <div className="container contact-grid">
          <div className="contact-primary">
            <h2>Reach us directly.</h2>
            <p>For an enquiry, include your plant location, equipment details and the scope of work where possible.</p>
            <a className="contact-method" href="tel:+919993280097"><span>Phone</span><strong>+91 99932 80097</strong></a>
            <a className="contact-method" href="mailto:vivek_rajauria@yahoo.co.in?subject=Plant%20service%20enquiry"><span>Email</span><strong>vivek_rajauria@yahoo.co.in</strong></a>
          </div>
          <aside className="contact-aside">
            <h2>Office</h2>
            <address>C-861, Anand Nagar<br />Bahodapur, Gwalior<br />Madhya Pradesh 474012<br />India</address>
            <div className="contact-aside-rule" />
            <h2>Company information</h2>
            <p>Registration No.<br /><strong>23BGFPR6020R1Z1</strong></p>
          </aside>
        </div>
      </section>
    </main>
  );
}
