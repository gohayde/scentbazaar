# ScentBazaar SEO Fix Prompt
Paste everything below this line into Claude Code from your local GitHub Pages project folder.

---

I have a static website hosted on GitHub Pages for https://scentbazaar.co/. The code is local and I push to GitHub to deploy. I need you to fix all SEO issues across the site systematically.

Start by exploring the project structure so you understand the codebase — find the HTML files, any templates or layouts, JSON-LD script blocks, and the robots.txt file. Then work through every fix below in order. Show me each change before applying it and flag anything you need my input on (like real image URLs or pricing).

---

## STEP 1 — Explore the codebase first

Before making any changes:
1. List all HTML files in the project
2. Find if there is a shared layout or template file that all pages inherit (e.g. _layouts/default.html, index.html, or a base template)
3. Find where the <head> section is defined — if it is in a shared layout, all meta tag fixes go there once and apply everywhere
4. Find all existing JSON-LD <script type="application/ld+json"> blocks
5. Find robots.txt
6. Tell me what you found before proceeding

---

## STEP 2 — Critical fixes (do these first)

### Fix 1: Add lang="en" to <html> tag
Find the root <html> tag (likely in the shared layout) and add lang="en":
```html
<html lang="en">
```

### Fix 2: Add canonical tag to every page
In the <head> of every page (or the shared layout using a template variable for the URL), add:
```html
<link rel="canonical" href="https://scentbazaar.co/{{ page.url }}">
```
If not using a template engine, add a hardcoded self-referencing canonical to each HTML file individually. The 18 pages and their canonical URLs:
- / → https://scentbazaar.co/
- /wholesale-perfume-oil-dubai → https://scentbazaar.co/wholesale-perfume-oil-dubai
- /bulk-fragrance-oil-uae → https://scentbazaar.co/bulk-fragrance-oil-uae
- /perfumers-alcohol-supplier-dubai → https://scentbazaar.co/perfumers-alcohol-supplier-dubai
- /perfume-bottle-supplier-dubai → https://scentbazaar.co/perfume-bottle-supplier-dubai
- /bakhoor-supplier-dubai → https://scentbazaar.co/bakhoor-supplier-dubai
- /diffuser-base-supplier-dubai → https://scentbazaar.co/diffuser-base-supplier-dubai
- /cosmetic-base-supplier-dubai → https://scentbazaar.co/cosmetic-base-supplier-dubai
- /private-label-perfume-dubai → https://scentbazaar.co/private-label-perfume-dubai
- /custom-perfume-blending-dubai → https://scentbazaar.co/custom-perfume-blending-dubai
- /perfume-filling-service-dubai → https://scentbazaar.co/perfume-filling-service-dubai
- /fragrance-oil-supplier-dubai → https://scentbazaar.co/fragrance-oil-supplier-dubai
- /perfume-base-supplier-uae → https://scentbazaar.co/perfume-base-supplier-uae
- /perfume-store-deira → https://scentbazaar.co/perfume-store-deira
- /candle-fragrance-oil-supplier-dubai → https://scentbazaar.co/candle-fragrance-oil-supplier-dubai
- /perfume-caps-spray-pumps → https://scentbazaar.co/perfume-caps-spray-pumps
- /privacy-policy → https://scentbazaar.co/privacy-policy
- /terms-of-service → https://scentbazaar.co/terms-of-service

### Fix 3: Add meta descriptions to every page
Add a unique <meta name="description"> to each page's <head>:
```html
<!-- homepage (/) -->
<meta name="description" content="Wholesale perfume oils, private label fragrances & perfumers alcohol in Dubai. 2,000+ scents. Serving 50+ countries. Visit Deira showroom or order online.">

<!-- /wholesale-perfume-oil-dubai -->
<meta name="description" content="Source 2,000+ premium fragrance oils at wholesale prices in Dubai. Flexible MOQs, IFRA-compliant, global shipping. Request samples from ScentBazaar.">

<!-- /private-label-perfume-dubai -->
<meta name="description" content="Launch your fragrance brand with ScentBazaar's private label service in Dubai. Custom formulation, filling & packaging. OEM manufacturing for UAE & global markets.">

<!-- /perfumers-alcohol-supplier-dubai -->
<meta name="description" content="Technical-grade perfumers alcohol supplied wholesale in Dubai. Cosmetic-grade ethanol for perfume blending. MSDS & CoA available. Global export.">

<!-- /bulk-fragrance-oil-uae -->
<meta name="description" content="Bulk fragrance oils for industrial and commercial use. Large-volume supply from Dubai with international logistics. MOQ negotiable. ScentBazaar UAE.">

<!-- /perfume-bottle-supplier-dubai -->
<meta name="description" content="Wholesale perfume bottles & packaging supplier in Dubai. Glass flacons, rollerballs, atomizers & caps. Low MOQs, export-ready. ScentBazaar Deira.">

<!-- /bakhoor-supplier-dubai -->
<meta name="description" content="Wholesale bakhoor & oud incense supplier in Dubai. Authentic Arabic Dukhoon, raw oud chips & resin for retailers and exporters. Ship worldwide.">

<!-- /diffuser-base-supplier-dubai -->
<meta name="description" content="Wholesale reed diffuser base supplier in Dubai. Dipropylene glycol & fragrance-ready carrier bases for private label diffuser brands.">

<!-- /cosmetic-base-supplier-dubai -->
<meta name="description" content="Wholesale cosmetic bases for lotion, cream & fragrance blending in Dubai. Unscented bases for private label cosmetics. ScentBazaar UAE.">

<!-- /custom-perfume-blending-dubai -->
<meta name="description" content="Custom perfume blending service in Dubai. Create bespoke signature scents for your brand. In-house perfumers, IFRA-compliant formulas.">

<!-- /perfume-filling-service-dubai -->
<meta name="description" content="Contract perfume filling & crimping service in Dubai. Automated bottle filling for private label brands. Wholesale quantities, fast turnaround.">

<!-- /fragrance-oil-supplier-dubai -->
<meta name="description" content="Premium fragrance oil supplier in Dubai with global export logistics. Aromatic oils for perfumery, cosmetics & home fragrance. 50+ countries served.">

<!-- /perfume-base-supplier-uae -->
<meta name="description" content="Wholesale perfume base supplier in UAE. Fixative and carrier bases for attar, spray perfume & roll-on manufacturing. B2B supply from Dubai.">

<!-- /perfume-store-deira -->
<meta name="description" content="Visit ScentBazaar's wholesale fragrance showroom in Deira, Dubai. Test 2,000+ scents in-store. Open Mon–Sat 9am–10pm. Souq Naif, Shop 47.">

<!-- /candle-fragrance-oil-supplier-dubai -->
<meta name="description" content="Bulk candle fragrance oil supplier in Dubai. High-flash-point scents engineered for wax binding. 100+ candle-specific fragrances. Wholesale MOQs.">

<!-- /perfume-caps-spray-pumps -->
<meta name="description" content="Wholesale perfume caps, spray pumps & atomizers supplier in Dubai. Zamac caps, magnetic closures & compatible spray mechanisms for glass flacons.">
```

### Fix 4: Fix multiple H1 on homepage
On the homepage (index.html or equivalent), find the two H1 tags. Keep the first one as H1. Change the second H1 to H2. It should look like:
```html
<h1>Dubai's Trusted Fragrance Supplier</h1>
<h2>Wholesale perfume oils, perfumers alcohol, fragrance bases, bottles, bakhoor...</h2>
```

### Fix 5: Fix AggregateRating schema on homepage
Find the JSON-LD block containing AggregateRating on the homepage. Update it to include all required fields:
```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "5",
  "bestRating": "5",
  "worstRating": "1",
  "ratingCount": "172",
  "reviewCount": "172"
}
```

### Fix 6: Fix openingHoursSpecification day names
In the Store/LocalBusiness JSON-LD, find the dayOfWeek values. Replace any abbreviated names with full English names:
```json
"openingHoursSpecification": [{
  "@type": "OpeningHoursSpecification",
  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
  "opens": "09:00",
  "closes": "22:00"
}]
```

### Fix 7: Fix Product schema on /perfumers-alcohol-supplier-dubai
Find the Product JSON-LD on this page. It is missing "image" and "offers" which are required for Google rich results. Add them:
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Perfumers Alcohol — Cosmetic Grade Ethanol",
  "description": "High-purity cosmetic grade perfumers alcohol supplied wholesale in Dubai. Suitable for perfume blending, attar making, and fragrance manufacturing.",
  "image": "REPLACE_WITH_ACTUAL_PRODUCT_IMAGE_URL",
  "brand": { "@type": "Brand", "name": "ScentBazaar" },
  "seller": { "@id": "https://scentbazaar.co/#store" },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "AED",
    "lowPrice": "REPLACE_WITH_LOW_PRICE",
    "highPrice": "REPLACE_WITH_HIGH_PRICE",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "ScentBazaar",
      "url": "https://scentbazaar.co/"
    }
  }
}
```
Flag the image URL and pricing values so I can fill them in.

---

## STEP 3 — Add Open Graph and Twitter Card tags to all pages

In the <head> of every page (ideally in the shared layout with page-specific values), add:
```html
<meta property="og:title" content="REPLACE_WITH_PAGE_TITLE">
<meta property="og:description" content="REPLACE_WITH_PAGE_META_DESCRIPTION">
<meta property="og:image" content="https://scentbazaar.co/og-image.jpg">
<meta property="og:url" content="https://scentbazaar.co/REPLACE_WITH_PAGE_PATH">
<meta property="og:type" content="website">
<meta property="og:site_name" content="ScentBazaar">
<meta property="og:locale" content="en_AE">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="REPLACE_WITH_PAGE_TITLE">
<meta name="twitter:description" content="REPLACE_WITH_PAGE_META_DESCRIPTION">
<meta name="twitter:image" content="https://scentbazaar.co/og-image.jpg">
```
Use the same description text from Fix 3 for each page. Use the page title tag value for og:title. Flag that I need to create an og-image.jpg (1200x630px branded image) and tell me where to put it.

---

## STEP 4 — Enrich Store schema on homepage

Find the Store or LocalBusiness JSON-LD block on the homepage. Add these missing properties to the existing block:
```json
"@id": "https://scentbazaar.co/#store",
"url": "https://scentbazaar.co/",
"priceRange": "AED 50 - AED 5000",
"currenciesAccepted": "AED",
"paymentAccepted": "Cash, Credit Card",
"image": "REPLACE_WITH_STOREFRONT_IMAGE_URL",
"sameAs": [
  "REPLACE_WITH_GOOGLE_MAPS_URL",
  "https://www.instagram.com/scentbazaar.co/",
  "https://www.facebook.com/p/Scent-Bazaar-61582093276601/",
  "https://www.tiktok.com/@scentbazaar",
  "https://www.youtube.com/channel/UC-hnINThr4WnqBOVbc4xcKw"
]
```
Flag the storefront image URL and Google Maps URL so I can fill them in.

---

## STEP 5 — Add new schema blocks to homepage

Add these as separate <script type="application/ld+json"> blocks in the homepage <head>:

WebSite schema:
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://scentbazaar.co/#website",
  "url": "https://scentbazaar.co/",
  "name": "ScentBazaar",
  "publisher": { "@id": "https://scentbazaar.co/#store" }
}
```

ItemList schema (enables product carousel in mobile SERPs):
```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "ScentBazaar Products and Services",
  "itemListElement": [
    {"@type":"ListItem","position":1,"name":"Wholesale Perfume Oil Dubai","url":"https://scentbazaar.co/wholesale-perfume-oil-dubai"},
    {"@type":"ListItem","position":2,"name":"Private Label Perfume Dubai","url":"https://scentbazaar.co/private-label-perfume-dubai"},
    {"@type":"ListItem","position":3,"name":"Perfumers Alcohol Supplier Dubai","url":"https://scentbazaar.co/perfumers-alcohol-supplier-dubai"},
    {"@type":"ListItem","position":4,"name":"Bakhoor Supplier Dubai","url":"https://scentbazaar.co/bakhoor-supplier-dubai"},
    {"@type":"ListItem","position":5,"name":"Perfume Store Deira Dubai","url":"https://scentbazaar.co/perfume-store-deira"}
  ]
}
```

---

## STEP 6 — Add areaServed to Service schema on product pages

On /wholesale-perfume-oil-dubai and /private-label-perfume-dubai, find the Service JSON-LD and add:
```json
"provider": { "@id": "https://scentbazaar.co/#store" },
"areaServed": [
  {"@type": "Country", "name": "United Arab Emirates"},
  {"@type": "Place", "name": "Gulf Cooperation Council"},
  {"@type": "Place", "name": "Worldwide"}
]
```

---

## STEP 7 — Fix all external links

Find every external link (WhatsApp, Google Maps, Instagram, TikTok, Facebook, YouTube). Every one must have:
```html
target="_blank" rel="noopener noreferrer"
```

---

## STEP 8 — Fix all images

Go through every HTML file and for every <img> tag:
1. Add explicit width="" and height="" attributes matching the image's actual rendered dimensions (prevents layout shift / CLS)
2. Add loading="lazy" to every image that is below the fold
3. Ensure every img has a descriptive alt="" attribute:
   - Logo: alt="ScentBazaar — Wholesale Fragrance Supplier Dubai"
   - Product images: describe what is shown + include relevant keywords
   - Decorative images with no meaning: alt=""
4. Add fetchpriority="high" and loading="eager" to the hero/above-fold image only

---

## STEP 9 — Fix hero LCP issue

Find the hero section. If the hero image is set via CSS background-image, convert it to an <img> tag:
```html
<img
  src="REPLACE_WITH_HERO_IMAGE_URL"
  fetchpriority="high"
  loading="eager"
  width="1920"
  height="1080"
  alt="ScentBazaar wholesale fragrance showroom Dubai"
>
```
Also add a preload hint as the first thing inside <head>:
```html
<link rel="preload" as="image" href="REPLACE_WITH_HERO_IMAGE_URL" fetchpriority="high">
```
Also add a preconnect for the CDN:
```html
<link rel="preconnect" href="https://assets.cdn.filesafe.space" crossorigin>
```

---

## STEP 10 — Replace WhatsApp widget script

Find the third-party WhatsApp widget/script. Remove it entirely. Replace with this plain HTML button (no external script needed — wa.me links require zero JavaScript):
```html
<a
  href="https://wa.me/971547727106"
  target="_blank"
  rel="noopener noreferrer"
  style="position:fixed;bottom:20px;right:20px;z-index:999;display:block;"
  aria-label="Chat with ScentBazaar on WhatsApp"
>
  <img src="/whatsapp-icon.webp" width="56" height="56" alt="Chat on WhatsApp">
</a>
```
Tell me if a whatsapp-icon.webp image exists in the project or if I need to provide one.

---

## STEP 11 — Add hreflang tags to all pages

In the <head> of every page add:
```html
<link rel="alternate" hreflang="en" href="https://scentbazaar.co/CURRENT_PAGE_PATH">
<link rel="alternate" hreflang="x-default" href="https://scentbazaar.co/CURRENT_PAGE_PATH">
```

---

## STEP 12 — Add "Supplier Quick Facts" block to homepage

Find the first content section below the hero on the homepage. Add this block before or at the start of that section as visible body text:
```html
<ul class="supplier-facts">
  <li>2,000+ perfume oils (French &amp; Arabic) in stock</li>
  <li>Located in Naif Souq, Deira, Dubai, UAE</li>
  <li>B2B wholesale supplier to 50+ countries</li>
  <li>Services: Wholesale supply, private label, contract filling, custom blending</li>
  <li>Compliance: IFRA-compliant, MSDS &amp; CoA available on request</li>
  <li>172 verified 5-star reviews from wholesale buyers</li>
  <li>Open Mon–Sat, 9am–10pm | WhatsApp: +971547727106</li>
</ul>
```

---

## STEP 13 — Add review count to body text on homepage

Find the reviews/testimonials section on the homepage. Add this sentence as visible body text (not just in schema — AI crawlers need to see it in plain text):
```html
<p>ScentBazaar has received 172 verified 5-star reviews from wholesale buyers and fragrance brands across 50+ countries.</p>
```

---

## STEP 14 — Create llms.txt

Create a new file at the project root: llms.txt
Content:
```
# Scent Bazaar

> Scent Bazaar is a B2B wholesale perfume oil and fragrance ingredient supplier
> based in Naif Souq, Deira, Dubai, UAE. The company supplies 2,000+ perfume oils,
> perfumers alcohol, fragrance bases, empty bottles, bakhoor, and offers private
> label and OEM fragrance manufacturing services. It exports to 50+ countries and
> holds 172 verified 5-star reviews.

## Key Pages

- [Wholesale Perfume Oils](https://scentbazaar.co/wholesale-perfume-oil-dubai): 2,000+ fragrance oils in bulk and wholesale quantities
- [Perfumers Alcohol](https://scentbazaar.co/perfumers-alcohol-supplier-dubai): Cosmetic-grade perfumers alcohol for UAE and international buyers
- [Private Label & OEM](https://scentbazaar.co/private-label-perfume-dubai): Custom fragrance manufacturing, labelling, and packaging for brands
- [Bakhoor & Arabic Incense](https://scentbazaar.co/bakhoor-supplier-dubai): Traditional Arabic bakhoor and oud-based incense wholesale
- [Perfume Store Deira](https://scentbazaar.co/perfume-store-deira): Physical showroom in Naif Souq, Deira — open Mon–Sat 9am–10pm
```

---

## STEP 15 — Update robots.txt

Open robots.txt and add these rules (keep any existing rules):
```
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Amazonbot
Allow: /
```

---

## STEP 16 — Verify and commit

After all fixes are done:
1. Run a final check — grep through all HTML files to confirm every page has: canonical tag, meta description, lang attribute, og:title, og:description
2. List any items you could not complete and why
3. Show me the git diff summary of all changed files
4. Tell me the exact git commands to commit and push

Do not push to GitHub yourself — show me the commands and I will run them after reviewing.
