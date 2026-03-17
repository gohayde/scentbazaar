# ScentBazaar — Full SEO Audit Report

**Site:** https://scentbazaar.co/
**Audit Date:** 2026-03-17
**Pages Audited:** 18 HTML files
**Audited By:** Claude Code SEO Suite (6 specialist agents)

---

## Overall SEO Health Score: 58 / 100

| Category | Weight | Score | Weighted |
|----------|--------|-------|---------|
| Technical SEO | 25% | 68 | 17.0 |
| Content Quality | 25% | 52 | 13.0 |
| On-Page SEO | 20% | 59.5 | 11.9 |
| Schema / Structured Data | 10% | 65 | 6.5 |
| Performance (CWV) | 10% | 52 | 5.2 |
| Images | 5% | 40 | 2.0 |
| AI Search Readiness (GEO) | 5% | 54 | 2.7 |
| **Total** | **100%** | | **58.3** |

---

## Executive Summary

ScentBazaar has a well-structured static HTML site with consistent navigation, schema markup, and on-page keyword targeting. The site serves a B2B fragrance wholesale market from Dubai's historic Deira district. Several issues were actively suppressing indexing and rankings — most now fixed in this audit commit.

### Top 5 Critical Issues (all fixed in this commit)
1. `perfume-base-supplier-uae.html` canonical pointed to a different page — Google was ignoring it entirely
2. Literal placeholder text (`REPLACE_WITH_...`) in Product schema on `perfumers-alcohol-supplier-dubai.html`
3. `noindex` pages (`privacy-policy`, `terms-of-service`) listed in `sitemap.xml`
4. Broken footer link (`/global-export-logistics` → 404) on `perfume-filling-service-dubai.html`
5. 4 pages (`custom-perfume-blending`, `candle-fragrance-oil`, `perfume-caps-spray-pumps`, `cosmetic-base`) invisible in main navigation

### Top 5 Remaining Priorities
1. Create an About Us page — highest E-E-A-T ROI available
2. Display the 172 Google reviews on-page — schema has them, users cannot see them
3. Convert hero CSS backgrounds to `<img>` elements — biggest remaining LCP gain
4. Convert all CDN images from PNG to WebP — 60-75% image weight reduction
5. Add a contact email address — WhatsApp-only blocks international B2B buyers

---

## 1. Technical SEO (Score: 68/100)

### Critical — Fixed

**C-1. Wrong canonical on `perfume-base-supplier-uae.html`** — FIXED
Was canonicalizing to `/cosmetic-base-supplier-dubai`. Google treated the page as invisible under its own URL. Canonical, og:url, hreflang, breadcrumb schema, title, H1 and meta description all corrected and differentiated.

**C-2. noindex pages in sitemap** — FIXED
`/privacy-policy` and `/terms-of-service` removed from sitemap.xml. Both carry `noindex` meta — including them sent contradictory signals and wasted crawl budget.

**C-3. Broken footer link (404)** — FIXED
`href="/global-export-logistics"` changed to `href="/fragrance-oil-supplier-dubai"` on `perfume-filling-service-dubai.html`.

**C-4. URL casing bug** — FIXED
`perfume-filling-service-dubai.html` img src used mixed-case filename. Normalized to lowercase matching the preload tag.

### High — Fixed

**H-1. Render-blocking Google Fonts on all pages** — FIXED
Replaced blocking `<link rel="stylesheet">` with async preload + `media="print" onload` + noscript fallback on all 15 inner pages. Index.html was already updated separately.

**H-2. JS-injected mobile nav CSS** — FIXED
`document.createElement("style")` pattern removed from all 15 inner pages. Styles moved to inline `<style>` block in `<head>`.

**H-3. BreadcrumbList home URL missing trailing slash** — FIXED
`perfume-bottle-supplier-dubai.html` and `perfume-caps-spray-pumps.html` breadcrumb position-1 corrected to `https://scentbazaar.co/`.

**H-4. Orphan pages missing from navigation** — FIXED
`custom-perfume-blending-dubai`, `candle-fragrance-oil-supplier-dubai`, `perfume-caps-spray-pumps`, `cosmetic-base-supplier-dubai` added to nav dropdowns on all 16 HTML pages.

**H-5. Homepage store hours inconsistency** — FIXED
Body text said "Open Daily" while schema/llms.txt said "Monday-Saturday". Corrected to "Mon-Sat 9am-10pm (WhatsApp available 24/7)".

### High — Remaining

**H-6. Hero CSS background images (LCP risk)**
All 16 pages load hero images via CSS `::before` `background-image`. The browser preload scanner cannot discover CSS backgrounds independently. Converting to `<img fetchpriority="high">` elements is the highest remaining LCP improvement available.

**H-7. GSC verification tag commented out**
`index.html` line 48: commented placeholder. Add real verification token from Google Search Console.

### Medium — Fixed

**M-1. Deprecated changefreq and priority in sitemap** — FIXED
Stripped from all entries. Google has ignored both since 2023.

**M-2. Organization entity never declared** — FIXED
All inner pages referenced `#scentbazaar` as provider but it was never defined. Added full Organization block to `index.html` schema with name, url, logo, address, and sameAs arrays.

**M-3. ratingValue string to number** — FIXED
`index.html` and `perfume-store-deira.html` — `"ratingValue": "5"` changed to `"ratingValue": 5` (Number type as required by schema.org spec).

**M-4. Facebook/Instagram URLs corrected** — FIXED
Updated to `https://www.facebook.com/p/Scent-Bazaar-61582093276601/` and `https://www.instagram.com/scentbazaar.co/` across all schemas and llms files.

### Medium — Remaining

**M-5. direction:rtl CSS layout hack**
All 16 pages use `direction: rtl` on `.content-reverse` for column reversal. Semantically incorrect and breaks RTL user agents (common in UAE). Replace with CSS `order` or `flex-direction: row-reverse`.

**M-6. No IndexNow implementation**
No IndexNow key file or API calls. Would enable faster Bing/Yandex indexing on content updates.

**M-7. robots.txt missing Disallow for noindex pages**
Add `Disallow: /privacy-policy` and `Disallow: /terms-of-service`.

### Low — Fixed

**L-1. meta keywords on all 16 pages** — FIXED
Removed. Has been ignored by Google since 2009; was leaking keyword strategy to competitors.

**L-2. WebSite schema url missing trailing slash** — FIXED
`index.html` WebSite entity `"url": "https://scentbazaar.co"` changed to `"https://scentbazaar.co/"`.

---

## 2. Content Quality (Score: 52/100)

### E-E-A-T Score: 42/100

Dominant content gap. Key deficiencies:
- Zero named human authorship across all 16 pages
- No About Us page or company history
- 172 reviews claimed in schema but never displayed on any page
- No named perfumers despite references throughout
- No case studies, client portfolio, or testimonials section

### Pages With Thin Content

| Page | Estimated Words | Minimum | Status |
|---|---|---|---|
| fragrance-oil-supplier-dubai.html | ~680 | 800 | FAIL |
| diffuser-base-supplier-dubai.html | ~760 | 800 | FAIL |
| perfume-caps-spray-pumps.html | ~750 | 800 | FAIL |
| bulk-fragrance-oil-uae.html | ~780 | 800 | MARGINAL |
| perfume-base-supplier-uae.html | ~700 | 800 | MARGINAL |

### Near-Duplicate Page Pairs

| Pair | Risk | Action Required |
|---|---|---|
| fragrance-oil-supplier-dubai vs wholesale-perfume-oil-dubai | HIGH | fragrance-oil = export/logistics focus; wholesale = product catalog |
| perfume-bottle-supplier-dubai vs perfume-caps-spray-pumps | HIGH | Caps page needs unique content angle |
| custom-perfume-blending-dubai vs private-label-perfume-dubai | MEDIUM | blending = formula creation; private-label = production |

### Broken CTA

`candle-fragrance-oil-supplier-dubai.html` — "Download Fragrance Safety Data" links to `/fragrance-oil-supplier-dubai` instead of a downloadable MSDS PDF. Fix or change CTA copy.

### AI Citation Readiness: 48/100

Strongest citable passages:
1. Soy wax fragrance load — "8% and 10% by weight... cause the oil to seep out (sweat)" — `candle-fragrance-oil-supplier-dubai.html`
2. Pour temperature — "when the wax is between 80 deg C and 85 deg C (175F-185F)" — `candle-fragrance-oil-supplier-dubai.html`
3. EDP/EDT ratios — "15% to 20% fragrance oil mixed with 80% to 85% perfumers alcohol" — `perfumers-alcohol-supplier-dubai.html`
4. Diffuser load — "20% to 25% high-quality fragrance oil with 75% to 80% of our premium reed diffuser base" — `diffuser-base-supplier-dubai.html`
5. CITES regulation — "Real agarwood is subject to CITES" — `bakhoor-supplier-dubai.html`

Barriers: No author attribution, no external source links, no publication dates, FAQ in closed details elements.

### Critical Missing Pages

| Page | Priority |
|---|---|
| /about — Company history, team, named perfumers | CRITICAL |
| Blog / Knowledge Centre (8+ articles) | CRITICAL |
| Scent catalog / product listing | CRITICAL |
| Testimonials / reviews page | HIGH |
| Shipping and compliance guide | HIGH |

---

## 3. On-Page SEO and GEO (Score: 59.5/100)

### Fixed

- perfume-base-supplier-uae.html title/H1/meta differentiated from cosmetic-base page
- All 4 orphan pages added to main navigation on all 16 HTML files
- meta keywords removed from all 16 pages
- llms.txt RSL 1.0 license declaration added
- llms-full.txt rewritten: brand narrative, correct URLs, all pages, YouTube added

### Remaining Issues

Two titles over 60 chars:
- perfume-bottle-supplier-dubai.html: 61 chars. Trim to: "Perfume Bottle Supplier Dubai | Wholesale Packaging UAE" (55)
- private-label-perfume-dubai.html: 61 chars. Trim to: "Private Label Perfume Dubai | Fragrance Manufacturing UAE" (58)

Meta descriptions under 150 chars on most pages — target 150-160 chars with one specific data point each.

Platform GEO scores:

| Platform | Score | Key Gaps |
|---|---|---|
| Google AI Overviews | 58/100 | No GSC verification; schema issues fixed |
| ChatGPT / SearchGPT | 48/100 | No Wikipedia entity; no Reddit mentions |
| Perplexity | 55/100 | Strong technical content; no external citations |
| Bing Copilot | 52/100 | Missing author/date signals |

Brand authority gaps:

| Signal | Status |
|---|---|
| Wikipedia entity | Missing |
| YouTube channel content | Unknown/minimal |
| Reddit brand mentions | None confirmed |
| LinkedIn company page | Not in schema/llms |
| Author bylines | None |
| Publication dates | None |

---

## 4. Schema / Structured Data (Score: 65/100 before, ~78/100 after fixes)

### Fixed in this commit

| Issue | Page | Fix Applied |
|---|---|---|
| Literal placeholder text in Product schema | perfumers-alcohol-supplier-dubai.html | Replaced with real image URL and AED price range |
| Organization entity never declared | All inner pages | Added to index.html schema |
| AggregateOffer missing lowPrice/highPrice | Bottle + Caps pages | Added with AED ranges |
| Duplicate BreadcrumbList schemas | Bottle + Caps pages | Merged into single @graph |
| ratingValue string vs number | index.html + store-deira | Fixed to Number type |
| Wrong Facebook URL in sameAs | store-deira.html | Fixed |
| Incomplete Service schemas | filling, candle, caps | serviceType + description + areaServed added |
| Product schema missing image | bakhoor, diffuser | Added image property |
| Store schema missing image + priceRange | store-deira.html | Added |
| provider @id inconsistency | wholesale, private-label | Standardized to #scentbazaar |

### Remaining

AggregateRating not displayed on-page — 172 reviews in schema but never shown to users. Google requires on-page display. Fix by embedding Google Reviews widget or adding manual testimonials section.

hasMap uses unstable share link — replace with `https://www.google.com/maps?cid=14467776495573423409`.

---

## 5. Performance / Core Web Vitals (Score: 52/100)

LCP Risk: MEDIUM-HIGH on all pages

| Issue | Status | LCP Gain |
|---|---|---|
| Render-blocking Google Fonts | FIXED | ~300-500ms |
| Hero images as CSS background-image | Remaining | ~400-800ms |
| All images PNG, no WebP | Remaining | ~200-400ms |
| No srcset responsive images | Remaining | Mobile LCP |

CLS Risk: LOW — All img have width/height, font-display swap in use.
INP Risk: LOW — Minimal JS, no heavy frameworks.

Estimated LCP: 2.8-4.5s before fixes, 1.5-2.3s after all fixes.

Image issues:
- 0 images missing alt text
- 0 images missing width/height
- 18+ unique CDN images in PNG format — should be WebP
- All content images lack srcset
- 14 unused local images in /images/ folder

---

## 6. Sitemap (Score: 62/100 before, 85/100 after fixes)

| Check | Before | After |
|---|---|---|
| noindex pages excluded | FAIL (2 pages) | FIXED |
| changefreq/priority stripped | FAIL (all 18) | FIXED |
| All 16 indexable pages present | PASS | PASS |
| HTTPS URLs only | PASS | PASS |
| Unique lastmod dates | FAIL (all identical) | Remaining |

---

## 7. AI Search Readiness / GEO (Score: 54/100)

Fixed:
- llms.txt RSL 1.0 license field added
- llms-full.txt rewritten with brand narrative, all 16 pages, correct social URLs
- All AI crawlers permitted in robots.txt

Remaining:

| Signal | Priority |
|---|---|
| About Us page with named team | CRITICAL |
| Reviews displayed on-page | CRITICAL |
| Wikipedia entity | HIGH |
| YouTube channel content | HIGH |
| Reddit brand mentions | MEDIUM |
| LinkedIn company page | MEDIUM |
| Author bylines and publication dates | MEDIUM |

---

## Per-Page Score Summary

| Page | Score | Top Remaining Issue |
|---|---|---|
| index.html | 71 | Reviews not displayed on-page |
| wholesale-perfume-oil-dubai | 68 | Overlaps with fragrance-oil page |
| private-label-perfume-dubai | 69 | Title 1 char over limit |
| bakhoor-supplier-dubai | 69 | Generic OG image |
| perfume-store-deira | 68 | Reviews in schema not visible to users |
| diffuser-base-supplier-dubai | 65 | Thin content (~760 words) |
| candle-fragrance-oil-supplier-dubai | 63 | Broken CTA link |
| perfume-caps-spray-pumps | 58 | Thin content; near-duplicate with bottles |
| perfume-bottle-supplier-dubai | 61 | Title 1 char over limit |
| bulk-fragrance-oil-uae | 62 | Marginal word count |
| perfumers-alcohol-supplier-dubai | 60 | Schema fixed; missing product photos |
| custom-perfume-blending-dubai | 59 | Short meta description |
| perfume-filling-service-dubai | 58 | Fixed; vague production capacity claims |
| fragrance-oil-supplier-dubai | 56 | Short meta description; thin content |
| cosmetic-base-supplier-dubai | 55 | Simplified footer; only 2 FAQs |
| perfume-base-supplier-uae | 59 | Differentiated and fixed in this commit |
