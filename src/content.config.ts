import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { fillTokens } from './data/site';

/** Frontmatter text: {{PHONE}}, {{TEL}} and {{WHATSAPP}} are filled in from src/data/site.ts. */
const text = () => z.string().transform(fillTokens);

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: text(),
    /** <title> tag, under 60 characters */
    metaTitle: text().pipe(z.string().max(60)),
    /** Meta description, under 155 characters (counted after {{PHONE}} is filled in) */
    description: text().pipe(z.string().max(155)),
    primaryKeyword: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    /** Path under public/, e.g. /images/blog-bearings.webp. `npm run audit` fails if the file is missing. */
    image: z.string().startsWith('/'),
    imageAlt: z.string(),
    summary: text(),
  }),
});

export const collections = { blog };
