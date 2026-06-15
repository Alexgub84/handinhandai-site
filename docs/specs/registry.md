# Feature Registry — handinhandai-site

Source of truth for what this site ships today. One entry per shipped page/capability.
Mutable (describes current state, not history). Update in the same task that ships, changes, or removes a capability.

---

### Homepage (`/`)

- **Route:** `/` (Hebrew default) and `/en/` both → the shared `src/components/handinhand/HomeDocument.astro` (via `src/pages/index.astro` and `src/pages/[lang]/index.astro`). `/en` is an identical Hebrew page that canonicalises to `/`. No `/he`, `/ru`, `/uk` homepages — Russian and Ukrainian were removed from the site.
- **Purpose:** AI-consulting brand pitch — recreation of the `handinhand-production` design. Static Astro + custom CSS, Hebrew-only.
- **Triggers / activation:** Static page load; CSS-first animations (CSS keyframes + scroll-driven `animation-timeline` + SVG SMIL) with a small vanilla-JS layer for IntersectionObserver reveals, nav state, the live ChatDemo and the cycling DiagChat. Respects `prefers-reduced-motion`.
- **Surface:** ScrollProgress · NavBar (anchor nav `#alex #build #example #how`) · Hero (headline + IntegrationHub visual) · AlexSection · Capabilities (bento + DiagChat) · ExampleSection (4 use-cases + phone previews + live ChatDemo) · HowItWorks (timeline) · AudienceSection · FinalCTA · Footer · FloatingWhatsApp. Components in `src/components/handinhand/`.
- **Dependencies:** `src/styles/handinhand/{tokens,base,app}.css`, Discovery font (`public/fonts/Discovery_Fs-*.woff2`), `public/handinhand-logo.png`, `public/alex.jpg`, OG `public/og/home/og.jpg`. WhatsApp links sourced from `src/data/site-contact.ts` (`waLink`/`whatsappCta`). No React/Tailwind/GSAP on this page.
- **i18n:** Site languages are Hebrew (default) + English only. The homepage is Hebrew-content; `/en` serves the same page. Russian/Ukrainian removed from `src/i18n/ui.ts`.
- **SEO:** `ProfessionalService` JSON-LD, canonical, OG/Twitter, full server-rendered static HTML (AI-findable).
- **Status:** `active`.
- **Last updated:** `2026-06-15`.

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
