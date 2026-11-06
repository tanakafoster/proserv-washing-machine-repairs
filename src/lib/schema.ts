import { site, businessId, websiteId } from '../data/site';
import { services, serviceUrl } from '../data/services';
import type { FaqItem } from '../data/types';

const abs = (path: string) => new URL(path, site.url).href;
const stripHtml = (s: string) => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

/** LocalBusiness (HomeAndConstructionBusiness) — included on every page. */
export function businessSchema() {
  const sameAs = site.sameAs.filter((u) => /^https?:\/\//.test(u));
  const address: Record<string, string> = {
    '@type': 'PostalAddress',
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  };
  if (site.address.street) address.streetAddress = site.address.street;
  if (site.address.postalCode) address.postalCode = site.address.postalCode;

  return {
    '@type': 'HomeAndConstructionBusiness', // a LocalBusiness subtype
    '@id': businessId,
    name: site.name,
    url: `${site.url}/`,
    logo: abs('/logo.png'),
    image: abs('/images/og-default.jpg'),
    telephone: site.phone.e164,
    email: site.email,
    address,
    areaServed: site.areas.map((a) => ({ '@type': 'City', name: a.name, containedInPlace: { '@type': 'State', name: 'Gauteng' } })),
    openingHoursSpecification: site.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days.map((d) => `https://schema.org/${d}`),
      opens: h.opens,
      closes: h.closes,
    })),
    priceRange: site.priceRange,
    ...(sameAs.length ? { sameAs } : {}),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Washing machine repair services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.name, url: abs(serviceUrl(s.slug)) },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': websiteId,
    url: `${site.url}/`,
    name: site.name,
    inLanguage: 'en-ZA',
    publisher: { '@id': businessId },
  };
}

export function serviceSchema(opts: { name: string; description: string; path: string; serviceType?: string; areaName?: string }) {
  return {
    '@type': 'Service',
    '@id': `${abs(opts.path)}#service`,
    name: opts.name,
    serviceType: opts.serviceType ?? 'Washing machine repair',
    description: opts.description,
    url: abs(opts.path),
    provider: { '@id': businessId },
    areaServed: opts.areaName
      ? { '@type': 'City', name: opts.areaName }
      : site.areas.map((a) => ({ '@type': 'City', name: a.name })),
  };
}

export function faqSchema(items: FaqItem[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: stripHtml(i.q),
      acceptedAnswer: { '@type': 'Answer', text: stripHtml(i.a) },
    })),
  };
}

export interface Crumb {
  name: string;
  href: string;
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: abs(c.href),
    })),
  };
}

export function articleSchema(opts: { title: string; description: string; path: string; image: string; published: Date; modified: Date }) {
  return {
    '@type': 'BlogPosting',
    headline: opts.title,
    description: opts.description,
    url: abs(opts.path),
    mainEntityOfPage: abs(opts.path),
    image: abs(opts.image),
    datePublished: opts.published.toISOString().slice(0, 10),
    dateModified: opts.modified.toISOString().slice(0, 10),
    inLanguage: 'en-ZA',
    author: { '@type': 'Organization', name: site.name, url: `${site.url}/` },
    publisher: { '@id': businessId },
  };
}
