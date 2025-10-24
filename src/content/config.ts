import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",

  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    repo: z.string().url().optional(),
    site: z.string().url().optional(),
    status: z.enum(["live", "wip", "paused"]),
    stack: z.array(z.string()),
    tags: z.array(z.string()),
    highlight: z.boolean().default(false),
    order: z.number().int().default(999),
    cover: z.string().optional(),
  }),
});

export const collections = { projects: projectsCollection };
