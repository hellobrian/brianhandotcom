import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
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
    }),
});

export const collections = { blog };
