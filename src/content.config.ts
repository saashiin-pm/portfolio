import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    dek: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    tag: z.enum(["PM Lessons", "Founder Journey", "Personal Brand"]).optional(),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    dek: z.string(),
    year: z.string(),
    tag: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    liveUrl: z.string().optional(),
    liveLabel: z.string().optional(),
    role: z.string().optional(),
    team: z.string().optional(),
    duration: z.string().optional(),
    problem: z.string(),
    solution: z.string(),
    value: z.string(),
    metrics: z
      .array(z.object({ label: z.string(), value: z.string() }))
      .default([]),
    order: z.number().default(99),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, work };
