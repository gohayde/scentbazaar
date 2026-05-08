# Scent Bazaar SEO Action Plan - 2026-05-07

## Critical

No critical SEO blockers found in today's audit.

## High

1. Completed locally: align the blog sitemap URL with the canonical URL.
   - Current sitemap URL: `https://scentbazaar.co/blog/top-perfume-oil-suppliers-dubai`
   - Live final/canonical URL: `https://scentbazaar.co/blog/top-perfume-oil-suppliers-dubai/`
   - Fix applied: `sitemap.xml` now uses the trailing-slash version.
   - Why: Google can follow the redirect, but sitemap URLs should be canonical direct-200 URLs.

## Medium

1. Completed locally: tighten long meta descriptions.
   - `contact`: now 136 characters.
   - `blog/top-perfume-oil-suppliers-dubai/`: now 141 characters.

2. Get real performance numbers.
   - PageSpeed Insights was quota-blocked during this run.
   - Re-run with a working PSI quota or local Lighthouse.
   - Focus on LCP, CLS, TBT/INP proxy, third-party script cost, and review-widget impact.

3. Check third-party script loading strategy.
   - GTM and ReputationHub are useful, but likely the main runtime cost.
   - Keep review widgets off pages where they are not needed above the fold.

## Low

1. Completed locally: refresh `llms.txt` verification date after confirming all business facts.
   - Local date: `Last verified: 2026-05-07`.

2. Keep schema validation in the release checklist.
   - Today's JSON-LD parse check passed.
   - This repo has had real schema syntax errors before, so keep parser validation after edits.

3. Keep image size checks in the release checklist.
   - No missing local image references were found.
   - Current large WebP files are moderate, but mobile performance should still be verified with Lighthouse.
