import { test, expect } from '@playwright/test';

test.describe('Homepage (/) CSS smoke tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('top nav has a visible border (prototype utility classes applied)', async ({ page }) => {
    const nav = page.locator('#top nav').first();
    await expect(nav).toBeVisible();

    const borderWidth = await nav.evaluate((el) => getComputedStyle(el).borderTopWidth);
    expect(borderWidth, `Expected nav border-width to be non-zero, got: ${borderWidth}`).not.toBe('0px');
  });

  test('hero h1 is heavy (font-black)', async ({ page }) => {
    const h1 = page.locator('h1').first();
    await expect(h1).toBeVisible();

    const fontWeight = await h1.evaluate((el) => Number(getComputedStyle(el).fontWeight));
    expect(fontWeight, `Expected h1 font-weight >= 700, got: ${fontWeight}`).toBeGreaterThanOrEqual(700);
  });

  test('services section has non-zero padding-top (custom CSS loaded)', async ({ page }) => {
    const section = page.locator('#services');
    await expect(section).toBeAttached();

    const paddingTop = await section.evaluate((el) => getComputedStyle(el).paddingTop);
    expect(paddingTop, `Expected #services padding-top to be non-zero, got: ${paddingTop}`).not.toBe('0px');
  });
});

test.describe('/fitness-studio Tailwind smoke tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/fitness-studio');
  });

  test('at least one element has a non-transparent background color (Tailwind bg utilities are applied)', async ({ page }) => {
    // The fitness page body itself may be transparent, but Tailwind bg-white/bg-* classes
    // on child elements should produce non-transparent computed backgrounds when CSS loads.
    const hasStyledElement = await page.evaluate(() => {
      const elements = document.querySelectorAll('section, div, header, nav, footer, main');
      for (const el of elements) {
        const bg = getComputedStyle(el).backgroundColor;
        if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
          return true;
        }
      }
      return false;
    });
    expect(hasStyledElement, 'Expected at least one element with a non-transparent background on /fitness-studio — CSS may not be loading').toBe(true);
  });

  test('at least one element has non-default text color (Tailwind color utilities applied)', async ({ page }) => {
    // With Tailwind loaded, text-* classes produce specific colors.
    // Without CSS, all elements would inherit default browser black (rgb(0,0,0)).
    // With Tailwind, we expect varied colors (grays, blues, etc.) — any non-default.
    const hasColoredText = await page.evaluate(() => {
      const elements = document.querySelectorAll('p, h1, h2, h3, span, a, button');
      for (const el of elements) {
        const color = getComputedStyle(el).color;
        // Default browser color is rgb(0,0,0). Tailwind text utilities give other values.
        if (color && color !== 'rgb(0, 0, 0)' && color !== 'rgba(0, 0, 0, 0)') {
          return true;
        }
      }
      return false;
    });
    expect(hasColoredText, 'Expected at least one element with a non-default text color on /fitness-studio — Tailwind may not be loading').toBe(true);
  });
});
