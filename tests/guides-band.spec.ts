import { test, expect } from '@playwright/test';
import { execFileSync } from 'node:child_process';
import { readFileSync, readdirSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import {
  shortAnswer,
  capGuides,
  sortGuides,
  estimateReviewMinutes,
  FIXTURE_SLUG,
} from '../src/data/guides-format';

// Issue #124 — homepage guides band: present (with the real published
// guides) on the production branch now that articles are published, same
// on any other build, capped at 3 cards, read affordance is a link not the
// primary WhatsApp button.

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const articlesDir = join(repoRoot, 'src', 'content', 'articles');

/**
 * The band's own card count, read from the same source the page reads
 * (the real `.md` files, same `FIXTURE_SLUG` gate `getHomepageGuides()`
 * applies) instead of a hardcoded number. `astro dev` never sets
 * `CF_PAGES_BRANCH` (#101), so this dev-server test always runs in
 * "include drafts" mode — every real, non-fixture article counts, capped
 * at 3 by `capGuides()`. This must keep passing as the catalogue grows
 * past 3 real articles (acceptance criterion 2): add a 4th, it still
 * reports 3; remove it, back to the real count.
 */
function realGuideCount(): number {
  const files = readdirSync(articlesDir).filter((entry) => entry.endsWith('.md'));
  const realSlugs = files
    .map((file) => matter(readFileSync(join(articlesDir, file), 'utf8')).data.slug as string)
    .filter((slug) => slug !== FIXTURE_SLUG);
  return capGuides(realSlugs).length;
}

/**
 * Same idea as `realGuideCount()`, but for the production branch: only
 * non-draft, non-fixture articles count there (`hasPublishedArticles()` /
 * `getHomepageGuides()` in src/data/articles.ts), so a draft article never
 * inflates this count the way it does in dev/"include drafts" mode.
 */
function publishedGuideCount(): number {
  const files = readdirSync(articlesDir).filter((entry) => entry.endsWith('.md'));
  const publishedSlugs = files
    .map((file) => matter(readFileSync(join(articlesDir, file), 'utf8')).data)
    .filter((data) => data.slug !== FIXTURE_SLUG && !data.draft)
    .map((data) => data.slug as string);
  return capGuides(publishedSlugs).length;
}

test.describe('guides-format pure helpers', () => {
  test('shortAnswer strips the standard lede and takes the first sentence', () => {
    const description =
      'התשובה הקצרה: תלוי מי משתמש במוצר, איפה, ובאיזו תדירות הוא צריך להשתנות. אתר מתעדכן מיידית; אפליקציה בחנות עוברת בדיקה.';
    expect(shortAnswer(description)).toBe(
      'תלוי מי משתמש במוצר, איפה, ובאיזו תדירות הוא צריך להשתנות.'
    );
  });

  test('shortAnswer falls back to the full text when there is no lede or sentence boundary', () => {
    expect(shortAnswer('משפט אחד בלי נקודה בסוף')).toBe('משפט אחד בלי נקודה בסוף');
  });

  test('capGuides never returns more than 3 entries, however many are given', () => {
    const five = [1, 2, 3, 4, 5];
    expect(capGuides(five)).toEqual([1, 2, 3]);
    expect(capGuides([1, 2])).toEqual([1, 2]);
    expect(capGuides([])).toEqual([]);
  });

  test('sortGuides orders by publishedAt, then slug, for a stable card order', () => {
    const entries = [
      { slug: 'b', publishedAt: new Date('2026-11-04') },
      { slug: 'a', publishedAt: new Date('2026-11-04') },
      { slug: 'z', publishedAt: new Date('2026-01-01') },
    ];
    expect(sortGuides(entries).map((e) => e.slug)).toEqual(['z', 'a', 'b']);
  });

  test('estimateReviewMinutes counts words, strips Markdown noise, and never goes below 1', () => {
    expect(estimateReviewMinutes('')).toBe(1);
    expect(estimateReviewMinutes('מילה אחת')).toBe(1);

    // 340 words of body text ignoring markup -> 2 minutes at 170 wpm.
    const body = Array.from({ length: 340 }, () => 'מילה').join(' ');
    expect(estimateReviewMinutes(body)).toBe(2);

    // Code fence, inline code, a link and a heading marker are stripped
    // before the count, not treated as extra words.
    const withMarkup = `# כותרת\n\n${'מילה '.repeat(170)}[קישור](https://example.com) \`code\`\n\n\`\`\`\nconst x = 1;\n\`\`\``;
    expect(estimateReviewMinutes(withMarkup)).toBe(1);
  });
});

test.describe('guides band — branch mode (dev server always includes drafts, #101/#105)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('the band renders between the case studies and the dark switch, with the real draft guides', async ({
    page,
  }) => {
    const band = page.locator('#guides');
    await expect(band).toBeAttached();

    const order = await page.evaluate(() =>
      ['example', 'guides', 'why'].map((id) => document.getElementById(id)?.getBoundingClientRect().top ?? -1)
    );
    expect(order[1], '#guides should come after #example').toBeGreaterThan(order[0]);
    expect(order[2], '#why should come after #guides').toBeGreaterThan(order[1]);

    const expectedCount = realGuideCount();
    await expect(band.locator('.gd-card')).toHaveCount(expectedCount);
    await expect(band.locator('.gd-grid')).toHaveAttribute('data-count', String(expectedCount));
    await expect(band).toContainText('אפליקציה או אתר');
    await expect(band).toContainText('פרילנסר או חברת פיתוח');
  });

  test('the in-page nav carries a מדריכים entry pointing at the band', async ({ page }) => {
    const navLink = page.locator('nav[aria-label="ניווט ראשי"] a[href="#guides"]');
    await expect(navLink).toBeVisible();
    await expect(navLink).toHaveText('מדריכים');
  });

  test('the band never shows more than 3 cards', async ({ page }) => {
    const count = await page.locator('#guides .gd-card').count();
    expect(count).toBeLessThanOrEqual(3);
  });

  test('the read affordance is a text link with an arrow, never the primary WhatsApp button', async ({
    page,
  }) => {
    const card = page.locator('#guides .gd-card').first();
    const affordance = card.locator('.cs-link');
    await expect(affordance).toHaveCount(1);

    const tag = await affordance.evaluate((el) => el.tagName.toLowerCase());
    expect(tag, 'the read affordance must not be a <button>').not.toBe('button');

    const classAttr = (await affordance.getAttribute('class')) ?? '';
    expect(classAttr).not.toMatch(/ah-btn|cs-btn/);
    expect(classAttr).toContain('cs-link');

    await expect(affordance.locator('svg.cs-i')).toHaveCount(1);
  });
});

test.describe('guides band — production branch (#124: present now that guides are published)', () => {
  const outDir = 'dist-test-production';

  test.beforeAll(() => {
    // A real `astro build`, bypassing `astro check` / the content guards —
    // those already run in `npm run build`; this only needs the rendered
    // HTML for `/`. `CF_PAGES_BRANCH=main` is the only signal that tells a
    // production build apart from every other build (src/lib/build-env.ts).
    execFileSync('npx', ['astro', 'build', '--outDir', outDir], {
      cwd: repoRoot,
      env: { ...process.env, CF_PAGES_BRANCH: 'main' },
      stdio: 'pipe',
    });
  });

  test.afterAll(() => {
    rmSync(join(repoRoot, outDir), { recursive: true, force: true });
  });

  test('the built homepage has the guides band and a מדריכים nav entry, with real published guides', () => {
    const html = readFileSync(join(repoRoot, outDir, 'index.html'), 'utf8');
    expect(html).toContain('id="guides"');
    expect(html).toContain('מדריכים');

    const expectedCount = publishedGuideCount();
    expect(expectedCount).toBeGreaterThan(0);
    const cardMatches = html.match(/class="gd-card"/g) ?? [];
    expect(cardMatches.length).toBe(expectedCount);
    expect(cardMatches.length).toBeLessThanOrEqual(3);
  });
});
