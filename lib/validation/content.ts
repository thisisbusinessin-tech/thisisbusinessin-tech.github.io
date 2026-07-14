import { z } from "zod";

export const articleSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  primaryQuestion: z.string().min(1),
  description: z.string().min(1),
  publishedAt: z.string().min(1),
  updatedAt: z.string().min(1),
  author: z.string().min(1),
  reviewer: z.string().optional(),
  category: z.string().min(1),
  tags: z.array(z.string()).default([]),
  canonicalPath: z.string().startsWith("/"),
  indexable: z.boolean().default(true),
  relatedServices: z.array(z.string()).default([]),
  content: z.array(
    z.object({
      type: z.enum(["paragraph", "heading", "list"]),
      text: z.string().optional(),
      level: z.number().optional(),
      items: z.array(z.string()).optional()
    })
  ),
  faqs: z
    .array(
      z.object({
        question: z.string().min(1),
        answer: z.string().min(1)
      })
    )
    .default([]),
  tldr: z.string().min(1),
  apneTailorConnection: z.string().optional()
});

export type Article = z.infer<typeof articleSchema>;

export const faqSchema = z.object({
  id: z.string().min(1),
  question: z.string().min(1),
  answer: z.string().min(1),
  topic: z.string().min(1),
  needsReview: z.boolean().default(false)
});

export type FAQ = z.infer<typeof faqSchema>;
