# SEO Action Plan - scentbazaar.co

**Generated:** 2026-04-30  
**Starting score:** 78 / 100  
**30-day target:** 86 / 100

## Critical - Fix First

### C1. Fix HTTPS `www` Certificate Mismatch

**Impact:** Browser security error on `https://www.scentbazaar.co/`.  
**Owner:** DNS/CDN/domain setup.  
**Action:** Configure `www.scentbazaar.co` with a valid certificate and 301 redirect to `https://scentbazaar.co/`. If using GitHub Pages only, verify the `www` DNS record and GitHub Pages custom-domain/certificate setup. If using Cloudflare, proxy both apex and `www` and add a redirect rule.

### C2. Fix Blog JSON-LD Syntax

**File:** `blog/top-perfume-oil-suppliers-dubai/index.html`  
**Action:** Add the missing comma after `"name": "Top Perfume Oil Suppliers Dubai"` in the BreadcrumbList item.  
**Validation:** Re-run JSON-LD parse and Google's Rich Results Test.

### C3. Fix Blog Sitemap/Canonical URL Form

**Files:** `sitemap.xml`, `blog/top-perfume-oil-suppliers-dubai/index.html`  
**Action:** Choose one final URL form. Because live hosting redirects to the trailing slash, use `https://scentbazaar.co/blog/top-perfume-oil-suppliers-dubai/` in sitemap and canonical.

### C4. Reconcile Friday Hours

**Files:** `index.html`, `contact.html`, `perfume-store-deira.html`, `llms.txt`, any page footer/schema using hours.  
**Action:** Choose the real Friday reopening time and apply it everywhere. Current conflict: website says 2:00 PM reopening; `llms.txt` says 1:30 PM.

## High - Fix Within 1 Week

### H1. Optimize Large PNG Assets

**Files/assets:** `images/scent-library.png`, `images/hero-bg.png`, `images/service-bulk.png`, `images/service-private-label.png`, `images/service-custom.png`.  
**Action:** Convert to WebP/AVIF with sensible dimensions and update HTML references. Keep originals only if needed for source backup.

### H2. Replace Font `@import` Chain

**File:** `fonts.css` and page heads.  
**Action:** Remove Google Fonts `@import` lines. Add `preconnect` links and normal stylesheet links, or self-host the used fonts. Remove unused Outfit import.

### H3. Lazy Load Review Widget

**File:** `index.html`  
**Action:** Add `loading="lazy"` to the review iframe or replace it with a static review summary that loads the widget only on scroll.

### H4. Add Product/Offer Schema Where Safe

**Files:** key product pages such as wholesale perfume oils, perfumers alcohol, bakhoor, perfume bottles, diffuser/candle/cosmetic bases.  
**Action:** Add Product schema only where product category, availability, and offer details are accurate. Do not invent prices.

## Medium - Fix Within 30 Days

### M1. Add Response-Level Security Headers

GitHub Pages will not honor `_headers`. Add these through Cloudflare/Netlify or equivalent: `Content-Security-Policy`, `X-Content-Type-Options`, `Referrer-Policy`, and frame policy.

### M2. Add Store Map Embed

Add a lazy-loaded Google Maps embed to `/perfume-store-deira` with fixed dimensions to avoid layout shift.

### M3. Improve `llms.txt`

After hours are reconciled, add key page links and a clear license note if RSL 1.0 remains intended.

### M4. Add More Conversion Paths

For international B2B buyers, add an RFQ/email path alongside WhatsApp on high-intent pages.

### M5. Expand Image Sitemap

Ensure every key product/service page has at least one relevant image entry in `sitemap-images.xml`.

## Validation Checklist

1. `curl -I https://www.scentbazaar.co/` returns a valid certificate and 301 to apex.
2. All JSON-LD blocks parse with no errors.
3. `sitemap.xml` URLs return final `200` responses without redirects.
4. Friday hours match across visible copy, schema, and `llms.txt`.
5. Largest above-fold image is under a practical target size and served in WebP/AVIF.

