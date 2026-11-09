# Article reading page — design spec

Source of truth for a builder implementing the real `/articles/[slug]` page
(`src/layouts/ArticleLayout.astro`). Written from two standalone HTML
specimens, not from Claude Design (that tool only exists in the manager's
session):

- `local/design/article-page.html` — the full page, realistic content, both
  published and draft states.
- `local/design/article-meta-components.html` — the five new primitives in
  isolation (answer box, aside, inline Latin term, verified badge, draft
  badge), for upload as a second Claude Design card.

Before/after screenshots: `local/design/article-before-{390,1440}.png` (the
live page today) vs. `local/design/article-after-{390,1440}.png` (the
specimen). Reference screenshots taken for this spec:
`/app-publishing` preview (PR #91) and the live homepage, both at 1440px —
not committed, used only to match type/spacing while designing.

**Every value below is either copied verbatim from the repo's CSS (file
named inline) or marked `INVENTED` with the reasoning.** Nothing here is a
new design token — this codebase has none for radius or spacing (see
`local/design-system/README.md`, "What looks like a bug").

## Do not touch

- `src/styles/home/app.css` — the designer's frozen prototype CSS. Read-only,
  forever. Every `.ah-*`, `.ap-h1`, `.ap-eyebrow`, `.ap-sub` value below was
  copied out of it or out of a component's `<style>` block, never edited.
- `src/styles/home/tailwind.css` — the frozen compiled Tailwind 3 output.
  Same rule.
- Any visual change goes through Claude Design as a specimen first (project
  CLAUDE.md, "UI and visual changes"). This spec and the two HTML files are
  that specimen; a builder implements FROM them, not by inventing on top of
  the real `.astro` files.

## What changes in the real app

Today `ArticleLayout.astro` renders through the generic `Layout.astro` +
Tailwind (`#1f2937` text, `#2563eb` links, `#f3f4f6` answer box — none of it
from `theme.css`). The fix is moving the article page onto the same system
`/app-publishing` already uses: `HomeDocumentShell.astro` +
`src/styles/home/page.css` + a new `src/styles/home/article.css` for the
classes below, instead of `Layout.astro`. `PageHeader.astro` replaces the
current full site `Header.astro` on this page, matching `/app-publishing`'s
own header exactly (same component, same props).

## 1. Reading measure

**680px, ≈74 Hebrew characters per line at 1440px.**

```css
.art-wrap { width: min(680px, calc(100% - 32px)); margin: 0 auto; }
```

This is not invented — it's `local/design-system/patterns/article-section.html`'s
own existing `.article` width, copied verbatim, chosen over the wider
`.pg-wrap--reading` (860px, `page.css`) because that value is sized for a
bullet/FAQ section, not a full column of running prose (its own file's
comment says so). **Measured, not estimated:** the specimen's first body
paragraph is 447 characters across 6 rendered lines at 680px / 1.05rem
Heebo = 74.5 characters/line average. At 390px the wrap is full-width
(`calc(100% - 32px)` = 358px) and averages roughly 40 characters/line —
expected and correct for the viewport, not a defect.

## 2. Type and leading

| Role | Class | Source | Value |
|---|---|---|---|
| H1 (question) | `.art-h1` | `app-publishing/Hero.astro` `.ap-h1`, verbatim | `font-size: clamp(1.9rem, 4.4vw, 3.1rem); font-weight: 900; line-height: 1.18; letter-spacing: -0.02em;` |
| H2 | `.pg-h2` | `page.css`, verbatim | `font-size: clamp(1.7rem, 3.2vw, 2.4rem); font-weight: 800; line-height: 1.2; letter-spacing: -0.01em;` |
| Body | `.art-body p` | `local/design-system/patterns/article-section.html`, verbatim | `font-size: 1.05rem (16.8px); color: hsl(var(--foreground) / 0.88); line-height: 1.75; margin: 0 0 20px;` |
| Answer box | `.art-answer p` | INVENTED weight/size, existing colour | `font-size: 1.08rem; font-weight: 600; color: hsl(var(--foreground)); line-height: 1.7;` — a shade larger and medium-bold so it outranks body text without becoming a second H-level |
| Aside | `.art-aside` | INVENTED | `font-size: 15.5px; line-height: 1.7; color: hsl(var(--muted-foreground));` |
| Byline/meta | `.art-byline` | pattern of `.ap-byline` (Hero.astro), verbatim values | `font-size: 14px; color: hsl(var(--muted-foreground));` |

Note the H1 uses `.ap-h1` **completely unmodified**, not a scaled-down copy.
`.ap-h1` itself carries no `text-align` — the hero's centering came from its
parent `.ap-hero-wrap`. Dropped into a left-flowing article column with no
such wrapper, it is already correctly start-aligned. Zero new numbers
needed for the H1.

Font stack: Heebo (400/500/700/800/900) + JetBrains Mono (500/700), the
exact Google Fonts URL `HomeDocumentShell.astro` already loads:

```
https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700;800;900&family=JetBrains+Mono:wght@500;700&display=swap
```

No third family. No weight outside this set.

## 3. Answer box

```css
.art-answer-eyebrow { /* = .ap-eyebrow, Hero.astro, verbatim */
  display: inline-flex; align-items: center; gap: 8px;
  font-size: 13px; font-weight: 700; color: hsl(var(--primary-text));
  background: hsl(var(--primary) / 0.1); border-radius: 999px; padding: 6px 14px;
  margin-bottom: 14px;
}
.art-answer {
  background: hsl(var(--primary) / 0.06);          /* = .ap-row-highlight's tint, app-publishing.css */
  border-inline-start: 4px solid hsl(var(--primary)); /* INVENTED, see below */
  border-radius: 16px;                               /* = .pg-numbered li's radius, page.css */
  padding: 22px 24px;                                 /* close to .ap-problem-card's 24px, page.css family */
}
```

Composition is new; every number in it already exists somewhere else in the
app. The one genuinely invented decision is the **one-sided 4px
`border-inline-start`**: no existing component uses a directional accent
border. It was chosen over reusing `.ai-note--panel`'s all-around dashed
border because that border already has a meaning on this site — a light,
optional, collapsible note — and the answer box is the opposite: the one
block an AI assistant lifts whole, the single most important thing on the
page. A heavier, one-directional rule reads as "the spine of this block,"
not "a tip." Label text: a small `.art-answer-eyebrow` pill reading **"בקצרה"**
("in short") above the answer, using the exact same pill language the
site already uses for its eyebrow/kicker.

Resolved direction: `border-inline-start` computes to `border-right` under
`dir="rtl"` (verified — the specimen's accent bar renders on the right).
**Never hardcode `border-left`/`border-right` here or anywhere else in this
page; this is the whole point of using logical properties.**

## 4. Byline, dates, verified badge, draft badge

```html
<a href="/about" class="art-author">מאת אלכס גוברמן</a>
<span class="art-dot"></span>
<span>פורסם 4 בנובמבר 2026</span>
<span class="art-dot"></span>
<span class="art-verified">…svg…נבדק לאחרונה 4 בנובמבר 2026</span>
```

- **Author link** (`.art-author`): `color: hsl(var(--primary-text)); font-weight: 700; text-decoration: underline; text-decoration-color: hsl(var(--primary) / 0.4);` — `.ap-soft-link`'s exact underline treatment (Hero.astro / ArticleSection.astro), verbatim. This is the fix for "the author name is a link but isn't styled as one": today it's a bare blue Tailwind link (`#2563eb`), unrelated to the design system.
- **Separator dot** (`.art-dot`): `width: 3px; height: 3px; border-radius: 50%; background: hsl(var(--muted-foreground) / 0.6);` — INVENTED, smallest possible, purely a rhythm mark between three meta facts.
- **"נבדק לאחרונה" badge** (`.art-verified`): `.ct-ai-badge` from `overrides.css`, **verbatim**, no changes — `display:inline-flex; gap:4px; padding:2px 8px; border-radius:999px; background:hsl(var(--primary)/0.14); color:hsl(var(--primary-text)); font-family:"JetBrains Mono",monospace; font-size:10.5px; font-weight:700; letter-spacing:.02em;` plus a small check-circle icon. Using the same chip the homepage already uses for status badges — this is why "last verified" now visually reads as a trust signal instead of undifferentiated grey text.
- **Draft-state label** (`.art-draft-badge`): INVENTED combination — the dashed-border tint pattern of `.ai-note--panel` (`overrides.css`), read as a pill instead of a full-width panel, recoloured from `--primary` to `--accent`. `--accent` (orange) has no existing semantic meaning on this site; it's the brand's decorative second colour (headline underline, logo mark "AI"). Repurposing it for "not live yet" was deliberate — `--destructive` (red) would read as *broken*, which a draft is not. **In the draft state the whole dates row is replaced by this one badge, not appended beside it** — there is no published date or verified date to show yet.

## 5. Body prose, H2 rhythm, list, aside

```css
.art-section { margin-top: clamp(48px, 8vh, 96px); } /* = .pg-section's own clamp, page.css, verbatim */
```

This is what makes an H2 "genuinely break the flow" (problem #5): the gap
above a new section is the same clamp the real site uses to separate full
homepage sections, just applied as a margin inside one narrow column
instead of as padding on a full-bleed section. Paired with `.pg-h2`'s 800
weight (vs. body's default 400), the heading now reads as a hard break, not
a slightly-bigger paragraph.

List (`.art-list`) = `.ap-article-bullets` verbatim
(`app-publishing/ArticleSection.astro`): dot markers, 8px primary-coloured
dots, 10px row gap.

**Correction (issue #156):** the original build of this device put the dot
on `inset-inline-end` / `padding-inline-end`, on the theory that "end" meant
"before the text" in RTL. It does not — `inset-inline-end` in an RTL
document resolves to the physical **left**, the far side from the Hebrew
text it is meant to sit beside. The marker must sit on the logical **start**
side (`inset-inline-start` / `padding-inline-start`), which is the physical
right in RTL — the side reading actually starts from. Every list device on
this page (`.art-list`, `.art-body ul`, and `.ap-article-bullets` in
`ArticleSection.astro`) uses `-start`, not `-end`.

**Ordered lists** (`.art-body ol`, a bare markdown `1. item` list) get the
same circular badge device as `.pg-numbered`/`.pg-num`, reused as a `::before`
counter so a plain numbered list needs no hand-authored markup: a 24px
primary-coloured circle holding the number, `inset-inline-start: 0`, with a
34px `padding-inline-start` hanging indent so a wrapped second line aligns
under the text, not under the badge. Before this fix a bare `<ol>` rendered
with no marker at all — the base reset (`.art-body :where(ul, ol) {
list-style: none; padding: 0 }`) strips the native counter for both tags and
nothing restored one for `<ol>`.

Aside (`.art-aside`) is the one fully new block:

```css
.art-aside {
  margin: 26px 0;
  padding-inline-start: 16px;
  border-inline-start: 2px solid hsl(var(--border));
  color: hsl(var(--muted-foreground));
  font-size: 15.5px;
  line-height: 1.7;
}
```

INVENTED — no aside/pull-quote component exists anywhere in the repo.
Deliberately the **lightest** device on the page: a 2px rule (half the
answer box's 4px) in neutral `--border` (not `--primary`), muted-foreground
text (not foreground), slightly smaller than body. **No italics** —
Heebo has no real italic cut, and a faux-oblique synthetic italic on Hebrew
glyphs renders badly; weight/colour/size carry the distinction instead. One
per section, directly under the paragraph it comments on, never inside a
card (a card would make it compete with the numbered-procedure cards for
visual weight).

## 6. Inline Latin terms

```css
.art-term {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.86em;
  color: hsl(var(--foreground));
  background: hsl(var(--foreground) / 0.035);  /* = .sb-badge's tint, overrides.css */
  border: 1px solid hsl(var(--foreground) / 0.14); /* = .sb-badge's border, overrides.css */
  border-radius: 8px;   /* the smallest recurring radius in the system (see local/design-system/foundations/spacing-radius-shadow.html: "8px — small chip") */
  padding: 1px 7px;
  unicode-bidi: isolate;
  direction: ltr;
  white-space: nowrap;
}
```

Usage: `<span class="art-term">Play Console</span>`,
`<span class="art-term">package name</span>`,
`<span class="art-term">versionCode</span>`, etc., wrapped around the term
at the point it's written in the Hebrew sentence — not pulled out to a
glossary.

**Why `unicode-bidi: isolate` + `direction: ltr` and not just styling:**
this is the actual fix for problem #7, not decoration. Without it, a
multi-character Latin run sitting inside an RTL paragraph can have its
internal character order or its boundary with the surrounding Hebrew
resolved unpredictably by the browser's bidi algorithm, which is what
"breaks the RTL flow visibly" in the before-screenshot. `isolate` tells the
browser to resolve the span's own internal direction independently of the
Hebrew paragraph around it, so `Play Console` always reads left-to-right
inside itself regardless of what Hebrew sits on either side.

**`white-space: nowrap` is required**, not optional — found live in this
spec's own iteration (see "Iteration" below): a two-word term like `Play
Console` or `package name` will otherwise line-wrap *inside* the chip, and
the browser draws a separate border fragment per line, which looks broken.
At 390px the longest term used here (`Trusted Web Activity`, three words)
still fits on one line inside the 358px column — verified in the specimen
screenshot, no horizontal scroll introduced.

## 7. Comparison table at 390px

Two markup blocks, CSS-toggled by breakpoint — this is not a new technique,
it's `/app-publishing`'s own pricing table pattern (`.ap-table-scroll` /
`.ap-price-cards`, `app-publishing.css`) reused for a different table:

```css
.art-table-scroll { overflow-x: auto; border-radius: 18px; border: 1px solid hsl(var(--border)); }
.art-table { width: 100%; border-collapse: collapse; min-width: 560px; background: hsl(var(--card)); }
/* th/td, thead, row-header, highlight-row rules = .ap-table* verbatim, app-publishing.css */
.art-cards { display: none; }
@media (max-width: 767px) {
  .art-table-scroll { display: none; }
  .art-cards { display: grid; gap: 14px; }
}
.art-card { background: hsl(var(--card)); border: 1px solid hsl(var(--border)); border-radius: 16px; padding: 16px 18px; }
/* header/dl/dt/dd = .ap-price-card* verbatim, app-publishing.css */
```

≥768px: a real `<table>`, horizontal-scroll wrapper as a safety net (not
needed at 1440 with a 3-column table, kept for parity with the real
pricing table and for a 4th-column future case). <768px: each table column
becomes its own card (`<h3>` + a `dt`/`dd` definition list), one row of the
original table per `dt`/`dd` pair. **This is a straight reuse of an
existing, already-shipped mobile pattern solving the identical problem on
`/app-publishing`'s pricing table** — not a new invention. Breakpoint
(767/768px) matches exactly, for consistency across the two pages.

**Builder decision, not a design decision:** whether to extract
`.ap-table*`/`.ap-price-card*` into `page.css` as shared primitives (since
the values are now identical across two different tables) or keep
`.art-table*`/`.art-card*` as a literal duplicate under the article's own
prefix. Either is correct CSS; it's an architecture call for whoever owns
`page.css` vs. `app-publishing.css`'s scope boundary.

## 8. Procedure + single CTA

`.pg-numbered`/`.pg-num` (page.css, verbatim) for the steps. The CTA button
after the procedure is `.ah-btn.ah-btn-primary` (app.css, verbatim —
background, shine-free box-shadow, hover lift, focus ring all unchanged),
paired directly underneath with `.ai-note` (overrides.css, verbatim) — the
same "an AI answers first on WhatsApp" disclosure every WhatsApp CTA on the
real site already carries. **Exactly one CTA on the page**, placed after
the procedure, not repeated elsewhere.

## 9. Sibling links

```css
.art-sibling-card {
  display: flex; flex-direction: column; gap: 6px;
  background: hsl(var(--card)); border: 1px solid hsl(var(--border));
  border-radius: 16px;         /* = .pg-numbered li's radius */
  padding: 18px 20px;
  transition: transform 0.2s, border-color 0.2s, box-shadow 0.3s;
}
.art-sibling-card:hover {
  transform: translateY(-2px);
  border-color: hsl(var(--primary) / 0.4);              /* = .ap-soft-link's underline tint, reused as a border colour */
  box-shadow: 0 12px 24px -12px hsl(var(--shadow) / var(--shadow-a)); /* the documented "small card lift" value, foundations/spacing-radius-shadow.html */
}
```

Two cards, `grid-template-columns: 1fr 1fr` ≥640px, `1fr` below. Each card:
a small kicker ("למידה"), a bold title with the same left-pointing arrow
icon `.tr-foot-link` already uses for "continue reading" links (that icon
already points the correct direction for RTL "forward" — no mirroring
needed), and a one-line description. Replaces the current plain `<ul><li>`
of bare slugs with no styling.

## RTL rules (binding, apply everywhere on this page)

- `<html lang="he" dir="rtl">` at the document root (already true via
  `HomeDocumentShell.astro`). Components re-assert `dir="rtl"` on their own
  root element, matching how every existing `.astro` component in this
  system does it (`PageHeader.astro`, `ArticleSection.astro`, etc.) — not
  because it's load-bearing once the root is set, but for consistency with
  the rest of the codebase.
- **Logical properties only**, never physical left/right, anywhere in this
  page's new CSS: `border-inline-start`, `padding-inline-start`,
  `inset-inline-end`, `margin-inline`. Verified in the specimen that
  `border-inline-start` on `.art-answer` resolves to the visual right edge
  under `dir="rtl"` — the one case worth double-checking by hand, since a
  physical-property mistake here would put the accent bar on the wrong side
  silently.
- **Latin terms**: wrap in `.art-term` (section 6) — `unicode-bidi: isolate`
  + `direction: ltr`, not just font/colour styling. This is a correctness
  fix, not decoration.
- **Numbers**: plain Western Arabic digits inline in Hebrew text (`4
  בנובמבר 2026`, `5` in a numbered-step badge) need **no special wrapper**.
  Digits are weak-direction characters under the Unicode bidi algorithm and
  resolve correctly inside an RTL paragraph automatically.
- **Currency**: if a shekel figure appears in body copy, the site's own
  convention is amount-then-symbol — `1,290 ₪`, not `₪1,290` — matching
  `/app-publishing`'s pricing table and `src/styles/home/overrides.css`'s
  own comment about `₪100,000`. This page's specimen doesn't use currency,
  but a future edit should follow this order.
- **Icons**: brand/communication icons (WhatsApp, the logo mark) are never
  mirrored — copied pixel-for-pixel from the real components. The sibling
  link's "continue reading" chevron is already drawn pointing left, which
  is the correct "forward" direction for RTL reading flow, so it is used
  as-is, not flipped.
- **Table row headers** (`<th scope="row">`) are `text-align: right` — the
  reading-start side in RTL — matching `.ap-table`'s own rule verbatim.
  Column data cells stay centered.

## Breakpoints

| | 390px | 768px | 1440px |
|---|---|---|---|
| `.art-wrap` | `calc(100% - 32px)` = 358px | `calc(100% - 32px)` = 736px (still under the 680 cap at this width... see note) | 680px (capped) |
| Comparison table | `.art-cards` (stacked definition-list cards) | `.art-table-scroll` (real table) — switch is at 767/768px | `.art-table-scroll` |
| Sibling links | 1 column | 1 column below 640px, else 2 | 2 columns |
| H1 | `clamp` floor ≈ 1.9rem | mid-clamp | `clamp` ceiling 3.1rem |
| H2 | floor 1.7rem | mid | ceiling 2.4rem |

Note on 768px: `min(680px, calc(100% - 32px))` means the reading column
hits its 680px cap once the viewport passes 712px — so at exactly 768px the
column is already at its fixed 680px width, with the table switching to
its full `<table>` form at the same 767/768px boundary. No dead zone where
the table is a table but the column is still fluid-narrow.

## Iteration

Two passes. First render (1440 + 390) was correct everywhere except one
bug: two-word Latin terms (`Play Console`, `package name`) line-wrapped
*inside* their own chip at the exact point the words broke, because
`.art-term` had no `white-space: nowrap`. Fixed by adding it (section 6),
re-screenshotted both widths — confirmed no overflow at 390px even for the
three-word `Trusted Web Activity`, confirmed the answer box's
`border-inline-start` resolves to the right edge under `dir="rtl"` via
computed-style check, confirmed the sticky header is a single DOM node (a
duplicate "second header" visible mid-page in the full-page *stitched*
screenshot is a known Playwright full-page-screenshot artifact with
`position: sticky` elements — confirmed via `querySelectorAll` returning 1
— not a real rendering bug; a normal scrolling user only ever sees one).
