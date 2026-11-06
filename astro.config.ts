import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from './integrations/sitemap.mjs';
import remarkSiteTokens from './integrations/remark-site-tokens.mjs';
import { site, markdownTokens } from './src/data/site';

export default defineConfig({
  // Canonical URL (https, non-www) comes from src/data/site.ts.
  site: site.url,
  trailingSlash: 'always',
  output: 'static',
  build: {
    format: 'directory',
    inlineStylesheets: 'always',
  },
  compressHTML: true,
  integrations: [sitemap()],
  markdown: {
    // Blog posts write {{PHONE}}, {{TEL}} and {{WHATSAPP}} instead of the number itself.
    remarkPlugins: [[remarkSiteTokens, { tokens: markdownTokens }]],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
