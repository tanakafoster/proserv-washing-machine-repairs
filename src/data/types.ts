export interface FaqItem {
  q: string;
  /** Plain text or simple HTML. */
  a: string;
}

export interface LinkItem {
  label: string;
  href: string;
}

/** Shared shape for data-driven pages (services, problems, brands, areas, error codes). */
export interface ContentPage {
  slug: string;
  /** Short name used in cards, nav and breadcrumbs. */
  name: string;
  /** <title>, under 60 characters, primary keyword first. */
  title: string;
  /** Meta description, under 155 characters, with the phone number. */
  description: string;
  h1: string;
  primaryKeyword: string;
  /** One-line summary for cards on hub pages. */
  summary: string;
  /** Opening paragraph(s), HTML. Must contain the primary keyword. */
  intro: string;
  /** Main body, HTML with h2/h3. */
  body: string;
  faqs: FaqItem[];
  image?: { src: string; alt: string; width: number; height: number };
  related?: LinkItem[];
}
