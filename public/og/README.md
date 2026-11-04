# Open Graph (OG) Social Preview Images

This directory contains OG images for social media previews (WhatsApp, Facebook, Twitter, LinkedIn).

## Generated Images

### 1. Homepage (`home/og.jpg`)
- **Size**: 1200 × 630 px (~33KB)
- **Content** (matches the homepage hero look, issue #82):
  - Off-white ground (the site's own background, not white)
  - Flat deep-orange circle with the cut-out portrait (`public/home/alex-cutout.webp`) standing in it, bottom-anchored
  - Hebrew headline: "אני אלכס," (name) + "אני כאן כדי להפוך רעיון למציאות" (the homepage's own leading line)
  - The `HandInHandAI` wordmark, top right
- **Use**: Main homepage and general marketing
- **Byte-identical to `default.jpg`** — same generator run writes both paths.

### 2. Privacy Page (`privacy/og.jpg`)
- **Size**: 1200 × 630 px (32KB)
- **Content**:
  - Title: "Privacy Policy"
  - Subtitle: "Hand in Hand AI"
  - Clean, professional blue gradient
- **Use**: Privacy policy page

### 3. Default Fallback (`default.jpg`)
- **Size**: 1200 × 630 px (~33KB)
- **Content**: same image as `home/og.jpg` above (homepage hero look: off-white
  ground, deep-orange circle, cut-out portrait, name + leading line, wordmark).
- **Use**: Fallback for pages that pass no `ogImage` of their own (legal pages
  via `Layout.astro`/`SEOHead.astro`), and the image `/app-publishing`
  explicitly points at.

## Technical Specifications

- **Dimensions**: 1200 × 630 px (2:1 ratio, optimal for all social platforms)
- **Format**: JPEG with 85% quality
- **File Size**: All under 300KB (WhatsApp compatible)
- **Safe Zone**: Text kept within central 960 × 504 px area
- **Design**: Professional B2B AI consulting aesthetic
- **Language**: Hebrew (RTL) with English brand name

## Regenerating Images

`home/og.jpg` and `default.jpg` (the homepage hero look, issue #82) are built
from an HTML/CSS card screenshotted with headless Chromium, not drawn by hand
or by Canvas:

```bash
node local/og-generator/generate.mjs
```

The script lives under `local/` (never committed into `src/`) and writes both
paths in one run. It screenshots `local/og-generator/og-card.html` at exactly
1200×630, converts to JPEG, and keeps lowering quality until the file is
under 300KB. Edit the HTML/CSS template inside the script to change the
image, then re-run it — never hand-edit the JPEGs.

`privacy/og.jpg` is unrelated and still comes from
`scripts/generate-og-images.js` (`npm run generate:og`), which uses Node.js
Canvas.

## Image Usage in Astro

To use these images in your Astro pages, add the following meta tags:

```astro
---
// In your frontmatter
const ogImage = "/og/home/og.jpg"; // or /og/privacy/og.jpg, /og/default.jpg
---

<head>
  <!-- Open Graph / Facebook -->
  <meta property="og:image" content={new URL(ogImage, Astro.url)} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content={new URL(ogImage, Astro.url)} />
  
  <!-- WhatsApp -->
  <meta property="og:image:type" content="image/jpeg" />
</head>
```

## Platform Support

These images are optimized for:
- ✅ WhatsApp (under 300KB limit)
- ✅ Facebook (1200×630 recommended)
- ✅ Twitter/X (summary_large_image card)
- ✅ LinkedIn (1200×627 recommended)
- ✅ Telegram
- ✅ Slack
- ✅ Discord

## Notes

- Hebrew text is rendered using Unicode characters
- The canvas library handles Hebrew character shapes correctly
- Images use web-safe fonts (Arial) for maximum compatibility
- All images maintain consistent brand colors and style
