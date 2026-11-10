import { test, expect, type Page } from '@playwright/test';

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

// Issue #104, Design item 4 (verifier round 2): wait for the page's own
// running animations to actually finish rather than guess a duration — see
// home.spec.ts for the full reasoning. These article/install pages carry no
// CSS entrance animation, so `document.getAnimations()` returns nothing
// finite and this resolves immediately; `capMs` only guards against one
// Playwright can't observe correctly.
async function waitForEntranceAnimations(page: Page, capMs = 2000): Promise<void> {
  await page.evaluate(async (cap) => {
    const finite = document
      .getAnimations()
      .filter((a) => a.effect?.getTiming().iterations !== Infinity);
    const settled = Promise.all(finite.map((a) => a.finished.catch(() => undefined)));
    const capped = new Promise<void>((resolve) => setTimeout(resolve, cap));
    await Promise.race([settled, capped]);
  }, capMs);
}

for (const path of PAGES) {
  test(`at 390px: ${path} has no horizontal overflow`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(path);
    /* "main" is the content region every one of these pages renders into;
       wait on it instead of network silence. */
    await expect(page.locator('main')).toBeVisible();
    await waitForEntranceAnimations(page);

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
