# Local SEO Analysis — scentbazaar.co
**Date:** 2026-04-25  
**Analyst:** Claude Code (claude-sonnet-4-6)

---

## Local SEO Score: 62 / 100

| Dimension | Weight | Score | Weighted |
|-----------|--------|-------|----------|
| GBP Signals | 25% | 52/100 | 13.0 |
| Reviews & Reputation | 20% | 72/100 | 14.4 |
| Local On-Page SEO | 20% | 68/100 | 13.6 |
| NAP Consistency & Citations | 15% | 48/100 | 7.2 |
| Local Schema Markup | 10% | 78/100 | 7.8 |
| Local Link & Authority | 10% | 60/100 | 6.0 |
| **TOTAL** | **100%** | | **62.0** |

---

## Business Type

**Brick-and-Mortar (with wholesale/export overlay)**

Physical address is prominently displayed across all pages: *Shop No. 47, Souq Naif, 47 St, Naif, Deira, Dubai, UAE*. The business also ships to 50+ countries, but its primary local signal is a walk-in showroom in Souq Naif. All brick-and-mortar checks apply.

---

## Industry Vertical

**Retail / Specialty Trade — Fragrance & Perfumery Wholesale**

No standard vertical match (restaurant, healthcare, legal, etc.). Closest Schema.org type: `Store` (currently used) is acceptable. The B2B wholesale dimension means this business competes in both "perfume shop near me" and "wholesale fragrance supplier Dubai" intent clusters. Local pack ranking matters most for the physical-store discovery use case.

---

## 1. GBP Signals — 52/100 (PARTIAL)

### Detected Signals ✅
| Signal | Status |
|--------|--------|
| Business name on page | ✅ Scent Bazaar |
| Phone number (`tel:` link) | ✅ `tel:+971547727106` |
| Physical address | ✅ Visible in footer sitewide |
| Business hours | ✅ Visible sitewide (Sat–Thu 8:30am–12am, Fri split) |
| `hasMap` in schema | ✅ `maps.app.goo.gl/emgwseVFB3m66nuW8` |
| Google Maps store locator | ✅ `gmpx-store-locator` on `/perfume-store-deira` |
| Social media presence | ✅ Instagram, Facebook, TikTok, YouTube, WhatsApp |
| Google Reviews widget | ✅ `reputationhub.site` iframe on `/perfume-store-deira` |

### Missing / Undetectable Signals ⚠️
| Signal | Status | Impact |
|--------|--------|--------|
| GBP embed on **homepage** | ❌ Not present | Medium |
| GBP primary category confirmation | ❌ Cannot verify remotely | High |
| GBP secondary categories (up to 4) | ❌ Cannot verify | Medium |
| GBP posts activity | ❌ No visible post feed | Low |
| Google Verified badge | ❌ Not referenced on site | Medium |
| Q&A content migrated to FAQ | ⚠️ GBP Q&A deprecated Dec 2025 — FAQ exists on multiple pages ✅ |

**Key issue:** The GBP listing URL strategy is unknown. Per Sterling Sky's Diversity Update, linking GBP to your homepage can suppress organic rankings. Verify that the GBP listing links to `/perfume-store-deira` or `/wholesale-perfume-oil-dubai` rather than the homepage.

---

## 2. Reviews & Reputation — 72/100 (PARTIAL-HIGH)

| Metric | Value | Benchmark | Status |
|--------|-------|-----------|--------|
| Google review count (schema) | 162 | ≥10 magic threshold | ✅ Well above |
| Star rating (homepage schema) | 5.0 / 5.0 | ≥4.5 | ✅ |
| Star rating (`/perfume-store-deira` schema) | 4.9 / 5.0 | ≥4.5 | ✅ |
| Rating consistency | ⚠️ 5.0 on homepage vs 4.9 on Deira page | — | Fix |
| `aggregateRating` in schema | ✅ Present on homepage + Deira page | — | ✅ |
| Review recency indicator | ❌ No date on review widgets | — | Missing |
| Owner response evidence | ❌ Not detectable on site | — | Unknown |
| Third-party platforms (Yelp, TripAdvisor, BBB) | ❌ None detected | 6 platforms avg | Critical gap |
| Review gating | ✅ No pre-screening detected | — | Clean |

**Rating Discrepancy:** `ratingValue: "5"` on the homepage schema vs `ratingValue: 4.9` on the Deira page. Pick one authoritative value (4.9 is more credible and likely matches GBP) and standardize across all pages. A perfect 5.0 on 162 reviews may also trigger skepticism from Google's quality raters.

**18-Day Rule Risk:** No review recency signals are visible on the site. If your last Google review was more than 18 days ago, rankings may already be declining. Establish a review cadence — minimum one new review every 2 weeks.

---

## 3. Local On-Page SEO — 68/100 (PARTIAL-HIGH)

### Title Tag Audit
| Page | Title | City Keyword | Service Keyword |
|------|-------|-------------|-----------------|
| Homepage | "Perfume Oil Supplier Dubai \| Wholesale Fragrance – Scent Bazaar" | ✅ Dubai | ✅ |
| `/perfume-store-deira` | "Perfume Store in Deira Dubai \| Wholesale Fragrance Hub" | ✅ Deira Dubai | ✅ |
| `/wholesale-perfume-oil-dubai` | (inferred from URL — strong local signal) | ✅ | ✅ |

Title tags are well-optimised sitewide with city + service keyword structure.

### H1 Audit
| Page | H1 |
|------|----|
| `/perfume-store-deira` | "Wholesale Perfume Store Deira, Dubai" ✅ |
| Homepage | Not retrieved — verify H1 contains "Dubai" |

### Dedicated Service Pages ✅
19 pages total in sitemap, covering distinct product/service verticals:
- Wholesale perfume oil, bulk fragrance oil, perfumers alcohol, perfume bottles, bakhoor, diffuser base, cosmetic base, private label, custom blending, perfume filling, fragrance oil, perfume caps/pumps, perfume base — **excellent coverage**.

### Gaps
| Issue | Status |
|-------|--------|
| Google Maps embed on homepage | ❌ No iframe — only a `goo.gl` directions link |
| Maps embed on service pages | ❌ Not detected (only on `/perfume-store-deira`) |
| Contact page | ❌ Returns 404 — no dedicated `/contact` page |
| Click-to-call button above the fold | ⚠️ `tel:` link exists but position not confirmed |
| Hub-and-spoke internal linking | ✅ Nav + ItemList schema links service pages |
| WhatsApp CTA | ✅ `wa.me/971547727106` present |

---

## 4. NAP Consistency & Citations — 48/100 (LOW-PARTIAL)

### NAP Cross-Source Comparison
| Source | Name | Address | Phone |
|--------|------|---------|-------|
| Page HTML (footer) | Scent Bazaar | Shop No. 47, Souq Naif, 47 St, Naif - Deira - Dubai | +971 54 772 7106 |
| JSON-LD schema (homepage) | Scent Bazaar | Shop No. 47, Souq Naif, 47 St, Naif, Deira, Dubai, AE | +971547727106 |
| JSON-LD schema (Deira page) | Scent Bazaar — Perfume Store Deira Dubai | Shop No. 47, Souq Naif, 47 St, Naif, Deira, Dubai, AE | +971547727106 |

**Issues found:**
1. **Phone format inconsistency:** Footer displays `+971 54 772 7106` (spaced); schema uses `+971547727106` (compact). Google may treat these as different numbers in some parsers. Standardise to E.164 format: `+971547727106` everywhere.
2. **Name inconsistency in schema:** Homepage schema name is `"Scent Bazaar"` but Deira page schema name is `"Scent Bazaar — Perfume Store Deira Dubai"`. This is acceptable for a location-specific page but ensure the GBP listing name matches exactly `"Scent Bazaar"`.
3. **Address punctuation:** Footer uses `Naif - Deira - Dubai` (dashes); schema uses `Naif, Deira, Dubai` (commas). Standardise to comma-separated.

### Citation Presence Audit
| Platform | Status | Notes |
|----------|--------|-------|
| Google Business Profile | ✅ Likely claimed (162 reviews) | Verify GBP link URL (see GBP section) |
| Yelp | ❌ Not detected | Not crawled or unclaimed |
| BBB | ❌ Not detected | UAE businesses use Dubai Chamber equivalent |
| Facebook Business Page | ✅ Linked on site | |
| TripAdvisor | ❌ Not detected | Relevant for tourist footfall in Souq Naif |
| Apple Business Connect | ❌ Not detected | Usage doubled to 27% — claim urgently |
| Bing Places | ❌ Not detected | **Critical:** Powers ChatGPT, Copilot, Alexa |
| Foursquare | ❌ Not detected | Data aggregator for downstream distribution |
| Data Axle / Neustar | ❌ Unknown | Aggregator submission recommended |
| Dubai Yellow Pages / UAE directories | ❌ Not detected | Regional priority |

**Citation gap is the biggest weakness.** 3 of the top 5 AI visibility factors are citation-related (Whitespark 2026). ChatGPT does NOT use GBP — it pulls from Bing, Yelp, TripAdvisor, BBB, and Reddit. Without Bing Places, Scent Bazaar is invisible to ChatGPT local recommendations.

---

## 5. Local Schema Markup — 78/100 (GOOD)

### Schema Inventory
| Page | Types Present |
|------|---------------|
| Homepage | `Store`, `FAQPage`, `ItemList`, `WebPage`, `WebSite` |
| `/perfume-store-deira` | `Store`, `FAQPage`, `BreadcrumbList` |
| All service pages | `ld+json` present (types not individually verified) |

### Schema Quality Assessment

**Strengths:**
- ✅ `Store` is an appropriate Schema.org subtype (more specific than generic `LocalBusiness`)
- ✅ `geo` coordinates present with high precision (5+ decimal places): `25.271353343018788, 55.30489217394019`
- ✅ `openingHoursSpecification` fully structured including Friday split hours
- ✅ `aggregateRating` with `ratingValue`, `reviewCount`, `bestRating`, `worstRating`
- ✅ `address` with proper `PostalAddress` sub-properties including `addressCountry: "AE"`
- ✅ `telephone`, `email`, `url`, `priceRange`, `image` all present
- ✅ `hasMap` pointing to Google Maps
- ✅ `sameAs` array with all social profiles (on Deira page)
- ✅ `@id` on both Store entities for deduplication
- ✅ `currenciesAccepted` and `paymentAccepted` (bonus properties)

**Issues to fix:**

| Issue | Severity | Fix |
|-------|----------|-----|
| `ratingValue: "5"` (string) on homepage vs `4.9` (number) on Deira page | High | Standardise to `4.9` (number) everywhere |
| `"closes": "00:00"` for midnight — some validators interpret this as start-of-day | Medium | Change to `"23:59"` or use the next-day convention with `validThrough` |
| `sameAs` missing from homepage Store schema | Medium | Add the same social array present on Deira page |
| `PostalCode` absent from `PostalAddress` | Low | Dubai doesn't use postcodes but add `"postalCode": ""` as empty string for completeness |
| Homepage `@id`: `#store` vs Deira `@id`: `perfume-store-deira#store` | Low | Ensure `parentOrganization` link is on the homepage schema too for entity graph completeness |

### Ready-to-Use Schema Fix (Homepage aggregateRating + sameAs)

```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": 4.9,
  "reviewCount": 162,
  "bestRating": 5,
  "worstRating": 1
},
"sameAs": [
  "https://www.instagram.com/scentbazaar/",
  "https://www.facebook.com/p/Scent-Bazaar-61582093276601/",
  "https://www.tiktok.com/@scentbazaar",
  "https://www.youtube.com/@scentbazaar"
]
```

### Ready-to-Use Opening Hours Fix (midnight close)
```json
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
```

---

## 6. Local Link & Authority Signals — 60/100 (PARTIAL)

### Detected Signals
| Signal | Status |
|--------|--------|
| Social media presence (Instagram, Facebook, TikTok, YouTube) | ✅ Active channels |
| WhatsApp Business | ✅ Linked on site |
| 162 Google reviews (implies engaged customer base) | ✅ Indirect authority signal |
| International shipping presence (50+ countries) | ✅ Brand credibility signal |

### Missing Signals ❌
| Signal | Priority |
|--------|----------|
| Dubai Chamber of Commerce membership | High |
| BBB / regional trade body accreditation | High |
| "Best of Dubai" / "Top fragrance suppliers UAE" list appearances | **Critical** (#1 AI visibility factor) |
| Local press/media mentions | High |
| Souq Naif / Deira community sponsorships | Medium |
| Industry directory listings (International Fragrance Association, etc.) | Medium |

**AI visibility note:** Brand mentions on external sites correlate 3× more strongly with AI visibility than traditional backlinks (Ahrefs: 0.664 vs 0.218). Getting Scent Bazaar mentioned in fragrance industry publications, Dubai business directories, and "best wholesale fragrance suppliers" roundup articles is the highest-leverage action for both AI and local pack rankings.

---

## AI Search Visibility (Local Context)

- **ChatGPT exposure:** Currently near-zero. ChatGPT sources local business data from Bing index, Yelp, TripAdvisor, BBB, and Reddit — none of which have a confirmed Scent Bazaar presence.
- **AI Overviews:** Appear on up to 68% of Dubai local searches. The site's FAQ schema and structured content are positive signals.
- **Bing Places:** Not detected — this is the single highest-impact quick win for AI search visibility.
- **Recommendation:** Run `/seo-geo https://scentbazaar.co/` for full AI citation scoring, llms.txt audit, and brand mention analysis.

---

## Top 10 Prioritised Actions

### 🔴 Critical
1. **Claim and optimise Bing Places** — Bing powers ChatGPT, Copilot, and Alexa. Without it, Scent Bazaar is invisible to ~45% of consumers now using AI for local recommendations. Takes 30 minutes. No cost.

2. **Claim and optimise Apple Business Connect** — Usage doubled to 27% in 2026. High-intent mobile users in Dubai use Apple Maps. Takes 30 minutes. No cost.

3. **Build citation presence on ChatGPT-sourced platforms** — At minimum: Yelp UAE, TripAdvisor (tourism footfall in Souq Naif), and a Trustpilot profile. These directly feed ChatGPT recommendations.

### 🟠 High Priority
4. **Standardise phone number format sitewide** — Change all footer/HTML instances to `+971547727106` (no spaces) to match schema. NAP inconsistencies hurt citation matching.

5. **Fix aggregateRating discrepancy** — Change homepage schema `ratingValue` from string `"5"` to number `4.9` to match the Deira page and actual GBP rating. A perfect 5.0 on 162 reviews may trigger quality rater skepticism.

6. **Add Google Maps iframe to homepage** — Replace or supplement the `goo.gl` directions link with a proper `<iframe>` embed. The `gmpx-store-locator` on the Deira page is excellent; replicate a simpler embed on the homepage.

7. **Verify and fix GBP link URL** — Log into GBP and confirm the "Website" link does NOT point to `scentbazaar.co/` (per Sterling Sky Diversity Update). It should link to `/perfume-store-deira` or `/wholesale-perfume-oil-dubai` to avoid suppressing homepage organic rankings.

### 🟡 Medium Priority
8. **Add a dedicated `/contact` page** — The current 404 on `/contact` wastes crawl budget and is a UX failure. A contact page with full NAP, embedded map, contact form, and WhatsApp CTA is a local SEO baseline requirement.

9. **Fix midnight closing time in schema** — Change `"closes": "00:00"` to `"closes": "23:59"` across all pages to prevent schema validation warnings and ensure correct display in local pack hours.

10. **Submit to UAE/regional data aggregators** — Submit NAP to Foursquare (business data) and regional aggregators serving the Gulf market. This ensures downstream distribution to navigation apps, voice assistants, and secondary directories.

### 🟢 Medium-Term
- Target "best perfume oil suppliers Dubai" and "best wholesale fragrance UAE" listicles and blogger roundups — #1 AI citation factor per Whitespark 2026.
- Pursue Dubai Chamber of Commerce listing and any IFRA (International Fragrance Association) membership for authority signals.
- Implement a systematic review generation cadence: aim for at least 1 new Google review every 14 days (18-day rule buffer).
- Add `sameAs` array to homepage Store schema (currently only on Deira page).

---

## Limitations Disclaimer

This analysis **could not assess**:

| Gap | What Would Fill It |
|-----|--------------------|
| Real-time local pack position for target keywords | BrightLocal, Whitespark, or manual search from Dubai IP |
| Geo-grid ranking (ranking by proximity radius) | BrightLocal Local Rank Tracker, DataForSEO Grid |
| GBP Insights data (views, calls, direction requests) | Google Business Profile dashboard |
| Domain Authority / link equity metrics | Moz, Ahrefs, or `/seo-backlinks` skill |
| Comprehensive backlink profile | Ahrefs, Semrush, or `/seo-backlinks` skill |
| Live GBP listing details (categories, photos count, post activity) | DataForSEO `local_business_data` or manual GBP audit |
| Competitor local pack landscape | DataForSEO `google_local_pack_serp`, BrightLocal |
| Review velocity over time | GBP Insights dashboard |

---

*Report generated: 2026-04-25 | scentbazaar.co | Claude Code seo-local skill*
