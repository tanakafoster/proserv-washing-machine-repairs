// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from './integrations/sitemap.mjs';

export default defineConfig({
  // Canonical URL: https, non-www. Change here and in src/data/site.ts if the domain changes.
  site: 'https://proservwashingmachinerepairs.co.za',
  trailingSlash: 'always',
  output: 'static',
  build: {
    format: 'directory',
    inlineStylesheets: 'always',
  },
  compressHTML: true,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
