# Scent Bazaar Full SEO Audit - 2026-05-07

Audit target: https://scentbazaar.co/  
Audit date: 2026-05-07  
Business type detected: Local/B2B fragrance supplier, wholesale perfume oil supplier, showroom and export business in Deira, Dubai.

## Executive Summary

SEO health score after local fixes: 91/100

The site is in strong technical shape. The apex homepage returns 200, www redirects cleanly to the apex, robots.txt is live, both sitemap files are declared, security headers are present, 404 handling now returns a true 404, all XML sitemap URLs are reachable, schema JSON-LD parsed successfully across audited sitemap pages, and image alt coverage is clean on the crawled pages.

The main code-fixable issues found in the audit have been corrected locally: the blog sitemap URL now matches the trailing-slash canonical, two long meta descriptions were shortened, and `llms.txt` was refreshed to today's verification date.

Core Web Vitals could not be measured through PageSpeed Insights because the API returned a quota error. Performance scoring is therefore based on observable implementation risks only.

## Top Findings

1. Fixed locally: Blog sitemap URL redirected before final 200.
   Evidence: `sitemap.xml` now lists `https://scentbazaar.co/blog/top-perfume-oil-suppliers-dubai/`, matching the page canonical and live direct-200 URL.

2. Fixed locally: Some meta descriptions were longer than the ideal SERP display range.
   Evidence: `contact` is now 136 characters and the blog guide is now 141 characters.

3. Medium: Performance remains dependent on third-party scripts and widgets.
   Evidence: Google Tag Manager and ReputationHub review widgets are present on key pages. They are useful, but they are likely the largest runtime risk because first-party image files are now mostly WebP and moderate in size.

4. Fixed locally: `llms.txt` had an older verification date.
   Evidence: `llms.txt` now says `Last verified: 2026-05-07`.

## Technical SEO

Status: Strong

- `https://scentbazaar.co/` returns HTTP 200.
- `https://www.scentbazaar.co/` returns 301 and resolves to the apex 200.
- Nonexistent URL check returned HTTP 404 with `Cache-Control: no-store`.
- Live security headers include HSTS, CSP, Referrer-Policy, Permissions-Policy, X-Content-Type-Options, X-Frame-Options, and X-XSS-Protection.
- `robots.txt` allows Googlebot, Bingbot, GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Amazonbot, and general crawlers.
- `Google-Extended`, `Bytespider`, and `CCBot` are intentionally disallowed.

## Crawl And Indexation

Status: Strong

`sitemap.xml` includes 22 URLs. All checked sitemap URLs resolved to live 200 pages after redirects. The blog URL has been corrected locally to use the trailing-slash canonical.

Deployment note: publish the updated `sitemap.xml` so live sitemap output matches the local fix.

## On-Page SEO

Status: Strong

- Every sitemap URL checked has one H1.
- Every checked page has a title tag.
- Every checked page has a meta description.
- Every checked page has a canonical tag.
- All crawled image tags had alt text.

Previously long meta descriptions were shortened locally:

- `https://scentbazaar.co/contact` - now 136 characters.
- `https://scentbazaar.co/blog/top-perfume-oil-suppliers-dubai/` - now 141 characters.

These are not index blockers, but they should be tightened if snippet control is important.

## Content Quality

Status: Strong

The site has useful commercial intent separation across supplier, wholesale, service, store, and blog-guide pages. The blog guide is a meaningful long-form citation asset rather than a thin redirect page. The local business facts are repeated in crawlable form through HTML and `llms.txt`, including address, phone, hours, review count, catalog depth, export coverage, founder name, and compliance support.

Content risk: several service pages share a similar structural pattern. That is acceptable for this static service-page set, but future additions should avoid duplicating the same body layout and wording too closely.

## Schema And Structured Data

Status: Strong

All detected JSON-LD blocks across sitemap pages parsed without JSON syntax errors in this audit. The site uses organization/local business, product/service, breadcrumb, article, FAQ-style, and review aggregate signals across relevant pages.

Recommendation: after any future page edits, keep validating JSON-LD with a parser because this repo previously had real trailing-comma schema errors.

## Sitemap And Image Sitemap

Status: Mostly strong

- `robots.txt` declares both `sitemap.xml` and `sitemap-images.xml`.
- `sitemap-images.xml` is accessible and includes image titles/captions.
- No missing local image references were detected in the checked HTML files.

Cleanup item completed locally: the blog URL trailing slash is aligned in `sitemap.xml`.

## AI Search Readiness

Status: Strong

`llms.txt` is live and provides a compact, citation-friendly profile of the business: what it sells, why it matters, key facts, contact details, showroom location, credentials, and key pages. AI crawler access is intentionally allowed for major AI retrieval bots including GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, and Amazonbot.

Completed locally: `llms.txt` now uses `Last verified: 2026-05-07`.

## Local SEO

Status: Strong

The site consistently exposes NAP information:

- Business: Scent Bazaar
- Address: Souq Naif, Shop 47, Deira, Dubai, UAE
- Phone/WhatsApp: +971 54 772 7106
- Hours: Saturday-Thursday 8:30 AM-12:00 AM; Friday 8:30 AM-12:00 PM and 2:00 PM-12:00 AM
- Rating signal: 4.9/5 with 162 Google reviews

No live GBP API data was available in this run, so maps ranking and listing-sync checks were not measured.

## Performance

Status: Good, not fully measured

PageSpeed Insights returned a 429 quota error, so Lighthouse and CrUX numbers were not available from that source. Observable performance risks:

- Third-party scripts: Google Tag Manager and ReputationHub.
- Largest local WebP assets are roughly 300-407 KB each, which is acceptable but still worth watching on mobile.
- The live response uses `Cache-Control: public, max-age=0, must-revalidate`, so CDN/browser caching strategy may be conservative for static HTML.

## Priority Action Plan

High:

- Completed locally: fixed the blog URL in `sitemap.xml` to include the trailing slash.

Medium:

- Completed locally: shortened the `contact` and blog guide meta descriptions to reduce snippet truncation.
- Re-run PageSpeed/Lighthouse with quota or a local Lighthouse setup to get actual LCP, CLS, INP/TBT, image, and script findings.

Low:

- Completed locally: refreshed `llms.txt` verification date after confirming the business facts still match current site surfaces.
- Continue monitoring third-party review widget impact on key conversion pages.

## Tool Limitations

- PageSpeed Insights API returned a quota error, so no current PSI/Lighthouse/CrUX scores were captured.
- No Google Search Console, GA4, DataForSEO, Moz, or GBP credentials were used in this run.
- The audit combined live HTTP checks with static-file inspection from the local repo.
