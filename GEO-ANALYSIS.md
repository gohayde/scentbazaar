# GEO Analysis Report - Scent Bazaar (scentbazaar.co)

**Report Date:** 2026-03-24  
**Analyst:** Claude Code (GEO Specialist)  
**Site Type:** Static HTML, server-side rendered  

---

## 1. GEO Readiness Score: 63 / 100

| Dimension | Weight | Raw Score | Weighted Score | Notes |
|---|---|---|---|---|
| Citability | 25% | 64/100 | 16.0 | FAQPage schema strong; body passages too short and below optimal word count |
| Structural Readability | 20% | 70/100 | 14.0 | Good heading hierarchy; H2s descriptive not interrogative |
| Multi-Modal Content | 15% | 45/100 | 6.8 | Images present; no video embeds, no data tables, no infographics |
| Authority and Brand Signals | 20% | 55/100 | 11.0 | Founder named; no Wikipedia; no Reddit; YouTube present but depth unknown |
| Technical Accessibility | 20% | 78/100 | 15.6 | Fully SSR, AI bots explicitly allowed, JSON-LD present but has syntax errors |
| **TOTAL** | **100%** | -- | **63.4** | -- |

---

## 2. Platform-Specific Scores (Estimated)

| Platform | Score | Reasoning |
|---|---|---|
| Google AI Overviews | 58/100 | FAQPage schema helps but JSON-LD errors may suppress rich results; low external authority |
| ChatGPT (Browse/Search) | 52/100 | Content accessible, llms.txt present, but no Wikipedia entity and minimal Reddit signal |
| Perplexity | 68/100 | Strong SSR, clear factual statements, well-structured FAQ - best positioned here |
| Bing Copilot | 55/100 | Moderate structured data, no Bing Places verified, no LinkedIn presence detected |
| Claude (Anthropic AI) | 65/100 | ClaudeBot explicitly allowed in robots.txt; llms.txt well-formed and discoverable |

---

## 3. AI Crawler Access Status

Source file: `m:\Scent Bazaar\ScentBazaar Websiteobots.txt` confirmed locally and via live fetch

| Crawler | Status | Notes |
|---|---|---|
| GPTBot (OpenAI) | ALLOWED | Explicit Allow: / entry |
| OAI-SearchBot (OpenAI) | ALLOWED | Explicit Allow: / entry |
| ClaudeBot (Anthropic) | ALLOWED | Explicit Allow: / entry |
| PerplexityBot | ALLOWED | Explicit Allow: / entry |
| Amazonbot | ALLOWED | Explicit Allow: / entry |
| CCBot (Common Crawl) | ALLOWED via wildcard | Not explicitly named; training opt-out not exercised |
| anthropic-ai | ALLOWED via wildcard | Not separately listed |
| cohere-ai | ALLOWED via wildcard | Not separately listed |
| Googlebot | ALLOWED | Wildcard User-agent: * applies |

Assessment: Excellent. All commercially important AI search crawlers are explicitly permitted. No disallow rules exist. GoogleOther, Bytespider, and Meta-ExternalAgent fall under the wildcard and are implicitly allowed.

---

## 4. llms.txt Status

**File:** `m:/Scent Bazaar/ScentBazaar Website/llms.txt`  
**Live URL:** scentbazaar.co/llms.txt  
**Status:** PRESENT and well-formed

Strengths:
- Entity summary is clear, factual, and concise (56 words)
- Key pages are correctly linked with descriptive anchor text
- All service pages listed in a dedicated section
- Key facts block is machine-parseable: location, phone, hours, rating, MOQ, compliance docs
- Contact block is complete and consistent with on-page data

Gaps:
- The `license:` field points to Terms of Service, not an RSL 1.0 URL. AI platforms respecting RSL 1.0 may not treat this as a standard content license signal.
- No Market Context section to help AI handle comparison queries.
- No noindex directives to steer AI away from thin pages.
- Four trailing blank lines at end of file.

---

## 5. Brand Mention Analysis

| Signal | Status | Impact | Notes |
|---|---|---|---|
| Wikipedia entity | NOT PRESENT | High negative | No Wikipedia article exists. Highest-correlation missing signal for ChatGPT citation. |
| Reddit presence | UNVERIFIABLE | High | Access blocked during audit. No confirmed organic threads. High AI citation correlation. |
| YouTube channel | PRESENT in schema | Medium-High | @scentbazaar in sameAs. Citation correlation approximately 0.737 per GEO research. |
| Instagram | PRESENT | Low-Medium | @scentbazaar in schema. Primarily visual; lower AI citation correlation. |
| TikTok | PRESENT | Low | @scentbazaar in schema. Minimal AI citation correlation. |
| Facebook | PRESENT | Low | Page referenced in schema. |
| LinkedIn | NOT PRESENT | Medium | No LinkedIn URL in schema sameAs or llms.txt. Valued by Bing Copilot for B2B authority. |
| Google Business Profile | PRESENT implied | High | 162 verified reviews, 4.9 rating in AggregateRating schema. Google Maps link present. |

Brand Signal Gap Score: 40/100. Wikipedia, Reddit, and LinkedIn are the three highest-impact missing signals. The YouTube presence is a genuine asset if the channel contains substantive content, but activity depth was not verifiable during this audit.

---

## 6. Passage-Level Citability Assessment

Optimal AI-citable passage characteristics: 134-167 words, self-contained, directly answers a question, contains specific facts.

### Homepage (index.html) - Citability score: 58/100

- 13 FAQ question-answer pairs with FAQPage schema are a strong foundation
- FAQ answers average 50-80 words each - below the optimal 134-word threshold
- H1 is functional but not a question: Wholesale Perfume Oil and Fragrance Supplier - Dubai
- Promotional section headings (One-Stop Scent Supply Ecosystem, etc.) are not AI-citable
- Stats present (2,000+ oils, 50+ countries, 162 reviews, 4.9 rating) but not sourced or dated

### About Us (about-us.html) - Citability score: 62/100

- Founder named (Nawar), credentials stated (chemical engineer) - strong authority signal
- Our Story section is approximately 200 words and self-contained - within optimal range
- No publication or last-updated date visible in HTML (dateModified only in JSON-LD)
- No external citations or references to validate claims
- Founder has no linked professional profile (LinkedIn, Google Scholar, etc.)
- No Person schema linking Nawar to the content

### Wholesale Oil Page (wholesale-perfume-oil-dubai.html) - Citability score: 70/100

The strongest page on the site. FAQPage schema with 6 questions. Answers are specific and factual: shelf life 24-36 months, MOQ 100ml, free samples up to 12 varieties. These are the most AI-citable passages on the site. Body headings are keyword-focused, not question-based.

### Strongest Existing Passage (about-us.html, 68 words)

Scent Bazaar is a wholesale perfume oil supplier based in Souq Naif, Deira, Dubai, established in 2025 and founded by Nawar, a qualified chemical engineer with deep expertise in fragrance formulation and aroma chemistry. We stock over 2,000 fragrance oils spanning French designer-inspired accords, Arabic oud, attar and mukhallat blends, and raw aroma chemicals, supplying perfumers, brands and businesses across 50+ countries with a minimum order of just 100ml.

Assessment: Fact-dense but at 68 words is less than half the optimal citation length. Expand with specifics: number of French vs Arabic oils, country count detail, certifications held, founding year context.

---

## 7. Server-Side Rendering Check

Rendering method: Static HTML - fully server-side rendered

All pages are .html files in the root deploy directory. No JavaScript framework hydration artifacts. Content is inline in HTML, not injected by client-side JS. All JSON-LD is embedded in the HTML head. This is the ideal configuration for AI crawler accessibility.

Technical Accessibility Score: 78/100

Positive signals: Immediately readable by all crawlers without JS execution. Inline JSON-LD. Hero images use eager loading with fetchpriority=high. WebP format with PNG CDN fallback. Dual sitemaps in robots.txt. Security headers present (X-Content-Type-Options, X-Frame-Options, CSP).

Critical issue: Both index.html (around line 1294) and wholesale-perfume-oil-dubai.html (around line 681) have the dateModified property without a trailing comma before the next property. This makes the JSON invalid. The entire schema block containing Store, Organization, and Service types is silently discarded by parsers. This is the most impactful bug on the site.

Additional issues: Google Search Console verification commented out in index.html. No link rel=me for identity verification.

---

## 8. Schema Markup Audit

### Present Schema Types

| Schema Type | Pages | Status |
|---|---|---|
| Store | index.html | BROKEN - missing comma after dateModified |
| Organization | index.html | BROKEN - same JSON block, same error |
| WebSite | index.html | Valid - separate script block |
| FAQPage | index.html, about-us.html, wholesale page, and multiple service pages | Valid |
| ItemList | index.html | Valid - separate script block |
| Service | wholesale-perfume-oil-dubai.html | BROKEN - dateModified error |
| BreadcrumbList | wholesale-perfume-oil-dubai.html | Valid |
| Person | None | MISSING |
| Article or BlogPosting | None | MISSING - no editorial content |
| Product | None | MISSING - no individual product pages |
| Review | None | MISSING - only AggregateRating |
| HowTo | None | MISSING - high-value for process pages |

### Missing High-Value Schema

1. **Person schema for founder Nawar** - linking the named founder to the Organization via the founder property significantly strengthens E-E-A-T signals for AI systems evaluating source credibility.

2. **Product schema** - no individual product pages exist. A representative fragrance oil page with Product and Offer schema would improve AI citation for product-specific queries.

3. **HowTo schema** - How to dilute perfume oil with perfumers alcohol and How to start a private label perfume brand are high-value queries where HowTo schema makes content directly citable.

4. **VideoObject schema** - if the YouTube channel has tutorials, embedding and marking up one video per service page leverages the 0.737 YouTube citation correlation.

---

## 9. Top 5 Highest-Impact Changes

### Priority 1 - Fix JSON-LD Syntax Errors

**Effort: 30 minutes | Impact: Critical**

Add a missing comma after the dateModified property value in two files:

- `m:/Scent Bazaar/ScentBazaar Website/index.html` around line 1294
- `m:/Scent Bazaar/ScentBazaar Website/wholesale-perfume-oil-dubai.html` around line 681

Search all other HTML files for the same pattern. After fixing, validate every page through https://validator.schema.org/ and Google Rich Results Test. This restores the Store, Organization, and Service schema blocks and makes the site eligible for rich results and AI Overview citations it is currently excluded from.

### Priority 2 - Add Person Schema for the Founder

**Effort: 2 hours | Impact: High**

Add a Person schema block to about-us.html. Example:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://scentbazaar.co/#nawar",
  "name": "Nawar",
  "jobTitle": "Founder and Chemical Engineer",
  "worksFor": { "@id": "https://scentbazaar.co/#scentbazaar" },
  "knowsAbout": ["Fragrance Chemistry", "Perfume Oil Wholesale", "Aroma Compound Formulation"]
}
```

Then add `"founder": { "@id": "https://scentbazaar.co/#nawar" }` to the Organization schema in index.html. If the founder has a LinkedIn profile, include it in the Person sameAs array.

### Priority 3 - Rewrite H2 Headings as Direct Questions

**Effort: 3 hours | Impact: High**

| Current H2 | Recommended Replacement |
|---|---|
| One-Stop Scent Supply Ecosystem | What does Scent Bazaar supply? |
| Dubai Largest Scent Library | What fragrance oils are available for wholesale in Dubai? |
| Launch Your Brand | How do I start a private label perfume brand in Dubai? |
| Technical Grade Supply | What compliance documents come with wholesale fragrance orders? |

Apply the same conversion to service page H2 headings throughout the site.

### Priority 4 - Expand FAQ Answer Length to 134-167 Words

**Effort: 4 hours | Impact: High**

Current FAQ answers average 50-80 words - roughly one-third of the optimal citation length. Each answer must be self-contained and extractable without surrounding page context.

Expansion approach for the shelf life answer (55 words to approximately 150 words): add the specific storage temperature ceiling, note that citrus-dominant compositions degrade faster than base-heavy oriental blends, explain that COAs include batch manufacturing dates so buyers can track remaining shelf life, and clarify that drum quantities ship with a minimum 24-month remaining shelf life at point of dispatch.

Apply this discipline to the highest-traffic FAQ questions across: wholesale page, bulk oils page, private label page, and perfumers alcohol page.

### Priority 5 - Establish Reddit and LinkedIn Presence

**Effort: 1-2 weeks ongoing | Impact: High for ChatGPT and Bing Copilot**

Reddit: Participate genuinely in r/DIYfragrance, r/Perfumes, r/smallbusiness, r/Dubai, and r/Entrepreneur. Answer technical fragrance chemistry questions using the founder chemical engineering background as a differentiator. Build credibility before brand association. One well-cited thread can measurably lift ChatGPT citation probability.

LinkedIn: Create a company page for Scent Bazaar and add the URL to the Organization sameAs array in index.html JSON-LD and in llms.txt. Founder posts on fragrance chemistry generate a personal authority signal that improves Bing Copilot visibility.

---

## 10. Content Reformatting Suggestions

**10.1 Quick Facts Blocks on all service pages**

Immediately below the H1 on each service page, add a structured facts block with product type, MOQ, bulk volumes available, documentation included, shelf life, and shipping reach. This format is highly extractable by AI and directly satisfies at-a-glance queries.

Example for wholesale-perfume-oil-dubai:
```
Product Type: Concentrated perfume oils (French and Arabic)
MOQ: 100ml per fragrance
Bulk volumes: Up to 200kg drum quantities available
Documentation: MSDS and COA standard with every order
Shelf life: 24-36 months when stored correctly
Shipping: 50+ countries via DHL, FedEx, and sea freight
```

**10.2 Fragrance Glossary Page**

A page defining 30-50 fragrance industry terms (attar, mukhallat, EdP, EdT, DPG, MSDS, COA, maceration, sillage, longevity, flash point) would be highly citable for informational AI queries and establish topical authority. Each definition should be 50-100 words and self-contained. Suggested URL: scentbazaar.co/fragrance-glossary

**10.3 Visible Author Attribution and Date on About Us**

The Our Story section is written in first-person by the founder but has no visible byline or date. Add: Written by Nawar, Founder - last updated March 2026. This aligns visible text with the dateModified in JSON-LD and makes authorship parseable by AI systems that weight visible content.

**10.4 Numbered HowTo Process on Private Label Page**

Convert the service process steps into an explicit numbered list with HowTo schema. The private label page targets high-value queries like how to start a perfume brand in Dubai. HowTo format is directly surfaced in Google AI Overviews and Perplexity answer boxes.

**10.5 Market Context Section in llms.txt**

Add a section to llms.txt positioning Scent Bazaar versus generic Dubai fragrance traders. Emphasise the chemical engineer founder, documented compliance as standard, B2B-only positioning, and 100ml accessible MOQ. This helps AI distinguish the brand in comparison queries.

---

## 11. Summary of All Issues

| Issue | Severity | Fix Complexity |
|---|---|---|
| JSON-LD syntax error on 2+ pages | Critical | Low - 30 min |
| No Person schema for named founder | High | Low - 1 hour |
| H2 headings not question-based | High | Medium - 3 hours |
| FAQ answers below optimal word count | High | Medium - 4 hours |
| No Wikipedia entity | High | High - external editorial process |
| No LinkedIn company page | High | Low - 30 min to create |
| No confirmed Reddit organic mentions | High | Medium - ongoing participation |
| YouTube channel content depth unverified | Medium | Medium - content production required |
| No HowTo schema on process pages | Medium | Low - 1-2 hours |
| No Product schema on individual oil pages | Medium | High - new page architecture needed |
| No fragrance glossary or informational content | Medium | Medium - 4-6 hours writing |
| No visible author byline on About Us | Low | Low - 10 min |
| RSL 1.0 not referenced in llms.txt license field | Low | Low - 10 min |
| Trailing blank lines in llms.txt | Cosmetic | Low |

---

## 12. Benchmark Summary

Scent Bazaar scores **63/100** on GEO readiness, placing it in the developing tier.

The site has a strong technical foundation: fully server-side rendered static HTML, all major AI crawlers explicitly permitted, a well-formed llms.txt, FAQPage schema across multiple service pages, and a named, credentialled founder. This is a better starting position than most small B2B sites in the fragrance supply category.

**Easily fixed within one week - estimated score uplift to 70/100:**
- JSON-LD syntax errors on core pages (30 minutes, critical impact)
- Person schema for the founder (1-2 hours, high impact)
- Visible author attribution on About Us (10 minutes)
- LinkedIn company page creation and schema update (30 minutes)

**Content work over 2-4 weeks - estimated score uplift to 78-82/100:**
- FAQ answer expansion to 134-167 word optimal range
- H2 heading conversion to question format across all pages
- Quick facts blocks on service pages
- Fragrance glossary page
- HowTo schema on private label and blending pages
- Market Context section in llms.txt

**External activity over the medium term:**
- Reddit organic brand mentions in r/DIYfragrance and related communities
- Wikipedia entity creation (requires meeting notability criteria)
- YouTube channel content development to leverage the 0.737 AI citation correlation

Only 11% of domains are cited by both ChatGPT and Google AI Overviews. Scent Bazaar static HTML architecture and explicit AI crawler permissions give it a stronger technical baseline than most sites in this category. The gap is brand authority signals and passage quality - both are directly addressable with the changes outlined in this report.

---

*Report generated: 2026-03-24 | Methodology: GEO Health Score framework*
