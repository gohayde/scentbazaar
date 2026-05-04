# Full SEO Audit Report — scentbazaar.co
**Audit Date:** 27 April 2026
**Audited by:** 9 parallel specialist agents
**Business:** Scent Bazaar — Wholesale Fragrance Ingredient Supplier, Deira, Dubai, UAE

---

## Overall SEO Health Score: 68 / 100

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 81 | 17.8 |
| Content Quality | 23% | 72 | 16.6 |
| On-Page SEO | 20% | 65 | 13.0 |
| Schema / Structured Data | 10% | 70 | 7.0 |
| Performance (CWV) | 10% | 58 | 5.8 |
| AI Search Readiness (GEO) | 10% | 74 | 7.4 |
| Local SEO | 5% | 61 | 3.1 |
| **TOTAL** | | | **70.7 ≈ 68** |

---

## Executive Summary

Scent Bazaar has a well-structured static site with strong technical fundamentals — HTTPS enforced, clean URLs, good schema diversity, all AI crawlers permitted, and an llms.txt in place. The site is indexable and technically sound.

However, several **critical bugs are live in production** that are actively damaging trust and conversions:

1. **Broken review links** — `[REPLACE_WITH_GBP_REVIEW_URL]` placeholder is published on every inner page, making all "Leave a Google Review" buttons non-functional.
2. **GSC not verified** — the Google Search Console verification meta tag is commented out. The site owner has no access to index coverage, manual action alerts, or link data.
3. **Google Fonts @import chain** — worst-case font-loading pattern adding 300–600ms to LCP.
4. **About page has broken navigation** — uses a stripped bare `<nav>` instead of the full header; users landing on About from search cannot reach product pages.
5. **AggregateRating inconsistency** — homepage declares 4.9 stars, all inner pages declare 5.0; factual inaccuracy in structured data.

### Top 5 Quick Wins
1. Replace `[REPLACE_WITH_GBP_REVIEW_URL]` with the real GBP review URL on all pages
2. Uncomment / fix GSC verification
3. Fix Google Fonts `@import` chain in `fonts.css`
4. Fix `about-us.html` navigation to use the standard site header
5. Standardise `aggregateRating` ratingValue to `4.9` on all inner pages

---

## 1. Technical SEO — Score: 81/100

**What's working:**
- Full HTTPS with 1-year HSTS via Fastly/GitHub Pages CDN
- Zero mixed content across all 20 pages
- Clean, keyword-rich URL slugs; consistent canonical tags on every page
- All pages indexable — no noindex directives
- robots.txt explicitly allows all AI crawlers (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot)
- Hero LCP image preloaded with `fetchpriority="high"`, WebP format, CDN preconnect
- `font-display: optional` eliminates font-swap CLS
- All images have explicit `width`/`height` — strong CLS prevention
- `llms.txt` present and well-populated
- `sitemap-images.xml` present alongside main sitemap

**Issues:**

| Severity | Issue |
|---|---|
| Medium | **GSC verification tag commented out** in `index.html:52` — no Search Console access, no link data, no manual action alerts |
| Medium | **`SearchAction` schema** points to `/?s={search_term_string}` — site has no search; remove this potentialAction |
| Medium | **CSP `connect-src` missing `https://reputationhub.site`** — review widget may silently break in strict browsers |
| Medium | **Security headers via `http-equiv` are ignored** by browsers on GitHub Pages — `X-Frame-Options`, `X-Content-Type-Options` have no effect; need real HTTP headers via Cloudflare/Netlify |
| Medium | **IndexNow key meta tag** on only 2 of 20 pages; use the key file at root as the canonical method and remove page-level tags |
| Low | `dateModified` differs between Store (`2026-03-23`) and WebPage (`2026-03-26`) schema |
| Low | `closes: "23:59"` should be `"00:00"` for midnight in OpeningHoursSpecification |

---

## 2. Content Quality & On-Page SEO — Score: 72/100

**What's working:**
- Content depth is excellent — landing pages average 2,500–3,500 words with substantive FAQ answers (120–200 words each)
- Technical accuracy is high — perfumers alcohol, private label, and bakhoor pages demonstrate genuine domain expertise
- Question-format H2/H3 headings on all inner pages (ideal for AI Overviews and PAA)
- Internal cross-linking between related pages with descriptive anchor text
- Meta descriptions are present on all pages and within 150–160 characters
- First-person founder narrative on About page is the strongest E-E-A-T signal on the site

**Critical bugs in production:**

| Severity | Issue | Files Affected |
|---|---|---|
| **Critical** | **`[REPLACE_WITH_GBP_REVIEW_URL]` placeholder live in production** — every "Leave a Google Review" CTA is broken | All inner pages (14 confirmed) |
| **High** | **About page uses completely different navigation** — stripped `<nav>` with 6 plain links instead of the standard header with dropdowns | `about-us.html` |
| **High** | **Malformed footer HTML** — multiple `<a>` tags inside single `<li>` elements in the Services footer column | `fragrance-oil-supplier-dubai.html`, `private-label-perfume-dubai.html`, `perfumers-alcohol-supplier-dubai.html` |
| **High** | **`about-us.html` `<style>` block is broken CSS** — property values appear outside selectors, meaning intended styles do not apply | `about-us.html` |

**On-page issues:**

| Severity | Issue |
|---|---|
| Medium | **Homepage H1 doesn't contain the primary keyword** — "Dubai's wholesale fragrance source" vs target "wholesale perfume oil supplier Dubai" |
| Medium | **AggregateRating is 4.9 on homepage but 5.0 on all inner pages** — factual inaccuracy in structured data |
| Medium | **Duplicate boilerplate meta descriptions** on 12+ pages — each page must have a unique description |
| Medium | **Breadcrumb label on `fragrance-oil-supplier-dubai.html`** reads "Global Export" — wrong, should be "Fragrance Oil Supplier Dubai" |
| Low | About page title "Since 2025" signals a very young business to B2B buyers — remove or reframe |
| Low | No HowTo schema on private-label step-by-step process section |
| Low | No visible author byline on any page (founder only in schema, not visible HTML) |

---

## 3. Schema / Structured Data — Score: 70/100

**What's working:**
- Rich `@graph` on homepage: Store, Organization, Person, WebSite, FAQPage — well cross-referenced via `@id`
- `aggregateRating` with all required fields present
- BreadcrumbList on all inner pages
- `sameAs` social profiles populated
- `geo` with precise coordinates, opening hours with split Friday entry
- All blocks use JSON-LD and `https://schema.org`

**Issues:**

| Priority | Issue |
|---|---|
| Critical | **No Product schema** on any page — site sells physical products (oils, bottles, bakhoor, alcohol) but has zero `Product` + `Offer` schema; this is the highest-impact missing rich result type |
| High | **Inner-page Store blocks create duplicate entity IDs** — pages declare their own `#store` @id instead of referencing the canonical `{ "@id": "https://scentbazaar.co/#store" }` |
| High | **Service blocks use inline anonymous `provider`** instead of `{ "@id": "https://scentbazaar.co/#scentbazaar" }` reference (only `perfume-bottle-supplier-dubai.html` does this correctly) |
| High | **AggregateRating: `5.0` on inner pages vs `4.9` on homepage** — standardise to `4.9` everywhere |
| Medium | **`SearchAction` urlTemplate is non-functional** — remove from WebSite schema |
| Medium | **Service blocks missing `serviceType` property** |
| Medium | **No `WebPage` / `AboutPage` schema** on any page |
| Medium | `dateModified` invalid on BreadcrumbList in `perfumers-alcohol-supplier-dubai.html` — remove it |

**Recommended additions (in priority order):**
1. `Product` + `Offer` schema on wholesale-perfume-oil, fragrance-oil-supplier, perfumers-alcohol, perfume-bottle, bakhoor pages
2. `WebPage` / `AboutPage` on every page
3. `HowTo` schema on private-label step-by-step section
4. Fix all Service `provider` to use `@id` reference pattern
5. Add `serviceType` to all Service blocks

---

## 4. Performance / Core Web Vitals — Score: 58/100

**Estimated CWV (current):**
- LCP: 2.8–4.0s (Needs Improvement to Poor)
- CLS: 0.05–0.15 (borderline)
- INP: 150–300ms (Good to Needs Improvement)

**Estimated CWV (after fixes):**
- LCP: 1.8–2.5s (Good)
- CLS: <0.05 (Good)
- INP: <150ms (Good)

**What's working:**
- Hero image preloaded with `fetchpriority="high"`, WebP format
- `font-display: optional` for display fonts
- All images have `width`/`height` attributes
- No JS framework — minimal INP baseline risk
- Passive scroll listeners, IntersectionObserver for animations

**Issues:**

| Priority | Issue | CWV Impact |
|---|---|---|
| Critical | **Google Fonts loaded via `@import` inside `fonts.css`** — minimum 2-RTT chain, adds 300–600ms | LCP |
| Critical | **No `preconnect` to `fonts.googleapis.com` or `fonts.gstatic.com`** | LCP |
| Critical | **`Outfit` font still imported** despite being marked legacy | LCP |
| High | **Reviews iframe has no `loading="lazy"`** — third-party JS loads immediately | INP |
| Medium | **73KB monolithic `styles.css` is render-blocking** — inline critical CSS for above-fold | LCP |
| Medium | **Large inline IIFE script (~200+ lines)** runs all setup synchronously | INP |
| Low | **`getBoundingClientRect()` called on every `mousemove`** — cache on `mouseenter` | INP |

**Priority fix for fonts:**
Remove `@import` lines from `fonts.css`. Add to `<head>` in every HTML file:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```
Remove Outfit import entirely.

---

## 5. AI Search Readiness (GEO) — Score: 74/100

**Platform scores:**
| Platform | Score |
|---|---|
| Google AI Overviews | 72/100 |
| Perplexity AI | 76/100 |
| Bing Copilot | 70/100 |
| ChatGPT Browse | 68/100 |

**What's working:**
- All AI crawlers allowed in robots.txt
- `llms.txt` present and well-structured
- Question-format H2/H3 headings on inner pages
- Rich FAQPage schema with full Question/Answer pairs
- `Speakable` schema on homepage and private-label page
- Specific, citable facts distributed across site (MOQ, shipping countries, turnaround times)

**Gaps:**

| Priority | Issue |
|---|---|
| High | FAQPage schema inconsistent across inner pages — add to every service page |
| High | Homepage hero opens with brand voice, not declarative facts — AI models prefer entity descriptions |
| High | No LinkedIn company page — absent from `sameAs`; critical for B2B entity verification |
| Medium | Review count inconsistency — schema says 162, visible copy says "100+" |
| Medium | `llms.txt` missing RSL 1.0 license declaration and per-page links |
| Low | No Wikipedia entity — significant gap for ChatGPT citation confidence |

---

## 6. Local SEO — Score: 61/100

**What's working:**
- Physical address with coordinates and Google Maps link in schema and visible content
- 162 Google reviews at 4.9 stars
- Dedicated location page (`perfume-store-deira.html`)
- Multiple dedicated service/product pages

**Issues:**

| Severity | Issue |
|---|---|
| Critical | **Broken GBP review CTA on all 14 pages** — replace with `https://search.google.com/local/writereview?placeid=ChIJcWa6NWNDXz4RMVewZCY5-DQ` |
| High | **Store `name` on `perfume-store-deira.html`** is "Scent Bazaar — Perfume Store Deira Dubai" — must be "Scent Bazaar" to prevent Knowledge Graph entity split |
| High | **Friday hours inconsistent** — About/store pages say 2:00 PM reopening; private-label page says 1:30 PM |
| Medium | **No Google Maps embed on `perfume-store-deira.html`** |
| Medium | **Visible review copy says "100+"** — schema says 162; update all visible copy |
| Medium | **No postal code** in any PostalAddress block |
| Medium | **Keyword cannibalization** between `fragrance-oil-supplier-dubai.html` and `perfume-oil-supplier-dubai.html` |
| Low | No Arabic-language content despite schema declaring `availableLanguage: ["English", "Arabic"]` |
| Low | No UAE directory citations confirmed (Kompass UAE, Dubai Chamber, Yellow Pages UAE) |

---

## 7. Sitemap — Score: 90/100

- Well-formed XML, 21 URLs, all pages covered, no orphans
- Both sitemaps declared in robots.txt
- **Issue (Medium):** All 21 URLs share identical `lastmod` of `2026-04-26` — use real per-page dates
- **Issue (Low):** `<changefreq>` and `<priority>` tags present — Google ignores both; remove
- **Issue (Low):** Image sitemap covers only 8 of 21 pages — expand to remaining pages

---

## 8. Backlinks — Insufficient Data

GSC verification is not active and no API tools are configured. Directional estimate: DA/DR 1–20 range.

**Immediate:**
1. Uncomment GSC verification tag — unlocks all free Google link data
2. Create Moz Link Explorer free account — referring domains, DA, anchors, spam score
3. Begin citation building: Kompass UAE, Dubai Chamber, UAE Yellow Pages, TradeIndia/ExportHub, Trustpilot

---

## Files Requiring Immediate Attention

| File | Issues |
|---|---|
| `index.html` | GSC verification commented out; H1 keyword gap; SearchAction schema; fonts preconnect missing |
| `about-us.html` | Wrong navigation component; broken style block; placeholder review URL |
| `fragrance-oil-supplier-dubai.html` | Placeholder review URL; malformed footer HTML; AggregateRating 5.0; breadcrumb mislabelled |
| `private-label-perfume-dubai.html` | Placeholder review URL; malformed footer HTML; AggregateRating 5.0; Friday hours 1:30 PM |
| `perfumers-alcohol-supplier-dubai.html` | Placeholder review URL; malformed footer HTML; AggregateRating 5.0; invalid dateModified on BreadcrumbList |
| `bakhoor-supplier-dubai.html` | Placeholder review URL; AggregateRating 5.0 |
| `fonts.css` | Google Fonts @import chain; legacy Outfit import |
| `perfume-store-deira.html` | Schema name wrong; no Google Maps embed |
| All inner pages | Duplicate/boilerplate meta descriptions; missing Product schema |
