/**
 * SINGLE SOURCE OF TRUTH for business details.
 * Every page, the header, the footer, the contact form and the JSON-LD schema read from here.
 *
 * Before launch, fill in the settings marked "Before launch" below: the postal address for the
 * privacy policy, opening hours, the Google review link, social profiles, the GTM ID and the
 * Web3Forms key. Anything left empty is simply not shown on the site, so nothing half-finished
 * ever appears to visitors.
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
   * Before launch: a postal address for the privacy policy (a PO Box is fine), because POPIA asks
   * for the responsible party's name and address. Shown only when filled in.
   */
  postalAddress: '' as string,

  /**
   * Service-area business: no public street address.
   * The schema publishes region and country, plus the locality if you fill it in
   * (the town you work from, e.g. 'Johannesburg').
   */
  address: {
    locality: '',
    region: 'Gauteng',
    country: 'ZA',
    /** Leave empty unless you want a public street address shown. */
    street: '',
    postalCode: '',
  },

  /**
   * Before launch: your opening hours. While this list is empty the site shows no hours
   * anywhere (and the schema leaves them out), so add them only when they are real.
   * `days` uses schema.org day names. Times are 24-hour. Example:
   *   { label: 'Monday to Friday', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '17:00' },
   */
  hours: [] as { label: string; days: string[]; opens: string; closes: string }[],
  /** Optional line shown under the hours, e.g. 'Sundays and public holidays by arrangement'. Only shown with hours. */
  hoursNote: '',

  /**
   * Business facts, as supplied by the owner. Every page reads them from here, so a change
   * here changes the whole site. Never put the review count into testimonials or schema.
   */
  facts: {
    yearsInBusiness: '20',
    repairsCompleted: '10,000+',
    fiveStarReviews: '500',
    arrivalTime: 'within 1 hour',
    calloutFee: 'R300',
    /**
     * When the call-out fee is charged. Read as "The call-out fee is R300, <calloutCondition>."
     * If your policy is different (e.g. always charged but deducted from the repair), change both
     * lines: every page that mentions the call-out reads them from here.
     */
    calloutCondition: 'only payable if you decide not to go ahead with the quote',
    /** Short form for tight spaces: the home page hero and the price table. */
    calloutConditionShort: 'only if you decline the quote',
    warranty: '6-month',
  },

  /** Schema.org priceRange, e.g. 'R300 call-out'. Left out of the schema while empty. */
  priceRange: '',

  /**
   * Before launch: your Google Business Profile review link, e.g. https://g.page/r/XXXX/review
   * The footer's "Leave us a Google review" link only appears once this is filled in.
   */
  googleReviewUrl: '',

  /**
   * Before launch: your Google Business Profile and social profile URLs, for the schema's sameAs,
   * e.g. 'https://www.facebook.com/proserv…'. Empty entries are ignored.
   */
  sameAs: [] as string[],

  /** Before launch: your Google Tag Manager container ID. GTM is not loaded until this is a real ID. */
  gtmId: 'GTM-XXXXXXX',

  /**
   * Before launch: your Web3Forms access key (https://web3forms.com). The contact form can't
   * send until it's set. Create the key using info@proservwashingmachinerepairs.co.za so
   * submissions go there.
   */
  web3formsKey: 'YOUR_WEB3FORMS_ACCESS_KEY',

  /**
   * Service areas. Each area needs a matching content entry in src/data/areas.ts,
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

/** The areas as a sentence list: "Johannesburg, Pretoria, Centurion, Sandton, Midrand and the East Rand". */
export const areaList = () => {
  const l = site.areas.map((a) => a.label as string);
  return l.length > 1 ? `${l.slice(0, -1).join(', ')} and ${l[l.length - 1]}` : l.join('');
};

/** True once real opening hours are filled in above. Pages show hours only when this is true. */
export const hasHours = site.hours.length > 0;

/** "Monday to Friday: 08:00–17:00 · Saturday: 08:00–13:00", or '' while no hours are set. */
export const hoursText = () => site.hours.map((h) => `${h.label}: ${h.opens}–${h.closes}`).join(' · ');

/** Main navigation (header). */
export const mainNav = [
  { label: 'Services', href: '/services/' },
  { label: 'Problems', href: '/problems/' },
  { label: 'Brands', href: '/brands/' },
  { label: 'Areas', href: '/areas/' },
  { label: 'Costs', href: '/washing-machine-repair-cost/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
];
