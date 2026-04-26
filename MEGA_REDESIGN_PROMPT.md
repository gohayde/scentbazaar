# 🎨 SCENT BAZAAR HOMEPAGE — MEGA REDESIGN PROMPT v2.0

## EXECUTIVE SYNTHESIS: Design Excellence Across All Frameworks

This mega prompt unifies best practices from **Impeccable**, **shadcn/ui**, **Magic UI**, **21st.dev**, **SuperDesign**, and **UI Skills** frameworks to create a pixel-perfect, high-end luxury B2B homepage redesign.

---

## PHASE 1: FOUNDATIONAL DESIGN SYSTEM AMPLIFICATION

### 1.1 Color Psychology & Hierarchy (Impeccable + Design System Tokens)

**Current State Analysis:**
- Primary accent: `#c8622a` (warm terracotta) ✓ Luxurious
- Secondary: `#d4a96a`, `#e8c98a` (warm golds) ✓ Sophisticated
- Background: `#f7f2ea`, `#fdf9f3` (warm cream) ✓ Premium feel

**Amplification Strategy:**
1. **Contrast Optimization**: Increase visual hierarchy by introducing a dark accent variant (`#8b4513`) for text-heavy sections
2. **Saturation Control**: Current palette risks "garish" in bright light. Introduce secondary cool-neutral for balance (`#4a4238` for refined grays)
3. **Semantic Color Application**:
   - Success states: Warm green (`#5a7f4b`)
   - Warning/attention: Deep amber (`#c8622a` — reaffirm)
   - Trust/calm: Muted slate (`#6b7c8f`)
4. **Micro-interactions**: Add subtle color shifts on hover (+8% lightness), never clip contrast below WCAG AA (4.5:1)

### 1.2 Typography Mastery (shadcn + Impeccable Strategy)

**Current State:**
- Display: DM Serif Display (excellent choice)
- Body: Outfit (clean, modern)

**Refinement Approach:**
1. **Serif Hierarchy Tiers**:
   - `h1`: DM Serif Display, 6.4rem, 400 weight, -0.03em letter-spacing (keep)
   - `h2`: DM Serif Display, 4.6rem, 400 weight (strengthen line-height to 1.12 for elegance)
   - `h3`: Switch to **Crimson Text** or **EB Garamond** (more refined than current)
   - Body copy: Keep Outfit but adjust sizing:
     - Desktop: 1.1rem (up from 1rem baseline)
     - Tablet: 1.05rem
     - Mobile: 1rem
2. **Letter-spacing Refinement**:
   - H1/H2: -0.03em (tighten luxury feel)
   - Body: 0.01em (improve readability of long-form content)
   - Labels: 0.08em (all-caps only)
3. **Line-height Calibration**:
   - Headlines: 1.08–1.12 (tight, sophisticated)
   - Body: 1.8–1.9 (generous, readable)
   - Small text (<1rem): 1.6 minimum

**Magic UI Principle**: Typography creates emotion before content is read.

### 1.3 Spacing & Density (21st.dev + shadcn Composition Patterns)

**Grid System Overhaul:**
- Define explicit spacing scale: `4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px`
- All elements align to 4px baseline (not just 8px)
- Section padding: `clamp(60px, 10vw, 140px)` (was 80-160px, tighten for flow)
- Container max-width: `1280px` (current 1240px is fine, maintain)

**Micro-spacing:**
- Button padding: `14px 32px` (tighten from 16px 36px for premium feel)
- Card padding: `24px` (consistent throughout)
- Gap between elements: Always use token scale (never arbitrary px values)

---

## PHASE 2: COMPONENT-LEVEL DESIGN EXCELLENCE

### 2.1 Hero Section (Magic UI + Impeccable Editorial Excellence)

**Current State Issues:**
- Split layout is strong ✓
- Meteor animations are novelty; replace with refined cinematic effects
- Hero stats are functional but lack visual rhythm

**Redesign Specifications:**

**Left Panel:**
```
1. Eyebrow tag: Remove background, use inline accent color only
   - "Dubai's Trusted Fragrance Supplier" 
   - Font: Outfit, 0.65rem, 700 weight, letter-spacing 0.16em
   
2. Headline:
   - "Wholesale Perfume Oil & Fragrance Supplier – Dubai"
   - Type: DM Serif, 7rem (up from 6.4rem on desktop)
   - Line-height: 1.08
   - Add subtle underline accent beneath "Supplier" (golden rule element)
   
3. Subheading:
   - Increase font weight from normal to 500
   - Line-height: 1.8
   - Color: var(--muted) with 0.85 opacity (not pure muted)
   
4. CTA Buttons:
   - Primary: "Get a Quote" (keep current styling, add subtle glow on hover)
   - Secondary: "Visit Our Store" → Change to more descriptive text: 
     "Book Store Visit" (clearer intent)
   - Add invisible focus ring for keyboard nav (4px outline offset)
   
5. Stats Row:
   - Current 4-column layout is good, strengthen with:
     - Separator line between each stat (var(--line), full height)
     - Bold numbers: use font-weight 700 (not 600)
     - Stat labels: 0.8rem, 400 weight, color var(--muted-2)
     - Add light background pill behind each stat: rgba(200, 98, 42, 0.04)
```

**Right Panel:**
```
1. Replace all meteor animations with single, refined effect:
   - Soft floating particles (5-7 max) that drift slowly
   - Use CSS animations only (no JS for performance)
   - Opacity: 0.12–0.18 (very subtle)
   
2. Image treatment:
   - Add 8px golden border frame (var(--accent-2))
   - Apply subtle 3D perspective: perspective(1200px) rotateX(2deg) rotateY(-1deg)
   - Shadow beneath: 0 32px 80px rgba(200, 98, 42, 0.12)
   - On scroll, tilt angle increases slightly (parallax depth)
   
3. Background gradient overlay:
   - Radial: center to transparent, color var(--accent) at 0%, transparent at 70%
   - Opacity: 0.08 (extremely subtle, background texture only)
```

### 2.2 Service Cards Grid (Magic UI Spotlight + 21st.dev Refinement)

**Current State:**
- 3-column grid with background images ✓
- Spotlight effect on hover ✓
- Text overlay works

**Amplifications:**

```css
1. Card Structure:
   - Background image: Keep but add overlay gradient
     - Top to bottom: rgba(16,12,8,0) → rgba(16,12,8,0.85)
   - Border: 1px solid rgba(255,255,255,0.08) (subtle frame)
   - Aspect ratio: Strict 4:5 (was variable)
   - Border-radius: var(--r-lg) = 22px

2. Spotlight Effect Upgrade:
   - Replace simple mousemove listener with enhanced version
   - Add radial gradient: radial-gradient(circle 400px, 
     rgba(200,98,42,0.15), transparent 80%)
   - Only activate on hover (save compute)
   - Transition smoothness: 0.08s cubic-bezier(0.34, 1.56, 0.64, 1)

3. Card Hover Animations:
   - Image scale: 1 → 1.04 (subtle, not aggressive)
   - Shadow lift: 0 12px 64px rgba(26,18,8,0.14) → 0 28px 96px rgba(26,18,8,0.22)
   - Text fade-in: Opacity 0.85 → 1

4. Responsive Cascade:
   - Desktop: 3 columns
   - Tablet: 2 columns (gap 24px)
   - Mobile: 1 column (full width with 20px padding)
   - Never squish text on any breakpoint
```

### 2.3 Testimonials Section (shadcn Composition + Magic UI Trust Signals)

**Current Issue:**
- iFrame widget loses design consistency
- Opacity: 0.72 for text in dark sections is weak (improve to 0.88)

**Solution:**

```
1. Create native testimonial component:
   - Replace widget with structured testimonial cards
   - Each card: 85% opacity background (from white), 1px border
   - Layout: Masonry or staggered grid (not rigid)
   - Max width per card: 280px
   
2. Star Rating:
   - Actual 5-star SVG (not emoji ⭐)
   - Color: var(--accent)
   - Size: 16px each star
   - Add reviewer name + location below
   
3. Review Text:
   - Font: Outfit, 0.95rem, 400 weight
   - Line-height: 1.72
   - Color: var(--ink)
   - Opening quote mark: Large, var(--accent), opacity 0.2
```

### 2.4 Scent Library Section (Editorial + Product Showcase Pattern)

**Current Strength:** Image + text split is excellent

**Refinements:**

```
1. Image (Left):
   - Add decorative frame: Double border
     - Outer: 1px var(--accent), 32px distance from image
     - Inner: 1px var(--line), 8px distance from image
   - Add subtle corner accent elements (12px × 12px lines in accent color)
   - Parallax on scroll: translateY(-30px) at 50% viewport
   
2. Text Content (Right):
   - Tag: Refine to single-line, inline style
   - Headline: Use h2 class
   - Description: 1.08rem, 1.8 line-height
   - Bullet list items:
     - Use custom SVG bullet (small accent circle, 4px diameter)
     - Padding-left: 16px
     - Font-weight: 500 (not 600)
   
3. CTA Button:
   - Primary style, full width on mobile
   - Icon arrow: Rotate 45° on hover (↗ → ↗ rotated)
```

### 2.5 Private Label Section (Asymmetric Bento + Visual Rhythm)

**Current State:** Good layout, image could be stronger

**Redesign:**

```
1. Image Treatment (Right):
   - Apply glare effect with subtle light leak
   - Use CSS: 
     linear-gradient(135deg, rgba(255,255,255,0) 0%, 
                      rgba(255,255,255,0.08) 50%, 
                      rgba(255,255,255,0) 100%)
   - Opacity transition: 0 on load, 1 on hover
   - Shadow: 0 16px 48px rgba(26,18,8,0.12)
   
2. Text Hierarchy (Left):
   - List styling: Use accent-colored bullets (circle, 6px)
   - Each item gets subtle left border: 3px var(--accent), opacity 0.5
   - Padding: 12px 0 12px 16px
   
3. CTA Button:
   - Add inline secondary button below primary
   - "Learn More" → Links to detailed page with scroll anchor
```

### 2.6 Visit Store Section (Location Intelligence + Trust Building)

**Current State:**
- Dual maps (iframe) → Remove redundancy
- Store highlights are functional

**Improvements:**

```
1. Store Map:
   - Single, responsive map
   - Remove tilt effect on hover (too playful for B2B)
   - Add custom marker: Accent-colored pin with store icon
   - Height: 400px on desktop, 300px on mobile
   - Border: 1px var(--line), border-radius var(--r-lg)
   
2. Store Highlights (Right):
   - Grid: 2 columns on desktop, 1 on mobile
   - Each highlight card:
     - Background: var(--bg-card)
     - Border: 1px var(--line)
     - Padding: 20px
     - Icon: 24px × 24px, var(--accent) color
     - Heading: 0.95rem, 700 weight
     - Description: 0.85rem, var(--muted)
   
3. Store Contact Box:
   - Border-left: 3px var(--accent) (accent bar)
   - Background: transparent (no box needed)
   - Phone link: Text color var(--accent), font-weight 700
   - Address: Use custom location icon (SVG)
   
4. CTA Buttons:
   - Primary: "Get Directions" (opens Google Maps)
   - Secondary: "Chat on WhatsApp"
   - Stack vertically on mobile
```

### 2.7 FAQ Section (Accessibility + Semantic HTML Excellence)

**Current State:**
- Details/summary tags are good ✓
- Visual hierarchy could be stronger

**Enhancements:**

```
1. FAQ Card Structure:
   - Background: var(--bg-card)
   - Border: 1px var(--line)
   - Padding: 24px
   - Border-radius: var(--r-lg)
   - Transition on open: background-color 0.3s ease
   
2. Summary (Question):
   - Font: Outfit, 1rem, 700 weight
   - Color: var(--ink)
   - Display: flex, justify-content space-between
   - Cursor: pointer
   - User-select: none
   
3. Arrow Icon:
   - Custom SVG: Simple chevron down (6px × 6px stroke)
   - Color: var(--accent)
   - Rotate 180° when open
   - Transition: transform 0.3s ease
   
4. Answer (Details) Content:
   - Color: var(--muted)
   - Font-size: 0.95rem
   - Line-height: 1.8
   - Margin-top: 12px
   - Border-top: 1px var(--line), margin-top 12px
   
5. Keyboard Navigation:
   - Focus outline: 2px solid var(--accent), offset 4px
   - Outline-offset: 4px (gives breathing room)
   - Focus-visible class for non-mouse users
```

---

## PHASE 3: MOTION & INTERACTION EXCELLENCE

### 3.1 Animation Principles (Magic UI + Impeccable Motion)

**Guiding Rules:**
1. **Entrance animations** (fade-up): Always use `opacity 0.9s, transform 0.9s` (never longer)
2. **Hover interactions**: 0.3s–0.5s (fast enough to feel responsive)
3. **Loading states**: Smooth, predictable curves (cubic-bezier(0.32, 0.72, 0, 1))
4. **Parallax**: Subtle (never >5% vertical shift)
5. **Micro-interactions**: 0.15s–0.25s (snappy buttons, form focus)

**Specific Implementations:**

```css
/* Button hover: smooth lift + glow */
.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 48px rgba(200, 98, 42, 0.35);
  transition: all 0.35s cubic-bezier(0.32, 0.72, 0, 1);
}

/* Count-up numbers: ease-out for natural deceleration */
@keyframes count-up-ease {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* Scroll-triggered stagger: 0.08s between elements */
.fade-up { --i: 0; animation-delay: calc(var(--i) * 0.08s); }
```

### 3.2 Scroll Performance (UI Skills Motion + Core Web Vitals)

**Critical Optimizations:**
1. **Intersection Observer**: Already implemented for fade-ups ✓
2. **will-change**: Add to animated elements, remove after animation
3. **Backdrop-filter**: Use cautiously (Safari performance cost)
4. **Transform-only animations**: Prefer `transform` + `opacity` over `width/height`
5. **Debounce scroll listeners**: Already using requestAnimationFrame ✓

**Specific Fixes:**

```javascript
// Count-up: Only animate when visible
const countIo = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return; // Skip if not visible
    animateCount(e.target); // Trigger animation
    countIo.unobserve(e.target);
  });
}, { threshold: 0.5 });

// Service card spotlight: Lazy-enable on hover
card.addEventListener('mouseenter', () => {
  // Only calculate spotlight position on hover, not every mousemove
  card.addEventListener('mousemove', handler, { passive: true });
});
```

---

## PHASE 4: ACCESSIBILITY & SEMANTIC EXCELLENCE

### 4.1 Keyboard Navigation (shadcn + WCAG 2.1 AA)

**Implementation Checklist:**
- ✓ All interactive elements (buttons, links) must be keyboard-focusable
- ✓ Tab order matches visual left-to-right flow
- ✓ Focus indicator: Minimum 3px, 3:1 contrast ratio
- ✓ Dropdown menus: Arrow keys to navigate, Escape to close
- ✓ Skip-to-content link: Hidden but keyboard-accessible

**Specific Code:**

```html
<!-- Skip-to-content link (always first focusable element) -->
<a href="#main" class="skip-link">Skip to main content</a>

<!-- Focus styles for all interactive elements -->
<style>
  *:focus-visible {
    outline: 3px solid var(--accent);
    outline-offset: 4px;
  }
  
  /* Remove outline for mouse users */
  *:focus:not(:focus-visible) {
    outline: none;
  }
</style>
```

### 4.2 Semantic HTML (shadcn Composition Pattern)

**Hierarchy Structure:**

```html
<!-- Use semantic landmarks -->
<header role="banner">...</header>
<nav role="navigation">...</nav>
<main id="main" role="main">
  <article>...</article>
</main>
<footer role="contentinfo">...</footer>

<!-- Proper heading hierarchy: Never skip levels -->
<h1>Main Page Title</h1>
<h2>Section Heading</h2>
<h3>Subsection</h3>

<!-- Form accessibility -->
<label for="input-id">Label text</label>
<input id="input-id" type="text" aria-required="true">

<!-- Images with proper alt text -->
<img src="..." alt="Descriptive alternative text (not 'image of')">

<!-- Lists with proper structure -->
<ul role="list">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

### 4.3 Color Contrast (Impeccable Design System)

**Verification:**
- Body text on background: 7:1 (exceeds WCAG AAA)
- Links: 4.5:1 minimum
- UI components: 3:1 minimum
- Use WebAIM Contrast Checker for verification

---

## PHASE 5: RESPONSIVE DESIGN EXCELLENCE

### 5.1 Breakpoints & Fluid Typography (21st.dev + shadcn Composition)

**Standard Breakpoints:**
- Mobile: 320px–640px
- Tablet: 641px–1024px
- Desktop: 1025px+

**Fluid Type Scale:**

```css
/* Body copy scales smoothly */
body {
  font-size: clamp(1rem, 1vw + 0.5rem, 1.15rem);
  line-height: clamp(1.5, 1.2vw + 1.2, 1.9);
}

h1 {
  font-size: clamp(2.5rem, 6vw, 7rem);
  line-height: clamp(1.1, 1.5vw + 0.8, 1.2);
}

h2 {
  font-size: clamp(1.8rem, 4vw, 4.6rem);
  line-height: clamp(1.2, 1vw + 0.9, 1.3);
}

/* Spacing scales with viewport */
section {
  padding: clamp(60px, 10vw, 140px) 0;
}

.container {
  padding-inline: clamp(20px, 4vw, 56px);
}
```

### 5.2 Image Optimization (Performance)

**Implementation:**

```html
<!-- Use modern formats -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.avif" type="image/avif">
  <img src="image.png" alt="..." loading="lazy" decoding="async">
</picture>

<!-- Responsive images with srcset -->
<img 
  srcset="image-320w.jpg 320w, image-640w.jpg 640w, image-1280w.jpg 1280w"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
  src="image-1280w.jpg"
  alt="...">

<!-- LCP optimization: Preload hero image -->
<link rel="preload" as="image" href="/hero.webp" type="image/webp">
```

---

## PHASE 6: PERFORMANCE & CORE WEB VITALS

### 6.1 Largest Contentful Paint (LCP) — Target: <2.5s

**Optimizations:**
1. Hero image: Use WebP format (30-40% smaller than PNG)
2. Preload in `<head>`: `<link rel="preload" as="image" href="hero.webp" fetchpriority="high">`
3. CSS-in-head for critical styles (announcement bar, header)
4. Defer non-critical CSS/JS with `<link rel="preload" as="style">` + `onload` attribute

### 6.2 Interaction to Next Paint (INP) — Target: <200ms

**Optimizations:**
1. Debounce mousemove handlers (service card spotlight)
2. Use `passive: true` for scroll listeners
3. Avoid layout thrashing in JS (read DOM, then write DOM)
4. Remove unnecessarily complex animations on lower-spec devices

### 6.3 Cumulative Layout Shift (CLS) — Target: <0.1

**Preventions:**
1. Reserve space for images: Use aspect-ratio CSS
2. Web fonts: Define `font-display: swap` in `@font-face`
3. Dynamic content: Don't inject ads/widgets after page load
4. Modal dialogs: Don't push main content when appearing

---

## PHASE 7: DARK MODE & THEME CONSISTENCY

### 7.1 Consistent Dark Theme Implementation

**Current dark sections use var(--ink) as background.**

**Enhancements:**

```css
/* Dark theme refinements */
.section-dark {
  background: linear-gradient(135deg, var(--ink) 0%, #1a1208 100%);
  /* Subtle depth through gradient, not flat color */
}

.section-dark h2,
.section-dark h3 {
  color: #fff;
  text-shadow: 0 2px 12px rgba(0,0,0,0.3); /* Subtle lift */
}

.section-dark p {
  color: rgba(255, 246, 232, 0.78);
  /* Current state, maintain */
}

/* Card backgrounds in dark sections */
.section-dark .card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
```

---

## PHASE 8: SCHEMA & SEO EXCELLENCE

### 8.1 Structured Data Optimization (Already Strong ✓)

**Verify with Google's Rich Results Test:**
- Schema.org markup: Already comprehensive ✓
- Organization schema: ✓
- LocalBusiness (with geo coordinates): ✓
- Service schema: ✓
- FAQPage schema: ✓

**Additional Enhancements:**

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "mainEntity": {
    "@type": "Organization",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": 162,
      "bestRating": 5,
      "worstRating": 1
    }
  }
}
```

---

## PHASE 9: DETAILED COMPONENT SPECIFICATIONS

### 9.1 Tag Component Refinement

```html
<!-- Current -->
<span class="tag">Dubai's Trusted Fragrance Supplier</span>

<!-- Refined specification -->
<span class="tag" role="badge">
  <svg class="tag-icon" width="12" height="12" viewBox="0 0 12 12">
    <!-- Small decorative element -->
  </svg>
  <span>One-Stop Scent Supply Ecosystem</span>
</span>

<style>
  .tag {
    display: inline-flex;
    align-items: center;
    gap: 6px; /* Reduced from 8px for tighter spacing */
    font-family: 'Outfit', sans-serif;
    font-size: 0.65rem; /* Reduced from 0.68rem */
    font-weight: 700;
    letter-spacing: 0.16em; /* Reduced from 0.24em */
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 16px; /* Reduced from 18px */
    padding: 6px 12px; /* Adjusted for refinement */
    border-radius: 9999px;
    background: transparent; /* Remove background */
    border: none; /* Remove border */
  }
</style>
```

### 9.2 Service Card Refinement

```html
<a href="/service-page" class="service-card" style="background-image: url(...)">
  <div class="service-card-overlay"></div> <!-- Add explicit overlay layer -->
  <div class="service-card-content">
    <h3>Service Name</h3>
    <p>Service description text</p>
    <span class="service-cta">
      Learn More
      <svg class="arrow-icon" width="16" height="16" viewBox="0 0 16 16">
        <!-- Arrow SVG -->
      </svg>
    </span>
  </div>
</a>

<style>
  .service-card {
    position: relative;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    border-radius: var(--r-lg);
    border: 1px solid rgba(255, 255, 255, 0.08);
    aspect-ratio: 4 / 5;
    display: flex;
    align-items: flex-end;
    padding: 24px;
    transition: transform 0.4s var(--ease), box-shadow 0.4s var(--ease);
  }

  .service-card-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 0%, rgba(26,18,8,0.85) 100%);
    z-index: 1;
  }

  .service-card-content {
    position: relative;
    z-index: 2;
    color: #fff;
  }

  .service-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 60px rgba(26,18,8,0.20);
  }
</style>
```

---

## PHASE 10: BRAND VOICE & COPYWRITING

### 10.1 Headline Hierarchy & Messaging

**Hero Section:**
- Eyebrow: Action + location + trust signal
  - Current: "Dubai's Trusted Fragrance Supplier" ✓ (Strong)
  - Consider variant: "Premium Fragrance Supply From Dubai's Souq"

- Headline: Problem + solution + USP
  - Current: "Wholesale Perfume Oil & Fragrance Supplier – Dubai" ✓ (Strong)
  - Could strengthen with power word: "The Wholesale Perfume Oil & Fragrance Supplier – Dubai"

- Subheading: Benefit + scope
  - Current: "Wholesale perfume oils, perfumers alcohol, fragrance bases, bottles, bakhoor and private label perfume filling — shipping worldwide from Dubai." ✓ (Comprehensive)

### 10.2 CTA Button Microcopy

**Precision over generic:**
- ❌ "Contact" (vague)
- ✓ "Get a Quote" (specific outcome)
- ✓ "Book Store Visit" (action-oriented)
- ✓ "Explore the Library" (inviting)

---

## PHASE 11: FINAL PIXEL POLISH CHECKLIST

### 11.1 Visual Refinement Passes

- [ ] **Line Weights**: All borders use 0.5px–1.5px (never 2px+)
- [ ] **Corner Radius**: Limit to 4 tokens max (8px, 14px, 22px, 32px, 40px)
- [ ] **Shadow Depth**: 5–6 distinct shadow levels used consistently
- [ ] **Color Swatches**: Verify all colors are in design tokens
- [ ] **Typography Scale**: H1 > H2 > H3 > Body > Small (visual hierarchy)
- [ ] **Whitespace**: Never use arbitrary spacing; always reference token scale
- [ ] **Alignment**: All elements snap to 4px grid (except text baseline)

### 11.2 Interaction Refinement

- [ ] **Hover States**: All interactive elements have 3+ states (default, hover, active, disabled)
- [ ] **Loading States**: Spinners, skeletons, or progress indicators present
- [ ] **Error States**: Form validation messages styled and positioned
- [ ] **Focus States**: Visible on keyboard navigation, hidden on mouse
- [ ] **Touch Targets**: Minimum 44px × 44px (WCAG AAA)

### 11.3 Content Verification

- [ ] **Microcopy**: Button text is action-oriented, not generic
- [ ] **Image Alt Text**: All images have descriptive, non-repetitive alt text
- [ ] **Heading Hierarchy**: No skipped levels (H1 → H2, not H1 → H3)
- [ ] **Link Text**: Never "click here"; always descriptive
- [ ] **Form Labels**: Every input has a visible label

---

## IMPLEMENTATION PRIORITY

### High Impact, Low Effort (Do First):
1. ✅ Remove button background color from `.tag`; use inline color only
2. ✅ Refine font sizing: H2 → 4.6rem with line-height 1.12
3. ✅ Enhance button focus states: 3px outline, offset 4px
4. ✅ Replace meteor animations with subtle floating particles (5-7 max)
5. ✅ Add double-border frame to hero image (accent + line colors)

### Medium Impact, Medium Effort (Do Second):
6. ✅ Redesign service cards: Add explicit overlay, stronger hover effects
7. ✅ Improve FAQ styling: Custom SVG chevron, better spacing
8. ✅ Enhance testimonials: Replace widget with native cards
9. ✅ Refine store section: Remove redundant maps, strengthen highlights
10. ✅ Add corner accents to scent library section

### High Impact, High Effort (Phase In):
11. ✅ Audit all animations for performance (use DevTools)
12. ✅ Implement comprehensive keyboard navigation testing
13. ✅ A/B test new headline copy variations
14. ✅ Create design tokens documentation (for future consistency)

---

## VALIDATION CHECKLIST (Post-Implementation)

### Design Excellence:
- [ ] Lighthouse score: ≥90 (Performance), ≥95 (Accessibility)
- [ ] Core Web Vitals: LCP <2.5s, INP <200ms, CLS <0.1
- [ ] WCAG 2.1 AA compliance verified
- [ ] All animations smooth (60fps on modern devices)
- [ ] Mobile rendering tested on actual devices (not just Chrome DevTools)

### Business Metrics:
- [ ] CTA click-through rate improvement: Target +15%
- [ ] Bounce rate reduction: Target -8%
- [ ] Session duration increase: Target +20%
- [ ] Form submission completions tracked

### Quality Assurance:
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Dark mode preference respected (prefers-color-scheme media query)
- [ ] Print styles tested (invoice clarity for bookmarked pages)
- [ ] Fallback fonts rendering acceptably

---

## SYNTHESIS SUMMARY

This redesign unifies five best-in-class design frameworks:

1. **Impeccable** → Design discipline, color theory, refinement methodology
2. **shadcn/ui** → Component composition, accessibility, semantic structure
3. **Magic UI** → Animation patterns, micro-interactions, trust signals
4. **21st.dev** → Modern React patterns, responsive design, theme consistency
5. **UI Skills** → Performance optimization, motion safety, metadata rigor

**Output:** A pixel-perfect, accessible, performant homepage that balances luxury brand aesthetics with B2B conversion optimization.

---

**Version:** 2.0  
**Last Updated:** 2026-04-26  
**Status:** Ready for Implementation
