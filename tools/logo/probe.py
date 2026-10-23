"""Print ink runs along chosen rows and columns, per colour, for fitting geometry."""
import sys
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
img = np.asarray(Image.open(ROOT / "logo_dysonans.jpg").convert("RGB")).astype(int)
r, g, b = img[..., 0], img[..., 1], img[..., 2]
masks = {
    "w": (r > 150) & (g > 150) & (b > 150),
    "r": (r > 130) & (g < 100) & (b < 100),
}


def runs(line):
    out, x, n = [], 0, len(line)
    while x < n:
        if line[x]:
            s = x
            while x < n and line[x]:
                x += 1
            out.append((s, x - 1))
        x += 1
    return out


x0, x1 = int(sys.argv[1]), int(sys.argv[2])
for key, m in masks.items():
    print(f"== {key} rows (x {x0}-{x1})")
    for y in list(range(0, 288, 8)) + [50, 51, 52, 227, 228, 229]:
        rr = [(s + x0, e + x0) for s, e in runs(m[y, x0 : x1 + 1])]
        if rr:
            print(f"  y{y:3d}: {rr}")
    print(f"== {key} cols")
    for x in range(x0, x1 + 1, 6):
        cc = runs(m[:, x])
        if cc:
            print(f"  x{x:4d}: {cc}")
