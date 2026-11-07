# ProServ Washing Machine Repairs — website

Static, SEO-optimised website for **ProServ Washing Machine Repairs** (https://proservwashingmachinerepairs.co.za), built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). It builds to plain HTML/CSS in `dist/`, so it can be hosted anywhere: cPanel, Netlify or Vercel.

## Quick start

You need Node.js 20 or newer (22 recommended).

```bash
npm install        # once
npm run dev        # local site at http://localhost:4321 (live reload)
npm run build      # production build into dist/
npm run preview    # serve the production build locally
npm run audit      # SEO audit of dist/ → PAGE-AUDIT.md (run after build)
npm run images     # create any missing placeholder images, logo files and favicons (never overwrites)
```

Always run `npm run build && npm run audit` before deploying. The audit fails on broken links or `#anchors`, missing images, missing alt text, invalid schema, duplicate titles/metas, orphan pages or missing H1s.

**`npm run images` and your real photos:** with no options it only creates files that don't exist yet, so it never touches photos or a logo you've added. Naming a group rebuilds (overwrites) it: `npm run images -- icons` (favicons and app icons), `logo` (`public/logo.svg` and `logo.png`), `og` (`public/images/og-default.jpg`), `photos` (every photo in `public/images/`). `npm run images -- --force` rebuilds all of them. Don't use `photos` or `--force` once real photos are in.

## Where to change things

| What | Where |
|---|---|
| **Phone, WhatsApp number and message, email** | `src/data/site.ts` → `phone`, `whatsapp`, `email`. Every page, meta description, FAQ and schema reads them from there, and blog posts use `{{PHONE}}` / `{{TEL}}` tokens that are filled in from it. After a change, run `npm run images -- og` (the share image shows the number) and update the docs that quote it: `grep -rn "079 895 0496" --include=*.md .` (GBP-SETUP, CITATIONS, REVIEWS) |
| **Service areas** | `src/data/site.ts` → `areas` (`inName` and `label` say how the place reads in a sentence, e.g. "on the East Rand"). Each area also needs unique content in `src/data/areas.ts` (the build stops if it's missing, to avoid thin "doorway" pages) |
| **Opening hours** | `src/data/site.ts` → `hours`, then set `hoursConfirmed: true` |
| **Business facts** (years, repairs, reviews, arrival time, call-out fee and when it's charged, warranty) | `src/data/site.ts` → `facts`. Replace the whole string, e.g. `'[PLACEHOLDER: 20]'` → `'20'`. The call-out wording (`calloutCondition`, `calloutConditionShort`) is used on every page that mentions the call-out, so change it there if your policy differs |
| **Contact form key** | `src/data/site.ts` → `web3formsKey` (see "Contact form" below) |
| **Google Tag Manager ID** | `src/data/site.ts` → `gtmId` (GTM only loads once this is a real `GTM-…` ID) |
| **Google review link** | `src/data/site.ts` → `googleReviewUrl` (footer link) |
| **Social / GBP profile links for schema** | `src/data/site.ts` → `sameAs` |
| **Price range for schema** | `src/data/site.ts` → `priceRange` |
| **Brand colours** | `src/styles/global.css` → the `@theme` block at the top (`--color-brand`, `--color-brand-dark`, etc.). Pages, the header logo and the `theme-color` meta tag follow automatically. The image files don't: run `npm run images -- icons logo og` to rebuild the favicons, app icons (plus `theme_color` in `public/site.webmanifest`), `public/logo.svg`/`logo.png` and the share image in the new colours. Skip `logo` and `og` if you've replaced them with your own |
| **Logo** | `src/components/Logo.astro` (header/footer), plus `public/logo.svg` and `public/logo.png` (schema). Favicons: `public/favicon.*`, `public/apple-touch-icon.png`, `public/icon-*.png` |
| **Repair prices** | `src/pages/washing-machine-repair-cost.astro` → `prices`; installation and service prices in `src/data/services.ts` |
| **Page copy** | Services `src/data/services.ts` · Problems `src/data/problems.ts` · Brands `src/data/brands.ts` · Error codes `src/data/errorCodes.ts` · Areas `src/data/areas.ts` · Other pages in `src/pages/` |
| **Blog posts** | Markdown files in `src/content/blog/` (see `CONTENT-PLAN.md`). Write `{{PHONE}}` for the phone number and `[{{PHONE}}]({{TEL}})` for a call link |
| **Navigation** | `src/data/site.ts` → `mainNav` |

### Colour rules (WCAG AA)
- Bright orange `#F97316` for accents, icons, borders and highlights.
- Darker orange `#C2410C` for any orange text on white.
- Buttons: white text on `#C2410C` (`.btn-primary`) or `#1F2937` text on `#F97316` (`.btn-accent`). **Never** white text on `#F97316`.

## Contact form

The form on `/contact/` posts to **Web3Forms**, which emails each submission.

1. Go to https://web3forms.com and create an access key **using info@proservwashingmachinerepairs.co.za** (submissions go to the email the key was created with).
2. Paste the key into `src/data/site.ts` → `web3formsKey`.
3. Rebuild and deploy, then send a test.

Spam protection: a hidden honeypot checkbox (`botcheck`). On success, the site fires the `form_submit` event and redirects to `/thank-you/` (without JavaScript, Web3Forms redirects there itself).

**cPanel alternative:** `extras/cpanel/contact-handler.php` sends mail with PHP instead. Instructions are at the top of that file.

## Tracking (GTM / GA4 / Google Ads)

Events pushed to `dataLayer`: `call_click`, `whatsapp_click`, `form_submit`. They're ready to use as GA4 key events and Google Ads conversions. Setup steps are in `LAUNCH-CHECKLIST.md`.

## Deploying

### cPanel
1. `npm run build`
2. Upload **everything inside `dist/`** (including the hidden `.htaccess`) to `public_html/`.
3. `.htaccess` handles http→https, www→non-www, trailing slashes, the 404 page, caching and compression.

### Netlify
Connect the repo. `netlify.toml` sets the build command (`npm run build`) and publish folder (`dist`). Redirects are in `public/_redirects`. Add both `proservwashingmachinerepairs.co.za` and `www.` as domains, with the non-www one as primary.

### Vercel
Import the repo. `vercel.json` sets the build, trailing slashes, and the www → non-www redirect. Add both domains in the Vercel dashboard and set the non-www domain as primary.

## SEO features
- One primary keyword per page (`SEO-KEYWORD-MAP.md`), unique titles (< 60 chars) and meta descriptions (< 155 chars, with phone number), one H1 each.
- `lang="en-ZA"`, canonical tags (https, non-www, trailing slash), Open Graph and Twitter tags, full favicon set.
- JSON-LD: `HomeAndConstructionBusiness`/`LocalBusiness` on every page (stable `@id`), `Service` on service, brand and area pages, `FAQPage` where FAQs are visible, `BreadcrumbList` on inner pages, `BlogPosting` on articles. **No Review or AggregateRating markup** (add only once real reviews exist and are shown on the page).
- `sitemap.xml` (with `lastmod`) generated on build by `integrations/sitemap.mjs`; `/thank-you/` and the 404 page are excluded. `robots.txt` points to it.
- Visible breadcrumbs on inner pages; no orphan pages; descriptive anchor text.
- Performance: static HTML, CSS inlined, self-hosted Inter font with `font-display: swap` and preload, preloaded hero image, WebP images with width/height, below-the-fold images lazy-loaded, no sliders or heavy JavaScript.

## Images and photos to take

Every image in `public/images/` is a labelled placeholder. Replace each with a real photo **using the same file name and the same size** (or update the width/height in the code). Export as WebP, around 70–80% quality. Free tools: Squoosh (squoosh.app).

| File | Size (px) | Photo to take |
|---|---|---|
| `hero-technician.webp` | 1200 × 900 | Main photo: technician kneeling at a front loader in a real customer's kitchen or laundry, smiling, tools visible |
| `hero-technician-640.webp` | 640 × 480 | Same photo, smaller (mobile) |
| `about-technician-van.webp` | 960 × 640 | You/technician standing next to the van |
| `service-front-loader.webp` | 960 × 640 | Front loader with front panel off, technician working on the drum or pump |
| `service-top-loader.webp` | 960 × 640 | Top loader with lid open or cabinet tilted, technician working |
| `service-washer-dryer.webp` | 960 × 640 | A washer-dryer (ideally integrated) in a kitchen |
| `service-installation.webp` | 960 × 640 | Connecting the inlet hose to the tap / levelling a new machine |
| `service-servicing.webp` | 960 × 640 | Cleaning the pump filter at the bottom of a front loader |
| `service-parts.webp` | 960 × 640 | Parts laid out: pump, door seal, carbon brushes, bearing |
| `blog-smelly-washing-machine.webp` | 960 × 540 | Hand cleaning the folds of a door seal |
| `blog-worn-bearings.webp` | 960 × 540 | An old rusted bearing next to a new one |
| `blog-load-shedding.webp` | 960 × 540 | Washing machine plugged into a surge protector |
| `blog-front-vs-top-loader.webp` | 960 × 540 | A front loader next to a top loader |
| `og-default.jpg` | 1200 × 630 | Social share image (generated: logo and phone; rebuild with `npm run images -- og` after changing the number). Optional: replace with a branded photo |

Photo tips: natural light, no brand logos as the focus, no customers' faces or house numbers without permission, landscape orientation. Don't use stock photos of foreign kitchens; local, real photos build trust.

## Project structure

```
src/
  data/          site.ts (single source of truth) + page content data
  components/    Header, Footer, MobileCallBar, WhatsAppFloat, Faq, etc.
  layouts/       BaseLayout.astro (head, SEO tags, schema, tracking)
  lib/schema.ts  JSON-LD builders
  pages/         routes (dynamic routes for services, problems, brands, error codes, areas, blog)
  content/blog/  blog articles (Markdown)
  styles/        global.css (theme tokens)
integrations/    sitemap generator, {{PHONE}} token plugin for blog posts
scripts/         audit.mjs, generate-images.mjs
extras/cpanel/   optional PHP form handler
public/          static files (.htaccess, _redirects, robots.txt, images, favicons)
```

## Other documents
- `SEO-KEYWORD-MAP.md`: keyword per page
- `CONTENT-PLAN.md`: 12-article blog plan
- `GBP-SETUP.md`: Google Business Profile setup
- `CITATIONS.md`: NAP block and directories
- `REVIEWS.md`: review request messages
- `LAUNCH-CHECKLIST.md`: go-live steps
- `PAGE-AUDIT.md`: latest page-by-page SEO audit
