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
    return { apps: data.filter(app => app.logo) }
  },
})

// ============================================================================
// SHARED SCHEMAS
// ============================================================================

const metaSchema = z.object({ title: z.string(), description: z.string(), image: z.string().optional() })
const footerSchema = z.object({ newsletterCta: z.string().optional(), newsletterPlaceholder: z.string().optional(), socialMediaCta: z.string().optional(), nimiqShortDescription: z.string().optional() })
const linkSchema = z.object({ text: z.string(), href: z.string() })

// Hero variants
const heroBaseSchema = z.object({ headline: z.string(), subline: z.string().optional(), link: z.string().optional(), linkHref: z.string().optional(), linkLabel: z.string().optional() })
const organizationSchema = z.object({ logo: z.string(), url: z.string() })
const highlightItemSchema = z.object({ highlight: z.string() })

// Grid & card schemas
const gridItemSchema = z.object({ headline: z.string(), subline: z.string().optional(), image: z.string().optional(), icon: z.string().optional(), iconName: z.string().optional() })
const gridSchema = z.object({ items: z.array(gridItemSchema) })
const largeGridItemSchema = gridItemSchema.extend({ shape: z.string().optional(), linkHref: z.string().optional() })
const largeGridSchema = z.object({ items: z.array(largeGridItemSchema) })

// Simple headline
const simpleHeadlineSchema = z.object({ headline: z.string(), subline: z.string().optional(), cta: z.string().optional(), label: z.string().optional(), iconName: z.string().optional(), links: z.array(z.string()).optional(), linkHref: z.string().optional(), linkLabel: z.string().optional() })

// Media schemas
const tiltedMediaSchema = z.object({ overlapsNextSection: z.boolean().optional(), media: z.string().optional(), video: z.object({ embed_url: z.string(), title: z.string().optional() }).optional(), poster: z.string().optional(), headline: z.string().optional() })

// Content schemas
const contentSchema = z.object({ richText: z.string(), centerHeading: z.boolean().optional() })
const richTextCardSchema = z.object({ content: z.string() })

// Banner & pill schemas
const bannerItemSchema = z.object({ headline: z.string(), subline: z.string().optional(), label: z.string().optional(), link: z.string().optional() })
const pillLinkSchema = z.object({ item: z.string(), label: z.string().optional() })

// App schemas
const appItemSchema = z.object({ highlight: z.boolean().optional().default(false), title: z.string(), description: z.string(), preview: z.string(), item: z.string(), link: z.string() })

// Text carousel schemas
const textCarouselItemSchema = z.object({ slide: z.string() })
const textCarouselSchema = z.object({ content: z.string().optional(), items: z.array(textCarouselItemSchema) })

// Other section schemas
const logosGridSchema = z.object({ label: z.string().optional(), items: z.array(z.object({ logo: z.string(), link: z.string() })) })
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

// Litepaper schema
const whitepaperItemSchema = z.object({ headline: z.string(), subline: z.string(), versionNumber: z.string(), date: z.string(), content: z.string(), jumpToTheLatestChanges: z.string().optional(), updated: z.string().optional() })

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
        meta: metaSchema.optional(),
        hero: heroBaseSchema.extend({ subheadline: z.string().optional(), organizations: z.array(organizationSchema).optional() }),
        pillLink: pillLinkSchema.optional(),
        simpleHeadline: simpleHeadlineSchema.optional(),
        apps: z.object({ apps: z.array(appItemSchema) }).optional(),
        banner: z.object({ overlapsNextSection: z.boolean().optional().default(false), items: z.array(bannerItemSchema) }).optional(),
        pillLink2: pillLinkSchema.optional(),
        anInstantZeroFeeHeadline: simpleHeadlineSchema.optional(),
        grid: gridSchema.optional(),
        stakingHeadline: z.object({ headline: z.string(), subline: z.string().optional(), link: z.string().optional(), stakingNote: z.string().optional() }).optional(),
        footer: footerSchema.optional(),
      }),
    }),

    about: defineCollection({
      type: 'page',
      source: 'about.md',
      schema: z.object({
        hero: heroBaseSchema,
        tiltedMedia: tiltedMediaSchema.optional(),
        simpleHeadline: simpleHeadlineSchema.optional(),
        grid: gridSchema.optional(),
        nimiqSMissionHeadline: simpleHeadlineSchema.optional(),
        content: contentSchema.optional(),
        meetThePeopleBehiHeadline: simpleHeadlineSchema.optional(),
        largeGrid: largeGridSchema.optional(),
        roadmapHeadline: simpleHeadlineSchema.optional(),
        feedbackHeadline: simpleHeadlineSchema.optional(),
        footer: footerSchema.optional(),
      }),
    }),

    nimiqPay: defineCollection({
      type: 'page',
      source: 'nimiq-pay.md',
      schema: z.object({
        meta: metaSchema.optional(),
        hero: heroBaseSchema.extend({ playStore: z.string().optional(), appStore: z.string().optional(), items: z.array(highlightItemSchema).optional() }),
        tiltedMedia: tiltedMediaSchema.optional(),
        logos: logosGridSchema.optional(),
        simpleHeadline: simpleHeadlineSchema.optional(),
        grid: gridSchema.optional(),
        whatIsTheNimiqPaHeadline: simpleHeadlineSchema.optional(),
        textCards: z.object({ items: z.array(richTextCardSchema) }).optional(),
        textCarousel: textCarouselSchema.optional(),
        oneAppToPoolThemHeadline: simpleHeadlineSchema.optional(),
        textCarousel2: textCarouselSchema.optional(),
        discoverAWholeEcoHeadline: simpleHeadlineSchema.optional(),
        zigzag: z.object({ items: z.array(zigzagItemSchema) }).optional(),
        footer: footerSchema.optional(),
      }),
    }),

    wallet: defineCollection({
      type: 'page',
      source: 'wallet.md',
      schema: z.object({
        'hero': heroBaseSchema,
        'walletPlayground': z.object({ playgroundUrl: z.string() }).optional(),
        'consensus': z.object({ label: z.string().optional(), headline: z.string().optional(), subline: z.string().optional(), thisIsYou: z.string().optional(), connect: z.string().optional(), connecting: z.string().optional() }).optional(),
        'simpleHeadline': simpleHeadlineSchema.optional(),
        'currencyComparison': z.object({ currencies: z.string(), feeLabel: z.string().optional(), timeLabel: z.string().optional() }).optional(),
        'banner': z.object({ overlapsNextSection: z.boolean().optional(), icon: z.string().optional(), label: z.string().optional(), headline: z.string().optional(), subline: z.string().optional(), link: z.string().optional(), image: z.string().optional() }).optional(),
        '24WordsBetterThanHeadline': simpleHeadlineSchema.optional(),
        'grid': gridSchema.optional(),
        'walletChallenge': z.object({ headline: z.string(), subheadline: z.string().optional(), guessTheRemainingWordsLabel: z.string().optional(), youDoNotStandAChanceToTake: z.string().optional(), rewardamount: z.string().optional() }).optional(),
        'noEmailOrDownloadHeadline': simpleHeadlineSchema.optional(),
        'footer': footerSchema.optional(),
      }),
    }),

    buyAndSell: defineCollection({
      type: 'page',
      source: 'buy-and-sell.md',
      schema: z.object({
        hero: heroBaseSchema.extend({ nimPriceChartLabel: z.string().optional(), marketCapLabel: z.string().optional(), marketCapInfo: z.string().optional(), volume24HLabel: z.string().optional(), volume24HInfo: z.string().optional(), totalSupplyLabel: z.string().optional(), totalSupplyInfo: z.string().optional(), maxSupplyLabel: z.string().optional(), maxSupplyInfo: z.string().optional(), poweredByLogo: z.string().optional(), poweredByLink: z.string().optional(), poweredByLabel: z.string().optional() }),
        simpleHeadline: simpleHeadlineSchema.optional(),
        buyNimInTheWalleHeadline: simpleHeadlineSchema.optional(),
        walletHover: walletHoverSchema.optional(),
        oneOfTheSmallestHeadline: simpleHeadlineSchema.optional(),
        tokenDistribution: z.object({ item: z.array(tokenDistributionItemSchema) }).optional(),
        buyAndSellBanner: buyAndSellBannerSchema.optional(),
        noDownloadNoPersoHeadline: simpleHeadlineSchema.optional(),
        footer: footerSchema.optional(),
      }),
    }),

    community: defineCollection({
      type: 'page',
      source: 'community.md',
      schema: z.object({
        hero: heroBaseSchema,
        newYork: newYorkGridSchema.optional(),
        simpleHeadline: simpleHeadlineSchema.optional(),
        flags: z.object({ flags: z.string() }).optional(),
        getInTouchHeadline: simpleHeadlineSchema.optional(),
        socialMedia: socialMediaGridSchema.optional(),
        newsletter: z.object({ cta: z.string(), placeholder: z.string().optional() }).optional(),
        nimiqCommunityAppsHeadline: simpleHeadlineSchema.optional(),
        appGallery: appGalleryCtaSchema.optional(),
        banner: z.object({ overlapsNextSection: z.boolean().optional(), items: z.array(bannerItemSchema) }).optional(),
        feedbackHeadline: simpleHeadlineSchema.optional(),
        footer: footerSchema.optional(),
      }),
    }),

    team: defineCollection({
      type: 'page',
      source: 'team.md',
      schema: z.object({
        hero: heroBaseSchema,
        team: z.object({ items: z.array(teamMemberSchema) }),
        simpleHeadline: simpleHeadlineSchema.optional(),
        footer: footerSchema.optional(),
      }),
    }),

    litepaper: defineCollection({
      type: 'page',
      source: 'litepaper.md',
      schema: z.object({
        meta: metaSchema.optional(),
        whitepaper: z.object({ items: z.array(whitepaperItemSchema) }),
        footer: footerSchema.optional(),
      }),
    }),

    cryptopaymentlink: defineCollection({
      type: 'page',
      source: 'cryptopaymentlink.md',
      schema: z.object({
        hero: heroBaseSchema.extend({ items: z.array(highlightItemSchema).optional() }),
        tiltedMedia: tiltedMediaSchema.optional(),
        simpleHeadline: simpleHeadlineSchema.optional(),
        grid: gridSchema.optional(),
        whatIsCryptopaymenHeadline: simpleHeadlineSchema.optional(),
        textCards: z.object({ items: z.array(richTextCardSchema) }).optional(),
        steppedSlides: steppedSlidesSchema.optional(),
        footer: footerSchema.optional(),
      }),
    }),

    blogPage: defineCollection({
      type: 'page',
      source: 'blog.md',
      schema: z.object({
        hero: heroBaseSchema,
        blogGrid: z.object({ labelBy: z.string(), labelLearnMore: z.string(), mediaType: z.string().optional() }).optional(),
        newsletter: z.object({ cta: z.string() }).optional(),
        footer: footerSchema.optional(),
      }),
    }),

    appsPage: defineCollection({
      type: 'page',
      source: 'apps.md',
      schema: z.object({
        meta: metaSchema.optional(),
        hero: heroBaseSchema.extend({ subheadline: z.string().optional() }),
        simpleHeadline: simpleHeadlineSchema.optional(),
      }),
    }),

    albatross: defineCollection({
      type: 'page',
      source: 'albatross.md',
      schema: z.object({
        hero: heroBaseSchema,
        albatrossDetails: z.object({ items: z.array(z.object({ headline: z.string(), description: z.string().optional() })) }).optional(),
        footer: footerSchema.optional(),
      }),
    }),

    bugBounty: defineCollection({
      type: 'page',
      source: 'bug-bounty.md',
      schema: z.object({
        content: contentSchema.extend({ centerHeading: z.boolean().optional() }),
        footer: footerSchema.optional(),
      }),
    }),

    contact: defineCollection({
      type: 'page',
      source: 'contact.md',
      schema: z.object({
        hero: heroBaseSchema,
        socialMedia: socialMediaGridSchema.optional(),
        simpleHeadline: simpleHeadlineSchema.optional(),
        contact: contactSchema.optional(),
        footer: footerSchema.optional(),
      }),
    }),

    newsletterPage: defineCollection({
      type: 'page',
      source: 'newsletter.md',
      schema: z.object({
        footer: footerSchema.optional(),
      }),
    }),

    oasis: defineCollection({
      type: 'page',
      source: 'oasis.md',
      schema: z.object({
        hero: heroBaseSchema,
        hero2: heroBaseSchema.optional(),
        simpleHeadline: simpleHeadlineSchema.optional(),
        largeGrid: largeGridSchema.optional(),
        howDoesItWorkHeadline: simpleHeadlineSchema.optional(),
        youtube: z.object({ embedUrl: z.string(), title: z.string().optional() }).optional(),
        oasisIsAnOpenTecHeadline: simpleHeadlineSchema.optional(),
        collaborateWithNimHeadline: simpleHeadlineSchema.optional(),
        contact: contactSchema.optional(),
        footer: footerSchema.optional(),
      }),
    }),

    onepager: defineCollection({
      type: 'page',
      source: 'onepager.md',
      schema: z.object({
        hero: heroBaseSchema,
        content: contentSchema.optional(),
        footer: footerSchema.optional(),
      }),
    }),

    podcast: defineCollection({
      type: 'page',
      source: 'podcast.md',
      schema: z.object({
        hero: heroBaseSchema,
        newsletter: z.object({ cta: z.string() }).optional(),
        blogGrid: z.object({ labelBy: z.string(), labelLearnMore: z.string(), mediaType: z.string().optional() }).optional(),
        footer: footerSchema.optional(),
      }),
    }),

    privacy: defineCollection({
      type: 'page',
      source: 'privacy.md',
      schema: z.object({
        hero: heroBaseSchema,
        content: contentSchema.optional(),
        footer: footerSchema.optional(),
      }),
    }),

    roadmap: defineCollection({
      type: 'page',
      source: 'roadmap.md',
      schema: z.object({
        hero: heroBaseSchema,
        roadmap: z.object({ milestones: z.string(), firstLayer: z.string(), secondLayer: z.string(), thirdLayer: z.string() }).optional(),
        newsletter: z.object({ cta: z.string() }).optional(),
        footer: footerSchema.optional(),
      }),
    }),

    staking: defineCollection({
      type: 'page',
      source: 'staking.md',
      schema: z.object({
        meta: metaSchema.optional(),
        hero: heroBaseSchema,
        quote: z.object({ text: z.string(), author: z.string().optional() }).optional(),
        simpleHeadline: simpleHeadlineSchema.optional(),
        stakingCalculator: z.object({ headline: z.string().optional(), amountLabel: z.string().optional(), periodLabel: z.string().optional(), rewardsLabel: z.string().optional() }).optional(),
        activeAndDecentralHeadline: simpleHeadlineSchema.optional(),
        stakingDistribution: z.object({ headline: z.string().optional() }).optional(),
        soEasyEveryoneCanHeadline: simpleHeadlineSchema.optional(),
        video: z.object({ embedUrl: z.string(), poster: z.string().optional(), title: z.string().optional() }).optional(),
        letOthersDoTheWoHeadline: simpleHeadlineSchema.optional(),
        banner: z.object({ overlapsNextSection: z.boolean().optional(), items: z.array(bannerItemSchema) }).optional(),
        stakingFaq: z.object({ items: z.array(z.object({ question: z.string(), answer: z.string() })) }).optional(),
        stakeInTheNimiqWHeadline: simpleHeadlineSchema.optional(),
        footer: footerSchema.optional(),
      }),
    }),

    terms: defineCollection({
      type: 'page',
      source: 'terms.md',
      schema: z.object({
        hero: heroBaseSchema,
        content: contentSchema.extend({ centerHeading: z.boolean().optional() }),
        footer: footerSchema.optional(),
      }),
    }),

    activationTerms: defineCollection({
      type: 'page',
      source: 'activation-terms.md',
      schema: z.object({
        hero: heroBaseSchema,
        content: contentSchema.extend({ centerHeading: z.boolean().optional() }),
        footer: footerSchema.optional(),
      }),
    }),

    communityFunding: defineCollection({
      type: 'page',
      source: 'community-funding.md',
      schema: z.object({
        hero: heroBaseSchema,
        heroStats: z.object({ items: z.array(z.object({ label: z.string(), value: z.string() })) }).optional(),
        steppedSlides: steppedSlidesSchema.optional(),
        simpleHeadline: simpleHeadlineSchema.optional(),
        cards: z.object({ items: z.array(z.object({ headline: z.string(), description: z.string().optional(), icon: z.string().optional() })) }).optional(),
        noNimiqAccountYetHeadline: simpleHeadlineSchema.optional(),
        footer: footerSchema.optional(),
      }),
    }),

    november: defineCollection({
      type: 'page',
      source: 'november.md',
      schema: z.object({
        meta: metaSchema.optional(),
        hero: heroBaseSchema.extend({ subheadline: z.string().optional(), organizations: z.array(organizationSchema).optional() }),
        pillLink: pillLinkSchema.optional(),
        simpleHeadline: simpleHeadlineSchema.optional(),
        apps: z.object({ apps: z.array(appItemSchema) }).optional(),
        banner: z.object({ overlapsNextSection: z.boolean().optional().default(false), items: z.array(bannerItemSchema) }).optional(),
        pillLink2: pillLinkSchema.optional(),
        anInstantZeroFeeHeadline: simpleHeadlineSchema.optional(),
        grid: gridSchema.optional(),
        footer: footerSchema.optional(),
      }),
    }),

    // ========================================================================
    // BLOG COLLECTION
    // ========================================================================

    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({ title: z.string(), description: z.string(), slug: z.string(), publishedAt: z.string(), updatedAt: z.string().optional(), authors: z.array(z.string()), image: z.string().optional() }),
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
