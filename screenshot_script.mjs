import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto('http://localhost:3456', { waitUntil: 'networkidle' });
// Force all fade-up elements visible
await page.addStyleTag({ content: '.fade-up { opacity: 1 !important; transform: none !important; }' });
await page.waitForTimeout(500);
await page.screenshot({ path: 'screenshot_final.png', fullPage: true });
await browser.close();
console.log('done');
