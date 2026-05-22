# Homepage Cinematic — Image Generation Brief

**Status:** Awaiting assets
**Owner:** Alex
**Target page:** `/`, `/he/`, `/en/`
**Companion spec:** `docs/specs/scroll-cinematic-hero.md`, `docs/specs/scroll-cinematic-techniques.md`
**Last updated:** 2026-05-22

---

## How to use this doc

The homepage cinematic ships today with pure CSS placeholders (text labels for app cards, fallback OG image, no founder portrait). This brief contains the exact image-generation prompts for an LLM image tool (Midjourney v6+, Sora, Veo, Kling, Nano-Banana, DALL-E 3) plus the destination paths where each file must land. Drop assets in the listed paths and they auto-wire — no code change needed for items 1-3 and 5-9. Items 4 (dashboard) and 6 (video frames) require a small follow-up code task.

**Generate any subset.** Priority order is `#3 portrait → #4 dashboard → #1 OG card → #2 integration logos`. Those four lift the page from "abstract" to "real product backed by a real person."

---

## Brand palette — paste into every prompt

| Token | Hex | Use |
| --- | --- | --- |
| `--c-bg` | `#0a0c10` | Deep matte navy-black background |
| `--c-bg-2` | `#0f1218` | Secondary dark surface |
| `--c-ink` | `#f6f3e9` | Warm off-white text |
| `--c-cream` | `#f4ede0` | Headlines on dark, paper-slide backgrounds |
| `--c-gold` | `#f1b95c` | Single warm-gold accent — kickers, CTAs, glow |
| `--c-paper-ink` | `#050505` | Text on cream/gold slides |

**Mood keywords:** editorial, cinematic, premium, restrained, slightly brutalist. Apple keynote × Stripe × old Bloomberg terminal. **Avoid:** SaaS template aesthetic, stock-photo people, generic chart widgets, emojis, gradients used for "fun", playful illustrations.

---

## Folder layout — where each file goes

```
public/
  og/
    home.jpg                          # #1 — homepage OG share card (1200x630)
  integrations/
    gmail.svg                         # #2 — 10 integration marks
    calendar.svg
    drive.svg
    slack.svg
    hubspot.svg
    notion.svg
    sheets.svg
    linear.svg
    stripe.svg
    zoom.svg
  team/
    alex.jpg                          # #3 — founder portrait (800x1000)
  mocks/
    dashboard.png                     # #4 — "what's pending this week" mockup (1400x900)
  clients/
    logo-1.svg ... logo-5.svg         # #5 — trusted-by strip (optional)
  hero-frames/
    frame-001.jpg ... frame-300.jpg   # #6 — cinematic hero video frames (optional)
  textures/
    chaos-bg.jpg                      # #7 — Ch1 backdrop (optional)
    rings.jpg                         # #8 — engineering chapter backdrop (optional)
  favicon-512.png                     # #9 — favicon refresh (optional)
  favicon-180.png
  favicon-32.png
```

The empty folders are committed with `.gitkeep` placeholders so the structure exists before assets arrive.

---

## Prompts

### #1 — Homepage OG Share Card

**File:** `public/og/home.jpg` (1200×630, JPG, ≤ 280KB)
**Wires automatically:** yes — already referenced by `CinematicLayout` via `ogImage` default fallback. To use this specific file, the homepage will need its `ogImage` prop set to `/og/home.jpg`.

```
Editorial-style social share card, 1200x630, dark cinematic background #0a0c10
with subtle architectural grid lines in faint warm gold. Left side: bold massive
condensed sans-serif headline "Stop running software. Start running your business."
in cream #f4ede0. Small gold kicker "HAND IN HAND AI" in uppercase above. Right
side: a single glowing warm-gold orb (size ~30% of canvas height) with soft radial
bloom and inner highlight, suggesting an AI presence. Faint geometric tab/window
shapes drift in background at low opacity, partly visible. Negative space
dominates. Magazine-cover feel, NOT a SaaS template. Premium. No stock-photo
people, no obvious icons, no emojis. Aspect 1200x630. Export JPG under 280KB.
```

---

### #2 — Integration Logos (10 SVGs)

**Files:** `public/integrations/<name>.svg`
**Wires automatically:** no — requires a small code update to swap the text labels in `src/components/scroll-hero/data/scenarios.ts` for `<img>` tags. Roughly 10 lines of TSX.

**Path A — real brand marks (preferred, free, legal if used as factual reference):** Download official SVGs from each tool's brand-assets page.

| Tool | Source |
| --- | --- |
| Gmail | brandfetch.com/gmail OR google.com/gmail/about/static/images |
| Google Calendar | brandfetch.com/calendar.google.com |
| Google Drive | brandfetch.com/drive.google.com |
| Slack | slack.com/brand-guidelines |
| HubSpot | hubspot.com/brand-guidelines |
| Notion | notion.so/brand |
| Google Sheets | brandfetch.com/sheets.google.com |
| Linear | linear.app/brand |
| Stripe | stripe.com/newsroom/brand-assets |
| Zoom | brand.zoom.us |

After download, strip fills so logos inherit `currentColor`:

```bash
sed -i '' 's/fill="[^"]*"/fill="currentColor"/g; s/stroke="[^"]*"/stroke="currentColor"/g' public/integrations/*.svg
```

**Path B — generated abstract pictograms** (safer if uncertain about brand-use permission):

```
Minimalist abstract pictogram representing [GMAIL / CALENDAR / DRIVE / SLACK /
HUBSPOT / NOTION / SHEETS / LINEAR / STRIPE / ZOOM], single-line monochrome design,
1.5px stroke weight, geometric, 64x64 viewport. Pure SVG-friendly shapes only (no
gradients, no shadows). Subtle and recognisable without being a literal logo. White
on transparent background. Editorial poster style, similar to airport wayfinding
pictograms.
```

---

### #3 — Founder Portrait

**File:** `public/team/alex.jpg` (800×1000, JPG, ≤ 200KB)
**Wires automatically:** no — small code update needed to add a portrait card to Chapter 5 or Chapter 6.

```
Editorial founder portrait, head and shoulders, three-quarter angle facing slightly
right. Subject wearing a dark neutral top (charcoal, navy, or black — NO branded
clothing). Backdrop: deep matte black-blue #0a0c10, gradient lighting from upper
right with warm tungsten rim light hitting the right cheek and shoulder
(suggesting the gold accent #f1b95c). Natural skin tone, neutral expression,
looking just past camera. Shallow depth of field, sharp on the eyes. Editorial
magazine aesthetic (Monocle, Wired profile). 4:5 aspect ratio (800x1000). NO
smiles for stock-photo camera, NO white backdrop, NO corporate-headshot lighting,
NO logos or branding visible.
```

**If no photographer:** take phone selfie against a dark wall with a single warm desk lamp upper-right, then run through Sora image-edit / Nano-Banana:

```
Edit this portrait: replace background with a deep matte navy-black #0a0c10. Add
warm rim lighting from upper right with tungsten gold colour cast. Increase
contrast slightly. Keep face natural, no skin smoothing, no eye enlargement. Crop
to 4:5. Editorial magazine grade.
```

---

### #4 — Dashboard Mockup (replaces vignette #3 "What's pending this week?")

**File:** `public/mocks/dashboard.png` (1400×900, PNG, 24-bit, sharp text)
**Wires automatically:** no — small code update to replace text card with `<img>` in `WorkflowVignettes.tsx` for the third vignette.

```
Cinematic UI mockup of a dark-themed AI operations dashboard, 1400x900, taken at
slight perspective angle (10 degrees rotated, as if a screen photographed from a
desk). Background of dashboard: deep navy #0a0c10. Layout: left sidebar (narrow,
~200px) with 6 monochrome icons stacked vertically, soft glow on the active one
in warm gold #f1b95c. Main area: a single bold question rendered large in cream
#f4ede0 — "What's pending this week?" — followed below by a list of 4 result
rows. Each row shows: small icon, one-line summary text in cream, a small gold
pill on the right showing source (e.g. "GMAIL", "CRM", "SLACK"), and a faint
timestamp. Subtle gold underline accents. Editorial monospace OR clean condensed
sans for the headline. NO chart widgets, NO graphs, NO stock-photo people. Empty
space dominates. Premium minimal feel — Linear or Things-app aesthetic, NOT
Salesforce. Output 1400x900 PNG, 24-bit, sharp text.
```

---

### #5 — Client Logos Strip (optional)

**Files:** `public/clients/logo-1.svg` … `logo-5.svg`
**Wires automatically:** no — requires a new "trusted-by" section between Chapters 3 and 4 (~20 lines of Astro).

**Path A — real client logos:** download from each client's press kit, convert to mono `currentColor`, list each client below as you confirm permission:

- [ ] Client 1 — name + permission status
- [ ] Client 2 — name + permission status
- [ ] …

**Path B — placeholder while permissions land:**

```
6 fictional minimalist logo lockups for a "Trusted by" strip on a dark website,
each one different invented brand style (one wordmark serif, one geometric mark
+ ALL CAPS wordmark, one circular monogram, one stacked initials, one underlined
sans-serif, one icon-only). All in monochrome cream #f4ede0 on transparent
background. Output as one PNG strip 1600x80, evenly spaced with 60px gaps.
Editorial newspaper-masthead feel. NO real brand names, NO crowns/stars/leaves
clichés.
```

---

### #6 — Hero Cinematic Video (optional, big upgrade)

**Files:** `public/hero-frames/frame-001.jpg` … `frame-300.jpg` (1080×1920 each, ~30-50KB each)
**Wires automatically:** no — requires building a canvas frame-sequence renderer to replace the current DOM-card animation. ~150 lines of TSX (see `docs/specs/scroll-cinematic-techniques.md` §13).

**Generator-agnostic prompt (Kling 1.6 / Sora / Veo / Runway):**

```
Vertical 9:16, 10 seconds, 30fps, cinematic dark scene. Camera locked, no
movement. Beat 1 (0-2.5s): empty dark space, deep matte navy #0a0c10 with faint
warm gold grid pattern barely visible. Suddenly 10 floating glassy
semi-transparent rectangular panels (representing app windows) drift into view
from edges, rotating slightly, tumbling chaotically. Each panel has a soft
warm-gold dot of light glowing on its surface. The panels overlap, jostle, fill
most of the frame. Beat 2 (2.5-6s): the panels slow, then begin moving toward
the center of the screen, shrinking as they go, rotating to align. Their gold
dots brighten as they converge. Beat 3 (6-8.5s): all panels merge into a single
glowing warm-gold sphere at frame centre, golden bloom radiating outward. The
orb pulses gently, alive. Beat 4 (8.5-10s): orb settles, faint inner shimmer.
Cream-colored particles drift slowly around it. Style: cinematic, premium,
restrained, NOT cartoonish. Reference: opening title sequence of a tech
documentary. No text. No people. No literal product. Render in high contrast
with deep blacks. Aspect 9:16. Export as MP4 1080x1920.
```

**Negative prompt (Kling/Sora):** `cartoon, low quality, text, watermark, blurry, stock photo, generic, icons, logos, people, faces`

**After generation**, convert MP4 to frame sequence:

```bash
ffmpeg -i hero.mp4 -vf fps=30,scale=1080:1920 -q:v 4 public/hero-frames/frame-%03d.jpg
```

Expected output: ~300 frames, ~30-50KB each, total ~12 MB.

---

### #7 — Chaos Backdrop Texture (optional)

**File:** `public/textures/chaos-bg.jpg` (2400×1600, JPG, ≤ 320KB)
**Wires automatically:** no — small CSS update to set as background-image on `.ch-chaos__stage`.

```
Cinematic still, 2400x1600, dark editorial scene. Deep matte navy #0a0c10
background with very subtle warm-gold architectural grid. Scattered across the
frame: 25-30 ghostly translucent rectangular glass panels, each rotated at
random angles between -12 and +12 degrees, sizes varying from small to medium,
depth-blurred (some sharp, some out of focus). Each panel emits a faint internal
glow in muted tones — some warm gold, some cool blue. Panels overlap, fill the
middle 70% of the frame, sparse at edges. Mood: weightless, suspended, the
moment before something collapses. Wide cinematic framing. NO icons, NO logos,
NO recognisable UI, NO text. Pure abstract window-shapes. Export 2400x1600 JPG,
320KB max.
```

---

### #8 — Engineering Chapter Backdrop (optional)

**File:** `public/textures/rings.jpg` (1600×1600, JPG, ≤ 220KB)
**Wires automatically:** no — small CSS update to set as background on `.slide--dark-2`.

```
Square 1600x1600 dark cinematic backdrop for a website section. Deep matte navy
#0a0c10. Centred composition of fine concentric warm-gold #f1b95c rings (like a
radar or signal-strength visualisation), 8-10 rings, hairline weight, with subtle
gold glow. Faint architectural blueprint grid behind the rings. Slight
noise/grain texture overlay (very subtle, like a film still). Negative space
dominates. Premium technical aesthetic — think defence-contractor brochure
crossed with a Vinyl record sleeve. NO text, NO recognisable shapes other than
rings and grid. Output JPG 1600x1600, under 220KB.
```

---

### #9 — Favicon Refresh (optional)

**Files:** `public/favicon-512.png`, `public/favicon-180.png`, `public/favicon-32.png`, plus update `public/logo.png` if you want the topbar mark to match.
**Wires automatically:** no — `CinematicLayout` references `/logo.png` for the topbar and `/apple-touch-icon.png` for iOS. Add `<link>` tags for the new sizes if you want full icon-set coverage.

```
Square 512x512 icon. Solid dark navy #0a0c10 background. Single warm-gold
#f1b95c sphere centred, ~70% of canvas, with soft radial highlight from
upper-left and inner warm glow. Subtle thin cream #f4ede0 ring around the
sphere at 90% radius. Premium minimalist app-icon feel — like a single planet
or eye against deep space. No text, no shapes other than the sphere and ring.
Export PNG with transparency around the rounded square corners OR as solid
square — whichever your favicon pipeline expects. Also export 32x32, 180x180,
and 512x512 versions.
```

---

## Generator settings reference

| Generator | Best for | Settings |
| --- | --- | --- |
| **Sora / Veo** | Realistic founder portrait, cinematic video | Image: 4:5 portrait, "photoreal magazine grade". Video: 9:16, 10s, 30fps. |
| **Midjourney v6+** | OG cards, abstract backgrounds | `--ar 1200:630` for OG, `--stylize 500`, `--v 6.1`. Avoid `--style raw`. |
| **Kling 1.6** | Hero video (best motion quality) | Negative prompt: "cartoon, low quality, text, watermark, blurry". |
| **DALL-E 3** | Quick icons/pictograms | Avoid for photoreal portrait — always looks plastic. |
| **Nano-Banana / Sora image edit** | Editing your real selfie | Best for "make my phone selfie editorial" trick. |

---

## Done checklist

- [ ] #1 OG card → `public/og/home.jpg`
- [ ] #2 Integration logos → `public/integrations/*.svg` (×10)
- [ ] #3 Founder portrait → `public/team/alex.jpg`
- [ ] #4 Dashboard mockup → `public/mocks/dashboard.png`
- [ ] #5 Client logos → `public/clients/*.svg` (optional)
- [ ] #6 Hero video frames → `public/hero-frames/frame-*.jpg` (optional)
- [ ] #7 Chaos backdrop → `public/textures/chaos-bg.jpg` (optional)
- [ ] #8 Engineering backdrop → `public/textures/rings.jpg` (optional)
- [ ] #9 Favicon set → `public/favicon-*.png` (optional)

After dropping assets, ping with **"images ready, wire them in"** and I'll do the code updates for items #2, #3, #4, #5, #6, #7, #8 in one PR.
