# ScentBazaar — SEO Implementation Roadmap

**Site:** https://scentbazaar.co/
**Created:** 2026-03-18
**Planning Horizon:** April 2026 – March 2027 (12 months)

---

## Overview

| Phase | Period | Focus | Est. Effort |
|---|---|---|---|
| Phase 1 — Foundation | Apr–May 2026 (Wks 1–8) | Fix critical gaps, tracking, E-E-A-T base | ~79 hrs |
| Phase 2 — Expansion | Jun–Aug 2026 (Wks 9–20) | Blog launch, content, local SEO domination | ~105 hrs |
| Phase 3 — Scale | Sep–Dec 2026 (Wks 21–36) | Arabic, export markets, link building | ~155 hrs |
| Phase 4 — Authority | Jan–Mar 2027 (Wks 37–48) | Thought leadership, PR, GEO, case studies | ~135 hrs |
| **Total** | | | **~474 hrs** |

**Team assumption:** 1 primary owner (founder/marketing), occasional developer help (4–8 hrs/month).

---

## Phase 1 — Foundation (April–May 2026, Weeks 1–8)

**Goal:** Fix critical E-E-A-T gaps, install tracking, optimize GBP, create missing core pages.

### Week-by-Week Task Table

| Week | Task | Owner | Effort (hrs) | Priority | Dependencies |
|---|---|---|---|---|---|
| 1 | Set up Google Search Console — verify domain, submit sitemap | Dev/Owner | 1 | Critical | None |
| 1 | Set up Google Analytics 4 via GTM — configure basic events | Dev | 2 | Critical | GTM installed ✓ |
| 1 | Configure GA4 conversion events: contact form, phone click, WhatsApp | Dev | 1 | Critical | GA4 setup |
| 2 | Google Business Profile audit — categories, services, description | Owner | 2 | Critical | None |
| 2 | Upload 20+ showroom and product photos to GBP | Owner | 2 | High | Photos taken |
| 2 | Add GBP Q&A entries (MOQ, delivery, custom blending, visiting hours) | Owner | 1 | High | None |
| 2 | Respond to all 172 existing Google reviews | Owner | 3 | High | None |
| 3 | Write and publish About Us page | Owner | 4 | Critical | Company story, team photo |
| 3 | Add About Us to main navigation and sitemap | Dev | 0.5 | Critical | About Us page |
| 4 | Write and publish Reviews/Testimonials page | Owner | 3 | High | Google reviews |
| 4 | Add "172 reviews" trust signal to homepage with GBP link | Dev | 0.5 | High | Reviews page |
| 5 | Write and publish Shipping & Compliance Guide page | Owner | 4 | High | None |
| 5 | Add FAQPage schema to top 5 service pages | Dev | 2 | High | None |
| 5 | Add WebSite schema with SearchAction to homepage | Dev | 1 | Medium | None |
| 6 | Design and publish Fragrance Catalog landing page | Owner + Dev | 5 | High | Catalog data |
| 6 | Update llms.txt with all current pages and key facts | Dev | 1 | Medium | All new pages live |
| 7 | Submit to Yellow Pages UAE, Dubai Chamber, Expat Woman, Gulf Business | Owner | 2 | High | NAP consistent |
| 7 | Verify NAP consistency across all pages and directories | Owner | 1 | High | None |
| 8 | Run PageSpeed Insights on all pages — document CWV baseline | Dev | 2 | Medium | None |
| 8 | Phase 1 SEO audit — check GSC for crawl errors, coverage issues | Dev/Owner | 1 | High | GSC set up |

**Phase 1 Total: ~39 hrs**

### Phase 1 Success Metrics
- [ ] Google Search Console active, sitemap submitted, 0 critical coverage errors
- [ ] GA4 tracking conversions (contact form, phone, WhatsApp)
- [ ] GBP fully optimized with 20+ photos, all services listed
- [ ] About Us page live with team photo and company story
- [ ] Reviews page live with curated testimonials
- [ ] Compliance Guide page live
- [ ] Fragrance Catalog landing page live
- [ ] 4 local directory citations submitted
- [ ] CWV baseline documented

---

## Phase 2 — Expansion (June–August 2026, Weeks 9–20)

**Goal:** Launch blog, publish 12 posts, build internal links, cement Deira local SEO dominance.

### Week-by-Week Task Table

| Week | Task | Owner | Effort (hrs) | Priority | Dependencies |
|---|---|---|---|---|---|
| 9 | Choose blog platform: Hugo or Eleventy (recommendation: Hugo) | Dev | 2 | Critical | None |
| 9 | Set up Hugo + deploy to scentbazaar.co/blog/ | Dev | 6 | Critical | Platform decision |
| 9 | Configure blog templates (single post, list, category pages) | Dev | 4 | Critical | Hugo setup |
| 10 | Write B-01: "How to Start a Perfume Brand in Dubai" (2,000 words) | Owner | 5 | High | Blog live |
| 10 | Internal linking audit — map all existing pages, add missing links | Owner | 2 | High | None |
| 11 | Write B-02: "Complete Guide to Fragrance Oil Load Rates for Candles" | Owner | 4 | High | None |
| 11 | Add FAQPage schema to About Us and Reviews pages | Dev | 1 | Medium | Pages live |
| 12 | Write B-03: "IFRA Compliance Explained for UAE Perfumers" | Owner | 4 | High | None |
| 12 | Submit to Zawya, UAE Business Directory, Yelp UAE | Owner | 1 | Medium | None |
| 13 | Write B-04: "Oud vs. Synthetic Oud: A Supplier's Guide" | Owner | 3 | Medium | None |
| 13 | GBP weekly post cadence established (1 post/week ongoing) | Owner | 1 | High | None |
| 14 | Write B-05: "Perfumers Alcohol vs. Carrier Oil — Which to Use?" | Owner | 3 | Medium | None |
| 14 | Optimize existing service pages for internal linking to blog | Dev | 2 | Medium | 4+ posts live |
| 15 | Write B-06: "Private Label vs. White Label Perfume: Key Differences" | Owner | 3 | Medium | None |
| 15 | Review GSC performance — identify quick-win keyword opportunities | Owner | 1 | High | 3 months GSC data |
| 16 | Write B-07: "How to Choose Fragrance Oils for Soy Wax Candles" | Owner | 3 | Medium | None |
| 16 | Expand FAQ sections on top 3 service pages | Owner | 2 | Medium | None |
| 17 | Write B-08: "Bakhoor: The Heritage Fragrance of the Arab World" | Owner | 3 | Medium | None |
| 17 | Optimize title tags and meta descriptions based on GSC CTR data | Owner | 2 | Medium | GSC data |
| 18 | Write B-09: "Diffuser Base Guide: Types, Ratios, and UAE Sourcing" | Owner | 3 | Medium | None |
| 18 | Add BreadcrumbList schema to all blog posts | Dev | 1 | Low | Blog live |
| 19 | Write B-10: "Perfume Packaging Trends in UAE 2026" | Owner | 3 | Medium | None |
| 19 | Internal linking: connect blog posts to relevant service pages | Owner | 2 | High | 10 posts live |
| 20 | Write B-11: "Cosmetic-Grade vs. Fragrance-Grade Ingredients" | Owner | 3 | Medium | None |
| 20 | Phase 2 checkpoint: GSC, GA4, GBP review | Owner | 2 | High | All above |

**Phase 2 Total: ~66 hrs**

### Blog Publishing Schedule

| Month | Posts | Topics |
|---|---|---|
| June 2026 | 4 | B-01 to B-04 |
| July 2026 | 4 | B-05 to B-08 |
| August 2026 | 4 | B-09 to B-12 |

### Phase 2 Success Metrics
- [ ] Blog live at scentbazaar.co/blog/ with 12 published posts
- [ ] Organic traffic: 500+ sessions/month
- [ ] 8+ local directory citations
- [ ] GBP posting cadence established (weekly)
- [ ] Internal linking map complete (all pages connected to hub pages)
- [ ] 15+ keywords in Top 10 (GSC)

---

## Phase 3 — Scale (September–December 2026, Weeks 21–36)

**Goal:** Arabic pages, export market content, link building campaign, schema expansion, CWV optimization.

### Week-by-Week Task Table

| Week | Task | Owner | Effort (hrs) | Priority | Dependencies |
|---|---|---|---|---|---|
| 21 | Arabic translation: homepage `/ar/` | Owner + Translator | 3 | High | None |
| 21 | hreflang implementation for all Arabic pages | Dev | 2 | High | Arabic pages |
| 22 | Arabic page: `/ar/zuyut-attar-jumla/` (wholesale fragrance oils) | Owner + Translator | 3 | High | None |
| 22 | Arabic GBP description update | Owner | 0.5 | Medium | None |
| 23 | Arabic page: `/ar/private-label-attar/` (private label) | Owner + Translator | 3 | High | None |
| 23 | Arabic page: `/ar/bakhoor-jumla/` (bakhoor wholesale) | Owner + Translator | 3 | High | None |
| 24 | Arabic page: `/ar/matjar-attar-deira/` (Deira store) | Owner + Translator | 2 | Medium | None |
| 24 | Add Arabic pages to sitemap and llms.txt | Dev | 1 | High | All Arabic pages live |
| 25 | Write export market page: India (`/export/fragrance-supplier-india/`) | Owner | 3 | Medium | None |
| 25 | Write export market page: East Africa | Owner | 3 | Medium | None |
| 26 | Write export market page: UK | Owner | 3 | Medium | None |
| 26 | Add export pages to nav, sitemap, internal links | Dev | 1 | Medium | All export pages |
| 27 | Link building: identify 30 outreach targets (blogs, forums, directories) | Owner | 3 | High | None |
| 27 | Begin outreach: UAE perfumery community (Facebook, Instagram) | Owner | 2 | High | Outreach list |
| 28 | Outreach: candle making UAE groups and bloggers | Owner | 2 | High | None |
| 28 | Outreach: beauty industry publications (Beautyworld ME media list) | Owner | 2 | Medium | None |
| 29 | Write B-12: "Naif Souq — Dubai's Historic Perfume District" | Owner | 3 | Medium | None |
| 29 | Pitch Gulf News / Khaleej Times: Deira heritage fragrance story | Owner | 2 | Medium | None |
| 30 | Add Product schema with Offer to all product/service pages | Dev | 3 | High | None |
| 30 | Add HowTo schema to 3 blog posts (formulation, candle, private label) | Dev | 2 | Medium | None |
| 31 | Core Web Vitals: fix LCP issues — optimize hero images, preload fonts | Dev | 4 | High | CWV baseline data |
| 31 | Core Web Vitals: audit CLS — fix layout shifts on mobile | Dev | 3 | High | None |
| 32 | Write B-13: "How to Export Fragrance Products from Dubai" | Owner | 3 | Medium | None |
| 32 | Scent catalog expansion: add 5 fragrance family category pages | Owner | 5 | Medium | None |
| 33 | Review outreach results — follow up on 30 contacts | Owner | 2 | High | Week 27-29 outreach |
| 33 | Write B-14: "UAE Cosmetics Regulation Guide for Private Label Brands" | Owner | 4 | High | None |
| 34 | Add AggregateRating schema to Reviews page | Dev | 1 | Medium | Reviews page live |
| 34 | Seasonal content: Eid Al-Adha fragrance guide (publish 2 wks before Eid) | Owner | 3 | Medium | None |
| 35 | Phase 3 SEO audit: GSC coverage, backlink profile, CWV scores | Owner | 2 | High | None |
| 35 | Update all page-level meta descriptions based on CTR data | Owner | 2 | Medium | 6 months GSC data |
| 36 | Phase 3 checkpoint review — prepare Phase 4 priorities | Owner | 1 | High | All above |

**Phase 3 Total: ~78 hrs**

### Phase 3 Success Metrics
- [ ] 5 Arabic pages live with correct hreflang
- [ ] 3 export market pages live
- [ ] 30 outreach contacts made; 5+ links earned
- [ ] Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms
- [ ] Organic traffic: 1,200+ sessions/month
- [ ] 35+ keywords in Top 10

---

## Phase 4 — Authority (January–March 2027, Weeks 37–48)

**Goal:** Thought leadership content, PR, case studies, AI search optimization, year-in-review.

### Week-by-Week Task Table

| Week | Task | Owner | Effort (hrs) | Priority | Dependencies |
|---|---|---|---|---|---|
| 37 | Begin UAE Fragrance Industry Report 2027 (research + outline) | Owner | 4 | High | None |
| 37 | GEO audit: test ScentBazaar citations in ChatGPT, Perplexity, Gemini | Owner | 2 | High | None |
| 38 | Draft client case study #1: private label brand launch | Owner | 4 | High | Client permission |
| 38 | Add Speakable schema to key FAQ sections (voice search optimization) | Dev | 2 | Medium | None |
| 39 | Draft client case study #2: candle business scaling | Owner | 4 | High | Client permission |
| 39 | Update llms.txt with all Phase 3 additions | Dev | 0.5 | High | None |
| 40 | Publish UAE Fragrance Industry Report 2027 as lead magnet | Owner | 3 | High | Report complete |
| 40 | PR outreach: pitch report to Gulf News, Khaleej Times, Arabian Business | Owner | 3 | High | Report live |
| 41 | Ramadan 2027 guide: "Top Fragrance Families for Ramadan" (publish 4 wks early) | Owner | 3 | Medium | None |
| 41 | Create structured Q&A hub: "Fragrance Sourcing FAQ" page | Owner | 3 | High | GEO audit findings |
| 42 | Eid 2027 guide: "Gift Fragrance Sets — Supplier Guide for Retailers" | Owner | 3 | Medium | None |
| 42 | Submit industry report to Beautyworld ME, Perfumer & Flavorist | Owner | 2 | Medium | None |
| 43 | Write B-15: "Sustainable Fragrance Sourcing — What UAE Brands Need to Know" | Owner | 4 | Medium | None |
| 43 | LinkedIn content strategy: 2 posts/week (owner profile + company page) | Owner | 2 | Medium | None |
| 44 | Follow up on Phase 4 PR pitches — track media mentions | Owner | 2 | High | Week 40 outreach |
| 44 | Write B-16: "Fragrance Trends in the GCC for 2027" | Owner | 3 | Medium | None |
| 45 | Conduct full site crawl — identify and fix any new technical issues | Dev | 2 | High | None |
| 45 | Review and refresh top 5 oldest blog posts with updated info | Owner | 4 | Medium | Phase 2 blog posts |
| 46 | Publish case study #1 (private label) | Owner | 1 | High | Case study drafted |
| 46 | Publish case study #2 (candle business) | Owner | 1 | High | Case study drafted |
| 47 | Write Year in Review: "ScentBazaar 2026 — Fragrance Supply Insights" | Owner | 3 | Low | None |
| 47 | Link building: final outreach push targeting 10 new referring domains | Owner | 3 | Medium | None |
| 48 | Annual SEO audit: GSC, GA4, GBP, backlinks, CWV, rankings | Owner + Dev | 4 | Critical | Full year data |
| 48 | Prepare FY2027 SEO plan based on year 1 learnings | Owner | 2 | High | Annual audit |

**Phase 4 Total: ~64 hrs**

### Phase 4 Success Metrics
- [ ] UAE Fragrance Industry Report published and linked by 3+ external sites
- [ ] 2 client case studies live
- [ ] 3+ media mentions (Gulf News, Khaleej Times, or equivalent)
- [ ] ChatGPT/Perplexity citations for primary queries verified
- [ ] Organic traffic: 3,000+ sessions/month
- [ ] 80+ keywords in Top 10
- [ ] 40+ referring domains

---

## Full-Year Gantt Summary

```
                       Apr  May  Jun  Jul  Aug  Sep  Oct  Nov  Dec  Jan  Feb  Mar
                       W1-4 W5-8 W9-12 W13-16 W17-20 W21-24 W25-28 W29-32 W33-36 W37-40 W41-44 W45-48

PHASE 1 — Foundation   ████ ████
  GSC + GA4 setup      ██
  GBP optimization     ██
  About Us page             ██
  Reviews page              ██
  Compliance Guide page     ██
  Catalog page              ██
  Local directories         ████

PHASE 2 — Expansion              ████ ████ ████
  Blog platform setup          ██
  Blog posts (12)                   ████ ████ ████
  Internal linking                  ████ ████
  Directory submissions              ██

PHASE 3 — Scale                                   ████ ████ ████ ████
  Arabic pages (5)                              ████ ████
  Export market pages                                  ████ ████
  Link building outreach                               ████ ████ ████
  CWV optimization                                           ████ ████
  Schema expansion                                      ████ ████

PHASE 4 — Authority                                                        ████ ████ ████
  Industry report                                                       ████
  Case studies                                                               ████
  PR / media outreach                                                        ████ ████
  GEO optimization                                                           ████ ████
  Annual audit                                                                         ██
```

---

## Resource Requirements

| Resource | Phase 1 | Phase 2 | Phase 3 | Phase 4 | Total |
|---|---|---|---|---|---|
| Owner/Writer hours | 25 | 45 | 55 | 50 | 175 |
| Developer hours | 14 | 21 | 23 | 14 | 72 |
| Translator hours (Arabic) | 0 | 0 | 14 | 0 | 14 |
| Design hours (photos, GBP) | 5 | 3 | 2 | 2 | 12 |
| **Total** | **44** | **69** | **94** | **66** | **273** |

**Note:** Hours above are net work hours, excluding review cycles and iteration. Add 30% buffer for revision and approvals.

**Optional paid tools:**
- Ahrefs or Moz (~$100/month) — keyword tracking, backlink monitoring
- Hugo hosting (Netlify free tier) — $0
- Grammarly Pro (~$12/month) — content quality

---

## KPI Dashboard

| Metric | Apr 2026 (Baseline) | Jul 2026 | Oct 2026 | Mar 2027 |
|---|---|---|---|---|
| Organic Sessions/Month | ~200 | 500 | 1,200 | 3,000 |
| Keywords Top 10 | ~5 | 15 | 35 | 80 |
| Keywords Top 3 | ~1 | 5 | 15 | 35 |
| Indexed Pages | 18 | 25 | 45 | 70+ |
| Referring Domains | ~5 | 10 | 20 | 40 |
| GBP Profile Views/Month | Establish | Baseline + 30% | Baseline + 75% | Baseline + 150% |
| Blog Posts Live | 0 | 4 | 20 | 30+ |
| Arabic Pages Live | 0 | 0 | 5 | 5 |
| Average CWV Score | Unknown | Baseline | Pass | Pass |
| AI Citations (ChatGPT/Perplexity) | 0 | 0 | 2–3 queries | 8–10 queries |

---

## Appendix A — Priority Guide

When time is limited, use this to decide what to work on:

**Must do first (blocking everything else):**
1. GSC + GA4 setup — without this, you are flying blind
2. Google Business Profile optimization — highest ROI local action
3. About Us page — biggest E-E-A-T gap on the site

**High ROI, do next:**
4. Reviews page
5. Blog platform setup
6. First 4 blog posts (especially B-01: "How to Start a Perfume Brand in Dubai")

**Do when you have capacity:**
7. Arabic pages
8. Export market pages
9. Link building outreach

**Nice to have:**
10. Industry report, case studies, PR outreach

---

## Appendix B — Content Quality Checklist

Before publishing any page or blog post, verify:

- [ ] Target keyword appears in title, H1, first 100 words, and meta description
- [ ] Word count appropriate (service pages: 800+, blog posts: 1,200–2,500)
- [ ] Internal links: minimum 2 to relevant service pages
- [ ] Images: WebP format, descriptive alt text, width/height set
- [ ] Schema markup: Article (blog), FAQPage (if FAQ section), BreadcrumbList
- [ ] Mobile preview checked in browser DevTools
- [ ] CTA present: "Request a Sample", "WhatsApp Us", or "Visit Our Showroom"
- [ ] Submitted to GSC for indexing after publishing
- [ ] Added to sitemap.xml
- [ ] Added to llms.txt if it's a key page
