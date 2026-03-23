# ScentBazaar SEO Action Plan
**Generated:** 2026-03-23 | **Overall Score: 66 / 100**
**See:** `FULL-AUDIT-REPORT.md` for detailed findings

---

## CRITICAL — Fix Immediately (Blocking ranking potential now)

### C1 — Add canonical tag to `/perfume-oil-supplier-dubai`
**File:** `perfume-oil-supplier-dubai.html` — add to `<head>` (around line 22)
```html
<link rel="canonical" href="https://scentbazaar.co/perfume-oil-supplier-dubai">
```
**Why:** This is the most important commercial page on the site and the only page missing a canonical. It competes for overlapping queries with `/fragrance-oil-supplier-dubai` and `/wholesale-perfume-oil-dubai`. Without a canonical, Google is making the consolidation decision on your behalf.

---

### C2 — Fix meta description on `/perfume-oil-supplier-dubai`
**File:** `perfume-oil-supplier-dubai.html`
**Current:** `"Perfume oil supplier in Dubai"` (29 characters — unusably short)
**Replace with:**
```html
<meta name="description" content="Wholesale perfume oil supplier in Dubai. 2,000+ concentrated French & Arabic oils, 100ml MOQ, MSDS/COA available. Serving 50+ countries. Visit our Deira showroom.">
```

---

### C3 — Fix factual contradiction on `/wholesale-perfume-oil-dubai`
**File:** `wholesale-perfume-oil-dubai.html` — find "over 15 years of experience"
**Issue:** "over 15 years of experience in fragrance chemistry" contradicts "established in 2025" on About page. Google Quality Raters are trained to flag this as a Trustworthiness failure.
**Fix:** Reframe: "Nawar brings over 15 years of personal expertise in fragrance chemistry to Scent Bazaar, founded in 2025."

---

### C4 — Remove fabricated testimonials on `/wholesale-perfume-oil-dubai`
**File:** `wholesale-perfume-oil-dubai.html`
**Action:** Remove the static testimonials ("Ahmed Al-Mansouri," etc.) and replace with the live Google Reviews widget used on every other page.
**Why:** Unverifiable testimonials are an explicit Trust deduction under the Sept 2025 QRG.

---

### C5 — Create `/privacy-policy` and `/terms-of-service` pages
**Why:** Both return 404. Both are linked from footer. `/terms-of-service` is referenced in `llms.txt`. Required for GDPR compliance and basic trust signals.

---

## HIGH — Fix Within 1 Week

### H1 — Fix the broken blog link on homepage
**File:** `index.html` — find `href="/blog/top-perfume-oil-suppliers-dubai"`
**Best option:** Create `blog/top-perfume-oil-suppliers-dubai.html` (removes broken link AND adds content). See Blog Brief at end of this document.

---

### H2 — Fix meta description on `/private-label-perfume-dubai`
**File:** `private-label-perfume-dubai.html`
**Current length:** 45 characters. **Target:** 140–160 characters.

---

### H3 — Shorten title on `/perfume-oil-supplier-dubai`
**Current:** 97 characters. **Suggested:** `Perfume Oil Supplier Dubai | Wholesale Attar & Concentrated Oils – Scent Bazaar`

---

### H4 — Fix three critical schema errors

**H4a — Remove deprecated `HowTo` schema (removed by Google Sept 2023)**
```
Files: private-label-perfume-dubai.html, custom-perfume-blending-dubai.html
Action: Delete the entire JSON-LD block where "@type": "HowTo"
```

**H4b — Add `@id` to `Store` on perfume-store-deira**
```
File: perfume-store-deira.html
Add: "@id": "https://scentbazaar.co/#store"  inside the Store JSON-LD block
```

**H4c — Fix invalid `organization` property on AboutPage**
```
File: about-us.html
Replace: "organization": {...}
With:    "about": {"@id": "https://scentbazaar.co/#scentbazaar"}
```

---

### H5 — Standardize telephone format across all pages
All pages should use E.164 format: `+971547727106` (no hyphens).
Affects the `telephone` property in all JSON-LD schema blocks.

---

### H6 — Standardize Instagram `sameAs` URL
Verify the correct handle (`scentbazaar.co` vs `scentbazaar`) and apply identically on every page.

---

### H7 — Remove WhatsApp and Google Maps CID from `sameAs`
**Files:** `index.html`, `perfume-store-deira.html`
Remove `https://wa.me/971547727106` and the Google Maps `cid` URL from `sameAs` arrays. Neither is a recognized social profile identifier.

---

### H8 — Add `sitemap-images.xml` to robots.txt
**File:** `robots.txt` — add one line:
```
Sitemap: https://scentbazaar.co/sitemap-images.xml
```

---

### H9 — Fix review widget iframe height on `/perfume-oil-supplier-dubai`
**File:** `perfume-oil-supplier-dubai.html` — find the reviews `<iframe>`
Add `height: 800px` to the iframe's inline style.
**Why:** Prevents significant CLS (layout shift) when the widget loads. Homepage already does this correctly.

---

### H10 — Add `defer` to review widget script on `/perfume-oil-supplier-dubai`
**File:** `perfume-oil-supplier-dubai.html`
```html
<!-- Change this: -->
<script type='text/javascript' src='https://reputationhub.site/reputation/assets/review-widget.js'>
<!-- To this: -->
<script defer type='text/javascript' src='https://reputationhub.site/reputation/assets/review-widget.js'>
```

---

### H11 — Resolve founder pronoun inconsistency
**Files:** `about-us.html`, `perfume-oil-supplier-dubai.html`
Founder "Nawar" is "she" on the supplier page, "he" in the About profile block. Pick one and apply consistently.

---

### H12 — Fix llms.txt
**File:** `llms.txt`
1. Fix rating: `5.0 stars` → `4.9/5` (to match schema)
2. Update `license:` once terms-of-service page is created
3. Add `## Contact` section with WhatsApp number

---

## MEDIUM — Fix Within 30 Days

### M1 — Add real founder photograph
**Files:** `about-us.html`, `wholesale-perfume-oil-dubai.html`
Replace the CSS gradient placeholder with an actual photo.
**Why:** Single highest-ROI E-E-A-T improvement. Founder credibility claims are undermined by an anonymous CSS circle.

---

### M2 — Add `preconnect` hint for review widget origin
**All pages with widget** — add to `<head>`:
```html
<link rel="preconnect" href="https://reputationhub.site">
```

---

### M3 — Expand or consolidate `/fragrance-oil-supplier-dubai`
~750–900 words, heavy overlap with the supplier and wholesale pages.
- **Option A (recommended):** Expand to 2,000+ words with genuinely distinct content: industrial fragrance, cosmetic applications, candle/diffuser use cases
- **Option B:** Add canonical pointing to `/perfume-oil-supplier-dubai`

---

### M4 — Add `Product` + `AggregateOffer` + `AggregateRating` schema to key pages
**Files:** `wholesale-perfume-oil-dubai.html`, `perfumers-alcohol-supplier-dubai.html`, `perfume-bottle-supplier-dubai.html`
Enables Product rich results (price display, star ratings) in Google SERP.

---

### M5 — Fix `Offer` missing `price` on bakhoor page
**File:** `bakhoor-supplier-dubai.html`
Add `lowPrice`/`highPrice` to make the Product block eligible for Google Product rich results.

---

### M6 — Add `@id` to all `Service` nodes
**All service pages** — add `"@id": "https://scentbazaar.co/[slug]#service"` to each Service entity.

---

### M7 — Add `sameAs` and credential link to `Person` schema
**File:** `about-us.html`
Add founder LinkedIn URL to `sameAs`. Change `"affiliation"` → `"worksFor"`.

---

### M8 — Add `dateModified` to all major pages
**All pages** — add `"dateModified": "2026-03-23"` to the existing schema blocks.
`about-us.html` is the only page with this field — replicate the pattern everywhere.

---

### M9 — Add static "about" paragraph to homepage
**File:** `index.html` — near top of body, before service grid
Third-person, encyclopedic-style paragraph answering "What is ScentBazaar?" for AI extraction:

> *Scent Bazaar is a B2B wholesale fragrance supplier based in Souq Naif, Deira, Dubai, UAE. The company stocks 2,000+ concentrated perfume oils including French designer-inspired accords, Arabic oud, mukhallat, and aroma chemicals, and supplies wholesale buyers across 50+ countries with a minimum order of 100ml per fragrance. Services include private label manufacturing, custom blending, perfume filling, and export documentation.*

---

### M10 — Link orphaned pages from homepage navigation
**File:** `index.html` — add footer or nav links to:
- `/cosmetic-base-supplier-dubai`
- `/perfume-base-supplier-uae`
- `/candle-fragrance-oil-supplier-dubai`
- `/perfume-caps-spray-pumps`

These pages receive no internal link equity.

---

### M11 — Update sitemap lastmod dates
**File:** `sitemap.xml`
14 pages share the same date `2026-03-18`. Update each to the page's actual last modification date.

---

## LOW — Backlog

### L1 — Add technical specs to thin product pages
- Candle: fragrance load %, flash points
- Diffuser: DPG dilution ratios
- Cosmetic: INCI names, pH, viscosity

### L2 — Add external citations for statistics
**File:** `perfume-oil-supplier-dubai.html`
Link market size data and fragrance preference percentages to source (Grand View Research, Statista).

### L3 — Convert service card hover descriptions to static HTML
**File:** `index.html` — descriptions in `opacity: 0` CSS may not be fully indexed.

### L4 — Trim Google Fonts weights
Remove unused `font-weight: 300` from Google Fonts URL (saves ~15–20KB).

### L5 — Add `BreadcrumbList` schema to any pages missing it

### L6 — Pursue Wikidata entity
Scent Bazaar meets Wikidata notability criteria. A Wikidata entry with `sameAs` in Organization schema is the highest-ceiling action for ChatGPT/Perplexity visibility.

### L7 — Convert hero image to WebP + add `srcset`
Hero PNG → WebP (50–80% size reduction). Add `srcset` for 768px and 1440px breakpoints.

---

## Blog Content Brief

### Priority 1: `/blog/top-perfume-oil-suppliers-dubai`
This URL is **directly linked from the homepage right now and returns 404**. Create this first.

**Suggested article:** "Top Perfume Oil Suppliers in Dubai: A Buyer's Guide (2026)"
- Word count: 1,500–2,000 words
- Voice: Third-person, informational (not purely promotional)
- H2 structure (phrased as questions):
  - "What should you look for in a perfume oil supplier in Dubai?"
  - "What types of suppliers operate in Dubai's fragrance market?"
  - "How do you evaluate fragrance oil quality before ordering?"
  - "What is the typical minimum order quantity from Dubai suppliers?"
  - "Frequently Asked Questions"
- Internal links: `/perfume-oil-supplier-dubai`, `/wholesale-perfume-oil-dubai`, `/private-label-perfume-dubai`
- Schema: `BlogPosting` with `datePublished`, `author` (Nawar), `publisher: #scentbazaar`

### Future Blog Priorities
1. "How to Start a Private Label Perfume Brand in Dubai" (high buyer intent)
2. "Concentrated Perfume Oil vs Eau de Parfum: The Real Difference" (AI Overview target)
3. "How to Import Fragrance Oils from Dubai: Documentation Guide" (low competition, high intent)
4. "What is Oud? Complete Guide for Fragrance Buyers" (entity authority)
5. "MOQ Guide: How Much Fragrance Oil Do You Need to Start?" (removes buyer anxiety)

---

## Summary Scorecard

| Area | Current Score | Primary Fix |
|------|--------------|-------------|
| Technical | 68/100 | C1: Add canonical to `/perfume-oil-supplier-dubai` |
| Content/E-E-A-T | 64/100 | C3+C4: Fix testimonials + contradiction |
| On-Page | 65/100 | C2: Fix 29-char meta description |
| Schema | 72/100 | H4: Remove HowTo, fix Store @id, fix AboutPage |
| Performance | 63/100 | H9+H10: Fix iframe height + defer script |
| Images | 78/100 | L7: Convert hero PNG to WebP |
| GEO/AI | 58/100 | H1: Fix blog, M9: Add extractable hero paragraph |
| **Overall** | **66/100** | |

**Estimated score after Critical + High fixes: ~76–78 / 100**
