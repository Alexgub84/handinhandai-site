import { test, expect, type Page } from '@playwright/test';

// Issue #185. The hand-off card moves from end-of-body to the decide/do
// hinge, in TRUE document order (Ruling 2 — CSS `order` is refused), and
// every skill-carrying guide gets a data-declared process diagram in the
// deciding half (Ruling 3). These tests run against the real dev server
// (astro dev always includes drafts and renders the real `/articles/<slug>`
// route, #101), through the real rehype pipeline
// (src/lib/rehype-article-devices.mjs) and the real ArticleLayout split —
// not the static dist/ output other acceptance checks grep directly.

const GUIDES = [
  {
    path: '/articles/publish-app-to-stores/',
    sectionOrder: [
      'answer',
      'process-diagram',
      'who-is-this-for',
      'comparison',
      'prepare',
      'skill-handoff',
      'procedure',
      'review',
      'field-note',
      'closing',
      'related',
    ],
    firstDiagramStepLabel: 'פתיחת חשבון מפתח ב-Google Play',
    lastDiagramStepLabel: 'Start rollout — פרסום בפועל, אין כפתור ״בטל״',
  },
  {
    path: '/articles/get-verified-for-whatsapp-cloud-api/',
    sectionOrder: [
      'answer',
      'process-diagram',
      'verification-basics',
      'app-vs-api',
      'limits',
      'rejections',
      'skill-handoff',
      'procedure',
      'after-verification',
      'closing',
      'related',
    ],
    firstDiagramStepLabel: 'בחירת סוג האימות ומילוי Business info ב-Security Center',
    lastDiagramStepLabel: 'אימות העסק מאושר, או נדחה עם סיבה',
  },
];

// Issue #104, Design item 4 (verifier round 2): wait for the page's own
// running animations to actually finish rather than guess a duration — see
// home.spec.ts for the full reasoning. The article page carries no CSS
// entrance animation, so `document.getAnimations()` returns nothing finite
// and this resolves immediately; `capMs` only guards against one Playwright
// can't observe correctly.
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

for (const guide of GUIDES) {
  test(`${guide.path}: the hand-off card sits at the decide/do hinge, in true document order`, async ({
    page,
  }) => {
    await page.goto(guide.path);
    const sections = await page.locator('[data-track-section]').evaluateAll((els) =>
      els.map((el) => el.getAttribute('data-track-section'))
    );
    expect(sections).toEqual(guide.sectionOrder);
  });

  test(`${guide.path}: the process diagram renders its steps in document order`, async ({ page }) => {
    await page.goto(guide.path);
    const labels = await page.locator('.pd-diagram .pd-step .pd-label').allTextContents();
    expect(labels.length).toBeGreaterThan(0);
    expect(labels[0]).toBe(guide.firstDiagramStepLabel);
    expect(labels[labels.length - 1]).toBe(guide.lastDiagramStepLabel);

    // The diagram's own `<ol>` is what carries screen-reader order (Ruling
    // 3's "a real alt / accessible name that reads the steps in order") —
    // connector arrows are aria-hidden, so only the real steps count.
    const stepCount = await page.locator('.pd-diagram li.pd-step').count();
    const arrowCount = await page.locator('.pd-diagram li.pd-arrow[aria-hidden="true"]').count();
    expect(arrowCount).toBe(stepCount - 1);
  });

  for (const width of [390, 1440]) {
    test(`${guide.path}: at ${width}px, no horizontal overflow after entrance animations settle`, async ({
      page,
    }) => {
      await page.setViewportSize({ width, height: width === 390 ? 844 : 900 });
      await page.goto(guide.path);
      await expect(page.locator('main')).toBeVisible();
      await waitForEntranceAnimations(page);

      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      expect(scrollWidth).toBeLessThanOrEqual(width);
    });
  }

  // Issue #185, round 2: the manager caught a real defect in round 1 — at
  // 1440px, inside the real 680px article column, a two-word actor label
  // ("מפרסם + בודקים") wrapped into a lopsided 3-line pill next to every
  // flat single-line chip. Fixed with `white-space: nowrap` plus a
  // one-step-smaller chip font and a 3-per-row grid (two rows for six
  // steps) instead of 6-across. Proof: every chip's bounding-box HEIGHT on
  // the page is identical — a wrapped chip would measurably be 2-3x
  // taller than a flat one-line chip right next to it. Guide-agnostic (it
  // doesn't hardcode which chip is the multi-word one), so it still holds
  // if a future guide's diagram puts a longer actor label on a different
  // step.
  test(`${guide.path}: at 1440px, no actor chip wraps (every chip is the same height as a single-line chip)`, async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(guide.path);

    const chips = page.locator('.pd-diagram .pd-actor');
    const chipCount = await chips.count();
    expect(chipCount).toBeGreaterThan(1);

    const heights = await chips.evaluateAll((els) => els.map((el) => el.getBoundingClientRect().height));
    const singleLineHeight = heights[0];
    for (const height of heights) {
      expect(height).toBeCloseTo(singleLineHeight, 1);
    }
  });

  test(`${guide.path}: keyboard order reaches the hand-off download before the procedure part's own content`, async ({
    page,
  }) => {
    await page.goto(guide.path);

    const downloadButton = page.locator('[data-track^="skill-handoff-download-"]');
    await expect(downloadButton).toBeVisible();

    // The second `.art-body` is the "doing" half — it opens with the
    // `procedure` section (the first element of guide.sectionOrder after
    // "skill-handoff"). Its first link is the regression guard: before
    // #185, the card sat after this whole half, so a keyboard/screen-reader
    // reader met every link here before ever reaching the download.
    const doingHalf = page.locator('.art-body').nth(1);
    const firstLinkInDoingHalf = doingHalf.locator('a').first();
    await expect(firstLinkInDoingHalf).toHaveCount(1);

    await page.locator('.art-pillar-link a').first().focus();

    let reached: 'download' | 'doing-half-link' | null = null;
    for (let i = 0; i < 150 && reached === null; i += 1) {
      await page.keyboard.press('Tab');
      const [isDownload, isDoingHalfLink] = await Promise.all([
        downloadButton.evaluate((el) => el === document.activeElement),
        firstLinkInDoingHalf.evaluate((el) => el === document.activeElement),
      ]);
      if (isDownload) reached = 'download';
      else if (isDoingHalfLink) reached = 'doing-half-link';
    }

    expect(reached).toBe('download');
  });
}
