"""Measure the source logo: brand colours, masks, stroke width, glyph columns."""
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
SRC = ROOT / "logo_dysonans.jpg"
OUT = ROOT / "tools" / "work"
OUT.mkdir(parents=True, exist_ok=True)

img = np.asarray(Image.open(SRC).convert("RGB")).astype(int)
h, w, _ = img.shape
r, g, b = img[..., 0], img[..., 1], img[..., 2]

white = (r > 170) & (g > 170) & (b > 170)
red = (r > 140) & (g < 90) & (b < 90)
ground = ~white & ~red & (abs(r - g) < 20) & (abs(g - b) < 20) & (r < 90)


def median(mask):
    px = img[mask]
    return tuple(int(v) for v in np.median(px, axis=0))


def hexc(c):
    return "#%02X%02X%02X" % c


# Core samples away from anti-aliased edges
def eroded(mask, n=2):
    m = mask.copy()
    for _ in range(n):
        m = m & np.roll(m, 1, 0) & np.roll(m, -1, 0) & np.roll(m, 1, 1) & np.roll(m, -1, 1)
    return m


print("size", w, h)
print("ground", hexc(median(eroded(ground, 3))))
print("white ", hexc(median(eroded(white, 3))))
print("red   ", hexc(median(eroded(red, 3))))

Image.fromarray((white * 255).astype(np.uint8)).save(OUT / "mask-white.png")
Image.fromarray((red * 255).astype(np.uint8)).save(OUT / "mask-red.png")

# Stroke width: run lengths of horizontal white runs in the middle band
runs = []
for y in range(110, 200, 3):
    row = white[y]
    x = 0
    while x < w:
        if row[x]:
            s = x
            while x < w and row[x]:
                x += 1
            runs.append(x - s)
        x += 1
runs = [v for v in runs if 8 < v < 60]
print("stroke runs median", np.median(runs), "p25", np.percentile(runs, 25), "p75", np.percentile(runs, 75))

# Glyph columns: x spans that contain ink
ink = white | red
cols = ink.any(axis=0)
spans = []
x = 0
while x < w:
    if cols[x]:
        s = x
        while x < w and cols[x]:
            x += 1
        spans.append((s, x - 1))
    x += 1
for s, e in spans:
    ys = np.where(ink[:, s : e + 1].any(axis=1))[0]
    kind = "red" if red[:, s : e + 1].sum() > white[:, s : e + 1].sum() else "white"
    print(f"glyph x {s:4d}-{e:4d}  y {ys.min():3d}-{ys.max():3d}  {kind}")

# Red parts
ys, xs = np.where(red)
print("red bbox", xs.min(), xs.max(), ys.min(), ys.max())
