# Spec — Scroll-driven Cinematic Hero

**Status:** Draft · proposal
**Owner:** Alex
**Source of inspiration:** https://playwithanimation.netlify.app/ ("A Landing Page Can Have A Plot — V9")
**Target page:** `src/pages/index.astro` (and i18n variants under `src/pages/[lang]/`)
**Last updated:** 2026-05-22

---

## 1. Why we want this

The reference site uses an image-sequence scroll animation to turn a flat landing page into a 20-second cinematic that the visitor scrubs through with their mouse-wheel. The "wow" is not the code — the code is ~600 lines of vanilla JS — it is the idea that **scrolling becomes the camera**.

For Hand in Hand AI, the goal is identical but the protagonist is different. Instead of an alien holding a smartphone, the protagonist is **our product talking to itself**: a WhatsApp conversation that types itself out as the visitor scrolls, ending on a CTA that opens a real WhatsApp chat with us via the existing `/wa/<slug>` Pages Function.

This spec documents (a) the technique behind the reference site, (b) the adaptation for `handinhandai-site`, and (c) implementation-level detail (file contents, test cases, sprint breakdown) so a developer can pick it up and execute without re-discovery.

## 2. How the reference site works (teardown)

The whole thing is `index.html` (7 KB) + `styles.css` (796 lines) + `script.js` (589 lines). No framework, no bundler, no GSAP, no Three.js. The build pipeline is **video → frames → canvas-on-scroll**.

### 2.1 Pipeline
1. Generate or shoot a short vertical video (~10–20s).
2. Convert to JPG frames with `ffmpeg` or ezgif. The reference uses 598 frames in two batches: `Alien/batch1/ezgif-frame-001.jpg … batch2/ezgif-frame-298.jpg`.
3. Drop frames into the project's static folder.
4. On scroll, draw the right frame into a `<canvas>` element.

### 2.2 Engineering details worth stealing

| Concern | What they do | Why it matters |
| --- | --- | --- |
| First paint | `<link rel="preload" as="image">` for first + last frame | Hero frame appears instantly, before JS runs |
| Decode load | `PRELOAD_CONCURRENCY = 8` parallel `new Image()` requests | Avoids saturating mobile networks |
| Interactivity | Page becomes scrollable at `FIRST_SCROLL_READY_RATIO = 0.64` with `MAX_LOADER_WAIT = 8500ms` ceiling | User never waits more than 8.5s |
| Around-cursor prefetch | `preloadFramesAround(currentIndex)` prioritises frames near scroll position | Scroll-back never shows a blank |
| Cache | `Map<index, HTMLImageElement>` keeps every loaded frame in memory | Re-scroll is instant; no re-decode |
| Render loop | `requestAnimationFrame` + `smoothstep(edge0, edge1, value)` easing | Buttery interpolation, no jank |
| Canvas perf | `canvas.getContext("2d", { alpha: false })` | Browser skips alpha compositing |
| Scene copy | `<article data-start="0.3" data-end="0.5">` overlays | One DOM tree carries both visuals and copy |
| Loader UX | Animated progress bar + copy explaining the wait | Loading is part of the story, not friction |

### 2.3 What they did NOT use (verified by inspecting the page)
- No React, Vue, Astro, or any framework
- No GSAP, Lenis, Locomotive, or scroll library
- No Three.js / WebGL — pure 2D canvas
- No image CDN tricks — frames are static JPGs served by Netlify

## 3. Our adaptation — "The chat that types itself"

### 3.1 Concept

The hero is a vertical phone-frame at the centre of the screen. As the visitor scrolls, the WhatsApp conversation inside the phone types itself out, message by message. Around the phone, scene-copy articles fade in to narrate what the visitor is seeing.

This is **B + D from the discovery memo**: the WhatsApp mock you already own (`@alexgub84/whatsapp-chat-mock`) as the protagonist, with scroll driving message progression instead of `setTimeout`.

End frame: the bot sends a CTA bubble — `קליין מגיב אוטומטית. תרצו לראות איך זה עובד אצלכם?` — that becomes a tap-to-WhatsApp link via the existing `/wa/hero-cta` short-link.

### 3.2 Why this beats the cinematic-video approach for us

| Reference site | Our adaptation |
| --- | --- |
| Generic AI video — fun but disconnected from product | The hero **is** our product |
| 598 JPGs ≈ 15–25 MB of assets | < 100 KB of JSON message data |
| Re-shooting the "movie" = re-running an AI generator | Updating copy = editing a TS scenario file |
| Wow comes from spectacle | Wow comes from a self-demonstrating product |
| RTL is a layout concern | RTL is already handled by the mock component |

### 3.3 Architecture

```
src/
  components/
    scroll-hero/
      ScrollHero.astro          ← layout shell + scene articles + phone slot
      ScrollHeroCanvas.tsx      ← React island, runs the scroll loop, hosts <WhatsAppMock>
      scenes/
        hero-he.ts              ← Hebrew beats + scene copy
        hero-en.ts              ← English beats + scene copy
        types.ts                ← Beat, Scene, HeroScenario interfaces
      lib/
        scroll-progress.ts      ← pure: scrollY → progress 0..1
        message-progress.ts     ← pure: progress + beats → activeMessageIndex
        scene-progress.ts       ← pure: progress + scenes → activeScene + opacity
      styles/
        scroll-hero.css         ← scoped styles; logical properties only
  pages/
    index.astro                 ← imports ScrollHero with Hebrew scenario
    [lang]/index.astro          ← lang-bound scenario import
tests/
  unit/
    scroll-progress.test.ts
    message-progress.test.ts
    scene-progress.test.ts
  e2e/
    scroll-hero.spec.ts         ← Playwright: scroll → messages advance → CTA reachable
```

### 3.4 Data model

```ts
// src/components/scroll-hero/scenes/types.ts
import type { Message } from "@alexgub84/whatsapp-chat-mock";

/** One step of the conversation. Scrolling advances through Beats. */
export type Beat = {
  message: Message;
  /** Default 1. Bump to 2-3 for media/long bubbles — visitor scrolls further past them. */
  weight?: number;
  /** Optional. ID of a Scene that should be active while this beat is on-screen. */
  scene?: string;
};

/** A copy block that fades in/out around the phone as scroll progresses. */
export type Scene = {
  id: string;
  eyebrow?: string;
  heading: string;
  body?: string;
  /** Progress range 0..1 where this scene is fully visible. Outside this range it fades. */
  start: number;
  end: number;
  /** Fade-in distance on each side, in progress units. Default 0.04. */
  fade?: number;
};

export type HeroScenario = {
  lang: "he" | "en";
  /** Direction is implied by lang but stored explicitly so the canvas component doesn't need to know lang. */
  dir: "rtl" | "ltr";
  /** Chat header — passed straight to <WhatsAppMock>. */
  headerName: string;
  avatarUrl: string;
  beats: Beat[];
  scenes: Scene[];
  /** CTA bubble — the final beat. Rendered as a clickable bubble linking to `/wa/<ctaSlug>`. */
  ctaSlug: string;
};
```

### 3.5 Mapping scroll-progress to message index

The reference site maps `progress ∈ [0, 1]` to `frameIndex ∈ [0, frames.length-1]` with linear interpolation and `smoothstep` easing inside scene boundaries.

We do the same, but the unit is **WhatsApp messages**, not movie frames. `cumulativeWeight(i) / totalWeight` defines the progress range owned by message `i`.

```ts
// src/components/scroll-hero/lib/message-progress.ts
import type { Beat } from "../scenes/types";

export function messageIndexAt(progress: number, beats: Beat[]): number {
  const weights = beats.map((b) => b.weight ?? 1);
  const total = weights.reduce((a, b) => a + b, 0);
  if (total === 0) return 0;
  const target = Math.max(0, Math.min(1, progress)) * total;
  let acc = 0;
  for (let i = 0; i < weights.length; i++) {
    acc += weights[i];
    if (target <= acc) return i;
  }
  return beats.length - 1;
}
```

```ts
// src/components/scroll-hero/lib/scroll-progress.ts
/**
 * Progress along the hero section, clamped to 0..1.
 * The hero is pinned for `pinHeight` vh of scroll, then released.
 */
export function heroProgress(
  scrollY: number,
  heroTop: number,
  pinHeightPx: number,
): number {
  const raw = (scrollY - heroTop) / pinHeightPx;
  return Math.max(0, Math.min(1, raw));
}
```

```ts
// src/components/scroll-hero/lib/scene-progress.ts
import type { Scene } from "../scenes/types";

function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

/** Returns opacity 0..1 for each scene at a given progress. */
export function sceneOpacities(progress: number, scenes: Scene[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const s of scenes) {
    const fade = s.fade ?? 0.04;
    const fadeIn = smoothstep(s.start - fade, s.start, progress);
    const fadeOut = 1 - smoothstep(s.end, s.end + fade, progress);
    out[s.id] = Math.max(0, Math.min(1, Math.min(fadeIn, fadeOut)));
  }
  return out;
}
```

### 3.6 React island contract

```tsx
// src/components/scroll-hero/ScrollHeroCanvas.tsx (sketch)
import { useEffect, useRef, useState } from "react";
import WhatsAppMock from "@alexgub84/whatsapp-chat-mock";
import type { HeroScenario } from "./scenes/types";
import { heroProgress } from "./lib/scroll-progress";
import { messageIndexAt } from "./lib/message-progress";
import { sceneOpacities } from "./lib/scene-progress";

const PIN_HEIGHT_VH = 250; // 2.5 viewports of scroll

export default function ScrollHeroCanvas({ scenario }: { scenario: HeroScenario }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [opacities, setOpacities] = useState<Record<string, number>>({});

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setActiveIndex(scenario.beats.length - 1); // show full conversation, no animation
      return;
    }
    let raf = 0;
    const tick = () => {
      const section = sectionRef.current;
      if (section) {
        const rect = section.getBoundingClientRect();
        const heroTop = window.scrollY + rect.top;
        const pinHeightPx = (PIN_HEIGHT_VH / 100) * window.innerHeight;
        const p = heroProgress(window.scrollY, heroTop, pinHeightPx);
        setActiveIndex(messageIndexAt(p, scenario.beats));
        setOpacities(sceneOpacities(p, scenario.scenes));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [scenario]);

  const messages = scenario.beats.slice(0, activeIndex + 1).map((b) => b.message);

  return (
    <section ref={sectionRef} className="scroll-hero" dir={scenario.dir} style={{ "--pin-height": `${PIN_HEIGHT_VH}vh` } as React.CSSProperties}>
      <div className="scroll-hero__pin">
        <div className="scroll-hero__phone">
          <WhatsAppMock messages={messages} headerName={scenario.headerName} avatarUrl={scenario.avatarUrl} />
        </div>
        <div className="scroll-hero__scenes">
          {scenario.scenes.map((s) => (
            <article key={s.id} className="scroll-hero__scene" style={{ opacity: opacities[s.id] ?? 0 }}>
              {s.eyebrow && <p className="eyebrow">{s.eyebrow}</p>}
              <h2>{s.heading}</h2>
              {s.body && <p>{s.body}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### 3.7 Performance budget

| Metric | Budget | How we hit it |
| --- | --- | --- |
| Hero asset weight | ≤ 200 KB | Phone-frame SVG + avatar JPG + scenario JSON |
| First-Contentful-Paint on 4G | ≤ 1.5s | Astro pre-renders phone frame; first message visible before JS hydrates |
| Time-to-Interactive on 4G | ≤ 2.5s | `client:load` on `/` (above the fold), `client:visible` elsewhere |
| Scroll loop | 60 fps M1 Air, 30 fps iPhone SE 2 | `requestAnimationFrame` with state diffing — only `setState` when index/opacity actually changes |
| Cumulative Layout Shift | 0 | Phone frame has explicit `width/height`; messages animate inside it |

### 3.8 Accessibility & reduced motion

- `prefers-reduced-motion: reduce` → fall back to a static stack: all messages visible, no scroll-binding, scene copy as a normal vertical document.
- Phone frame: `role="region"`, `aria-label="WhatsApp conversation demo"`.
- Every message bubble keeps its accessible text in the DOM — screen readers can read the full conversation linearly.
- Scene-copy uses real headings (`<h1>`, `<h2>`) for SEO and reader-mode.
- CTA bubble is a real `<a href="/wa/hero-cta">`, keyboard-focusable.

### 3.9 RTL

The mock component is already RTL-correct. The scene-copy layer must use logical properties only — `padding-inline-start`, `margin-inline-end`, `inset-inline-start: 0`. No `left`/`right`. Matches CLAUDE.md → "Logical properties only (RTL)".

### 3.10 Pinning behaviour

The hero pins (sticky viewport) for the first **2.5 viewports** of scroll, then releases naturally into the rest of the page. CSS approach:

```css
.scroll-hero { height: var(--pin-height); }
.scroll-hero__pin { position: sticky; top: 0; height: 100vh; overflow: hidden; }
```

Rationale: long enough to show the conversation cinematically (~10s of scroll on a trackpad), short enough that visitors who want to skim aren't trapped.

## 4. Test plan

### 4.1 Unit (Vitest)

| File | Test cases |
| --- | --- |
| `scroll-progress.test.ts` | progress 0 when scrollY < heroTop · progress 1 when scrollY > heroTop+pin · linear in between · clamped to [0,1] |
| `message-progress.test.ts` | empty beats → 0 · single beat → 0 · uniform weights · weighted beats · progress 0 → first · progress 1 → last · progress out of range clamped |
| `scene-progress.test.ts` | scene before start → 0 · scene fully inside range → 1 · scene during fade-in → smoothstep value · scene during fade-out → smoothstep value · scene after end → 0 |

### 4.2 E2E (Playwright)

```ts
// tests/e2e/scroll-hero.spec.ts (sketch)
test("hero advances messages on scroll and CTA links to wa.me", async ({ page }) => {
  await page.goto("/");
  // First message visible immediately
  await expect(page.getByText("שלום, אני מעוניין").first()).toBeVisible();
  // Scroll half the pin distance — middle of conversation visible
  await page.evaluate(() => window.scrollBy(0, window.innerHeight * 1.25));
  await expect(page.getByText(/.*טריאל.*/)).toBeVisible();
  // Scroll past the pin — CTA bubble visible and links to /wa/hero-cta
  await page.evaluate(() => window.scrollBy(0, window.innerHeight * 1.5));
  const cta = page.getByRole("link", { name: /קליין מגיב/ });
  await expect(cta).toHaveAttribute("href", "/wa/hero-cta");
});

test("reduced motion → full conversation rendered static", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  // All beats visible without scrolling
  const messages = page.locator(".scroll-hero__phone .message-bubble");
  await expect(messages).toHaveCount(/* beats.length */ 9);
});
```

### 4.3 Manual QA
- macOS → Settings → Accessibility → Display → Reduce motion → reload page → verify static fallback
- iPhone SE 2 via Safari Web Inspector → verify 30 fps minimum
- Lighthouse mobile run → Performance ≥ 90, Accessibility = 100

## 5. Implementation plan (sprints)

Each task is a GitHub Issue, per "No code without an issue".

### Sprint 1 — Skeleton + pure logic (1–2 days)
1. Scaffold `src/components/scroll-hero/` with the file layout in §3.3
2. Write `scroll-progress.ts`, `message-progress.ts`, `scene-progress.ts` as pure functions + full Vitest coverage. **Test first.**
3. Wire the React island with `console.log`-only side effects. Playwright smoke test: scrolling changes activeIndex.

### Sprint 2 — Visual binding (2–3 days)
4. Bind progress to `<WhatsAppMock>` — render messages `0..activeIndex`
5. Build the scene-copy layer with opacity driven by `sceneOpacities`
6. Reduced-motion fallback — test with macOS Reduce Motion
7. `<link rel="preload" as="image">` for avatar + phone frame in `Layout.astro`

### Sprint 3 — Copy, polish, CTA (1–2 days)
8. Hebrew + English scenarios (`scenes/hero-he.ts`, `scenes/hero-en.ts`), ending on CTA bubble linking to `/wa/hero-cta`
9. Add `/wa/hero-cta` to `functions/wa/[slug].ts` with custom OG preview
10. Playwright test — 3-step scroll asserts specific messages visible + CTA reachable
11. Lighthouse audit — Performance ≥ 90 mobile, Accessibility = 100

### Sprint 4 — Optional cinematic upgrade (later)
B-roll canvas layer behind the phone (founder at desk, Mac, phone lighting up), 60–120 frames, asset weight < 1 MB. Chat stays primary; B-roll is atmosphere.

## 6. Open decisions (lock before Sprint 1)

| # | Decision | Recommendation |
| --- | --- | --- |
| 1 | Which scenario? Trial-booking, waitlist, or follow-up? | **Trial-booking** — strongest sales narrative |
| 2 | Default language on `/` | **Hebrew** (per CLAUDE.md) |
| 3 | CTA destination phone number | New dedicated number to measure hero-driven conversions separately |
| 4 | Pin or scroll naturally? | **Pin for 2.5 viewports**, then release |

## 7. Out of scope (v1)
- WebGL / Three.js
- Video assets (re-evaluate in Sprint 4)
- A/B testing infrastructure — ship one, measure with Plausible
- Programmatic personalisation by referrer

## 8. Risks
- **Scroll-jacking complaints.** Pinning frustrates power users. Mitigation: 2.5-viewport cap; reduced-motion fallback; skim works once unpinned.
- **Mobile performance.** Long pinned section can feel sluggish if RAF state-diffing is sloppy. Mitigation: only `setState` when activeIndex changes (not every frame).
- **Copy drift.** Scenarios in TS files are easy to forget when marketing changes. Mitigation: scene IDs and bubble text exposed in a single export per language so a non-dev can PR copy changes.

## 9. References

- Reference site: https://playwithanimation.netlify.app/
- Apple's image-sequence pattern (origin): https://www.apple.com/ipad-pro/ (2018 launch)
- MDN `requestAnimationFrame`: https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame
- CSS `prefers-reduced-motion`: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
- Existing component: `src/components/whatsapp-mock/WhatsAppMock.tsx`
- Existing short-link function: `functions/wa/[slug].ts`
