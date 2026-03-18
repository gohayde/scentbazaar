# Web Performance Audit Report
## scentbazaar.co
**Audit Date:** March 16, 2026
**Auditor:** Claude Code — Web Performance Specialist
**Methodology:** Structural analysis of confirmed technical signals; live CrUX field data unavailable without PSI API key. Estimates calibrated against Lighthouse 13.0 scoring model and CrUX baseline data for Webflow-style builder sites.
**Validation recommended at:** pagespeed.web.dev and cruxvis.withgoogle.com

---

## 1. Site Profile

| Field | Detail |
|---|---|
| URL | https://scentbazaar.co/ |
| Industry | B2B Fragrance Supplier |
| Market | Dubai, UAE |
| Platform | Webflow-style site builder |
| Asset CDN | assets.cdn.filesafe.space |
| Mobile indexing | Mobile-first (Google, 100% since July 5, 2024) |
| Primary audience | B2B buyers — GCC region |

---

## 2. Estimated Performance Scores

| Context | Score Estimate | Confidence |
|---|---|---|
| Mobile | 35–52 / 100 | Medium |
| Desktop | 58–72 / 100 | Medium |

Score ranges are consistent with Webflow-style sites carrying unoptimized hero images, social embed SDKs, Maps embeds, and WhatsApp widgets without explicit performance configuration. The 20–25 point mobile-desktop gap is typical of sites that have not applied mobile-specific optimizations.

---

## 3. Core Web Vitals Assessment

Google evaluates the **75th percentile** of real user visits. All three metrics must pass at that percentile to receive a "Good" CWV rating.

### 3.1 LCP — Largest Contentful Paint

| | |
|---|---|
| Threshold | Good: ≤2.5s / Needs Improvement: 2.5s–4.0s / Poor: >4.0s |
| Estimated (Mobile) | 4.5s–6.5s |
| Estimated (Desktop) | 2.5s–3.5s |
| Status | FAILING — Poor (mobile) / Borderline (desktop) |

**Root cause — CSS background-image hero:**
The hero section delivers its primary image as a CSS `background-image` rather than an `<img>` element. This is the most severe LCP issue on the site. The browser's preload scanner cannot discover background images declared in CSS — it must first download the CSS file, parse it, apply cascade rules, and resolve the computed style before issuing the image request. This adds 400–900ms of avoidable delay to the LCP critical path on every page load.

**LCP subpart breakdown (estimated):**

| Subpart | Estimated Duration | Target |
|---|---|---|
| TTFB | 400–800ms | <800ms |
| Resource Load Delay | 600–1,100ms | Minimize |
| Resource Load Time | 300–600ms | Depends on size |
| Element Render Delay | 200–400ms | Minimize |
| **Total LCP (mobile)** | **1,500–2,900ms above threshold** | ≤2,500ms |

Resource Load Delay is abnormally high because the hero image request cannot start until CSS is parsed — the classic CSS `background-image` penalty. The TTFB contribution is elevated further by the absence of confirmed edge CDN for the HTML document.

**Secondary LCP contributors:**
- No confirmed `<link rel="preconnect">` for assets.cdn.filesafe.space — cross-origin DNS + TCP + TLS setup adds 150–350ms before the first CDN byte
- No confirmed `fetchpriority="high"` on any above-fold image
- JS-heavy navigation initialization occupies the main thread during the critical loading window, delaying element render

---

### 3.2 CLS — Cumulative Layout Shift

| | |
|---|---|
| Threshold | Good: ≤0.1 / Needs Improvement: 0.1–0.25 / Poor: >0.25 |
| Estimated Score | 0.08–0.22 |
| Status | AT RISK — straddles Needs Improvement / borderline Poor |

**Contributing factors ranked by expected shift magnitude:**

**1. CDN images without declared dimensions (High impact)**
Images served from filesafe.space without explicit `width` and `height` attributes cause the browser to reserve zero space. When the image loads, the browser calculates its intrinsic dimensions and reflows the surrounding content. Each such image can contribute 0.03–0.08 CLS units depending on viewport position. Product and section images are the most likely offenders.

**2. Web fonts causing FOUT (Medium impact)**
Builder platforms typically load custom fonts from external sources. Without `font-display: optional` or `font-display: swap` combined with metric-matching fallback overrides (`size-adjust`, `ascent-override`, `descent-override`), text renders in the fallback font first, then shifts when the web font loads. Each reflow event contributes 0.01–0.04 CLS units.

**3. WhatsApp widget injection (Medium impact)**
If the WhatsApp floating CTA is delivered by a third-party script (common with wa.me widget implementations), the element is injected into the DOM after initial paint. A fixed/absolute positioned element that does not push layout scores zero CLS. However, if the widget implementation shifts page content to accommodate itself, or if the widget loads inside the content flow, it contributes measurable CLS. The third-party script itself is an additional risk.

**4. Google Maps iFrame resize (Low-Medium impact)**
iFrame embeds that do not have a declared container height resize after load, pushing content below them. Without a reserved container with `aspect-ratio` or fixed `height`, the Maps embed contributes 0.02–0.06 CLS units.

**5. JS-driven navigation dropdowns (Low impact)**
If dropdown menus expand in-flow rather than as overlays, they push content below the navigation on activation. This registers as interaction-triggered CLS and counts toward the overall CLS score.

---

### 3.3 INP — Interaction to Next Paint

> INP replaced FID on March 12, 2024. FID was fully removed from all Chrome tools on September 9, 2024. INP is the sole interactivity metric.

| | |
|---|---|
| Threshold | Good: ≤200ms / Needs Improvement: 200ms–500ms / Poor: >500ms |
| Estimated (Mobile) | 220–380ms |
| Estimated (Desktop) | 130–220ms |
| Status | NEEDS IMPROVEMENT (mobile likely failing) |

INP measures the full cycle from user input to the next painted frame for the worst interaction on the page. The primary risks here are all third-party script driven.

**Main thread budget analysis:**

| Script / Component | Estimated Main Thread Cost | INP Risk |
|---|---|---|
| Google Maps SDK | 300–600ms | High |
| Facebook SDK | 200–500ms | High |
| Instagram embed | 200–400ms | High |
| TikTok widget | 150–300ms | Medium-High |
| WhatsApp widget | 50–150ms | Medium |
| YouTube embed | 100–250ms | Medium |
| Navigation dropdown JS | 80–200ms | Medium |
| JSON-LD parsing (multiple blocks) | 20–60ms | Low |
| **Combined third-party cost** | **1,000–2,200ms** | Critical |

On mid-range Android devices — the dominant device type in the GCC market — 4x CPU throttling amplifies these costs. A 300ms Maps SDK task becomes an effective 1,200ms Long Task, monopolizing the main thread and preventing any user interaction from receiving a paint response within 200ms.

**DOM size concern:**
Builder-platform sites with full-width section stacks, animation layers, social embeds, and floating widgets routinely exceed 2,000–3,500 DOM nodes. Chrome DevTools flags >1,500 DOM nodes as a performance risk. Excessive DOM size causes style recalculation to scale non-linearly on each interaction, adding 40–120ms to INP on complex pages.

---

### 3.4 Supporting Metrics

#### FCP — First Contentful Paint

| | |
|---|---|
| Estimated (Mobile) | 1.8s–3.2s |
| Estimated (Desktop) | 0.9s–1.6s |
| Target | <1.8s (Good) |

FCP is constrained by render-blocking resources in `<head>`. Builder platforms inject a monolithic CSS bundle (estimated 80–250KB) that fully blocks painting until downloaded and parsed. Social SDK scripts placed in `<head>` without `async` or `defer` are hard FCP blockers — each one pauses HTML parsing and delays the first pixel.

#### TTFB — Time to First Byte

| | |
|---|---|
| Estimated | 400–800ms |
| Target | <800ms (Good) / <200ms (recommended for LCP ≤2.5s) |
| Status | Borderline |

The HTML document (scentbazaar.co/) is almost certainly not edge-cached — builder-hosted documents are typically served from a single regional origin. Static CDN assets on filesafe.space carry appropriate TTFB, but the document itself drives the start of the entire critical path. Practical LCP ≤2.5s is very difficult when TTFB exceeds 400ms, as it consumes more than 16% of the LCP budget before any resource has been requested.

---

## 4. Detailed Technical Findings

### 4.1 Image Optimization

| Finding | Severity | Detail |
|---|---|---|
| Hero delivered as CSS `background-image` | Critical | Prevents browser preload scanner discovery; delays LCP request by 400–900ms |
| No `<link rel="preload">` for hero image | Critical | Hero image cannot be fetched in parallel with CSS; discovered only after CSS parse |
| Images missing `width` and `height` attributes | High | Direct CLS cause; browser cannot reserve layout space |
| No confirmed `loading="lazy"` on below-fold images | Medium | Eager loading of off-screen images competes with LCP resource for bandwidth |
| No confirmed `srcset` / `sizes` on CDN images | Medium | Mobile devices likely download full desktop-resolution images |
| WebP in use from filesafe.space | Positive | Good baseline; CDN WebP delivery is confirmed |
| No confirmed AVIF delivery | Opportunity | AVIF provides 30–50% additional compression over WebP at equivalent quality |

### 4.2 Render-Blocking Resources

Builder-platform CSS and JS characteristics:

- **Monolithic CSS bundle** linked in `<head>`: No critical CSS extraction, no above-the-fold inlining. Estimated size: 80–250KB. Fully blocks FCP until complete download and parse.
- **Synchronous JS initialization**: Navigation dropdown logic, animation triggers, and scroll handlers likely load as a single bundle. Without code-splitting, all interaction code — including code for sections not in the viewport — executes at startup.
- **Social SDK scripts**: If any Instagram, TikTok, or Facebook SDK `<script>` tags appear in `<head>` without `async` or `defer`, they are hard HTML parser blockers. Each one stalls FCP.

### 4.3 Third-Party Script Impact

| Script | Load Pattern Risk | Expected Main Thread | Recommended Mitigation |
|---|---|---|---|
| Google Maps embed | iFrame + SDK (~500KB parsed) | 300–600ms | Static screenshot facade; load Maps only on click |
| YouTube embed | iFrame + player SDK | 100–250ms | lite-youtube web component (Paul Irish) |
| Instagram embed | oEmbed SDK + polling | 200–400ms | Static screenshot + link to profile |
| TikTok embed | Widget SDK | 150–300ms | Static screenshot + link |
| Facebook SDK | Heavy SDK with many init tasks | 200–500ms | Remove SDK; use direct share URLs |
| WhatsApp widget | Third-party widget script | 50–150ms | Replace with native anchor + static icon |

Total estimated third-party main thread contribution: **1,000–2,200ms**. This is the dominant performance bottleneck on the page after the hero image issue. On mobile, these tasks combine to produce a wall of Long Tasks that blocks all user interactions from responding within the 200ms INP threshold.

### 4.4 JavaScript Bundle Analysis

- No evidence of module/nomodule split for modern vs. legacy browser JS delivery
- Builder platforms commonly ship jQuery or a legacy framework alongside modern component code, doubling effective JS payload
- Multiple JSON-LD `<script type="application/ld+json">` blocks are correctly non-render-blocking but increase startup parse time; can be consolidated into a single `@graph` array
- Navigation dropdown handlers without `requestAnimationFrame` wrapping or `scheduler.postTask()` yielding produce Long Tasks that directly harm INP

### 4.5 Caching Headers

| Resource Type | Cache Behavior | Assessment |
|---|---|---|
| filesafe.space CDN assets | Likely long-lived `max-age` | Good (standard CDN behavior) |
| HTML document (scentbazaar.co/) | Not edge-cached (builder origin) | Poor — re-fetched on every visit |
| Social SDK scripts | Short TTLs (SDK provider controlled) | Poor — repeated network cost |
| WhatsApp widget resources | Unknown; likely short TTL | Likely Poor |

The HTML document cache is the most impactful gap. Even with a 5-minute edge cache TTL for the document, repeat visitors and shared-network users (common in Dubai commercial districts) would benefit significantly from reduced TTFB.

### 4.6 CDN Usage (filesafe.space)

The filesafe.space CDN is a positive baseline signal — assets are not served from the same origin as the HTML document. However, several optimizations may be available depending on CDN configuration:

- **On-the-fly image resizing**: Many CDNs of this type support URL parameter transforms (e.g., `?width=480&format=avif`). If supported, this enables responsive images and AVIF delivery without re-uploading assets.
- **Preconnect not confirmed**: A missing `<link rel="preconnect" href="https://assets.cdn.filesafe.space" crossorigin>` in `<head>` means the first CDN request incurs full DNS + TCP + TLS setup time — typically 150–350ms on mobile.
- **Cross-origin resource attribution**: Without a preconnect hint, CDN resources are deprioritized relative to same-origin resources during the browser's connection setup phase.

### 4.7 Mobile vs. Desktop Performance Gap

| Factor | Mobile Impact | Desktop Impact |
|---|---|---|
| CPU throttling (4x slower on mid-range Android) | JS tasks 4x longer | Minimal |
| Network (4G vs. broadband) | Image download 3–5x slower | Minimal |
| Hero background-image penalty | Equal, but amplified by network | Equal |
| Third-party scripts | 4x CPU cost = extended Long Tasks | Manageable |
| DOM size (>1,500 nodes) | Style recalculation scales poorly | Minor |
| No mobile-specific optimizations | Full desktop payload served | N/A |

The absence of responsive images (`srcset`/`sizes`) means mobile devices in the GCC market — where mid-range Android devices on 4G LTE dominate — download the same image bytes as desktop visitors, while having 4x less CPU to process them.

---

## 5. Prioritized Recommendations

### Priority 1 — Critical (Implement First)

These fixes address the LCP root cause and will produce the largest measurable improvement.

**P1-A: Convert hero to a preloaded `<img>` with fetchpriority**

Replace the CSS `background-image` hero with a real `<img>` element. Add a `<link rel="preload">` as the first resource hint in `<head>`:

```html
<!-- In <head>, immediately after <meta charset> -->
<link rel="preload" as="image"
      href="https://assets.cdn.filesafe.space/hero-1920.webp"
      imagesrcset="https://assets.cdn.filesafe.space/hero-480.webp 480w,
                   https://assets.cdn.filesafe.space/hero-1024.webp 1024w,
                   https://assets.cdn.filesafe.space/hero-1920.webp 1920w"
      imagesizes="100vw">

<!-- Hero <img> element -->
<img src="https://assets.cdn.filesafe.space/hero-1920.webp"
     srcset="https://assets.cdn.filesafe.space/hero-480.webp 480w,
             https://assets.cdn.filesafe.space/hero-1024.webp 1024w,
             https://assets.cdn.filesafe.space/hero-1920.webp 1920w"
     sizes="100vw"
     width="1920" height="1080"
     fetchpriority="high"
     loading="eager"
     alt="Scent Bazaar — Premium Fragrance Supplier, Dubai">
```

Expected LCP improvement: **800ms–1,500ms reduction**

**P1-B: Add preconnect hints for all critical third-party origins**

```html
<!-- filesafe.space CDN -->
<link rel="preconnect" href="https://assets.cdn.filesafe.space" crossorigin>
<!-- Google Fonts (if used) -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

Expected LCP improvement: **150–350ms reduction**

**P1-C: Facade all heavy third-party embeds**

Load third-party SDKs only on explicit user interaction, not at page load:

- **Google Maps**: Display a static map screenshot (can be generated via the Static Maps API at no cost for moderate volume). Wrap in an `<a>` linking to Google Maps. On click, swap to the live iFrame. This eliminates the Maps SDK (~500KB) from the initial page load entirely.
- **YouTube**: Use the `<lite-youtube>` web component. It renders a thumbnail and play button with ~1KB of JS; the full YouTube player loads only when the user clicks play.
- **Instagram / TikTok / Facebook**: Replace live embeds with static screenshots linked to the social profiles. For a B2B fragrance supplier, the conversion value of live in-page social embeds is low relative to their performance cost.
- **WhatsApp**: The wa.me link requires no third-party SDK. Replace the widget script with a self-hosted button (see P2-B).

Expected improvement: **600ms–1,200ms LCP reduction, 100–200ms INP reduction**

---

### Priority 2 — High (CLS and INP Fixes)

**P2-A: Declare explicit dimensions on all CDN-served images**

Every `<img>` tag must carry `width` and `height` attributes matching the image's intrinsic aspect ratio. The exact pixel values need not match the rendered size — only the ratio matters for space reservation.

```html
<!-- Correct: aspect ratio preserved, CLS eliminated -->
<img src="product.webp" width="800" height="600"
     loading="lazy" alt="Oud fragrance oil, 100ml">

<!-- Also correct: use CSS to control rendered size -->
<img src="product.webp" width="800" height="600"
     style="width:100%; height:auto;"
     loading="lazy" alt="Oud fragrance oil, 100ml">
```

Expected CLS improvement: **0.05–0.12 reduction**

**P2-B: Replace third-party WhatsApp widget with a native anchor element**

A wa.me link needs no SDK. Replace the widget entirely:

```html
<a href="https://wa.me/971XXXXXXXXX?text=Hello%2C%20I%27m%20interested%20in%20your%20fragrances"
   target="_blank"
   rel="noopener noreferrer"
   aria-label="Chat with Scent Bazaar on WhatsApp"
   style="position:fixed; bottom:24px; right:24px; z-index:1000;
          width:56px; height:56px; display:flex; align-items:center; justify-content:center;">
  <img src="/icons/whatsapp.svg" width="56" height="56"
       alt="" role="presentation" loading="eager">
</a>
```

This eliminates one third-party script entirely, removes the associated CLS risk, and reduces INP main-thread competition.
Expected improvement: **one fewer third-party script, ~0.02–0.04 CLS reduction, ~50ms INP reduction**

**P2-C: Reserve explicit container height for Google Maps iFrame**

Until Maps is facaded (P1-C), prevent its resize-on-load CLS:

```html
<div style="width:100%; aspect-ratio:16/9; overflow:hidden;">
  <iframe src="https://maps.google.com/..." width="100%" height="100%"
          loading="lazy" title="Scent Bazaar location on Google Maps">
  </iframe>
</div>
```

Expected CLS improvement: **0.02–0.06 reduction**

**P2-D: Apply font-display and metric-matching fallbacks for web fonts**

```css
/* In @font-face declarations */
@font-face {
  font-family: 'YourFont';
  src: url('font.woff2') format('woff2');
  font-display: optional; /* Preferred: prevents FOUT entirely */
  /* If swap is required, add metric overrides: */
  /* font-display: swap; */
  /* size-adjust: 98%; */
  /* ascent-override: 90%; */
  /* descent-override: 22%; */
}
```

`font-display: optional` is recommended over `swap` for CLS: it tells the browser to use the web font only if it is already cached or loads within the first critical rendering window — eliminating FOUT-driven layout shifts entirely.
Expected CLS improvement: **0.01–0.04 reduction**

**P2-E: Yield from navigation dropdown event handlers**

Navigation interaction handlers that run for longer than 50ms should yield to the browser between work chunks:

```javascript
// Before: synchronous, blocks INP
menuButton.addEventListener('click', () => {
  openDropdown();      // Heavy DOM mutation
  updateAria();        // Style recalculation
  trackAnalytics();    // Synchronous call
});

// After: yield between non-visual tasks
menuButton.addEventListener('click', async () => {
  openDropdown();      // Visual change — do first, synchronously
  await scheduler.yield(); // Yield; browser can now paint
  updateAria();
  await scheduler.yield();
  trackAnalytics();
});
```

Expected INP improvement: **40–100ms reduction on navigation interactions**

---

### Priority 3 — Medium (TTFB, Long-Tail Gains)

**P3-A: Enable edge CDN / document-level caching**

If on a managed builder platform (Webflow, Framer, etc.), enable their edge CDN for the HTML document. If self-hosted or on a VPS, place Cloudflare (free tier) or equivalent in front of the origin with page caching enabled.

Target TTFB: ≤200ms from Dubai-local users with edge CDN active.
Expected LCP improvement: **200–500ms reduction**

**P3-B: Add `loading="lazy"` to all below-fold images**

Any image not visible in the initial viewport should defer its load until the user scrolls close. This is a one-line change per image and reduces initial page weight and bandwidth competition with the LCP resource.

```html
<img src="product.webp" width="600" height="400" loading="lazy" alt="...">
```

Expected improvement: **Indirect LCP benefit (reduced network contention), lower data cost for mobile users**

**P3-C: Consolidate multiple JSON-LD schema blocks into a single `@graph`**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "Scent Bazaar",
      "url": "https://scentbazaar.co/"
    },
    {
      "@type": "LocalBusiness",
      "name": "Scent Bazaar",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      }
    }
  ]
}
</script>
```

This reduces the number of `<script>` blocks the parser must handle and is Google's recommended approach for multiple schema types on a single page.

**P3-D: Generate responsive image variants on filesafe.space CDN**

If filesafe.space supports URL-parameter image transforms (check their documentation for parameters like `?w=480&fm=avif`), generate at minimum three breakpoint variants for all content images:

| Breakpoint | Width | Use Case |
|---|---|---|
| Mobile | 480px | Phones up to 480px viewport |
| Tablet | 1024px | Tablets and small laptops |
| Desktop | 1920px | Full-width desktop |

Declare with `srcset` and `sizes` on every `<img>`:

```html
<img src="image-1920.webp"
     srcset="image-480.webp 480w, image-1024.webp 1024w, image-1920.webp 1920w"
     sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
     width="1920" height="1080"
     loading="lazy"
     alt="...">
```

**P3-E: Audit and defer all non-critical `<head>` scripts**

Any `<script>` tag in `<head>` without `async` or `defer` is a hard FCP blocker. Audit for:

- Analytics scripts (Google Analytics 4, any custom analytics)
- Social SDK initialization (Facebook, TikTok)
- Chat widget initialization scripts
- Marketing pixels

All of the above should use `defer` or be loaded conditionally after first user interaction using an `IntersectionObserver` or a `requestIdleCallback`.

---

## 6. Expected Outcomes After Full Implementation

| Metric | Current Estimate | Post-Fix Target | Threshold | Status Change |
|---|---|---|---|---|
| LCP (Mobile) | 4.5–6.5s | 1.8–2.4s | ≤2.5s | Fail → Pass |
| LCP (Desktop) | 2.5–3.5s | 1.0–1.6s | ≤2.5s | Borderline → Pass |
| CLS | 0.08–0.22 | 0.01–0.05 | ≤0.1 | At Risk → Pass |
| INP (Mobile) | 220–380ms | 100–180ms | ≤200ms | Fail → Pass |
| INP (Desktop) | 130–220ms | 80–130ms | ≤200ms | Borderline → Pass |
| TTFB | 400–800ms | 150–250ms | ≤800ms | Pass → Better |
| FCP (Mobile) | 1.8–3.2s | 0.9–1.5s | ≤1.8s | At Risk → Pass |
| Mobile Score | 35–52 | 68–80 | — | +30–35 pts |
| Desktop Score | 58–72 | 84–92 | — | +22–26 pts |

---

## 7. Implementation Sequence

The following order maximizes impact per development hour spent and avoids regressions between changes:

1. Add `<link rel="preconnect">` for filesafe.space and Google Fonts — 15 minutes, zero risk
2. Add `<link rel="preload">` for hero image in `<head>` — 15 minutes, zero risk
3. Replace CSS background-image hero with `<img fetchpriority="high">` — 30–60 minutes
4. Add `width`, `height`, and `loading="lazy"` to all product/section images — 1–2 hours
5. Replace WhatsApp widget script with native anchor + static icon — 30 minutes
6. Add container height reservation for Google Maps iFrame — 15 minutes
7. Facade Google Maps (static screenshot + click-to-load) — 1–2 hours
8. Implement `font-display: optional` for web fonts — 15–30 minutes
9. Facade YouTube embed with lite-youtube — 30 minutes
10. Remove or facade Instagram/TikTok/Facebook embeds — 30–60 minutes
11. Defer all non-critical `<head>` scripts — 30–60 minutes
12. Consolidate JSON-LD blocks into `@graph` — 15 minutes
13. Implement responsive `srcset` / `sizes` on CDN images — 2–4 hours
14. Enable edge CDN / document caching at hosting layer — 30–60 minutes

**Total estimated effort:** 8–14 development hours

---

## 8. Validation Steps

After implementing each priority group, validate with:

1. **PageSpeed Insights** — pagespeed.web.dev
   Run the URL and check both mobile and desktop tabs. Field data (CrUX 75th percentile) takes 28 days to accumulate after changes; lab data (Lighthouse) reflects changes immediately.

2. **CrUX Vis** — cruxvis.withgoogle.com
   Monitor 28-day rolling CWV trends for the scentbazaar.co origin. LCP subparts (TTFB, resource load delay, resource load time, element render delay) are available here as of February 2025 — use them to confirm which LCP phase improved after each change.

3. **Lighthouse 13.0 CLI** (lab validation)
   ```bash
   npx lighthouse https://scentbazaar.co/ \
     --output html \
     --output-path scentbazaar-report.html \
     --throttling-method simulate \
     --emulated-form-factor mobile
   ```
   Run with simulated mobile throttling (4x CPU, Fast 3G) to replicate the GCC mid-range Android experience.

4. **Chrome DevTools — LCP element confirmation**
   Open DevTools > Performance tab > Record with "4x CPU slowdown" and "Fast 3G" network throttling. After recording, identify the LCP element in the Timings row. Confirm it is the hero `<img>` (not a text block or background) after implementing P1-A.

5. **Chrome DevTools — Coverage tab**
   Measure unused CSS and JS percentages on first load. Builder platforms routinely deliver 60–80% unused code per page. If unused CSS exceeds 60%, critical CSS extraction (inlining only above-fold styles) is worth exploring.

6. **Google Search Console — Core Web Vitals report**
   Monitor the "Poor URLs" count for the origin. Changes take 28 days to reflect in field data but will appear in Lighthouse lab scores immediately.

---

## 9. Key References

- CWV thresholds and LCP subpart definitions: `/seo/references/cwv-thresholds.md`
- INP replacement of FID: effective March 12, 2024; FID removed from all tools September 9, 2024
- CrUX Vis (replaced CrUX Dashboard, November 2025): https://cruxvis.withgoogle.com
- Lighthouse 13.0 (October 2025): Updated scoring weights — use as lab diagnostic, validate against CrUX field data
- Mobile-first indexing: 100% complete July 5, 2024 — mobile performance is the primary ranking signal
- December 2025 core update: Google appeared to weight mobile CWV more heavily in ranking
- LCP subparts in CrUX: available since February 2025

---

*Report generated by Claude Code Web Performance Specialist — March 16, 2026*
*Estimates are based on structural analysis of confirmed technical signals. Validate all estimates with live PageSpeed Insights data at pagespeed.web.dev before prioritizing development work.*
