# Content plan: 12 blog articles over 6 months

Two articles a month, each mapped to a keyword that no other page targets (see `SEO-KEYWORD-MAP.md`). Articles 1–4 are written and live. Each article is 800–1,200 words, South African English, ends with a call to action, and links to at least one service page and one problem page.

**How to publish a new article:** add a Markdown file to `src/content/blog/` (copy an existing one for the frontmatter), add its image to `public/images/`, run `npm run build && npm run audit`, then deploy. The blog index, sitemap and "More from the blog" links update automatically. Don't type the phone number into a post: write `{{PHONE}}` for the number and `[{{PHONE}}]({{TEL}})` for a call link (`{{WHATSAPP}}` gives the WhatsApp link). They are filled in from `src/data/site.ts`, in the frontmatter too. Use root-relative links with a trailing slash, e.g. `/problems/washing-machine-not-draining/`; the audit fails on links that don't resolve, missing `#anchors` and missing images.

| # | Month | Title | URL slug | Primary keyword | Secondary keywords | Internal links to | Status |
|---|---|---|---|---|---|---|---|
| 1 | Month 1 (Nov 2026) | Why does my washing machine smell? Causes and how to fix it | `why-does-my-washing-machine-smell` | washing machine smell | smelly washing machine, why does my washing machine smell | Servicing, Installation, Not draining, Leaking | **Live** |
| 2 | Month 1 | 6 signs of worn washing machine bearings | `signs-washing-machine-bearings-are-worn` | worn washing machine bearings | washing machine bearing noise, drum bearings | Front loader repairs, Repair cost, Noisy when spinning, Leaking | **Live** |
| 3 | Month 2 (Dec 2026) | How to protect your washing machine from load shedding and power surges | `protect-washing-machine-from-load-shedding` | protect washing machine from load shedding | load shedding washing machine, surge protector for washing machine | Parts replacement, Won't turn on, Door won't open | **Live** |
| 4 | Month 2 | Front loader vs top loader: which washing machine is right for your home? | `front-loader-vs-top-loader` | front loader vs top loader | which washing machine is better, top loader or front loader South Africa | Front loader repairs, Top loader repairs, Installation, Repair or replace, Not draining, Door won't open, Noisy when spinning | **Live** |
| 5 | Month 3 (Jan 2027) | How to clean your washing machine filter (step by step) | `how-to-clean-washing-machine-filter` | how to clean washing machine filter | washing machine pump filter, washing machine filter location | Servicing, Not draining | Planned |
| 6 | Month 3 | 10 washing machine maintenance tips that save you a repair | `washing-machine-maintenance-tips` | washing machine maintenance tips | how to make a washing machine last longer, washing machine care | Servicing, Repair cost | Planned |
| 7 | Month 4 (Feb 2027) | What to check before calling a washing machine technician | `before-calling-washing-machine-technician` | washing machine troubleshooting checklist | washing machine not working what to check | Problems hub, Contact | Planned |
| 8 | Month 4 | Why does my washing machine trip the electricity? | `washing-machine-tripping-electricity` | washing machine tripping electricity | washing machine trips earth leakage, washing machine trips the plug | Won't turn on, Parts replacement (no DIY electrical) | Planned |
| 9 | Month 5 (Mar 2027) | How long do washing machines last in South Africa? | `how-long-do-washing-machines-last` | how long do washing machines last | washing machine lifespan, when to replace a washing machine | Repair or replace, Repair cost | Planned |
| 10 | Month 5 | How to move a washing machine without damaging it (transit bolts explained) | `how-to-move-a-washing-machine` | how to move a washing machine | washing machine transit bolts, moving house washing machine | Installation, Noisy when spinning | Planned |
| 11 | Month 6 (Apr 2027) | How much detergent should you use? (and why more isn't better) | `how-much-washing-powder-to-use` | how much washing powder to use | too much detergent washing machine, HE detergent | Servicing, Leaking, Washing machine smell (blog) | Planned |
| 12 | Month 6 | Washer-dryer not drying? Common causes and fixes | `washer-dryer-not-drying` | washer dryer not drying | washer dryer clothes still wet, washer dryer condenser | Washer-dryer repairs, Parts replacement | Planned |

## Rules for every article

- One primary keyword, used in the title, H1, first 100 words and meta description.
- No DIY instructions involving electrical work. Safe checks only (taps, hoses, filters, levelling, loads).
- Prices in Rands, and only real prices (no invented figures).
- End with a call to action: phone, WhatsApp and the contact page.
- Link to at least one service page and one problem page with descriptive anchor text (never "click here").
- Add a real photo where possible (see README "Photos to take").
