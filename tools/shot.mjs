// node tools/shot.mjs <path> <out.jpg> [--width 1440] [--height 900] [--y 0 | --sel ".css"] [--wait 1400] [--eval "js"]
import { homedir } from 'node:os';
import { join } from 'node:path';

const { Browser, sleep } = await import(join(homedir(), '.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs'));
const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(`--${k}`); return i >= 0 ? args[i + 1] : d; };
const [path, out] = args;
const width = Number(opt('width', 1440));
const height = Number(opt('height', 900));
const browser = await Browser.launch({ width, height });
const page = await browser.newPage({ width, height, mobile: width < 600, reducedMotion: args.includes('--reduce') });
await page.goto(new URL(path, 'http://localhost:4321').href, { settleMs: 1200 });
const sel = opt('sel');
const y = opt('y');
if (sel) await page.eval(`(() => { const el = document.querySelector(${JSON.stringify(sel)}); const top = el.getBoundingClientRect().top + scrollY + ${Number(opt('offset', 0))}; (window.__lenis ? window.__lenis.scrollTo(top, { immediate: true }) : scrollTo(0, top)); })()`);
else if (y) await page.eval(`(window.__lenis ? window.__lenis.scrollTo(${Number(y)}, { immediate: true }) : scrollTo(0, ${Number(y)}))`);
await sleep(Number(opt('wait', 1600)));
const ev = opt('eval');
if (ev) console.log(JSON.stringify(await page.eval(ev), null, 1));
await page.screenshot({ path: out });
await browser.close();
console.log('wrote', out);
