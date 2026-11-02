import { test, expect, type Page } from "@playwright/test";
import { pricingTable, faq } from "../src/data/app-publishing";
import { siteContact } from "../src/data/site-contact";

const WA = siteContact.whatsapp.replace("https://", "");
const H1 = "האפליקציה שלכם בחנויות תוך ימים. בלי 12 טסטרים, בלי 14 יום המתנה, בלי מק.";

// Narrow, structural shapes for just the JSON-LD fields these tests read —
// avoids `any` (project convention) while still reading arbitrary JSON off
// the page (issue #82 round 2, design §A6).
interface FaqPageLd {
  "@type": "FAQPage";
  mainEntity: { name: string; acceptedAnswer: { text: string } }[];
}

interface ServiceLd {
  "@type": "Service";
  provider: { "@id": string };
}

function isFaqPageLd(value: unknown): value is FaqPageLd {
  return typeof value === "object" && value !== null && (value as { "@type"?: unknown })["@type"] === "FAQPage";
}

function isServiceLd(value: unknown): value is ServiceLd {
  return typeof value === "object" && value !== null && (value as { "@type"?: unknown })["@type"] === "Service";
}

/** Reads every `<script type="application/ld+json">` on the page as parsed JSON. */
async function collectJsonLd(page: Page): Promise<unknown[]> {
  const scripts = page.locator('script[type="application/ld+json"]');
  const count = await scripts.count();
  const entries: unknown[] = [];
  for (let i = 0; i < count; i++) {
    const raw = await scripts.nth(i).textContent();
    entries.push(JSON.parse(raw || "{}"));
  }
  return entries;
}

test.describe("/app-publishing landing page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/app-publishing");
    await page.waitForLoadState("networkidle");
  });

  test("renders the H1 from the spec", async ({ page }) => {
    const h1 = page.locator("#hero h1");
    await expect(h1).toBeVisible();
    await expect(h1).toContainText(H1);
  });

  test("every pricing cell from the data file appears in the rendered table", async ({ page }) => {
    const bodyText = await page.locator("main").innerText();
    for (const row of pricingTable.rows) {
      expect(bodyText).toContain(row.label);
      for (const value of row.values) {
        expect(bodyText).toContain(value);
      }
    }
  });

  test("every FAQ question/answer pair from the data file appears in the DOM", async ({ page }) => {
    // The accordion answers sit inside closed <details>; innerText (which respects
    // rendering) would miss them, but the acceptance criterion is DOM presence —
    // textContent reads the raw DOM regardless of the collapsed state.
    const domText = await page.locator("main").evaluate((el) => el.textContent ?? "");
    for (const entry of faq) {
      expect(domText).toContain(entry.question);
      expect(domText).toContain(entry.answer);
    }
  });

  test("exposes FAQPage JSON-LD matching the data file", async ({ page }) => {
    const entries = await collectJsonLd(page);
    const faqLd = entries.find(isFaqPageLd);
    expect(faqLd).not.toBeUndefined();
    expect(faqLd?.mainEntity).toHaveLength(faq.length);
    for (let i = 0; i < faq.length; i++) {
      expect(faqLd?.mainEntity[i].name).toBe(faq[i].question);
      expect(faqLd?.mainEntity[i].acceptedAnswer.text).toBe(faq[i].answer);
    }
  });

  test("exposes Service JSON-LD", async ({ page }) => {
    const entries = await collectJsonLd(page);
    const serviceLd = entries.find(isServiceLd);
    expect(serviceLd).not.toBeUndefined();
    expect(serviceLd?.provider["@id"]).toContain("#organization");
  });

  test("the AI-answers-first disclosure sits next to the WhatsApp CTA", async ({ page }) => {
    await expect(page.locator(".ai-note, .ai-note--panel").first()).toBeVisible();
    const cta = page.locator(`a[href*="${WA}"]`).first();
    await expect(cta).toBeVisible();
    const href = await cta.getAttribute("href");
    expect(href).toContain("?text=");
  });

  test("never renders a sample-agreement PDF link", async ({ page }) => {
    const bodyText = await page.locator("main").innerText();
    expect(bodyText).not.toContain("הסכם לדוגמה");
    await expect(page.locator('a[href$=".pdf"]')).toHaveCount(0);
  });

  test("footer links back to this page", async ({ page }) => {
    await expect(page.locator('footer a[href="/app-publishing"]')).toBeAttached();
  });
});
