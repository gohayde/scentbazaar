# SEO Action Plan — scentbazaar.co
**Generated:** 27 April 2026
**Overall Score:** 68/100

---

## CRITICAL — Fix Immediately (breaks trust/functionality)

### C1. Fix broken "Leave a Google Review" buttons on ALL pages
**Files:** All inner pages (14+ files)
**Issue:** Every CTA links to literal placeholder text `[REPLACE_WITH_GBP_REVIEW_URL]`
**Fix:** Replace every instance with:
`https://search.google.com/local/writereview?placeid=ChIJcWa6NWNDXz4RMVewZCY5-DQ`

### C2. Fix About page navigation
**File:** `about-us.html`
**Issue:** Page uses a bare `<nav>` with 6 plain links instead of the standard site header with dropdowns.
**Fix:** Replace with the same `.header` component used on all other pages.

### C3. Fix About page broken `<style>` block
**File:** `about-us.html`
**Issue:** CSS property values appear outside selectors — entire style block is invalid.
**Fix:** Audit lines 78–184 of `about-us.html` and rewrite with proper CSS selector/rule structure.

---

## HIGH — Fix Within 1 Week

### H1. Fix Google Fonts @import chain (LCP +300–600ms)
**File:** `fonts.css` + all HTML files
**Fix:**
1. Remove both `@import url('https://fonts.googleapis.com/...')` lines from `fonts.css`
2. Remove Outfit import entirely (marked legacy)
3. Add to `<head>` in every HTML file:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

### H2. Verify Google Search Console
**File:** `index.html:52`
**Issue:** GSC verification tag is commented out — no index coverage, link data, or manual action alerts.
**Fix:** Uncomment and fill in the real verification token, or verify via DNS TXT record.

### H3. Fix AggregateRating: set to 4.9 on all inner pages
**Files:** All inner pages
**Fix:** Change `"ratingValue": "5.0"` to `"ratingValue": "4.9"` in every inner page schema block. Visible copy must also say "162 verified Google reviews" not "100+".

### H4. Fix Store entity name on perfume-store-deira.html
**File:** `perfume-store-deira.html`
**Fix:** Change schema `name` from "Scent Bazaar — Perfume Store Deira Dubai" to `"Scent Bazaar"`.

### H5. Fix Friday hours inconsistency
**Files:** All pages with hours schema
**Fix:** Audit actual hours, then apply one consistent reopening time (2:00 PM or 1:30 PM) across all pages.

### H6. Fix inner-page Store @id duplication
**Files:** `fragrance-oil-supplier-dubai.html`, `about-us.html`, and other inner pages
**Fix:** Replace full inline Store blocks on inner pages with:
```json
{ "@type": "Store", "@id": "https://scentbazaar.co/#store" }
```

### H7. Fix malformed footer HTML
**Files:** `fragrance-oil-supplier-dubai.html`, `private-label-perfume-dubai.html`, `perfumers-alcohol-supplier-dubai.html`
**Fix:** Wrap each footer link in its own `<li>` element.

### H8. Add loading="lazy" to reviews iframe
**File:** `index.html`
**Fix:** Add `loading="lazy"` to the `reputationhub.site` `<iframe>`.

---

## MEDIUM — Fix Within 1 Month

### M1. Update visible review count copy from "100+" to "162"
### M2. Add Google Maps embed to perfume-store-deira.html (Place ID: ChIJcWa6NWNDXz4RMVewZCY5-DQ)
### M3. Strengthen homepage H1 to include primary keyword
### M4. Write unique meta descriptions for all 12+ pages sharing boilerplate text
### M5. Add Product + Offer schema to 5 key product pages
### M6. Fix Service provider @id references to use { "@id": "https://scentbazaar.co/#scentbazaar" }
### M7. Add serviceType to all Service schema blocks
### M8. Remove SearchAction from WebSite schema (no search functionality exists)
### M9. Add WebPage / AboutPage schema to every page
### M10. Fix breadcrumb label on fragrance-oil-supplier-dubai.html ("Global Export" → "Fragrance Oil Supplier Dubai")
### M11. Remove invalid dateModified from BreadcrumbList on perfumers-alcohol page
### M12. Remove changefreq and priority tags from sitemap.xml
### M13. Add https://reputationhub.site to CSP connect-src
### M14. Add email/RFQ form option to major landing pages (international buyers can't use WhatsApp)
### M15. Link the blog from main navigation (currently orphaned)

---

## LOW — Backlog

### L1. Add postal code (~22003) to all PostalAddress blocks
### L2. Reframe "Since 2025" in About page title — use founder experience, not company age
### L3. Create LinkedIn company page and add to sameAs schema
### L4. Add HowTo schema to private-label step-by-step section
### L5. Standardise IndexNow key approach — rely on root key file, remove page-level meta tags
### L6. Expand image sitemap from 8 to 21 pages
### L7. Update sitemap lastmod dates to real per-page modification dates
### L8. Fix closes: "23:59" to proper midnight representation in OpeningHoursSpecification
### L9. Align dateModified across Store and WebPage schema (currently 3 days apart)
### L10. Begin UAE directory citations: Kompass UAE → Dubai Chamber → UAE Yellow Pages → TradeIndia → Trustpilot
### L11. Add RSL 1.0 license block and per-page links to llms.txt
### L12. Add author byline to technical pages (perfumers-alcohol, fragrance-oil)
### L13. Create dedicated /free-samples page with a form instead of WhatsApp redirect

---

## Projected Score After Fixes

| Fix Group | Score Gain | Timeline |
|---|---|---|
| Critical (C1–C3) | +3–5 pts | Week 1 |
| High (H1–H8) | +8–12 pts | Week 1–2 |
| Medium (M1–M15) | +6–10 pts | Month 1 |
| Low (L1–L13) | +3–5 pts | Backlog |
| **Projected total** | **82–90/100** | **After 1 month** |
