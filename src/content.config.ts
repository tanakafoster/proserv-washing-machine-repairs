import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    /** <title> tag, under 60 characters */
    metaTitle: z.string().max(60),
    /** Meta description, under 155 characters */
    description: z.string().max(155),
    primaryKeyword: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string(),
    imageAlt: z.string(),
    summary: z.string(),
  }),
});

export const collections = { blog };
