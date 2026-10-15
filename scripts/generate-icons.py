#!/usr/bin/env python3
"""Regenerate the favicon set from the brand master.

Source:  docs/brand/logo-master.png (not shipped — it is 1.1 MB)
Outputs: public/favicon.ico, favicon-32.png, icon-192.png, icon-512.png,
         apple-touch-icon.png

Run with Pillow installed:  python3 scripts/generate-icons.py
"""
from PIL import Image

MASTER = "docs/brand/logo-master.png"

src = Image.open(MASTER).convert("RGBA")
# The master carries faint semi-transparent grid artefacts around the artwork;
# drop anything under alpha 60 so the crop follows the logo itself.
alpha = src.getchannel("A").point(lambda v: v if v > 60 else 0)
src.putalpha(alpha)
art = src.crop(alpha.getbbox())
w, h = art.size
side = int(max(w, h) * 1.04)  # square canvas with a little breathing room
master = Image.new("RGBA", (side, side), (0, 0, 0, 0))
master.paste(art, ((side - w) // 2, (side - h) // 2), art)


def png(size: int, path: str, background: tuple[int, int, int] | None = None,
        colors: int | None = None) -> None:
    icon = master.resize((size, size), Image.LANCZOS)
    if background:
        # iOS paints transparency black, so the touch icon ships flattened.
        flat = Image.new("RGB", (size, size), background)
        flat.paste(icon, (0, 0), icon)
        icon = flat
    if colors:
        icon = icon.quantize(colors=colors, method=Image.FASTOCTREE)
    icon.save(path, optimize=True)


png(32, "public/favicon-32.png")
png(192, "public/icon-192.png", colors=64)
png(512, "public/icon-512.png", colors=64)
png(180, "public/apple-touch-icon.png", background=(255, 255, 255))
master.resize((256, 256), Image.LANCZOS).save(
    "public/favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)]
)
print("icons written to public/")
