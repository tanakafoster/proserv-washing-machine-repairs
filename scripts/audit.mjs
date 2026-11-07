// Post-build SEO audit. Run after `npm run build`:  npm run audit
// Writes PAGE-AUDIT.md and exits non-zero if it finds hard errors: broken internal links or #anchors,
// missing images/assets, missing alt text, invalid JSON-LD, duplicate titles/metas, missing H1, orphans.
import { readFile, writeFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const DIST = 'dist';

// Business details come from src/data/site.ts (read as text: plain Node can't import TypeScript).
const siteTs = await readFile('src/data/site.ts', 'utf8');
const SITE = siteTs.match(/\burl:\s*'(https:\/\/[^']+)'/)?.[1]?.replace(/\/$/, '');
/** The owner asked for about 1,500 words per page: pages below this are listed (not an error). */
const WORD_TARGET = 1500;
const PHONE = siteTs.match(/phone:\s*\{[^}]*display:\s*'([^']+)'/)?.[1];
if (!SITE || !PHONE) throw new Error('Could not read url / phone.display from src/data/site.ts');
const HOST = new URL(SITE).hostname;

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}
const isFile = async (p) => stat(p).then((s) => s.isFile()).catch(() => false);
const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&#39;|&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ');
const text = (html) =>
  decode(html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<svg[\s\S]*?<\/svg>/g, ' ').replace(/<[^>]+>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim();
const words = (s) => (s.match(/[A-Za-z0-9À-ž'’]+/g) || []).length;
const attr = (tag, name) => {
  const v = tag.match(new RegExp(`\\s${name}="([^"]*)"`))?.[1];
  return v === undefined ? undefined : decode(v);
};
const srcsetUrls = (v) => (v ? v.split(',').map((c) => c.trim().split(/\s+/)[0]).filter(Boolean) : []);

// Primary keywords from SEO-KEYWORD-MAP.md
const kwMap = {};
for (const line of (await readFile('SEO-KEYWORD-MAP.md', 'utf8')).split('\n')) {
  const m = line.match(/^\| `([^`]+)` \| ([^|]+) \|/);
  if (m) kwMap[m[1]] = m[2].trim();
}
// Keyword match allows short connecting words, e.g. "washing machine repairs in Sandton".
const norm = (s) => s.toLowerCase().replace(/[’']/g, "'").replace(/[^a-z0-9' ]+/g, ' ');
const kwRegex = (kw) => {
  const sep = String.raw`(?:\s+(?:in|on|the|an?|for|your|of|across|and))*\s+`;
  return new RegExp(norm(kw).trim().split(/\s+/).map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join(sep));
};

const files = (await walk(DIST)).sort();
const pages = [];
const errors = [];
const warnings = [];

for (const file of files) {
  const html = await readFile(file, 'utf8');
  const url = '/' + path.relative(DIST, file).replace(/index\.html$/, '').replace(/\\/g, '/');
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
  const schemaUrls = [];
  const collectUrls = (v) => {
    if (typeof v === 'string') {
      if (/^https?:\/\//i.test(v)) schemaUrls.push(v);
    } else if (Array.isArray(v)) v.forEach(collectUrls);
    else if (v && typeof v === 'object') Object.values(v).forEach(collectUrls);
  };
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const json = JSON.parse(m[1]);
      collectUrls(json);
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
  // The phone menu and the phone "On this page" toggle are <details> too, but they aren't FAQs.
  const hasDetails = /<details/.test(
    mainHtml.replace(/<details class="relative lg:hidden"[\s\S]*?<\/details>/, '').replace(/<details class="toc-mobile[\s\S]*?<\/details>/g, ''),
  );
  if (hasDetails && !types.includes('FAQPage')) warnings.push(`${url}: visible FAQ accordion but no FAQPage schema`);
  if (url !== '/' && url !== '/404.html' && !types.includes('BreadcrumbList')) warnings.push(`${url}: no BreadcrumbList`);

  // Every URL the page references. JSON-LD and inline scripts are left out of the tag scan.
  const markup = html.replace(/<script[\s\S]*?<\/script>/g, ' ');
  const refs = [];
  for (const [tag] of markup.matchAll(/<a\b[^>]*>/g)) {
    const h = attr(tag, 'href');
    if (h !== undefined) refs.push({ kind: 'link', value: h });
  }
  for (const [tag] of markup.matchAll(/<img\b[^>]*>/g)) {
    const s = attr(tag, 'src');
    if (s !== undefined) refs.push({ kind: 'image', value: s });
    for (const u of srcsetUrls(attr(tag, 'srcset'))) refs.push({ kind: 'image', value: u });
  }
  for (const [tag] of markup.matchAll(/<source\b[^>]*>/g)) {
    for (const u of srcsetUrls(attr(tag, 'srcset'))) refs.push({ kind: 'image', value: u });
  }
  for (const [tag] of markup.matchAll(/<link\b[^>]*>/g)) {
    const h = attr(tag, 'href');
    if (h !== undefined) refs.push({ kind: attr(tag, 'rel') === 'canonical' ? 'canonical' : 'asset', value: h });
    for (const u of srcsetUrls(attr(tag, 'imagesrcset'))) refs.push({ kind: 'asset', value: u });
  }
  for (const [tag] of markup.matchAll(/<meta\b[^>]*>/g)) {
    if (/\s(?:property|name)="(?:og:image|twitter:image|og:url)"/.test(tag)) refs.push({ kind: 'meta', value: attr(tag, 'content') ?? '' });
  }
  for (const [, css] of html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)) {
    for (const m of css.matchAll(/url\((['"]?)([^'")]+)\1\)/g)) if (!m[2].startsWith('data:')) refs.push({ kind: 'asset', value: m[2] });
  }
  for (const u of schemaUrls) refs.push({ kind: 'schema', value: u });

  // id and name targets for #fragment links
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g), ...html.matchAll(/<a\b[^>]*\sname="([^"]+)"/g)].map((m) => decode(m[1])));

  // Placeholders visible on the page (exclude <script>, include attributes like alt)
  const visible = text(html.replace(/<head>[\s\S]*?<\/head>/, '')) + ' ' + title + ' ' + desc;
  const ph = [
    ...[...visible.matchAll(/\[(PLACEHOLDER|CONFIRM|VERIFY|GBP REVIEW LINK|TBC|TODO)[^\]]*\]/gi)].map((m) => m[0]),
    ...[...visible.matchAll(/\b(placeholder photo|lorem ipsum|coming soon|insert (?:your|the) [a-z]+)\b/gi)].map((m) => m[0]),
  ];
  if (ph.length) errors.push(`${url}: placeholder text visible on the page: ${[...new Set(ph)].join(', ')}`);
  const tokens = [...new Set(html.match(/\{\{[A-Z_]+\}\}/g) ?? [])];
  if (tokens.length) errors.push(`${url}: unfilled token(s) ${tokens.join(', ')} (only {{PHONE}}, {{TEL}} and {{WHATSAPP}} exist)`);
  // Settings still on their example value (e.g. the Web3Forms key), anywhere in the HTML.
  const unset = [...new Set(html.match(/\bYOUR_[A-Z0-9_]+\b/g) ?? [])];
  if (unset.length) warnings.push(`${url}: setting not filled in: ${unset.join(', ')} (set it in src/data/site.ts before launch)`);

  pages.push({ url, title, desc, canonical, noindex, h1s, wc, first100, missingAlt, missingDims, types: [...new Set(types)], refs, ids, ph });
}

// Resolves a reference against the page. Returns null for external, tel:, mailto: and similar.
function resolve(value, pageUrl) {
  let u;
  try {
    u = new URL(value, SITE + pageUrl);
  } catch {
    return { bad: 'unparseable URL' };
  }
  if (u.protocol !== 'http:' && u.protocol !== 'https:') return null;
  const host = u.hostname.toLowerCase();
  if (host !== HOST && host !== `www.${HOST}`) return null;
  const notes = [];
  if (/^[a-z]+:/i.test(value) || value.startsWith('//')) {
    if (value.startsWith('//')) notes.push('protocol-relative URL');
    else if (u.protocol !== 'https:' || host !== HOST) notes.push('uses http or www (redirects)');
  } else if (!value.startsWith('/') && !value.startsWith('#') && !value.startsWith('?')) {
    notes.push('relative URL (write it from the root, e.g. /problems/…/)');
  }
  let p = u.pathname;
  try {
    p = decodeURIComponent(p);
  } catch {}
  return { path: p, hash: u.hash.slice(1), notes };
}

const pageByUrl = new Map(pages.map((p) => [p.url, p]));
const targetCache = new Map();
/** What a site path serves: a page, a file, or nothing. Paths without a trailing slash that
 * resolve to a directory are served via a redirect. */
async function target(p) {
  if (targetCache.has(p)) return targetCache.get(p);
  let r = { ok: false };
  if (p.endsWith('/')) {
    if (await isFile(path.join(DIST, p, 'index.html'))) r = { ok: true, page: p };
  } else if (await isFile(path.join(DIST, p))) {
    r = { ok: true, page: pageByUrl.has(p) ? p : null };
  } else if (await isFile(path.join(DIST, p, 'index.html'))) {
    r = { ok: true, page: `${p}/`, redirect: true };
  }
  targetCache.set(p, r);
  return r;
}

// Cross-page checks
const inbound = Object.fromEntries(pages.map((p) => [p.url, 0]));
const broken = [];
const missingAssets = [];
const badAnchorsFrag = [];
for (const p of pages) {
  const seenRef = new Set();
  const linkedPages = new Set();
  for (const { kind, value } of p.refs) {
    const key = `${kind} ${value}`;
    if (seenRef.has(key)) continue;
    seenRef.add(key);
    const r = resolve(value, p.url);
    if (!r) continue;
    if (r.bad) {
      errors.push(`${p.url}: ${r.bad}: ${value}`);
      continue;
    }
    if (r.notes.length && kind !== 'schema') warnings.push(`${p.url}: ${kind} "${value}" ${r.notes.join('; ')}`);
    const t = await target(r.path);
    if (!t.ok) {
      if (kind === 'link' || kind === 'canonical' || kind === 'schema' || (kind === 'meta' && !/\.(jpe?g|png|webp|gif|svg)$/i.test(r.path))) broken.push(`${p.url} → ${value}`);
      else missingAssets.push(`${p.url} → ${value}`);
      continue;
    }
    if (t.redirect && kind !== 'schema') warnings.push(`${p.url}: ${kind} "${value}" has no trailing slash (redirects to ${t.page})`);
    if (t.redirect && kind === 'schema') warnings.push(`${p.url}: schema URL "${value}" has no trailing slash`);
    // #fragment must exist on the target page (JSON-LD @id fragments are node names, not anchors)
    if (r.hash && kind === 'link' && !r.hash.startsWith(':~:') && t.page) {
      const tp = pageByUrl.get(t.page);
      let frag = r.hash;
      try {
        frag = decodeURIComponent(frag);
      } catch {}
      if (tp && !tp.ids.has(frag)) badAnchorsFrag.push(`${p.url} → ${value}`);
    }
    if (kind === 'link' && t.page && t.page !== p.url) linkedPages.add(t.page);
  }
  for (const u of linkedPages) if (inbound[u] !== undefined) inbound[u]++;
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
  if (p.url === '/404.html') {
    if (p.canonical) warnings.push('/404.html: has a canonical tag, but the 404 page has no URL of its own');
    continue;
  }
  if (p.h1s.length !== 1) errors.push(`${p.url}: ${p.h1s.length} H1 tags`);
  if (p.missingAlt) errors.push(`${p.url}: ${p.missingAlt} image(s) missing alt`);
  if (p.missingDims) warnings.push(`${p.url}: ${p.missingDims} image(s) missing width/height`);
  if (p.title.length > 60) warnings.push(`${p.url}: title ${p.title.length} chars`);
  if (p.desc.length > 155) warnings.push(`${p.url}: meta description ${p.desc.length} chars`);
  if (!p.noindex && !p.desc.includes(PHONE)) warnings.push(`${p.url}: meta description has no phone number (${PHONE})`);
  if (p.canonical !== SITE + p.url) warnings.push(`${p.url}: canonical is "${p.canonical}", expected ${SITE + p.url}`);
  p.kw = kwMap[p.url] ?? '';
  if (p.kw) {
    const re = kwRegex(p.kw);
    if (!re.test(norm(p.h1s[0] || ''))) warnings.push(`${p.url}: H1 does not contain "${p.kw}"`);
    if (!re.test(norm(p.first100))) warnings.push(`${p.url}: "${p.kw}" not in first 100 words`);
    if (!re.test(norm(p.desc))) warnings.push(`${p.url}: meta description does not contain "${p.kw}"`);
    if (!norm(p.title).startsWith(norm(p.kw).split(' ')[0])) warnings.push(`${p.url}: title doesn't lead with keyword`);
  } else if (!p.noindex && !['/privacy-policy/'].includes(p.url)) {
    warnings.push(`${p.url}: not in SEO-KEYWORD-MAP.md`);
  }
}
// Vague anchor text
for (const file of files) {
  const html = await readFile(file, 'utf8');
  const url = '/' + path.relative(DIST, file).replace(/index\.html$/, '').replace(/\\/g, '/');
  const vague = [...html.matchAll(/<a\b[^>]*>([\s\S]*?)<\/a>/g)].map((m) => text(m[1]).toLowerCase()).filter((t) => /^(click here|here|read more|more|this page|link)$/.test(t));
  if (vague.length) warnings.push(`${url}: vague anchor text (${[...new Set(vague)].join(', ')})`);
}
for (const e of broken) errors.push(`Broken link: ${e}`);
for (const e of missingAssets) errors.push(`Missing image or file: ${e}`);
for (const e of badAnchorsFrag) errors.push(`Missing #anchor: ${e}`);
for (const [t, v] of dupTitles) errors.push(`Duplicate title "${t}": ${v.join(', ')}`);
for (const [, v] of dupDescs) errors.push(`Duplicate meta description: ${v.join(', ')}`);
for (const o of orphans) errors.push(`Orphan page (no internal links in): ${o}`);

// Primary keyword uniqueness
const kwSeen = {};
for (const [u, k] of Object.entries(kwMap)) (kwSeen[k.toLowerCase()] ||= []).push(u);
for (const [k, v] of Object.entries(kwSeen)) if (v.length > 1) errors.push(`Primary keyword "${k}" used by ${v.join(', ')}`);
// Every mapped URL must exist
for (const u of Object.keys(kwMap)) if (!pageByUrl.has(u)) errors.push(`SEO-KEYWORD-MAP.md lists ${u}, which isn't built`);

// Report
const rows = pages
  .filter((p) => p.url !== '/404.html')
  .map((p) => {
    const flags = [];
    if (p.wc < 300 && !p.noindex) flags.push('THIN');
    else if (p.wc < WORD_TARGET && !p.noindex) flags.push(`< ${WORD_TARGET} words`);
    if (dupTitles.some(([, v]) => v.includes(p.url))) flags.push('DUP TITLE');
    if (dupDescs.some(([, v]) => v.includes(p.url))) flags.push('DUP META');
    if (p.missingAlt) flags.push('NO ALT');
    if (p.noindex) flags.push('noindex');
    return `| \`${p.url}\` | ${p.title.replace(/\|/g, '\\|')} (${p.title.length}) | ${p.desc.length} | ${p.h1s.join(' / ').replace(/\|/g, '\\|')} | ${p.kw || '—'} | ${p.wc} | ${p.types.join(', ')} | ${flags.join(', ') || 'OK'} |`;
  });

const phCounts = {};
for (const p of pages) for (const t of p.ph) (phCounts[t] ||= new Set()).add(p.url);
const refCount = pages.reduce((a, p) => a + p.refs.length, 0);

const md = `# Page audit

Generated by \`npm run audit\` from the production build on ${new Date().toISOString().slice(0, 10)}.

- Pages built: ${pages.length} (${pages.filter((p) => !p.noindex).length} indexable, plus noindex /thank-you/ and 404)
- URLs checked: ${refCount} (links, images, srcsets, preloads, icons, canonical, Open Graph, CSS and JSON-LD URLs, #anchors)
- Broken internal links: ${broken.length} · Missing images or files: ${missingAssets.length} · Missing #anchors: ${badAnchorsFrag.length}
- Orphan pages: ${orphans.length}
- Duplicate titles: ${dupTitles.length} · Duplicate meta descriptions: ${dupDescs.length}
- Images missing alt text: ${pages.reduce((a, p) => a + p.missingAlt, 0)}
- Thin pages (< 300 words in main content): ${pages.filter((p) => p.wc < 300 && !p.noindex && p.url !== '/404.html').map((p) => '`' + p.url + '`').join(', ') || 'none'}
- Indexable pages under the ${WORD_TARGET.toLocaleString('en-ZA')}-word target: ${pages.filter((p) => p.wc < WORD_TARGET && !p.noindex && p.url !== '/404.html').map((p) => '`' + p.url + '` (' + p.wc + ')').join(', ') || 'none'}
- Placeholder text visible on the site: ${Object.keys(phCounts).length ? Object.keys(phCounts).length + ' kind(s), see the end of this report' : 'none'}

Word count = all words inside \`<main>\` excluding breadcrumbs (includes shared sections such as "How it works" and the call-to-action band).
Title column shows the character count in brackets. The primary keyword is checked in the H1, the first 100 words, the meta description and the start of the title.

| URL | Title (chars) | Meta desc chars | H1 | Primary keyword | Words | Schema types | Flags |
|---|---|---|---|---|---|---|---|
${rows.join('\n')}

## Errors (${errors.length})
${errors.map((e) => `- ${e}`).join('\n') || '- none'}

## Warnings (${warnings.length})
${warnings.map((e) => `- ${e}`).join('\n') || '- none'}

## Placeholders visible on the built site
${Object.keys(phCounts).length ? `| Placeholder | Pages |
|---|---|
${Object.entries(phCounts).sort().map(([t, s]) => `| ${t} | ${s.size} page(s)${s.size <= 6 ? ': ' + [...s].map((u) => '`' + u + '`').join(', ') : ''} |`).join('\n')}` : 'None. (Any [PLACEHOLDER], [CONFIRM], [VERIFY] or similar marker on a page fails the audit.)'}
`;
await writeFile('PAGE-AUDIT.md', md);
console.log(`Audit: ${pages.length} pages, ${refCount} URLs checked, ${errors.length} errors, ${warnings.length} warnings → PAGE-AUDIT.md`);
if (errors.length) {
  console.log(errors.join('\n'));
  process.exit(1);
}
if (warnings.length) console.log(warnings.join('\n'));
