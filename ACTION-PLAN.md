# ScentBazaar — SEO Action Plan

**Updated:** 2026-03-17
**Status:** Post-audit fixes applied. Remaining items below.

---

## CRITICAL (Fix within 48 hours)

### 1. Fix "Download Fragrance Safety Data" broken CTA
**File:** `candle-fragrance-oil-supplier-dubai.html`
**Issue:** Button links to `/fragrance-oil-supplier-dubai` instead of a downloadable document.
**Fix:** Either create an MSDS/IFRA PDF and link to it, or change the CTA text to "Learn About Our Export Services".

### 2. Add Google Search Console verification
**File:** `index.html` line 48
**Issue:** Verification meta tag is commented out with a placeholder.
**Fix:** Get real token from GSC, uncomment and populate.

### 3. Display the 172 Google reviews on-page
**File:** `index.html` and `perfume-store-deira.html`
**Issue:** AggregateRating schema claims 172 reviews / 5 stars but no reviews are visible to users. Google policy requires on-page display for rich results eligibility.
**Fix:** Add a Google Reviews embed widget, or manually add 10-15 testimonials with reviewer name, date, and star rating.

---

## HIGH (Fix within 1-2 weeks)

### 4. Create About Us page (`/about`)
**Issue:** Zero named authorship across entire site. Highest single E-E-A-T improvement available.
**Fix:** Create `about.html` with: founding year, founder name and brief bio, team section with named perfumers, company milestones, physical store photos. Add to footer and nav.

### 5. Convert hero background images to `<img>` elements
**Files:** All 16 content pages
**Issue:** Hero images loaded via CSS `::before background-image` cannot be discovered by the browser preload scanner. This is the largest remaining LCP improvement.
**Fix:** Replace CSS background hero with:
```html
<section class="seo-hero">
    <img src="HERO_IMAGE_URL" alt="..." fetchpriority="high" loading="eager"
         width="1920" height="1080" class="seo-hero-bg"
         style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;">
    <div class="container" style="position:relative;z-index:2;">...</div>
</section>
```
The `<link rel="preload">` tags already in each page head will then be consumed correctly.

### 6. Fix two title tags over 60 characters
**Files:**
- `perfume-bottle-supplier-dubai.html`: Change to "Perfume Bottle Supplier Dubai | Wholesale Packaging UAE" (55 chars)
- `private-label-perfume-dubai.html`: Change to "Private Label Perfume Dubai | Fragrance Manufacturing UAE" (58 chars)

### 7. Expand meta descriptions to 150-160 chars
**Files:** All 16 pages (currently 120-148 chars)
**Priority pages (shortest):**
- `fragrance-oil-supplier-dubai.html`: 120 chars — add "MSDS/COA included, shipping to 50+ countries"
- `custom-perfume-blending-dubai.html`: 128 chars — add "GC-MS analysis, IP ownership guaranteed, 5kg MOQ"

### 8. Fix hasMap to stable URL
**Files:** `index.html` and `perfume-store-deira.html`
**Fix:** Change `hasMap` value from `https://share.google/XxjlAsxA5FunmyKo4` to `https://www.google.com/maps?cid=14467776495573423409`

### 9. Fix direction:rtl CSS layout hack
**Files:** All 16 content pages
**Issue:** `direction: rtl` used on `.content-reverse` for column reversal — semantically incorrect, breaks RTL user agents in UAE Arabic market.
**Fix:** Replace with `flex-direction: row-reverse` or CSS Grid `order` properties.

---

## MEDIUM (Fix within 1 month)

### 10. Expand thin content pages
Three pages fail the 800-word minimum:
- `fragrance-oil-supplier-dubai.html` (~680 words): Add export documentation section (MSDS, COA, DG packing declaration) and named shipping corridors
- `diffuser-base-supplier-dubai.html` (~760 words): Expand room spray/linen mist section or add scent-to-base compatibility table
- `perfume-caps-spray-pumps.html` (~750 words): Add technical specification comparison table (FEA 15 vs FEA 20, crimp depth tolerances, material grades)

### 11. Convert CDN images from PNG to WebP
**Files:** All 16 content pages (18+ unique CDN images)
**Issue:** All images served as PNG — 60-75% size reduction available with WebP.
**Steps:**
1. Download all unique images from `assets.cdn.filesafe.space`
2. Convert to WebP using cwebp or squoosh
3. Re-upload to CDN or serve from local `/images/`
4. Wrap in `<picture>` with WebP + PNG fallback

### 12. Add srcset/responsive images
Once WebP versions exist, update all content `<img>` elements to use `srcset` and `sizes` for responsive delivery.

### 13. Differentiate near-duplicate page pairs
- `fragrance-oil-supplier-dubai.html` vs `wholesale-perfume-oil-dubai.html`: fragrance-oil = export/logistics only; wholesale = product catalog with scent names
- `perfume-bottle-supplier-dubai.html` vs `perfume-caps-spray-pumps.html`: caps page needs unique technical angle (FEA collar sizes, crimp tolerances, material grades table)

### 14. Implement IndexNow
Generate API key at https://www.bing.com/indexnow, place `{key}.txt` at domain root, submit URLs via API on content updates.

### 15. Add robots.txt Disallow for noindex pages
Add to robots.txt:
```
Disallow: /privacy-policy
Disallow: /terms-of-service
```

### 16. Add FAQ open attribute for AI crawlability
**Files:** All 16 pages with `<details>` FAQ elements
**Issue:** FAQ content is collapsed by default. Add `open` attribute to ensure content is in the DOM without JS execution.
```html
<details open>
```

### 17. Add question-based H2/H3 headings
Convert at least 2 headings per page to direct questions matching user intent. Example:
- "What Is the Minimum Order for Wholesale Perfume Oil?"
- "Which Countries Does ScentBazaar Export To?"
- "What Is the Flash Point of Candle Fragrance Oil?"

---

## LOW (Backlog / Ongoing)

### 18. Create blog / knowledge centre
Minimum 8 foundational articles targeting informational queries:
- "How to make attar perfume at home"
- "What is the difference between EDP, EDT, and Extrait de Parfum?"
- "Bakhoor vs. Oud: Understanding Arabic incense types"
- "How to start a private label perfume brand in the UAE"
- "Flash point in candle making: why it matters"
- "Reed diffuser vs. electric diffuser"
- "IFRA compliance explained for perfume brand owners"
- "How to read a fragrance MSDS sheet"

### 19. Add contact email to site
WhatsApp-only contact excludes international B2B buyers outside the Gulf. Add `info@scentbazaar.co` to footer and store page.

### 20. Build YouTube presence
YouTube mention correlates with AI citations at ~0.737 — strongest known signal. Create channel with product demos, fragrance guides, bakhoor unboxings, private label process walkthroughs.

### 21. Create Wikipedia entity
ScentBazaar qualifies (172 reviews, 50+ country export, established Deira location). Requires third-party press coverage first.

### 22. Add LinkedIn company page
B2B buyers expect LinkedIn presence. Add to llms-full.txt and all schema sameAs arrays.

### 23. Add Reddit presence
Create helpful (non-promotional) posts on r/DIYfragrance, r/Perfumes. Reddit mentions correlate with ChatGPT and Perplexity citations.

### 24. Add author bylines to service pages
Add named expert attribution to at minimum `custom-perfume-blending-dubai.html` and `private-label-perfume-dubai.html`. Include name, years experience, specialisation, and a brief quote.

### 25. Add last-updated dates to all pages
Insert `<time datetime="2026-03-17">Last updated: March 2026</time>` at bottom of main content on each page. Improves AI freshness signals.

### 26. Add Arabic language pages
Begin with index.html, wholesale, private-label, bakhoor, and store pages. Add `hreflang="ar"` tags. Arabic-speaking Gulf buyers are the highest-value segment.

### 27. Create scent catalog preview
Add a table or card grid showing at minimum 20-30 fragrance names, scent families, and applications on `wholesale-perfume-oil-dubai.html`. Makes "2,000+ oils" claim tangible.

### 28. Add individual Review schema entries
Add 2-3 individual `Review` schema entries to `perfume-store-deira.html` to support the AggregateRating claim with specific review text.

### 29. Delete unused local images
`/images/` folder contains 14 PNG files not referenced by any HTML page. Delete or begin using them.

### 30. Add per-page unique OG images
15 of 16 pages share the same OG image. Replace with page-specific photographs for better social sharing CTR.

---

## Score Targets

| Category | Current | Target (3 months) |
|---|---|---|
| Technical SEO | 68 | 85 |
| Content Quality | 52 | 72 |
| On-Page SEO | 59.5 | 78 |
| Schema | 65 | 88 |
| Performance (CWV) | 52 | 75 |
| Images | 40 | 78 |
| AI Search Readiness | 54 | 74 |
| **Overall** | **58** | **78** |

Items 1-9 (Critical + High priority) are estimated to move the overall score from 58 to approximately 68 within two weeks.
