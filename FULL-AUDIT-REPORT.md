# ScentBazaar Full SEO Audit Report
**Site:** https://scentbazaar.co/ | **Date:** 2026-03-23 | **Pages audited:** 18 | **Hosting:** GitHub Pages / Fastly CDN

---

## Overall SEO Health Score: **66 / 100**

| Category | Weight | Score | Weighted |
|----------|--------|-------|---------|
| Technical SEO | 25% | 68/100 | 17.0 |
| Content Quality & E-E-A-T | 25% | 64/100 | 16.0 |
| On-Page SEO | 20% | 65/100 | 13.0 |
| Schema / Structured Data | 10% | 72/100 | 7.2 |
| Performance (CWV) | 10% | 63/100 | 6.3 |
| Images | 5% | 78/100 | 3.9 |
| AI Search Readiness (GEO) | 5% | 58/100 | 2.9 |
| **TOTAL** | | | **66.3 / 100** |

---

## Executive Summary

ScentBazaar has a solid technical foundation — clean URL architecture, fast static hosting, an excellent robots.txt, and a working llms.txt that most competitors lack entirely. The `/perfume-oil-supplier-dubai` page is genuinely strong content that demonstrates expert-level depth. However the site is held back by a cluster of fixable issues that are actively harming rankings and trust signals right now.

### Top 5 Critical Issues

1. **`/perfume-oil-supplier-dubai` — missing canonical tag** on the site's most important and highest-quality page, while three similar pages compete for overlapping queries
2. **Blog directory returns 404** — homepage and footer link to blog content that does not exist, creating broken internal links and missing a major authority channel
3. **`/perfume-oil-supplier-dubai` — meta description is only 29 characters** ("Perfume oil supplier in Dubai") — the single worst on-page SEO defect on the site
4. **Fabricated testimonials on `/wholesale-perfume-oil-dubai`** — three static unverifiable testimonials, plus a factual contradiction ("15 years of experience" contradicts "established 2025")
5. **`/privacy-policy` and `/terms-of-service` both return 404** — linked from footer, required for trust/compliance, referenced in llms.txt

### Top 5 Quick Wins (< 1 hour each)

1. Add canonical tag to `/perfume-oil-supplier-dubai` (1 line of HTML)
2. Fix meta description on `/perfume-oil-supplier-dubai` (increase from 29 to ~150 chars)
3. Add `sitemap-images.xml` reference to `robots.txt` (1 line)
4. Remove `HowTo` schema blocks from `private-label-perfume-dubai.html` and `custom-perfume-blending-dubai.html` (deprecated since Sept 2023)
5. Add `defer` attribute to the review widget `<script>` on `perfume-oil-supplier-dubai.html`

---

## 1. Technical SEO

### Infrastructure

| Check | Status | Detail |
|-------|--------|--------|
| HTTPS | ✅ | Direct 200 — no HTTP→HTTPS redirect needed |
| HSTS | ✅ | `max-age=31556952` (~1 year) |
| CDN | ✅ | Fastly with Dubai (DXB) node — optimal for UAE audience |
| Server | ℹ️ | GitHub Pages — static, fast, no server-side processing |
| Cache-Control | ✅ | `max-age=600` (10 min) — reasonable for static site |
| CSP | ❌ | Missing — GitHub Pages cannot set custom headers |
| X-Frame-Options | ❌ | Missing |
| X-Content-Type-Options | ❌ | Missing |
| Referrer-Policy | ❌ | Missing |

> **Note on security headers:** GitHub Pages does not allow custom HTTP headers. To add CSP, X-Frame-Options, etc., the site would need to be migrated to Cloudflare Pages or have Cloudflare proxy enabled. This is a Medium priority — not a ranking factor, but improves security posture.

### robots.txt

✅ Excellent configuration. All major AI crawlers explicitly allowed. Sitemap declared.

```
User-agent: * → Allow: /
GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Amazonbot → Allow: /
Sitemap: https://scentbazaar.co/sitemap.xml
```

**Gap:** `sitemap-images.xml` exists but is not referenced in robots.txt. Add: `Sitemap: https://scentbazaar.co/sitemap-images.xml`

### Sitemap

- **sitemap.xml:** 18 URLs, valid XML, all return HTTP 200 ✅
- **sitemap-images.xml:** Exists, valid, but not referenced in robots.txt ❌
- **No sitemap index** — correct at this scale (under 50,000 URLs)
- **lastmod:** All 14 product pages share identical date `2026-03-18` — appears batch-stamped, Google may stop trusting these ⚠️
- **No `<priority>` or `<changefreq>`** — correct (Google ignores them)
- **Missing pages:** `/privacy-policy`, `/terms-of-service`, `/blog/` — all 404

### HTTP Status Codes

| URL | Status | Issue |
|-----|--------|-------|
| All 18 sitemap pages | ✅ 200 | |
| `/perfume-oil-supplier` | ❌ 404 | Old URL — should 301 → `/perfume-oil-supplier-dubai` |
| `/blog/` | ❌ 404 | Broken — linked from homepage |
| `/blog/top-perfume-oil-suppliers-dubai` | ❌ 404 | Linked directly from homepage |
| `/privacy-policy` | ❌ 404 | Footer link — page doesn't exist |
| `/terms-of-service` | ❌ 404 | Footer link + referenced in llms.txt |

### Canonical Tags

| Page | Canonical | Status |
|------|-----------|--------|
| Homepage | `https://scentbazaar.co/` | ✅ |
| `/wholesale-perfume-oil-dubai` | Self-referencing | ✅ |
| `/about-us` | Self-referencing | ✅ |
| All other pages (16/18) | Self-referencing | ✅ |
| **`/perfume-oil-supplier-dubai`** | **MISSING** | ❌ **Critical** |

### Orphaned Pages (in sitemap, not in main nav)

- `/cosmetic-base-supplier-dubai`
- `/perfume-base-supplier-uae`
- `/candle-fragrance-oil-supplier-dubai`
- `/perfume-caps-spray-pumps`

These four pages have no inbound internal links from the homepage navigation, reducing crawl frequency and link equity.

---

## 2. Content Quality & E-E-A-T

### Site-Wide E-E-A-T

| Factor | Score | Key Finding |
|--------|-------|-------------|
| Experience | 14/20 | Physical store, Google Maps, 172 reviews widget — strong. No founder photo (placeholder CSS gradient on all pages). |
| Expertise | 18/25 | `/perfume-oil-supplier-dubai` demonstrates genuine depth (EU Cosmetics Regulation 1223/2009, REACH, DPG vs IPM, Aquilaria species). Secondary pages are generic. |
| Authoritativeness | 14/25 | No external press, no industry directories, no third-party citations. Schema is the primary authority signal. |
| Trustworthiness | 20/30 | Physical address, phone, WhatsApp, live reviews widget — positive. Offset by fabricated testimonials on wholesale page, "15 years" contradiction, no Privacy Policy, founder pronoun inconsistency. |

**E-E-A-T Composite: 66 / 100**

### Word Count by Page

| Page | Words | Assessment |
|------|-------|------------|
| `/perfume-oil-supplier-dubai` | ~3,545 | ✅ Strong |
| `/wholesale-perfume-oil-dubai` | ~1,210 | ⚠️ Thin |
| `/fragrance-oil-supplier-dubai` | ~923 | ⚠️ Thin — below 800-word minimum |
| Homepage | ~929 | ✅ Acceptable for homepage |
| `/about-us` | ~848 | ⚠️ Thin |
| `/private-label-perfume-dubai` | ~788 | ⚠️ Thin |
| `/candle-fragrance-oil-supplier-dubai` | ~774 | ⚠️ Thin |
| `/cosmetic-base-supplier-dubai` | ~761 | ⚠️ Thin |
| `/perfume-base-supplier-uae` | ~794 | ⚠️ Thin |

### Critical Content Issues

**1. Factual contradiction — `/wholesale-perfume-oil-dubai`**
"Over 15 years of experience in fragrance chemistry" contradicts "established in 2025" on About page. Google Quality Raters are explicitly trained to flag this. Reframe as founder's personal expertise pre-dating the company.

**2. Fabricated testimonials — `/wholesale-perfume-oil-dubai`**
Three static testimonials ("Ahmed Al-Mansouri, Niche Fragrance Brand Owner, Dubai", etc.) cannot be verified. Every other page uses the live Google Reviews widget. Under the Sept 2025 QRG, unverifiable testimonials are a Trustworthiness deduction.

**3. Founder pronoun inconsistency**
`/perfume-oil-supplier-dubai` uses "she", `/about-us` uses "he" in the profile block and "I" in the story. Quality Raters will flag this as an authorship authenticity issue.

**4. Missing blog**
Homepage and footer link to blog content. Zero blog files exist anywhere in the repository. This removes: a major topical authority channel, long-tail keyword capture, and the ability to publish `Article` schema with `datePublished` and `author` signals.

**5. Duplicate content cluster**
Three pages compete for closely related queries with substantially overlapping content:

| Page | Target | Words | Canonical | Risk |
|------|--------|-------|-----------|------|
| `/perfume-oil-supplier-dubai` | "perfume oil supplier Dubai" | 3,545 | ❌ Missing | Critical |
| `/wholesale-perfume-oil-dubai` | "wholesale perfume oil Dubai" | 1,210 | ✅ | High |
| `/fragrance-oil-supplier-dubai` | "fragrance oil supplier Dubai" | 923 | ✅ | High |

---

## 3. On-Page SEO

### Title Tags

| Page | Title | Len | Issue |
|------|-------|-----|-------|
| Homepage | Perfume Oil Supplier Dubai \| Wholesale Fragrance – Scent Bazaar | 63 | ✅ |
| `/perfume-oil-supplier-dubai` | Perfume Oil Supplier in Dubai \| Wholesale Attar, Concentrated & Non-Alcoholic Oils – Scent Bazaar | **97** | ❌ Too long |
| `/wholesale-perfume-oil-dubai` | Wholesale Perfume Oil Dubai \| Bulk Fragrance Supplier UAE | 57 | ✅ |
| `/about-us` | About Scent Bazaar \| Perfume Oil Supplier Dubai Since 2025 | 58 | ✅ |
| `/fragrance-oil-supplier-dubai` | Fragrance Oil Supplier Dubai \| Wholesale Aroma Oils UAE | 55 | ✅ |
| `/cosmetic-base-supplier-dubai` | Cosmetic & Perfume Base Supplier UAE \| Wholesale Dubai | 54 | ✅ |
| `/candle-fragrance-oil-supplier-dubai` | Candle Fragrance Oil Supplier Dubai \| Wholesale Scent UAE | 57 | ✅ |
| `/private-label-perfume-dubai` | Private Label Perfume Dubai \| OEM Fragrance Manufacturing UAE | 62 | ✅ |

### Meta Descriptions

| Page | Length | Issue |
|------|--------|-------|
| Homepage | 154 | ✅ |
| `/perfume-oil-supplier-dubai` | **29** | ❌ **Critical — "Perfume oil supplier in Dubai"** |
| `/wholesale-perfume-oil-dubai` | 165 | ⚠️ Slightly long |
| `/about-us` | 186 | ⚠️ Too long (>160) |
| `/private-label-perfume-dubai` | **45** | ❌ Too short |
| `/fragrance-oil-supplier-dubai` | 148 | ✅ |

### H1 Tags
All checked pages have exactly one H1. ✅

### Internal Linking Gaps
- ❌ `/blog/top-perfume-oil-suppliers-dubai` — linked from homepage, 404
- ❌ 4 pages not linked from homepage nav (orphaned)
- ❌ No breadcrumb navigation on most pages

---

## 4. Schema / Structured Data

**Overall:** JSON-LD only (no Microdata/RDFa). All 18 pages have schema. Strong foundation with specific fixable errors.

### Critical Schema Errors

| Error | File(s) |
|-------|---------|
| `HowTo` schema used — deprecated Sept 2023, generates zero rich results | `private-label-perfume-dubai.html`, `custom-perfume-blending-dubai.html` |
| `Store` entity missing `@id` — cannot be linked into entity graph | `perfume-store-deira.html` |
| `AboutPage` uses `"organization"` — not a valid Schema.org property | `about-us.html` |

### Schema Warnings (High)

| Warning | Affected Pages |
|---------|---------------|
| `telephone` inconsistent format (`+971547727106` vs `+971-54-772-7106`) | Homepage vs all others |
| Instagram `sameAs` URL inconsistent (`scentbazaar.co` vs `scentbazaar`) | Multiple pages |
| WhatsApp `wa.me` URL in `sameAs` — not a recognized social profile | Homepage, perfume-store-deira |
| Google Maps CID in `sameAs` — belongs only in `hasMap` | Homepage |
| `Offer` on bakhoor `Product` missing `price` — ineligible for Product rich results | `bakhoor-supplier-dubai.html` |

### Schema Gaps (Opportunities)

| Opportunity | Impact |
|-------------|--------|
| `AggregateRating` missing from `/perfume-oil-supplier-dubai` `LocalBusiness` | Would enable star ratings on that SERP listing |
| No `Product` schema on key product pages (wholesale, perfumers alcohol, bottles) | Missed Product rich result opportunity |
| No `BlogPosting` schema — blog doesn't exist yet | Ready to implement when blog launches |
| `Person` schema missing `sameAs` and `url` for founder | E-E-A-T gap |
| `Service` nodes missing `@id` on 10+ pages | Cannot be cross-referenced |
| `ratingCount`/`reviewCount` both set to 172 on homepage | Should use one or distinct values |

### What's Working
- ✅ FAQPage on 17/18 pages (good for AI/GEO value even without Google rich results)
- ✅ BreadcrumbList on key pages
- ✅ `LocalBusiness` with geo coordinates, opening hours, address
- ✅ `Person` schema for founder on About page
- ✅ llms.txt present and well-structured

---

## 5. Performance (Core Web Vitals Indicators)

**Estimated scores based on HTML analysis (not live CrUX data):**

| Page | Estimated Score | Confidence |
|------|----------------|------------|
| Homepage | 58–68 / 100 | Medium |
| `/perfume-oil-supplier-dubai` | 62–72 / 100 | Medium |

### Key Findings

**LCP — Likely Needs Improvement**
- Hero image (`assets.cdn.filesafe.space` PNG) is the LCP element on both pages
- Image is preloaded with `fetchpriority="high"` ✅
- However: served as PNG (not WebP/AVIF), no `srcset`, full 1920×1080 served to mobile
- On supplier page, hero is a CSS `background-image` (harder for browser scanner to discover)

**CLS — Likely Needs Improvement / Poor**
- Review widget iframe on `/perfume-oil-supplier-dubai` has **no reserved height** → significant layout shift risk
- Homepage version correctly sets `height: 800px` — same fix needed on supplier page
- 9 service card background images on homepage loaded via CSS `background-image` — cannot be natively lazy-loaded

**INP — Likely Good**
- Minimal JavaScript, `requestAnimationFrame` scroll handler with `{passive: true}` ✅
- Risk: `reputationhub.site` script on supplier page has no `defer` (homepage has `defer` correctly)

### Priority Performance Fixes

| Fix | Impact | Effort |
|----|--------|--------|
| Convert hero PNG to WebP + add `srcset` | LCP −300–800ms | Medium |
| Add `height: 800px` to review widget iframe on supplier page | CLS fix | Low (1 line) |
| Add `defer` to review widget script on supplier page | INP/TBT improvement | Low (1 word) |
| Add `preconnect` to `reputationhub.site` in `<head>` | Widget load speed | Low (1 line) |
| Minify inline CSS/HTML/JSON-LD | 15–30% payload reduction | Medium |
| Trim Google Fonts to 3 weights (400, 500, 600) | 40–60KB savings | Low |

---

## 6. Images

| Metric | Result |
|--------|--------|
| Total images (homepage) | 6 |
| Missing alt text | ✅ 0 (all images have alt) |
| Empty alt text | ✅ 0 |
| WebP / AVIF format | ❌ All PNG from external CDN |
| Responsive `srcset` | ❌ Not used on hero |
| Hero image lazy loading | ✅ `loading="eager"` + `fetchpriority="high"` correct |
| Below-fold images | ✅ `loading="lazy"` used |
| Service card images | ❌ CSS `background-image` (cannot lazy-load, no srcset) |

---

## 7. AI Search Readiness (GEO)

**GEO Health Score: 58 / 100**

| Dimension | Score |
|-----------|-------|
| AI Crawler Accessibility | 82/100 ✅ |
| Structural Readability | 68/100 |
| Authority & Brand Signals | 48/100 |
| Citability | 55/100 |
| Multi-Modal Content | 32/100 |

### Strengths
- ✅ All 5 priority AI crawlers explicitly allowed in robots.txt
- ✅ llms.txt present, well-structured, covers all service pages with descriptions
- ✅ FAQ schema on 17 pages — strong AI citation candidacy
- ✅ Static HTML (SSR) — zero JavaScript dependency for AI crawlers
- ✅ Specific, quotable facts throughout: 2,000+ oils, 100ml MOQ, 172 reviews, 50+ countries

### Gaps
- ❌ No Wikipedia/Wikidata entity (biggest single gap for ChatGPT/Perplexity citation)
- ❌ No off-site brand mentions identified (press, directories, Reddit, trade publications)
- ❌ llms.txt `license:` points to `/terms-of-service` which is a 404
- ❌ llms.txt rating "5.0 stars" contradicts schema "4.9 stars"
- ❌ Content written in first-person promotional voice — AI models prefer third-person extractable prose
- ❌ Statistics cited without source links (market size data, fragrance preference percentages)
- ❌ No blog = no long-form answer content for AI Overview candidacy

### Platform-Specific Scores

| Platform | Score | Key Gap |
|----------|-------|---------|
| Google AI Overviews | 62/100 | No `dateModified` on most pages, no external citations |
| ChatGPT (Browse) | 48/100 | No Wikipedia entity, weak off-site co-citation |
| Perplexity | 55/100 | Good FAQ structure helps; hurt by lack of third-party sourcing |
| Bing Copilot | 60/100 | Strong schema; no Article schema or author signals |

---

## 8. Sitemap Detail

| Check | Status |
|-------|--------|
| `sitemap.xml` valid XML | ✅ |
| All 18 URLs return 200 | ✅ |
| `sitemap-images.xml` exists | ✅ |
| `sitemap-images.xml` in robots.txt | ❌ Missing |
| `<priority>` / `<changefreq>` tags | ✅ Absent (correct) |
| `lastmod` on all URLs | ✅ Present |
| Batch-identical `lastmod` on 14 pages | ⚠️ Reduces crawl scheduling trust |
| Blog pages in sitemap | ❌ Don't exist |
| Privacy/Terms in sitemap | ❌ Don't exist |

---

## Appendix: Full Page Status

| URL | HTTP | Canonical | Title Len | Meta Desc Len | Words |
|-----|------|-----------|-----------|--------------|-------|
| `/` | 200 | ✅ | 63 | 154 | ~929 |
| `/perfume-oil-supplier-dubai` | 200 | ❌ **Missing** | 97 | **29** | ~3,545 |
| `/wholesale-perfume-oil-dubai` | 200 | ✅ | 57 | 165 | ~1,210 |
| `/fragrance-oil-supplier-dubai` | 200 | ✅ | 55 | 148 | ~923 |
| `/about-us` | 200 | ✅ | 58 | 186 | ~848 |
| `/cosmetic-base-supplier-dubai` | 200 | ✅ | 54 | 136 | ~761 |
| `/perfume-base-supplier-uae` | 200 | ✅ | 57 | 159 | ~794 |
| `/candle-fragrance-oil-supplier-dubai` | 200 | ✅ | 57 | 145 | ~774 |
| `/private-label-perfume-dubai` | 200 | ✅ | 62 | **45** | ~788 |
| `/perfume-oil-supplier` | **404** | — | — | — | — |
| `/blog/` | **404** | — | — | — | — |
| `/blog/top-perfume-oil-suppliers-dubai` | **404** | — | — | — | — |
| `/privacy-policy` | **404** | — | — | — | — |
| `/terms-of-service` | **404** | — | — | — | — |
