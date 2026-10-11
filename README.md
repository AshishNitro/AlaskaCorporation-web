# Alaska Corporation website

A static five-page company website for Alaska Corporation, built with Next.js 16.4. Pages cover the company overview, industrial services, products and supplies, company information, and contact details. The content is based on the supplied company profile.

## Run locally

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Build for static hosting

```bash
pnpm build
```

The generated site is in `out/`. Upload that directory to a static host. Configure the host to serve directory index files such as `/services/index.html`.

## Search indexing

The production URL is set in `app/site-config.ts`. The static build exports `/sitemap.xml` with all five public pages and `/robots.txt` with a sitemap reference. Each page also has a canonical URL.

After `https://alaskacorporations.in` serves the site, check that both files are publicly reachable and submit `https://alaskacorporations.in/sitemap.xml` in Google Search Console. If the domain changes, update `app/site-config.ts` and rebuild.

## Content and assets

- Page content lives in `app/`.
- Shared layout and navigation live in `app/layout.tsx`.
- Shared styling lives in `app/globals.css`.
- Illustrative site photography lives in `public/images/`.

The phone and email links use the details in the company profile. There is no contact form or server-side data collection. The custom domain can be connected when hosting is chosen.
