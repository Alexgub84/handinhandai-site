import { test, expect } from '@playwright/test';

// `astro dev` never sets CF_PAGES_BRANCH, so it always runs in "include
// drafts" mode (#101) — same as a Cloudflare preview deploy. These tests
// exercise that mode against the committed seed draft
// (src/content/articles/app-or-website.md, draft: true) without touching
// its copy.

test('draft article page serves at 200 and is noindexed in a draft-including build', async ({
  page,
}) => {
  const response = await page.goto('/articles/app-or-website/');
  expect(response?.status()).toBe(200);

  const robots = page.locator('meta[name="robots"]');
  await expect(robots).toHaveAttribute('content', 'noindex');
});

test('articles index lists the draft with its unpublished label in a draft-including build', async ({
  page,
}) => {
  await page.goto('/articles/');

  const draftLink = page.getByRole('link', { name: 'אפליקציה או אתר — מה העסק שלך באמת צריך' });
  await expect(draftLink).toBeVisible();

  const draftItem = page.locator('li', { has: draftLink });
  await expect(draftItem).toContainText('טיוטה');
});
