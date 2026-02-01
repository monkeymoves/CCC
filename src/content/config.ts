import { defineCollection, z } from "astro:content";

const portfolio = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    cover: z.string(),
    images: z.array(z.string()).default([]),
    order: z.number().optional()
  })
});

export const collections = { portfolio };
