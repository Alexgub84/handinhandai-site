import { test, expect, type Page } from "@playwright/test";
import { pricingTable, faq, sections } from "../src/data/app-publishing";
import { siteContact, legal } from "../src/data/site-contact";

const WA = siteContact.whatsapp.replace("https://", "");
// Bound verbatim per work order #82 round 3, ruling 3.
const H1 = "פרסום אפליקציה בגוגל פליי ובאפ סטור תוך ימים. בלי 12 טסטרים, בלי 14 יום המתנה, בלי מק.";

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
  url: string;
  offers: { "@type": "Offer"; name: string; price: number; priceCurrency: string }[];
}

interface ArticleLd {
  "@type": "Article";
  headline: string;
  author: { "@type": "Person"; name: string };
  datePublished: string;
  dateModified: string;
}

function hasType(value: unknown, type: string): boolean {
  return typeof value === "object" && value !== null && (value as { "@type"?: unknown })["@type"] === type;
}

function isFaqPageLd(value: unknown): value is FaqPageLd {
  return hasType(value, "FAQPage");
}

function isServiceLd(value: unknown): value is ServiceLd {
  return hasType(value, "Service");
}

function isArticleLd(value: unknown): value is ArticleLd {
  return hasType(value, "Article");
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

  test("section render order in the DOM matches the data file's `sections` order", async ({ page }) => {
    // Every entry in `sections` renders its own id="..." element — asserting
    // the DOM order matches `sections.map((s) => s.id)` is the literal test
    // for ruling 1/design §0: reordering the data file reorders the page.
    const expectedIds = sections.map((s) => s.id);
    const domIds = await page.locator("main [id]").evaluateAll((els) => els.map((el) => el.id));
    const renderedExpectedIds = domIds.filter((id) => expectedIds.includes(id));
    expect(renderedExpectedIds).toEqual(expectedIds);
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

  test("exposes exactly one Article, one Service and one FAQPage JSON-LD block", async ({ page }) => {
    // Round 3 adds Article JSON-LD alongside the existing Service and
    // FAQPage blocks (ruling 3). All three render through the shell's
    // `jsonLd` array prop now, in no particular required order — round 2's
    // strict FAQPage-before-Service ordering test is intentionally not
    // carried forward (acceptance criteria, round 3).
    const entries = await collectJsonLd(page);
    expect(entries.filter((e) => isArticleLd(e))).toHaveLength(1);
    expect(entries.filter((e) => isServiceLd(e))).toHaveLength(1);
    expect(entries.filter((e) => isFaqPageLd(e))).toHaveLength(1);
  });

  test("Article JSON-LD carries the bound H1 as its headline", async ({ page }) => {
    const entries = await collectJsonLd(page);
    const articleLd = entries.find(isArticleLd);
    expect(articleLd).not.toBeUndefined();
    expect(articleLd?.headline).toBe(H1);
    expect(articleLd?.author.name).toBe(legal.legalName.he);
    expect(articleLd?.datePublished).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(articleLd?.dateModified).toMatch(/^\d{4}-\d{2}-\d{2}$/);
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

  test("Service JSON-LD has three offers at the data file's prices", async ({ page }) => {
    const entries = await collectJsonLd(page);
    const serviceLd = entries.find(isServiceLd);
    expect(serviceLd).not.toBeUndefined();
    expect(serviceLd?.url).toContain("/app-publishing");
    expect(serviceLd?.offers).toHaveLength(3);
    for (const offer of serviceLd?.offers ?? []) {
      expect(offer.priceCurrency).toBe("ILS");
    }
    const prices = (serviceLd?.offers ?? []).map((o) => o.price);
    expect(prices).toEqual([590, 790, 1290]);
  });

  test("FAQPage JSON-LD never carries the dropped 'קישור למאמר' placeholder", async ({ page }) => {
    const entries = await collectJsonLd(page);
    const faqLd = entries.find(isFaqPageLd);
    expect(faqLd).not.toBeUndefined();
    const serialised = JSON.stringify(faqLd);
    expect(serialised).not.toContain("קישור למאמר");
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

  test("never mentions the dropped article placeholder, a PDF, or the (nonexistent) intake form", async ({ page }) => {
    const bodyText = await page.locator("main").innerText();
    expect(bodyText).not.toContain("קישור למאמר");
    expect(bodyText).not.toContain(".pdf");
    expect(bodyText).not.toContain("טופס");
  });

  test("footer links back to this page", async ({ page }) => {
    await expect(page.locator('footer a[href="/app-publishing"]')).toBeAttached();
  });

  test("at 390px: no horizontal body overflow, and all three prices are visible without scrolling", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/app-publishing");
    await page.waitForLoadState("networkidle");

    const hscroll = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth
    );
    expect(hscroll).toBe(false);

    // Scoped to the phone card layout specifically: the desktop table is
    // still in the DOM under 768px (display:none, not removed), so an
    // unscoped text search could match its hidden cells instead.
    const priceRow = pricingTable.rows.find((r) => r.highlight);
    for (const price of priceRow?.values ?? []) {
      await expect(page.locator(".ap-price-cards").getByText(price, { exact: false }).first()).toBeVisible();
    }
  });

  test("at 1440px: every reading-width block stays within 860px", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/app-publishing");
    await page.waitForLoadState("networkidle");

    const widths = await page.locator(".pg-wrap--reading").evaluateAll((els) =>
      els.map((el) => el.getBoundingClientRect().width)
    );
    expect(widths.length).toBeGreaterThan(0);
    for (const width of widths) {
      expect(width).toBeLessThanOrEqual(860);
    }
  });
});
