# Feature Registry — handinhandai-site

Source of truth for what this site ships today. One entry per shipped page/capability.
Mutable (describes current state, not history). Update in the same task that ships, changes, or removes a capability.

---

### Homepage (`/`)

- **Route:** `/` (Hebrew default) and `/en/` both → the shared `src/components/home/HomeDocument.astro` (via `src/pages/index.astro` and `src/pages/[lang]/index.astro`). `/en` is an identical Hebrew page that canonicalises to `/`.
- **Purpose:** Personal-brand pitch for Alex — management systems, AI agents and automations for businesses, and fractional CTO for startups. Port of the v3 prototype in `docs/specs/homepage-v3/`.
- **Triggers / activation:** Static page load; the prototype's CSS (`src/styles/home/app.css`, copied verbatim) drives the animations; small vanilla-TS `<script>` blocks per component handle the rotating hero word, pointer glow, scroll reveals, the היום/אפשרי switch (auto-flips ~2s after it scrolls into view), the word-by-word story reveal, the years and metric count-ups, the sticky case-study stack, the contact form and the floating WhatsApp button. Respects `prefers-reduced-motion`.
- **Surface:** Hero (nav + headline + portrait) · Services (two tracks) · WhyAlex · About · CaseStudies · WhyToggle (dark) · Contact · Footer · FloatingWhatsApp. Components in `src/components/home/`.
- **Dependencies:** `src/styles/home/{tailwind,theme,app,overrides}.css` (frozen compiled Tailwind 3 utilities + prototype CSS), Heebo + JetBrains Mono via Google Fonts, `public/home/alex-hero.webp`, `public/home/alex-about.webp`, OG `public/og/home/og.jpg`. Copy lives in the components; **case studies** in `src/data/case-studies.ts` (placeholders until filled); name/years/greeting in `src/data/home-profile.ts`; contact details from `src/data/site-contact.ts`. No React on this page.
- **Contact flow:** The homepage form composes a message and opens WhatsApp (or `mailto:`); nothing is posted to a server. The Make.com webhook is only used by `/contact`.
- **i18n:** Hebrew-only content; `/en` serves the same page.
- **SEO:** `ProfessionalService` JSON-LD, canonical, OG/Twitter, full server-rendered static HTML.
- **Status:** `active`.
- **Last updated:** `2026-10-07`.

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
