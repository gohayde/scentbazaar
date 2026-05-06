# Schema Markup Report — scentbazaar.co

**Audited:** 2026-05-06  
**URL:** https://scentbazaar.co/

---

## Detection Results

| Format | Found | Details |
|--------|-------|---------|
| JSON-LD | ❌ None | No `<script type="application/ld+json">` blocks detected |
| Microdata | ❌ None | No `itemscope`/`itemprop` attributes |
| RDFa | ❌ None | No `typeof`/`property` attributes |

**Zero structured data is present on the homepage.** This means Google cannot generate rich results for Scent Bazaar from any current markup.

---

## Missed Rich Result Opportunities

| Schema Type | Rich Result | Priority | Notes |
|-------------|-------------|----------|-------|
| `LocalBusiness` | Business info panel | 🔴 Critical | Physical store in Dubai — eligible for Knowledge Panel |
| `Organization` | Brand entity + sitelinks | 🔴 Critical | Establishes brand identity with Google |
| `WebSite` + `SearchAction` | Sitelinks search box | 🟠 High | Enables search box in Google SERP for branded queries |
| `Product` + `AggregateRating` | Star ratings in SERPs | 🟠 High | 162 reviews at 4.9★ — currently invisible to Google |
| `BreadcrumbList` | Breadcrumb trails in SERPs | 🟡 Medium | Improves SERP appearance for product/category pages |
| `Service` | Service knowledge | 🟡 Medium | Private label, custom blending, contract filling |

---

## Recommendations

### 1. Implement `LocalBusiness` + `Organization` on homepage (Critical)
The most impactful addition. Combines physical store details with brand entity signals. Enables Google Knowledge Panel eligibility.

### 2. Add `WebSite` with `SearchAction` (High)
Registers the site with Google and can trigger the sitelinks search box for branded queries.

### 3. Surface reviews via `AggregateRating` (High)
162 reviews at 4.9★ are wasted without schema. Add to product pages and/or homepage.

### 4. Add `BreadcrumbList` to category/product pages (Medium)
Improves click-through rate by showing path hierarchy in SERPs.

### 5. Add `Service` schema to service pages (Medium)
Mark up private label, custom blending, and contract filling as distinct services.

---

## Implementation Notes

- Use **JSON-LD injected in server-rendered HTML** (not via JavaScript) — especially for `Product`/`Offer` markup, per Google's December 2025 JS SEO guidance.
- Place schema in `<head>` or at the end of `<body>` before `</body>`.
- Validate all markup at: https://validator.schema.org and https://search.google.com/test/rich-results

---

*Generated schema: see `generated-schema.json`*
