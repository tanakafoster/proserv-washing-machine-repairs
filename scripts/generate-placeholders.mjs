// Generates clearly labelled placeholder images, the logo PNG, favicons and the social share image.
// Run: npm run images   (only needed once, or after changing the logo/colours)
// Replace each placeholder in public/images/ with a real photo of the SAME file name and size.
import sharp from 'sharp';
import { writeFile, mkdir } from 'node:fs/promises';

const OUT = 'public';
const IMG = `${OUT}/images`;
await mkdir(IMG, { recursive: true });

const ORANGE = '#F97316';
const DARK = '#C2410C';
const INK = '#1F2937';

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
  <rect width="100%" height="100%" fill="#F3F4F6"/>
  <rect x="12" y="12" width="${w - 24}" height="${h - 24}" fill="none" stroke="${ORANGE}" stroke-width="6" stroke-dasharray="24 14" rx="16"/>
  <circle cx="${w / 2}" cy="${h / 2 - fs * 2.2}" r="${fs * 1.6}" fill="none" stroke="${ORANGE}" stroke-width="${fs / 4}"/>
  <circle cx="${w / 2}" cy="${h / 2 - fs * 2.2}" r="${fs * 0.6}" fill="${ORANGE}"/>
  <text x="50%" y="${h / 2 + fs * 0.6}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${fs}" font-weight="700" fill="${INK}">PLACEHOLDER PHOTO</text>
  <text x="50%" y="${h / 2 + fs * 2}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${fs * 0.75}" fill="${DARK}">${esc(label)}</text>
  <text x="50%" y="${h / 2 + fs * 3.3}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${fs * 0.55}" fill="#4B5563">${esc(file)} · ${w}×${h}</text>
</svg>`;
}

for (const [file, w, h, label] of placeholders) {
  await sharp(Buffer.from(placeholderSvg(w, h, label, file))).webp({ quality: 70 }).toFile(`${IMG}/${file}`);
}

// Logo (text wordmark) — PNG for schema, SVG for anything else.
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 44" width="660" height="132">
  <rect width="220" height="44" fill="#ffffff"/>
  <rect x="0" y="4" width="36" height="36" rx="8" fill="${ORANGE}"/>
  <circle cx="18" cy="22" r="10" fill="none" stroke="${INK}" stroke-width="3"/>
  <circle cx="18" cy="22" r="4" fill="${INK}"/>
  <text x="44" y="26" font-family="Arial, sans-serif" font-size="22" font-weight="800" fill="${INK}">Pro<tspan fill="${DARK}">Serv</tspan></text>
  <text x="45" y="40" font-family="Arial, sans-serif" font-size="9.5" font-weight="700" letter-spacing="0.6" fill="#4B5563">WASHING MACHINE REPAIRS</text>
</svg>`;
await writeFile(`${OUT}/logo.svg`, logoSvg);
await sharp(Buffer.from(logoSvg)).png().toFile(`${OUT}/logo.png`);

// Favicon (orange tile with drum mark)
const iconSvg = (size) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="${size}" height="${size}">
  <rect width="64" height="64" rx="14" fill="${ORANGE}"/>
  <circle cx="32" cy="32" r="18" fill="none" stroke="${INK}" stroke-width="6"/>
  <circle cx="32" cy="32" r="7" fill="${INK}"/>
</svg>`;
await writeFile(`${OUT}/favicon.svg`, iconSvg(64));
await sharp(Buffer.from(iconSvg(180))).png().toFile(`${OUT}/apple-touch-icon.png`);
await sharp(Buffer.from(iconSvg(192))).png().toFile(`${OUT}/icon-192.png`);
await sharp(Buffer.from(iconSvg(512))).png().toFile(`${OUT}/icon-512.png`);

// favicon.ico containing a 32x32 PNG (valid ICO with embedded PNG)
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
await writeFile(`${OUT}/favicon.ico`, Buffer.concat([header, png32]));

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
  <text x="82" y="510" font-family="Arial, sans-serif" font-size="46" font-weight="700" fill="${DARK}">Call or WhatsApp 079 895 0496</text>
</svg>`;
await sharp(Buffer.from(ogSvg)).jpeg({ quality: 85 }).toFile(`${IMG}/og-default.jpg`);

console.log(`Generated ${placeholders.length} placeholders, logo, favicons and og-default.jpg`);
