import { test, expect } from "@playwright/test";
import { siteContact } from "../src/data/site-contact";
import { caseStudies } from "../src/data/case-studies";

const WA = siteContact.whatsapp.replace("https://", "");
const TITLE = "אלכס — HandInHandAI | מערכות ניהול, אפליקציות, סוכני AI ו-CTO לעסקים ולמיזמים";

test.describe("homepage v3 (/)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    /* Dev server loads component scripts as separate modules; wait for them before interacting. */
    await page.waitForLoadState("networkidle");
  });

  test("renders the hero headline with the rotating word", async ({ page }) => {
    const h1 = page.locator("#top h1");
    await expect(h1).toBeVisible();
    await expect(h1).toContainText("אני אלכס");
    await expect(page.locator("[data-rotator] .ah-rot-w.is-on")).toHaveCount(1);
  });

  test("has the Hebrew document title", async ({ page }) => {
    await expect(page).toHaveTitle(TITLE);
  });

  test("all sections render in the spec order", async ({ page }) => {
    const ids = ["top", "services", "why-alex", "about", "example", "why", "contact"];
    const order = await page.evaluate(
      (ids) => ids.map((id) => document.getElementById(id)?.getBoundingClientRect().top ?? -1),
      ids
    );
    for (let i = 1; i < order.length; i++) {
      expect(order[i], `#${ids[i]} should come after #${ids[i - 1]}`).toBeGreaterThan(order[i - 1]);
    }
    await expect(page.locator("footer.ft")).toBeAttached();
  });

  test("primary CTAs point to WhatsApp with prefilled text", async ({ page }) => {
    const cta = page.locator(`a[href*="${WA}"]`).first();
    await expect(cta).toBeVisible();
    const href = await cta.getAttribute("href");
    expect(href).toContain("?text=");
  });

  test("service-track CTAs prefill the track name", async ({ page }) => {
    const links = page.locator("#services a.tr-btn");
    await expect(links).toHaveCount(2);
    const href = await links.first().getAttribute("href");
    expect(decodeURIComponent(href ?? "")).toContain("במסלול: פיתוח מערכות ניהול");
  });

  test("today / possible switch flips the dark section", async ({ page }) => {
    const section = page.locator("#why");
    await section.scrollIntoViewIfNeeded();
    await page.locator('#why [data-mode="order"]').click();
    await expect(section).toHaveClass(/is-order/);
    await expect(page.locator('#why [data-mode="order"]')).toHaveAttribute("aria-pressed", "true");
    await page.locator('#why [data-mode="chaos"]').click();
    await expect(section).not.toHaveClass(/is-order/);
  });

  test("case-studies section renders a card per entry in the data file", async ({ page }) => {
    const cards = page.locator("#example .cs-card");
    await expect(cards).toHaveCount(caseStudies.length);

    const first = cards.first();
    await first.scrollIntoViewIfNeeded();
    await expect(first.locator(".cs-h")).toHaveText(caseStudies[0].title);
    await expect(first.locator(".cs-client b")).toHaveText(caseStudies[0].client);
    await expect(first.locator(".cs-metric")).toHaveCount(3);
    await expect(page.locator('a[href="#example"]')).not.toHaveCount(0);
  });

  test("no bracketed placeholders or XX values reach the page", async ({ page }) => {
    const text = await page.locator("#example").innerText();
    expect(text).not.toMatch(/\[[^\]]*\]/);
    expect(text).not.toContain("XX");
  });

  test("metric count-up keeps thousands separators", async ({ page }) => {
    const metric = page.locator("#example .cs-val").first();
    await metric.scrollIntoViewIfNeeded();
    await expect(metric).toHaveText(caseStudies[0].results[0].value, { timeout: 5000 });
  });

  test("contact form validates and opens WhatsApp with the composed message", async ({ page }) => {
    const form = page.locator("[data-ct-form]");
    await form.scrollIntoViewIfNeeded();
    await form.locator("button[type=submit]").click();
    await expect(form.locator('[data-err="name"]')).toBeVisible();
    await expect(form.locator('[data-err="phone"]')).toBeVisible();

    await form.locator("#ct-name").fill("דני");
    await form.locator("#ct-phone").fill("050-123-4567");
    await form.locator("#ct-msg").fill("יש לי בלגן");
    const popup = page.waitForEvent("popup");
    await form.locator("button[type=submit]").click();
    const win = await popup;
    /* wa.me redirects to api.whatsapp.com in a real browser; assert on number + payload. */
    const url = decodeURIComponent(win.url()).replace(/\+/g, " ");
    expect(url).toContain(siteContact.whatsapp.replace("https://wa.me/", ""));
    expect(url).toContain("שם: דני");
    expect(url).toContain("טלפון: 050-123-4567");
    expect(url).toContain("יש לי בלגן");
    await expect(form.locator("[data-done]")).toBeVisible();
  });

  test("mobile hero orders headline, portrait, buttons, benefit chips", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const headline = await page.locator("#top h1").boundingBox();
    const portrait = await page.locator("#top .ah-visual").boundingBox();
    const actions = await page.locator("#top .ah-actions").boundingBox();
    expect(headline!.y + headline!.height).toBeLessThanOrEqual(portrait!.y);
    expect(portrait!.y + portrait!.height).toBeLessThanOrEqual(actions!.y);

    /* Nothing may sit outside the viewport horizontally, and the portrait keeps a usable size. */
    const hscroll = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth
    );
    expect(hscroll).toBe(false);
    expect(portrait!.height).toBeGreaterThanOrEqual(250);

    /* Benefit chips close the hero on the phone, and the whole block fits one screen. */
    const bench = await page.locator("#top .ah-bench").boundingBox();
    expect(actions!.y + actions!.height).toBeLessThanOrEqual(bench!.y);
    expect(bench!.y + bench!.height).toBeLessThanOrEqual(844);
  });

  test("short phone screens still fit the whole hero above the fold", async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 640 });
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const bench = await page.locator("#top .ah-bench").boundingBox();
    expect(bench!.y + bench!.height).toBeLessThanOrEqual(640);
  });

  test("desktop hero keeps the headline beside the portrait", async ({ page }) => {
    const headline = await page.locator("#top h1").boundingBox();
    const portrait = await page.locator("#top .ah-visual").boundingBox();
    /* RTL: text column on the right, portrait on the left, vertically overlapping. */
    expect(headline!.x).toBeGreaterThan(portrait!.x);
    expect(headline!.y).toBeLessThan(portrait!.y + portrait!.height);
  });

  test("tells people an AI assistant answers WhatsApp first", async ({ page }) => {
    await expect(page.locator("#top .ai-note")).toContainText("העוזר הדיגיטלי");
    await expect(page.locator("#contact .ai-note--panel")).toContainText("עונה ראשון העוזר הדיגיטלי");
    await expect(page.locator("#contact .ct-ai-badge")).toContainText("עוזר AI");
    await expect(page.locator("[data-ct-form] .ai-note")).toBeVisible();
    await expect(page.locator("[data-fw] .fw-tip")).toContainText("עוזר AI");
  });

  test("exposes ProfessionalService JSON-LD for SEO/AI findability", async ({ page }) => {
    const raw = await page.locator('script[type="application/ld+json"]').first().textContent();
    const data = JSON.parse(raw || "{}");
    expect(data["@type"]).toBe("ProfessionalService");
    expect(data.name).toBe("handinhand");
  });

  test("renders full static HTML (server-rendered, not an empty root)", async ({ page }) => {
    const bodyText = await page.locator("main").innerText();
    expect(bodyText).toContain("למה אלכס");
    expect(bodyText).toContain("מוכנים לעשות");
  });

  test("footer links to the legal pages", async ({ page }) => {
    for (const href of ["/about", "/terms", "/privacy-sasha"]) {
      await expect(page.locator(`footer a[href="${href}"]`)).toBeAttached();
    }
  });
});

test.describe("English route (/en) serves the same homepage", () => {
  test("/en renders the same hero and canonicalises to /", async ({ page }) => {
    await page.goto("/en/");
    await page.waitForLoadState("networkidle");
    await expect(page.locator("#top h1")).toBeVisible();
    await expect(page).toHaveTitle(TITLE);
    const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
    expect(canonical).toMatch(/\/$/);
  });
});
