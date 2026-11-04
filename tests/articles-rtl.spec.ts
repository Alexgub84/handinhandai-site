import { test, expect } from '@playwright/test';

// Issue #108, rule 1: every Hebrew page is `lang="he"` and `dir="rtl"` on
// the `<html>` element. The build-time guard (`scripts/check-rtl.mjs`)
// checks the built HTML; this is the runtime counterpart, covering the
// articles index and an article page as the issue asks.

test('articles index declares lang="he" dir="rtl" on <html>', async ({ page }) => {
  await page.goto('/articles/');

  const html = page.locator('html');
  await expect(html).toHaveAttribute('lang', 'he');
  await expect(html).toHaveAttribute('dir', 'rtl');
});

test('an article page declares lang="he" dir="rtl" on <html>', async ({ page }) => {
  // `astro dev` always includes drafts (#101), so the committed seed draft
  // is reachable here without touching its copy.
  await page.goto('/articles/app-or-website/');

  const html = page.locator('html');
  await expect(html).toHaveAttribute('lang', 'he');
  await expect(html).toHaveAttribute('dir', 'rtl');
});
