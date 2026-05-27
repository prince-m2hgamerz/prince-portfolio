/**
 * generate-og.mjs — render og-template.html to og.png using Playwright.
 *
 * Usage:
 *   1. Run `npx serve .` in another terminal so og-template.html is served.
 *   2. `npm install -D playwright`
 *   3. `node scripts/generate-og.mjs`
 *
 * Output: og.png at the project root. 1200×630 PNG, ready for OG/Twitter.
 */
import { chromium } from "playwright";
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "og.png");

const URL = process.env.OG_URL || "http://localhost:3000/og-template.html";

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1280, height: 720 },
  deviceScaleFactor: 2,
});
const page = await ctx.newPage();
await page.goto(URL, { waitUntil: "networkidle" });
const card = await page.$(".og");
if (!card) {
  console.error("Could not find .og element. Is the dev server running?");
  process.exit(1);
}
const buffer = await card.screenshot({ type: "png", omitBackground: false });
writeFileSync(OUT, buffer);
await browser.close();
console.log(`Wrote ${OUT} (${buffer.length} bytes)`);
