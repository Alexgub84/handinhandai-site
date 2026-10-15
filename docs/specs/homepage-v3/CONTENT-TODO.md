# Homepage v3 — content you still need to supply

Everything below renders today as a placeholder (bracketed Hebrew or `XX`).
Fill the files named here; no component changes needed.

## 1. Case studies — `src/data/case-studies.ts`

Status: **three cards are filled and live** — construction quality control
(`docs/handoff/case-01-construction-qc.md`), materials ordering with AI delivery
verification (`docs/handoff/case-02-construction-ordering.md`) and Chillist on the
orange startup track (`docs/handoff/case-03-chillist.md`). The section is mounted;
it renders one card per entry, so adding a card is a data edit only.

All three cards ship a screenshot, and the two cards with a mobile app show
App Store / Google Play badges. The section is live **only on `/examples`**, a
private review copy of the homepage; `/` is unchanged until the cards are
approved.

Still open:

- Usage figures for Chillist, once the product has traffic (the card carries build
  facts today).
- A quote from any of the three clients, if approval ever comes.

Image rules for a new card: sanitised, Hebrew UI, landscape ~1600×1000, JPEG under
300KB, neutral file name (never a client's product name), into `public/home/cases/`,
then `image: "/home/cases/<file>"`. Without one the card falls back to a grey skeleton.

Per card:

| Field | What to write | Example | Notes |
|---|---|---|---|
| `track` | `"01"` business system / `"02"` startup CTO | `"01"` | Sets colour (green / orange) and chip label |
| `client` | Client or venture name | `"קליניקת ד״ר כהן"` | Can be anonymised: `"יזם בנייה למגורים"`. First letter becomes the avatar if no `logo` |
| `industry` | Sector, short | `"נדל״ן"` | Shown under the name |
| `title` | The result in one sentence | `"מ-5 מערכות מפוזרות לפלטפורמה אחת"` | Card headline |
| `challenge` | What hurt before, 1–2 sentences | | "האתגר" block |
| `solution` | What was built, 1–2 sentences | | "מה בנינו" block |
| `results` | Exactly 3 metrics `{ value, label }` | `{ value: "₪100,000", label: "חסכון שנתי ללקוח" }` | `value` animates when it contains a digit (`"40"`, `"72%"`, `"3,300+"`, `"₪100,000"`). Thousands separators are kept |
| `stack` | 3–5 tech chips | `["Flutter", "React", "Fastify"]` | Rendered in monospace |
| `url` | Fake/real address for the browser bar | `"qc.site-control.co.il"` | Display only, not a link |
| `quote` | `{ text, name, role }` | | Optional. Omit the whole object to hide the quote |
| `logo` | Path to square client logo | `"/home/cases/cohen-logo.png"` | Optional. ~96×96 px PNG/SVG, put under `public/home/cases/` |
| `image` | Screenshot of the system | `"/home/cases/cohen-crm.jpg"` | Optional. Replaces the grey skeleton. Landscape, ~1600×1000 px, JPEG < 300 KB, under `public/home/cases/` |
| `href` | Link to a full case-study page | `"/cases/cohen"` | Optional. Adds "לסיפור המלא" link. Page must exist |

Keep at least one card of each track once a second card exists, the section was
designed to show both colours.

## 2. Personal facts — `src/data/home-profile.ts`

| Field | Current | Notes |
|---|---|---|
| `yearsInField` | `5` | Drives the "שנים בתחום" counter in the about section. Bump yearly. The about story also says "חמש שנים" in words, in `src/components/home/About.astro`; change both |
| `firstName` | `"אלכס"` | Used in hero, about, photo caption |
| `waGreeting` | `"היי אלכס, הגעתי מהאתר ואשמח לשיחת אבחון 🙂"` | Prefilled WhatsApp text on every CTA |

## 3. Photos — `public/home/`

| File | Current | Notes |
|---|---|---|
| `alex-hero.webp` | From prototype, 490×930, transparent background | Hero portrait + small avatar in contact note. Replace only with a cut-out (alpha) image of the same ratio |
| `alex-about.webp` | From prototype, 700×895 | About section. Any portrait ratio ~4:5 |

## 4. Social preview — `public/og/home/og.jpg`

Still the old homepage OG image (1200×630). Make a new one matching the v3
design (title "אלכס — HandInHandAI", portrait, green/orange). Under 300 KB.

## 5. Optional copy checks (components, not data)

Copy is in the components under `src/components/home/`. Things worth a second
look before launch:

- `About.astro`: "אבא של רון" chip, story paragraphs.
- `Hero.astro`: rotating words `למציאות / למערכת / לפיצ'ר`, the 4 benefit chips.
- `Footer.astro`: tagline.
- `HomeDocument.astro`: `<title>`, meta description (SEO text, 150 chars).

## 6. Not needed from you

Phone, email, WhatsApp number come from `src/data/site-contact.ts` and are
already correct (054-505-3620, alexg@handinhandai.com).
