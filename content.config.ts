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
const largeGridItemSchema = gridItemSchema.extend({ shape: z.string().optional(), linkHref: z.string().optional(), color: z.string().optional() })
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
const tokenDistributionItemSchema = z.object({ color: z.string(), title: z.string(), percentage: z.number(), description: z.string() })
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
        pill_link: pillLinkSchema.optional(),
        simple_headline: simpleHeadlineSchema.optional(),
        apps: z.object({ apps: z.array(appItemSchema) }).optional(),
        banner: z.object({ overlapsNextSection: z.boolean().optional().default(false), items: z.array(bannerItemSchema) }).optional(),
        pill_link_2: pillLinkSchema.optional(),
        an_instant_zero_fee__headline: simpleHeadlineSchema.optional(),
        grid: gridSchema.optional(),
        staking_headline: z.object({ headline: z.string(), subline: z.string().optional(), link: z.string().optional(), stakingNote: z.string().optional() }).optional(),
        footer: footerSchema.optional(),
      }),
    }),

    about: defineCollection({
      type: 'page',
      source: 'about.md',
      schema: z.object({
        hero: heroBaseSchema,
        tilted_media: tiltedMediaSchema.optional(),
        simple_headline: simpleHeadlineSchema.optional(),
        grid: gridSchema.optional(),
        nimiq_s_mission_headline: simpleHeadlineSchema.optional(),
        content: contentSchema.optional(),
        meet_the_people_behi_headline: simpleHeadlineSchema.optional(),
        large_grid: largeGridSchema.optional(),
        roadmap_headline: simpleHeadlineSchema.optional(),
        feedback_headline: simpleHeadlineSchema.optional(),
        footer: footerSchema.optional(),
      }),
    }),

    nimiqPay: defineCollection({
      type: 'page',
      source: 'nimiq-pay.md',
      schema: z.object({
        meta: metaSchema.optional(),
        hero: heroBaseSchema.extend({ playStore: z.string().optional(), appStore: z.string().optional(), items: z.array(highlightItemSchema).optional() }),
        tilted_media: tiltedMediaSchema.optional(),
        logos: logosGridSchema.optional(),
        simple_headline: simpleHeadlineSchema.optional(),
        grid: gridSchema.optional(),
        what_is_the_nimiq_pa_headline: simpleHeadlineSchema.optional(),
        text_cards: z.object({ items: z.array(richTextCardSchema) }).optional(),
        text_carousel: textCarouselSchema.optional(),
        one_app_to_pool_them_headline: simpleHeadlineSchema.optional(),
        text_carousel_2: textCarouselSchema.optional(),
        discover_a_whole_eco_headline: simpleHeadlineSchema.optional(),
        zigzag: z.object({ items: z.array(zigzagItemSchema) }).optional(),
        footer: footerSchema.optional(),
      }),
    }),

    wallet: defineCollection({
      type: 'page',
      source: 'wallet.md',
      schema: z.object({
        'hero': heroBaseSchema,
        'wallet_playground': z.object({ playgroundUrl: z.string() }).optional(),
        'consensus': z.object({ label: z.string().optional(), headline: z.string().optional(), subline: z.string().optional(), thisIsYou: z.string().optional(), connect: z.string().optional(), connecting: z.string().optional() }).optional(),
        'simple_headline': simpleHeadlineSchema.optional(),
        'currency_comparison': z.object({ currencies: z.string(), feeLabel: z.string().optional(), timeLabel: z.string().optional() }).optional(),
        'banner': z.object({ overlapsNextSection: z.boolean().optional(), icon: z.string().optional(), label: z.string().optional(), headline: z.string().optional(), subline: z.string().optional(), link: z.string().optional(), image: z.string().optional() }).optional(),
        '24_words_better_than_headline': simpleHeadlineSchema.optional(),
        'grid': gridSchema.optional(),
        'wallet_challenge': z.object({ headline: z.string(), subheadline: z.string().optional(), guessTheRemainingWordsLabel: z.string().optional(), youDoNotStandAChanceToTake: z.string().optional(), rewardamount: z.string().optional() }).optional(),
        'no_email_or_download_headline': simpleHeadlineSchema.optional(),
        'footer': footerSchema.optional(),
      }),
    }),

    buyAndSell: defineCollection({
      type: 'page',
      source: 'buy-and-sell.md',
      schema: z.object({
        hero: heroBaseSchema.extend({ nimPriceChartLabel: z.string().optional(), marketCapLabel: z.string().optional(), marketCapInfo: z.string().optional(), volume24HLabel: z.string().optional(), volume24HInfo: z.string().optional(), totalSupplyLabel: z.string().optional(), totalSupplyInfo: z.string().optional(), maxSupplyLabel: z.string().optional(), maxSupplyInfo: z.string().optional(), poweredByLogo: z.string().optional(), poweredByLink: z.string().optional(), poweredByLabel: z.string().optional() }),
        simple_headline: simpleHeadlineSchema.optional(),
        buy_nim_in_the_walle_headline: simpleHeadlineSchema.optional(),
        wallet_hover: walletHoverSchema.optional(),
        one_of_the_smallest__headline: simpleHeadlineSchema.optional(),
        token_distribution: z.object({ item: z.array(tokenDistributionItemSchema) }).optional(),
        buy_and_sell_banner: buyAndSellBannerSchema.optional(),
        no_download_no_perso_headline: simpleHeadlineSchema.optional(),
        footer: footerSchema.optional(),
      }),
    }),

    community: defineCollection({
      type: 'page',
      source: 'community.md',
      schema: z.object({
        hero: heroBaseSchema,
        new_york: newYorkGridSchema.optional(),
        simple_headline: simpleHeadlineSchema.optional(),
        flags: z.object({ flags: z.string() }).optional(),
        get_in_touch_headline: simpleHeadlineSchema.optional(),
        social_media: socialMediaGridSchema.optional(),
        newsletter: z.object({ cta: z.string(), placeholder: z.string().optional() }).optional(),
        nimiq_community_apps_headline: simpleHeadlineSchema.optional(),
        app_gallery: appGalleryCtaSchema.optional(),
        banner: z.object({ overlapsNextSection: z.boolean().optional(), items: z.array(bannerItemSchema) }).optional(),
        feedback_headline: simpleHeadlineSchema.optional(),
        footer: footerSchema.optional(),
      }),
    }),

    team: defineCollection({
      type: 'page',
      source: 'team.md',
      schema: z.object({
        hero: heroBaseSchema,
        team: z.object({ items: z.array(teamMemberSchema) }),
        simple_headline: simpleHeadlineSchema.optional(),
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
        tilted_media: tiltedMediaSchema.optional(),
        simple_headline: simpleHeadlineSchema.optional(),
        grid: gridSchema.optional(),
        what_is_cryptopaymen_headline: simpleHeadlineSchema.optional(),
        text_cards: z.object({ items: z.array(richTextCardSchema) }).optional(),
        stepped_slides: steppedSlidesSchema.optional(),
        footer: footerSchema.optional(),
      }),
    }),

    blogPage: defineCollection({
      type: 'page',
      source: 'blog.md',
      schema: z.object({
        hero: heroBaseSchema,
        blog_grid: z.object({ labelBy: z.string(), labelLearnMore: z.string(), mediaType: z.string().optional() }).optional(),
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
        simple_headline: simpleHeadlineSchema.optional(),
      }),
    }),

    albatross: defineCollection({
      type: 'page',
      source: 'albatross.md',
      schema: z.object({
        hero: heroBaseSchema,
        albatross_details: z.object({ items: z.array(z.object({ headline: z.string(), description: z.string().optional() })) }).optional(),
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
        social_media: socialMediaGridSchema.optional(),
        simple_headline: simpleHeadlineSchema.optional(),
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
        hero_2: heroBaseSchema.optional(),
        simple_headline: simpleHeadlineSchema.optional(),
        large_grid: largeGridSchema.optional(),
        how_does_it_work_headline: simpleHeadlineSchema.optional(),
        youtube: z.object({ embedUrl: z.string(), title: z.string().optional() }).optional(),
        oasis_is_an_open_tec_headline: simpleHeadlineSchema.optional(),
        collaborate_with_nim_headline: simpleHeadlineSchema.optional(),
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
        blog_grid: z.object({ labelBy: z.string(), labelLearnMore: z.string(), mediaType: z.string().optional() }).optional(),
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
        roadmap: z.object({ items: z.array(z.object({ title: z.string(), description: z.string().optional(), status: z.string().optional(), items: z.array(z.object({ title: z.string(), status: z.string().optional() })).optional() })) }).optional(),
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
        simple_headline: simpleHeadlineSchema.optional(),
        staking_calculator: z.object({ headline: z.string().optional(), amountLabel: z.string().optional(), periodLabel: z.string().optional(), rewardsLabel: z.string().optional() }).optional(),
        active_and_decentral_headline: simpleHeadlineSchema.optional(),
        staking_distribution: z.object({ headline: z.string().optional() }).optional(),
        so_easy_everyone_can_headline: simpleHeadlineSchema.optional(),
        video: z.object({ embedUrl: z.string(), poster: z.string().optional(), title: z.string().optional() }).optional(),
        let_others_do_the_wo_headline: simpleHeadlineSchema.optional(),
        banner: z.object({ overlapsNextSection: z.boolean().optional(), items: z.array(bannerItemSchema) }).optional(),
        staking_faq: z.object({ items: z.array(z.object({ question: z.string(), answer: z.string() })) }).optional(),
        stake_in_the_nimiq_w_headline: simpleHeadlineSchema.optional(),
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
        hero_stats: z.object({ items: z.array(z.object({ label: z.string(), value: z.string() })) }).optional(),
        stepped_slides: steppedSlidesSchema.optional(),
        simple_headline: simpleHeadlineSchema.optional(),
        cards: z.object({ items: z.array(z.object({ headline: z.string(), description: z.string().optional(), icon: z.string().optional() })) }).optional(),
        no_nimiq_account_yet_headline: simpleHeadlineSchema.optional(),
        footer: footerSchema.optional(),
      }),
    }),

    november: defineCollection({
      type: 'page',
      source: 'november.md',
      schema: z.object({
        meta: metaSchema.optional(),
        hero: heroBaseSchema.extend({ subheadline: z.string().optional(), organizations: z.array(organizationSchema).optional() }),
        pill_link: pillLinkSchema.optional(),
        simple_headline: simpleHeadlineSchema.optional(),
        apps: z.object({ apps: z.array(appItemSchema) }).optional(),
        banner: z.object({ overlapsNextSection: z.boolean().optional().default(false), items: z.array(bannerItemSchema) }).optional(),
        pill_link_2: pillLinkSchema.optional(),
        an_instant_zero_fee__headline: simpleHeadlineSchema.optional(),
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
        navigation: z.array(z.object({ label: z.string(), links: z.array(linkSchema) })),
        socials: z.array(z.object({ id: z.string(), label: z.string(), link: z.string(), icon: z.string(), color: z.string() })),
      }),
    }),
  },
})
