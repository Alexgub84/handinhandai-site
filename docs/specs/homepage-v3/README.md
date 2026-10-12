# Homepage v3 spec — "Alex" personal-brand site

Received 2026-10-07. Two source files from the copywriter / designer, saved here verbatim:

| File | What it is |
|------|-----------|
| `alex-site-light.html` | Clickable prototype. Single-file React 18 + Tailwind 3.4 bundle (535 KB), Hebrew RTL, light theme. Two photos of Alex and the logo are embedded as base64 WebP. Opens directly in a browser, no server needed. |
| `homepage-copy-he.pdf` | Copy deck ("תוכן לדף הבית") by the copywriter (Yael Ben Mayor, el-haatar.co.il). Same Hebrew copy as the prototype, in a slightly different section order. |
| `copy-strings.txt` | Every Hebrew string extracted from the prototype bundle, in render order, with the prop key it hangs on. Use this as the copy source when building. |
| `screenshots/` | Desktop (1366 px) captures of each section of the prototype. |

## What the spec says

**Positioning shift.** The current homepage sells "AI agents / WhatsApp assistant for businesses". The new spec sells **Alex as a person**: a hands-on tech lead who builds management systems, AI agents and automations for businesses, and acts as fractional CTO for startups. Hero line: "אני אלכס, אני כאן כדי להפוך רעיון למציאות / למערכת / לפיצ'ר" (rotating last word). The fitness sub-brand pages are not touched by this spec.

**Section order in the prototype** (anchor ids in parentheses; this is the React render order, which is the same as the PDF order):

1. **Nav + Hero** (`#top`) — logo, 4 anchor links (מי אני · מה אני בונה · דוגמה · איך מתחילים), WhatsApp CTA. Hero: headline with rotating word, 4 check-tags (מאפיון ועד מוצר · פתרון מותאם לצורך · צוות מפתחים · CTO במיקור חוץ), primary WhatsApp CTA + secondary "מה אפשר לבנות" scroll CTA, "שיחת אבחון ראשונה — בלי התחייבות" note, photo of Alex with floating badges.
6. **"מי מנהל לכם היום את העסק?"** (`#why`) — dark navy section. Toggle **היום / אפשרי**. "היום" = red chaos diagram (5 disconnected apps, "מי אחראי?") + 4 pain cards (עבודה בטלאים · ידניות מיותרת · התפשרות על תוכנות מדף · מרדף אחרי מפתחים). "אפשרי" = green hub diagram ("מערכת אחת") + 4 outcome cards (מערכת מרכזית אחת · סוכני AI ואוטומציות · מקסימום יעילות ושקט · שותף חושב ומנהל). CTA "אני רוצה את הצד הזה".
2. **"איך נוכל להתפתח ביחד?"** (`#services`) — two track cards. **01 פיתוח מערכות ניהול וטכנולוגיה לעסקים** (4 bullets, CTA "בואו נבנה את המערכת שלכם"). **02 שותף טכנולוגי ו-CTO למיזמים וסטארטאפים** (4 bullets, CTA "בואו נדבר על המיזם שלכם"). Each CTA opens WhatsApp with the track name prefilled. Footer line "לא בטוחים איזה מסלול מתאים לכם? שיחת אבחון קצרה תעשה סדר".
3. **"למה אלכס?"** (`#why-alex`) — 4 value cards: חשיבה עסקית לפני הטכנולוגיה · תכליתיות ויעילות (בלי מריחות) · תקשורת ישירה ושקופה · צוות פיתוח חזק מאחוריי.
4. **"נעים להכיר, אני אלכס."** (`#about`) — second photo, "5 שנים בתחום" badge, 3 chips (אבא של רון · יזם · איש של אנשים וטכנולוגיה), 3 paragraphs with highlighted phrases, CTA "בואו נדבר, בגובה העיניים".
5. **"לא רק מבטיחים. מראים."** (`#example`) — 3 stacked case-study cards (one per track + one AI-agent case). Each: client, industry, one-line result, challenge, solution, tech chips, 3 metrics, quote. **All content is placeholder** (`[שם העסק]`, `XX`, `$XM`). Closing CTA "הפרויקט הבא יכול להיות שלכם".
7. **"מוכנים לעשות את הקפיצה?"** (`#start` / `#contact`) — form (שם מלא · טלפון · topic chips: מערכת לעסק / CTO למיזם / עוד לא בטוח/ה · free text). Submit = **opens WhatsApp or mailto with the message prefilled**, nothing is posted anywhere ("הפרטים נשלחים ישירות לאלכס ולא נשמרים באתר"). Side column: WhatsApp / phone / email cards with copy-to-clipboard.
8. **Footer** — dark, big outlined "HandInHandAI" wordmark, nav column (adds "למה אלכס"), contact column, back-to-top, "© 2026 HandInHandAI · כל הזכויות שמורות".

**Design language.** Off-white warm background with faint grid, dark green primary (`#25823a` family) with orange accent, dark navy (`#383d58` / near-black) for the "why" section and footer. Heebo for Hebrew, JetBrains Mono for numbers/chips. Soft green drop shadows under cards, floating pill badges. Interactions: rotating hero word, today/possible toggle, scroll-reveal via IntersectionObserver, stacked case cards, copy-to-clipboard, mobile menu under 901 px. `prefers-reduced-motion` respected.

**Contact data** matches `src/data/site-contact.ts` (054-505-3620, alexg@handinhandai.com, wa.me/972545053620). WhatsApp greeting differs slightly: spec says "היי אלכס, הגעתי מהאתר ואשמח לשיחת אבחון 🙂" vs current "היי, הגעתי מהאתר ואשמח לשיחת אבחון".

## PDF vs prototype

Copy and section order are identical (hero → tracks → why Alex → about → case studies → "מי מנהל" → contact). The PDF footer line with the copywriter's contact details is not site content.

## Implementation status

Ported to Astro on 2026-10-07 (`src/components/home/`, `src/styles/home/`). Prototype CSS is copied verbatim into `src/styles/home/app.css`; React state logic became small vanilla-TS scripts per component. Case-study placeholders live in `src/data/case-studies.ts`.

## Review notes / open items before build

1. **Case studies are empty.** Three cards of bracketed placeholders and `XX` metrics. Need real client names (or anonymised "קליניקה בתל אביב"), real numbers, and real screenshots, or the section ships as a lie. Decide: fill, cut to one real case, or drop the section until content exists.
2. **Not a drop-in.** Prototype is React + Tailwind; the site is Astro + custom CSS with no React or Tailwind on the homepage (`src/components/handinhand/HomeDocument.astro`, `src/styles/handinhand/*`). Rebuild section by section in Astro, port copy from `copy-strings.txt`, port only the interactive bits (toggle, rotating word, form) as small vanilla JS or React islands.
3. **Contact flow change.** Spec form opens WhatsApp / mailto client-side and stores nothing. The existing `/contact` page posts to a Make.com webhook. Decide whether the homepage form also posts to Make (lead capture even if the user never hits "send" in WhatsApp) or stays client-side as specified.
4. **Font change.** v2 brief (`docs/design-v2/references.md`) chose Heebo + Geist. Spec uses Heebo + JetBrains Mono. Minor, but the mono font appears on all numbers and chips, so pick one.
5. **Photos.** Two new photos of Alex are embedded in the HTML (both ~50 KB WebP, 1 with alpha). Extract to `public/` at build time; `public/alex.jpg` is the current one.
6. **Anchor ids differ** from the current homepage (`#alex #build #example #how` today vs `#about #services #why-alex #example #contact`). Nothing external links to the old anchors as far as the repo shows, but check `/wa/*` shortlinks and any ads before renaming.
7. **Hero copy** says "5 שנים בתחום". Fine for 2026; make it a single constant so it ages in one place.
8. **Year** in footer is hard-coded 2026 in the prototype. Compute it.
9. **Dark section contrast.** The "היום" chaos diagram is small text on near-black at 1366 px and will be hard to read on mobile. Worth a mobile pass during build.
10. **OG / SEO.** Spec has no title/description/OG beyond `<title>Alex — HandInHandAI</title>`. Reuse the existing `ProfessionalService` JSON-LD and OG image, update title/description to the new positioning.
11. **English route.** `/en` currently mirrors the Hebrew page. Spec is Hebrew-only. Keep the mirror.

## Suggested build order

Hero + nav → services (two tracks) → why-alex → about → contact form + footer → "why" dark toggle section → case studies (last, blocked on content). Each step is one issue so the page can ship incrementally behind the current homepage.
