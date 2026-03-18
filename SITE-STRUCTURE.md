# ScentBazaar — Site Structure & Architecture Reference
**Domain:** scentbazaar.co
**Last Updated:** March 2026
**Total Pages (current):** 18 | **Planned additions:** 20+

---

## Table of Contents

1. [Complete URL Hierarchy](#1-complete-url-hierarchy)
2. [Navigation Architecture](#2-navigation-architecture)
3. [Internal Linking Map](#3-internal-linking-map)
4. [Content Pillar Architecture](#4-content-pillar-architecture)
5. [Schema Markup Architecture](#5-schema-markup-architecture)
6. [URL Conventions & Guidelines](#6-url-conventions--guidelines)
7. [Crawl Budget Optimization](#7-crawl-budget-optimization)
8. [Future Scalability Considerations](#8-future-scalability-considerations)

---

## 1. Complete URL Hierarchy

```
scentbazaar.co/
│
├── [CORE / FOUNDATION]
│   ├── /                                          (index.html) — Homepage
│   ├── /about                                     [PLANNED] — Company, team, named perfumers
│   ├── /catalog                                   [PLANNED] — Fragrance oil catalog
│   ├── /reviews                                   [PLANNED] — Customer reviews & testimonials
│   └── /shipping-compliance                       [PLANNED] — Export guide, MSDS, COA, DG packing
│
├── [WHOLESALE SUPPLY & INGREDIENTS]
│   ├── /fragrance-oil-supplier-dubai              — Fragrance Oil Supplier (pillar hub)
│   ├── /wholesale-perfume-oil-dubai               — Wholesale Perfume Oil
│   ├── /bulk-fragrance-oil-uae                    — Bulk Fragrance Oil
│   ├── /perfume-base-supplier-uae                 — Perfume Base
│   ├── /perfumers-alcohol-supplier-dubai          — Perfumers Alcohol
│   ├── /diffuser-base-supplier-dubai              — Diffuser Base
│   └── /candle-fragrance-oil-supplier-dubai       — Candle Fragrance Oil
│
├── [MANUFACTURING SERVICES]
│   ├── /private-label-perfume-dubai               — Private Label (pillar hub)
│   ├── /custom-perfume-blending-dubai             — Custom Perfume Blending
│   └── /perfume-filling-service-dubai             — Perfume Filling Service
│
├── [PACKAGING]
│   ├── /perfume-bottle-supplier-dubai             — Perfume Bottles
│   └── /perfume-caps-spray-pumps                  — Caps & Spray Pumps
│
├── [ARABIC HERITAGE & LOCAL]
│   ├── /bakhoor-supplier-dubai                    — Bakhoor & Arabic Incense
│   └── /perfume-store-deira                       — Physical Store (Deira)
│
├── [COSMETIC]
│   └── /cosmetic-base-supplier-dubai              — Cosmetic Base
│
├── [BLOG / CONTENT]  [PLANNED]
│   ├── /blog                                      — Blog index
│   ├── /blog/ifra-compliance-guide-perfume-brands
│   ├── /blog/how-to-start-private-label-perfume-dubai
│   ├── /blog/perfumers-alcohol-guide-uae
│   ├── /blog/bakhoor-oud-arabic-fragrance-guide
│   ├── /blog/diffuser-fragrance-oil-guide
│   ├── /blog/candle-fragrance-oil-guide
│   ├── /blog/perfume-packaging-guide-dubai
│   ├── /blog/bulk-fragrance-oil-buying-guide-uae
│   ├── /blog/cosmetic-base-formulation-guide
│   ├── /blog/export-fragrance-uae-guide
│   ├── /blog/perfume-filling-service-dubai-guide
│   └── /blog/[additional-slugs...]               (12+ posts planned, scalable to 50+)
│
├── [ARABIC PAGES]  [PLANNED]
│   ├── /ar/                                       — Arabic Homepage
│   ├── /ar/wholesale-perfume-oil-dubai
│   ├── /ar/private-label-perfume-dubai
│   ├── /ar/bakhoor-supplier-dubai
│   ├── /ar/perfume-store-deira
│   └── /ar/perfumers-alcohol-supplier-dubai
│
└── [UTILITY]
    ├── /privacy-policy
    ├── /terms-of-service
    └── /sitemap.xml                               (machine-readable, not an HTML page)
```

---

## 2. Navigation Architecture

### Current Nav Structure

```
[Logo]  Products ▾  Services ▾  Store  Contact
```

The current navigation lacks dedicated entries for About, Blog, and the Catalog — all high-value trust and discovery pages.

---

### Recommended Navigation (improved)

#### Primary Nav (Desktop)

| Position | Label | Dropdown Items | Notes |
|---|---|---|---|
| 1 | **Products** | Fragrance Oils, Perfume Base, Perfumers Alcohol, Diffuser Base, Candle Fragrance Oil, Cosmetic Base, Bakhoor & Incense | Hub → spoke linking |
| 2 | **Packaging** | Perfume Bottles, Caps & Spray Pumps | Separate from Products for clarity |
| 3 | **Services** | Private Label, Custom Blending, Perfume Filling, Wholesale Supply, Bulk Orders | B2B service conversion focus |
| 4 | **Catalog** | (direct link, no dropdown) | New page; drives fragrance discovery |
| 5 | **About** | (direct link, no dropdown) | Trust signal; planned page |
| 6 | **Blog / Guides** | (direct link, no dropdown) | Content/SEO; planned page |
| 7 | **Store – Deira** | (direct link, no dropdown) | Physical store; local SEO |
| CTA | **Get a Quote** | (button, links to contact/WhatsApp) | Primary conversion action |

#### Mobile Nav Priority Order

Mobile navigation should surface the highest-conversion paths first, collapsing lower-priority items:

1. Get a Quote (CTA — pinned top)
2. Products (expandable)
3. Services (expandable)
4. Packaging (expandable)
5. Catalog
6. Store – Deira
7. About
8. Blog / Guides
9. Privacy Policy / Terms (footer level only)

---

### Footer Link Structure

```
Footer Column 1 — Products
  Fragrance Oil Supplier Dubai
  Wholesale Perfume Oil Dubai
  Bulk Fragrance Oil UAE
  Perfume Base Supplier UAE
  Perfumers Alcohol Supplier Dubai
  Diffuser Base Supplier Dubai
  Candle Fragrance Oil Supplier Dubai
  Cosmetic Base Supplier Dubai

Footer Column 2 — Services
  Private Label Perfume Dubai
  Custom Perfume Blending Dubai
  Perfume Filling Service Dubai
  Bakhoor Supplier Dubai

Footer Column 3 — Packaging
  Perfume Bottle Supplier Dubai
  Perfume Caps & Spray Pumps

Footer Column 4 — Company
  About ScentBazaar
  Fragrance Catalog
  Customer Reviews
  Blog / Guides
  Shipping & Compliance
  Store – Deira, Dubai
  Contact / WhatsApp

Footer Bottom Row (utility)
  Privacy Policy  |  Terms of Service  |  Sitemap
  © 2026 ScentBazaar
```

---

## 3. Internal Linking Map

### Hub-and-Spoke Model

The site follows a three-tier hub-and-spoke architecture:

```
Tier 1 (Homepage)
    └── links to all pillar hubs + key landing pages

Tier 2 (Pillar Hubs — 5 pages)
    ├── /fragrance-oil-supplier-dubai      (Wholesale Supply pillar)
    ├── /private-label-perfume-dubai       (Manufacturing pillar)
    ├── /perfumers-alcohol-supplier-dubai  (Ingredients pillar)
    ├── /perfume-bottle-supplier-dubai     (Packaging pillar)
    └── /bakhoor-supplier-dubai            (Arabic Heritage pillar)

Tier 3 (Supporting pages — all others)
    └── link back to their pillar hub + cross-link to related spokes
```

---

### Page-Level Linking Recommendations

#### Homepage (`/`)
Links TO:
- All 5 pillar hub pages (primary CTA sections)
- `/perfume-store-deira` (local trust section)
- `/catalog` (discovery CTA)
- `/about` (trust section)
- `/reviews` (social proof section)
- `/blog` (content section)
- `/private-label-perfume-dubai` (secondary CTA)
- `/wholesale-perfume-oil-dubai` (secondary CTA)

---

#### Wholesale Supply Cluster

| Source Page | Links To | Recommended Anchor Text |
|---|---|---|
| `/fragrance-oil-supplier-dubai` | `/wholesale-perfume-oil-dubai` | "wholesale perfume oil Dubai" |
| `/fragrance-oil-supplier-dubai` | `/bulk-fragrance-oil-uae` | "bulk fragrance oil UAE" |
| `/fragrance-oil-supplier-dubai` | `/perfume-base-supplier-uae` | "perfume base supplier UAE" |
| `/fragrance-oil-supplier-dubai` | `/private-label-perfume-dubai` | "private label perfume Dubai" |
| `/wholesale-perfume-oil-dubai` | `/bulk-fragrance-oil-uae` | "bulk orders" |
| `/wholesale-perfume-oil-dubai` | `/fragrance-oil-supplier-dubai` | "fragrance oil supplier Dubai" |
| `/wholesale-perfume-oil-dubai` | `/private-label-perfume-dubai` | "private label services" |
| `/wholesale-perfume-oil-dubai` | `/shipping-compliance` | "export documentation" |
| `/bulk-fragrance-oil-uae` | `/wholesale-perfume-oil-dubai` | "wholesale perfume oil" |
| `/bulk-fragrance-oil-uae` | `/perfumers-alcohol-supplier-dubai` | "perfumers alcohol UAE" |
| `/bulk-fragrance-oil-uae` | `/shipping-compliance` | "bulk shipping & MSDS" |
| `/perfume-base-supplier-uae` | `/fragrance-oil-supplier-dubai` | "fragrance oil supplier" |
| `/perfume-base-supplier-uae` | `/perfumers-alcohol-supplier-dubai` | "perfumers alcohol" |
| `/perfume-base-supplier-uae` | `/custom-perfume-blending-dubai` | "custom perfume blending" |

---

#### Manufacturing Services Cluster

| Source Page | Links To | Recommended Anchor Text |
|---|---|---|
| `/private-label-perfume-dubai` | `/custom-perfume-blending-dubai` | "custom perfume blending Dubai" |
| `/private-label-perfume-dubai` | `/perfume-filling-service-dubai` | "perfume filling service Dubai" |
| `/private-label-perfume-dubai` | `/perfume-bottle-supplier-dubai` | "perfume bottles Dubai" |
| `/private-label-perfume-dubai` | `/perfume-caps-spray-pumps` | "caps and spray pumps" |
| `/private-label-perfume-dubai` | `/fragrance-oil-supplier-dubai` | "fragrance oil supplier" |
| `/private-label-perfume-dubai` | `/cosmetic-base-supplier-dubai` | "cosmetic base supplier" |
| `/custom-perfume-blending-dubai` | `/private-label-perfume-dubai` | "private label perfume" |
| `/custom-perfume-blending-dubai` | `/perfume-filling-service-dubai` | "filling and bottling service" |
| `/custom-perfume-blending-dubai` | `/perfumers-alcohol-supplier-dubai` | "perfumers alcohol" |
| `/perfume-filling-service-dubai` | `/private-label-perfume-dubai` | "private label perfume Dubai" |
| `/perfume-filling-service-dubai` | `/perfume-bottle-supplier-dubai` | "perfume bottle supplier" |
| `/perfume-filling-service-dubai` | `/custom-perfume-blending-dubai` | "custom blending service" |

---

#### Ingredients Cluster

| Source Page | Links To | Recommended Anchor Text |
|---|---|---|
| `/perfumers-alcohol-supplier-dubai` | `/bulk-fragrance-oil-uae` | "bulk fragrance oils" |
| `/perfumers-alcohol-supplier-dubai` | `/shipping-compliance` | "MSDS and export compliance" |
| `/perfumers-alcohol-supplier-dubai` | `/custom-perfume-blending-dubai` | "custom perfume blending" |
| `/diffuser-base-supplier-dubai` | `/fragrance-oil-supplier-dubai` | "fragrance oils for diffusers" |
| `/diffuser-base-supplier-dubai` | `/wholesale-perfume-oil-dubai` | "wholesale orders" |
| `/candle-fragrance-oil-supplier-dubai` | `/fragrance-oil-supplier-dubai` | "fragrance oil supplier Dubai" |
| `/candle-fragrance-oil-supplier-dubai` | `/wholesale-perfume-oil-dubai` | "wholesale fragrance oil" |
| `/cosmetic-base-supplier-dubai` | `/fragrance-oil-supplier-dubai` | "fragrance oil for cosmetics" |
| `/cosmetic-base-supplier-dubai` | `/private-label-perfume-dubai` | "private label cosmetic products" |

---

#### Packaging Cluster

| Source Page | Links To | Recommended Anchor Text |
|---|---|---|
| `/perfume-bottle-supplier-dubai` | `/perfume-caps-spray-pumps` | "perfume caps and spray pumps" |
| `/perfume-bottle-supplier-dubai` | `/perfume-filling-service-dubai` | "perfume filling service" |
| `/perfume-bottle-supplier-dubai` | `/private-label-perfume-dubai` | "private label packaging" |
| `/perfume-caps-spray-pumps` | `/perfume-bottle-supplier-dubai` | "perfume bottle supplier Dubai" |
| `/perfume-caps-spray-pumps` | `/perfume-filling-service-dubai` | "filling and sealing service" |

---

#### Arabic Heritage & Local Cluster

| Source Page | Links To | Recommended Anchor Text |
|---|---|---|
| `/bakhoor-supplier-dubai` | `/perfume-store-deira` | "visit our Deira store" |
| `/bakhoor-supplier-dubai` | `/fragrance-oil-supplier-dubai` | "Arabic fragrance oils" |
| `/bakhoor-supplier-dubai` | `/wholesale-perfume-oil-dubai` | "wholesale bakhoor and oud" |
| `/perfume-store-deira` | `/bakhoor-supplier-dubai` | "bakhoor supplier Dubai" |
| `/perfume-store-deira` | `/fragrance-oil-supplier-dubai` | "fragrance oil collection" |
| `/perfume-store-deira` | `/about` | "about ScentBazaar" |

---

#### Blog → Service Page Links (pattern for all posts)

Every blog post should include 3–5 contextual links to relevant service pages:

| Blog Post | Primary Service Links |
|---|---|
| IFRA compliance guide | `/fragrance-oil-supplier-dubai`, `/perfumers-alcohol-supplier-dubai`, `/shipping-compliance` |
| How to start private label | `/private-label-perfume-dubai`, `/custom-perfume-blending-dubai`, `/perfume-filling-service-dubai` |
| Perfumers alcohol guide | `/perfumers-alcohol-supplier-dubai`, `/bulk-fragrance-oil-uae`, `/shipping-compliance` |
| Bakhoor & oud guide | `/bakhoor-supplier-dubai`, `/perfume-store-deira`, `/fragrance-oil-supplier-dubai` |
| Diffuser fragrance oil guide | `/diffuser-base-supplier-dubai`, `/fragrance-oil-supplier-dubai`, `/wholesale-perfume-oil-dubai` |
| Candle fragrance oil guide | `/candle-fragrance-oil-supplier-dubai`, `/fragrance-oil-supplier-dubai`, `/bulk-fragrance-oil-uae` |
| Perfume packaging guide | `/perfume-bottle-supplier-dubai`, `/perfume-caps-spray-pumps`, `/perfume-filling-service-dubai` |
| Bulk buying guide UAE | `/bulk-fragrance-oil-uae`, `/wholesale-perfume-oil-dubai`, `/shipping-compliance` |
| Cosmetic base formulation | `/cosmetic-base-supplier-dubai`, `/private-label-perfume-dubai`, `/fragrance-oil-supplier-dubai` |
| Export fragrance from UAE | `/shipping-compliance`, `/bulk-fragrance-oil-uae`, `/perfumers-alcohol-supplier-dubai` |

---

## 4. Content Pillar Architecture

### Pillar 1 — Wholesale Supply

**Goal:** Capture B2B buyers searching for bulk fragrance sourcing in UAE/Dubai.

**Pillar Hub:** `/fragrance-oil-supplier-dubai`

**Supporting Service Pages:**
- `/wholesale-perfume-oil-dubai`
- `/bulk-fragrance-oil-uae`
- `/perfume-base-supplier-uae`

**Supporting Blog Posts (planned):**
- `/blog/bulk-fragrance-oil-buying-guide-uae`
- `/blog/ifra-compliance-guide-perfume-brands`
- `/blog/export-fragrance-uae-guide`

**Target Keywords:**
- fragrance oil supplier Dubai
- wholesale perfume oil Dubai
- bulk fragrance oil UAE
- buy perfume base UAE

---

### Pillar 2 — Private Label & Manufacturing

**Goal:** Convert entrepreneurs and cosmetic brands seeking end-to-end manufacturing.

**Pillar Hub:** `/private-label-perfume-dubai`

**Supporting Service Pages:**
- `/custom-perfume-blending-dubai`
- `/perfume-filling-service-dubai`
- `/cosmetic-base-supplier-dubai`

**Supporting Blog Posts (planned):**
- `/blog/how-to-start-private-label-perfume-dubai`
- `/blog/perfume-filling-service-dubai-guide`
- `/blog/cosmetic-base-formulation-guide`

**Target Keywords:**
- private label perfume Dubai
- custom perfume blending Dubai
- perfume filling service Dubai
- cosmetic base supplier Dubai

---

### Pillar 3 — Ingredients & Chemicals

**Goal:** Reach formulation-level buyers: candle makers, diffuser brands, cosmetic labs.

**Pillar Hub:** `/perfumers-alcohol-supplier-dubai`

**Supporting Service Pages:**
- `/diffuser-base-supplier-dubai`
- `/candle-fragrance-oil-supplier-dubai`
- `/cosmetic-base-supplier-dubai`

**Supporting Blog Posts (planned):**
- `/blog/perfumers-alcohol-guide-uae`
- `/blog/diffuser-fragrance-oil-guide`
- `/blog/candle-fragrance-oil-guide`

**Target Keywords:**
- perfumers alcohol supplier Dubai
- diffuser base supplier Dubai
- candle fragrance oil Dubai
- cosmetic base supplier Dubai

---

### Pillar 4 — Packaging

**Goal:** Capture packaging buyers, including private label brands who need complete solutions.

**Pillar Hub:** `/perfume-bottle-supplier-dubai`

**Supporting Service Pages:**
- `/perfume-caps-spray-pumps`
- `/perfume-filling-service-dubai` (cross-pillar)

**Supporting Blog Posts (planned):**
- `/blog/perfume-packaging-guide-dubai`

**Target Keywords:**
- perfume bottle supplier Dubai
- perfume caps and spray pumps UAE
- perfume packaging Dubai

---

### Pillar 5 — Arabic Heritage & Local

**Goal:** Rank for regional and heritage fragrance terms; support physical store traffic and Arabic-language searchers.

**Pillar Hub:** `/bakhoor-supplier-dubai`

**Supporting Pages:**
- `/perfume-store-deira`
- `/ar/bakhoor-supplier-dubai`
- `/ar/perfume-store-deira`
- `/ar/` (Arabic homepage)

**Supporting Blog Posts (planned):**
- `/blog/bakhoor-oud-arabic-fragrance-guide`

**Target Keywords:**
- bakhoor supplier Dubai
- oud oil Dubai
- Arabic incense wholesale Dubai
- perfume store Deira Dubai
- عطور دبي (Arabic: Dubai perfumes)
- بخور بالجملة (Arabic: wholesale bakhoor)

---

## 5. Schema Markup Architecture

### Schema Type by Page

| Page | Schema Types |
|---|---|
| `/` (Homepage) | Organization, LocalBusiness, WebSite (SearchAction), AggregateRating, BreadcrumbList |
| `/about` | Organization, BreadcrumbList |
| `/catalog` | CollectionPage, BreadcrumbList |
| `/reviews` | AggregateRating, Review, BreadcrumbList |
| `/shipping-compliance` | WebPage, BreadcrumbList, FAQPage |
| `/fragrance-oil-supplier-dubai` | Service, BreadcrumbList, FAQPage |
| `/wholesale-perfume-oil-dubai` | Product, Offer, BreadcrumbList, FAQPage |
| `/bulk-fragrance-oil-uae` | Product, Offer, BreadcrumbList, FAQPage |
| `/perfume-base-supplier-uae` | Product, Offer, BreadcrumbList, FAQPage |
| `/perfumers-alcohol-supplier-dubai` | Product, Offer, BreadcrumbList, FAQPage |
| `/diffuser-base-supplier-dubai` | Product, Offer, BreadcrumbList, FAQPage |
| `/candle-fragrance-oil-supplier-dubai` | Product, Offer, BreadcrumbList, FAQPage |
| `/cosmetic-base-supplier-dubai` | Product, Offer, BreadcrumbList, FAQPage |
| `/bakhoor-supplier-dubai` | Product, Offer, BreadcrumbList, FAQPage |
| `/private-label-perfume-dubai` | Service, BreadcrumbList, FAQPage |
| `/custom-perfume-blending-dubai` | Service, BreadcrumbList, FAQPage |
| `/perfume-filling-service-dubai` | Service, BreadcrumbList, FAQPage |
| `/perfume-bottle-supplier-dubai` | Product, Offer, BreadcrumbList, FAQPage |
| `/perfume-caps-spray-pumps` | Product, Offer, BreadcrumbList, FAQPage |
| `/perfume-store-deira` | LocalBusiness, Store, AggregateRating, BreadcrumbList, FAQPage |
| `/blog` | Blog, BreadcrumbList |
| `/blog/[slug]` | Article, BreadcrumbList, FAQPage (if applicable), Author |
| `/ar/*` | Mirror English schema with `inLanguage: "ar"` |
| `/privacy-policy` | WebPage only (no structured data needed) |
| `/terms-of-service` | WebPage only (no structured data needed) |

---

### Schema Implementation Notes

**Organization @id anchor:**
Define the canonical Organization entity once on the homepage as `https://scentbazaar.co/#organization`. All other pages reference it via `"@id": "https://scentbazaar.co/#organization"` rather than duplicating the full block.

**LocalBusiness / Store:**
`/perfume-store-deira` should use `schema.org/Store` as the `@type` (subtype of LocalBusiness) with full `address`, `openingHoursSpecification`, `geo`, `telephone`, and `sameAs` (Google Maps URL, WhatsApp).

**Product schema on product pages:**
Include `offers` with `priceCurrency: "AED"`, `availability: "https://schema.org/InStock"`, and `seller` referencing the Organization @id.

**AggregateRating:**
Only add `aggregateRating` to pages where real reviews exist or are displayed. Do not add placeholder ratings.

**WebSite SearchAction:**
Add to homepage only:
```json
{
  "@type": "WebSite",
  "@id": "https://scentbazaar.co/#website",
  "url": "https://scentbazaar.co/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://scentbazaar.co/catalog?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```
(Activate once the `/catalog` page exists with search/filter functionality.)

**Hreflang for Arabic pages:**
All pages with Arabic equivalents must include both `<link rel="alternate" hreflang="en">` and `<link rel="alternate" hreflang="ar">` in the `<head>`, and the Arabic pages must mirror this pointing back to the English version. Include `hreflang="x-default"` pointing to the English version.

---

## 6. URL Conventions & Guidelines

### Core Rules

| Rule | Detail |
|---|---|
| Case | All lowercase only |
| Separator | Hyphens only — no underscores, no spaces |
| Trailing slash | No trailing slashes on inner pages (match existing convention). Root `/` is the only exception. |
| Dates in URLs | Never include dates in URLs (not for blog posts, not for any page) |
| Query strings | Avoid for canonical content; acceptable for catalog filters (non-indexed) |
| File extensions | No `.html` extensions in URLs (clean URLs via server config) |

---

### URL Patterns by Section

**Service / Product pages:**
```
/[primary-keyword]-[geo-modifier]
```
Examples:
- `/wholesale-perfume-oil-dubai`
- `/perfumers-alcohol-supplier-dubai`
- `/diffuser-base-supplier-dubai`

**Blog posts:**
```
/blog/[topic-slug]
```
- No date in the slug
- Slug should lead with primary keyword, not brand name
- Maximum 6 words in slug
- Examples:
  - `/blog/ifra-compliance-guide-perfume-brands`
  - `/blog/how-to-start-private-label-perfume-dubai`
  - `/blog/bakhoor-oud-arabic-fragrance-guide`

**Arabic pages:**
```
/ar/[page-slug]
```
- Mirror the English slug exactly (do not translate the slug into Arabic)
- Arabic blog posts (if added): `/ar/blog/[topic-slug]`
- Examples:
  - `/ar/wholesale-perfume-oil-dubai`
  - `/ar/bakhoor-supplier-dubai`

**Catalog sub-pages (future):**
```
/catalog/[scent-family]
```
Examples:
- `/catalog/oud-oriental`
- `/catalog/floral-fresh`
- `/catalog/woody-amber`

**Market/export pages (future):**
```
/[market-name]-fragrance-supplier
```
Examples:
- `/saudi-arabia-fragrance-supplier`
- `/india-fragrance-oil-export`

---

### Slug Quality Checklist

Before publishing any new URL, verify:
- [ ] Contains at least one primary keyword
- [ ] Contains geo modifier where relevant (dubai / uae / deira)
- [ ] No stop words unless needed for keyword match (the, and, for — acceptable if part of the target phrase)
- [ ] No brand name in the slug (scentbazaar does not appear in any URL)
- [ ] Does not duplicate an existing URL
- [ ] 3–6 words in length (avoid over-stuffing)

---

## 7. Crawl Budget Optimization

### Priority Tiers for Crawling

**Tier 1 — Crawl Always (highest priority):**
- `/` — Homepage
- `/fragrance-oil-supplier-dubai` — Primary pillar hub
- `/wholesale-perfume-oil-dubai`
- `/bulk-fragrance-oil-uae`
- `/private-label-perfume-dubai`
- `/bakhoor-supplier-dubai`
- `/perfumers-alcohol-supplier-dubai`
- `/perfume-store-deira`

**Tier 2 — Crawl Regularly:**
- All remaining service/product pages (7 pages)
- `/catalog` (when live)
- `/about` (when live)
- `/blog` index
- All published blog posts

**Tier 3 — Crawl Occasionally:**
- `/reviews` (changes infrequently)
- `/shipping-compliance`
- All `/ar/` pages

**Tier 4 — Deprioritized:**
- `/privacy-policy`
- `/terms-of-service`

---

### Indexing Directives

| Page | Directive | Reason |
|---|---|---|
| `/privacy-policy` | `noindex, follow` | Legal boilerplate; no SEO value |
| `/terms-of-service` | `noindex, follow` | Legal boilerplate; no SEO value |
| `/sitemap.xml` | N/A (not an HTML page) | Submitted directly to GSC |
| `/ar/*` | `index, follow` | Arabic pages have independent search value |
| `/blog/[slug]` | `index, follow` | Full indexing; canonical set to self |
| All other pages | `index, follow` | Default |

Add to `robots.txt`:
```
User-agent: *
Disallow: /cdn-cgi/
Allow: /

Sitemap: https://scentbazaar.co/sitemap.xml
```

---

### 404 Handling

- Implement a custom `404.html` page with:
  - Clear message ("Page not found")
  - Search bar or link to `/catalog`
  - Links to the 5 pillar pages
  - WhatsApp contact CTA
- Monitor 404s via Google Search Console monthly
- Do not leave orphaned URLs without redirects

---

### Redirect Map

No current redirects are required. If any of the following scenarios occur, implement 301 redirects immediately:

| Scenario | From | To |
|---|---|---|
| If cosmetic page slug changes | `/cosmetic-base-supplier-dubai` | new URL |
| If caps page is renamed | `/perfume-caps-spray-pumps` | new URL |
| If any blog post is merged | old slug | surviving slug |
| If Arabic URLs use translated slugs | `/ar/[translated-slug]` | `/ar/[english-slug]` |

**Rule:** Never delete a page that has inbound links or indexed traffic without a 301 redirect in place.

---

### XML Sitemap Guidelines

- Include all `index, follow` pages
- Exclude `/privacy-policy`, `/terms-of-service`
- Set `<priority>` values:
  - Homepage: `1.0`
  - Pillar hubs: `0.9`
  - Service pages: `0.8`
  - Blog posts: `0.7`
  - Arabic pages: `0.7`
  - About, Catalog, Reviews, Shipping: `0.6`
- Set `<changefreq>`:
  - Homepage: `weekly`
  - Service pages: `monthly`
  - Blog posts: `monthly` (update after edits)
  - Arabic pages: `monthly`
- Resubmit sitemap to Google Search Console after every new page is published.

---

## 8. Future Scalability Considerations

### Blog Scaling (Current 12 posts → 50+ posts)

The `/blog/[slug]` flat structure supports unlimited posts without hierarchy changes. When the blog exceeds ~30 posts, introduce category filtering on the `/blog` index page using URL parameters (not path segments) to avoid crawl issues:

```
/blog?category=ingredients
/blog?category=private-label
/blog?category=packaging
```

Use `rel="canonical"` on all filtered views pointing back to `/blog` to prevent duplicate content. Add a `BlogPosting` schema with `articleSection` matching the category for rich result eligibility.

Consider a `/blog/[category]/[slug]` path structure only if transitioning to a CMS (e.g., WordPress, Contentful) that handles category archives cleanly with proper canonical tags.

---

### Product Catalog Scaling

The `/catalog` page will initially be a curated HTML page. As the product range grows:

- Add `/catalog/[scent-family]` sub-pages for each of the major fragrance families (Oriental/Oud, Floral, Fresh/Citrus, Woody/Amber, Gourmand, Musk/White)
- Each sub-page receives its own `CollectionPage` schema and targets long-tail queries like "oud fragrance oil supplier Dubai" or "floral perfume base wholesale UAE"
- Individual product entries within the catalog may eventually become `/catalog/[scent-family]/[product-slug]` pages with full `Product` schema — important for e-commerce readiness

---

### Location / Market Expansion Pages

When targeting new export markets, follow this URL convention:

```
/[country-market]-fragrance-supplier
```

Planned candidates:
- `/saudi-arabia-fragrance-supplier`
- `/india-fragrance-oil-export`
- `/pakistan-fragrance-supplier`
- `/africa-fragrance-oil-wholesale`

Each market page should:
- Include localized content (shipping times, regulations, MOQ for that market)
- Link back to `/shipping-compliance`
- Use `Service` schema with `areaServed` specifying the target country
- Not use hreflang unless a translated version exists

---

### E-Commerce Readiness

If a shopping cart / checkout is added later:

| Current Structure | E-Commerce Change |
|---|---|
| Service/product pages (informational) | Add `BuyAction` to existing `Product` schema |
| `/catalog` | Becomes the product listing page (PLP) |
| `/catalog/[family]` | Category PLPs |
| `/catalog/[family]/[product]` | Product detail pages (PDPs) |
| No cart | Add `/cart`, `/checkout`, `/order-confirmation` — all `noindex` |
| No account | Add `/account/*` — all `noindex` |

Existing service pages (`/wholesale-perfume-oil-dubai`, `/private-label-perfume-dubai`, etc.) should remain as informational landing pages and not be converted into e-commerce pages — they carry significant organic ranking value and serve a different buyer intent (research/quote) than a transactional product page.

---

### Multilingual Expansion Beyond Arabic

If additional languages are added (e.g., Hindi for Indian buyers, Urdu, French for West African market):

- Follow the same `/[lang-code]/[page-slug]` pattern
- Add all language variants to `hreflang` declarations on every page in the set
- Never use subdomain-based i18n (`ar.scentbazaar.co`) — subfolder approach preserves domain authority
- Add translated sitemaps and reference them in the root `sitemap.xml` via `<sitemap>` entries

---

*Document maintained by: ScentBazaar digital team*
*Architecture based on site state as of March 2026*
*Review and update this document whenever new pages are added or URL structures change*
