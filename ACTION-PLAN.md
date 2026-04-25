# SEO Action Plan — scentbazaar.co
**Generated:** 2026-04-25  
**Overall Score:** 61 / 100  
**Target Score (30 days):** 74 / 100  
**Target Score (90 days):** 82 / 100

---

## Priority Legend
- **CRITICAL** — Blocks indexing, causes ranking suppression, or active trust failures. Fix immediately (today/this week).
- **HIGH** — Significantly impacts rankings and conversion. Fix within 7 days.
- **MEDIUM** — Meaningful optimisation opportunity. Fix within 30 days.
- **LOW** — Nice to have. Backlog.

---

## CRITICAL — Fix Immediately

### C1. Fix trailing comma in homepage JSON-LD schema
**Impact:** Restores Store, Organization, Person, WebSite, and FAQPage structured data to Google's parser. Currently all of these are invisible to Google's rich results system and AI Overviews eligibility.  
**Effort:** 15 minutes  
**How:** Open the homepage source file, find the `FAQPage.mainEntity` JSON-LD array. Remove the trailing comma after the final `Question` object (before the closing `]`). Validate at https://search.google.com/test/rich-results  
**File:** Search for `mainEntity` in homepage HTML/template  
**Expected outcome:** FAQPage schema eligible for rich results; LocalBusiness, Organization, Person visible to Google

---

### C2. Fix or redirect `/blog/top-perfume-oil-suppliers-dubai`
**Impact:** Stops a sitewide 404 signal. Every page on the site currently contains a nav link to this non-existent URL — Googlebot logs a 404 on every page crawl, wasting crawl budget and presenting a broken user journey at the research stage.  
**Effort:** 10 minutes  
**How:** Either (a) 301-redirect this URL to `/wholesale-perfume-oil-dubai` as a near-match, or (b) create the buyer's guide page (see HIGH item H5 below). Until the page is built, the redirect is the fastest fix. Remove or update the nav link.  
**Expected outcome:** Eliminates sitewide 404; restores crawl budget; buyer journey no longer dead-ends

---

### C3. Write and deploy meta descriptions for all 18 pages
**Impact:** Currently zero meta descriptions exist sitewide. Google is auto-generating SERP snippets from body copy — uncontrolled and rarely optimal for CTR. Every competitor with a crafted description has a direct click-through advantage.  
**Effort:** 2–3 hours  
**How:** Write one 150–160 character meta description per page. Lead with the primary value proposition and include a soft CTA. Suggested templates:
- Homepage: `Dubai's wholesale perfume oil supplier — 2,000+ concentrated oils, 100ml MOQ, private label & custom blending. Ships to 50+ countries. Visit us in Deira.`
- /wholesale-perfume-oil-dubai: `Source wholesale perfume oils in Dubai — French & Arabic inspirations, single notes, industrial blends. 100ml MOQ, MSDS & COA standard. Request catalog.`
- /private-label-perfume-dubai: `Launch your own fragrance brand with Scent Bazaar's Dubai private label service. OEM filling, custom blending, 3–11 week turnaround. Consult our experts.`
- /perfume-store-deira: `Visit Scent Bazaar in Souq Naif, Deira — walk-in showroom with 2,000+ fragrance oils, on-site blending, and same-day wholesale orders. Mon–Sat 9am–10pm.`  
**Expected outcome:** Controlled SERP snippet; estimated CTR improvement 15–30%

---

### C4. Reconcile business hours across all four locations
**Impact:** Three different sets of hours appear on the site (homepage schema, store page, and FAQ). This is a direct trust failure per Google's Quality Rater Guidelines and suppresses GBP/local pack confidence.  
**Effort:** 30 minutes  
**Canonical hours:** Monday–Saturday 09:00–22:00, Sunday Closed  
**How:** Update all four locations to this single version:
1. Homepage JSON-LD Store schema `openingHoursSpecification`
2. `/perfume-store-deira` JSON-LD Store schema
3. The visible "Trading Hours" widget on the store page
4. The FAQ answer about store hours  
**Expected outcome:** Consistent hours; GBP trust signals restored; user confusion eliminated

---

## HIGH — Fix Within 7 Days

### H1. Fix hero image preload/source mismatch
**Impact:** LCP improvement estimated 200–500ms.  
**Effort:** 1 hour  
**How:** Align the three image references to use the same CDN WebP URL:
- `<link rel="preload" href="[CDN_WEBP_URL]" as="image" type="image/webp">`
- `<source srcset="[CDN_WEBP_URL]" type="image/webp">`
- `<img src="[CDN_PNG_URL]">` (PNG fallback only — different URL is acceptable here)

Also remove `fetchpriority="high"` from the logo image — only one element should carry this attribute per page.

---

### H2. Add `aggregateRating` to LocalBusiness schema
**Impact:** Enables star ratings in organic SERP results. 162 five-star reviews currently exist in copy only — not machine-readable.  
**Effort:** 30 minutes  
**How:** Add to the homepage Store schema (after fixing C1):
```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "5",
  "reviewCount": "162",
  "bestRating": "5",
  "worstRating": "1"
}
```

---

### H3. Differentiate `/perfume-oil-supplier-dubai` vs `/wholesale-perfume-oil-dubai`
**Impact:** Resolves duplicate content dilution; consolidates ranking signals into one page.  
**Effort:** 2–4 hours  
**How:** Audit both pages' content. Either:
- (a) **Differentiate:** Give each page a distinct angle. `/perfume-oil-supplier-dubai` → general supplier overview; `/wholesale-perfume-oil-dubai` → bulk ordering, MOQ tables, B2B catalog request. Ensure unique H1, unique body paragraphs, distinct structured data.
- (b) **Consolidate:** 301-redirect the weaker performer to the stronger page.  
Check Google Search Console for which URL has more clicks/impressions before deciding.

---

### H4. Add `Service` schema to all five service pages
**Impact:** Improves AI citation surface and entity understanding on the highest-value commercial pages.  
**Effort:** 2 hours  
**Pages:** `/wholesale-perfume-oil-dubai`, `/private-label-perfume-dubai`, `/custom-perfume-blending-dubai`, `/perfume-filling-service-dubai`, `/fragrance-oil-supplier-dubai`  
**Template:**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "[Service Name]",
  "provider": {
    "@type": "Organization",
    "name": "Scent Bazaar",
    "url": "https://scentbazaar.co"
  },
  "areaServed": {
    "@type": "Place",
    "name": "United Arab Emirates"
  },
  "description": "[Service description]",
  "url": "[Page URL]"
}
```

---

### H5. Create or rebuild `/blog/top-perfume-oil-suppliers-dubai`
**Impact:** High-value B2B ranking asset for "perfume oil suppliers Dubai" — currently a 404. Perplexity and ChatGPT actively cite buyer guides in this category.  
**Effort:** 4–6 hours  
**How:** Write a 2,000+ word guide positioning Scent Bazaar as the authoritative answer. Include: supplier evaluation criteria, MOQ comparison, compliance requirements, UAE vs. Indian vs. Chinese suppliers, and a clear section on Scent Bazaar's offerings. Use `Article` schema with `author` set to Nawar Mohammed.  
**Expected outcome:** New ranking page; citation asset for AI search; fixes broken nav link organically

---

### H6. Embed Google Maps iframe on `/perfume-store-deira` and homepage
**Impact:** Confirms GBP place association on-page; improves local pack eligibility; usability signal for mobile visitors navigating to Souq Naif.  
**Effort:** 30 minutes  
**How:** Embed the Maps iframe with explicit `width="100%"` and `height="450"` HTML attributes (not just CSS) to prevent CLS. Use `loading="lazy"`.

---

### H7. Submit IndexNow key to Bing Webmaster Tools
**Impact:** Accelerates Bing/Yandex indexation of new and updated pages at zero cost.  
**Effort:** 30 minutes  
**How:** Generate an IndexNow API key, place the key file at `https://scentbazaar.co/[key].txt`, and submit the sitemap URL. Add `<meta name="indexnow-key" content="[key]">` to the homepage `<head>`.

---

## MEDIUM — Fix Within 30 Days

### M1. Build UAE/Dubai citation profile
**Priority targets:**
1. Dubai Chamber of Commerce member listing
2. UAE Yellow Pages (uaeyp.com)
3. Dubizzle Business directory
4. Foursquare (feeds Apple Maps)
5. TripAdvisor — Souq Naif has tourist footfall
6. Waze place listing (high Dubai driver adoption)
7. Justdial UAE

Ensure NAP is identical across all citations: **Scent Bazaar | Shop No. 47, Souq Naif, 47 St, Naif - Deira - Dubai, United Arab Emirates | +971 54 772 7106 | Mon–Sat 09:00–22:00**

---

### M2. Improve llms.txt structure
**Current state:** llms.txt exists at `https://scentbazaar.co/llms.txt` — a genuine differentiator. Content is prose-only.  
**How to improve:**
```markdown
# Scent Bazaar

> B2B wholesale perfume oil and fragrance supplier based in Souq Naif, Deira, Dubai, UAE.  
> Founded 2025 by Nawar Mohammed (chemical engineer).

## Products
- 2,000+ concentrated fragrance oils (French inspirations, Arabic masterpieces, single notes)
- Perfumers alcohol (technical grade, various volumes)
- Perfume packaging (glass bottles, caps, spray pumps)
- Bakhoor (traditional Arabic incense)
- Candle fragrance oils, reed diffuser bases, cosmetic bases, perfume bases

## Services
- Wholesale distribution (100ml MOQ)
- Private label perfume manufacturing (3–11 week turnaround)
- Custom perfume blending
- Contract filling and crimping
- Global export and logistics (50+ countries served)

## Credentials
- 162 verified five-star Google reviews
- MSDS and COA provided as standard
- IFRA-compliant formulations available

## Licensing
RSL 1.0
```

---

### M3. Add RFQ/email inquiry form
**Impact:** Serves European, North American, and institutional buyers for whom WhatsApp-only conversion signals informality.  
**How:** Add a simple form (name, company, country, product interest, estimated volume) as a secondary CTA on the homepage and `/wholesale-perfume-oil-dubai`. Keep the WhatsApp CTA as primary for GCC buyers. Options: Netlify Forms, Formspree, or a simple mailto form.

---

### M4. Self-host or subset Google Fonts
**Impact:** CLS reduction (estimated -0.05–0.1); LCP improvement -100ms.  
**How:** Use `@font-face` with self-hosted `.woff2` files, or switch `DM Serif Display` headings to `font-display: optional` (no FOUT, no CLS). Consider using `system-ui` for the body text (Inter) to eliminate one font entirely.

---

### M5. Add pricing/MOQ transparency section to `/wholesale-perfume-oil-dubai`
**Impact:** Matches buyer decision-stage intent for this page; reduces cold WhatsApp friction; competitors showing price ranges are winning clicks from late-stage buyers.  
**How:** Add a section above the FAQ with a simple pricing structure table: volume tiers, per-unit price ranges, sample pricing, and minimum order quantities. Even ranges (e.g., "100ml–500ml from AED X per unit") help buyers self-qualify.

---

### M6. Add outcome-based social proof to `/private-label-perfume-dubai`
**Impact:** This SERP is dominated by manufacturers showing finished bottled products and named clients. Adding 3–5 case studies (anonymized or named, with permission) would materially improve conversion.  
**How:** Add a "Brands Launched" or "Success Stories" section with: client type (e.g., "Riyadh-based retailer"), project scope, timeline, and outcome. If client names cannot be disclosed, describe the business type and result.

---

### M7. Extend HSTS and add missing security headers
**Impact:** Marginal security improvement; trust signal for enterprise B2B buyers.  
**How:**
- Extend HSTS to `max-age=63072000; includeSubDomains`
- Add `X-Content-Type-Options: nosniff` header
- Add `X-Frame-Options: SAMEORIGIN` header
- Move Content-Security-Policy from `<meta>` tag to HTTP response header (requires CDN/server config — use Cloudflare if available)

---

### M8. Lazy-load or facade the reputationhub.site review widget
**Impact:** LCP improvement 100–300ms on mobile; reduces third-party connection on critical path.  
**How:** Replace the iframe with a static HTML placeholder showing review count and stars. Load the actual iframe only when the user scrolls to it (IntersectionObserver) or clicks "Show reviews". This eliminates the reputationhub TCP/TLS connection from the initial page load.

---

### M9. Add `BreadcrumbList` schema to homepage and product pages
**Impact:** Breadcrumb rich results in SERP; improved entity hierarchy signaling.  
**Effort:** 1 hour  
**How:** Add to homepage WebPage block:
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://scentbazaar.co/"
  }]
}
```

---

### M10. Build B2B backlinks via directories and marketplaces
**Priority targets in order:**
1. Alibaba.com supplier profile (free, high DA, real buyer traffic)
2. TradeKey.com listing
3. Made-in-UAE.com
4. ExportHub supplier listing
5. IFRA member directory submission (if eligible)

**Timeline:** 1 new citation/listing per week for 10 weeks.

---

## LOW — Backlog

### L1. Create Arabic-language content variant
Implement `hreflang="ar-AE"` for a UAE Arabic version. High opportunity for GCC buyer segment. Significant effort — plan for Q3 2026.

### L2. Extract inline CSS to external long-TTL stylesheet
HTML is 97.6 KB, ~60–70 KB of which is inline CSS. Moving to `styles.css` with `Cache-Control: max-age=31536000, immutable` would significantly improve repeat-visit LCP. High effort on GitHub Pages (limited server config control).

### L3. Add certifications/compliance documentation page
Create a `/compliance` or `/certifications` page listing MSDS availability, COA provision, IFRA compliance, halal certifications (if applicable). Builds E-E-A-T and serves European buyer due diligence requirements.

### L4. Create a case studies or client results page
`/case-studies` with 3–5 detailed B2B outcomes. Improves E-E-A-T, serves as a high-citation content asset, and addresses the most underserved buyer personas (European brands, export buyers).

### L5. Add Product schema to fragrance category pages
Once service schema is implemented (H4), extend to add `Product` schema on `/wholesale-perfume-oil-dubai` for specific oil categories — enables Perplexity and Bing Copilot product panel eligibility.

### L6. Implement review solicitation workflow
162 reviews is a strong base. Implement a systematic post-purchase/post-visit review request (WhatsApp message template → Google Maps link). Maintaining review velocity above the ~3-week freshness threshold keeps local pack rankings active.

### L7. Add `.well-known/ai-plugin.json` for ChatGPT plugin discovery
Low priority but zero-effort if combined with llms.txt work. Signals to OpenAI's web crawlers that the site supports AI integrations.

---

## 30-Day Score Projection

Completing all CRITICAL and HIGH items would move the SEO Health Score from **61 → ~76**:
- Technical SEO: 74 → 82 (fix blog 404, IndexNow, hero preload)
- Content Quality: 61 → 68 (meta descriptions, hours consistency)
- On-Page SEO: 58 → 70 (meta descriptions, internal linking fix)
- Schema: 52 → 72 (fix trailing comma, add aggregateRating, service schema)
- Performance: 67 → 73 (hero preload fix)
- AI Search Readiness: 61 → 68 (schema fix unlocks AIO eligibility)
- Images: 70 → 72 (minor improvements)

## 90-Day Score Projection

Completing all MEDIUM items additionally would move to **~83**:
- Local SEO: 47 → 65 (citations, GBP integration, hours, map embed)
- Backlinks: baseline → 20+ (directories + marketplaces)
- Content Quality: 68 → 75 (blog content, social proof, RFQ form)

---

*Action plan generated 2026-04-25. Re-audit recommended after completing all CRITICAL items.*
