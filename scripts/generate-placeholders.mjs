// Generates the placeholder photos, the text logo (SVG + PNG), the favicons and app icons,
// and the social share image.
//
//   npm run images                 create any of these files that don't exist yet (never overwrites)
//   npm run images -- icons        rebuild the favicons and app icons, e.g. after a colour change
//   npm run images -- logo og      rebuild the text logo and the share image (only if you still use them)
//   npm run images -- photos       rebuild the placeholder photos: OVERWRITES real photos
//   npm run images -- --force      rebuild everything: OVERWRITES real photos and your logo
//
// Colours are read from src/styles/global.css (@theme) and the phone number from src/data/site.ts.
// Replace each placeholder in public/images/ with a real photo of the SAME file name and size.
import sharp from 'sharp';
import { writeFile, readFile, mkdir, access } from 'node:fs/promises';

const OUT = 'public';
const IMG = `${OUT}/images`;
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
const INK = color('ink', '#1F2937');
const SOFT = color('ink-soft', '#4B5563');
const SURFACE = color('surface', '#F3F4F6');
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

const placeholders = [
  // [file, width, height, label]
  ['hero-technician.webp', 1200, 900, 'Technician at a customer\'s front loader'],
  ['hero-technician-640.webp', 640, 480, 'Technician at a customer\'s front loader'],
  ['about-technician-van.webp', 960, 640, 'Technician with branded van'],
  ['service-front-loader.webp', 960, 640, 'Front loader repair in progress'],
  ['service-top-loader.webp', 960, 640, 'Top loader with lid open'],
  ['service-washer-dryer.webp', 960, 640, 'Washer-dryer in a kitchen'],
  ['service-installation.webp', 960, 640, 'Connecting inlet hose to tap'],
  ['service-servicing.webp', 960, 640, 'Cleaning the pump filter'],
  ['service-parts.webp', 960, 640, 'Pump, door seal and brushes'],
  ['blog-smelly-washing-machine.webp', 960, 540, 'Door seal being cleaned'],
  ['blog-worn-bearings.webp', 960, 540, 'Drum bearing removed from a tub'],
  ['blog-load-shedding.webp', 960, 540, 'Machine plugged into surge protector'],
  ['blog-front-vs-top-loader.webp', 960, 540, 'Front loader next to a top loader'],
];

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/'/g, '&#39;');

function placeholderSvg(w, h, label, file) {
  const fs = Math.round(w / 26);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="100%" height="100%" fill="${SURFACE}"/>
  <rect x="12" y="12" width="${w - 24}" height="${h - 24}" fill="none" stroke="${ORANGE}" stroke-width="6" stroke-dasharray="24 14" rx="16"/>
  <circle cx="${w / 2}" cy="${h / 2 - fs * 2.2}" r="${fs * 1.6}" fill="none" stroke="${ORANGE}" stroke-width="${fs / 4}"/>
  <circle cx="${w / 2}" cy="${h / 2 - fs * 2.2}" r="${fs * 0.6}" fill="${ORANGE}"/>
  <text x="50%" y="${h / 2 + fs * 0.6}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${fs}" font-weight="700" fill="${INK}">PLACEHOLDER PHOTO</text>
  <text x="50%" y="${h / 2 + fs * 2}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${fs * 0.75}" fill="${DARK}">${esc(label)}</text>
  <text x="50%" y="${h / 2 + fs * 3.3}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${fs * 0.55}" fill="${SOFT}">${esc(file)} · ${w}×${h}</text>
</svg>`;
}

if (runs('photos')) {
  for (const [file, w, h, label] of placeholders) {
    await output('photos', `${IMG}/${file}`, (f) => sharp(Buffer.from(placeholderSvg(w, h, label, file))).webp({ quality: 70 }).toFile(f));
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

// Social share image 1200x630
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#ffffff"/>
  <rect x="0" y="590" width="1200" height="40" fill="${ORANGE}"/>
  <rect x="80" y="110" width="140" height="140" rx="30" fill="${ORANGE}"/>
  <circle cx="150" cy="180" r="40" fill="none" stroke="${INK}" stroke-width="12"/>
  <circle cx="150" cy="180" r="16" fill="${INK}"/>
  <text x="250" y="200" font-family="Arial, sans-serif" font-size="96" font-weight="800" fill="${INK}">Pro<tspan fill="${DARK}">Serv</tspan></text>
  <text x="82" y="340" font-family="Arial, sans-serif" font-size="58" font-weight="700" fill="${INK}">Washing machine repairs</text>
  <text x="82" y="410" font-family="Arial, sans-serif" font-size="58" font-weight="700" fill="${INK}">at your door, across Gauteng</text>
  <text x="82" y="510" font-family="Arial, sans-serif" font-size="46" font-weight="700" fill="${DARK}">Call or WhatsApp ${PHONE}</text>
</svg>`;
if (runs('og')) {
  await output('og', `${IMG}/og-default.jpg`, (f) => sharp(Buffer.from(ogSvg)).jpeg({ quality: 85 }).toFile(f));
}

console.log(`Wrote ${written.length} file(s)${written.length ? ': ' + written.join(', ') : ''}`);
if (skipped.length) {
  console.log(`Kept ${skipped.length} existing file(s). Name a group to rebuild it, e.g. "npm run images -- icons".`);
}
