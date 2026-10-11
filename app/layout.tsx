import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Alaska Corporation | Industrial Plant Services",
    template: "%s | Alaska Corporation",
  },
  description: "Installation, commissioning, maintenance, automation and plant supplies for breweries, beverage and distillery facilities. Based in Gwalior, India.",
};

const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/" },
  { label: "Products", href: "/products/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <Link className="brand" href="/" aria-label="Alaska Corporation home">
              <span className="brand-mark" aria-hidden="true">A</span>
              <span className="brand-name">ALASKA<small>CORPORATION</small></span>
            </Link>
            <nav className="desktop-nav" aria-label="Main navigation">
              {navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
            </nav>
            <a className="header-phone" href="tel:+919993280097">+91 99932 80097</a>
            <details className="mobile-menu">
              <summary>Menu <span aria-hidden="true">+</span></summary>
              <nav aria-label="Mobile navigation">
                {navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
                <a href="tel:+919993280097">Call +91 99932 80097</a>
              </nav>
            </details>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="container footer-grid">
            <div>
              <Link className="brand" href="/" aria-label="Alaska Corporation home">
                <span className="brand-mark" aria-hidden="true">A</span>
                <span className="brand-name">ALASKA<small>CORPORATION</small></span>
              </Link>
              <p>Engineering support for the working plant.</p>
            </div>
            <div>
              <h2>Explore</h2>
              <nav aria-label="Footer navigation">
                {navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
              </nav>
            </div>
            <div>
              <h2>Get in touch</h2>
              <address>C-861, Anand Nagar, Bahodapur<br />Gwalior, Madhya Pradesh 474012, India</address>
              <a href="tel:+919993280097">+91 99932 80097</a>
              <a href="mailto:vivek_rajauria@yahoo.co.in">vivek_rajauria@yahoo.co.in</a>
            </div>
          </div>
          <div className="container footer-bottom">
            <span>© Alaska Corporation</span>
            <span>Registration No. 23BGFPR6020R1Z1</span>
            <span>Site photography is illustrative.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
