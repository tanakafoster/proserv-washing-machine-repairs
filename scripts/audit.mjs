// Post-build SEO audit. Run after `npm run build`:  npm run audit
// Writes PAGE-AUDIT.md and exits non-zero if it finds hard errors
// (broken internal links, missing alt text, invalid JSON-LD, duplicate titles/metas, missing H1).
import { readFile, writeFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const DIST = 'dist';
const SITE = 'https://proservwashingmachinerepairs.co.za';

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}
const exists = async (p) => stat(p).then(() => true).catch(() => false);
const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&#39;|&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ');
const text = (html) =>
  decode(html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<svg[\s\S]*?<\/svg>/g, ' ').replace(/<[^>]+>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim();
const words = (s) => (s.match(/[A-Za-z0-9À-ž'’]+/g) || []).length;

// Primary keywords from SEO-KEYWORD-MAP.md
const kwMap = {};
for (const line of (await readFile('SEO-KEYWORD-MAP.md', 'utf8')).split('\n')) {
  const m = line.match(/^\| `([^`]+)` \| ([^|]+) \|/);
  if (m) kwMap[m[1]] = m[2].trim();
}

const files = (await walk(DIST)).sort();
const pages = [];
const errors = [];
const warnings = [];

for (const file of files) {
  const html = await readFile(file, 'utf8');
  let url = '/' + path.relative(DIST, file).replace(/index\.html$/, '').replace(/\\/g, '/');
  if (url === '/404.html') url = '/404.html';
  const title = decode(html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? '');
  const desc = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '');
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1] ?? '';
  const noindex = /<meta name="robots" content="[^"]*noindex/.test(html);
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => text(m[1]));
  const mainHtml = html.match(/<main[^>]*>([\s\S]*?)<\/main>/)?.[1] ?? '';
  // Exclude breadcrumbs from the "first 100 words" check
  const mainNoCrumbs = mainHtml.replace(/<nav aria-label="Breadcrumb"[\s\S]*?<\/nav>/, '');
  const mainText = text(mainNoCrumbs);
  const wc = words(mainText);
  const first100 = mainText.split(/\s+/).slice(0, 100).join(' ').toLowerCase();

  // Images
  const imgs = [...html.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]);
  const missingAlt = imgs.filter((t) => !/\balt="[^"]+"/.test(t)).length;
  const missingDims = imgs.filter((t) => !/\bwidth="/.test(t) || !/\bheight="/.test(t)).length;

  // Schema
  const types = [];
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const json = JSON.parse(m[1]);
      for (const node of json['@graph'] ?? [json]) {
        const t = node['@type'];
        types.push(Array.isArray(t) ? t[0] : t);
        if (t === 'FAQPage' && !(node.mainEntity?.length > 0)) errors.push(`${url}: FAQPage with no questions`);
        if (t === 'BreadcrumbList' && node.itemListElement.some((i) => !i.item?.startsWith(SITE))) errors.push(`${url}: breadcrumb item not absolute`);
        if (t === 'Service' && !node.provider?.['@id']) errors.push(`${url}: Service without provider @id`);
        if (/Review|AggregateRating/.test(JSON.stringify(node))) errors.push(`${url}: Review/AggregateRating markup found`);
      }
    } catch (e) {
      errors.push(`${url}: invalid JSON-LD (${e.message})`);
    }
  }
  const hasDetails = /<details/.test(mainHtml.replace(/<details class="relative lg:hidden"[\s\S]*?<\/details>/, ''));
  if (hasDetails && !types.includes('FAQPage')) warnings.push(`${url}: visible FAQ accordion but no FAQPage schema`);
  if (url !== '/' && url !== '/404.html' && !types.includes('BreadcrumbList')) warnings.push(`${url}: no BreadcrumbList`);

  // Links
  const hrefs = [...html.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map((m) => decode(m[1]));
  const internal = hrefs
    .map((h) => (h.startsWith(SITE) ? h.slice(SITE.length) || '/' : h))
    .filter((h) => h.startsWith('/') && !h.startsWith('//'))
    .map((h) => h.split('#')[0].split('?')[0]);
  const badAnchors = [...html.matchAll(/<a\b[^>]*>([\s\S]*?)<\/a>/g)].map((m) => text(m[1]).toLowerCase()).filter((t) => /^(click here|here|read more)$/.test(t));

  // Placeholders visible on the page (exclude <script>, include attributes like alt)
  const visible = text(html.replace(/<head>[\s\S]*?<\/head>/, '')) + ' ' + title + ' ' + desc;
  const ph = [...visible.matchAll(/\[(PLACEHOLDER|CONFIRM|VERIFY|GBP REVIEW LINK)[^\]]*\]/g)].map((m) => m[0]);

  pages.push({ url, title, desc, canonical, noindex, h1s, wc, first100, missingAlt, missingDims, types: [...new Set(types)], internal, badAnchors, ph });
}

// Cross-page checks
const pageSet = new Set(pages.map((p) => p.url));
const inbound = Object.fromEntries(pages.map((p) => [p.url, 0]));
const broken = [];
for (const p of pages) {
  for (const href of new Set(p.internal)) {
    let ok = pageSet.has(href);
    if (!ok) ok = await exists(path.join(DIST, decodeURI(href)));
    if (!ok) broken.push(`${p.url} → ${href}`);
    if (href !== p.url && inbound[href] !== undefined) inbound[href]++;
  }
}
const dupe = (key) => {
  const seen = {};
  for (const p of pages.filter((p) => !p.noindex)) (seen[p[key]] ||= []).push(p.url);
  return Object.entries(seen).filter(([, v]) => v.length > 1);
};
const dupTitles = dupe('title');
const dupDescs = dupe('desc');
const orphans = pages.filter((p) => p.url !== '/' && p.url !== '/404.html' && !p.noindex && inbound[p.url] === 0).map((p) => p.url);

for (const p of pages) {
  if (p.url === '/404.html') continue;
  if (p.h1s.length !== 1) errors.push(`${p.url}: ${p.h1s.length} H1 tags`);
  if (p.missingAlt) errors.push(`${p.url}: ${p.missingAlt} image(s) missing alt`);
  if (p.missingDims) warnings.push(`${p.url}: ${p.missingDims} image(s) missing width/height`);
  if (p.title.length > 60) warnings.push(`${p.url}: title ${p.title.length} chars`);
  if (p.desc.length > 155) warnings.push(`${p.url}: meta description ${p.desc.length} chars`);
  if (!p.noindex && !/079 895 0496/.test(p.desc)) warnings.push(`${p.url}: meta description has no phone number`);
  if (!p.canonical.startsWith(SITE) || !p.canonical.endsWith('/')) warnings.push(`${p.url}: canonical ${p.canonical}`);
  if (p.badAnchors.length) warnings.push(`${p.url}: vague anchor text (${p.badAnchors.join(', ')})`);
  const kw = kwMap[p.url];
  p.kw = kw ?? '';
  if (kw) {
    // Keyword match allows short connecting words, e.g. "washing machine repairs in Sandton".
    const norm = (s) => s.toLowerCase().replace(/[’']/g, "'").replace(/[^a-z0-9' ]+/g, ' ');
    const sep = String.raw`(?:\s+(?:in|on|the|an?|for|your|of|across|and))*\s+`;
    const re = new RegExp(norm(kw).trim().split(/\s+/).map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join(sep));
    if (!re.test(norm(p.h1s[0] || ''))) warnings.push(`${p.url}: H1 does not contain "${kw}"`);
    if (!re.test(norm(p.first100))) warnings.push(`${p.url}: "${kw}" not in first 100 words`);
    if (!norm(p.title).startsWith(norm(kw).split(' ')[0])) warnings.push(`${p.url}: title doesn't lead with keyword`);
  } else if (!p.noindex && !['/privacy-policy/'].includes(p.url) && !p.url.startsWith('/blog/')) {
    warnings.push(`${p.url}: not in SEO-KEYWORD-MAP.md`);
  }
}
// Blog keywords come from frontmatter (also listed in the map)
for (const e of broken) errors.push(`Broken link: ${e}`);
for (const [t, v] of dupTitles) errors.push(`Duplicate title "${t}": ${v.join(', ')}`);
for (const [, v] of dupDescs) errors.push(`Duplicate meta description: ${v.join(', ')}`);
for (const o of orphans) errors.push(`Orphan page (no internal links in): ${o}`);

// Primary keyword uniqueness
const kwSeen = {};
for (const [u, k] of Object.entries(kwMap)) (kwSeen[k.toLowerCase()] ||= []).push(u);
for (const [k, v] of Object.entries(kwSeen)) if (v.length > 1) errors.push(`Primary keyword "${k}" used by ${v.join(', ')}`);

// Report
const rows = pages
  .filter((p) => p.url !== '/404.html')
  .map((p) => {
    const flags = [];
    if (p.wc < 300 && !p.noindex) flags.push('THIN');
    if (dupTitles.some(([, v]) => v.includes(p.url))) flags.push('DUP TITLE');
    if (dupDescs.some(([, v]) => v.includes(p.url))) flags.push('DUP META');
    if (p.missingAlt) flags.push('NO ALT');
    if (p.noindex) flags.push('noindex');
    return `| \`${p.url}\` | ${p.title.replace(/\|/g, '\\|')} (${p.title.length}) | ${p.desc.length} | ${p.h1s.join(' / ').replace(/\|/g, '\\|')} | ${p.kw || '—'} | ${p.wc} | ${p.types.join(', ')} | ${flags.join(', ') || 'OK'} |`;
  });

const phCounts = {};
for (const p of pages) for (const t of p.ph) (phCounts[t] ||= new Set()).add(p.url);

const md = `# Page audit

Generated by \`npm run audit\` from the production build on ${new Date().toISOString().slice(0, 10)}.

- Pages built: ${pages.length} (${pages.filter((p) => !p.noindex).length} indexable, plus noindex /thank-you/ and 404)
- Broken internal links: ${broken.length}
- Orphan pages: ${orphans.length}
- Duplicate titles: ${dupTitles.length} · Duplicate meta descriptions: ${dupDescs.length}
- Images missing alt text: ${pages.reduce((a, p) => a + p.missingAlt, 0)}
- Thin pages (< 300 words in main content): ${pages.filter((p) => p.wc < 300 && !p.noindex && p.url !== '/404.html').map((p) => '`' + p.url + '`').join(', ') || 'none'}

Word count = all words inside \`<main>\` excluding breadcrumbs (includes shared sections such as "How it works" and the call-to-action band).
Title column shows the character count in brackets.

| URL | Title (chars) | Meta desc chars | H1 | Primary keyword | Words | Schema types | Flags |
|---|---|---|---|---|---|---|---|
${rows.join('\n')}

## Errors (${errors.length})
${errors.map((e) => `- ${e}`).join('\n') || '- none'}

## Warnings (${warnings.length})
${warnings.map((e) => `- ${e}`).join('\n') || '- none'}

## Placeholders visible on the built site
| Placeholder | Pages |
|---|---|
${Object.entries(phCounts).sort().map(([t, s]) => `| ${t} | ${s.size} page(s)${s.size <= 6 ? ': ' + [...s].map((u) => '`' + u + '`').join(', ') : ''} |`).join('\n')}
`;
await writeFile('PAGE-AUDIT.md', md);
console.log(`Audit: ${pages.length} pages, ${errors.length} errors, ${warnings.length} warnings → PAGE-AUDIT.md`);
if (errors.length) {
  console.log(errors.join('\n'));
  process.exit(1);
}
if (warnings.length) console.log(warnings.join('\n'));
