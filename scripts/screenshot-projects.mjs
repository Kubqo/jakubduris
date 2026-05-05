import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outDir = path.resolve(__dirname, "..", "public", "projects");

const targets = [
  { slug: "munipomaha", url: "https://munipomaha.cz/en" },
  { slug: "moje-olomouc", url: "https://moje.olomouc.eu/" },
  { slug: "racemake", url: "https://www.racemake.com/" },
  { slug: "fatty", url: "https://fatty.io/" },
  { slug: "balikovna", url: "https://www.balikovna.cz" },
  { slug: "mygoodtrust", url: "https://mygoodtrust.com/" },
  { slug: "runwago", url: "https://www.runwago.com/" },
  { slug: "bitfoot", url: "https://www.bitfoot.com/en" },
  { slug: "thething", url: "https://thething.bot/" },
  { slug: "poznejmecesko", url: "https://www.poznejmecesko.cz/" },
  { slug: "playlorcana", url: "https://playlorcana.cz" },
  { slug: "tasting-horizons", url: "https://tasting-horizons.com/" },
  { slug: "hodlbot", url: "https://hodlbot.cz" },
];

async function dismissCookieBanners(page) {
  const labels = [
    /^accept all$/i,
    /^accept$/i,
    /^accept cookies$/i,
    /^allow all$/i,
    /^agree$/i,
    /^got it$/i,
    /^ok$/i,
    /^povolit (vše|vsechny)/i,
    /^p[řr]ijmout (vše|vsechny|všechny)/i,
    /^souhlas[ií]m/i,
    /^rozum[ií]m/i,
    /^povolit/i,
  ];
  for (const re of labels) {
    try {
      const btn = page.getByRole("button", { name: re }).first();
      if (await btn.isVisible({ timeout: 600 })) {
        await btn.click({ timeout: 1500 });
        await page.waitForTimeout(400);
      }
    } catch {}
  }
}

async function main() {
  await mkdir(outDir, { recursive: true });
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
  });
  const results = [];

  for (const { slug, url } of targets) {
    const page = await context.newPage();
    const file = path.join(outDir, `${slug}.png`);
    try {
      console.log(`→ ${slug} | ${url}`);
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
      await page.waitForLoadState("networkidle", { timeout: 8000 }).catch(() => {});
      await page.waitForTimeout(1500);
      await dismissCookieBanners(page);
      await page.waitForTimeout(800);
      await page.screenshot({ path: file, fullPage: false, type: "png" });
      results.push({ slug, ok: true, file });
      console.log(`   ✓ saved ${file}`);
    } catch (err) {
      console.warn(`   ✗ ${slug}: ${err.message}`);
      results.push({ slug, ok: false, error: err.message });
    } finally {
      await page.close();
    }
  }

  await browser.close();
  const ok = results.filter((r) => r.ok).length;
  console.log(`\nDone. ${ok}/${results.length} captured.`);
  for (const r of results.filter((r) => !r.ok)) {
    console.log(`   missing: ${r.slug} (${r.error})`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
