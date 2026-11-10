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
