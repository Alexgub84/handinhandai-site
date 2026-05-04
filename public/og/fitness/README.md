# OG Images — /fitness route

Social sharing image shown when someone shares `handinhandai.com/fitness` on
WhatsApp, Facebook, LinkedIn, Twitter/X, or iMessage.

---

## File to create

**`og.jpg`** — place it in this folder (`public/og/fitness/og.jpg`)

---

## Size

**1200 × 630 px** (landscape, 2:1 ratio)

This is the universal size accepted by all major platforms without cropping.

---

## Safe zone

Keep all text and important visuals within the central **960 × 504 px** area.
The outer 120 px on each side may be cropped on some platforms (e.g. WhatsApp
shows a square crop on mobile).

---

## What to put on the image

Suggested content for the fitness landing page:

- The Hand in Hand AI logo or wordmark
- A short headline (matches the page hero): **"הסטודיו שלכם, פתוח גם בלילה."**
- A sub-line: **"עוזר AI בוואטסאפ לסטודיו בוטיק"**
- A background photo of a fitness studio or WhatsApp chat mockup

---

## Format

- **JPEG preferred** for photos — smallest file size
- **PNG** only if the image has hard-edged logos or text on solid backgrounds
- **File size: under 300 KB** — WhatsApp's crawler silently skips previews for larger files
- **Color space:** sRGB

---

## How it is used in code

`src/pages/fitness.astro` passes `ogImage="/og/fitness/og.jpg"` to the layout.
The layout resolves it to the full URL `https://handinhandai.com/og/fitness/og.jpg`
and injects it into `og:image` and `twitter:image`.

No code changes are needed — just drop the file here with the exact name `og.jpg`.
