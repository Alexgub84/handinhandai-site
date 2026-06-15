# Work Log — handinhandai-site

Chronological log of completed work. Most recent first.

## 2026-05-29 — Russian + Ukrainian i18n + responsive polish (#23)

- Added complete Russian and Ukrainian translation blocks to `src/i18n/ui.ts` (homepage, both fitness pages, and `[lang]` compatibility keys). Four languages now ship: Hebrew (default, RTL), English, Russian, Ukrainian.
- `getRouteFromUrl` now strips any non-default language prefix (`en`/`ru`/`uk`) so the language switcher keeps the current route across all four languages.
- `[lang]/index.astro` rewritten to render the same `SimpleLayout` + homepage section components as the root `/` (was a legacy `CinematicLayout` + `ScrollHero`).
- LanguageSwitcher shows short language codes on mobile, full native labels from `sm:` up — prevents header overflow with four languages.
- Removed the broken translation helper scripts.
- Verified `npm run build` (astro check + build) generates all `/ru/` and `/uk/` routes; Playwright suite green.

## 2026-06-15 — Recreated homepage from handinhand-production design

Replaced the Tailwind homepage at `/` with a static Astro port of the `handinhand-production` design: Hebrew-only, Discovery font, custom CSS in `src/styles/handinhand/`, 14 section components in `src/components/handinhand/`. Dropped GSAP/Lenis/React — animations re-expressed CSS-first (keyframes, scroll-driven `animation-timeline`, SVG SMIL) with a single small vanilla-JS layer for reveals, nav, ChatDemo and DiagChat. Added `ProfessionalService` JSON-LD + full static HTML for SEO/AI-findability. WhatsApp links centralised in `site-contact.ts`. Fitness/contact and localized homepages untouched. New Playwright smoke test `tests/home.spec.ts`.
