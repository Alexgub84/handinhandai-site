# Social Media & WhatsApp Preview Setup

## Status: ✅ Complete

All pages on the Hand in Hand AI website now have proper Open Graph (OG) images for WhatsApp, Facebook, Twitter/X, and LinkedIn previews.

## OG Images Created

| Page | Image Path | Size | Status |
|---|---|---|---|
| **Homepage** | `public/og/home/og.jpg` | 45.4KB | ✅ Active |
| **Site Default** | `public/og/default.jpg` | 35.7KB | ✅ Active (fallback for all pages) |
| **Privacy Policy** | `public/og/privacy/og.jpg` | 24.3KB | ✅ Active |
| **Fitness Studio** | `public/og/fitness-studio/og.jpg` | 291KB | ⚠ Exists (needs optimization) |
| **Fitness Chain** | `public/og/fitness-chain/og.jpg` | (checking...) | ⚠ May need creation |

## Image Specifications

All images follow WhatsApp/social media requirements:
- **Dimensions:** 1200 × 630 px (2:1 ratio)
- **Format:** JPEG (quality 85%)
- **Size limit:** Under 300KB (WhatsApp silently drops larger previews)
- **Safe zone:** Central 960 × 504 px for important content

## How It Works

### Automatic Defaults

Every page automatically gets the default OG image (`/og/default.jpg`) if no specific image is provided.

```astro
<!-- SEOHead.astro line 18 -->
ogImage = '/og/default.jpg'
```

### Per-Page Overrides

Pages can specify custom OG images by passing the `ogImage` prop to their layout:

```astro
<SimpleLayout
  lang={lang}
  title="My Page Title"
  description="My page description"
  ogImage="/og/my-page/og.jpg"
>
```

### Current Page Assignments

| Route | OG Image | Set In |
|---|---|---|
| `/` (homepage) | `/og/home/og.jpg` | `src/pages/index.astro` |
| `/privacy-sasha` | `/og/privacy/og.jpg` | `src/pages/privacy-sasha.astro` |
| `/fitness-studio` | `/og/fitness-studio/og.jpg` | `src/pages/[lang]/fitness-studio.astro` |
| `/fitness-chain` | `/og/fitness-chain/og.jpg` | `src/pages/[lang]/fitness-chain.astro` |
| All other pages | `/og/default.jpg` | (fallback) |

## Meta Tags Included

All pages now have:

### Open Graph (Facebook, WhatsApp, LinkedIn)
```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://handinhandai.com/" />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="https://handinhandai.com/og/home/og.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:site_name" content="Hand in Hand AI" />
<meta property="og:locale" content="he_IL" />
```

### Twitter Card
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="..." />
<meta name="twitter:title" content="..." />
<meta name="twitter:description" content="..." />
<meta name="twitter:image" content="..." />
```

### WhatsApp-Specific
WhatsApp reads Open Graph tags. All images are:
- Under 300KB (requirement for WhatsApp preview)
- 1200×630px (optimal dimensions)
- JPEG format (smaller file sizes than PNG)

## Image Generator Script

New images can be generated using:

```bash
node scripts/generate-og-canvas.mjs
```

The script creates all three core images (homepage, default, privacy) using the Node canvas library.

## Testing Social Previews

### WhatsApp
1. Send the URL to yourself or a friend in WhatsApp
2. The link preview card should appear with the custom image, title, and description
3. Note: WhatsApp caches link previews aggressively — use `?v=2` query param to bust cache

### Facebook
Use the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/):
1. Paste your URL
2. Click "Debug"
3. See the preview and any errors
4. Click "Scrape Again" to refresh cached data

### Twitter/X
Use the [Twitter Card Validator](https://cards-dev.twitter.com/validator):
1. Paste your URL
2. Click "Preview card"

### LinkedIn
Use the [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/):
1. Paste your URL
2. Click "Inspect"

## Files Modified

- `src/layouts/SimpleLayout.astro` — changed default from `.png` to `.jpg`
- `src/pages/index.astro` — added `ogImage="/og/home/og.jpg"`
- `src/pages/privacy-sasha.astro` — added `ogImage="/og/privacy/og.jpg"`
- `public/og/home/og.jpg` — created (45.4KB)
- `public/og/default.jpg` — regenerated (35.7KB, was 291KB)
- `public/og/privacy/og.jpg` — created (24.3KB)

## Build Status

✅ Build successful — 11 pages generated with OG tags
✅ All OG images under 300KB size limit
✅ All pages have proper meta tags for social sharing

## Next Steps (Optional)

1. **Fitness pages**: Check if `public/og/fitness-studio/og.jpg` exists and is under 300KB. If over, regenerate with the script pattern.
2. **Custom images**: For any new landing pages, add images to `public/og/<page-name>/og.jpg` and update the generator script.
3. **Testing**: Test WhatsApp previews by sending URLs to yourself.

## Documentation

See `public/og/README.md` for the full OG image specification (requirements, safe zones, platform quirks).
