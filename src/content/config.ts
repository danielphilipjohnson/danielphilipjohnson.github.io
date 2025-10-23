// src/content.config.ts
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders"; // new API

export const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    repo: z.string().url().optional(),
    site: z.string().url().optional(),
    status: z.enum(["live", "wip", "paused"]),
    stack: z.array(z.string()),
    tags: z.array(z.string()),
    highlight: z.boolean().default(false),
    order: z.number().default(999),
    cover: z.string().optional(),
  }),
});
