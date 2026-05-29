# Open Graph (OG) Social Preview Images

This directory contains OG images for social media previews (WhatsApp, Facebook, Twitter, LinkedIn).

## Generated Images

### 1. Homepage (`home/og.jpg`)
- **Size**: 1200 × 630 px (57KB)
- **Content**: 
  - Title: "Hand in Hand AI"
  - Hebrew tagline: "תפסיקו לרוץ אחרי המערכות, תתחילו לנהל עסק"
  - Hebrew subtitle: "צוות AI מותאם אישית שעובד מסביב לשעון"
  - Colors: Blue (#2563EB), Purple (#7C3AED), Green (#10B981)
- **Use**: Main homepage and general marketing

### 2. Privacy Page (`privacy/og.jpg`)
- **Size**: 1200 × 630 px (32KB)
- **Content**:
  - Title: "Privacy Policy"
  - Subtitle: "Hand in Hand AI"
  - Clean, professional blue gradient
- **Use**: Privacy policy page

### 3. Default Fallback (`default.jpg`)
- **Size**: 1200 × 630 px (40KB)
- **Content**:
  - Title: "Hand in Hand AI"
  - Hebrew tagline: "בווטסאפ לסטודיו בוטיק AI עוזר"
  - Green AI badge icon
- **Use**: Generic fallback for pages without specific OG images

## Technical Specifications

- **Dimensions**: 1200 × 630 px (2:1 ratio, optimal for all social platforms)
- **Format**: JPEG with 85% quality
- **File Size**: All under 300KB (WhatsApp compatible)
- **Safe Zone**: Text kept within central 960 × 504 px area
- **Design**: Professional B2B AI consulting aesthetic
- **Language**: Hebrew (RTL) with English brand name

## Regenerating Images

To regenerate all OG images:

```bash
npm run generate:og
```

This runs the `scripts/generate-og-images.js` script which uses Node.js Canvas to programmatically generate the images.

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
