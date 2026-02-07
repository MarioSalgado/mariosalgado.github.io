import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    categories: z.array(z.string()),
    tags: z.array(z.string()),
    image: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { blog };
