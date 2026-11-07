// Generates the illustrations in public/images/ (drawn as SVG in scripts/illustrations/), the
// social share image, the text logo (SVG + PNG), and the favicons and app icons.
//
//   npm run images                 create any of these files that don't exist yet (never overwrites)
//   npm run images -- photos       re-render the illustrations from their SVGs: OVERWRITES real photos
//   npm run images -- og           rebuild the share image, e.g. after changing the phone number
//   npm run images -- icons        rebuild the favicons and app icons, e.g. after a colour change
//   npm run images -- logo         rebuild the text logo (only if you still use it)
//   npm run images -- --force      rebuild everything: OVERWRITES real photos and your logo
//
// The pictures on the site are illustrations, not photos. Any of them can be replaced with a real
// photo of the SAME file name and size; after that, don't run `photos` or `--force` again.
// To change an illustration, edit its SVG in scripts/illustrations/ and run `npm run images -- photos`.
//
// Colours are read from src/styles/global.css (@theme) and the phone number from src/data/site.ts.
// The SVGs are drawn in the default orange: after changing the brand colours, `photos` and `og`
// redraw them in the new ones.
import sharp from 'sharp';
import { writeFile, readFile, mkdir, access } from 'node:fs/promises';

const OUT = 'public';
const IMG = `${OUT}/images`;
const SRC = 'scripts/illustrations';
await mkdir(IMG, { recursive: true });

const GROUPS = ['photos', 'logo', 'icons', 'og'];
const args = process.argv.slice(2);
const force = args.includes('--force');
const named = args.filter((a) => !a.startsWith('--'));
const unknown = named.filter((g) => !GROUPS.includes(g));
if (unknown.length) {
  console.error(`Unknown group: ${unknown.join(', ')}. Use any of: ${GROUPS.join(', ')} (or --force for all).`);
  process.exit(1);
}
// Named groups are rebuilt. With no names, every group runs but existing files are kept (unless --force).
const overwrite = (group) => force || named.includes(group);
const runs = (group) => named.length === 0 || named.includes(group);

// Brand colours from the @theme block, so the generated files follow the site.
const css = await readFile('src/styles/global.css', 'utf8');
const color = (name, fallback) => css.match(new RegExp(`--color-${name}:\\s*(#[0-9a-fA-F]{3,8})`))?.[1] ?? fallback;
const ORANGE = color('brand', '#F97316');
const DARK = color('brand-dark', '#C2410C');
const DARKER = color('brand-darker', '#9A3412');
const TINT = color('brand-tint', '#FFF7ED');
const INK = color('ink', '#1F2937');
const SOFT = color('ink-soft', '#4B5563');
// Phone number from src/data/site.ts (plain Node can't import TypeScript, so read it as text).
const siteTs = await readFile('src/data/site.ts', 'utf8');
const PHONE = siteTs.match(/phone:\s*\{[^}]*display:\s*'([^']+)'/)?.[1];
if (!PHONE) throw new Error('Could not read phone.display from src/data/site.ts');

const written = [];
const skipped = [];
const exists = (f) => access(f).then(() => true, () => false);
/** Writes a file unless it exists and its group isn't being rebuilt. */
async function output(group, file, make) {
  if (!overwrite(group) && (await exists(file))) {
    skipped.push(file);
    return;
  }
  await make(file);
  written.push(file);
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/'/g, '&#39;');

// The SVGs use the default theme colours (left). If global.css sets others, they're swapped in,
// and the light orange tints are mixed from the new brand colour and white.
const hex6 = (c) => {
  let h = c.slice(1);
  if (h.length <= 4) h = [...h].map((d) => d + d).join('');
  return `#${h.slice(0, 6).toUpperCase()}`;
};
const tint = (c, share) =>
  '#' +
  [1, 3, 5]
    .map((i) => Math.round(255 - (255 - parseInt(hex6(c).slice(i, i + 2), 16)) * share).toString(16).padStart(2, '0'))
    .join('')
    .toUpperCase();
const swaps = new Map(
  [
    ['#F97316', ORANGE],
    ['#C2410C', DARK],
    ['#9A3412', DARKER],
    ['#FFF7ED', TINT],
    ['#1F2937', INK],
  ]
    .map(([from, to]) => [from, hex6(to)])
    .filter(([from, to]) => from !== to),
);
if (swaps.has('#F97316')) {
  for (const [from, share] of [['#FFEDD5', 0.16], ['#FED7AA', 0.33], ['#FDBA74', 0.55], ['#FB923C', 0.8]]) {
    swaps.set(from, tint(ORANGE, share));
  }
}

/** Reads scripts/illustrations/<name>.svg, in the site's colours. */
async function illustration(name) {
  const file = `${SRC}/${name}.svg`;
  const svg = await readFile(file, 'utf8').catch(() => {
    throw new Error(`Missing ${file}. Restore it from git, or put a real photo in ${IMG}/ and skip this group.`);
  });
  return svg.replace(/#[0-9A-Fa-f]{6}\b/g, (c) => swaps.get(c.toUpperCase()) ?? c);
}

/** Draws an SVG at exactly w×h pixels (rendered at that size, so the lines stay crisp). */
function render(svg, w, h) {
  const svgWidth = Number(svg.match(/viewBox="[\d.]+ [\d.]+ ([\d.]+)/)?.[1] ?? w);
  return sharp(Buffer.from(svg), { density: (72 * w) / svgWidth }).resize(w, h);
}

const photos = [
  // [SVG in scripts/illustrations/, file in public/images/, width, height]
  ['hero-technician', 'hero-technician.webp', 1200, 900],
  ['hero-technician', 'hero-technician-640.webp', 640, 480],
  ['about-technician-van', 'about-technician-van.webp', 960, 640],
  ['service-front-loader', 'service-front-loader.webp', 960, 640],
  ['service-top-loader', 'service-top-loader.webp', 960, 640],
  ['service-washer-dryer', 'service-washer-dryer.webp', 960, 640],
  ['service-installation', 'service-installation.webp', 960, 640],
  ['service-servicing', 'service-servicing.webp', 960, 640],
  ['service-parts', 'service-parts.webp', 960, 640],
  ['blog-smelly-washing-machine', 'blog-smelly-washing-machine.webp', 960, 540],
  ['blog-worn-bearings', 'blog-worn-bearings.webp', 960, 540],
  ['blog-load-shedding', 'blog-load-shedding.webp', 960, 540],
  ['blog-front-vs-top-loader', 'blog-front-vs-top-loader.webp', 960, 540],
];

if (runs('photos')) {
  for (const [name, file, w, h] of photos) {
    await output('photos', `${IMG}/${file}`, async (f) =>
      render(await illustration(name), w, h).webp({ quality: 82, effort: 6, smartSubsample: true }).toFile(f),
    );
  }
}

// Logo (text wordmark) — PNG for schema, SVG for anything else.
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 44" width="660" height="132">
  <rect width="220" height="44" fill="#ffffff"/>
  <rect x="0" y="4" width="36" height="36" rx="8" fill="${ORANGE}"/>
  <circle cx="18" cy="22" r="10" fill="none" stroke="${INK}" stroke-width="3"/>
  <circle cx="18" cy="22" r="4" fill="${INK}"/>
  <text x="44" y="26" font-family="Arial, sans-serif" font-size="22" font-weight="800" fill="${INK}">Pro<tspan fill="${DARK}">Serv</tspan></text>
  <text x="45" y="40" font-family="Arial, sans-serif" font-size="9.5" font-weight="700" letter-spacing="0.6" fill="${SOFT}">WASHING MACHINE REPAIRS</text>
</svg>`;
if (runs('logo')) {
  await output('logo', `${OUT}/logo.svg`, (f) => writeFile(f, logoSvg));
  await output('logo', `${OUT}/logo.png`, (f) => sharp(Buffer.from(logoSvg)).png().toFile(f));
}

// Favicon (orange tile with drum mark)
const iconSvg = (size) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="${size}" height="${size}">
  <rect width="64" height="64" rx="14" fill="${ORANGE}"/>
  <circle cx="32" cy="32" r="18" fill="none" stroke="${INK}" stroke-width="6"/>
  <circle cx="32" cy="32" r="7" fill="${INK}"/>
</svg>`;
// favicon.ico containing a 32x32 PNG (valid ICO with embedded PNG)
async function writeIco(file) {
  const png32 = await sharp(Buffer.from(iconSvg(32))).png().toBuffer();
  const header = Buffer.alloc(22);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type icon
  header.writeUInt16LE(1, 4); // count
  header.writeUInt8(32, 6); // width
  header.writeUInt8(32, 7); // height
  header.writeUInt8(0, 8); // colours
  header.writeUInt8(0, 9); // reserved
  header.writeUInt16LE(1, 10); // planes
  header.writeUInt16LE(32, 12); // bpp
  header.writeUInt32LE(png32.length, 14); // size
  header.writeUInt32LE(22, 18); // offset
  await writeFile(file, Buffer.concat([header, png32]));
}

if (runs('icons')) {
  await output('icons', `${OUT}/favicon.svg`, (f) => writeFile(f, iconSvg(64)));
  await output('icons', `${OUT}/favicon.ico`, writeIco);
  await output('icons', `${OUT}/apple-touch-icon.png`, (f) => sharp(Buffer.from(iconSvg(180))).png().toFile(f));
  await output('icons', `${OUT}/icon-192.png`, (f) => sharp(Buffer.from(iconSvg(192))).png().toFile(f));
  await output('icons', `${OUT}/icon-512.png`, (f) => sharp(Buffer.from(iconSvg(512))).png().toFile(f));
  if (overwrite('icons')) {
    // Keep the installed-app theme colour in step with the brand colour.
    const manifestFile = `${OUT}/site.webmanifest`;
    const manifest = JSON.parse(await readFile(manifestFile, 'utf8'));
    manifest.theme_color = DARK.toUpperCase();
    await writeFile(manifestFile, JSON.stringify(manifest, null, 2) + '\n');
    written.push(manifestFile);
  }
}

// Social share image 1200x630, from scripts/illustrations/og-default.svg with the phone number filled in.
/** Fits the orange pill (id="phone-pill") to the phone number (id="phone") as it renders. */
async function fitPhonePill(svg) {
  const text = svg.match(/<text id="phone"[^>]*>[^<]*<\/text>/)?.[0];
  const pill = svg.match(/<rect id="phone-pill"[^>]*>/)?.[0];
  if (!text || !pill) return svg;
  const probe = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">${text}</svg>`;
  const { info } = await sharp(Buffer.from(probe)).trim().toBuffer({ resolveWithObject: true });
  const right = info.width - info.trimOffsetLeft; // right edge of the number
  const x = Number(pill.match(/ x="([\d.]+)"/)?.[1] ?? 0);
  return svg.replace(pill, pill.replace(/ width="[\d.]+"/, ` width="${Math.round(right + 40 - x)}"`));
}
if (runs('og')) {
  await output('og', `${IMG}/og-default.jpg`, async (f) => {
    const svg = await fitPhonePill((await illustration('og-default')).replaceAll('{{PHONE}}', esc(PHONE)));
    await render(svg, 1200, 630).jpeg({ quality: 85, mozjpeg: true }).toFile(f);
  });
}

console.log(`Wrote ${written.length} file(s)${written.length ? ': ' + written.join(', ') : ''}`);
if (skipped.length) {
  console.log(`Kept ${skipped.length} existing file(s). Name a group to rebuild it, e.g. "npm run images -- icons".`);
}
