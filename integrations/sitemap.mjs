// Writes dist/sitemap.xml after the build.
// - Includes every built HTML page except ones marked noindex and the 404 page.
// - lastmod comes from <meta property="article:modified_time"> when a page has one (blog posts),
//   otherwise the build date.
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

export default function sitemap() {
  let site = '';
  return {
    name: 'proserv-sitemap',
    hooks: {
      'astro:config:done': ({ config }) => {
        site = (config.site || '').replace(/\/$/, '');
      },
      'astro:build:done': async ({ dir, pages, logger }) => {
        const outDir = fileURLToPath(dir);
        const today = new Date().toISOString().slice(0, 10);
        const entries = [];
        for (const { pathname } of pages) {
          if (pathname.startsWith('404')) continue;
          const file = path.join(outDir, pathname, 'index.html');
          let html;
          try {
            html = await readFile(file, 'utf8');
          } catch {
            continue; // non-HTML route (e.g. an endpoint)
          }
          if (/<meta name="robots" content="[^"]*noindex/i.test(html)) continue;
          const mod = html.match(/<meta property="article:modified_time" content="([^"]+)"/);
          const lastmod = mod ? mod[1].slice(0, 10) : today;
          const loc = `${site}/${pathname}`.replace(/([^:])\/\/+/g, '$1/');
          entries.push({ loc: loc.endsWith('/') ? loc : `${loc}/`, lastmod });
        }
        entries.sort((a, b) => a.loc.localeCompare(b.loc));
        const xml =
          '<?xml version="1.0" encoding="UTF-8"?>\n' +
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
          entries.map((e) => `  <url><loc>${e.loc}</loc><lastmod>${e.lastmod}</lastmod></url>`).join('\n') +
          '\n</urlset>\n';
        await writeFile(path.join(outDir, 'sitemap.xml'), xml);
        logger.info(`sitemap.xml written with ${entries.length} URLs`);
      },
    },
  };
}
