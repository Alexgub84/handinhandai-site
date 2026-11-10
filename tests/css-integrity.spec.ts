import { test, expect } from '@playwright/test';

const pages = [
  { path: '/', name: 'homepage (Hebrew, SimpleLayout)' },
  { path: '/about', name: 'about (Layout)' },
  { path: '/app-publishing', name: 'app-publishing (homepage design system)' },
];

for (const { path, name } of pages) {
  test(`${name} has CSS stylesheets injected (/_astro/ links or Vite dev style tags)`, async ({ page }) => {
    await page.goto(path);
    // Wait for exactly the condition this test is about to assert — either
    // kind of stylesheet marker present — instead of for network silence.
    await page.waitForFunction(
      () =>
        document.querySelectorAll('link[rel="stylesheet"][href*="/_astro/"]').length > 0 ||
        document.querySelectorAll('style[data-vite-dev-id]').length > 0
    );

    // Production builds inject <link rel="stylesheet" href="/_astro/...css">
    // Dev server (Vite) injects <style data-vite-dev-id="..."> inline style blocks
    // Both indicate CSS is being loaded. Zero of either means CSS is broken.
    const astroLinks = await page.locator('link[rel="stylesheet"][href*="/_astro/"]').count();
    const viteStyles = await page.locator('style[data-vite-dev-id]').count();

    const hasCss = astroLinks > 0 || viteStyles > 0;
    expect(
      hasCss,
      `Expected CSS on ${path} — found ${astroLinks} /_astro/ links and ${viteStyles} Vite dev style tags. Likely missing CSS import in layout.`
    ).toBe(true);
  });

  test(`${name} has a non-empty page title`, async ({ page }) => {
    await page.goto(path);

    const title = await page.title();
    expect(title.trim(), `Page title should not be empty on ${path}`).not.toBe('');
  });
}
