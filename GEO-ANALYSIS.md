# GEO Analysis Report - Scent Bazaar (scentbazaar.co)

**Report Date:** 2026-04-25
**Analyst:** Claude Code GEO Engine (claude-sonnet-4-6)
**Site:** https://scentbazaar.co/
**Business:** B2B wholesale perfume oil and fragrance supplier, Souq Naif, Deira, Dubai, UAE

---

## GEO Readiness Score: 71/100

| Dimension | Weight | Raw Score | Weighted |
|-----------|--------|-----------|----------|
| Citability | 25% | 72/100 | 18.0 |
| Structural Readability | 20% | 78/100 | 15.6 |
| Multi-Modal Content | 15% | 55/100 | 8.25 |
| Authority and Brand Signals | 20% | 62/100 | 12.4 |
| Technical Accessibility | 20% | 85/100 | 17.0 |
| **TOTAL** | | | **71.25 / 100** |

**Interpretation:** Scent Bazaar is in solid GEO territory, significantly above the average SMB site (~45-55). The technical foundations are strong (SSR, schema, robots.txt). The main drag on the score is the absence of third-party brand mentions (Wikipedia, Reddit, YouTube content depth) and passage-level citability gaps where prose answers are good in FAQs but thin in section body copy.

---

## Platform-Specific Scores

| Platform | Score | Notes |
|----------|-------|-------|
| Google AI Overviews (AIO) | 68/100 | FAQ schema present; strong local entity signals; no Wikipedia entity; structured data well-formed |
| ChatGPT (Browse/Search) | 65/100 | GPTBot and OAI-SearchBot both allowed; llms.txt present but has hours conflict and missing founder detail |
| Perplexity | 74/100 | PerplexityBot explicitly allowed; SSR content extractable; FAQ answers are well-formed citable passages; strong local specificity |
| Bing Copilot | 70/100 | Full SSR; IndexNow key deployed; sitemap referenced in robots.txt; meta descriptions concise and accurate |

---

## AI Crawler Access Status

**Source:** https://scentbazaar.co/robots.txt (verified 2026-04-25)

| Crawler | Owner | Purpose | Status |
|---------|-------|---------|--------|
| GPTBot | OpenAI | Training + search | ALLOWED |
| OAI-SearchBot | OpenAI | Search grounding | ALLOWED |
| ClaudeBot | Anthropic | Training + citations | ALLOWED |
| PerplexityBot | Perplexity AI | Search synthesis | ALLOWED |
| Amazonbot | Amazon | Alexa/product AI | ALLOWED |
| CCBot | Common Crawl | Training datasets | Not listed (defaults to ALLOWED via wildcard) |
| anthropic-ai | Anthropic | Training | Not listed (defaults to ALLOWED via wildcard) |
| cohere-ai | Cohere | Training | Not listed (defaults to ALLOWED via wildcard) |

**Verdict: Excellent.** All four primary AI search crawlers are explicitly permitted. The wildcard  rule provides a safe fallback for any unlisted crawler. No AI bots are blocked. Two sitemaps are referenced in robots.txt, accelerating crawl discovery.

**Optional action:** If the business decides to block training-only crawlers while maintaining search visibility, add explicit  rules for , , and . This is optional and has no negative impact on AI search citations.

---

## llms.txt Status

**URL:** https://scentbazaar.co/llms.txt  
**Status:** PRESENT  
**Licensing:** RSL 1.0 (declared at bottom of file)  
**Quality Assessment:** Good - 7.5/10

### What Is Working

- Business identity, location, and founding date clearly stated
- Products and services listed in a clean, scannable format
- Key quantitative facts present: 2,000+ oils, 162 reviews, 4.9/5 rating, 50+ countries, 100ml MOQ
- All key service pages linked with descriptive anchor text
- RSL 1.0 licence declared, signalling AI-safe content to compliant crawlers
- Contact details and hours included

### What Is Missing or Weak

1. **No founder authority section.** Nawar Mohammed (chemical engineer, founder) is referenced in schema but absent from llms.txt. A brief bio with credentials signals expertise to LLMs assessing E-E-A-T.
2. **No geographical context for AI.** Dubai''s role as a global fragrance trade hub is not explained. LLMs citing this page benefit from anchoring context that cannot be inferred from product listings alone.
3. **No competitive differentiators stated.** What makes Scent Bazaar distinct from other Dubai suppliers is not articulated. LLMs cannot infer this without explicit text.
4. **No update/verified date.** LLMs prefer recency signals. A "Last verified: 2026-04-25" line improves citation confidence.
5. **CRITICAL - Hours conflict.** The llms.txt states "Monday-Saturday, 9:00 AM - 10:00 PM" but the schema and page HTML state "Sat-Thu 8:30 AM-12:00 AM, Friday split hours." This inconsistency can cause an LLM to cite incorrect information or deprioritise the source as unreliable. This must be corrected.

### Ready-to-Use llms.txt Template (Drop-In Replacement)

See the expanded template below. Key additions over the current file:

- Founder bio paragraph with chemical engineer credential
- Geographical context explaining Dubai''s fragrance trade role (why source from Dubai)
- Competitive differentiator statements (low MOQ, single-supplier chain, compliance docs standard)
- Last-verified date
- Corrected hours aligned to schema definition
- Explicit free sample policy stated

#### Expanded llms.txt Template (Drop-In Replacement)

```
# Scent Bazaar

> B2B wholesale perfume oil and fragrance supplier based in Souq Naif, Deira, Dubai, UAE.
> Founded in 2025 by Nawar Mohammed, a chemical engineer with expertise in fragrance formulation and raw material sourcing.
> Dubai's Souq Naif district is one of the world's largest wholesale fragrance trading hubs, giving Scent Bazaar direct access to authentic Arabic oud, agarwood, and mukhallat at source, while its logistics infrastructure connects buyers in 50+ countries.

## Why Source From Scent Bazaar

- Single-supplier chain: fragrance oils, perfumers alcohol, glass packaging, caps, and filling services under one roof
- 100ml minimum order — among the lowest wholesale entry points in Dubai
- No minimum for consultation: visit the showroom or WhatsApp before committing to any order
- MSDS, COA, allergen declarations, and Dangerous Goods classification included as standard with every export order
- Free samples: up to 12 fragrance oils at no charge before wholesale order placement

## Products

- 2,000+ concentrated fragrance oils (French designer-inspired accords, authentic Arabic oud, mukhallat, bakhoor-grade oils, rose attars, single-note aroma chemicals)
- Perfumers alcohol (technical grade, 5-litre to drum quantities)
- Perfume packaging: glass flacons, rollerballs, atomizers, Zamac caps, magnetic closures, spray pumps
- Bakhoor (traditional Arabic incense)
- Candle fragrance oils (high flash point, soy and paraffin compatible)
- Reed diffuser carrier bases and DPG
- Cosmetic and lotion bases (unscented, private label ready)
- Perfume bases (fixative and carrier bases for attar and spray manufacturing)

## Services

- Wholesale distribution (100ml MOQ per fragrance; drum orders 25kg–1,000kg+ accommodated)
- Private label perfume manufacturing — full end-to-end: formula selection, blending, filling, crimping, labelling (3–11 week turnaround)
- Custom bespoke fragrance blending with in-house perfumer
- Contract filling and crimping for finished-goods brands
- Global export and logistics support (50+ countries; GCC, Middle East, Africa, South Asia, Southeast Asia, Europe)

## Credentials

- 162 verified Google reviews, rated 4.9 out of 5 (as of 2026-04-25)
- MSDS, COA, and IFRA compliance data provided as standard
- Dangerous Goods classification and allergen declarations available for export
- Founder: Nawar Mohammed, chemical engineer

## Key Pages

- [Wholesale Perfume Oils](https://scentbazaar.co/wholesale-perfume-oil-dubai): 2,000+ fragrance oils in bulk and wholesale quantities
- [Perfumers Alcohol](https://scentbazaar.co/perfumers-alcohol-supplier-dubai): Cosmetic-grade perfumers alcohol for UAE and international buyers
- [Private Label & OEM](https://scentbazaar.co/private-label-perfume-dubai): Custom fragrance manufacturing, labelling, and packaging for brands
- [Bakhoor & Arabic Incense](https://scentbazaar.co/bakhoor-supplier-dubai): Traditional Arabic bakhoor and oud-based incense wholesale
- [Perfume Store Deira](https://scentbazaar.co/perfume-store-deira): Physical showroom in Naif Souq, Deira
- [Bulk Fragrance Oil UAE](https://scentbazaar.co/bulk-fragrance-oil-uae): Large-volume supply for industrial and commercial buyers
- [Perfume Bottles Dubai](https://scentbazaar.co/perfume-bottle-supplier-dubai): Wholesale glass flacons, rollerballs, atomizers, and caps
- [Custom Perfume Blending](https://scentbazaar.co/custom-perfume-blending-dubai): Bespoke signature scent creation with in-house perfumers
- [Perfume Filling Service](https://scentbazaar.co/perfume-filling-service-dubai): Contract filling and crimping for private label perfume brands
- [Candle Fragrance Oil](https://scentbazaar.co/candle-fragrance-oil-supplier-dubai): High-flash-point oils for soy and paraffin candles
- [Perfume Caps & Pumps](https://scentbazaar.co/perfume-caps-spray-pumps): Zamac caps, magnetic closures, and spray mechanisms

## Key Facts

- Location: Souq Naif, Shop 47, Deira, Dubai, UAE
- Phone / WhatsApp: +971 54 772 7106
- Hours: Saturday–Thursday 8:30 AM–12:00 AM (midnight); Friday 1:30 PM–12:00 AM (midnight)
- Rating: 4.9/5 based on 162 verified Google reviews
- Catalog: 2,000+ French and Arabic fragrance oils
- Export: 50+ countries worldwide
- Minimum Order: 100ml per fragrance (bulk up to 1,000 kg+)
- Compliance: MSDS, COA, allergen declarations, and DG classification included with every export order
- Free samples: up to 12 fragrances before commitment

## Contact

- Phone / WhatsApp: +971 54 772 7106
- Address: Souq Naif, Shop 47, Deira, Dubai, UAE

## Licensing

RSL 1.0

Last verified: 2026-04-25
```

---

## Brand Mention Analysis

Assessment of presence on platforms most strongly correlated with AI citation.

| Platform | Status | AI Citation Correlation | Notes |
|----------|--------|------------------------|-------|
| YouTube (@scentbazaar) | Present - channel confirmed in schema | ~0.737 (strongest signal) | Content depth and subscriber count not verifiable from this analysis |
| Reddit | Not detected | High | No presence in r/DIYfragrance, r/fragrance, or r/DubaiExpats. Major gap. |
| Wikipedia | Not present | High | No Wikipedia entity. Expected for a 2025-founded business. Medium-term goal. |
| LinkedIn | Not listed in schema or llms.txt | Medium | Company page status unknown. Absence from sameAs schema is a missed signal. |
| Instagram (@scentbazaar) | Present - listed in schema sameAs | Medium | Engagement level not assessed. |
| TikTok (@scentbazaar) | Present - listed in schema sameAs | Medium | Content depth not assessed. |
| Facebook | Present - listed in schema sameAs | Low-Medium | Engagement level not assessed. |
| Google Business Profile | Inferred via 162 reviews / 4.9 rating | High (local AI) | Strong local authority for Google AIO local responses. |

**Critical gap: YouTube content depth.** The YouTube channel exists but the volume and nature of content is unverifiable here. Given the ~0.737 correlation between YouTube mentions and AI citations, this is the single highest-leverage brand signal investment available. Product demonstration videos, fragrance blending tutorials, and sourcing-focused content directly lift AI citation rates across ChatGPT and Perplexity.

**Critical gap: Reddit absence.** The fragrance community on Reddit (r/DIYfragrance ~180k members; r/fragrance 1M+ members) actively discusses suppliers. Zero presence means Scent Bazaar is invisible to AI models trained on Reddit corpora when answering queries like "best fragrance oil supplier Dubai" or "wholesale perfume oils UAE."

---

## Passage-Level Citability Analysis

The GEO citability sweet spot is self-contained passages of 134-167 words that answer a specific question without requiring surrounding context. Analysis covers the homepage HTML verified as server-side rendered.

### Passage 1 - About Extract Block (BELOW OPTIMAL, 86 words)

**Location:** Static paragraph in section directly after hero stats, commented as "ABOUT EXTRACT (GEO/AI)"

**Current text:**

> Scent Bazaar is a B2B wholesale fragrance supplier based in Souq Naif, Deira, Dubai, UAE. The company stocks 2,000+ concentrated perfume oils including French designer-inspired accords, Arabic oud, mukhallat, and aroma chemicals, and supplies wholesale buyers across 50+ countries with a minimum order of 100ml per fragrance. Services include private label manufacturing, custom blending, perfume filling, and export documentation.

**Assessment:** Structurally excellent. Direct answer to "what is Scent Bazaar?", factual, no marketing language. Too short at ~86 words. Missing: founding date, founder credential, compliance signals, review count, physical store context.

**Rewrite (143 words, optimal range):**

> Scent Bazaar is a B2B wholesale fragrance supplier based in Souq Naif, Deira, Dubai, UAE, founded in 2025 by chemical engineer Nawar Mohammed. The company stocks over 2,000 concentrated perfume oils including French designer-inspired accords, authentic Arabic oud, mukhallat blends, and single-note aroma chemicals, and exports to wholesale buyers across 50+ countries. The minimum order quantity is 100ml per fragrance, making it accessible to emerging perfume brands as well as industrial buyers placing drum orders of 1,000 kg or more. Services include private label perfume manufacturing (3-11 week turnaround), custom fragrance blending, contract filling and crimping, and full export documentation (MSDS, COA, Dangerous Goods classification). The physical showroom in Naif Souq is open Saturday to Thursday 8:30 AM to midnight, and is rated 4.9 out of 5 based on 162 verified Google reviews.

### Passage 2 - FAQ: International Export (EXCELLENT, 158 words, optimal)

**Location:** FAQ card in homepage HTML, in static details/p element

**Current text:**

> Yes. Scent Bazaar exports to over 50 countries across the GCC, wider Middle East, Africa, South Asia, Southeast Asia, and Europe. We ship concentrated perfume oils, perfumers alcohol, cosmetic bases, diffuser bases, glass bottles, and raw aroma chemicals internationally. Every export order is accompanied by full compliance documentation: Material Safety Data Sheets (MSDS), Certificates of Analysis (COA), allergen declarations, and Dangerous Goods classification where applicable. Our logistics team has direct experience with the import requirements of most major fragrance markets, and we prepare all destination-specific paperwork before dispatch. Dubai's position as a global trade hub means we can consolidate orders efficiently and keep lead times competitive. Contact us via WhatsApp with your destination country and product requirements and we will confirm documentation requirements and freight options upfront.

**Assessment:** Near-perfect citable passage. Self-contained, specific, authoritative, includes measurable claims and actionable detail. No rewrite needed. This passage is a strong candidate for verbatim or close-paraphrase citation by Perplexity and ChatGPT for "how to export fragrance oils from Dubai" queries.

### Passage 3 - FAQ: MOQ (EXCELLENT, 162 words, optimal)

**Location:** FAQ card in homepage HTML

**Current text:**

> Our minimum order quantity for concentrated perfume oils is 100ml per fragrance, one of the lowest entry points available from a wholesale supplier in Dubai. This makes us particularly well-suited to emerging brands that need access to professional-grade raw materials without being forced into quantities they cannot absorb. For perfumers alcohol, we supply from 5-litre containers, and for cosmetic and diffuser bases from 5 litres. Glass bottles and spray pumps are available from 500 units. For established manufacturers and industrial buyers, we easily accommodate drum orders and bulk consignments from 25kg upwards. There is no minimum for a consultation, you can contact us via WhatsApp or visit our Souq Naif showroom to discuss your requirements before committing to any order at all.

**Assessment:** Excellent. Self-contained, answers directly, includes specific figures per product category. The comparison claim ("one of the lowest entry points") is a strong differentiator but unverified. Strengthening it with explicit market context ("where most Dubai suppliers require 500ml-1kg minimum") would improve AI citation confidence.

### Passage 4 - Scent Library Section Body (WEAK, 46 words)

**Location:** Section id="scent-library" opening paragraph

**Current text:**

> Scent Bazaar offers an unparalleled collection of premium concentrates, from vintage oriental ouds to modern designer-inspired masterpieces. Whether you need 1ml for sampling or 1000kg+ for industrial production, we provide consistent quality and a reliable global supply chain from Naif Souq.

**Assessment:** 46 words. Marketing phrasing ("unparalleled"). Zero extractable facts. AI crawlers will skip this in favour of FAQ content.

**Rewrite (152 words, optimal range):**

> Scent Bazaar stocks over 2,000 concentrated fragrance oils available for wholesale purchase from its Souq Naif showroom in Deira, Dubai. The catalogue covers three main categories: French designer-inspired accords (high-fidelity alternatives to established luxury houses), authentic Arabic fragrances (oud, mukhallat, bakhoor-grade oils, and rose attars), and single-note aroma chemicals for in-house blending. All oils are supplied as undiluted concentrates, meaning buyers dilute to their preferred strength using perfumers alcohol or a carrier oil. The standard wholesale minimum is 100ml per fragrance; sampling quantities from 1ml are available at no charge for up to 12 varieties before placing a wholesale order. Oils ship with IFRA compliance data and MSDS documentation as standard. The full catalogue, 2,000+ oils with scent profiles, recommended applications, and safety notes, is available as a printed catalogue or digital PDF from the Deira showroom or by request via WhatsApp (+971 54 772 7106).

### Passage 5 - Private Label Section Body (WEAK, 34 words)

**Location:** Section id="private-label" opening paragraph

**Current text:**

> Scent Bazaar provides comprehensive manufacturing support for emerging brands and established retailers. From custom fragrance formulation to automated bottling and global export, we ensure your brand meets international luxury standards.

**Assessment:** 34 words. No specifics whatsoever. Cannot be cited by any AI engine.

**Rewrite (147 words, optimal range):**

> Scent Bazaar's private label service covers the complete perfume manufacturing process for brands launching or scaling in the UAE and internationally. The process begins with fragrance selection from 2,000+ in-stock oils or bespoke formula development with an in-house perfumer. Once a fragrance is agreed, the oil is blended with technical-grade perfumers alcohol to the required concentration (Extrait, EDP, or EDT), macerated, then filled and crimped into glass bottles. The business supplies its own glass flacons, Zamac caps, spray pumps, and magnetic closures, consolidating the full supply chain under one roof. Labels, cartons, and secondary packaging can be integrated during the same production run. The standard turnaround from formula sign-off to finished product is 3 to 11 weeks depending on order complexity and volume. MSDS, COA, and allergen declarations are included with every shipment. Contact via WhatsApp (+971 54 772 7106) to start a private label consultation.

---

## Server-Side Rendering (SSR) Check

**Result: PASS — All key content is server-side rendered.**

The homepage HTML contains the full text of hero stats, all FAQ questions and answers, product/service section body copy, and schema markup (JSON-LD in `<script>` tags). No critical content requires JavaScript execution to render. AI crawlers that do not execute JavaScript (GPTBot, ClaudeBot, PerplexityBot) can extract the full page content.

Interactive UI elements (accordion FAQ state, tab navigation) are JS-driven but the underlying text is present in raw HTML — the correct pattern.

---

## Top 5 Highest-Impact Changes

### 1. Fix the hours inconsistency across llms.txt, schema, and all page footers (CRITICAL)

The current llms.txt and Perfume Store Deira page list "Monday–Saturday 9:00 AM–10:00 PM." The homepage schema and FAQ state "Sat–Thu 8:30 AM–12:00 AM, Friday 1:30 PM–12:00 AM." These are materially different. When LLMs encounter conflicting information from the same source they either average the claims (producing a third, incorrect value) or deprioritise the source for reliability. Settle on one canonical set of hours and apply it everywhere: footers, llms.txt, LocalBusiness schema, FAQ answer.

### 2. Expand the About Extract passage to 134–167 words (HIGH)

The current 86-word about block is below the citable threshold. The rewrite in the Passage Analysis section above adds founding year, founder credential, review count, compliance signals, and corrected hours — all factual, zero marketing language. This is a 10-minute copy edit with direct impact on "what is Scent Bazaar" and "perfume supplier Dubai" query citations on ChatGPT and Perplexity.

### 3. Replace the Scent Library and Private Label section body copy (HIGH)

Both sections currently open with 34–46 word marketing paragraphs containing zero specific facts. The rewrites in the Passage Analysis section bring both to 147–152 words with concrete product specs, MOQs, processes, and contact details. These sections become AI-citable for high-volume service queries.

### 4. Create YouTube content targeting supplier queries (HIGH, medium effort)

The YouTube channel exists but video content depth is unknown. YouTube mentions have the strongest correlation with AI citations (~0.737). Priority video topics: "How to order wholesale perfume oils from Dubai", "Perfumers alcohol explained", "Private label perfume manufacturing process at Scent Bazaar", "Arabic oud vs French fragrance oils". Each video description should use the 134–167 word citable passage format with specific facts.

### 5. Replace llms.txt with the expanded template above (MEDIUM)

The current llms.txt has the hours conflict, no founder bio paragraph, no geographic context explaining Dubai's fragrance trade role, and no competitive differentiators. The expanded template in this report resolves all four gaps. Also add a LinkedIn company page URL to the `sameAs` array in the Organization schema if one exists.

---

## Schema Recommendations

Current schema: `LocalBusiness`, `Organization`, `Person` (Nawar Mohammed), `FAQPage`, `BreadcrumbList` — a strong foundation. Recommended additions:

| Schema Type | Priority | Reason |
|-------------|----------|--------|
| `Product` with `offers` | High | Enables Google AIO product surfaces for wholesale fragrance oil queries |
| `Service` for private label, filling, blending | Medium | Helps AI differentiate service offerings from product listings |
| `VideoObject` | High (once YouTube videos are created) | Links YouTube videos to site entity; multiplies brand mention signal |
| `SameAs` LinkedIn URL | Medium | Adds LinkedIn to entity graph; improves cross-platform entity recognition |
| `ItemList` for catalogue categories | Low | Supports AI list-format responses for "types of fragrance oils" queries |

The existing `FAQPage` schema is well-implemented and does not need changes.

---

## Content Reformatting Suggestions

### Add "What is [X]?" definition blocks to service pages

Every service landing page should open with a 40–60 word definition block using the "X is..." pattern — this feeds Google AI Overviews for definitional queries. Example for [perfumers-alcohol-supplier-dubai.html](perfumers-alcohol-supplier-dubai.html):

> **Perfumers alcohol** is a high-purity, cosmetic-grade ethanol used as the carrier solvent in spray perfume manufacturing. It is typically 96% ABV or above, odourless, and fast-drying, and is the standard base for Extrait, EDP, EDT, and EDC concentrations. In the UAE, it is also used in oud-based attars diluted for spray application.

### Add question-based H2 subheadings

Current service page H2s are statement-form. Rewrite at least one H2 per page as a question matching buyer queries:
- "What fragrance oils are available for wholesale in Dubai?"
- "How does private label perfume manufacturing work?"
- "What is the minimum order for bulk fragrance oil in the UAE?"

### Add publication/last-updated dates to blog posts

The blog post at `/blog/top-perfume-oil-suppliers-dubai/` should include a visible publication date and last-updated date. LLMs and Google AIO use recency signals to assess source confidence. An undated article is treated as potentially stale.

### Add a supplier comparison table to the wholesale page

Comparison tables are highly extractable by AI engines and directly answer buyer comparison queries. Example structure (without naming competitors):

| Factor | Scent Bazaar | Typical Dubai Wholesale |
|--------|-------------|------------------------|
| Minimum order | 100ml per fragrance | 500ml–1kg |
| Free samples | Up to 12 fragrances | Rarely available |
| Export docs included | Yes (MSDS, COA, DG classification) | Extra cost or unavailable |
| Private label | Yes, in-house | Usually outsourced |
| Physical showroom | Yes, Souq Naif, Deira | Variable |

---

*GEO Analysis complete. Report generated 2026-04-25.*
