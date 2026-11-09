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

// Issue #156 — the attribute check above passed on a page whose every list
// marker rendered on the WRONG side (`padding-inline-end` / `inset-inline-
// end`, the physical left in this RTL document, instead of `-start`). It
// only ever reads two attributes on <html> and is blind to anything inside
// the body. These two tests load the real built-out article page and
// measure where each marker actually lands on screen, relative to its own
// line's text — the only way to catch "the page renders backwards" instead
// of just "the page claims to be RTL".
//
// Deliberately NOT asserting on source CSS (no reading of `inset-inline-
// start` vs `-end` as text): a marker is a `::before` pseudo-element, which
// has no DOM node Playwright can hand to `locator().boundingBox()`, so its
// real on-screen box is derived from two genuine rendered measurements —
// the `<li>`'s own `getBoundingClientRect()` and the pseudo's *resolved*
// (post-layout, pixel) `getComputedStyle(li, '::before')` inset — never
// from the inset/padding *property names* in the stylesheet. The line's
// own text position comes from a DOM `Range` over its first text node
// (skipping any nested list), which is exactly what `Range.getClientRects()`
// — the text equivalent of `getBoundingClientRect()` — measures. A build
// that reintroduces the `-end` bug, by this property or by any other
// mechanism that lands the marker on the wrong side, fails this test
// because the actual pixels are wrong, not because a property name matched
// a regex.

/**
 * Real content from `src/content/articles/get-verified-for-whatsapp-cloud-
 * api.md` — not invented fixture text. That article (reachable in dev mode
 * despite `draft: true`, same #101 reasoning as above) is the one the #156
 * specimen traced the bug to, and it carries both list shapes this guard
 * must cover: a 7-step `<ol>` and a 6-reason `<ul>`.
 */
async function markerBeforeOwnText(list: import('@playwright/test').Locator) {
  return list.evaluate((listEl) => {
    const items = Array.from(listEl.children).filter(
      (el): el is HTMLLIElement => el.tagName === 'LI'
    );

    return items.map((li) => {
      const liRect = li.getBoundingClientRect();
      const markerStyle = getComputedStyle(li, '::before');
      const markerWidth = parseFloat(markerStyle.width);

      // The pseudo-element is `position: absolute` inside a `position:
      // relative` <li>, with exactly one of `left`/`right` resolved to a
      // pixel value by the browser (the other stays `auto`) — whichever
      // logical side (`inset-inline-start`/`-end`) actually won, in RTL.
      let markerLeft: number;
      let markerRight: number;
      if (markerStyle.left !== 'auto') {
        markerLeft = liRect.left + parseFloat(markerStyle.left);
        markerRight = markerLeft + markerWidth;
      } else {
        markerRight = liRect.right - parseFloat(markerStyle.right);
        markerLeft = markerRight - markerWidth;
      }

      // First non-empty text node directly under this <li> (not inside a
      // nested <ul>/<ol>, if any) — the words this marker belongs to.
      const textNode = Array.from(li.childNodes).find(
        (node) => node.nodeType === Node.TEXT_NODE && (node.textContent ?? '').trim().length > 0
      );
      let textRight: number | null = null;
      if (textNode) {
        const range = document.createRange();
        range.selectNodeContents(textNode);
        const rects = range.getClientRects();
        textRight = rects.length > 0 ? rects[0].right : null;
      }

      return { liLeft: liRect.left, liRight: liRect.right, markerLeft, markerRight, textRight };
    });
  });
}

test('an ordered list numbers its markers on the start side (right) of each step', async ({
  page,
}) => {
  await page.goto('/articles/get-verified-for-whatsapp-cloud-api/');

  const items = await markerBeforeOwnText(page.locator('.art-body ol').first());
  expect(items.length).toBeGreaterThan(0);

  for (const item of items) {
    expect(item.textRight, 'expected a text node directly under the <li>').not.toBeNull();
    // The marker sits flush against the <li>'s right (start) edge...
    expect(item.liRight - item.markerRight).toBeLessThan(1);
    // ...which places it AFTER the text's rightmost point in page
    // coordinates — i.e. before the text in RTL reading order. A marker
    // stuck on the wrong (left/end) side would put markerLeft near liLeft,
    // far below textRight, and this would fail.
    expect(item.markerLeft).toBeGreaterThanOrEqual((item.textRight as number) - 1);
  }
});

test('a bulleted list dots its markers on the start side (right) of each item', async ({
  page,
}) => {
  await page.goto('/articles/get-verified-for-whatsapp-cloud-api/');

  const items = await markerBeforeOwnText(page.locator('.art-body ul').first());
  expect(items.length).toBeGreaterThan(0);

  for (const item of items) {
    expect(item.textRight, 'expected a text node directly under the <li>').not.toBeNull();
    expect(item.liRight - item.markerRight).toBeLessThan(1);
    expect(item.markerLeft).toBeGreaterThanOrEqual((item.textRight as number) - 1);
  }
});
