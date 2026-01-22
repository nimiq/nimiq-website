import { defineCollection, defineCollectionSource, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

interface AppApiData { name: string, type: string, logo: string, link: string, description?: string, developer?: string, screenshot?: string }

const communityAppsSource = defineCollectionSource({
  getKeys: async () => ['apps.json'],
  getItem: async () => {
    const res = await fetch('https://raw.githubusercontent.com/onmax/nimiq-awesome/main/src/data/dist/nimiq-apps.json')
    const data = await res.json() as AppApiData[]
    const communityApps = data.filter(app => app.logo && !['Wallets'].includes(app.type)).slice(0, 6)
    return { apps: communityApps }
  },
})

const allAppsSource = defineCollectionSource({
  getKeys: async () => ['all-apps.json'],
  getItem: async () => {
    const res = await fetch('https://raw.githubusercontent.com/onmax/nimiq-awesome/main/src/data/dist/nimiq-apps.json')
    const data = await res.json() as AppApiData[]
    return { apps: data.filter(app => app.logo || app.screenshot) }
  },
})

// ============================================================================
// SHARED SCHEMAS
// ============================================================================

const linkSchema = z.object({ text: z.string(), href: z.string() })
const seoSchema = z.object({ title: z.string().optional(), description: z.string().optional() })
const heroLinkSchema = z.object({ href: z.string(), label: z.string().optional() })

// Hero schema
const heroSchema = z.object({ title: z.string(), description: z.string().optional(), link: heroLinkSchema.optional() })
const organizationSchema = z.object({ logo: z.string(), url: z.string() })
const highlightSchema = z.object({ highlight: z.string() })

// Grid & card schemas
const gridItemSchema = z.object({ headline: z.string(), subline: z.string().optional(), image: z.string().optional(), icon: z.string().optional(), color: z.string().optional(), link: z.string().optional() })
const gridSchema = z.object({ items: z.array(gridItemSchema) })
const techGridSchema = z.object({ headline: z.string(), subline: z.string().optional(), items: z.array(gridItemSchema) })
const largeGridItemSchema = gridItemSchema.extend({ shape: z.string().optional() })

// Headline schema with actions
const actionSchema = z.object({ href: z.string(), label: z.string().optional(), icon: z.string().optional(), variant: z.string().optional(), color: z.string().optional() })
// buttons is legacy from Studio content - supports both buttons and actions
const headlineSchema = z.object({ headline: z.string(), subline: z.string().optional(), label: z.string().optional(), icon: z.string().optional(), actions: z.array(actionSchema).optional(), buttons: z.array(actionSchema).optional() })

// Media schemas
const mediaSchema = z.object({ src: z.string(), poster: z.string().optional() })

// Content schemas
const contentSchema = z.object({ richText: z.string(), centerHeading: z.boolean().optional() })
const cardSchema = z.object({ content: z.string() })

// Banner & pill schemas
const bannerItemSchema = z.object({ headline: z.string(), subline: z.string().optional(), label: z.string().optional(), link: z.string().optional() })
const pillLinkSchema = z.object({ item: z.string(), label: z.string().optional(), icon: z.string() })

// App schemas
const appItemSchema = z.object({ highlight: z.boolean().optional().default(false), title: z.string(), description: z.string(), preview: z.string(), item: z.string(), link: z.string() })

// Text carousel schemas
const textCarouselItemSchema = z.object({ slide: z.string().optional(), key: z.string().optional(), buttonLogo: z.string().optional(), content: z.string().optional(), comingSoon: z.boolean().optional(), comingSoonLabel: z.string().optional() })
const textCarouselSchema = z.object({ content: z.string().optional(), items: z.array(textCarouselItemSchema) })

// Other section schemas
const logosGridSchema = z.object({ label: z.string().optional(), items: z.array(z.object({ logo: z.string(), link: z.string(), alt: z.string().optional() })) })
const zigzagItemSchema = z.object({ headline: z.string(), description: z.string().optional(), image: z.string().optional(), label: z.string().optional(), buttonLabel: z.string().optional(), buttonHref: z.string().optional(), secondaryButtonLabel: z.string().optional(), secondaryButtonLabelMobile: z.string().optional(), secondaryButtonHref: z.string().optional() })
const steppedSlidesSchema = z.object({ headline: z.string(), description: z.string().optional(), items: z.array(z.object({ image: z.string(), label: z.string(), description: z.string() })) })

// Team schema
const teamMemberSchema = z.object({ picture: z.string().optional(), fullName: z.string(), role: z.string(), description: z.string(), github: z.string().optional(), linkedin: z.string().optional(), twitter: z.string().optional() })

// Community schemas
const statItemSchema = z.object({ label: z.string(), stat: z.string() })
const blockItemSchema = z.object({ image: z.string(), stats: z.array(statItemSchema) })
const newYorkGridSchema = z.object({ blocks: z.array(blockItemSchema) })
const socialMediaItemSchema = z.object({ category: z.string(), socialMedia: z.string(), socialMediaItem: z.string().optional() })
const socialMediaGridSchema = z.object({ newsAndAnnouncementsLabel: z.string().optional(), discussionsAndSupportLabel: z.string().optional(), cultureAndInsightsLabel: z.string().optional(), showLabels: z.boolean().optional(), items: z.array(socialMediaItemSchema) })
const appGalleryCtaSchema = z.object({ title: z.string(), description: z.string(), categoriesLabel: z.string().optional(), categoriesDescription: z.string().optional(), cta: z.string() })

// Buy-and-sell schemas
const walletHoverSchema = z.object({ title: z.string(), description: z.string(), screenshot: z.string(), link: z.string(), poweredByLabel: z.string().optional(), poweredByLogos: z.array(z.object({ logo: z.string() })).optional() })
const tokenDistributionItemSchema = z.object({ title: z.string(), percentage: z.number(), description: z.string() })
const buyAndSellBannerSchema = z.object({ headline: z.string(), cta: z.string(), features: z.array(z.object({ icon: z.string(), description: z.string() })).optional() })

// Contact schema
const contactSchema = z.object({ headline: z.string().optional(), subline: z.string().optional(), nameLabel: z.string().optional(), emailLabel: z.string().optional(), messageLabel: z.string().optional(), submitLabel: z.string().optional() })

// ============================================================================
// COLLECTIONS
// ============================================================================

export default defineContentConfig({
  collections: {
    // ========================================================================
    // PAGE COLLECTIONS
    // ========================================================================

    home: defineCollection({
      type: 'page',
      source: 'index.md',
      schema: z.object({
        seo: seoSchema.optional(),
        hero: heroSchema.extend({ organizations: z.array(organizationSchema).optional() }),
        appsLink: pillLinkSchema,
        apps: z.object({ headline: headlineSchema, items: z.array(appItemSchema) }),
        banner: z.object({ overlapsNextSection: z.boolean().optional().default(false), items: z.array(bannerItemSchema) }),
        techLink: pillLinkSchema,
        techGrid: techGridSchema,
        staking: headlineSchema.extend({ stakingNote: z.string().optional() }),
        community: headlineSchema,
      }),
    }),

    about: defineCollection({
      type: 'page',
      source: 'about.md',
      schema: z.object({
        seo: seoSchema.optional(),
        hero: heroSchema,
        media: mediaSchema,
        dive: z.object({ headline: headlineSchema, items: z.array(gridItemSchema) }),
        mission: z.object({ headline: z.string(), content: z.string() }),
        team: z.object({ headline: headlineSchema, items: z.array(largeGridItemSchema) }),
        roadmap: headlineSchema,
        feedback: headlineSchema,
      }),
    }),

    nimiqPay: defineCollection({
      type: 'page',
      source: 'nimiq-pay.md',
      schema: z.object({
        seo: seoSchema.optional(),
        hero: heroSchema.extend({ playStore: z.string().optional(), appStore: z.string().optional(), items: z.array(highlightSchema).optional() }),
        media: mediaSchema,
        logos: logosGridSchema,
        intro: headlineSchema,
        grid: gridSchema,
        about: z.object({ headline: headlineSchema, items: z.array(cardSchema) }),
        textCarousel: textCarouselSchema,
        pooling: z.object({ headline: headlineSchema, carousel: textCarouselSchema }),
        discover: z.object({ headline: headlineSchema, items: z.array(zigzagItemSchema) }),
      }),
    }),

    wallet: defineCollection({
      type: 'page',
      source: 'wallet.md',
      schema: z.object({
        seo: seoSchema.optional(),
        hero: heroSchema,
        playground: z.object({ url: z.string() }),
        consensus: z.object({ label: z.string(), headline: z.string(), subline: z.string(), thisIsYou: z.string(), connect: z.string(), connecting: z.string() }),
        intro: headlineSchema,
        currencies: z.object({ items: z.array(z.object({ name: z.string(), crypto: z.string(), mainFeature: z.string(), secondFeature: z.string(), thirdFeature: z.string(), fee: z.string(), time: z.string(), adjective: z.string() })), feeLabel: z.string(), timeLabel: z.string() }),
        staking: headlineSchema.extend({ stakingNote: z.string().optional() }),
        banner: z.object({ overlapsNextSection: z.boolean().optional(), icon: z.string(), label: z.string(), headline: z.string(), subline: z.string(), link: z.string(), image: z.string() }),
        seed: z.object({ headline: headlineSchema, items: z.array(gridItemSchema) }),
        challenge: z.object({ headline: z.string(), subline: z.string(), guessLabel: z.string(), chanceLabel: z.string(), reward: z.string() }),
        noEmail: headlineSchema,
      }),
    }),

    buyAndSell: defineCollection({
      type: 'page',
      source: 'buy-and-sell.md',
      schema: z.object({
        seo: seoSchema.optional(),
        hero: heroSchema.extend({ nimPriceChartLabel: z.string(), marketCapLabel: z.string(), marketCapInfo: z.string(), volume24HLabel: z.string(), volume24HInfo: z.string(), totalSupplyLabel: z.string(), totalSupplyInfo: z.string(), maxSupplyLabel: z.string(), maxSupplyInfo: z.string(), poweredByLogo: z.string(), poweredByLink: z.string(), poweredByLabel: z.string() }),
        intro: headlineSchema,
        wallet: z.object({ headline: headlineSchema, content: walletHoverSchema }),
        distribution: z.object({ headline: headlineSchema, items: z.array(tokenDistributionItemSchema) }),
        cta: buyAndSellBannerSchema,
        noDownload: headlineSchema,
      }),
    }),

    community: defineCollection({
      type: 'page',
      source: 'community.md',
      schema: z.object({
        seo: seoSchema.optional(),
        hero: heroSchema,
        stats: newYorkGridSchema,
        countries: z.object({ headline: headlineSchema, flags: z.string() }),
        social: z.object({ headline: headlineSchema, grid: socialMediaGridSchema }),
        newsletter: z.object({ cta: z.string(), placeholder: z.string().optional() }),
        events: headlineSchema,
        apps: z.object({ headline: headlineSchema, gallery: appGalleryCtaSchema }),
        banner: z.object({ overlapsNextSection: z.boolean().optional(), items: z.array(bannerItemSchema) }),
        feedback: headlineSchema,
      }),
    }),

    team: defineCollection({
      type: 'page',
      source: 'team.md',
      schema: z.object({
        seo: seoSchema.optional(),
        hero: heroSchema,
        members: z.object({ items: z.array(teamMemberSchema) }),
        cta: headlineSchema,
      }),
    }),

    litepaperPos: defineCollection({
      type: 'page',
      source: 'litepaper-pos.md',
      schema: z.object({ seo: seoSchema.optional(), headline: z.string(), subline: z.string(), versionNumber: z.string(), date: z.string() }),
    }),

    litepaperPow: defineCollection({
      type: 'page',
      source: 'litepaper-pow.md',
      schema: z.object({ seo: seoSchema.optional(), headline: z.string(), subline: z.string(), versionNumber: z.string(), date: z.string() }),
    }),

    cryptopaymentlink: defineCollection({
      type: 'page',
      source: 'cryptopaymentlink.md',
      schema: z.object({
        seo: seoSchema.optional(),
        hero: heroSchema.extend({ linkHref: z.string().optional(), linkLabel: z.string().optional(), items: z.array(highlightSchema).optional() }),
        tiltedMedia: z.object({ src: z.string(), poster: z.string().optional() }).optional(),
        simpleHeadline: headlineSchema.optional(),
        grid: gridSchema.optional(),
        learnItHeadline: headlineSchema.optional(),
        textCards: z.object({ items: z.array(cardSchema) }).optional(),
        steppedSlides: steppedSlidesSchema.optional(),
        finalCta: headlineSchema.optional(),
      }),
    }),

    blogPage: defineCollection({
      type: 'page',
      source: 'blog.md',
      schema: z.object({
        seo: seoSchema.optional(),
        hero: heroSchema,
        grid: z.object({ labelBy: z.string(), labelLearnMore: z.string(), mediaType: z.string().optional() }),
        newsletter: z.object({ cta: z.string() }),
      }),
    }),

    appsPage: defineCollection({
      type: 'page',
      source: 'apps.md',
      schema: z.object({
        seo: seoSchema.optional(),
        hero: heroSchema,
        cta: headlineSchema,
      }),
    }),

    albatross: defineCollection({
      type: 'page',
      source: 'albatross.md',
      schema: z.object({
        seo: seoSchema.optional(),
        hero: heroSchema,
        details: z.object({ items: z.array(z.object({ headline: z.string(), description: z.string().optional() })) }),
      }),
    }),

    bugBounty: defineCollection({
      type: 'page',
      source: 'bug-bounty.md',
      schema: z.object({
        seo: seoSchema.optional(),
        hero: heroSchema,
        content: contentSchema,
      }),
    }),

    contact: defineCollection({
      type: 'page',
      source: 'contact.md',
      schema: z.object({
        seo: seoSchema.optional(),
        hero: heroSchema,
        social: z.object({ headline: headlineSchema, grid: socialMediaGridSchema }),
        form: contactSchema,
      }),
    }),

    newsletterPage: defineCollection({
      type: 'page',
      source: 'newsletter.md',
      schema: z.object({
        seo: seoSchema.optional(),
        hero: heroSchema,
        form: z.object({
          emailLabel: z.string(),
          permissionTitle: z.string(),
          permissionDescription: z.string(),
          permissionCheckbox: z.string(),
          interestsTitle: z.string(),
          interestsDescription: z.string(),
          interests: z.array(z.string()),
          productsTitle: z.string(),
          products: z.array(z.string()),
          submitButton: z.string(),
        }),
      }),
    }),

    oasis: defineCollection({
      type: 'page',
      source: 'oasis.md',
      schema: z.object({
        seo: seoSchema.optional(),
        hero: z.object({ headline: z.string(), subline: z.string().optional(), linkHref: z.string().optional(), linkLabel: z.string().optional(), secondaryLinkHref: z.string().optional(), secondaryLinkLabel: z.string().optional() }),
        oasisWorld: z.object({ beTheFirstToKnowLabel: z.string().optional(), items: z.array(z.object({ kind: z.enum(['Europe', 'Central America', 'World']), title: z.string(), subline: z.string(), linkLabel: z.string().optional(), linkHref: z.string().optional() })) }).optional(),
        tryIt: headlineSchema.optional(),
        largeGrid: z.array(largeGridItemSchema).optional(),
        howDoesItWork: headlineSchema.optional(),
        youtube: z.object({ url: z.string(), title: z.string().optional() }).optional(),
        openTech: headlineSchema.optional(),
        integrations: z.array(z.object({ title: z.string(), description: z.string(), links: z.array(z.object({ label: z.string(), href: z.string(), variant: z.string().optional() })) })).optional(),
        collaborate: headlineSchema.optional(),
      }),
    }),

    onepager: defineCollection({
      type: 'page',
      source: 'onepager.md',
      schema: z.object({
        seo: seoSchema.optional(),
        hero: heroSchema,
        content: contentSchema,
      }),
    }),

    podcast: defineCollection({
      type: 'page',
      source: 'podcast.md',
      schema: z.object({
        seo: seoSchema.optional(),
        hero: heroSchema,
        newsletter: z.object({ cta: z.string() }),
        grid: z.object({ labelBy: z.string(), labelLearnMore: z.string(), mediaType: z.string().optional() }),
      }),
    }),

    privacy: defineCollection({
      type: 'page',
      source: 'privacy.md',
      schema: z.object({
        seo: seoSchema.optional(),
        hero: heroSchema,
        content: contentSchema,
      }),
    }),

    roadmap: defineCollection({
      type: 'page',
      source: 'roadmap.md',
      schema: z.object({
        seo: seoSchema.optional(),
        hero: heroSchema,
        roadmap: z.object({ milestones: z.string(), firstLayer: z.string(), secondLayer: z.string(), thirdLayer: z.string() }),
        newsletter: z.object({ cta: z.string() }),
      }),
    }),

    staking: defineCollection({
      type: 'page',
      source: 'staking.md',
      schema: z.object({
        seo: seoSchema.optional(),
        hero: heroSchema,
        quote: z.object({ text: z.string(), author: z.string().optional() }),
        calculator: z.object({ headline: headlineSchema, amountLabel: z.string(), periodLabel: z.string(), rewardsLabel: z.string() }),
        distribution: z.object({ headline: headlineSchema, stakedHeadline: z.string().optional(), stakedDescription: z.string().optional(), distributedHeadline: z.string().optional(), distributedDescription: z.string().optional() }),
        video: z.object({ headline: headlineSchema, embedUrl: z.string(), poster: z.string().optional(), title: z.string().optional(), description: z.string().optional() }),
        delegate: headlineSchema,
        banner: z.object({ overlapsNextSection: z.boolean().optional(), items: z.array(bannerItemSchema) }),
        faq: z.object({ headline: z.string().optional(), forumLink: z.object({ text: z.string(), href: z.string() }).optional(), items: z.array(z.object({ question: z.string(), answer: z.string() })) }),
        wallet: headlineSchema.extend({ stakingNote: z.string().optional() }),
      }),
    }),

    terms: defineCollection({
      type: 'page',
      source: 'terms.md',
      schema: z.object({
        seo: seoSchema.optional(),
        hero: z.object({ headline: z.string(), subline: z.string().optional() }),
        content: contentSchema,
      }),
    }),

    activationTerms: defineCollection({
      type: 'page',
      source: 'activation-terms.md',
      schema: z.object({
        seo: seoSchema.optional(),
        hero: z.object({ headline: z.string(), subline: z.string().optional() }),
        content: contentSchema,
      }),
    }),

    communityFunding: defineCollection({
      type: 'page',
      source: 'community-funding.md',
      schema: z.object({
        seo: seoSchema.optional(),
        hero: heroSchema,
        stats: z.object({ items: z.array(z.object({ label: z.string(), value: z.string() })) }),
        steps: steppedSlidesSchema,
        intro: headlineSchema,
        cards: z.object({ items: z.array(z.object({ headline: z.string(), description: z.string().optional(), icon: z.string().optional() })) }),
        account: headlineSchema,
      }),
    }),

    // ========================================================================
    // BLOG COLLECTION
    // ========================================================================

    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({ title: z.string(), description: z.string(), slug: z.string(), publishedAt: z.string(), updatedAt: z.string().optional(), authors: z.array(z.string()), image: z.string().optional(), readingTime: z.number().optional() }),
    }),

    // ========================================================================
    // DATA COLLECTIONS
    // ========================================================================

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

    allApps: defineCollection({
      type: 'data',
      source: allAppsSource,
      schema: z.object({ apps: z.array(z.object({ name: z.string(), type: z.string(), logo: z.string(), link: z.string(), description: z.string().optional(), developer: z.string().optional(), screenshot: z.string().optional() })) }),
    }),

    site: defineCollection({
      type: 'data',
      source: 'collections/site.yaml',
      schema: z.object({
        announcement: z.object({ text: z.string(), href: z.string(), since: z.string(), until: z.string() }).optional(),
        footer: z.object({ newsletterCta: z.string(), newsletterPlaceholder: z.string(), socialMediaCta: z.string(), description: z.string(), copyright: z.string() }),
        navigation: z.array(z.object({
          label: z.string(),
          links: z.array(linkSchema.extend({ logo: z.string().optional(), image: z.string().optional() })),
          howTo: z.object({ title: z.string(), links: z.array(linkSchema) }).optional(),
        })),
        socials: z.array(z.object({ id: z.string(), label: z.string(), link: z.string(), icon: z.string(), color: z.string() })),
      }),
    }),
  },
})
