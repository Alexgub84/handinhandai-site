# Hand in Hand Agents — Design System

> AI teammates for high-performing teams.

Hand in Hand Agents (HIHA) is a small consultancy / studio that builds **AI agents** for SMBs and operations-heavy teams. The pitch line on the homepage is **"Hi Performing AI Teammates for High Performing Teams"** — the agents handle the structured, repetitive work (CRM updates, follow-ups, qualifying leads, generating reports, replying to inquiries on WhatsApp/Instagram/web) so the human team can focus on judgement work and relationships.

The brand is built around the **handshake metaphor** — humans and AI working *hand in hand*. The single brand mark is a circular illustration of a human hand and a green "circuit-pattern" hand clasped together. The CTA is always **"Talk to Us / Connect on WhatsApp"** + **"Schedule a Call"** — sales is human, conversational, low-friction.

## Sources

This design system was reverse-engineered from a single Figma file:

- **Figma file:** `Hand in Hand Agents.fig` (mounted as a virtual filesystem during build)
- **Pages:** `/Main` (22 frames — desktop + mobile web) and `/Estimates` (7 frames — internal estimation timeline / process scratchpad)
- **No external codebase, no live URL was provided.** The contact email surfaced in the footer is `contact@handinhandagents.com`.

If you have access to the Figma, the relevant frames are:

| Frame | What it is |
|---|---|
| `Main / HIHA-Web` | Homepage (hero, "what we do", pain-points grid, CTA, footer) |
| `Main / HIHA-Web2` | About page ("Meet Alex", founder portrait, process steps) |
| `Main / HIHA-Web3` | Services / Products page |
| `Main / HIHA-Web4` | Long-form page combining solutions, testimonials, "Get Connected Live" |
| `Main / HIHA-Web-Mobile` | Mobile menu drawer |
| `Main / Color`, `Typography`, `Logo`, `Buttons`, `Guidlines`, `Break-Points` | Foundation specimens |
| `Estimates / *` | Internal process / numbered ideas list — not customer-facing |

---

## Index

| File / folder | What it holds |
|---|---|
| `colors_and_type.css` | Tokens (CSS vars) for color, type, spacing, radii, shadows + semantic defaults for `h1–h6, p, body`. **Drop this on any page** and you get HIHA-correct defaults. |
| `assets/` | Logo, founder portrait, hero photography, illustration assets, WhatsApp + phone icons. Copy these into mocks rather than redrawing. |
| `preview/` | Small HTML cards used to populate the Design System tab — color swatches, type specimens, components, etc. |
| `ui_kits/web/` | The HIHA marketing-website UI kit. Modular React components (Header, Hero, PainPoint, ProcessStep, Testimonial, CTA, Footer) + an `index.html` that demonstrates a click-thru of the homepage. |
| `SKILL.md` | Skill manifest — makes this folder portable as a Claude/Agent Skill. |
| `README.md` | This file. |

---

## CONTENT FUNDAMENTALS

The voice across the site is **friendly, plain, slightly informal, sales-led**. It is not enterprise B2B-stiff. It is also not playful/quirky — there is no humor and **zero emoji** in body copy (the only emoji on the site is the language-toggle flag pair: `EN 🇬🇧 / HE 🇮🇱`).

**Person & address**
- Mostly **second person ("you", "your team", "your business")** — the reader is the customer.
- Switches to **first-person plural ("we build…", "our team", "we are building…")** when describing the company.
- The about page uses **first-person singular ("Meet Alex… How I work… Let me guide you")** — the founder personally narrates.

**Casing**
- Headlines are **Title Case-ish but loose** — e.g. *"Hi Performing AI Teammates for High Performing Teams"*, *"Want to see how an AI agent can help your daily work? Talk to us."* Words like "AI" stay all-caps; small words ("for", "an") stay lower; otherwise lead caps. Punctuation is informal — periods and question marks are fine in headlines.
- Section labels are **Sentence case** ("Your Team Member", "Returns Precious Time", "What we do?", "Our Vision").
- Pill / chip labels are **ALL CAPS at 10px Poppins-Medium** ("USER PAIN").
- Buttons are **Title Case** ("Talk to Us", "Schedule a Call", "Connect on Whatsapp").

**Length & rhythm**
- Hero headlines are **two-line, ~10 words**, ending in a period.
- Subheadlines are one sentence, **~15–25 words**, sentence case.
- Paragraphs are short — 2–3 sentences at most.
- Lots of **chip/capsule lists** instead of bullets. Pain points and capabilities are surfaced as rounded pills laid out across multiple rows, not as `<ul>`.

**Vocabulary**
- "Teammate" and "team member" instead of "AI agent" wherever possible. The product is humanized.
- "Hand in Hand" appears as a recurring eyebrow / motto: *"AI that works 'Hand in Hand'"* (note the typographic curly quotes in headers).
- Outcomes-led — "**returns precious time**", "**uplift your business**", "**reliably in the background**", "**plug into your existing tools**". Avoid jargon (no "LLM", "agentic", "RAG", "multi-modal").

**Examples to study**
- Hero: *"Hi Performing AI Teammates for High Performing Teams"* / *"One more team member that does all repetitive tasks, automate decisions and connects with the tools you already love."*
- CTA section: *"Want to see how an AI agent can help your daily work? Talk to us."* / *"Connect with our team directly via Whatsapp or schedule a call for later"*
- About: *"Meet Alex, Making AI agents your Teammates"* / *"Let me guide you and take this Step-by-Step. Book a call"*
- Footer tagline: *"We are building your team an effective Teammate"* / *"Always here and available for any questions"*

> ⚠ Minor copy fixes we noticed but did **not** correct: *"do all repetitive tasks, **automate decisions**"* (mixed verb form), *"WhatsApp"* is sometimes spelled *"Whatsapp"* in CTAs. The kit preserves exactly what's in Figma — fix at deploy time if you ship.

---

## VISUAL FOUNDATIONS

**Overall vibe.** Light, airy, **warm-but-corporate**. White backgrounds. Big diffuse pastel "shade" blobs behind heroes. Big bold navy display type. Long pill buttons in a green→orange gradient. Photography is bright and high-key. There is a deliberate hand-made looseness in the way headlines wrap mid-phrase and capsules stagger across rows — the layout is not on a strict grid.

**Backgrounds.**
- Pages are mostly **pure white (`#FFFFFF`)**.
- Each major section sits on top of a giant **`Shade` ellipse** — a 1267×1267 circle filled with a 3-stop linear gradient (`mint → sky → peach`, all at **25% alpha**) — that bleeds off the canvas. It's the brand's signature "atmospheric pad". Multiple `Shade` blobs are stacked behind long pages.
- The footer is a **flat `#121212` plate** — sharp, no gradient.
- No textures, no grain, no patterns, no full-bleed photographs as backgrounds.

**Color usage.**
- Solid green (`#93C83E`) is used as the primary accent on chips, numbered step circles, and underlines.
- Orange (`#FF9900`) is the secondary — appears in "USER PAIN" pills, CTA gradient end, and shade blobs.
- The CTA gradient (`green → orange`, top to bottom) is the most recognizable element. Always vertical, always those two stops.
- Navy (`#1A2842` / `#202939`) does ALL the heavy lifting for text — there is no pure black body copy.
- Blue (`#006BFF` / `#5FA8FF`) appears only as a fallback color behind the founder photo and inside the shade gradient.

**Typography.**
- **Heebo** (variable, 100–900) — the brand-supplied display + UI face. Used for **everything**: h1–h6 (Bold/ExtraBold weights, tracked at `-0.02em`), navigation, micro-labels, and Hebrew body. Self-hosted from `fonts/Heebo-VariableFont_wght.ttf`.
- **Poppins** is kept as a Latin-only body fallback (`--hiha-font-body-latin`) for cases where the slightly geometric SaaS look is preferable. Loaded from Google Fonts.
- **Outfit** is retained as a secondary fallback in `--hiha-font-ui`, but Heebo is preferred. Loaded from Google Fonts.
- A single 48px **Big Shoulders Display** label appears once in the figma (on a process tile) — treat as one-off, not part of the system.
- Hero headlines often **break to two lines manually with `\n`**, not on word-wrap. Respect the explicit line breaks.

**Cards.**
- The dominant pattern is a **white card with a thick 8px mint (`#D9EEDA`) border + 8px radius**. Looks like a matted picture frame. Used for image / video tiles in the "process" section.
- Lighter pattern: **white card, 1px hairline border at 16% navy, 16–24px radius** — used for testimonials and pain-point chips.
- Tinted pattern: **green-tinted gradient card** (`mint → white`, 8px radius, 1px green border) used for numbered process steps.
- An **orange-tinted variant** (1px `rgba(255,153,0,0.5)` border, white fill, 16px radius) is used for "USER PAIN" cards.
- Cards do not have heavy drop-shadows. The "tools" floating chips have a small offset shadow `4px 4px 4px rgba(32,41,57,0.10)`.

**Buttons.**
- **Primary** = pill (32px radius), green→orange gradient, 24px L/R padding, 12px Y, 16px Poppins-Medium white text, 24×24 white WhatsApp glyph on the left. Always says "Talk to Us" or "Connect on Whatsapp".
- **Secondary** = pill, white fill, 1px navy-16% hairline border, black text + black phone icon. Always says "Schedule a Call".
- **Tertiary / lang switcher** = 32px-radius pill, white fill, 1px white border, **soft drop shadow** (`shadow-sm`), 8px Y padding, 16px Poppins-Medium muted-navy. Currently displays `EN 🇬🇧 ⌄`.
- **No visible hover/press states** in the figma. We assume **opacity dip 0.9 on hover, 0.95 + scale(0.98) on press** — flag with the user before shipping.

**Chips / capsules.**
- "Pain point" chips: **white fill, 1px 16%-navy border, 64px radius (full pill), 24px×32px padding, 16px Poppins navy text**. They tile horizontally with 16px gap and the rows are deliberately **off-center** (each row is shifted ±15–35px) so it looks human-scattered, not a strict grid.
- "Solution" chips (intro group): **green→orange gradient pill, 64px radius, 32px×24px padding, 20px Poppins-Medium white text**. Used as section openers.
- Tiny tool-integration cards: **white tile with 4px green left-bar, 4px shadow, 16px Outfit grey text** — looks like a Mac app icon list.

**Borders & strokes.** Default hairline is **1px `rgba(32,41,57,0.16)`**. Card frames use **8px solid mint**. The `<Guidlines>` reference frame uses a 4px stroke at white-10% to mark the "holding area" of a layout.

**Shadows.**
- **`shadow-sm`** (`0 2px 4px -2px rgba(0,0,0,.06), 0 4px 8px -2px rgba(0,0,0,.10)`) — language pill, white CTA.
- **`shadow-card`** (`4px 4px 4px rgba(32,41,57,.10)`) — floating tool chips.
- No long, soft, blurred ambient shadows. No inset shadows. No glow effects.

**Corner radii.**
- 4 / 8 / 16 / 24 / 32 / 64 — radii cluster tightly. **Pills (32 / 64)** are the brand's signature shape; everything else uses the smaller set.

**Transparency & blur.**
- The sticky top **menu bar** uses `rgba(255,255,255,0.25)` + `backdrop-filter: blur(8px)` — frosted glass over the shade gradient.
- Everywhere else is opaque. No frosted overlays inside cards.

**Layout rules.**
- Design canvas is **1440px wide**.
- Content is contained in a **1064px** centered band; `(1440 − 1064) / 2 = 188px` gutter on each side.
- Breakpoints: **0 / 430 (mobile) / 990 (tablet) / 1064 (desktop)** per the `Break-Points` reference frame.
- Sections are vertically generous — hero blocks sit `~260–400px` from top, with `~40–80px` gaps between major regions.
- Within sections, capsules use **24px `gap`**, paragraph blocks use **`flex-column gap: 24px`**.

**Imagery & color vibe.**
- Photography is **bright, high-key, neutral-to-warm white background**. Subjects (e.g. founder portrait) shot on white with a single light. No teal-orange grade, no film grain, no b&w.
- The hero photos (kitchen / lifestyle scenes) lean warm — natural light, soft contrast. They feel "real workplace" not stock.
- Illustration is limited to the brand mark itself — a flat 2-color line drawing of two clasped hands inside a navy ring.

**Animation.**
- The figma is static — **no motion is documented**. We assume the brand prefers **gentle fades / slide-up on scroll, 200–400ms, ease-out**, consistent with the calm, premium-but-friendly tone. Do **not** use bouncy, over-the-top spring animations. Document and confirm with the team before shipping.

**Hover / press states.** Not specified. Recommendation:
- Hover: 90% opacity OR shift to a slightly darker tone of the same color.
- Press: 95% opacity + `scale(0.98)`.
- Links in body copy underline on hover.

---

## ICONOGRAPHY

The figma uses a **very small, hand-picked icon set** — there is no built-in icon font, no library reference. Every icon is an inline SVG drawn at 24×24 with a single fill.

- **WhatsApp glyph** — solid white phone-with-callout, used inside the green CTA. Stored at `assets/icon-whatsapp.svg`.
- **Phone glyph** — solid black handset, used inside the white "Schedule a Call" CTA. Stored at `assets/icon-call.svg`.
- **Caret-down (chevron)** — 8×4 V-shape, used in the language pill and any dropdown affordance.
- **Star** — small filled star sprite at `assets/star.png`, used in testimonial ratings (5×).
- **Close (×)** — only on the mobile menu drawer; two crossed strokes, 16×16 inside a 32×32 hit target.

**Emoji** appear only in the language switcher: **`EN 🇬🇧`** / **`HE 🇮🇱`**. Nowhere else.

**Unicode** characters used as icons: **none**. No checkmarks, arrows, or bullets done with Unicode — those are SVGs.

**For new icons** when extending the system:
- We've linked **[Lucide](https://lucide.dev)** (24px stroke icons, 1.5px stroke weight) from CDN as the closest match in stroke weight and silhouette. **This is a substitution and the team should validate it before going to production.**
- If you need a *filled* icon, fall back to **Phosphor Fill** at the same size — the WhatsApp/call icons in the figma are filled, not stroked, so a fill set matches that pair best.

**Do NOT** use FontAwesome, Material Icons, or emoji as icons. They don't match the calm, sparse aesthetic.

---

## Caveats / known unknowns

- **Fonts** — Heebo is brand-supplied and self-hosted from `fonts/`. Poppins / Outfit fallbacks load from Google Fonts.
- **No motion specs** — see Visual Foundations note. Confirm with the team.
- **No dark mode** in the figma.
- **No real product UI** — HIHA is a service/consultancy. The "product" is the website + founder + WhatsApp. There is no app to recreate beyond the marketing site.
- **The about page features a founder portrait** (cropped circular, 72×72 navigation use, 432×432 hero use). We've kept this as `assets/founder-portrait.png` but the photographed person should approve before redistribution.
- **Hebrew (RTL) support** is implied by the language-switcher `EN / HE` but no RTL frames exist in the figma. RTL adaptation will need to be designed.

## How to use this kit

```html
<!doctype html>
<html lang="en">
<head>
  <link rel="stylesheet" href="../colors_and_type.css">
</head>
<body>
  <h1>Hi Performing AI Teammates<br>for High Performing Teams</h1>
  <p>One more team member that does all repetitive tasks…</p>
  <a class="hiha-btn-primary" href="…">Talk to Us</a>
</body>
</html>
```

Components live in `ui_kits/web/`. Open `ui_kits/web/index.html` for a click-thru of the demo site.
