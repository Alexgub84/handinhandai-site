import { test, expect } from '@playwright/test';

// `astro dev` never sets CF_PAGES_BRANCH, so it always runs in "include
// drafts" mode (#101) — same as a Cloudflare preview deploy. These tests
// exercise that mode against the committed seed draft
// (src/content/articles/fixture-markdown-devices-test.md, draft: true,
// kept a draft on purpose) without touching its copy.

test('draft article page serves at 200 and is noindexed in a draft-including build', async ({
  page,
}) => {
  const response = await page.goto('/articles/fixture-markdown-devices-test/');
  expect(response?.status()).toBe(200);

  const robots = page.locator('meta[name="robots"]');
  await expect(robots).toHaveAttribute('content', 'noindex');
});

test('articles index never lists the build fixture, even in a draft-including build', async ({
  page,
}) => {
  // The dossier-list redesign (work order `guides-flow`) reads its rows
  // from `getGuidesIndex()` (src/data/articles.ts), which excludes
  // `FIXTURE_SLUG` outright — same gate the homepage guides band uses —
  // so the test fixture's page still serves (see the test above) but
  // never appears as a row here, draft or not.
  await page.goto('/articles/');

  await expect(
    page.getByText('Fixture: Markdown devices (not a real article)')
  ).toHaveCount(0);
});
