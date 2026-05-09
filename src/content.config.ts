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

export const collections = { blog };
