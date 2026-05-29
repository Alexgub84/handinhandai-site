import { test, expect } from '@playwright/test';

const pages = [
  { path: '/', name: 'homepage (Hebrew, SimpleLayout)' },
  { path: '/en/', name: 'English homepage (SimpleLayout)' },
  { path: '/fitness-studio', name: 'fitness-studio (FitnessLayout)' },
  { path: '/fitness-chain', name: 'fitness-chain (FitnessLayout)' },
];

for (const { path, name } of pages) {
  test(`${name} has CSS stylesheets injected (/_astro/ links or Vite dev style tags)`, async ({ page }) => {
    await page.goto(path);

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
