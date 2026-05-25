# Feature Registry — handinhandai-site

Source of truth for what this site ships today. One entry per shipped page/capability.
Mutable (describes current state, not history). Update in the same task that ships, changes, or removes a capability.

---

### Homepage (`/`)

- **Route:** `/` and `/en/`, `/he/` → `src/pages/index.astro` + `src/pages/[lang]/index.astro` → `ScrollHero`
- **Purpose:** Cinematic, scroll-scrubbed pitch for the AI-workforce product.
- **Triggers / activation:** Page load. A loader holds ~1.1–3.5s, then the film is scroll-driven.
- **Surface:** One pinned hero (chaos→orb, 3 scenes) + one pinned scroll-film (`StoryFilm`) where chapters Reveal · Bespoke · Vignettes · Engineering · Process · CTA cross-fade over a persistent orb on a single scroll timeline. CTA links to `/wa/home-cta`.
- **Dependencies:** `CinematicLayout.astro`, `src/styles/cinematic.css`, `@astrojs/react`. Copy in `src/components/scroll-hero/data/scenarios.ts` (HE default, EN). `prefers-reduced-motion` falls back to a static stacked document.
- **Key scenarios:** E2E `tests/homepage-scroll.spec.ts` — (1) film stage stays pinned + chapters advance on scroll; (2) reduced-motion reveals every chapter statically.
- **Status:** `active`.
- **Last updated:** `2026-05-24`.

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
