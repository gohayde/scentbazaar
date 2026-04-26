import { readFileSync, writeFileSync, readdirSync } from 'fs';

// Map each page to its hero image from the services grid
const heroImages = {
  'wholesale-perfume-oil-dubai.html': 'https://assets.cdn.filesafe.space/n2JV7OnZcOBeCtUnjWku/media/69b4fd49bfc81f404e09b8ff.png',
  'bulk-fragrance-oil-uae.html': 'https://assets.cdn.filesafe.space/n2JV7OnZcOBeCtUnjWku/media/69b4fd49277ba082afeb3144.png',
  'perfumers-alcohol-supplier-dubai.html': 'https://assets.cdn.filesafe.space/n2JV7OnZcOBeCtUnjWku/media/69b4fd49277ba014b7eb3145.png',
  'private-label-perfume-dubai.html': 'https://assets.cdn.filesafe.space/n2JV7OnZcOBeCtUnjWku/media/69b4fd49cab7f72607c7a01c.png',
  'perfume-bottle-supplier-dubai.html': 'https://assets.cdn.filesafe.space/n2JV7OnZcOBeCtUnjWku/media/69b4fd4aeba4874aba3db424.png',
  'perfume-caps-spray-pumps.html': 'https://assets.cdn.filesafe.space/n2JV7OnZcOBeCtUnjWku/media/69b4fd4aeba4874aba3db424.png',
  'bakhoor-supplier-dubai.html': 'https://assets.cdn.filesafe.space/n2JV7OnZcOBeCtUnjWku/media/69b4fd4aeba4872d273db425.png',
  'candle-fragrance-oil-supplier-dubai.html': 'https://assets.cdn.filesafe.space/n2JV7OnZcOBeCtUnjWku/media/69b4fd49fc51285f1f8a69f5.png',
  'diffuser-base-supplier-dubai.html': 'https://assets.cdn.filesafe.space/n2JV7OnZcOBeCtUnjWku/media/69b4fd4aeba4872ab23db426.png',
  'perfume-base-supplier-uae.html': 'https://assets.cdn.filesafe.space/n2JV7OnZcOBeCtUnjWku/media/69b4fd49bfc81f544609b8fe.png',
  'cosmetic-base-supplier-dubai.html': 'https://assets.cdn.filesafe.space/n2JV7OnZcOBeCtUnjWku/media/69b4fd49bfc81f544609b8fe.png',
  'custom-perfume-blending-dubai.html': 'https://assets.cdn.filesafe.space/n2JV7OnZcOBeCtUnjWku/media/69b4fd49fc51285f1f8a69f5.png',
  'perfume-filling-service-dubai.html': 'https://assets.cdn.filesafe.space/n2JV7OnZcOBeCtUnjWku/media/69b4fd49cab7f72607c7a01c.png',
  'perfume-oil-supplier-dubai.html': 'https://assets.cdn.filesafe.space/n2JV7OnZcOBeCtUnjWku/media/69b4fd49bfc81f109409b8fc.png',
  'fragrance-oil-supplier-dubai.html': 'https://assets.cdn.filesafe.space/n2JV7OnZcOBeCtUnjWku/media/69b4fd49bfc81f404e09b8ff.png',
  'perfume-store-deira.html': 'https://assets.cdn.filesafe.space/n2JV7OnZcOBeCtUnjWku/media/69b4fd49bfc81f109409b8fc.png',
  'about-us.html': 'https://assets.cdn.filesafe.space/n2JV7OnZcOBeCtUnjWku/media/69b4fd49bfc81f832c09b8fd.png',
};

const pages = Object.keys(heroImages);
let patched = 0;

for (const page of pages) {
  let html = readFileSync(page, 'utf8');
  let changed = false;

  // 1. Upgrade seo-hero: add background image via inline style
  if (html.includes('class="seo-hero"') && !html.includes('seo-hero-v2')) {
    const img = heroImages[page];
    html = html.replace(
      '<section class="seo-hero">',
      `<section class="seo-hero seo-hero-v2" style="background-image:url('${img}')">`
    );
    changed = true;
  }

  // 2. Upgrade faq-grid to two-column
  if (html.includes('class="faq-grid"') && !html.includes('faq-grid-v2')) {
    html = html.replace(/class="faq-grid"/g, 'class="faq-grid faq-grid-v2"');
    changed = true;
  }

  // 3. Upgrade FAQ section header to editorial two-column
  // Pattern: <div style="text-align:center;max-width:700px;margin:0 auto 40px">
  //            <span class="tag">...</span>
  //            <h2>Frequently Asked Questions</h2>
  //          </div>
  if (html.includes('class="faq-grid faq-grid-v2"') && !html.includes('faq-header')) {
    html = html.replace(
      /<div style="text-align:center;max-width:700px;margin:0 auto 40px"[^>]*>\s*<span class="tag">([^<]*)<\/span>\s*<h2>Frequently Asked Questions<\/h2>\s*<\/div>/,
      `<div class="faq-header">
                <div class="faq-header-left">
                    <span class="tag">$1</span>
                    <h2>Frequently Asked<br>Questions</h2>
                    <p>Everything you need to know before placing an order or visiting our Deira showroom.</p>
                </div>
                <div class="faq-header-right">
                    <a href="https://wa.me/971547727106?text=Hi%20Scent%20Bazaar%2C%20I%20have%20a%20question" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Ask Us Directly <span class="btn-icon">↗</span></a>
                </div>
            </div>`
    );
    changed = true;
  }

  if (changed) {
    writeFileSync(page, html, 'utf8');
    console.log(`✓ patched: ${page}`);
    patched++;
  } else {
    console.log(`- skipped: ${page}`);
  }
}

console.log(`\nDone. ${patched}/${pages.length} pages patched.`);
