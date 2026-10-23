"""Score a rendered rebuild against the source JPG: IoU per colour, plus a diff image."""
import sys
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
WORK = ROOT / "tools" / "work"


def masks(path):
    a = np.asarray(Image.open(path).convert("RGB")).astype(int)
    r, g, b = a[..., 0], a[..., 1], a[..., 2]
    return {
        "white": (r > 150) & (g > 150) & (b > 150),
        "red": (r > 130) & (g < 100) & (b < 100),
    }


src = masks(ROOT / "logo_dysonans.jpg")
for name in sys.argv[1:] or ["render-stroke.png", "render-outline.png"]:
    got = masks(WORK / name)
    line = [name]
    for k in ("white", "red"):
        inter = (src[k] & got[k]).sum()
        union = (src[k] | got[k]).sum()
        line.append(f"{k} IoU {inter / union:.4f}")
    print("  ".join(line))
    diff = np.zeros(src["white"].shape + (3,), np.uint8)
    both = (src["white"] | src["red"]) & (got["white"] | got["red"])
    diff[both] = (90, 90, 90)
    diff[(src["white"] | src["red"]) & ~(got["white"] | got["red"])] = (255, 60, 60)
    diff[~(src["white"] | src["red"]) & (got["white"] | got["red"])] = (60, 160, 255)
    Image.fromarray(diff).save(WORK / f"diff-{name}")
