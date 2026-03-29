import { z } from "astro/zod";
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/blog" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      // heroImage: z.string().optional(),
      cover: z.union([
        image().refine((img) => img.width >= 768, {
          message: "Cover image must be at least 768 pixels wide!",
        }),
        z.string(),
      ]),
      coverAlt: z.string(),
      tags: z.array(z.string()),
      isPublished: z.boolean().optional().default(true),
      variant: z.enum(["standard", "photo"]).default("standard"),
    }),
});

const data = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/data" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    summary: z.string(),
    experience: z.array(
      z.object({
        company: z.string(),
        position: z.string(),
        duration: z.string(),
        location: z.string(),
        responsibilities: z.array(z.string()),
        highlighted: z.boolean().optional().default(true),
      }),
    ),
    contact: z.object({
      email: z.email(),
      linkedin: z.url().optional(),
      github: z.url().optional(),
      website: z.url().optional(),
      phone: z.string().optional(),
      location: z.string().optional(),
    }),
    education: z.array(
      z.object({
        institution: z.string(),
        degree: z.string(),
        graduationYear: z.number(),
      }),
    ),
    skills: z.object({
      languages: z.array(z.string()),
      frameworks: z.array(z.string()),
      tools: z.array(z.string()),
      testing: z.array(z.string()),
      methods: z.array(z.string()),
    }),
  }),
});

export const collections = { blog, data };
