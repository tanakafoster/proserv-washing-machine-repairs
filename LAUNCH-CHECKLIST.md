# Launch checklist

Work through this in order. Tick each item as you go.

## 1. Before going live
The site has no placeholders left: `npm run audit` fails if any `[PLACEHOLDER]`, `[CONFIRM]`, `[VERIFY]` or "coming soon" text appears on a page. The figures below now show as facts on every page, so check them before launch.

- [ ] Facts in `src/data/site.ts` → `facts` are right: 20 years in business, 10,000+ repairs, 500 five-star reviews (shown once, on the home page), "aim to arrive within 1 hour" on urgent call-outs, the R300 call-out fee and **when it's charged** (`calloutCondition` and `calloutConditionShort`, now "only payable if you decide not to go ahead with the quote"), the 6-month warranty on parts and labour
- [ ] Opening hours: the site shows none until you add them to `hours` in `src/data/site.ts`; then they appear in the footer, the contact page, the FAQ and the schema
- [ ] Service areas and the suburb lists on each area page are places you're happy to drive to (`src/data/site.ts`, `src/data/areas.ts`)
- [ ] Error code guides: they list only codes checked against the manufacturers' own documents, which each guide names under "Where these codes come from". Add a code only after checking it in the manual, and add that document to the guide's `sources` in `src/data/errorCodes.ts`
- [ ] Optional: guide prices. The site shows no prices apart from the call-out fee, and the cost page explains what drives the price instead. If you want to publish typical prices, add them to `/washing-machine-repair-cost/` and the installation and servicing pages
- [ ] Web3Forms access key added (`web3formsKey`), created with info@proservwashingmachinerepairs.co.za. Until it's set, the booking form can't send and `npm run audit` warns about it
- [ ] Optional but recommended: in the Web3Forms dashboard, shorten how long Web3Forms keeps form messages. It keeps them for up to three years by default, and when this was checked in November 2026 the shortest setting was 7 days. The privacy policy says Web3Forms deletes them at the end of the period set in your account, so it stays true whatever you choose
- [ ] GTM container ID added (`gtmId`)
- [ ] Optional: real photos swapped in for the illustrations (same file names and sizes, see README). Don't run `npm run images -- photos` or `--force` afterwards: they redraw the illustrations over your photos
- [ ] Optional: a few lines about you and how the business started on the About page (it says nothing about the owner or team that you haven't supplied)
- [ ] POPIA: register your Information Officer with the Information Regulator (inforegulator.org.za). That's a legal step for the business, not website copy. The privacy policy sends privacy questions to the email address. Add a postal address (a PO Box is fine) in `src/data/site.ts` → `postalAddress`, and add your registered business name to the policy if it differs from the trading name: POPIA section 18 asks for the responsible party's name and address
- [ ] Read the privacy policy and check it describes how you really work: the business phones, email and WhatsApp are locked with a PIN or password, old job messages and photos are cleared out once you no longer need them, each customer gets one review request, and job records are kept for five years. If anything is different, change the policy (and its "Last updated" date) before launch
- [ ] The privacy policy describes Google Analytics and cookies only once `gtmId` is set. If you add other tags to the GTM container, or switch the form to the cPanel PHP handler, update the policy to match
- [ ] `npm run build && npm run audit` shows 0 errors and 0 warnings (the audit warns about any setting still left as `YOUR_…`, such as the Web3Forms key)

## 2. Domain, hosting and redirects
- [ ] Site deployed (cPanel: upload `dist/` contents to `public_html`; Netlify/Vercel: connect the repo)
- [ ] SSL certificate active (cPanel: AutoSSL / Let's Encrypt; Netlify/Vercel: automatic)
- [ ] `http://proservwashingmachinerepairs.co.za` → 301 → `https://proservwashingmachinerepairs.co.za/`
- [ ] `https://www.proservwashingmachinerepairs.co.za` → 301 → `https://proservwashingmachinerepairs.co.za/`
- [ ] `http://www.…` → single 301 → `https://proservwashingmachinerepairs.co.za/`
- [ ] `/services` (no slash) → 301 → `/services/` (Vercel answers this one with a 308, which Google treats the same as a 301)
- [ ] A made-up URL such as `/does-not-exist/` shows the 404 page **with a 404 status** (check with `curl -I` or httpstatus.io)
- [ ] `/thank-you/` has `noindex` (view source) and isn't in the sitemap. It is deliberately **not** blocked in `robots.txt`, because Google has to crawl the page to see the noindex
- [ ] `https://proservwashingmachinerepairs.co.za/robots.txt` and `/sitemap.xml` load

## 3. Google Search Console
- [ ] Add a **Domain property** for `proservwashingmachinerepairs.co.za` (search.google.com/search-console) and verify it with the DNS TXT record at your domain registrar
- [ ] Sitemaps → submit `https://proservwashingmachinerepairs.co.za/sitemap.xml`
- [ ] URL Inspection → request indexing for: home, `/services/`, `/areas/`, each area page, `/contact/`
- [ ] URL Inspection on `https://proservwashingmachinerepairs.co.za/thank-you/` → Test live URL: it should show "Crawl allowed: Yes" and "Indexing allowed: No: 'noindex' detected"
- [ ] After a few days, check Pages (indexing) and Enhancements (Breadcrumbs, FAQ) for errors
- [ ] Run 3–4 pages through the Rich Results Test (search.google.com/test/rich-results) and the Schema Markup Validator (validator.schema.org)

## 4. Bing Webmaster Tools
- [ ] Sign in at bing.com/webmasters and **import from Google Search Console** (quickest), or verify via DNS/meta tag
- [ ] Submit the sitemap
- [ ] Set up Bing Places (see `CITATIONS.md`)

## 5. Google Tag Manager and GA4
The site pushes three events to the `dataLayer`:

| Event | Fires when |
|---|---|
| `call_click` | Any `tel:` link is tapped (header, buttons, mobile bar, footer) |
| `whatsapp_click` | Any WhatsApp link is tapped (buttons, mobile bar, floating button, footer) |
| `form_submit` | The booking form is **successfully** sent (fires before redirecting to /thank-you/) |

In GTM:
- [ ] Create a **GA4 Configuration / Google tag** with your GA4 Measurement ID, triggered on All Pages
- [ ] Create three **Custom Event triggers**: `call_click`, `whatsapp_click`, `form_submit`
- [ ] Create three **GA4 Event tags** with the same names, each on its trigger (optionally pass `link_url` and `page_path` as event parameters using Data Layer Variables)
- [ ] In GA4 → Admin → Events, mark `call_click`, `whatsapp_click` and `form_submit` as **key events**
- [ ] (Google Ads) Create conversion actions and add **Google Ads Conversion Tracking** tags on the same three triggers, plus a **Conversion Linker** tag on All Pages
- [ ] Publish the GTM container

## 6. Test that events fire
- [ ] GTM **Preview** mode: open the site, tap the header phone button → `call_click` appears
- [ ] Tap a WhatsApp button → `whatsapp_click` appears
- [ ] Submit the booking form with test details → `form_submit` appears, then you land on `/thank-you/`
- [ ] Check the test email arrived at info@proservwashingmachinerepairs.co.za (and not in spam)
- [ ] Test on a real phone: the sticky bottom bar shows Call and WhatsApp; the floating WhatsApp button only shows on desktop
- [ ] GA4 → Reports → Realtime shows the events within a minute or two
- [ ] (Ads) Conversions show "Recording conversions" within a day

## 7. Google Business Profile and citations
- [ ] GBP set up as a service-area business (`GBP-SETUP.md`), verified, first posts and photos added
- [ ] GBP review link added to `src/data/site.ts` → `googleReviewUrl`, profile URLs to `sameAs`, then rebuild
- [ ] Citations submitted (`CITATIONS.md`)
- [ ] Review requests going out (`REVIEWS.md`)

## 8. After launch
- [ ] Run PageSpeed Insights (pagespeed.web.dev) on the home page and one area page; aim for 90+ on all four scores
- [ ] Check Search Console weekly for the first month
- [ ] Publish two blog articles a month (`CONTENT-PLAN.md`)
