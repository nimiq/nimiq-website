import { defineCollection, defineCollectionSource, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

const communityAppsSource = defineCollectionSource({
  getKeys: async () => ['apps.json'],
  getItem: async () => {
    const res = await fetch('https://raw.githubusercontent.com/onmax/nimiq-awesome/main/src/data/dist/nimiq-apps.json')
    const data = await res.json() as Array<{ name: string, type: string, logo: string, link: string }>
    // Filter apps with logos and exclude official Nimiq apps (shown elsewhere)
    const communityApps = data.filter(app => app.logo && !['Wallets'].includes(app.type)).slice(0, 6)
    return { apps: communityApps }
  },
})

const linkSchema = z.object({ text: z.string(), href: z.string() })
const organizationSchema = z.object({ logo: z.string(), url: z.string() })
const appItemSchema = z.object({ highlight: z.boolean().optional().default(false), title: z.string(), description: z.string(), preview: z.string(), item: z.string(), link: z.string(), draft: z.boolean().optional().default(false) })
const bannerItemSchema = z.object({ headline: z.string(), subline: z.string().optional(), backgroundPattern: z.string().optional().describe('deprecated'), bgColor: z.string().optional().describe('deprecated'), label: z.string().optional().describe('deprecated'), link: z.string().optional() })
const gridItemSchema = z.object({ headline: z.string(), image: z.string().optional(), subline: z.string().optional(), icon: z.string().optional() })

const pillLinkSchema = z.object({ item: z.string(), label: z.string().optional(), bgColor: z.string().optional().describe('deprecated') })
const simpleHeadlineSchema = z.object({ headline: z.string(), subline: z.string().optional(), bgColor: z.string().optional().describe('deprecated'), cta: z.string().optional(), label: z.string().optional(), iconName: z.string().optional() })

export default defineContentConfig({
  collections: {
    pages: defineCollection({
      type: 'page',
      source: '*.md',
      schema: z.object({
        meta: z.object({ title: z.string(), description: z.string(), image: z.string().optional() }).optional(),
        hero: z.object({ headline: z.string(), subheadline: z.string().optional(), bgColor: z.string().optional().describe('deprecated'), link: z.string().optional(), organizations: z.array(organizationSchema).optional() }).optional(),
        pill_link: pillLinkSchema.optional(),
        simple_headline: simpleHeadlineSchema.optional(),
        apps: z.object({ apps: z.array(appItemSchema) }).optional(),
        banner: z.object({ overlapsNextSection: z.boolean().optional().default(false), items: z.array(bannerItemSchema) }).optional(),
        pill_link_2: pillLinkSchema.optional(),
        an_instant_zero_fee__headline: simpleHeadlineSchema.optional(),
        grid: z.object({ bgColor: z.string().optional().describe('deprecated'), items: z.array(gridItemSchema) }).optional(),
      }),
    }),
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({ title: z.string(), description: z.string(), slug: z.string(), publishedAt: z.string(), updatedAt: z.string().optional(), authors: z.array(z.string()), draft: z.boolean(), image: z.string().optional() }),
    }),
    exchanges: defineCollection({
      type: 'data',
      source: 'collections/exchanges/*.yaml',
      schema: z.object({ name: z.string(), slug: z.string(), logo: z.string(), link: z.string() }),
    }),
    communityApps: defineCollection({
      type: 'data',
      source: communityAppsSource,
      schema: z.object({ apps: z.array(z.object({ name: z.string(), type: z.string(), logo: z.string(), link: z.string() })) }),
    }),
    site: defineCollection({
      type: 'data',
      source: 'collections/site.yaml',
      schema: z.object({
        announcement: z.object({ text: z.string(), href: z.string(), since: z.string(), until: z.string() }).optional(),
        footer: z.object({ newsletterCta: z.string(), newsletterPlaceholder: z.string(), socialMediaCta: z.string(), description: z.string(), copyright: z.string() }),
        navigation: z.array(z.object({ label: z.string(), links: z.array(linkSchema) })),
        socials: z.array(z.object({ id: z.string(), label: z.string(), link: z.string(), icon: z.string(), color: z.string() })),
      }),
    }),
  },
})
