# Feature Registry — handinhandai-site

Source of truth for what this site ships today. One entry per shipped page/capability.
Mutable (describes current state, not history). Update in the same task that ships, changes, or removes a capability.

---

### Homepage (`/`)

- **Route:** `/` (Hebrew default) and `/en/`, `/ru/`, `/uk/`, `/he/` → `src/pages/index.astro` + `src/pages/[lang]/index.astro` → `SimpleLayout`
- **Purpose:** AI-consulting brand pitch — Tailwind marketing homepage assembled from reusable section components.
- **Triggers / activation:** Static page load; no scroll-scrub film.
- **Surface:** `Hero` (dual WhatsApp CTA) · `ValueProps` (3-col) · `Process` (3-stage) · `About` (founder + bio) · `ServicesGrid` (fitness cards) · `CTASection` (final conversion). Components in `src/components/homepage/`, all `lang`-prop driven and mobile-first responsive.
- **Dependencies:** `SimpleLayout.astro` (sets `dir` via `getDirection(lang)`), Tailwind, i18n `home.*` keys in `src/i18n/ui.ts`. No JS island.
- **i18n:** Four languages — Hebrew (RTL, default, no prefix), English, Russian, Ukrainian (all LTR). Non-default langs carry a `/{lang}` route prefix.
- **Status:** `active`.
- **Last updated:** `2026-05-29`.

### Fitness Studio landing (`/fitness-studio`)

- **Route:** `/fitness-studio` + `/[lang]/fitness-studio` → `FitnessLayout`
- **Purpose:** Sub-brand landing — WhatsApp AI assistant for a single fitness studio.
- **Surface:** TopBar · Hero (image + WhatsApp CTA + `WhatsAppMock`) · Core Promise · Three Jobs · Loyalty + No-Show scenarios · Channels · How It Works · About · FAQ · Final CTA · Footer.
- **Dependencies:** `@alexgub84/whatsapp-chat-mock`, `src/styles/fitness.css`, Heebo font. OG image `public/og/fitness-studio/og.jpg`.
- **Status:** `active`.
- **Last updated:** `2026-05-24`.

### Fitness Chain landing (`/fitness-chain`)

- **Route:** `/fitness-chain` + `/[lang]/fitness-chain` → `FitnessLayout`
- **Purpose:** Sub-brand landing — WhatsApp AI assistant for a multi-branch fitness chain.
- **Surface:** Same section structure as `/fitness-studio`; copy diverges. Uses `chain-churn-multi-branch` mock scenario.
- **Dependencies:** as `/fitness-studio`. OG image `public/og/fitness-chain/og.jpg`.
- **Status:** `active`.
- **Last updated:** `2026-05-24`.

### Contact (`/contact`)

- **Route:** `/contact` → `Layout` + `ContactForm.astro`
- **Purpose:** Lead capture.
- **Surface:** Hero · Contact form, submits to a Make.com webhook (`hook.eu1.make.com`); field values sent in Hebrew.
- **Dependencies:** `PUBLIC_WEBHOOK_URL`.
- **Status:** `active`.
- **Last updated:** `2026-05-24`.

### Sasha WhatsApp privacy policy (`/privacy-sasha`)

- **Route:** `/privacy-sasha` → `Layout`
- **Purpose:** Static privacy policy page for the Sasha WhatsApp product.
- **Status:** `active`.
- **Last updated:** `2026-05-24`.

### Short-link redirects (`/wa/*`)

- **Surface:** Two paths — Cloudflare Pages Function `functions/wa/[slug].ts` (UA-sniff: bots get OG-preview HTML, humans get a 302 to `wa.me`) for branded previews; `public/_redirects` lines for plain edge 302s.
- **Dependencies:** `SHORTLINKS` registry in the function; per-slug OG JPEG at `public/og/wa/<slug>.jpg`.
- **Status:** `active`.
- **Last updated:** `2026-05-24`.
