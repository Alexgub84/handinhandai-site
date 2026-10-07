import { test, expect } from "@playwright/test";
import { siteContact } from "../src/data/site-contact";
import { caseStudies } from "../src/data/case-studies";

const WA = siteContact.whatsapp.replace("https://", "");
const TITLE = "אלכס — HandInHandAI | מערכות ניהול, סוכני AI ו-CTO לעסקים ולמיזמים";

test.describe("homepage v3 (/)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
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

  test("case studies come from the data file", async ({ page }) => {
    await expect(page.locator("#example .cs-card")).toHaveCount(caseStudies.length);
    await expect(page.locator("#example .cs-card").first()).toContainText(caseStudies[0].client);
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
    await expect(page.locator("#top h1")).toBeVisible();
    await expect(page).toHaveTitle(TITLE);
    const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
    expect(canonical).toMatch(/\/$/);
  });
});
