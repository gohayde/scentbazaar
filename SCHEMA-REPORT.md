# Schema.org Markup Audit — ScentBazaar
**Date:** 2026-03-26
**Analyst:** Claude Code (Schema.org Specialist)
**Site:** https://scentbazaar.co/
**Validated against:** Google Rich Results requirements (March 2026)

---

## 1. Detection Summary

Pages crawled:
- `https://scentbazaar.co/` (homepage)
- `https://scentbazaar.co/wholesale-perfume-oil-dubai`
- `https://scentbazaar.co/private-label-perfume-dubai`
- `https://scentbazaar.co/about-us`

No Microdata or RDFa was found on any page. All schema markup uses JSON-LD format, which is correct and Google's preferred implementation method.

---

## 2. Inventory of Existing Schema

### Homepage (`/`)

| Block | Type(s) | Format |
|-------|---------|--------|
| 1 | `Store`, `Organization`, `Person`, `WebSite`, `FAQPage` (via `@graph`) | JSON-LD |
| 2 | `ItemList` | JSON-LD |

### Wholesale Page (`/wholesale-perfume-oil-dubai`)

| Block | Type(s) | Format |
|-------|---------|--------|
| 1 | `Service`, `BreadcrumbList` (via `@graph`) | JSON-LD |
| 2 | `FAQPage` | JSON-LD |

### Private Label Page (`/private-label-perfume-dubai`)

| Block | Type(s) | Format |
|-------|---------|--------|
| 1 | `Service`, `BreadcrumbList` (via `@graph`) | JSON-LD |
| 2 | `FAQPage` | JSON-LD |
| 3 | `ItemList` | JSON-LD |

### About Page (`/about-us`)

| Block | Type(s) | Format |
|-------|---------|--------|
| 1 | `FAQPage` | JSON-LD |
| 2 | `AboutPage` | JSON-LD |
| 3 | `Person` | JSON-LD |

---

## 3. Validation Results

### HOMEPAGE — Block 1: `@graph` (Store / Organization / Person / WebSite / FAQPage)

#### Store
| Check | Result | Notes |
|-------|--------|-------|
| `@context` is `https://schema.org` | PASS | |
| `@type` valid | PASS | `Store` is a valid LocalBusiness subtype |
| Required: `name` | PASS | "Scent Bazaar" |
| Required: `address` | PASS | PostalAddress present |
| `telephone` | PASS | E.164 format |
| `geo` GeoCoordinates | PASS | Lat/lng present |
| `openingHoursSpecification` | PASS | Present with days and hours |
| `aggregateRating` | PASS | ratingValue, ratingCount, bestRating, worstRating all present |
| `image` | PASS | Absolute URL |
| `currenciesAccepted` | PASS | |
| `priceRange` | PASS | |
| `sameAs` | PASS | 4 social profiles |
| `postalCode` missing from address | WARN | Recommended by Google for LocalBusiness; may reduce rich result eligibility |
| `email` missing | INFO | Recommended property; email `info@scentbazaar.co` known from about page |
| Sunday hours not specified | INFO | Only Mon–Sat specified; Sunday status is ambiguous to Google |

#### Organization
| Check | Result | Notes |
|-------|--------|-------|
| `name` | WARN | "ScentBazaar" (no space) inconsistent with Store's "Scent Bazaar" — inconsistency across nodes |
| `logo` | PASS | Absolute URL present |
| `url` | PASS | |
| `email` missing | INFO | |
| `description` missing | WARN | Recommended for Knowledge Panel generation |
| `legalName` missing | INFO | Useful for B2B brand authority |

#### Person
| Check | Result | Notes |
|-------|--------|-------|
| `name` | PASS | |
| `jobTitle` | PASS | |
| `description` | PASS | |
| `worksFor` | PASS | References `@id` |
| `image` missing | INFO | Recommended for Person rich results |
| `knowsAbout` missing | INFO | Adds topical authority signals |

#### WebSite
| Check | Result | Notes |
|-------|--------|-------|
| `@context`, `@type`, `url`, `name` | PASS | All present |
| `SearchAction` (Sitelinks Searchbox) missing | WARN | Eligible site; SearchAction enables Google Sitelinks Searchbox in SERPs |
| `potentialAction` missing | WARN | Required to implement SearchAction |

#### FAQPage (Homepage)
| Check | Result | Notes |
|-------|--------|-------|
| `@type` FAQPage | INFO | Commercial site — no Google rich results since August 2023. Still benefits AI/LLM citation (GEO value). |
| Duplicate questions detected | FAIL | "What is the difference between Eau de Parfum and Eau de Toilette?" appears twice; "Can I mix French fragrance oils with Arabic oud?" appears twice; "Do you offer samples?" appears twice; "What certifications do I need..." appears twice. This signals low quality to crawlers and should be fixed. |
| `acceptedAnswer` present on all | PASS | |

---

### HOMEPAGE — Block 2: `ItemList`
| Check | Result | Notes |
|-------|--------|-------|
| `@type` | PASS | `ItemList` |
| `name` | PASS | |
| All `ListItem` have `position` and `url` | PASS | |
| `url` values are absolute | PASS | |
| This is a navigation/product list, not a defined rich result type | INFO | Google does not produce rich results for generic ItemList; used for carousel eligibility on article/product pages |

---

### WHOLESALE PAGE — Block 1: `Service` + `BreadcrumbList`

#### Service
| Check | Result | Notes |
|-------|--------|-------|
| `name`, `provider`, `serviceType`, `description`, `url` | PASS | |
| `areaServed` | PASS | |
| `offers` missing | INFO | Adding an `Offer` with price range would strengthen this for B2B queries |
| `hasOfferCatalog` missing | INFO | Recommended for service pages listing multiple product types |

#### BreadcrumbList
| Check | Result | Notes |
|-------|--------|-------|
| `@type` | PASS | |
| `position`, `name`, `item` on each ListItem | PASS | |
| URLs are absolute | PASS | |
| Google rich result eligibility | PASS | BreadcrumbList is fully supported |

---

### WHOLESALE PAGE — Block 2: `FAQPage`
| Check | Result | Notes |
|-------|--------|-------|
| Structure valid | PASS | |
| Google rich result eligibility | INFO | Commercial site — no rich results; GEO/AI value retained |
| No duplicate questions | PASS | |

---

### PRIVATE LABEL PAGE — Blocks 1–3
| Check | Result | Notes |
|-------|--------|-------|
| `Service` + `BreadcrumbList` | PASS | Same pattern as wholesale; well-formed |
| `FAQPage` | INFO | Commercial site restriction applies |
| `ItemList` (process steps) | PASS | Well-structured; `itemListOrder` and `numberOfItems` present |
| `Service` missing `offers` | INFO | Same as wholesale page |

---

### ABOUT PAGE — Blocks 1–3
| Check | Result | Notes |
|-------|--------|-------|
| `FAQPage` | INFO | Commercial site restriction applies; GEO value intact |
| `AboutPage` — `name`, `description`, `url`, `about` | PASS | |
| `AboutPage` `datePublished` and `dateModified` identical | WARN | Both are `2026-03-17`; if the page has been updated, `dateModified` should reflect the actual update date |
| `AboutPage` `author` uses `@id` reference | PASS | References `#nawar` correctly |
| `Person` — `name`, `jobTitle`, `description`, `worksFor` | PASS | |
| `Person` `image` missing | INFO | Recommended for Person entity disambiguation |
| `Person` `founder` property points to the org | WARN | `founder` is an inverse relationship — it should be on the Organization node pointing to the Person, not on the Person node. Use `foundedOrganization` on Person instead, or move `founder` to Organization. |

---

## 4. Issues by Priority

### Critical (fix immediately — structural errors)
1. **Duplicate FAQ questions on homepage.** Four questions appear twice each. This creates a malformed `FAQPage` block and signals content quality issues to crawlers. Remove duplicates.

### High (fix soon — missing required or high-value properties)
2. **`WebSite` lacks `SearchAction` / `potentialAction`.** The site is eligible for Google's Sitelinks Searchbox. Adding a `SearchAction` can produce a search box directly in the SERP result.
3. **`Organization` name inconsistency.** "ScentBazaar" (no space) in the Organization node conflicts with "Scent Bazaar" in Store and all page titles. Standardise to "Scent Bazaar".
4. **`Organization` missing `description`.** Required for Google Knowledge Panel generation.
5. **`postalCode` missing from all `PostalAddress` nodes.** Google's LocalBusiness documentation recommends a full postal address. For Dubai, the appropriate value is the area code or "NA" is not acceptable — Naif / Deira uses postal code 00000 or the PO Box if known.

### Medium (recommended improvements)
6. **`Person.founder` inverse relationship error.** Move `founder` off the Person node; use `foundedOrganization` on Person, or put `founder` only on the Organization.
7. **`AboutPage` `dateModified` equals `datePublished`.** Update `dateModified` to reflect actual last modification.
8. **`email` missing from `Organization` and `Store`.** The address `info@scentbazaar.co` is mentioned on the about page and should be added.
9. **`Service` pages missing `Offer`.** Adding price range offers strengthens B2B service signals.
10. **No `WebPage` schema on interior pages.** Adding `WebPage` with `breadcrumb`, `primaryImageOfPage`, and `speakable` would improve LLM/AI discoverability.

### Info (low-priority enhancements)
11. **`Person` missing `image`.** Adds entity disambiguation for founder.
12. **`Person` missing `knowsAbout`.** Adds topical authority.
13. **`WebSite` missing `inLanguage`.** Clarifies content language to crawlers.
14. **No `Product` schema anywhere.** As a product-selling business (perfume oils, bottles, alcohol), key product category pages could carry `Product` schema with `Offer` for price signals. This is a significant missed rich result opportunity.
15. **No `Review` or linked review markup.** The Store has an `aggregateRating` of 4.9 (162 reviews) but individual reviews are not marked up, reducing review snippet depth.

---

## 5. Missing Schema Opportunities

### 5.1 `SearchAction` on `WebSite` (High priority)
Adds Sitelinks Searchbox capability in Google SERPs.

### 5.2 `Product` schema on product category pages (High priority for e-commerce)
Pages such as `/wholesale-perfume-oil-dubai`, `/perfumers-alcohol-supplier-dubai`, `/perfume-bottle-supplier-dubai` are product/service category pages. Adding `Product` or `Service` with `Offer` schema enables price display in rich results.

### 5.3 `WebPage` with `speakable` on key pages (Medium)
Improves AI assistant / voice search citation of the site content.

### 5.4 `LocalBusiness` opening hours for Sunday (Low)
Currently only Monday–Saturday is defined. If closed Sunday, add it explicitly with `opens: "00:00"` and `closes: "00:00"`.

---

## 6. Generated JSON-LD

See `generated-schema.json` for all recommended additions and corrections. Each block is labeled with the target page.

---

## 7. Summary Scorecard

| Page | Schema Present | Critical Issues | High Issues | Score |
|------|---------------|----------------|-------------|-------|
| Homepage | Store, Org, Person, WebSite, FAQPage, ItemList | 1 (dupe FAQ) | 3 | 6/10 |
| Wholesale | Service, BreadcrumbList, FAQPage | 0 | 1 | 8/10 |
| Private Label | Service, BreadcrumbList, FAQPage, ItemList | 0 | 1 | 8/10 |
| About Us | FAQPage, AboutPage, Person | 0 | 2 | 7/10 |

**Overall site schema score: 7.25/10**

Key strengths: JSON-LD format throughout, consistent use of `@id` for entity references, BreadcrumbList on all service pages, comprehensive LocalBusiness/Store markup with geo and hours.

Key gaps: Duplicate FAQ content on homepage, missing `SearchAction`, no `Product` schema, minor property inconsistencies.
