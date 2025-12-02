import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        slug: z.string(),
        publishedAt: z.string(),
        updatedAt: z.string().optional(),
        authors: z.array(z.string()),
        draft: z.boolean(),
        image: z.string(),
      }),
    }),
    exchanges: defineCollection({
      type: 'data',
      source: 'collections/exchanges/*.yaml',
      schema: z.object({
        name: z.string(),
        slug: z.string(),
        logo: z.string(),
        link: z.string(),
      }),
    }),
    socialMedia: defineCollection({
      type: 'data',
      source: 'collections/social-media.yaml',
    }),
    pages: defineCollection({
      type: 'page',
      source: '*.md',
      schema: z.record(z.any()),
    }),
  },
})
