import { test, expect } from '@playwright/test';

test.describe('Homepage (/) CSS smoke tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
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
