# Reference — Cinematic Scroll Techniques (Cherry-Pick Catalog)

**Status:** Reference card
**Source teardown:** https://playwithanimation.netlify.app/ ("A Landing Page Can Have A Plot — V9")
**Companion to:** `docs/specs/scroll-cinematic-hero.md` (that spec covers the WhatsApp adaptation; this doc catalogs reusable micro-techniques)
**Last updated:** 2026-05-22

---

## How to use this doc

The reference site stacks ~10 small techniques that, in isolation, are cheap to apply but combine into a premium cinematic feel. Pick any one and drop it into any Astro page. Each section is self-contained: rationale + copy-paste snippet + when to use + when to avoid.

Stack summary: **vanilla JS, no libraries**. No GSAP, no Lenis, no Three.js, no Lottie, no Framer Motion. 1 HTML + 1 CSS + 1 JS file. The "wow" is taste + math, not dependencies.

---

## 1. The Scroll → Progress → CSS Variable Bridge

**What it is.** One scroll listener writes `--story-progress` on `<html>`. Every progress-driven visual reads it from CSS — no per-element JS DOM writes.

**Why it matters.** Single source of truth. Progress bars, parallax offsets, opacity ramps all driven by one number. Zero re-renders.

```js
// once per project
const requestUpdate = (() => {
  let rafId = 0;
  return () => {
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      rafId = 0;
      const section = document.getElementById("hero");
      const scrollable = Math.max(section.offsetHeight - innerHeight, 1);
      const progress = Math.max(0, Math.min(1, (scrollY - section.offsetTop) / scrollable));
      document.documentElement.style.setProperty("--story-progress", `${progress * 100}%`);
    });
  };
})();
addEventListener("scroll", requestUpdate, { passive: true });
```

```css
.progress-bar {
  background: linear-gradient(90deg, var(--gold) var(--story-progress), oklch(94% 0.012 84 / 0.14) 0);
}
.parallax { transform: translateY(calc(var(--story-progress) * -40px)); }
```

**Use it for.** Page-wide progress indicators, parallax, color shifts tied to scroll position.
**Avoid for.** Per-element interactions (hover, click) — overkill.

---

## 2. Sticky Scene Slides (Pin Without GSAP)

**What it is.** Tall `<section>` containing `<article>` slides with `position: sticky; top: 0; min-height: 100dvh`. Each slide pins itself when it hits the top, releases when the next one pushes it out.

**Why it matters.** Pure CSS pinning. No scroll library. Works on mobile Safari (use `100dvh`, not `100vh`, so dynamic browser chrome doesn't break layout).

```html
<section class="process">
  <article class="slide slide--dark"><h2>Start with a video.</h2></article>
  <article class="slide slide--paper"><h2>Turn into frames.</h2></article>
  <article class="slide slide--gold"><h2>Add the feel.</h2></article>
</section>
```

```css
.slide {
  position: sticky;
  top: 0;
  min-height: 100svh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: clamp(40px, 7vw, 110px);
  border-top: 1px solid oklch(96% 0.012 84 / 0.08);
}
.slide--dark  { background: #060607; color: #f7f4ea; }
.slide--paper { background: #f7f4ea; color: #050505; }
.slide--gold  { background: #e9bd44; color: #050505; }
```

**Use it for.** Process explanations, feature walk-throughs, testimonial chapters.
**Avoid for.** Sections where the user must compare two pieces side-by-side — pinning breaks comparison.

---

## 3. The Editorial Type System (Impact + Aptos + OKLCH Dark)

**What it is.** Magazine-style typography using system fonts only. No web font request. Zero FOUT.

```css
:root {
  color-scheme: dark;
  --bg:    oklch(3.2% 0.006 250);     /* near-black blue */
  --ink:   oklch(96.5% 0.012 84);     /* warm white */
  --muted: oklch(82% 0.018 84 / 0.68);
  --gold:  oklch(80% 0.14 78);        /* editorial accent */
}

body {
  background: var(--bg);
  color: var(--ink);
  font-family: "Bahnschrift Condensed", "Aptos Display", "Franklin Gothic Medium", "Segoe UI", system-ui, sans-serif;
}

h1, h2 {
  font-family: Impact, Haettenschweiler, "Bahnschrift Condensed", sans-serif;
  font-weight: 950;
  line-height: 0.92;
  letter-spacing: 0;
  font-size: clamp(2.55rem, 7.4vw, 7rem);
}

.eyebrow {
  font-family: "Aptos", "Segoe UI", system-ui, sans-serif;
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--gold);
}
```

**Why Impact?** Free everywhere, has the right brutalist heft, never loads. Combined with `letter-spacing: 0` and `line-height: 0.92` it stops feeling like 90s default and starts feeling like a magazine cover.

**For Hebrew (this project).** Swap Impact for Heebo Black (`font-weight: 900`) and keep Aptos/system for body. Heebo is already loaded for fitness pages — reuse it.

**Use it for.** Hero typography, section headers, kickers.
**Avoid for.** Body copy longer than ~6 lines (Impact is unreadable in paragraphs).

---

## 4. Giant Faded Numeral Behind Each Scene (Pure CSS, No DOM)

**What it is.** Each scene `<article data-step="03">` gets a ghost number 22vw tall sitting behind it. Generated entirely from `attr(data-step)` — no extra elements.

```css
.scene-copy::after {
  position: absolute;
  z-index: -1;
  top: -0.44em;
  left: -0.16em;
  content: attr(data-step);
  font-family: Impact, sans-serif;
  font-size: clamp(11rem, 22vw, 29rem);
  font-weight: 950;
  line-height: 0.8;
  color: oklch(96% 0.01 84 / 0.028); /* almost invisible */
  pointer-events: none;
}

.scene-copy::before {
  display: block;
  margin-bottom: clamp(12px, 1.7vh, 20px);
  content: attr(data-step) " / " attr(data-label);
  color: var(--gold);
  font-size: 0.72rem;
  font-weight: 850;
  letter-spacing: 0.11em;
  text-transform: uppercase;
}
```

**Why it matters.** Two free decorative elements per scene (kicker + giant numeral) with zero markup overhead. Editorial credibility, zero perf cost.

**Use it for.** Numbered process steps, FAQ items, feature lists.
**Avoid for.** Sections without an obvious ordinal.

---

## 5. Headline Word-Split + Per-Word Stagger Reveal

**What it is.** JS splits `<h1>I opened Claude Code.</h1>` into `<span class="headline-word">I</span>...` then sets opacity per word based on `smoothstep` of scroll progress.

```js
function splitHeadlines() {
  document.querySelectorAll("h1, h2").forEach((h) => {
    const text = h.textContent.trim();
    h.textContent = "";
    text.split(/\s+/).forEach((word, i) => {
      const span = document.createElement("span");
      span.className = "headline-word";
      span.dataset.wordIndex = String(i);
      span.textContent = word;
      h.append(span, " ");
    });
  });
}

// per RAF:
words.forEach((word, i) => {
  const wordStart = sceneStart + i * (sceneSpan * 0.4 / words.length);
  const wordEnd = wordStart + 0.036;
  const t = smoothstep(wordStart, wordEnd, progress);
  word.style.opacity = t.toFixed(3);
  word.style.transform = `translateY(${((1 - t) * 0.2).toFixed(3)}em)`;
});

function smoothstep(a, b, x) {
  const t = Math.max(0, Math.min(1, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}
```

```css
.headline-word {
  display: inline-block;
  opacity: 0;
  transform: translateY(0.18em);
  will-change: opacity, transform;
}
```

**Why it matters.** Reads as "the page is writing the headline as you scroll" — feels alive without any animation library.

**For Hebrew (RTL).** Word order is the same after split — RTL flow handles direction. Verify `direction: rtl` is on the container.

**Use it for.** Hero headlines, section transitions.
**Avoid for.** Headlines a screen reader has to read — keep the full text in an `aria-label` on the parent or wrap in `<span class="sr-only">`.

---

## 6. The Loader Is Part of the Story

**What it is.** Instead of a spinner, a full-screen panel with kicker + giant question + progress bar + meta. Loader text *teases the content* ("I have a question. What does an alien have to do with a smartphone?").

```html
<div class="loader" id="loader" role="status" aria-live="polite">
  <p class="loader__kicker">Before we start</p>
  <div class="loader__title">
    <span>I have a question.</span>
    <span>What does an alien have to do with a smartphone?</span>
  </div>
  <p class="loader__aside">Give me a few seconds. The frames are getting ready.</p>
  <div class="loader__bar"><span id="loaderBar"></span></div>
  <p class="loader__meta"><span id="loaderCount">0%</span> of the film is ready</p>
</div>
```

```css
.loader {
  position: fixed;
  inset: 0;
  z-index: 30;
  display: flex;
  align-items: center;
  padding: clamp(28px, 7vw, 120px);
  background:
    radial-gradient(ellipse at 78% 46%, oklch(80% 0.14 78 / 0.12), transparent 28rem),
    linear-gradient(90deg, var(--bg) 0%, oklch(3.2% 0.006 250 / 0.98) 54%, oklch(3.2% 0.006 250 / 0.82));
  transition: opacity 700ms cubic-bezier(0.22, 1, 0.36, 1), visibility 700ms;
}
.loader.is-hidden { visibility: hidden; opacity: 0; pointer-events: none; }
.loader__title span {
  display: block;
  opacity: 0;
  transform: translateY(14px);
  animation: loaderLineIn 900ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
.loader__title span + span { animation-delay: 360ms; opacity: 0.58; }
@keyframes loaderLineIn { to { opacity: 1; transform: translateY(0); } }
```

**Why it matters.** Visitors don't bounce on a loader if the loader is itself a hook. Reference site uses 8.5s ceiling — releases on `openingReadyCount >= openingReadyTarget` OR `MAX_LOADER_WAIT` elapsed.

**Use it for.** Pages with heavy assets (image-sequence hero, video, large initial JSON).
**Avoid for.** Pages under 200KB — adding a loader where none was needed adds friction.

---

## 7. Canvas Post-Processing (Glow + Sweep + Edge Fade)

**What it is.** Even if you don't ship an image sequence, the canvas tricks the reference site uses to make a single image feel cinematic are reusable.

```js
const ctx = canvas.getContext("2d", { alpha: false }); // skip alpha compositing — faster

// 1. Warm radial glow over a focal point
const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
glow.addColorStop(0, "rgb(241 185 92 / 0.06)");
glow.addColorStop(1, "rgb(241 185 92 / 0)");
ctx.fillStyle = glow;
ctx.fillRect(0, 0, w, h);

// 2. Brightness/contrast/saturation filter on the next drawImage
ctx.filter = "brightness(1.14) contrast(1.15) saturate(1.01)";
ctx.drawImage(image, x, y, dw, dh);
ctx.filter = "none";

// 3. Right-edge shade — pulls the eye toward the centre
const edge = ctx.createLinearGradient(x + dw * 0.68, 0, x + dw, 0);
edge.addColorStop(0, "rgb(2 3 5 / 0)");
edge.addColorStop(1, "rgb(2 3 5 / 0.42)");
ctx.fillStyle = edge;
ctx.fillRect(x + dw * 0.68, 0, dw * 0.32, h);

// 4. Diagonal sweep highlight using screen blend
ctx.globalCompositeOperation = "screen";
const sweep = ctx.createLinearGradient(sx - dw * 0.09, y, sx + dw * 0.09, y);
sweep.addColorStop(0, "rgb(255 255 255 / 0)");
sweep.addColorStop(0.5, "rgb(255 226 166 / 0.14)");
sweep.addColorStop(1, "rgb(255 255 255 / 0)");
ctx.fillStyle = sweep;
ctx.fillRect(x, y, dw, dh);
ctx.globalCompositeOperation = "source-over";
```

**Use it for.** Hero product shots, before/after comparisons, anywhere you want a stock image to feel art-directed.
**Avoid for.** Photos with their own strong lighting — double-glow looks fake.

---

## 8. The `scene-copy` Pattern (data-attribute Driven Scroll Choreography)

**What it is.** Scene copy blocks declare their own scroll range in HTML:

```html
<article class="scene" data-step="01" data-label="Elevator going down" data-start="0" data-end="0.3">
  <h1>I opened Claude Code.</h1>
</article>
```

```js
const scenes = Array.from(document.querySelectorAll(".scene"));
function updateScenes(progress) {
  scenes.forEach((scene) => {
    const start = +scene.dataset.start, end = +scene.dataset.end;
    const span = Math.max(end - start, 0.001);
    const fadeIn  = smoothstep(start, start + span * 0.18, progress);
    const fadeOut = 1 - smoothstep(end, end + 0.05, progress);
    const amount = Math.max(0, Math.min(1, fadeIn * fadeOut));
    scene.style.opacity = amount.toFixed(3);
    scene.style.filter = `blur(${((1 - amount) * 8).toFixed(2)}px)`;
    scene.style.transform = `translateY(${((1 - amount) * 16).toFixed(2)}px)`;
  });
}
```

**Why it matters.** Adding a new scene = adding HTML with two attributes. No JS file edited. Marketing can PR copy changes.

**Triple-modal exit.** Each scene fades out by: lowering opacity + adding blur + sliding up 16px. Three signals = polished. Any one alone = janky.

**Use it for.** Multi-step narratives, scrollytelling, anywhere you have ≥3 distinct beats.

---

## 9. Color Palette: Dark + One Saturated Accent

**The reference uses exactly four colors:**

| Token | OKLCH | Use |
| --- | --- | --- |
| `--bg` | `oklch(3.2% 0.006 250)` | Near-black with cool blue undertone |
| `--ink` | `oklch(96.5% 0.012 84)` | Warm off-white |
| `--muted` | `oklch(82% 0.018 84 / 0.68)` | Secondary text |
| `--gold` | `oklch(80% 0.14 78)` | Single accent (kickers, progress, CTAs) |

**Plus three slide backgrounds for the sticky process section:**
- `#060607` (dark)
- `#f7f4ea` (paper / cream — feels expensive against the dark)
- `#e9bd44` (gold call-to-action slide)

**Why OKLCH.** Perceptual color space — alpha-blending with `oklch(80% 0.14 78 / 0.07)` actually produces uniform tint steps, unlike `rgb` or `hsl` which shift hue at low alpha.

**For Hand in Hand AI.** Replace `--gold` with the brand accent already used on the fitness pages. Keep the cream slide — it's the trick that makes the dark slides feel cinematic by contrast.

**Avoid.** Two accents. The reference uses exactly one. Adding teal alongside gold immediately reads as SaaS template.

---

## 10. Grid Background Texture (Two Linear-Gradients, Zero Asset)

**What it is.** A subtle blueprint grid as background, generated from two CSS gradients. No image, no SVG.

```css
.process::before {
  position: fixed;
  inset: 0;
  z-index: -1;
  background:
    linear-gradient(90deg, oklch(80% 0.14 78 / 0.07) 0 1px, transparent 1px 100%),
    linear-gradient(180deg, oklch(80% 0.14 78 / 0.05) 0 1px, transparent 1px 100%),
    radial-gradient(ellipse at 82% 18%, oklch(80% 0.14 78 / 0.14), transparent 28rem);
  background-size: 8rem 8rem, 8rem 8rem, auto;
  pointer-events: none;
  content: "";
}
```

**Use it for.** Section backgrounds that need texture without filesize.
**Avoid for.** Sections with photographic backgrounds — grid clashes.

---

## 11. The 100svh / 100dvh Dual Unit Trick

**What it is.** Every full-viewport element declares two heights:

```css
.full-screen {
  min-height: 100svh;  /* small viewport — when mobile browser chrome is visible */
  min-height: 100dvh;  /* dynamic — adjusts as chrome hides/shows */
}
```

**Why both.** `dvh` is the modern answer but Safari < 15.4 doesn't support it. `svh` is the fallback. Browser uses the second declaration if it understands it, the first if not. **Stack order matters** — `dvh` after `svh`.

**Use it for.** Every fixed/sticky element with `height: 100vh`. Replacing all `100vh` with this pair eliminates the "address bar appears and crops my hero" bug.

---

## 12. Progress Bar Without JS DOM Writes

**What it is.** The film-progress bar reads `--story-progress` directly. JS writes the CSS var once per scroll RAF. Bar updates with zero per-element style assignment.

```css
.film-progress {
  position: absolute;
  z-index: 6;
  bottom: clamp(34px, 5vh, 56px);
  left: clamp(54px, 7vw, 124px);
  right: calc(100vw - 46vw + 28px);
  height: 1px;
  pointer-events: none;
}
.film-progress__line {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, var(--gold) var(--story-progress), oklch(94% 0.012 84 / 0.14) 0);
}
```

**Combine with §1.** Single CSS var drives unlimited progress-bound visuals.

---

## 13. Frame Preloader Pattern (For When You Do Ship an Image Sequence)

**Only relevant if implementing the cinematic-hero spec.** Lifted verbatim from the reference for re-use:

```js
const PRELOAD_CONCURRENCY = 8;
const cache = new Map();
const queue = [];
let active = 0;

function pump() {
  while (active < PRELOAD_CONCURRENCY && queue.length > 0) {
    const idx = queue.shift();
    active++;
    const img = new Image();
    img.decoding = "async";
    img.loading = "eager";
    img.onload = img.onerror = () => { active--; pump(); };
    img.src = frames[idx];
    cache.set(idx, img);
  }
}

// Prioritise: first + last frame, then opening section, then rest
function startPreloadPlan(openingTarget) {
  queue.push(0, frames.length - 1);
  for (let i = 1; i < openingTarget; i++) queue.push(i);
  for (let i = openingTarget; i < frames.length - 1; i++) queue.push(i);
  pump();
}

// During scroll: prioritise frames near current position
function preloadAround(idx) {
  for (let o = -8; o <= 22; o++) queue.unshift(idx + o);
  pump();
}
```

**Key insights worth stealing even without frames:**
- `{ alpha: false }` on `getContext("2d")` — 10-20% draw speedup
- `image.decode()` before painting — avoids decode-on-main-thread jank
- Concurrency cap at 8 — saturates fast networks, doesn't kill slow ones
- `<link rel="preload" as="image" href="firstframe.jpg">` in `<head>` — first paint before JS runs

---

## 14. Reduced-Motion Fallback (Non-Negotiable)

Every scroll-driven effect must check `prefers-reduced-motion: reduce` and degrade to a static stack.

```js
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reduce) {
  // Show all scenes at full opacity, skip scroll binding
  document.querySelectorAll(".scene").forEach((s) => {
    s.style.opacity = "1";
    s.style.transform = "none";
    s.style.filter = "none";
  });
  return;
}
// ... otherwise run the scroll loop
```

**Also listen for changes.** Users toggle the OS setting mid-session.

```js
matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change", (e) => {
  if (e.matches) /* freeze + show static */;
});
```

**Required everywhere in this catalog.** Sections §1, §5, §7, §8, §12 all need a reduced-motion check.

---

## 15. RAF Coalescing (Single-Source Scroll Loop)

**The trap.** Multiple scroll listeners + multiple RAFs = jank.

**The pattern.** One module owns `requestAnimationFrame`. Everyone else registers callbacks.

```js
const subscribers = new Set();
let rafId = 0;
function tick() {
  rafId = 0;
  const progress = computeProgress();
  subscribers.forEach((fn) => fn(progress));
}
function requestUpdate() {
  if (!rafId) rafId = requestAnimationFrame(tick);
}
export function onScroll(fn) {
  subscribers.add(fn);
  return () => subscribers.delete(fn);
}
addEventListener("scroll", requestUpdate, { passive: true });
addEventListener("resize", requestUpdate);
```

**Why.** If you adopt §1, §5, §8, §12 all on the same page, this is what keeps them in sync at 60fps. Each effect subscribes and is called once per frame with the same `progress` number.

---

## Cherry-Pick Recipes

### Recipe: "Make the landing page feel cinematic" (no image sequence)

Combine §2 (sticky slides) + §3 (typography) + §4 (giant numerals) + §9 (palette) + §10 (grid background) + §14 (reduced-motion). Cost: ~200 lines of CSS, ~30 lines of JS. Risk: zero. Visible impact: huge.

### Recipe: "Add a scrollytelling section to an existing page"

Combine §1 (progress var) + §5 (word reveal) + §8 (data-attribute choreography) + §15 (RAF coalescing). Cost: one Astro component, ~80 lines of JS. Drop into any page as `<ScrollyChapter scenes={...} />`.

### Recipe: "Full reference-site replica with WhatsApp adaptation"

See companion spec: `docs/specs/scroll-cinematic-hero.md`. This catalog provides the supporting visual techniques; that spec provides the architecture.

### Recipe: "Premium hero without the scroll commitment"

§3 + §4 + §6 (loader-as-story) + §9 + §11 (svh/dvh). All static, no scroll math. The loader gimmick alone reads as a much more expensive site than it is.

---

## What NOT to copy from the reference site

- **Frame-count-as-flex** (598 frames, ~25MB). Real cost in mobile data. Image sequence is a luxury asset — only ship if the narrative justifies it. The WhatsApp adaptation in the companion spec uses zero frames.
- **8.5-second loader ceiling.** Reference site can afford it because the payoff is the cinematic. A marketing site that makes visitors wait 8.5s for a landing page will bleed conversions. Keep loaders under 1.5s or skip them entirely.
- **Scroll-jacking.** The reference pins for 1160svh (11+ viewports). Anything more than 3 viewports of pinning is hostile to skim-readers. Companion spec caps at 2.5 viewports.
- **Impact at body-paragraph size.** Display-only. Body copy uses the system Aptos/Segoe stack.

---

## Implementation order (recommended)

If applying to `handinhandai-site`:

1. **Land palette + typography (§3, §9, §11)** in `src/styles/hiha-tokens.css`. No layout changes — just better defaults. Ship as one PR.
2. **Sticky process slides (§2) + grid background (§10)** on `/fitness-studio` "how it works" section. Validates the visual language before applying to the homepage.
3. **Numbered scenes with giant numerals (§4) + reduced-motion (§14)** on any list-style section.
4. **RAF coalescing module (§15)** as soon as a second scroll-driven effect lands. Don't wait — retrofitting hurts.
5. **Loader-as-story (§6)** only if a page genuinely has heavy assets to wait for. Don't manufacture wait time.
6. **Full hero spec (companion doc)** once §1–§5 are in production and the team is comfortable with the pattern.

---

## References

- Source teardown: `script.js` and `styles.css` at https://playwithanimation.netlify.app/
- Companion spec: `docs/specs/scroll-cinematic-hero.md`
- Existing tokens: `src/styles/hiha-tokens.css`, `src/styles/fitness.css`
- MDN `requestAnimationFrame`: https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame
- OKLCH explainer: https://oklch.com/
- `100dvh` browser support: https://caniuse.com/viewport-unit-variants
