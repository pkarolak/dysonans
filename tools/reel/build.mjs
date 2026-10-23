// Renders the hero reel: Ken Burns moves over choir photos, dissolved together with the Gorizia clip.
// node tools/reel/build.mjs  ->  public/media/hero-reel.{mp4,webm} and hero-reel-poster.jpg
import { execFileSync } from 'node:child_process';

const W = 1280, H = 720, FPS = 25, SHOT = 3.6, FADE = 1;
const photo = (f) => `src/assets/photos/${f}`;
const ease = (n) => `(0.5-0.5*cos(PI*on/${n}))`;

// Each move gets the frame count n; zoompan works on a 4x upscale so slow moves stay smooth.
const moves = {
  pushIn: (n) => ({ z: `1+0.22*${ease(n)}`, x: 'iw/2-(iw/zoom/2)', y: 'ih/2-(ih/zoom/2)' }),
  pullOut: (n) => ({ z: `1.24-0.22*${ease(n)}`, x: 'iw/2-(iw/zoom/2)', y: 'ih/2-(ih/zoom/2)' }),
  panRight: (n) => ({ z: '1.24', x: `(iw-iw/zoom)*${ease(n)}`, y: 'ih/2-(ih/zoom/2)' }),
  panLeft: (n) => ({ z: '1.24', x: `(iw-iw/zoom)*(1-${ease(n)})`, y: 'ih/2-(ih/zoom/2)' }),
  riseLeft: (n) => ({ z: `1.1+0.16*${ease(n)}`, x: `(iw-iw/zoom)*0.35`, y: `(ih-ih/zoom)*(1-${ease(n)})` }),
};

const shots = [
  { clip: 'public/media/hero-gorizia.mp4', from: 0 },
  { img: photo('rome-st-peters-altar.jpg'), move: 'pushIn' },
  { img: photo('choir-golden-church.jpg'), move: 'panRight' },
  { img: photo('church-conductor.jpg'), move: 'riseLeft' },
  { img: photo('rome-st-peters-nave.jpg'), move: 'pullOut' },
  { img: photo('church-madonna.jpg'), move: 'panLeft' },
  { img: photo('stage-red-curtains.jpg'), move: 'panRight' },
  { img: photo('scores-closeup.jpg'), move: 'pushIn' },
  { img: photo('wooden-church.jpg'), move: 'pullOut' },
  { img: photo('hall-stained-glass.jpg'), move: 'panLeft' },
  { clip: 'public/media/hero-gorizia.mp4', from: 5.6 },
  // The opening again, so the last dissolve lands on the first frame and the loop is seamless.
  { clip: 'public/media/hero-gorizia.mp4', from: 0, dur: FADE + 0.04 },
];

const inputs = [];
const chains = [];
shots.forEach((s, i) => {
  const dur = s.dur ?? SHOT;
  const n = Math.round(dur * FPS);
  if (s.clip) {
    inputs.push('-ss', String(s.from), '-t', String(dur), '-i', s.clip);
    chains.push(`[${i}:v]fps=${FPS},scale=${W}:${H}:force_original_aspect_ratio=increase,crop=${W}:${H},setsar=1,format=yuv420p,settb=AVTB[v${i}]`);
  } else {
    const m = moves[s.move](n);
    inputs.push('-i', s.img);
    chains.push(
      `[${i}:v]scale=${W * 4}:${H * 4}:force_original_aspect_ratio=increase,crop=${W * 4}:${H * 4},` +
      `zoompan=z='${m.z}':x='${m.x}':y='${m.y}':d=${n}:s=${W}x${H}:fps=${FPS},` +
      `trim=end_frame=${n},setsar=1,format=yuv420p,settb=AVTB[v${i}]`,
    );
  }
});

let prev = 'v0';
let t = shots[0].dur ?? SHOT;
for (let i = 1; i < shots.length; i++) {
  const out = i === shots.length - 1 ? 'joined' : `x${i}`;
  chains.push(`[${prev}][v${i}]xfade=transition=fade:duration=${FADE}:offset=${(t - FADE).toFixed(3)}[${out}]`);
  t += (shots[i].dur ?? SHOT) - FADE;
  prev = out;
}
// Drop the overlap at the start so frame 0 equals the final frame after the closing dissolve.
const total = t - FADE;
chains.push(`[joined]trim=start=${FADE}:duration=${total.toFixed(3)},setpts=PTS-STARTPTS,eq=saturation=0.9:contrast=1.04[out]`);

const graph = chains.join(';');
const run = (args) => execFileSync('ffmpeg', ['-y', '-hide_banner', '-loglevel', 'error', ...args], { stdio: 'inherit' });

run([...inputs, '-filter_complex', graph, '-map', '[out]', '-an', '-c:v', 'libx264', '-preset', 'slow', '-crf', '29', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', 'public/media/hero-reel.mp4']);
run(['-i', 'public/media/hero-reel.mp4', '-an', '-c:v', 'libvpx-vp9', '-b:v', '0', '-crf', '42', '-row-mt', '1', '-deadline', 'good', '-cpu-used', '3', 'public/media/hero-reel.webm']);
run(['-ss', '0', '-i', 'public/media/hero-reel.mp4', '-frames:v', '1', '-q:v', '4', 'public/media/hero-reel-poster.jpg']);
console.log(`hero reel: ${total.toFixed(1)}s`);
