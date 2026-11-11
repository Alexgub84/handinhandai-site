import { test, expect, type Page } from '@playwright/test';

/**
 * The collector itself runs on Cloudflare with D1 bound, which `npm run dev`
 * does not provide. These tests pin the half that ships in the page: what the
 * client script measures and the exact payload it hands to sendBeacon.
 */

type Batch = {
  s: string;
  p: string;
  l: string;
  r: string;
  u: { s: string; m: string; c: string };
  d: string;
  w: number;
  e: { t: string; k?: string; h?: string; p?: string; v?: number }[];
};

declare global {
  interface Window {
    __beacons?: string[];
  }
}

/** Capture beacons in the page: Playwright does not route sendBeacon traffic. */
const captureBeacons = async (page: Page): Promise<void> => {
  await page.addInitScript(() => {
    window.__beacons = [];
    navigator.sendBeacon = (_url: string | URL, data?: BodyInit | null): boolean => {
      if (data instanceof Blob) {
        void data.text().then((text) => window.__beacons?.push(text));
      } else if (typeof data === 'string') {
        window.__beacons?.push(data);
      }
      return true;
    };
  });
};

/** The script flushes when the tab is hidden; fake that rather than closing the page. */
const hide = async (page: Page): Promise<void> => {
  await page.evaluate(() => {
    Object.defineProperty(document, 'visibilityState', { value: 'hidden', configurable: true });
    document.dispatchEvent(new Event('visibilitychange'));
  });
  // Issue #104, Design item 3: the mocked sendBeacon above reads the Blob
  // body via `.text()`, an async read, so the push into `window.__beacons`
  // lands a tick after `visibilitychange` returns — wait for that push
  // (what every caller of `hide()` goes on to assert against) instead of a
  // flat delay. Bounded, and swallowed on timeout: the DNT test calls
  // `hide()` too and legitimately expects zero beacons forever, so this must
  // not hang when none ever arrives.
  await page
    .waitForFunction(() => (window.__beacons?.length ?? 0) > 0, undefined, { timeout: 2000 })
    .catch(() => {});
};

const batches = async (page: Page): Promise<Batch[]> =>
  (await page.evaluate(() => window.__beacons ?? [])).map((raw) => JSON.parse(raw) as Batch);

const eventsOf = (all: Batch[], type: string) =>
  all.flatMap((batch) => batch.e).filter((event) => event.t === type);

// Issue #104, Design item 4 (verifier round 2) / issue #190: a layout- or
// scroll-driven test must test the settled page, not a mid-animation frame
// — but a fixed delay is just a smaller guess about machine speed, the
// exact failure mode #190 exists to remove. Ask the page itself instead:
// `document.getAnimations()` returns every animation and each has a
// `.finished` promise. The hero also runs several *infinite* decorative
// animations — those never finish, so this filters them out by their own
// timing (`iterations === Infinity`) rather than waiting on them. `capMs`
// is a safety net for an animation Playwright can't observe correctly, not
// the primary wait; a page with no finite animation running resolves
// immediately. Duplicated from tests/home.spec.ts rather than shared,
// because this work order's file map is this spec file only.
const waitForEntranceAnimations = async (page: Page, capMs = 2000): Promise<void> => {
  await page.evaluate(async (cap) => {
    const finite = document
      .getAnimations()
      .filter((a) => a.effect?.getTiming().iterations !== Infinity);
    const settled = Promise.all(finite.map((a) => a.finished.catch(() => undefined)));
    const capped = new Promise<void>((resolve) => setTimeout(resolve, cap));
    await Promise.race([settled, capped]);
  }, capMs);
};

// Issue #190: the test must not assume a scroll landed in time — it must
// know. This runs a second, independent IntersectionObserver against the
// same element, using the identical "reached" condition Analytics.astro's
// own observer uses (ratio >= 0.5, or the section covers half the
// viewport), and resolves the moment the real browser reports that
// condition true. That is the earliest moment the production observer
// could have started the section's dwell clock, so pausing-to-read only
// after this resolves means the measured dwell is never shortened by
// however long the scroll animation or the observer's own callback took to
// catch up under load. `capMs` is a generous fallback so a part that
// somehow never registers (e.g. the element genuinely does not exist)
// cannot hang the test; the floor assertions after flush will fail loudly
// in that case, which is correct.
const waitForPartReached = async (page: Page, sectionId: string, capMs = 8000): Promise<void> => {
  await page.evaluate(
    ({ id, cap }) =>
      new Promise<void>((resolve) => {
        const el = document.querySelector<HTMLElement>(`[data-track-section="${id}"]`);
        if (!el) {
          resolve();
          return;
        }
        const reached = (entry: IntersectionObserverEntry): boolean =>
          entry.isIntersecting &&
          (entry.intersectionRatio >= 0.5 ||
            entry.intersectionRect.height >= window.innerHeight * 0.5);
        const observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (reached(entry)) {
                observer.disconnect();
                resolve();
                return;
              }
            }
          },
          { threshold: [0, 0.25, 0.5, 0.75, 1] },
        );
        observer.observe(el);
        setTimeout(() => {
          observer.disconnect();
          resolve();
        }, cap);
      }),
    { id: sectionId, cap: capMs },
  );
};

test('reports a pageview with the page context', async ({ page }) => {
  await captureBeacons(page);
  await page.goto('/');
  await hide(page);

  const all = await batches(page);
  expect(all.length).toBeGreaterThan(0);
  const first = all[0]!;
  expect(first.s).toMatch(/^[a-z0-9]{8,}$/);
  expect(first.p).toBe('/');
  expect(first.l).toBe('he');
  expect(['phone', 'tablet', 'desktop']).toContain(first.d);
  expect(eventsOf(all, 'view')).toHaveLength(1);
});

test('reports scroll depth, section reach and engaged time on leave', async ({ page }) => {
  await captureBeacons(page);
  await page.goto('/');
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.locator('#contact').scrollIntoViewIfNeeded();
  // Issue #104, Design item 3: left as a fixed wait, named here with the
  // reason — Analytics.astro (out of this order's file map) only counts a
  // section as "reached" once real wall-clock dwell exceeds its own 500ms
  // threshold (`if (ms > 500) push({ t: 'section', ... })`), tracked in a
  // closure with nothing exposed on `window` to poll. There is no DOM-visible
  // signal of "500ms of dwell has elapsed" to wait on instead; 900ms clears
  // that threshold with margin.
  await page.waitForTimeout(900);
  await hide(page);

  const all = await batches(page);
  const depth = eventsOf(all, 'depth');
  expect(depth).toHaveLength(1);
  expect(depth[0]!.v).toBeGreaterThan(50);

  const sections = eventsOf(all, 'section').map((event) => event.k);
  expect(sections).toContain('contact');
  expect(eventsOf(all, 'end')).toHaveLength(1);
});

test('reports a labelled click with the section it came from', async ({ page }) => {
  await captureBeacons(page);
  await page.goto('/');
  await page.locator('[data-track="hero-services"]').click();
  await hide(page);

  const all = await batches(page);
  const click = eventsOf(all, 'click').find((event) => event.k === 'hero-services');
  expect(click).toBeDefined();
  expect(click!.p).toBe('top');
  expect(click!.h).toContain('#services');
});

test('carries the campaign a visitor arrived on', async ({ page }) => {
  await captureBeacons(page);
  await page.goto('/?utm_source=instagram&utm_medium=bio&utm_campaign=october');
  await hide(page);

  const all = await batches(page);
  expect(all[0]!.u).toEqual({ s: 'instagram', m: 'bio', c: 'october' });
});

test('records dwell for every part of a guide, not only the one left open at flush (#176)', async ({
  page,
}) => {
  // Issue #176: a real headed-browser reader scrolled slowly through
  // /articles/publish-app-to-stores/, pausing 3+ seconds on each of its 10
  // tracked parts (the 6 declared `parts` plus the 4 fixed sections every
  // guide carries: answer, skill-handoff, closing, related), then left the
  // page. Only the 2 sections still open at the moment they left kept their
  // dwell; the other 8 lost it, because the dwell clock for a section was
  // being restarted on every IntersectionObserver callback while the
  // section was still on screen (several ratio thresholds fire repeatedly
  // during ordinary scrolling), not only on the transition into view. This
  // test reproduces that scroll — smooth `scrollIntoView` so the browser's
  // real intersection ratio actually transits through the observer's
  // thresholds, the way the reader's scroll did — then pauses "reading"
  // each part well past the 500ms dwell floor before moving to the next.
  //
  // Issue #190: under heavy machine load the browser's IntersectionObserver
  // callbacks and the page's own work lag, so a part could be considered
  // "entered" later than the scroll, leaving its measured dwell under the
  // floor, or the flush could race the last part. Two fixes: wait for the
  // part to actually be reported as intersecting (`waitForPartReached`)
  // before starting the "reading" pause, instead of assuming a fixed wait
  // covered the scroll; and make that pause several multiples of the
  // 500ms floor so load jitter cannot eat the margin. The walk also waits
  // for the page's own entrance animations to finish first (the same
  // `document.getAnimations()` wait the suite already uses for measuring
  // tests, issue #104) so the observer is not fighting layout motion from
  // the moment the page loads.
  test.setTimeout(300_000);

  const partIds = [
    'answer',
    'who-is-this-for',
    'comparison',
    'prepare',
    'procedure',
    'review',
    'field-note',
    'skill-handoff',
    'closing',
    'related',
  ];

  await captureBeacons(page);
  await page.goto('/articles/publish-app-to-stores/');
  await waitForEntranceAnimations(page);

  for (const id of partIds) {
    await page.evaluate((sectionId) => {
      document
        .querySelector<HTMLElement>(`[data-track-section="${sectionId}"]`)
        ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, id);
    // Don't assume the scroll landed — wait for the browser to actually
    // report the part as intersecting, under the identical condition
    // Analytics.astro's own observer uses to start the dwell clock.
    await waitForPartReached(page, id);
    // Pause on the part, several multiples of the 500ms dwell floor so
    // load cannot eat the margin.
    await page.waitForTimeout(2000);
  }

  // Force the flush rather than relying on pagehide/the interval timer.
  await hide(page);

  const all = await batches(page);
  const dwellBySection = new Map<string, number>();
  for (const event of eventsOf(all, 'section')) {
    if (event.k && typeof event.v === 'number' && event.v > 0) {
      dwellBySection.set(event.k, (dwellBySection.get(event.k) ?? 0) + event.v);
    }
  }

  for (const id of partIds) {
    expect(dwellBySection.get(id), `dwell recorded for part "${id}"`).toBeGreaterThan(500);
  }
});

test('sends nothing when the browser asks not to be tracked', async ({ browser }) => {
  const context = await browser.newContext();
  await context.addInitScript(() => {
    Object.defineProperty(navigator, 'doNotTrack', { value: '1', configurable: true });
  });
  const page = await context.newPage();
  await captureBeacons(page);
  await page.goto('/');
  await page.evaluate(() => window.scrollTo(0, 2000));
  await hide(page);

  expect(await batches(page)).toHaveLength(0);
  await context.close();
});
