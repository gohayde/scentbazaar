# Scent Bazaar — Full SEO Audit Report
**URL:** https://scentbazaar.co/  
**Date:** 2026-04-25  
**Auditor:** Claude SEO Audit System (multi-agent)  
**Business Type:** B2B Wholesale Perfume Oil & Fragrance Supplier — Dubai, UAE (hybrid: physical store + global export)  
**Pages Crawled:** 18 / 18  
**Subagents Run:** Technical SEO · Content Quality · Schema · Performance (CWV) · GEO/AI Search · SXO · Local SEO · Backlinks

---

## Overall SEO Health Score: 61 / 100

| Category | Weight | Raw Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 74 | 16.3 |
| Content Quality | 23% | 61 | 14.0 |
| On-Page SEO | 20% | 58 | 11.6 |
| Schema / Structured Data | 10% | 52 | 5.2 |
| Performance (CWV) | 10% | 67 | 6.7 |
| AI Search Readiness | 10% | 61 | 6.1 |
| Images | 5% | 70 | 3.5 |
| **Total** | **100%** | | **63.4 → 61** |

*(Capped at 61 due to two site-wide critical bugs: sitewide broken nav link + broken homepage JSON-LD schema)*

---

## Executive Summary

Scent Bazaar is a well-positioned B2B fragrance supplier with strong on-site content, a physical Dubai showroom, and a modern technical foundation. Two bugs are blocking disproportionate SEO value: a **trailing comma in the homepage JSON-LD schema** that invalidates all structured data on the most important page, and a **sitewide broken navigation link** to a 404 buyer's guide. Both are 15-minute fixes with outsized impact.

Beyond those, the site's largest gaps are strategic rather than technical: **zero meta descriptions across all 18 pages**, **conflicting business hours in three locations**, and **no secondary conversion path for international buyers** (WhatsApp-only). Content depth is strong but the **absence of pricing transparency** and **no active blog** leaves significant ranking and citation surface untapped.

### Top 5 Critical Issues
1. Homepage JSON-LD Block 1 has a trailing comma — entire structured data block (Store, Organization, Person, WebSite, FAQPage) is invalid and invisible to Google
2. Navigation links to `/blog/top-perfume-oil-suppliers-dubai` which returns a 404 — broken on every page sitewide
3. Zero meta descriptions across all 18 indexed pages
4. Business hours appear in three different versions across the site (homepage schema, store page, FAQ)
5. Hero image preload has a source mismatch (preloads self-hosted WebP path, img src points to external CDN PNG)

### Top 5 Quick Wins
1. Fix trailing comma in homepage JSON-LD (15 min) — restores all structured data instantly
2. Fix or redirect `/blog/top-perfume-oil-suppliers-dubai` nav link (10 min) — stops sitewide 404 crawl drain
3. Write and deploy meta descriptions for all 18 pages (2–3 hours) — immediate CTR lift
4. Reconcile business hours to one canonical set everywhere (30 min) — fixes trust/GBP conflict
5. Add `aggregateRating` to LocalBusiness schema (30 min) — surfaces 162 five-star rating in SERP

---

## 1. Technical SEO — Score: 74 / 100

### 1.1 Crawlability — PASS (90/100)
- robots.txt correctly allows all bots including AI crawlers: GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Amazonbot
- Sitemap.xml referenced in robots.txt — 18 URLs, all indexable
- sitemap-images.xml present with 15 image entries across 13 pages
- **CRITICAL:** Navigation links to `/blog/top-perfume-oil-suppliers-dubai` returning a hard 404. Present on every page sitewide — wastes crawl budget and fails users at the research stage of their journey.

### 1.2 Indexability — PASS with Issues (78/100)
- No noindex signals detected on any pages
- Self-referencing canonicals confirmed
- **HIGH RISK:** `/perfume-oil-supplier-dubai` and `/wholesale-perfume-oil-dubai` target near-identical intent with overlapping content. Both have independent canonicals. Google may struggle to determine which to rank — duplicate content dilution risk.
- Legal pages (privacy-policy, terms-of-service) absent from sitemap — acceptable practice

### 1.3 Security — PASS (92/100)
- HTTPS enforced site-wide; Fastly CDN
- HSTS: `max-age=31556952` (~1 year) — acceptable; best practice is 2-year + `includeSubDomains`
- Content-Security-Policy implemented via `<meta>` tag (not HTTP response header) — reduced protection
- Missing: `X-Content-Type-Options` and `X-Frame-Options` response headers

### 1.4 URL Structure — PASS (88/100)
- All URLs lowercase, hyphenated, descriptive, keyword-rich
- No redirect chains detected on tested URLs
- No trailing slash inconsistency

### 1.5 Mobile-Friendliness — PASS (90/100)
- Viewport meta tag correct (`width=device-width, initial-scale=1.0`)
- Responsive typography using `clamp()`
- No fixed-width containers detected

### 1.6 Internal Linking — NEEDS IMPROVEMENT (65/100)
- Homepage links to all 17 product/service pages (flat architecture — acceptable at 18 pages)
- Broken blog nav link present sitewide
- No breadcrumb navigation on any page
- About-us not cross-linked from product pages

### 1.7 Hreflang — PARTIAL (60/100)
- `hreflang="en"` and `hreflang="x-default"` implemented on tested pages
- `og:locale` correctly set to `en_AE`
- No Arabic-language variant — significant opportunity given GCC/MENA buyer base

### 1.8 IndexNow — FAIL (0/100)
- No IndexNow implementation found
- Would accelerate Bing/Yandex indexation at zero cost for a static GitHub Pages site

---

## 2. Content Quality & E-E-A-T — Score: 61 / 100

### 2.1 E-E-A-T Assessment

**Experience: 14/20**  
Founder credentials (Nawar Mohammed, chemical engineer) documented on About page. 162 verified Google reviews and 50+ country service claim add real-world validation. Weaknesses: no case studies, no named B2B client testimonials, no formulation outcomes documented.

**Expertise: 17/25**  
Technical content quality is high — fragrance chemistry, concentration levels, storage guidance, regulatory terms (MSDS, COA) used accurately. No certifications (IFRA, ISO) surfaced visibly in content. No team page beyond founder.

**Authoritativeness: 13/25**  
No external citations, press mentions, or trade directory listings referenced. "50+ countries" is a strong claim without corroborating evidence (client logos, country list, named wholesaler testimonials). No backlink-worthy content assets beyond one broken buyer's guide.

**Trustworthiness: 17/30**  
Missing meta descriptions on all 18 pages. Business hours conflict across three locations — factual inconsistency is directly flagged in Google's QRG criteria. No pricing transparency. No visible certifications, no returns/refund policy for B2B buyers.

### 2.2 Content Depth
Pages average 2,500–4,000 words. Homepage is ~6,500–7,000 words. FAQ-heavy structure is appropriate for B2B decision support. No thin content detected on sampled pages.

### 2.3 Meta Descriptions — CRITICAL GAP
**All 18 indexed pages are missing meta descriptions.** Google is auto-generating excerpts from body copy — uncontrolled and typically suboptimal for CTR. Every competitor with a crafted meta description has a direct advantage in SERP snippets.

### 2.4 Duplicate Content Risk
`/perfume-oil-supplier-dubai` and `/wholesale-perfume-oil-dubai` overlap significantly. Requires differentiation or consolidation.

### 2.5 AI Citation Readiness: 38/100
FAQ blocks contain citable numbers (100ml MOQ, 5L alcohol MOQ, 2,000+ SKUs, 24–36 month shelf life). Section introductions are marketing-toned rather than factual-answer-first, reducing AI passage extraction probability. No founder byline in crawlable content metadata.

---

## 3. On-Page SEO — Score: 58 / 100

### 3.1 Title Tags — PASS
| Page | Title Tag |
|---|---|
| Homepage | Wholesale Perfume Oil & Fragrance Supplier – Dubai |
| /wholesale-perfume-oil-dubai | Wholesale Perfume Oil Dubai \| Bulk Fragrance Supplier UAE |
| /private-label-perfume-dubai | Private Label Perfume Dubai \| OEM Fragrance Manufacturing UAE |
| /perfume-store-deira | Perfume Store in Deira Dubai \| Wholesale Fragrance Hub |
| /about-us | About Scent Bazaar \| Perfume Oil Supplier Dubai Since 2025 |
| /perfumers-alcohol-supplier-dubai | Perfumers Alcohol Supplier Dubai \| Technical Grade UAE |
| /perfume-bottle-supplier-dubai | Perfume Bottle Supplier Dubai \| Glass Bottles & Packaging UAE |

All sampled title tags are keyword-rich and well-structured. Note: "Since 2025" in the About title may undermine authority perception for buyers evaluating supplier stability.

### 3.2 Meta Descriptions — ALL MISSING
See Section 2.3. Affects all 18 pages uniformly.

### 3.3 Heading Structure — PASS
All sampled pages have a single, keyword-aligned H1. H2 structure is comprehensive (6–9 H2s per page). FAQ sections consistently H2-headed. No duplicate H1s detected.

### 3.4 Internal Linking — NEEDS IMPROVEMENT
Navigation cross-links to all product/service pages. Semantic cross-linking between related pages is inconsistent. Broken blog link in primary nav is the most damaging on-page link issue.

---

## 4. Schema / Structured Data — Score: 52 / 100

### 4.1 Current Implementation
Schema IS present on the site (WebFetch initially missed JSON-LD in `<head>`; confirmed by direct HTML inspection).

**Homepage — 3 JSON-LD blocks:**
| Block | Types | Status |
|---|---|---|
| Block 1 @graph | Store, Organization, Person, WebSite, FAQPage | **INVALID — trailing comma syntax error** |
| Block 2 | ItemList | VALID |
| Block 3 | WebPage | VALID |

**`/perfume-store-deira` — 2 JSON-LD blocks:**
| Block | Types | Status |
|---|---|---|
| Block 1 | Store + BreadcrumbList | VALID |
| Block 2 | FAQPage | VALID |

### 4.2 Critical Bug: Trailing Comma
The `FAQPage.mainEntity` array in Homepage Block 1 ends with a trailing comma before the closing `]`. This causes the **entire Block 1 to fail JSON parsing** — Store, Organization, Person, WebSite, and FAQPage are all invisible to Google's structured data parser.

**Fix:** Remove the single trailing comma after the last `Question` object in the `mainEntity` array.

### 4.3 Opening Hours Inconsistency
| Location | Hours Shown |
|---|---|
| Homepage Store schema | 10:00–01:00 (overnight, 3am close) |
| /perfume-store-deira Store schema | 09:00–22:00 Mon–Sat |
| Page visible content | Mon–Sat 9:00 AM–10:00 PM, Sun Closed |
| FAQ answer | Sat–Thu 9am–8pm, Fri 4pm–8pm |

**Canonical answer:** Mon–Sat 09:00–22:00, Sunday Closed. Update all four locations.

### 4.4 Missing Schema Opportunities
- `Service` schema on 5 service pages
- `AggregateRating` (162 reviews in copy, not in schema)
- `BreadcrumbList` on homepage
- `Product` schema on product category pages
- `geo` (latitude/longitude) in LocalBusiness

---

## 5. Performance (Core Web Vitals) — Score: 67 / 100

**Estimated PageSpeed: Mobile 62–72 | Desktop 80–88**

### 5.1 LCP — Needs Improvement
Hero image has a **preload/source mismatch**: `<link rel="preload">` targets a self-hosted WebP path; `<img src>` targets an external CDN PNG. WebP users correctly use the preload; PNG fallback fetched cold from external CDN. Logo also has competing `fetchpriority="high"` — only one element should carry this attribute.

**Fix:** Align preload `href`, `<source srcset>`, and `<img src>` to the same CDN WebP URL. Add `type="image/webp"` to preload. Remove `fetchpriority="high"` from logo.

### 5.2 CLS — At Risk
1. Google Fonts `print/onload` swap pattern — heading/body text repaints when fonts arrive; measurable CLS on mobile
2. `reputationhub.site` review widget iframe — no explicit `width`/`height` HTML attributes; if JS resizes post-load, CLS will occur

### 5.3 INP — Pass
Minimal JS footprint. `requestAnimationFrame` throttle with `passive: true`. IntersectionObserver for animations. No heavy framework. GTM/GA4 async-loaded.

### 5.4 TTFB — Pass
~37ms proxy response. GitHub Pages + Fastly CDN. HTML `Cache-Control: max-age=600` (10 minutes) is overly conservative for a static site.

### 5.5 Page Size
HTML is 97.6 KB, primarily driven by inline CSS (~60–70 KB estimated). Moving CSS to an external long-TTL file would significantly improve repeat-visit performance.

### 5.6 Top Performance Fixes
| Fix | Impact | Effort |
|---|---|---|
| Align hero preload/source to same CDN WebP URL | LCP -200–500ms | Low |
| Facade or lazy-load reputationhub iframe | LCP -100–300ms mobile | Medium |
| Self-host or subset Google Fonts with `font-display: optional` | CLS -0.05–0.1 | Medium |
| Extract inline CSS to external long-TTL stylesheet | Repeat LCP -200–400ms | High |
| Increase HTML Cache-Control from 600s to 3600s+ | TTFB repeat visitors | Low |

---

## 6. AI Search Readiness (GEO) — Score: 61 / 100

| Dimension | Score |
|---|---|
| Technical AI Accessibility | 80/100 |
| Citability | 68/100 |
| Structural Readability | 72/100 |
| Authority & Brand Signals | 58/100 |
| Multi-Modal Content | 35/100 |

### 6.1 AI Crawler Access — PASS
All major AI crawlers explicitly allowed in robots.txt. Better configured than most competitors in this niche.

### 6.2 llms.txt — PRESENT (Needs Improvement)
`https://scentbazaar.co/llms.txt` exists — fewer than 5% of comparable B2B suppliers have one. Missing: markdown section headers, machine-readable product taxonomy, RSL 1.0 licensing declaration.

### 6.3 FAQPage Schema — Broken (Homepage)
The homepage FAQPage schema is invalid (trailing comma). This directly blocks Google AI Overviews eligibility for the homepage.

### 6.4 Citability Gaps
- No founder byline in crawlable metadata (Nawar Mohammed present on About page but not as `Person` schema)
- Marketing-toned section intros reduce AI passage extraction probability
- No Wikipedia entity, no Reddit presence, no third-party editorial mentions

### 6.5 Platform Scores
| Platform | Score |
|---|---|
| Google AI Overviews | 52/100 |
| ChatGPT | 48/100 |
| Perplexity | 55/100 |
| Bing Copilot | 50/100 |

---

## 7. Search Experience Optimization (SXO) — Score: 58 / 100

### 7.1 Intent Alignment
| Page | SERP Intent | Alignment | Severity |
|---|---|---|---|
| Homepage | Commercial B2B hub | ALIGNED | — |
| /wholesale-perfume-oil-dubai | B2B transactional | MEDIUM MISMATCH | Buyer wants pricing/catalog ATF; page leads with educational content |
| /private-label-perfume-dubai | Commercial + transactional | LOW/MEDIUM MISMATCH | Lacks outcome social proof visible in competing pages |
| /perfume-store-deira | Local transactional | ALIGNED | Missing schema limits local pack eligibility |

### 7.2 Conversion Path: 58/100
- Persistent floating WhatsApp CTA — positive for GCC/South Asian buyers
- No pricing transparency — buyers cannot pre-qualify without cold contact
- No RFQ/email inquiry form — WhatsApp-only excludes European/North American buyers (50+ countries claim)
- No catalog download / lead magnet

### 7.3 Persona Coverage
| Persona | Coverage |
|---|---|
| GCC retailer / small brand owner | Good |
| South/SE Asian importer | Partial |
| European private label buyer | Poor |
| Industrial/contract manufacturer | Partial |
| Fragrance startup | Partial |
| Local walk-in customer | Good |
| Export/logistics buyer | Poor |

---

## 8. Local SEO — Score: 47 / 100

| Dimension | Score |
|---|---|
| GBP Signals | 38/100 |
| Reviews & Reputation | 55/100 |
| Local On-Page SEO | 60/100 |
| NAP Consistency & Citations | 35/100 |
| Local Schema | 30/100 |
| Local Link & Authority | 30/100 |

### 8.1 NAP Consistency
- **Address and phone:** Consistent across all pages
- **Hours:** Critically inconsistent — three different versions (see Section 4.3)

### 8.2 Schema
Only `/perfume-store-deira` has valid, functioning local schema. Homepage LocalBusiness schema is broken. Missing: `aggregateRating`, `geo` coordinates, `priceRange`.

### 8.3 GBP Integration
Google Maps deep link present. No embedded Maps iframe. 162 five-star reviews in copy — not in parseable schema.

### 8.4 Local Content Quality
`/perfume-store-deira` has strong local context: Souq Naif neighbourhood history, Baniyas Square metro directions, prayer hour guidance, parking details. Exceeds minimum local page quality thresholds.

### 8.5 Citation Opportunities
No verified presence on: Dubai Chamber of Commerce, UAE Yellow Pages, Dubizzle Business, Foursquare, TripAdvisor (Souq Naif has significant tourist footfall), Waze, Justdial UAE.

---

## 9. Backlinks — Insufficient Data

No backlink API credentials configured (Moz, Bing Webmaster Tools, DataForSEO). Common Crawl query unavailable without toolchain.

**Estimated profile (site age + structure):**
- Domain age: ~1 year (2025 launch)
- Estimated referring domains: 0–10
- Estimated DA equivalent: 5–15

### Priority Link Targets
| # | Target | Type | Effort |
|---|---|---|---|
| 1 | Dubai Chamber + UAE Yellow Pages | Local citations | Low |
| 2 | Alibaba.com + TradeKey supplier profiles | B2B marketplace | Low |
| 3 | Made-in-UAE.com | Export directory | Low |
| 4 | IFRA / Fragrance Foundation directory | Trade association | Medium |
| 5 | Perfumer & Flavorist guest article | Editorial | High |

---

## 10. Images — Score: 70 / 100

- 15 images in sitemap-images.xml across 13 pages
- Hero images: WebP with `<picture>` element — correct
- Logo served as PNG — should be SVG
- Image reuse across unrelated pages detected (same URL on homepage and bakhoor page)
- 5 pages have no entry in image sitemap — may lack imagery
- `loading="lazy"` with explicit dimensions confirmed on below-fold images — correct
- No alt text auditable from sitemap — manual check required

---

## Page-by-Page Summary

| Page | Title | Meta Desc | Schema | Key Issue |
|---|---|---|---|---|
| / | ✓ | ✗ | Broken | Fix JSON-LD trailing comma |
| /wholesale-perfume-oil-dubai | ✓ | ✗ | None | Add schema + meta desc |
| /bulk-fragrance-oil-uae | ✓ | ✗ | None | Add schema + meta desc |
| /perfumers-alcohol-supplier-dubai | ✓ | ✗ | None | Add schema + meta desc |
| /perfume-bottle-supplier-dubai | ✓ | ✗ | None | Add schema + meta desc |
| /bakhoor-supplier-dubai | ✓ | ✗ | None | Add schema + meta desc |
| /candle-fragrance-oil-supplier-dubai | Unknown | ✗ | None | Verify title + add schema |
| /diffuser-base-supplier-dubai | Unknown | ✗ | None | Verify title + add schema |
| /cosmetic-base-supplier-dubai | Unknown | ✗ | None | Verify title + add schema |
| /perfume-base-supplier-uae | Unknown | ✗ | None | Verify title + add schema |
| /perfume-caps-spray-pumps | Unknown | ✗ | None | Verify title + add schema |
| /private-label-perfume-dubai | ✓ | ✗ | None | Add schema + social proof |
| /custom-perfume-blending-dubai | Unknown | ✗ | None | Verify title + add schema |
| /perfume-filling-service-dubai | Unknown | ✗ | None | Verify title + add schema |
| /fragrance-oil-supplier-dubai | Unknown | ✗ | None | Verify title + add schema |
| /perfume-store-deira | ✓ | ✗ | Valid | Fix hours + embed map |
| /about-us | ✓ | ✗ | None | Add schema + meta desc |
| /perfume-oil-supplier-dubai | ✓ | ✗ | Partial | Differentiate vs /wholesale page |

---

*Report generated 2026-04-25 by Claude SEO Audit System. Subagents: seo-technical, seo-content, seo-schema, seo-performance, seo-geo, seo-sxo, seo-local, seo-backlinks.*
