# Local SEO: Code Changes Prompt to Hit 100/100
**For: scentbazaar.co | Generated: 2026-04-25**

---

> **HOW TO USE THIS PROMPT**
> Copy everything between the triple-dashes below and paste it to your AI coding assistant (Claude, Cursor, GitHub Copilot, etc.) in the context of your website project. The assistant will make all code changes. At the very bottom of this document is a separate **MANUAL TASKS** section that you must action yourself outside of code.

---

## INFORMATION I NEED FROM YOU FIRST (answer before applying)

Before the assistant can fill in certain values, answer these questions:

1. **Your exact Google Business Profile listing URL** — Log into business.google.com, go to your listing, click "Share profile", copy the URL. It looks like: `https://g.page/r/XXXXXXXXXX/review` or `https://maps.google.com/?cid=XXXXXXXXXX`. This is needed for review links.

2. **Your exact GBP "Website" field URL** — Log into business.google.com → Info → Website. What URL is currently set there? (This tells us if the Sterling Sky Diversity risk applies.)

3. **Your current real Google review count and rating today** — Log into GBP or check Google Maps. The schema currently says 162 reviews at 4.9★. Is this still accurate, or has it changed?

4. **Your Google Maps Place ID** — Go to `https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder`, search "Scent Bazaar Deira", copy the Place ID (looks like `ChIJ...`). This is needed for the Maps embed iframe.

5. **Do you want a WhatsApp inquiry form or a standard HTML contact form on the new `/contact` page?** (WhatsApp is simpler, HTML form needs a backend or Formspree account.)

6. **Formspree endpoint (if you want HTML form)** — Sign up at formspree.io, create a form, copy your endpoint URL like `https://formspree.io/f/XXXXXXXX`.

Once you have the answers, replace every `[REPLACE_WITH_YOUR_VALUE]` placeholder in the instructions below.

---

---

# === MEGA CODE CHANGE PROMPT — PASTE TO YOUR AI ASSISTANT ===

---

You are working on the Scent Bazaar website (scentbazaar.co), a wholesale perfume oil supplier physically located at Shop No. 47, Souq Naif, 47 St, Naif, Deira, Dubai, UAE. The site has 19 HTML pages as standalone files in the root directory, plus `blog/top-perfume-oil-suppliers-dubai/index.html`.

You need to make the following **12 precise code changes** to maximise Local SEO score. Make every change exactly as described. Do not change anything else — no refactoring, no style changes, no content changes, unless explicitly stated.

---

## CHANGE 1 — Create a new `/contact` page
**File to create:** `contact.html` in the root directory.

Create a full contact page. Model the `<head>`, header navigation, footer, and WhatsApp floating button by copying them exactly from `index.html`. Then replace the main body content with the following structure:

```html
<!-- Page-specific head tags (insert inside <head> after existing meta tags) -->
<title>Contact Scent Bazaar | Wholesale Fragrance Supplier Dubai</title>
<meta name="description" content="Contact Scent Bazaar in Souq Naif, Deira, Dubai. Visit our showroom, call +971 54 772 7106, or WhatsApp us for wholesale perfume oil inquiries, bulk orders, and private label consultations.">
<link rel="canonical" href="https://scentbazaar.co/contact">
<meta property="og:title" content="Contact Scent Bazaar | Wholesale Fragrance Supplier Dubai">
<meta property="og:description" content="Visit our Deira showroom or contact us via phone, WhatsApp, or email. Open Sat–Thu 8:30am–12am.">
<meta property="og:url" content="https://scentbazaar.co/contact">
```

**Main body content:**
```html
<main>
  <!-- HERO -->
  <section style="background:#f9f5f0;padding:60px 20px 40px;text-align:center;">
    <div style="max-width:700px;margin:0 auto;">
      <h1 style="font-size:2.2rem;font-weight:700;margin-bottom:16px;">Contact Scent Bazaar</h1>
      <p style="font-size:1.1rem;color:#555;line-height:1.7;">
        Visit our wholesale showroom in Souq Naif, Deira, or reach us via phone, WhatsApp, or email.
        We're open Sat–Thu 8:30am–12am and Friday 8:30am–12pm &amp; 2pm–12am.
      </p>
    </div>
  </section>

  <!-- CONTACT GRID -->
  <section style="padding:60px 20px;max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:40px;">
    
    <!-- LEFT: Contact Details -->
    <div>
      <h2 style="font-size:1.5rem;margin-bottom:24px;">Get In Touch</h2>

      <div style="margin-bottom:20px;">
        <strong>Address</strong>
        <p style="margin:6px 0;color:#555;line-height:1.6;">
          Shop No. 47, Souq Naif, 47 St, Naif<br>
          Deira, Dubai, United Arab Emirates
        </p>
        <a href="https://maps.app.goo.gl/emgwseVFB3m66nuW8" target="_blank" rel="noopener noreferrer"
           style="color:#ff4700;font-weight:600;text-decoration:none;">Get Directions →</a>
      </div>

      <div style="margin-bottom:20px;">
        <strong>Phone / WhatsApp</strong>
        <p style="margin:6px 0;">
          <a href="tel:+971547727106" style="color:#ff4700;font-weight:600;text-decoration:none;font-size:1.1rem;">
            +971 54 772 7106
          </a>
        </p>
      </div>

      <div style="margin-bottom:20px;">
        <strong>Email</strong>
        <p style="margin:6px 0;">
          <a href="mailto:info@scentbazaar.co" style="color:#ff4700;font-weight:600;text-decoration:none;">
            info@scentbazaar.co
          </a>
        </p>
      </div>

      <div style="margin-bottom:20px;">
        <strong>Business Hours</strong>
        <table style="margin-top:8px;border-collapse:collapse;width:100%;">
          <tr><td style="padding:4px 0;color:#555;">Saturday – Thursday</td><td style="padding:4px 16px;color:#333;font-weight:600;">8:30 AM – 12:00 AM</td></tr>
          <tr><td style="padding:4px 0;color:#555;">Friday</td><td style="padding:4px 16px;color:#333;font-weight:600;">8:30 AM – 12:00 PM<br>2:00 PM – 12:00 AM</td></tr>
        </table>
      </div>

      <div style="margin-top:28px;">
        <a href="https://wa.me/971547727106?text=Hi%20Scent%20Bazaar%2C%20I%27d%20like%20to%20make%20an%20inquiry"
           target="_blank" rel="noopener noreferrer"
           style="display:inline-block;background:#25d366;color:#fff;padding:14px 28px;border-radius:8px;font-weight:700;text-decoration:none;font-size:1rem;">
          💬 WhatsApp Us Now
        </a>
      </div>

      <!-- Google Review Link -->
      <div style="margin-top:20px;">
        <a href="[REPLACE_WITH_YOUR_GBP_REVIEW_URL]"
           target="_blank" rel="noopener noreferrer"
           style="display:inline-block;background:#fff;border:2px solid #4285f4;color:#4285f4;padding:12px 24px;border-radius:8px;font-weight:600;text-decoration:none;">
          ⭐ Leave Us a Google Review
        </a>
      </div>
    </div>

    <!-- RIGHT: Map Embed -->
    <div>
      <h2 style="font-size:1.5rem;margin-bottom:24px;">Find Our Showroom</h2>
      <iframe
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY&q=place_id:[REPLACE_WITH_YOUR_PLACE_ID]"
        width="100%"
        height="400"
        style="border:0;border-radius:12px;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Scent Bazaar location map — Shop No. 47 Souq Naif Deira Dubai">
      </iframe>
      <!-- NOTE: If you do not have a Maps API key, use this simpler embed instead: -->
      <!-- <iframe src="https://maps.google.com/maps?q=Shop+No+47+Souq+Naif+Deira+Dubai&output=embed" width="100%" height="400" style="border:0;border-radius:12px;" allowfullscreen="" loading="lazy"></iframe> -->
      <p style="margin-top:12px;font-size:0.9rem;color:#777;">Near Baniyas Square Metro Station (Red Line). Street parking available in the Naif area.</p>
    </div>
  </section>
</main>
```

**Add this JSON-LD schema inside `<head>` of contact.html:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Store",
  "@id": "https://scentbazaar.co/contact#store",
  "name": "Scent Bazaar",
  "url": "https://scentbazaar.co/contact",
  "telephone": "+971547727106",
  "email": "info@scentbazaar.co",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shop No. 47, Souq Naif, 47 St, Naif",
    "addressLocality": "Deira",
    "addressRegion": "Dubai",
    "addressCountry": "AE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 25.271353343018788,
    "longitude": 55.30489217394019
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday"],
      "opens": "08:30",
      "closes": "23:59"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Friday"],
      "opens": "08:30",
      "closes": "12:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Friday"],
      "opens": "14:00",
      "closes": "23:59"
    }
  ],
  "hasMap": "https://maps.app.goo.gl/emgwseVFB3m66nuW8",
  "parentOrganization": { "@id": "https://scentbazaar.co/#scentbazaar" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://scentbazaar.co/" },
      { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://scentbazaar.co/contact" }
    ]
  }
}
</script>
```

**Also add `contact.html` to the sitemap.xml** — insert this entry inside the `<urlset>` element:
```xml
<url>
  <loc>https://scentbazaar.co/contact</loc>
  <lastmod>2026-04-25</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

**Also add a "Contact" link to the navigation on every page** — In every HTML file, find the `<nav class="nav" id="nav">` element. After the last `<a>` link in the nav (before the closing `</nav>`), add:
```html
<a href="/contact">Contact</a>
```
Do this in all 19 HTML files and the blog post.

---

## CHANGE 2 — Add Google Maps embed to homepage (index.html)

**File:** `index.html`

Find the section on the homepage that shows the address/directions (around line 1094 where "Shop No. 47, Souq Naif" appears in the visible page content). Immediately after the closing `</div>` of that address/timing/phone block, insert:

```html
<!-- Google Maps Embed -->
<div style="margin-top:32px;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);">
  <iframe
    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY&q=place_id:[REPLACE_WITH_YOUR_PLACE_ID]"
    width="100%"
    height="350"
    style="border:0;display:block;"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    title="Scent Bazaar — Shop No. 47, Souq Naif, Deira, Dubai">
  </iframe>
  <!-- Simpler fallback (no API key needed): -->
  <!-- <iframe src="https://maps.google.com/maps?q=Shop+47+Souq+Naif+Deira+Dubai&output=embed" width="100%" height="350" style="border:0;display:block;" allowfullscreen="" loading="lazy"></iframe> -->
</div>
```

**Also update the Content-Security-Policy `frame-src` directive in `index.html`** — The current CSP in the `<meta>` tag at line 18 reads:
```
frame-src https://www.google.com https://reputationhub.site;
```
This already allows `https://www.google.com` so the embed will work. No change needed IF you use the `maps.google.com` or `google.com/maps/embed` domain. If you use the Maps Embed API (`maps.googleapis.com`), also add `https://maps.googleapis.com` to `frame-src` in the CSP meta tag.

---

## CHANGE 3 — Standardise footer phone number display across ALL pages

**Files:** All 19 `.html` files in the root directory + `blog/top-perfume-oil-suppliers-dubai/index.html`

In every file, find the footer phone number display. It currently appears as:
```html
<a href="tel:+971547727106" style="color:#ccc; text-decoration: none; font-weight: 600;">+971 54 772 7106</a>
```

The display text `+971 54 772 7106` (spaced) is fine for human readability — **do not change it**. The `href="tel:+971547727106"` (compact) is correct and already matches the schema. This is actually already consistent.

However, also find any other instances of the phone number displayed as text WITHOUT a `tel:` link and wrap them. Search every file for plain text `+971 54 772 7106` or `+971547727106` that is NOT already inside an `<a href="tel:...">` tag and wrap it:
```html
<a href="tel:+971547727106" style="color:inherit;text-decoration:none;">+971 54 772 7106</a>
```

---

## CHANGE 4 — Add a "Leave us a Google Review" CTA to every page footer

**Files:** All 19 `.html` files in the root directory.

In every file, find the `<div class="footer-bottom">` section. Inside it, just before the copyright line `<p>© 2026 Scent Bazaar...`, add:

```html
<div style="margin-bottom:16px;text-align:center;">
  <a href="[REPLACE_WITH_YOUR_GBP_REVIEW_URL]"
     target="_blank"
     rel="noopener noreferrer"
     style="display:inline-block;background:transparent;border:1px solid rgba(255,255,255,0.3);color:#fff;padding:10px 22px;border-radius:6px;font-size:0.85rem;text-decoration:none;font-weight:500;transition:background 0.2s;">
    ⭐ Leave us a Google Review
  </a>
</div>
```

**Why:** This creates a persistent, policy-compliant review generation mechanism. It does NOT pre-screen satisfaction (which would violate Google's fake engagement policy and FTC rules). Anyone clicking it goes directly to Google to leave a review.

---

## CHANGE 5 — Fix NAP address punctuation consistency in footer across ALL pages

**Files:** All 19 `.html` files in root directory + blog post.

Find the footer address block. In some files it reads `Naif - Deira - Dubai` (dashes) and in the schema it reads `Naif, Deira, Dubai` (commas). Standardise the visible HTML footer text to match the schema format. Find:
```
Naif - Deira - Dubai
```
And replace with:
```
Naif, Deira, Dubai
```

Also check the `index.html` footer around line 1283: `Deira - Dubai - United Arab Emirates` — change the dashes to commas to match schema format. The exact text to find in `index.html` is:
```
Deira - Dubai - United Arab Emirates
```
Replace with:
```
Deira, Dubai, United Arab Emirates
```

---

## CHANGE 6 — Add `aggregateRating` schema to ALL service pages that are missing it

**Files:** Check each of these files. The ones that currently have `aggregateRating` in their schema: `index.html` and `perfume-store-deira.html`. ALL other pages need it added to their LocalBusiness/Store schema block.

For each of the following files, open the first `<script type="application/ld+json">` block, find the LocalBusiness or Store object, and add this property if it is missing:

```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": 4.9,
  "reviewCount": [REPLACE_WITH_CURRENT_REVIEW_COUNT],
  "bestRating": 5,
  "worstRating": 1
},
```

Add this to:
- `wholesale-perfume-oil-dubai.html`
- `bulk-fragrance-oil-uae.html`
- `perfumers-alcohol-supplier-dubai.html`
- `perfume-bottle-supplier-dubai.html`
- `bakhoor-supplier-dubai.html`
- `diffuser-base-supplier-dubai.html`
- `cosmetic-base-supplier-dubai.html`
- `private-label-perfume-dubai.html`
- `custom-perfume-blending-dubai.html`
- `fragrance-oil-supplier-dubai.html`
- `perfume-filling-service-dubai.html`
- `perfume-base-supplier-uae.html`
- `candle-fragrance-oil-supplier-dubai.html`
- `perfume-caps-spray-pumps.html`
- `perfume-oil-supplier-dubai.html`
- `about-us.html`
- `blog/top-perfume-oil-suppliers-dubai/index.html`

Place the `aggregateRating` property inside the LocalBusiness/Store `@type` object, after the `"telephone"` property. Make sure to add a comma correctly — the JSON must remain valid.

---

## CHANGE 7 — Add `sameAs` array to ALL pages that are missing it

**Files:** Same list as Change 6.

For each LocalBusiness/Store schema object that does NOT already have `"sameAs"`, add:

```json
"sameAs": [
  "https://www.instagram.com/scentbazaar/",
  "https://www.facebook.com/p/Scent-Bazaar-61582093276601/",
  "https://www.tiktok.com/@scentbazaar",
  "https://www.youtube.com/@scentbazaar"
],
```

Add it after the `aggregateRating` block. This helps Google's entity graph understand that all these pages refer to the same business.

---

## CHANGE 8 — Add a Google Maps embed to `perfume-store-deira.html`

**File:** `perfume-store-deira.html`

The page already has a `gmpx-store-locator` component (Google Maps Platform Extended). However, this component requires JavaScript to load and may not render for crawlers or users with JS disabled. Add a static fallback iframe ABOVE the `gmpx-store-locator` component.

Find the line containing `<gmpx-store-locator` and immediately before it insert:

```html
<!-- Static Maps embed for crawlers and non-JS users -->
<iframe
  src="https://maps.google.com/maps?q=Shop+47+Souq+Naif+Deira+Dubai&output=embed"
  width="100%"
  height="400"
  style="border:0;border-radius:12px;display:block;margin-bottom:20px;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  title="Scent Bazaar Perfume Store — Souq Naif, Deira, Dubai">
</iframe>
```

---

## CHANGE 9 — Add visible business hours to every service page

**Files:** All service pages that currently do NOT have visible business hours in the page body (not the footer). Check each file by searching for "8:30" or "Sat-Thu". If a service page body content does not show the hours, add a small hours notice to the footer address block.

In every footer, find the address `<ul>` or `<li>` section that shows the address and phone. After the phone `<li>`, add:

```html
<li style="display: flex; align-items: flex-start; gap: 15px; margin-top: 8px;">
  <span style="color:var(--accent);margin-top:2px;">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  </span>
  <span style="color: #ccc; line-height: 1.6; font-size: 0.9rem;">
    Sat–Thu: 8:30am – 12am<br>
    Fri: 8:30am–12pm &amp; 2pm–12am
  </span>
</li>
```

Only add this if the footer does NOT already contain business hours text. Check `index.html` — it already has hours in the page body at line 1095, so you only need to add to service pages that are missing it.

---

## CHANGE 10 — Add internal links to `/contact` page from all major pages

**Files:** `index.html`, `perfume-store-deira.html`, `about-us.html`, and the 3 highest-traffic service pages: `wholesale-perfume-oil-dubai.html`, `private-label-perfume-dubai.html`, `fragrance-oil-supplier-dubai.html`.

In each of these pages, find the main CTA section or the "Get in Touch" / "Contact Us" type section near the bottom of the page content. Add or update any "Contact" links to use the new `/contact` page URL:

```html
<a href="/contact" class="btn btn-secondary">Visit Our Showroom →</a>
```

Also, in the footer of every page, add a "Contact" link to the footer navigation links section (near Privacy Policy and Terms of Service):
```html
<a href="/contact" style="color:inherit;text-decoration:none;">Contact</a>
```

---

## CHANGE 11 — Add structured `Review` markup to homepage (individual review snippets)

**File:** `index.html`

The homepage already has 3 review cards displayed visually. Find the reviews section HTML (look for `.review-card` or similar class, around line 1240+ based on the CSS). For each of the 3 review cards shown, wrap the section containing all 3 reviews in a `Review` schema. Add this JSON-LD block inside `<head>` after the existing schema blocks:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Store",
  "@id": "https://scentbazaar.co/#store-reviews",
  "name": "Scent Bazaar",
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5,
        "bestRating": 5
      },
      "author": {
        "@type": "Person",
        "name": "[REPLACE_WITH_REVIEWER_1_NAME from your page]"
      },
      "reviewBody": "[REPLACE_WITH_REVIEWER_1_TEXT from your page]",
      "datePublished": "[REPLACE_WITH_DATE e.g. 2026-02-15]"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5,
        "bestRating": 5
      },
      "author": {
        "@type": "Person",
        "name": "[REPLACE_WITH_REVIEWER_2_NAME from your page]"
      },
      "reviewBody": "[REPLACE_WITH_REVIEWER_2_TEXT from your page]",
      "datePublished": "[REPLACE_WITH_DATE e.g. 2026-01-28]"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5,
        "bestRating": 5
      },
      "author": {
        "@type": "Person",
        "name": "[REPLACE_WITH_REVIEWER_3_NAME from your page]"
      },
      "reviewBody": "[REPLACE_WITH_REVIEWER_3_TEXT from your page]",
      "datePublished": "[REPLACE_WITH_DATE e.g. 2026-01-10]"
    }
  ]
}
</script>
```

Fill in the reviewer names, review text, and dates from the actual review cards visible on the page. Use real dates from when those customers reviewed you on Google.

---

## CHANGE 12 — Update sitemap.xml with `contact.html` and correct `lastmod` dates

**File:** `sitemap.xml`

1. Add the contact page entry (already specified in Change 1).
2. Verify that all existing `<lastmod>` values are accurate. The sitemap currently shows `2026-03-23` for all pages except the blog post. If you deployed any page updates after that date, update the `lastmod` for those pages to today's date `2026-04-25`.
3. Add a `<priority>` tag to key pages if missing:
   - Homepage: `<priority>1.0</priority>`
   - `/perfume-store-deira`: `<priority>0.9</priority>`
   - `/wholesale-perfume-oil-dubai`: `<priority>0.9</priority>`
   - `/contact`: `<priority>0.8</priority>`
   - All other service pages: `<priority>0.7</priority>`
   - Blog: `<priority>0.6</priority>`

---

## AFTER ALL CODE CHANGES — Verify these 3 things:

1. **Validate schema on all changed pages** — Go to `https://validator.schema.org/`, paste the URL of each changed page, and confirm zero errors. Fix any JSON syntax errors (missing commas, unclosed brackets) before publishing.

2. **Test the Google Maps embed** — Open the new contact page and the homepage in a browser and confirm the map loads. If you see an error like "This page can't load Google Maps correctly", you need a Maps Embed API key from `console.cloud.google.com`. Enable "Maps Embed API", create a key with HTTP referrer restriction to `*.scentbazaar.co/*`, and replace `AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY` with your real key. Alternatively, use the simpler fallback iframe URL shown in the comments (no API key required).

3. **Check the CSP header on contact.html** — Make sure the `Content-Security-Policy` meta tag in `contact.html` includes `frame-src https://www.google.com https://reputationhub.site;` to allow the Maps iframe and the review widget.

---

---

# === END OF CODE CHANGE PROMPT ===

---

---

# MANUAL TASKS (Do These Yourself — No Code Required)

These actions cannot be done in code. Do them in order of priority.

---

## 🔴 CRITICAL — Do These This Week

### MANUAL 1 — Claim Bing Places (30 minutes, free)
**Why:** Bing Places powers ChatGPT, Microsoft Copilot, and Amazon Alexa for local business recommendations. Without it, Scent Bazaar is invisible to 45% of consumers now using AI for local recommendations. ChatGPT converts at 15.9% — 9× higher than Google organic.

**How:**
1. Go to `https://www.bingplaces.com/`
2. Sign in with a Microsoft account (create one free if needed)
3. Search for "Scent Bazaar" — if it appears, claim it. If not, create a new listing.
4. Fill in EXACTLY:
   - **Business name:** Scent Bazaar
   - **Address:** Shop No. 47, Souq Naif, 47 St, Naif, Deira, Dubai, United Arab Emirates
   - **Phone:** +971547727106
   - **Website:** https://scentbazaar.co/perfume-store-deira (NOT the homepage — see reason below)
   - **Category:** Perfume Store (primary) + Wholesale Supplier (secondary)
   - **Hours:** Sat–Thu 8:30am–12:00am, Fri 8:30am–12:00pm and 2:00pm–12:00am
5. Upload at least 10 high-quality photos (exterior, interior, products, team)
6. Verify ownership via phone call or postcard

**GBP Website URL warning:** The URL you put in the "Website" field of BOTH GBP and Bing Places should be a SERVICE page like `/perfume-store-deira` or `/wholesale-perfume-oil-dubai` — NOT `scentbazaar.co/`. Linking GBP to your homepage risks suppressing your homepage's own organic rankings (Sterling Sky Diversity Update, confirmed 2025).

---

### MANUAL 2 — Claim Apple Business Connect (30 minutes, free)
**Why:** 27% of local searches now happen on Apple Maps (doubled in 2026). iPhone users in Dubai are high-intent. Missing from Apple Maps = missing from Siri.

**How:**
1. Go to `https://businessconnect.apple.com/`
2. Sign in with an Apple ID
3. Search for Scent Bazaar — claim if found, create if not
4. Fill NAP identically to GBP:
   - **Name:** Scent Bazaar
   - **Address:** Shop No. 47, Souq Naif, 47 St, Naif, Deira, Dubai, UAE
   - **Phone:** +971547727106
   - **Category:** Perfume Store
5. Upload photos
6. Verify ownership

---

### MANUAL 3 — Verify and fix your Google Business Profile "Website" URL
**Why:** If your GBP listing links to `scentbazaar.co/` (homepage), it risks suppressing your homepage's own Google organic rankings because it creates a "diversity conflict" where GBP and organic compete for the same page.

**How:**
1. Log into `business.google.com`
2. Click your Scent Bazaar listing → Info → Website
3. Change the URL to: `https://scentbazaar.co/perfume-store-deira`
4. Save

---

### MANUAL 4 — Set up a Google Review generation system
**Why:** The 18-day rule (Sterling Sky): if you don't get at least 1 new Google review every 18 days, your local pack rankings start declining. You currently have 162 reviews — great. But you must keep the velocity going.

**How:**
1. In GBP, click "Share review form" — copy the short URL (looks like `g.page/r/xxx/review`)
2. Save that URL — this is the `[REPLACE_WITH_YOUR_GBP_REVIEW_URL]` value from the code changes above. Go back and fill it in wherever you see that placeholder.
3. After every completed order or in-store visit, send customers a WhatsApp message:
   > "Hi [Name]! Thank you for shopping at Scent Bazaar 🌸 If you're happy with your purchase, we'd really appreciate a quick Google review — it helps us a lot! Here's the link: [your review URL] — takes just 1 minute. Thank you!"
4. Do NOT ask only satisfied customers. Do NOT offer incentives. Ask everyone equally — this is required by Google policy and FTC rules.
5. Target: minimum 2–3 new reviews per week.

---

## 🟠 HIGH PRIORITY — Do These Within 2 Weeks

### MANUAL 5 — Create a Yelp business listing
**Why:** ChatGPT sources local business data from Yelp. Without a Yelp listing, you cannot appear in ChatGPT local recommendations.

**How:**
1. Go to `https://biz.yelp.com/`
2. Search for Scent Bazaar — claim if found, create if not
3. Use EXACT same NAP as GBP
4. Add all your photos
5. Write a detailed business description mentioning: wholesale perfume oil, Dubai, Deira, Souq Naif, fragrance oils, private label

---

### MANUAL 6 — Add Scent Bazaar to TripAdvisor
**Why:** Souq Naif/Deira is a tourist area. TripAdvisor is the #2 source ChatGPT pulls for local recommendations. Fragrance shopping is a common tourist activity in Dubai.

**How:**
1. Go to `https://www.tripadvisor.com/` → List Your Business
2. Category: Shopping → Specialty Store
3. Same NAP as GBP

---

### MANUAL 7 — Create a Trustpilot page
**Why:** Trustpilot is trusted by Google as a high-authority review signal. It also feeds AI systems. Since you serve international wholesale buyers (50+ countries), Trustpilot is more relevant than Yelp for B2B credibility.

**How:**
1. Go to `https://business.trustpilot.com/`
2. Create a free business profile
3. Send invitation emails to your recent customers asking for reviews
4. Same NAP format as GBP

---

### MANUAL 8 — Submit to UAE/regional data aggregators
**Why:** These aggregators distribute your business data downstream to hundreds of smaller directories, navigation apps, and voice assistants. One submission = dozens of citations.

**How:**
1. **Foursquare for Business:** `https://business.foursquare.com/` — Create or claim listing
2. **Infobel UAE:** `https://www.infobel.com/en/uae` — Submit free listing
3. **Yellow Pages UAE:** `https://www.yellowpages.ae/` — Submit business
4. **Dubai Local:** `https://www.dubai-local.com/` — Submit listing
5. Keep NAP identical everywhere:
   - Name: Scent Bazaar
   - Address: Shop No. 47, Souq Naif, 47 St, Naif, Deira, Dubai, UAE
   - Phone: +971 54 772 7106

---

## 🟡 MEDIUM PRIORITY — Do These Within 1 Month

### MANUAL 9 — Join Dubai Chamber of Commerce
**Why:** Dubai Chamber membership gives you a high-authority citation (Trust Flow ~80), a backlink from a government-adjacent domain, and is used by Google for business verification. It also gives you a "Best of Dubai" adjacent legitimacy signal.

**How:**
1. Go to `https://www.dubaichamber.com/`
2. Apply for membership (cost applies — typically AED 700–1,500/year for SME)
3. List your business in their directory
4. Use exact same NAP format

---

### MANUAL 10 — Pursue "Best of Dubai" and industry list placements
**Why:** "Best of" list appearances are the #1 AI visibility factor for local businesses (Whitespark 2026). When ChatGPT recommends local businesses, it heavily weights businesses that appear on curated "best" or "top" lists indexed by Bing.

**Target lists to get on:**
- "Best Perfume Shops in Dubai" — search this phrase and contact the blog/site owners
- "Top Wholesale Fragrance Suppliers UAE" — same approach
- "Best Places to Buy Perfume in Deira Dubai" — Dubai lifestyle blogs
- Any fragrance industry directories

**How to get listed:**
1. Google: `"best perfume" "Dubai" site:*.com` — find listicle pages
2. Email the site owner: *"Hi, I noticed your article about best perfume shops in Dubai. Scent Bazaar has 160+ verified 5-star reviews and has been serving wholesale buyers since 2025. Would you consider adding us to your list? Happy to share any info you need."*
3. Offer a free sample kit to reviewers/bloggers in exchange for genuine reviews (this is allowed — you're offering the product, not money for a positive review)

---

### MANUAL 11 — Update your GBP with posts every week
**Why:** GBP posts do not directly boost rankings, but they trigger "Post Justifications" — snippets that appear in the local pack showing your post content. This increases click-through rate by ~15%.

**How:**
1. Log into business.google.com every Monday
2. Create a new post (300–500 words, or a photo post)
3. Post ideas:
   - New fragrance arrival
   - Behind-the-scenes of blending
   - Customer testimonial (screenshot from WhatsApp, with permission)
   - "Scent of the Week" feature
   - Wholesale pricing update
4. Include a CTA: "WhatsApp us at +971547727106" or link to your website

---

### MANUAL 12 — Optimise your GBP profile completely
**Why:** GBP signals account for 32% of local pack rankings. Most businesses leave the profile 60% complete.

**Checklist:**
- [ ] Add all 5 secondary categories (e.g., "Cosmetics Store", "Beauty Supply Store", "Essential Oil Supplier", "Gift Shop")
- [ ] Upload minimum 25 photos: exterior (day and night), interior, products, team, packaging
- [ ] Add videos (30–60 second clips of the showroom or blending process)
- [ ] Fill in ALL product listings with photos and prices
- [ ] Answer all questions that customers have asked in Q&A (now powered by Ask Maps Gemini AI — engage with these)
- [ ] Ensure your business description (750 chars max) includes: "wholesale perfume oil", "Dubai", "Deira", "Souq Naif", "fragrance oils", "private label", "GCC", "+971547727106"
- [ ] Apply for the Google Verified badge (replaced Guaranteed/Screened in Oct 2025)

---

### MANUAL 13 — Respond to EVERY Google review
**Why:** 88% of consumers would use a business that responds to reviews (BrightLocal 2026). Owner responses are also a GBP ranking signal.

**Template for 5-star reviews:**
> "Thank you so much, [Name]! We're thrilled you had a great experience at Scent Bazaar. Our team in Souq Naif works hard to ensure every wholesale buyer gets the best fragrance oils and service. We look forward to your next visit! 🌸"

**Template for any negative reviews:**
> "Thank you for your feedback, [Name]. We're sorry your experience didn't meet expectations. Please contact us directly on WhatsApp +971547727106 so we can make it right. We value every customer and want to resolve this for you."

(Never argue or dispute publicly. Never reveal personal customer information.)

---

### MANUAL 14 — Build a Reddit presence
**Why:** ChatGPT heavily indexes Reddit for local recommendations. When someone asks ChatGPT "best perfume oil supplier in Dubai", it often surfaces Reddit threads. Being mentioned there = appearing in AI recommendations.

**How:**
1. Create a Reddit account for Scent Bazaar (or personally)
2. Join subreddits: r/DIYfragrance, r/fragrance, r/dubai, r/UAE, r/smallbusiness
3. Participate genuinely — answer questions about fragrance oils, wholesale sourcing, Dubai fragrance market. Mention Scent Bazaar naturally where relevant.
4. Do NOT spam or self-promote only — Reddit will ban you. Aim for 80% genuine helpful posts, 20% Scent Bazaar mentions.

---

## 📋 ONGOING — Monthly Recurring Tasks

| Task | Frequency | Platform |
|------|-----------|----------|
| Post new GBP update | Weekly | Google Business Profile |
| Request reviews from new customers | Every order | WhatsApp/Email |
| Respond to all new reviews | Within 48 hours | Google, Yelp, Trustpilot |
| Update `reviewCount` in all page schemas | Monthly | Your HTML files |
| Check Bing Places accuracy | Monthly | Bing Places dashboard |
| Post on Instagram/TikTok/YouTube | 3× per week | Social platforms |
| Monitor "best of Dubai perfume" articles | Monthly | Google Search |
| Outreach to 2–3 new bloggers/directories | Monthly | Email |

---

## 📊 SCORE IMPACT SUMMARY

| Action | Current Score | Expected After |
|--------|--------------|----------------|
| Code Changes 1–12 (all applied) | 62/100 | ~74/100 |
| + Bing Places + Apple Business Connect | 74 | ~82/100 |
| + Yelp + TripAdvisor + Trustpilot citations | 82 | ~88/100 |
| + GBP fully optimised + weekly posts | 88 | ~92/100 |
| + Review velocity (5+/week for 3 months) | 92 | ~95/100 |
| + "Best of" list placements + Reddit mentions | 95 | ~98–100/100 |

**The last 5 points are off-page authority (citations, links, brand mentions) and cannot be achieved with code alone. This is why the manual tasks are equally important as the code changes.**

---

*This prompt was generated from a full Local SEO audit of scentbazaar.co on 2026-04-25.*
*Reference audit: LOCAL-SEO-ANALYSIS-scentbazaar.co.md*
