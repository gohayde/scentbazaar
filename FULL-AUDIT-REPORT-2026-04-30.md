# Full SEO Audit Report - scentbazaar.co

**Audit date:** 2026-04-30  
**URL audited:** https://scentbazaar.co/  
**Business type:** Dubai fragrance ingredient supplier, local showroom + B2B export  
**Pages checked:** 20 sitemap URLs  
**Overall SEO health score:** 78 / 100

## Executive Summary

Scent Bazaar is in a strong position for a static local/B2B site: the homepage is crawlable, the sitemap is live, robots.txt allows major AI crawlers, llms.txt exists, content depth is high, local NAP data is visible, and product/service pages are mostly covered by clean canonicals and page-specific metadata.

The highest-risk items are not broad content gaps. They are concrete technical consistency issues:

1. `https://www.scentbazaar.co/` fails TLS certificate validation instead of redirecting cleanly.
2. Blog buyer-guide JSON-LD is invalid because the BreadcrumbList object is missing a comma.
3. The sitemap lists `/blog/top-perfume-oil-suppliers-dubai`, which 301 redirects to the trailing-slash URL.
4. Friday hours conflict between homepage/contact/store copy and `llms.txt`.
5. Large PNG assets and Google Fonts `@import` create avoidable LCP weight.

## Scorecard

| Category | Weight | Score | Notes |
|---|---:|---:|---|
| Technical SEO | 22% | 76 | Main host works, but HTTPS `www` certificate fails and the blog sitemap URL redirects. |
| Content Quality | 23% | 86 | Strong topical coverage, FAQs, local context, founder/expertise signals. |
| On-Page SEO | 20% | 82 | Titles, H1s, canonicals, and descriptions are mostly healthy. |
| Schema / Structured Data | 10% | 68 | Most JSON-LD parses, but the blog article graph has a live syntax error. |
| Performance / CWV | 10% | 66 | Static HTML is fast, but large hero/service images and font loading hold it back. |
| AI Search Readiness | 10% | 84 | AI bots allowed, llms.txt present, FAQ-rich pages; hours inconsistency hurts trust. |
| Images | 5% | 74 | Alt text is present, but several local images are multi-MB PNGs. |

## Critical Findings

### C1. HTTPS `www` Host Has Certificate Mismatch

`https://www.scentbazaar.co/` fails certificate validation with `SEC_E_WRONG_PRINCIPAL`. `http://www.scentbazaar.co/` redirects to the apex domain, but the HTTPS `www` version does not complete a safe redirect.

**Impact:** Users and crawlers using the common `www` HTTPS variant see a browser security error. This is the most serious technical issue found.

**Fix:** Add proper `www` support at the DNS/CDN layer, or configure the host so `https://www.scentbazaar.co/` presents a valid certificate and 301 redirects to `https://scentbazaar.co/`.

### C2. Blog Article JSON-LD Is Invalid

The JSON-LD block in `blog/top-perfume-oil-suppliers-dubai/index.html` fails parsing. In the BreadcrumbList item, `"name": "Top Perfume Oil Suppliers Dubai"` is missing a comma before `"item"`.

**Impact:** Google will ignore that JSON-LD block, including Article, Organization, Person, BreadcrumbList, and WebPage entities in that graph.

**Fix:** Add the missing comma and revalidate with Google's Rich Results Test or Schema.org validator.

### C3. Sitemap Uses Redirecting Blog URL

`https://scentbazaar.co/blog/top-perfume-oil-suppliers-dubai` returns a 301 to `https://scentbazaar.co/blog/top-perfume-oil-suppliers-dubai/`.

**Impact:** Not fatal, but sitemaps should list final canonical URLs to reduce crawl waste and avoid mixed canonical signals.

**Fix:** Update `sitemap.xml` and the blog canonical to use the same final URL form.

### C4. Business Hours Conflict

Homepage and contact/store content show Friday as `8:30am-12pm, 2pm-12am`. `llms.txt` says Friday `1:30 PM-12:00 AM`. This is a local SEO trust issue.

**Impact:** Search engines, AI answers, and customers may quote different hours.

**Fix:** Choose the correct Friday hours and update all surfaces together: visible footer/store copy, FAQ answers, LocalBusiness openingHoursSpecification, contact page, store page, and `llms.txt`.

## Technical SEO

What is working:

- Apex HTTPS homepage returns `200 OK`.
- `robots.txt` allows all crawlers and explicitly allows GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, and Amazonbot.
- `robots.txt` declares both `sitemap.xml` and `sitemap-images.xml`.
- All 20 sitemap URLs responded.
- Main page response is served by GitHub Pages/Fastly with HSTS.
- Clean keyword-focused URLs and self-referencing canonicals are present.

Issues:

- HTTPS `www` certificate mismatch.
- Blog sitemap URL redirects.
- Security headers are light: HSTS exists, but no response-level CSP, X-Frame-Options, Referrer-Policy, or X-Content-Type-Options were confirmed from the header check.
- Existing `_headers` file will not be honored by GitHub Pages, so those headers need Cloudflare, Netlify, or another CDN layer if required.

## Content And On-Page SEO

What is working:

- Homepage communicates supplier category, Deira location, export reach, MOQ, reviews, founder expertise, and service breadth above and within the main content.
- Product/service pages have focused title tags, one H1, canonical URLs, and mostly 150-160 character meta descriptions.
- FAQ sections are substantial and useful for buyer-intent queries.
- Local trust signals are visible: address, phone, reviews, showroom, Souq Naif/Deira context.

Issues:

- `About` and `private-label` descriptions are good in actual markup, but apostrophes inside content can confuse brittle parsers; keep future audit tooling parser-based rather than regex-only.
- Review copy mixes exact `162` and rounded `100+`; that is acceptable for marketing copy, but schema/reference surfaces should keep the exact count.
- The homepage H1 is brand-led rather than exact-keyword-led. This is not a blocker, but a small opportunity if rankings stall.

## Schema And Structured Data

What is working:

- Homepage JSON-LD parses successfully.
- Store/Organization/Person/FAQ/WebPage-style signals are present across the site.
- Review count and local business details are represented in schema on key pages.

Issues:

- Blog Article graph is invalid due to the missing comma.
- Product pages still have an opportunity for `Product` and `Offer` schema where pricing/availability can be represented safely.
- Avoid adding unsupported SearchAction schema unless the site actually has search.

## Performance And Images

What is working:

- Static pages respond quickly from GitHub/Fastly.
- Below-fold images use dimensions and alt text is present in local HTML.
- Homepage preloads the hero image and uses `fetchpriority="high"` on the hero.

Issues:

- Several local images are very large PNGs: `scent-library.png` 3.9 MB, `hero-bg.png` 3.9 MB, `service-bulk.png` 3.65 MB, `service-private-label.png` 3.34 MB, `service-custom.png` 3.29 MB.
- `fonts.css` imports Google Fonts via `@import`, including a legacy Outfit import. This adds extra request chaining.
- The review widget loads third-party JS/iframe on the homepage. It should be lazy or facade-loaded if it appears below the fold.

## AI Search Readiness

What is working:

- `llms.txt` is live and well-structured.
- AI crawler allow rules are present in robots.txt.
- Content has citable facts: 2,000+ oils, 100ml MOQ, 50+ countries, 3-11 week private-label timeline, MSDS/COA/DG documentation.
- Founder expertise is visible and useful for entity trust.

Issues:

- `llms.txt` Friday hours conflict with visible website hours.
- The blog structured data error reduces AI and rich-result eligibility for the buyer guide.
- Add per-page links and the RSL 1.0 license note to `llms.txt` only if that remains the intended license policy.

## Local SEO

What is working:

- Address, phone, Google Maps link, Deira/Souq Naif context, and showroom details are visible.
- Dedicated local page exists: `/perfume-store-deira`.
- Review count and rating are prominent.

Issues:

- Friday hours inconsistency should be fixed first.
- HTTPS `www` failure can affect branded navigational trust.
- Add a Google Maps embed on the store page if visual/local engagement is a priority.

## Verification Evidence

- Apex homepage headers: `200 OK`, GitHub/Fastly, HSTS present.
- `robots.txt`: allows all crawlers and declares both sitemaps.
- `sitemap.xml`: 20 URLs listed.
- Sitemap crawl: 19 direct `200`, 1 redirecting blog URL.
- Blog redirected URL final status: `200` at trailing-slash URL.
- `https://www.scentbazaar.co/`: TLS certificate mismatch.
- Local JSON-LD parse: all checked blocks passed except `blog/top-perfume-oil-suppliers-dubai/index.html`.

## Priority Order

1. Fix HTTPS `www` certificate/redirect.
2. Fix blog JSON-LD missing comma.
3. Align sitemap/canonical URL for the blog trailing slash.
4. Reconcile Friday hours everywhere.
5. Convert the largest PNGs to optimized WebP/AVIF and update references.
6. Replace Google Fonts `@import` with preconnect + normal stylesheet links, or self-host the needed font files.
7. Add response-level security headers through the real hosting/CDN layer if the site moves behind Cloudflare or Netlify.

