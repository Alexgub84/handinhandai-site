import { test, expect } from "@playwright/test";
import { siteContact } from "../src/data/site-contact";

const WA = siteContact.whatsapp.replace("https://", "");

test.describe("handinhand homepage (/)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("renders the hero headline", async ({ page }) => {
    const h1 = page.locator("h1#hero-title");
    await expect(h1).toBeVisible();
    await expect(h1).toHaveAttribute("aria-label", "עסק שמתנהל חכם מרוויח יותר");
  });

  test("has the correct Hebrew document title", async ({ page }) => {
    await expect(page).toHaveTitle("handinhand — עסק שמתנהל חכם מרוויח יותר");
  });

  test("all main sections render in order", async ({ page }) => {
    for (const id of ["alex", "build", "example", "how", "audience", "talk"]) {
      await expect(page.locator(`#${id}`)).toBeVisible();
    }
  });

  test("primary CTAs point to WhatsApp with prefilled text", async ({ page }) => {
    const cta = page.locator(`a[href*="${WA}"]`).first();
    await expect(cta).toBeVisible();
    const href = await cta.getAttribute("href");
    expect(href).toContain("?text=");
  });

  test("exposes ProfessionalService JSON-LD for SEO/AI findability", async ({ page }) => {
    const raw = await page.locator('script[type="application/ld+json"]').first().textContent();
    const data = JSON.parse(raw || "{}");
    expect(data["@type"]).toBe("ProfessionalService");
    expect(data.name).toBe("handinhand");
  });

  test("interactive chat demo is present with a composer", async ({ page }) => {
    await expect(page.locator("[data-chat-input]")).toBeVisible();
    await expect(page.locator("[data-chat-send]")).toBeVisible();
  });

  test("renders full static HTML (server-rendered, not an empty root)", async ({ page }) => {
    // AI-findability guard: body text must exist in the served HTML, not be JS-injected.
    const bodyText = await page.locator("main").innerText();
    expect(bodyText).toContain("שלושה צעדים");
  });
});

test.describe("English route (/en) serves the same homepage", () => {
  test("/en renders the same hero and canonicalises to /", async ({ page }) => {
    await page.goto("/en/");
    await expect(page.locator("h1#hero-title")).toBeVisible();
    await expect(page).toHaveTitle("handinhand — עסק שמתנהל חכם מרוויח יותר");
    const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
    expect(canonical).toMatch(/\/$/);
  });
});
