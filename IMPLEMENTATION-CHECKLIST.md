# ScentBazaar GEO Implementation Checklist
**90-Day Action Plan to Boost AI Platform Visibility**

**Start Date:** March 17, 2026
**Target Score:** 62/100 → 85/100
**Key Metric:** AI citations per 1,000 searches: 2-5 → 15-30

---

## 🟢 COMPLETED (Week 0)

- [x] About Us page created with founder/team bios, timeline, schema markup
- [x] Blog post #1 created: "How to Formulate Perfume" (2,100 words, Article schema)
- [x] YouTube video scripts created (6 videos, 2-6 min each)
- [x] LinkedIn strategy documented (4 posts/month calendar, company profile template)
- [x] Reddit strategy documented (4 posts, community guidelines, response templates)
- [x] GEO Analysis completed (62/100 baseline, all gaps identified)

---

## 🔴 WEEK 1-2: Quick Wins (Effort: Low, Impact: High)

### Homepage Updates
- [ ] Add publication date meta tag: `<meta property="article:published_time" content="2026-03-17">`
- [ ] Add last modified date: `<meta property="article:modified_time" content="2026-03-17">`
- [ ] Update llms.txt with:
  - LinkedIn URL (to be created)
  - Published date
  - Team member bios
- [ ] Add link to About Us page in navigation
- [ ] Add link to new blog post in a "Resources" section

### Service Pages (All 16 pages)
- [ ] Add `<meta property="article:published_time" content="YYYY-MM-DD">` to each
- [ ] Add `<meta property="article:modified_time" content="2026-03-17">` to each
- [ ] Add page-level author schema (if applicable)
- [ ] Verify schema markup (Organization, Store, LocalBusiness, Product where relevant)

**Script to Help:** Create a batch HTML update with find-replace for publication dates

---

### FAQ Schema Expansion (Homepage)
- [ ] Add 6 new FAQ questions to FAQ schema (current: 12, target: 18)

**New Questions to Add:**
1. "What is the difference between EDP and EDT?"
2. "How long does homemade perfume last after mixing?"
3. "Can I mix French fragrance oils with Arabic oud?"
4. "What certifications do I need to export fragrance oils?"
5. "Do you offer samples or small quantities?"
6. "What is MOQ for private label perfume?"

**Schema Format:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is EDP vs EDT?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EDP (Eau de Parfum) contains 15-20% fragrance oil and lasts 6-8 hours. EDT (Eau de Toilette) contains 5-15% and lasts 3-6 hours. EDP costs more because of higher fragrance concentration..."
      }
    }
  ]
}
```

---

### LinkedIn Setup
- [ ] Create LinkedIn Company Page (linkedin.com/company/scent-bazaar)
- [ ] Fill out company profile using template provided
- [ ] Add 5-10 company photos (lab, team, store, products)
- [ ] Verify company and claim/admin the page
- [ ] Update llms.txt sameAs array with LinkedIn URL
- [ ] Schedule first 4 LinkedIn posts (see calendar)

**Posts to Schedule:**
- Post 1 (Week 1): "5 Mistakes DIY Perfumers Make..."
- Post 2 (Week 2): "Inside Scent Bazaar: IFRA Testing..."
- Post 3 (Week 3): "Customer Success Story: From Zero to Launch..."
- Post 4 (Week 4): "EDP vs EDT: What You're Paying For..."

---

### Effort Summary:
- Homepage + Service Pages: 3-4 hours (batch update with script)
- FAQ expansion: 1 hour
- LinkedIn setup + first post: 2-3 hours
- **Total: 6-8 hours**

---

## 🟡 WEEK 2-4: Content Depth & Authority (Effort: Medium, Impact: High)

### YouTube Channel Population
- [ ] Record Video 1: "How to Make Perfume" (5:00)
- [ ] Record Video 2: "Perfumers Alcohol vs. Vodka" (4:00)
- [ ] Record Video 3: "Lab Tour" (4:00)
- [ ] Record Video 4: "Arabic Oud vs. French Perfume" (5:00)
- [ ] Record Video 5: "How to Burn Bakhoor" (2:00)
- [ ] Record Video 6: "Private Label Perfume Process" (6:00)

**Timeline:** 1 video per week (2 hours per video including editing) = 12 hours total

**After Recording:**
- [ ] Upload to YouTube with:
  - Full transcript in description
  - Links to relevant service pages
  - Proper tags/keywords
  - Video schema markup
- [ ] Embed video on relevant service pages (see embedding template)
- [ ] Update llms.txt with video URLs

---

### Blog Post Creation (2 Additional Posts)

**Blog Post #2: "5 Common IFRA Compliance Mistakes & How to Avoid Them"**
- [ ] Write 1,500-2,000 words
- [ ] Include compliance table
- [ ] Add Article schema with author
- [ ] Publication date: April 7, 2026 (Week 3)
- [ ] Link from service pages

**Blog Post #3: "Fragrance Sourcing for Emerging Brands: A Complete Guide"**
- [ ] Write 2,000-2,500 words
- [ ] Include case studies / examples
- [ ] Add FAQ section
- [ ] Publication date: April 14, 2026 (Week 4)
- [ ] Link from private label page

**File locations:**
- blog-post-2-ifra-compliance.html
- blog-post-3-fragrance-sourcing.html

---

### Service Page Content Rewriting

**Priority Pages (6 total):**
1. [wholesale-perfume-oil-dubai.html](wholesale-perfume-oil-dubai.html) — Add citable passages + Video 1 embed
2. [perfumers-alcohol-supplier-dubai.html](perfumers-alcohol-supplier-dubai.html) — Add citable passages + Video 2 embed
3. [private-label-perfume-dubai.html](private-label-perfume-dubai.html) — Add citable passages + Video 6 embed
4. [perfume-store-deira.html](perfume-store-deira.html) — Add lab tour content + Video 3 embed
5. [bakhoor-supplier-dubai.html](bakhoor-supplier-dubai.html) — Add product guide + Video 5 embed
6. [fragrance-oil-supplier-dubai.html](fragrance-oil-supplier-dubai.html) — Add oud/fragrance education + Video 4 embed

**For Each Page:**
- [ ] Add one 134-167 word self-contained answer block (opening section)
- [ ] Add a comparison table (fragrance types, grades, etc.)
- [ ] Embed relevant YouTube video
- [ ] Update meta description (if needed)
- [ ] Add `datePublished` and `dateModified` to schema
- [ ] Verify Article or Product schema is present

**Example Rewrite Pattern:**
```html
<section class="section-white">
  <div class="container">
    <h2>What is [Product]?</h2>
    <p>
    [SELF-CONTAINED 134-167 WORD DEFINITION PARAGRAPH]
    Specific facts, use cases, and differentiators here.
    </p>

    <div style="position: relative; width: 100%; padding-bottom: 56.25%; margin-top: 30px;">
      <iframe src="https://www.youtube-nocookie.com/embed/[VIDEO_ID]"...></iframe>
    </div>
  </div>
</section>
```

**Effort:** 6-8 hours total (1-2 hours per page)

---

### Effort Summary (Week 2-4):
- YouTube videos: 12 hours
- Blog posts: 6-8 hours
- Service page rewrites: 6-8 hours
- **Total: 24-28 hours**

---

## 🟣 WEEK 5-8: Authority Building (Effort: Medium-High, Impact: Very High)

### Reddit Community Participation
- [ ] Create Reddit account (if not already done)
- [ ] Join r/DIYfragrance, r/Perfumes, r/fragrance, r/FrugalPerfume
- [ ] Post Week 1 post: "Best Fragrance Oils for Beginners" → r/DIYfragrance
- [ ] Post Week 2 post: "Perfumers Alcohol vs. Vodka" → r/DIYfragrance
- [ ] Post Week 3 post: "Fragrance Supply Chain Insights" → r/Perfumes
- [ ] Post Week 4 post: "Wholesale Fragrance Secret" → r/FrugalPerfume
- [ ] Respond to all comments (daily for first 48 hours, then weekly)
- [ ] Monitor for Reddit mentions (set Google Alert for "Scent Bazaar reddit")

**Key Guidelines:**
- Disclosure: "I work for Scent Bazaar (full transparency)"
- Value-first: 90% educational content, 10% brand mention
- Engagement: Respond within 24 hours, answer follow-ups

**Effort:** 1-2 hours per post + 30 min/day for response management = 8-10 hours

---

### Press & Mention Outreach
- [ ] Identify 5-10 fragrance blogs/publications willing to accept guest posts
- [ ] Identify 3-5 LinkedIn influencers in fragrance/beauty/B2B space
- [ ] Draft 1 guest article pitch: "The DIY Perfume Revolution: How Emerging Brands Are Disrupting Luxury Fragrance"
- [ ] Submit 3+ guest article proposals
- [ ] Reach out to 3+ industry publications for mentions/features

**Target Publications:**
- FragranceBuy Blog
- Scent + Chemistry
- DIY Fragrance Forum
- Medium (fragrance/business publications)
- LinkedIn Articles (publish directly)

**Effort:** 8-10 hours

---

### LinkedIn Post Publishing (Ongoing)
- [ ] Publish Post 1 (Week 1 of this phase)
- [ ] Publish Post 2 (Week 2)
- [ ] Publish Post 3 (Week 3)
- [ ] Publish Post 4 (Week 4)
- [ ] Engage on other fragrance-related posts daily (10-15 min)

**Effort:** 30 min/post + 10 min daily engagement = 4-5 hours

---

### Effort Summary (Week 5-8):
- Reddit participation: 8-10 hours
- Press outreach: 8-10 hours
- LinkedIn posting: 4-5 hours
- **Total: 20-25 hours**

---

## 🔵 WEEK 9-12: Momentum & Scaling (Effort: Medium, Impact: Medium-High)

### Continue Execution
- [ ] Continue Reddit participation (2-3 more posts)
- [ ] Publish 2-3 additional blog posts (guest articles or original content)
- [ ] Record 3-4 more YouTube videos (if first batch performs well)
- [ ] Share blog posts + videos on LinkedIn, Reddit, Twitter (if applicable)
- [ ] Monitor AI platform visibility (monthly ChatGPT/Perplexity searches for "perfume supplier dubai")

### Wikipedia Preparation (Post Week 12)
- [ ] Once 3+ press mentions are secured, prepare Wikipedia article outline
- [ ] Work with Wikipedia editor (if needed) to submit article
- [ ] Update llms.txt with Wikipedia URL (once live)

---

### Effort Summary (Week 9-12):
- Reddit: 4-6 hours
- Blog posts: 6-8 hours
- YouTube (optional): 6-8 hours
- Monitoring + optimization: 2-3 hours
- **Total: 18-25 hours**

---

## 📊 TOTAL EFFORT & TIMELINE

| Phase | Weeks | Hours | Status |
|-------|-------|-------|--------|
| Quick Wins | 1-2 | 6-8 | Next |
| Content Depth | 2-4 | 24-28 | Planned |
| Authority Building | 5-8 | 20-25 | Planned |
| Momentum | 9-12 | 18-25 | Planned |
| **TOTAL** | **12 weeks** | **68-86 hours** | **In Progress** |

**Breakdown:** ~6-7 hours per week for 12 weeks

---

## 🎯 SUCCESS METRICS & CHECKPOINTS

### Week 2 Checkpoint
- [x] About Us page live
- [x] Publication dates on all pages
- [ ] 6 new FAQ questions added
- [ ] LinkedIn page created and first post published

**GEO Score Target:** 64/100

---

### Week 4 Checkpoint
- [ ] 3-4 YouTube videos published
- [ ] 2 blog posts live
- [ ] Service pages rewritten with citable passages
- [ ] First Reddit posts published

**GEO Score Target:** 70/100

---

### Week 8 Checkpoint
- [ ] All 6 YouTube videos published
- [ ] 3+ blog posts live
- [ ] Reddit community presence established (20+ upvotes on posts)
- [ ] LinkedIn strategy producing engagement
- [ ] 1-2 press mentions secured

**GEO Score Target:** 75/100

---

### Week 12 Final Checkpoint
- [ ] All planned content published
- [ ] 3+ press mentions documented
- [ ] Wikipedia preparation underway
- [ ] Monthly AI platform searches show 2-3 mentions (baseline: 0)
- [ ] Organic traffic from AI platforms measurable (Google Analytics)

**GEO Score Target:** 80-85/100

---

## 🚀 OPTIMIZATION & ITERATION

### Monthly Monitoring (Every 30 Days)

**Tools to Use:**
1. **ChatGPT / Perplexity Manual Testing**
   - Search: "perfume oil supplier dubai"
   - Search: "wholesale fragrance supplier uae"
   - Search: "how to start a perfume brand"
   - Note: Is Scent Bazaar cited?

2. **Google Search Console**
   - Monitor impressions for target keywords
   - Check for ranking improvements
   - Track click-through rate

3. **YouTube Analytics**
   - Views, watch time, traffic to embedded pages
   - Audience demographics
   - Content performance

4. **Reddit Monitoring**
   - Track r/DIYfragrance mentions
   - Monitor upvotes on posts
   - Check for organic mentions (people recommending Scent Bazaar)

5. **LinkedIn Analytics**
   - Engagement rates on posts
   - Follower growth
   - Click-through to website

### Monthly Actions:
- [ ] Review GEO metrics and adjust strategy if needed
- [ ] Publish 1-2 additional blog posts (ongoing)
- [ ] Continue Reddit participation (1-2 posts/week)
- [ ] LinkedIn posting (1-2x/week)
- [ ] Response management (daily for first 48 hours of new content)

---

## 💡 QUICK REFERENCE: What Goes Where

| Content | Location | Purpose | Owner |
|---------|----------|---------|-------|
| About Us | /about-us | E-E-A-T signals, founder bio | Created |
| Blog Posts | /blog-post-* | Citable passages, education | Creating |
| YouTube Videos | YouTube + embedded | 0.737 correlation, authority | Creating |
| LinkedIn Posts | LinkedIn Company Page | B2B presence, brand mentions | Creating |
| Reddit Posts | r/DIYfragrance, r/Perfumes | Community credibility | Creating |
| Publications | External websites | Press mentions, backlinks | Outreach |
| Wikipedia | Wikipedia | Brand entity, knowledge panel | Post-Week 12 |

---

## ⚠️ CRITICAL REMINDERS

1. **Publish Dates Matter:** Every piece of content must have a clear publication date in schema + visible on page
2. **Author Attribution:** Blog posts and Reddit need named authors (Fatima, Ahmad, etc.)
3. **IFRA Compliance:** Every technical claim about fragrance must reference IFRA standards
4. **Authentic Community Participation:** Reddit/LinkedIn only work if you're genuinely helpful, not spammy
5. **Patience:** AI platform visibility doesn't happen overnight. 3-6 months to see meaningful lift
6. **Measurement:** Use GA4, YouTube Analytics, and manual searches to track progress

---

## 📝 NOTES FOR TEAM

- **Ahmad (Founder):** YouTube videos, Reddit participation, LinkedIn personal posts
- **Fatima (Chemist):** Blog post author bylines, technical review of content
- **Mohammed (Operations):** LinkedIn company management, social media scheduling
- **All:** Respond to comments, engage authentically, maintain brand voice

---

**Last Updated:** March 17, 2026
**Next Review:** April 14, 2026 (Week 4)
**Status:** Implementation in progress
