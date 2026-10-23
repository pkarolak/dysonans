// Rebuilds the Dysonans wordmark from measured geometry (source: logo_dysonans.jpg, 1024x288).
// One stroke width, one corner radius, flat caps. Writes stroked and outlined SVGs.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Resvg } from "@resvg/resvg-js";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const BRAND = join(ROOT, "src", "assets", "brand");
const WORK = join(ROOT, "tools", "work");
mkdirSync(BRAND, { recursive: true });
mkdirSync(WORK, { recursive: true });

export const COLORS = { ground: "#2C3031", ink: "#FFFFFF", red: "#D8252B" };
const SW = Number(process.env.SW ?? 21);
const H = SW / 2;

const L = (x, y, ext = [0, 0]) => ({ L: [x, y], ext });
const A = (cx, cy, r, a0, a1) => ({ A: { c: [cx, cy], r, a0, a1 } });

// Angles in degrees, screen space: 0 = right, 90 = down.
const GLYPHS = [
  {
    id: "d", color: "ink",
    paths: [{ start: [60.5, 219.5], closed: true, ops: [
      L(60.5, 59.5, [H, H]), L(101.5, 59.5, [H, 0]), A(101.5, 99.5, 40, -90, 0),
      L(141.5, 179.5), A(101.5, 179.5, 40, 0, 90), L(60.5, 219.5, [0, H]),
    ] }],
  },
  {
    id: "y", color: "red",
    paths: [
      { start: [186, -0.5], ops: [L(186, 99), A(226, 99, 40, 180, 0), L(266, -0.5)] },
      { start: [226, 130], ops: [L(226, 229.5)] },
    ],
  },
  {
    id: "s1", color: "ink",
    paths: [{ start: [369.5, 59.5], ops: [
      L(358.5, 59.5), A(358.5, 99.5, 40, 270, 180), L(318.5, 179.5),
      A(278.5, 179.5, 40, 0, 90), L(269, 219.5),
    ] }],
  },
  {
    id: "o", color: "ink",
    paths: [{ start: [392.5, 100], closed: true, ops: [
      L(392.5, 179), A(433, 179, 40.5, 180, 0), L(473.5, 100), A(433, 100, 40.5, 0, -180),
    ] }],
  },
  {
    id: "n1", color: "ink",
    paths: [{ start: [516.5, 229.5], ops: [L(516.5, 99.75), A(556.75, 99.75, 40.25, 180, 360), L(597, 229.5)] }],
  },
  {
    id: "a", color: "ink",
    paths: [
      { start: [640.5, 229.5], ops: [L(640.5, 100), A(680.75, 100, 40.25, 180, 360), L(721, 229.5)] },
      { start: [640.5, 139.5], ops: [L(721, 139.5)] },
    ],
  },
  {
    id: "n2", color: "ink",
    paths: [{ start: [764.5, 229.5], ops: [L(764.5, 99.75), A(804.5, 99.75, 40, 180, 360), L(844.5, 229.5)] }],
  },
  {
    id: "s2", color: "ink",
    paths: [{ start: [875, 59.5], ops: [
      L(885.5, 59.5), A(885.5, 99.5, 40, -90, 0), L(925.5, 179.5),
      A(965.5, 179.5, 40, 180, 90), L(975.5, 219.5),
    ] }],
  },
];
const BAR = { x: 874, y: 264, w: 102, h: 24 };

// Measurements were taken as pixel indices; pixel i covers [i, i+1].
const OFF = 0.5;
for (const gl of GLYPHS) {
  for (const p of gl.paths) {
    p.start = p.start.map((v) => v + OFF);
    for (const op of p.ops) {
      if (op.L) op.L = op.L.map((v) => v + OFF);
      else op.A.c = op.A.c.map((v) => v + OFF);
    }
  }
}

const f = (n) => +n.toFixed(2);
const pt = (c, r, a) => [c[0] + r * Math.cos((a * Math.PI) / 180), c[1] + r * Math.sin((a * Math.PI) / 180)];
const arcCmd = (r, a0, a1, end) =>
  `A${f(r)} ${f(r)} 0 ${Math.abs(a1 - a0) > 180 ? 1 : 0} ${a1 > a0 ? 1 : 0} ${f(end[0])} ${f(end[1])}`;

function strokeD(p) {
  let d = `M${p.start[0]} ${p.start[1]}`;
  for (const op of p.ops) {
    if (op.L) d += `L${op.L[0]} ${op.L[1]}`;
    else {
      const { c, r, a0, a1 } = op.A;
      d += arcCmd(r, a0, a1, pt(c, r, a1));
    }
  }
  return p.closed ? d + "Z" : d;
}

function outlineD(p) {
  const parts = [];
  let cur = p.start;
  for (const op of p.ops) {
    if (op.L) {
      const [x2, y2] = op.L;
      const dx = x2 - cur[0], dy = y2 - cur[1];
      const len = Math.hypot(dx, dy);
      const ux = dx / len, uy = dy / len, nx = -uy * H, ny = ux * H;
      const [e0, e1] = op.ext;
      const s = [cur[0] - ux * e0, cur[1] - uy * e0];
      const e = [x2 + ux * e1, y2 + uy * e1];
      const q = [[s[0] + nx, s[1] + ny], [e[0] + nx, e[1] + ny], [e[0] - nx, e[1] - ny], [s[0] - nx, s[1] - ny]];
      parts.push(`M${q.map((v) => `${f(v[0])} ${f(v[1])}`).join("L")}Z`);
      cur = op.L;
    } else {
      const { c, r, a0, a1 } = op.A;
      const ro = r + H, ri = r - H;
      const o0 = pt(c, ro, a0), o1 = pt(c, ro, a1), i1 = pt(c, ri, a1), i0 = pt(c, ri, a0);
      parts.push(
        `M${f(o0[0])} ${f(o0[1])}${arcCmd(ro, a0, a1, o1)}L${f(i1[0])} ${f(i1[1])}${arcCmd(ri, a1, a0, i0)}Z`,
      );
      cur = pt(c, r, a1);
    }
  }
  return parts.join("");
}

const VIEW_FULL = "0 0 1024 288";
const VIEW_TIGHT = "50 0 927 288";

function svg({ mode, view, ground, ink, red, title = "Dysonans" }) {
  const c = { ink, red };
  const g = GLYPHS.map((gl) => {
    const d = gl.paths.map(mode === "stroke" ? strokeD : outlineD).join("");
    return mode === "stroke"
      ? `<path id="logo-${gl.id}" d="${d}" stroke="${c[gl.color]}"/>`
      : `<path id="logo-${gl.id}" d="${d}" fill="${c[gl.color]}"/>`;
  }).join("");
  const [vx, vy, vw, vh] = view.split(" ").map(Number);
  const bg = ground ? `<rect x="${vx}" y="${vy}" width="${vw}" height="${vh}" fill="${ground}"/>` : "";
  const strokeAttrs = mode === "stroke"
    ? ` fill="none" stroke-width="${SW}" stroke-linecap="butt" stroke-linejoin="miter"` : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${view}" role="img" aria-label="${title}"><title>${title}</title>${bg}<g${strokeAttrs}>${g}</g><rect id="logo-bar" x="${BAR.x}" y="${BAR.y}" width="${BAR.w}" height="${BAR.h}" fill="${red}"/></svg>\n`;
}

const out = (name, s) => writeFileSync(join(BRAND, name), s);
const { ground, ink, red } = COLORS;

out("logo-stroke.svg", svg({ mode: "stroke", view: VIEW_TIGHT, ink, red }));
out("logo.svg", svg({ mode: "outline", view: VIEW_TIGHT, ink, red }));
out("logo-on-ground.svg", svg({ mode: "outline", view: "0 0 1024 288", ground, ink, red }));
out("logo-inverse.svg", svg({ mode: "outline", view: VIEW_TIGHT, ink: ground, red }));
out("logo-mono-white.svg", svg({ mode: "outline", view: VIEW_TIGHT, ink: "#FFFFFF", red: "#FFFFFF" }));
out("logo-mono-black.svg", svg({ mode: "outline", view: VIEW_TIGHT, ink: "#000000", red: "#000000" }));

// The fork alone, as an icon on the ground.
const fork = GLYPHS.find((g) => g.id === "y");
const forkD = fork.paths.map(outlineD).join("");
out(
  "fork.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="126 -10 200 250"><rect x="126" y="-10" width="200" height="250" rx="0" fill="${ground}"/><path d="${forkD}" fill="${red}"/></svg>\n`,
);
writeFileSync(
  join(ROOT, "public", "favicon.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="106 -10 240 240"><rect x="106" y="-10" width="240" height="240" rx="48" fill="${ground}"/><g transform="translate(226 110) scale(0.82) translate(-226 -115)"><path d="${forkD}" fill="${red}"/></g></svg>\n`,
);

// Renders for the fit check, on the same canvas as the source.
for (const mode of ["stroke", "outline"]) {
  const s = svg({ mode, view: VIEW_FULL, ground, ink, red });
  const png = new Resvg(s, { fitTo: { mode: "width", value: 1024 } }).render().asPng();
  writeFileSync(join(WORK, `render-${mode}.png`), png);
}
console.log("brand assets written to", BRAND);
