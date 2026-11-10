import { test, expect } from '@playwright/test';

// Issue #155, second half — regression guard. The old narrated "install as
// a plugin" paragraph hand-wrote its developer command inside `.art-term`
// (no `overflow-x`, no `direction` on its own container), which overflowed
// the viewport at 390px once already. The hand-off card and the install
// page both route their command lines through `.skill-cmd-row`/`.skill-cmd`
// instead (`src/styles/home/article.css`) — this test proves that fix
// holds at the same width that caught the original bug.

const PAGES = [
  '/articles/publish-app-to-stores/',
  '/articles/get-verified-for-whatsapp-cloud-api/',
  '/install-skill/',
];

// Issue #104, Design item 4: these article/install pages carry no CSS
// entrance animation (unlike the homepage hero), but the settle discipline
// still applies deliberately rather than by luck.
const LAYOUT_SETTLE_MS = 300;

for (const path of PAGES) {
  test(`at 390px: ${path} has no horizontal overflow`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(path);
    /* "main" is the content region every one of these pages renders into;
       wait on it instead of network silence. */
    await expect(page.locator('main')).toBeVisible();
    await page.waitForTimeout(LAYOUT_SETTLE_MS);

    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    expect(scrollWidth).toBeLessThanOrEqual(390);
  });
}

test('the hand-off card renders on both skill-carrying guides, with the computed data-track label', async ({
  page,
}) => {
  await page.goto('/articles/publish-app-to-stores/');
  const storeCard = page.locator('[data-track="skill-handoff-download-store-publishing"]');
  await expect(storeCard).toBeVisible();

  await page.goto('/articles/get-verified-for-whatsapp-cloud-api/');
  const metaCard = page.locator('[data-track="skill-handoff-download-meta-whatsapp-cloud-api"]');
  await expect(metaCard).toBeVisible();
});
