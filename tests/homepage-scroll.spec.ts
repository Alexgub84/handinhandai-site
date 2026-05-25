import { test, expect } from "@playwright/test";

/**
 * Homepage = one pinned scroll-scrub film (issue #20).
 *
 * Contract:
 * - After the hero, the page does NOT march through full-screen text slides.
 *   A single sticky stage (`.ch-film__stage`) stays pinned in the viewport
 *   while the user scrolls, and the active chapter advances in place.
 * - The stage exposes the current beat on `data-film-chapter`.
 * - Each chapter layer is `.film-layer[data-chapter="<id>"]`.
 * - prefers-reduced-motion reveals every chapter statically with no pinning.
 */

async function waitForLoaderGone(page: import("@playwright/test").Page) {
  // CinematicLoader holds the page for up to ~3.5s, then adds `is-hidden`.
  // First dev compile can add a few seconds before React hydrates.
  await expect(page.locator(".cinematic-loader")).toHaveClass(/is-hidden/, {
    timeout: 20000,
  });
}

test.describe("homepage pinned scroll-film", () => {
  test("film stage stays pinned and chapters advance as you scroll", async ({ page }) => {
    await page.goto("/");
    await waitForLoaderGone(page);

    const film = page.locator(".ch-film");
    const stage = page.locator(".ch-film__stage");
    await expect(film).toHaveCount(1);
    await expect(stage).toHaveCount(1);

    const vh = await page.evaluate(() => window.innerHeight);
    const filmTop = await film.evaluate((el) => (el as HTMLElement).offsetTop);
    const filmHeight = await film.evaluate((el) => (el as HTMLElement).offsetHeight);

    // Early in the film.
    await page.evaluate((y) => window.scrollTo(0, y), filmTop + vh * 0.4);
    await page.waitForTimeout(150);
    const early = await stage.getAttribute("data-film-chapter");

    // Pinned: while deep in the film section the stage fills the viewport top.
    const box = await stage.boundingBox();
    expect(box).not.toBeNull();
    expect(Math.abs(box!.y)).toBeLessThan(4);
    expect(box!.height).toBeGreaterThan(vh * 0.8);

    // Late in the film.
    await page.evaluate((y) => window.scrollTo(0, y), filmTop + filmHeight - vh * 1.3);
    await page.waitForTimeout(150);
    const late = await stage.getAttribute("data-film-chapter");

    expect(early).toBeTruthy();
    expect(late).toBeTruthy();
    expect(late).not.toBe(early);
  });

  test("reduced-motion reveals every chapter statically", async ({ browser }) => {
    const context = await browser.newContext({ reducedMotion: "reduce" });
    const page = await context.newPage();
    await page.goto("/");

    // No pin / no scrub: the final CTA chapter is rendered and reachable.
    const cta = page.locator('.film-layer[data-chapter="cta"]');
    await expect(cta).toBeVisible();
    await context.close();
  });
});
