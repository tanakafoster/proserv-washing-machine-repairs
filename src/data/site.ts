/**
 * SINGLE SOURCE OF TRUTH for business details.
 * Every page, the header, the footer, the contact form and the JSON-LD schema read from here.
 *
 * Search this file for [CONFIRM] and [PLACEHOLDER] to find what still needs real values.
 */

export const site = {
  name: 'ProServ Washing Machine Repairs',
  shortName: 'ProServ',
  /** Canonical origin: https, non-www, no trailing slash. Also set in astro.config.mjs. */
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
    calloutCondition: 'only payable if you decide not to go ahead with the quote',
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
   */
  areas: [
    { name: 'Johannesburg', slug: 'johannesburg' },
    { name: 'Pretoria', slug: 'pretoria' },
    { name: 'Centurion', slug: 'centurion' },
    { name: 'Sandton', slug: 'sandton' },
    { name: 'Midrand', slug: 'midrand' },
    { name: 'East Rand', slug: 'east-rand' },
  ],
} as const;

export const telHref = `tel:${site.phone.e164}`;
export const whatsappHref = `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(site.whatsapp.message)}`;
export const mailHref = `mailto:${site.email}`;
export const businessId = `${site.url}/#business`;
export const websiteId = `${site.url}/#website`;

export const areaUrl = (slug: string) => `/areas/washing-machine-repairs-${slug}/`;
export const brandUrl = (slug: string) => `/brands/${slug}-washing-machine-repairs/`;
export const errorCodeUrl = (slug: string) => `/error-codes/${slug}-washing-machine-error-codes/`;

export const isPlaceholder = (v: string) => /\[(PLACEHOLDER|CONFIRM|VERIFY)/.test(v);

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
