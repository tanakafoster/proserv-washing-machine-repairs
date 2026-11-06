/**
 * SINGLE SOURCE OF TRUTH for business details.
 * Every page, the header, the footer, the contact form and the JSON-LD schema read from here.
 *
 * Search this file for [CONFIRM] and [PLACEHOLDER] to find what still needs real values.
 */

export const site = {
  name: 'ProServ Washing Machine Repairs',
  shortName: 'ProServ',
  /** Canonical origin: https, non-www, no trailing slash. astro.config.ts reads it from here. */
  url: 'https://proservwashingmachinerepairs.co.za',
  domain: 'proservwashingmachinerepairs.co.za',

  phone: {
    display: '079 895 0496',
    /** E.164 format, used for tel: links and schema. */
    e164: '+27798950496',
  },
  whatsapp: {
    /** International format without + or spaces. */
    number: '27798950496',
    message: 'Hi ProServ, my washing machine needs repairing.',
  },
  email: 'info@proservwashingmachinerepairs.co.za',

  /**
   * Service-area business: no public street address.
   * Schema publishes locality / region / country only. [CONFIRM] the base locality.
   */
  address: {
    locality: 'Johannesburg', // [CONFIRM]
    region: 'Gauteng',
    country: 'ZA',
    /** Leave empty unless you want a public street address shown. */
    street: '',
    postalCode: '',
  },

  /**
   * Opening hours. [CONFIRM] — these are placeholders.
   * `days` uses schema.org day names. Times are 24-hour.
   */
  hours: [
    { label: 'Monday to Friday', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '17:00' },
    { label: 'Saturday', days: ['Saturday'], opens: '08:00', closes: '13:00' },
  ],
  hoursConfirmed: false, // set to true once the hours above are real; removes the [CONFIRM] label on the site
  hoursNote: 'Sundays and public holidays by arrangement',

  /**
   * Business facts. Shown on the site wrapped in [PLACEHOLDER: …] until confirmed.
   * When a figure is confirmed, replace the whole string, e.g. yearsInBusiness: '20'.
   * Never put the review count into testimonials or schema.
   */
  facts: {
    yearsInBusiness: '[PLACEHOLDER: 20]',
    repairsCompleted: '[PLACEHOLDER: 10,000+]',
    fiveStarReviews: '[PLACEHOLDER: 500]',
    arrivalTime: '[PLACEHOLDER: within 1 hour]',
    calloutFee: '[PLACEHOLDER: R300]',
    /**
     * When the call-out fee is charged. Read as "The call-out fee is R300, <calloutCondition>."
     * If your policy is different (e.g. always charged but deducted from the repair), change both
     * lines: every page that mentions the call-out reads them from here.
     */
    calloutCondition: '[PLACEHOLDER: only payable if you decide not to go ahead with the quote]',
    /** Short form for tight spaces: the home page hero and the price table. */
    calloutConditionShort: '[PLACEHOLDER: only if you decline the quote]',
    warranty: '[PLACEHOLDER: 6-month]',
  },

  /** Schema.org priceRange. [PLACEHOLDER] */
  priceRange: '[PLACEHOLDER]',

  /** Google Business Profile review link, e.g. https://g.page/r/XXXX/review [GBP REVIEW LINK] */
  googleReviewUrl: '',

  /**
   * Profiles for schema sameAs. [PLACEHOLDER: GBP and social links]
   * Add full URLs, e.g. 'https://www.facebook.com/proserv…'. Empty entries are ignored.
   */
  sameAs: [] as string[],

  /** Google Tag Manager container ID. [PLACEHOLDER] GTM is not loaded until this is a real ID. */
  gtmId: 'GTM-XXXXXXX',

  /**
   * Web3Forms access key (https://web3forms.com). [PLACEHOLDER]
   * Create the key using info@proservwashingmachinerepairs.co.za so submissions go there.
   */
  web3formsKey: 'YOUR_WEB3FORMS_ACCESS_KEY',

  /**
   * Service areas. [CONFIRM] Each area needs a matching content entry in src/data/areas.ts,
   * otherwise the build stops with an error (prevents thin "doorway" pages).
   * `inName` and `label` are how the place reads in a sentence: "repairs on the East Rand",
   * "Midrand and the East Rand". For most places they are simply "in X" and "X".
   */
  areas: [
    { name: 'Johannesburg', slug: 'johannesburg', inName: 'in Johannesburg', label: 'Johannesburg' },
    { name: 'Pretoria', slug: 'pretoria', inName: 'in Pretoria', label: 'Pretoria' },
    { name: 'Centurion', slug: 'centurion', inName: 'in Centurion', label: 'Centurion' },
    { name: 'Sandton', slug: 'sandton', inName: 'in Sandton', label: 'Sandton' },
    { name: 'Midrand', slug: 'midrand', inName: 'in Midrand', label: 'Midrand' },
    { name: 'East Rand', slug: 'east-rand', inName: 'on the East Rand', label: 'the East Rand' },
  ],
} as const;

export const telHref = `tel:${site.phone.e164}`;
export const whatsappHref = `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(site.whatsapp.message)}`;
export const mailHref = `mailto:${site.email}`;
/**
 * Tokens for the Markdown blog posts (body and frontmatter), so the number is never typed into a post:
 * write {{PHONE}} for the number, [{{PHONE}}]({{TEL}}) for a call link and {{WHATSAPP}} for a WhatsApp link.
 */
export const markdownTokens: Record<string, string> = {
  '{{PHONE}}': site.phone.display,
  '{{TEL}}': telHref,
  '{{WHATSAPP}}': whatsappHref,
};
export const fillTokens = (s: string) => s.replace(/\{\{[A-Z]+\}\}/g, (t) => markdownTokens[t] ?? t);

export const businessId = `${site.url}/#business`;
export const websiteId = `${site.url}/#website`;

export const areaUrl = (slug: string) => `/areas/washing-machine-repairs-${slug}/`;
export const brandUrl = (slug: string) => `/brands/${slug}-washing-machine-repairs/`;
export const errorCodeUrl = (slug: string) => `/error-codes/${slug}-washing-machine-error-codes/`;

export const isPlaceholder = (v: string) => /\[(PLACEHOLDER|CONFIRM|VERIFY)/.test(v);

/** The areas as a sentence list: "Johannesburg, Pretoria, Centurion, Sandton, Midrand and the East Rand". */
export const areaList = () => {
  const l = site.areas.map((a) => a.label as string);
  return l.length > 1 ? `${l.slice(0, -1).join(', ')} and ${l[l.length - 1]}` : l.join('');
};

export const hoursText = () =>
  site.hours.map((h) => `${h.label}: ${h.opens}–${h.closes}`).join(' · ') +
  (site.hoursConfirmed ? '' : ' [CONFIRM]');

/** Main navigation (header). */
export const mainNav = [
  { label: 'Services', href: '/services/' },
  { label: 'Problems', href: '/problems/' },
  { label: 'Brands', href: '/brands/' },
  { label: 'Areas', href: '/areas/' },
  { label: 'Prices', href: '/washing-machine-repair-cost/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
];
