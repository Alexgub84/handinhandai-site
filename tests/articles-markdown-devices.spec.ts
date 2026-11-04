import { test, expect } from '@playwright/test';

// Issue #111: a Markdown table, inline code and a blockquote must get the
// article design's three devices (table + card fallback, term chip, aside)
// at build time, with no hand-authored HTML. These run against the
// committed fixture (src/content/articles/fixture-markdown-devices-test.md,
// `draft: true`, throwaway content, not a real article) through the real
// rehype plugin (src/lib/rehype-article-devices.mjs) — `astro dev` always
// includes drafts (#101), so the fixture is reachable here without ever
// appearing on a production build.

test.beforeEach(async ({ page }) => {
  await page.goto('/articles/fixture-markdown-devices-test/');
});

test('a Markdown table becomes the wrapped table plus a generated card fallback', async ({ page }) => {
  const table = page.locator('.art-table-scroll table.art-table');
  await expect(table).toBeVisible();

  // Header: the blank row-label column plus the three option columns.
  await expect(table.locator('thead th')).toHaveCount(4);
  await expect(table.locator('thead th').nth(1)).toHaveText('אפליקציה ילידית');

  // Row headers were promoted to <th scope="row"> (the spec's binding RTL
  // rule), not left as plain <td>.
  const firstRowHeader = table.locator('tbody tr').first().locator('th');
  await expect(firstRowHeader).toHaveAttribute('scope', 'row');
  await expect(firstRowHeader).toHaveText('עדכון תוכן');

  // One generated card per data column, built from the same table.
  const cards = page.locator('.art-cards .art-card');
  await expect(cards).toHaveCount(3);
  await expect(cards.nth(1).locator('h3')).toHaveText('אתר עטוף (TWA)');
  await expect(cards.nth(1).locator('dt').first()).toHaveText('עדכון תוכן');
  await expect(cards.nth(1).locator('dd').first()).toHaveText('מיידי, כמו אתר');
});

test('inline code becomes an isolated term chip with no mid-term wrap', async ({ page }) => {
  const chips = page.locator('.art-body .art-term');
  await expect(chips).toHaveCount(3);
  await expect(chips.nth(0)).toHaveText('Play Console');
  await expect(chips.nth(1)).toHaveText('package name');

  // No leftover <code> — the backtick term became the chip, not a styled
  // code tag.
  await expect(page.locator('.art-body code')).toHaveCount(0);

  const whiteSpace = await chips.first().evaluate((el) => getComputedStyle(el).whiteSpace);
  expect(whiteSpace).toBe('nowrap');
  const unicodeBidi = await chips.first().evaluate((el) => getComputedStyle(el).unicodeBidi);
  expect(unicodeBidi).toBe('isolate');
});

test('a blockquote becomes the aside treatment with no hand-authored markup', async ({ page }) => {
  const aside = page.locator('.art-body > .art-aside');
  await expect(aside).toHaveCount(1);
  await expect(aside).toContainText('קו מנחה מהיר');

  // No leftover <blockquote> and no nested <p> — the specimen never wraps
  // aside text in its own paragraph.
  await expect(page.locator('.art-body blockquote')).toHaveCount(0);
  await expect(aside.locator('p')).toHaveCount(0);
});
