# OG / Social Sharing Images

This folder contains all Open Graph images used for social media link previews
(WhatsApp, Facebook, Twitter/X, LinkedIn, iMessage, etc.).

## Requirements

- **Size:** 1200 × 630 px (2:1 ratio)
- **Format:** JPEG preferred for photos (smallest file); PNG for graphics with text/logos
- **File size:** under 300 KB — required for WhatsApp previews to appear
- **Text:** Keep important content within the safe zone (960 × 504 px centered)

## Folder structure

Each route gets its own subfolder. The image inside is always named `og.png`.

```
public/og/
  default.png          ← site-wide fallback (Layout.astro)
  fitness/
    og.png             ← /fitness route
  contact/
    og.png             ← /contact route (optional)
```

## Route → image mapping

| Route        | Image file              |
| ------------ | ----------------------- |
| Site default | `default.png`           |
| `/fitness`   | `fitness/og.png`        |
| `/contact`   | `contact/og.png`        |

Add a row here whenever you add a new route.

## Adding an image for a new route

1. Create a subfolder named after the route slug: `public/og/<slug>/`
2. Save the image as `og.png` inside it (1200 × 630 px)
3. Pass `ogImage="/og/<slug>/og.png"` to the layout in your page file
4. Update the table above and the Social Sharing section in `CLAUDE.md`
