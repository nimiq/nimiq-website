import { defineCollection, defineCollectionSource, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

interface AppApiData { name: string, type: string, logo: string, link: string, description?: string, developer?: string, screenshot?: string }

const communityAppsSource = defineCollectionSource({
  getKeys: async () => ['apps.json'],
  getItem: async () => {
    const res = await fetch('https://raw.githubusercontent.com/nimiq/awesome/main/src/data/dist/nimiq-apps.json')
    const data = await res.json() as AppApiData[]
    const communityApps = data.filter(app => app.logo && !['Wallets'].includes(app.type)).slice(0, 6)
    return { apps: communityApps }
  },
})

const allAppsSource = defineCollectionSource({
  getKeys: async () => ['all-apps.json'],
  getItem: async () => {
    const res = await fetch('https://raw.githubusercontent.com/nimiq/awesome/main/src/data/dist/nimiq-apps.json')
    const data = await res.json() as AppApiData[]
    return { apps: data.filter(app => app.logo || app.screenshot) }
  },
})

const linkSchema = z.object({ text: z.string().describe('Link text'), href: z.string().describe('Link URL') })
const seoSchema = z.object({ title: z.string().describe('SEO title').optional(), description: z.string().describe('SEO description').optional() })
const heroLinkSchema = z.object({ href: z.string().describe('Link URL'), label: z.string().describe('Link label').optional() })

// Hero schema
const heroSchema = z.object({ title: z.string().describe('Hero title'), description: z.string().describe('Hero description').optional(), link: heroLinkSchema.describe('Hero link').optional() })
const organizationSchema = z.object({ logo: z.string().describe('Organization logo'), url: z.string().describe('Organization URL') })
const highlightSchema = z.object({ highlight: z.string().describe('Highlight text') })

// Grid & card schemas
const gridItemSchema = z.object({ headline: z.string().describe('Item headline'), subline: z.string().describe('Item subline').optional(), image: z.string().describe('Item image').optional(), icon: z.string().describe('Item icon').optional(), color: z.string().describe('Item color').optional(), link: z.string().describe('Item link').optional() })
const gridSchema = z.object({ items: z.array(gridItemSchema).describe('Grid items') })
const techGridSchema = z.object({ headline: z.string().describe('Grid headline'), subline: z.string().describe('Grid subline').optional(), items: z.array(gridItemSchema).describe('Grid items') })
const largeGridItemSchema = gridItemSchema.extend({ shape: z.string().describe('Card shape').optional() })

// Headline schema with actions
const actionSchema = z.object({ href: z.string().describe('Action URL'), label: z.string().describe('Action label').optional(), icon: z.string().describe('Action icon').optional(), variant: z.string().describe('Button variant').optional(), color: z.string().describe('Button color').optional() })
// buttons is legacy from Studio content - supports both buttons and actions
const headlineSchema = z.object({ headline: z.string().describe('Headline text'), subline: z.string().describe('Subline text').optional(), label: z.string().describe('Section label').optional(), icon: z.string().describe('Section icon').optional(), actions: z.array(actionSchema).describe('Action buttons').optional(), buttons: z.array(actionSchema).describe('Legacy buttons').optional() })

// Media schemas
const mediaSchema = z.object({ src: z.string().describe('Media source'), poster: z.string().describe('Video poster').optional(), alt: z.string().describe('Alt text').optional(), title: z.string().describe('Media title').optional() })

// Content schemas
const contentSchema = z.object({ richText: z.string().describe('Rich text content'), centerHeading: z.boolean().describe('Center heading').optional() })
const cardSchema = z.object({ content: z.string().describe('Card content') })

// Banner & pill schemas
const bannerItemSchema = z.object({ headline: z.string().describe('Banner headline'), subline: z.string().describe('Banner subline').optional(), label: z.string().describe('Banner label').optional(), link: z.string().describe('Banner link').optional(), buttonLabel: z.string().describe('Button label').optional(), features: z.array(z.object({ icon: z.string().describe('Feature icon'), description: z.string().describe('Feature description') })).describe('Banner features').optional() })
const pillLinkSchema = z.object({ item: z.string().describe('Pill item'), label: z.string().describe('Pill label').optional(), icon: z.string().describe('Pill icon') })

// App schemas
const appItemSchema = z.object({ highlight: z.boolean().describe('Featured app').optional().default(false), title: z.string().describe('App title'), description: z.string().describe('App description'), preview: z.string().describe('Preview image'), item: z.string().describe('App identifier'), link: z.string().describe('App link') })

// Text carousel schemas
const textCarouselItemSchema = z.object({ slide: z.string().describe('Slide title').optional(), key: z.string().describe('Slide key').optional(), buttonLogo: z.string().describe('Button logo').optional(), content: z.string().describe('Slide content').optional(), comingSoon: z.boolean().describe('Coming soon flag').optional(), comingSoonLabel: z.string().describe('Coming soon label').optional() })
const textCarouselSchema = z.object({ content: z.string().describe('Carousel content').optional(), items: z.array(textCarouselItemSchema).describe('Carousel slides') })

// Other section schemas
const logosGridSchema = z.object({ label: z.string().describe('Grid label').optional(), items: z.array(z.object({ logo: z.string().describe('Logo image'), link: z.string().describe('Logo link'), alt: z.string().describe('Logo alt text').optional() })).describe('Logo items') })
const zigzagItemSchema = z.object({ headline: z.string().describe('Section headline'), description: z.string().describe('Section description').optional(), image: z.string().describe('Section image').optional(), label: z.string().describe('Section label').optional(), buttonLabel: z.string().describe('Button label').optional(), buttonHref: z.string().describe('Button URL').optional(), secondaryButtonLabel: z.string().describe('Secondary label').optional(), secondaryButtonLabelMobile: z.string().describe('Mobile label').optional(), secondaryButtonHref: z.string().describe('Secondary URL').optional() })
const steppedSlidesSchema = z.object({ headline: z.string().describe('Section headline'), description: z.string().describe('Section description').optional(), items: z.array(z.object({ image: z.string().describe('Step image'), label: z.string().describe('Step label'), description: z.string().describe('Step description') })).describe('Step items') })

// Team schema
const teamMemberSchema = z.object({ picture: z.string().describe('Profile picture').optional(), fullName: z.string().describe('Full name'), role: z.string().describe('Job role'), description: z.string().describe('Member bio'), github: z.string().describe('GitHub username').optional(), linkedin: z.string().describe('LinkedIn profile').optional(), twitter: z.string().describe('Twitter handle').optional() })

// Community schemas
const statItemSchema = z.object({ label: z.string().describe('Stat label'), stat: z.string().describe('Stat value') })
const blockItemSchema = z.object({ image: z.string().describe('Block image'), stats: z.array(statItemSchema).describe('Block stats') })
const newYorkGridSchema = z.object({ blocks: z.array(blockItemSchema).describe('Grid blocks') })
const socialMediaItemSchema = z.object({ category: z.string().describe('Social category'), socialMedia: z.string().describe('Platform name'), socialMediaItem: z.string().describe('Social item ID').optional() })
const socialMediaGridSchema = z.object({ newsAndAnnouncementsLabel: z.string().describe('News label').optional(), discussionsAndSupportLabel: z.string().describe('Discussions label').optional(), cultureAndInsightsLabel: z.string().describe('Culture label').optional(), showLabels: z.boolean().describe('Show labels').optional(), items: z.array(socialMediaItemSchema).describe('Social items') })
const appGalleryCtaSchema = z.object({ title: z.string().describe('Gallery title'), description: z.string().describe('Gallery description'), categoriesLabel: z.string().describe('Categories label').optional(), categoriesDescription: z.string().describe('Categories description').optional(), cta: z.string().describe('CTA text') })

// Buy-and-sell schemas
const walletHoverSchema = z.object({ title: z.string().describe('Wallet title'), description: z.string().describe('Wallet description'), screenshot: z.string().describe('Wallet screenshot'), link: z.string().describe('Wallet link'), poweredByLabel: z.string().describe('Powered by label').optional(), poweredByLogos: z.array(z.object({ logo: z.string().describe('Partner logo') })).describe('Partner logos').optional() })
const tokenDistributionItemSchema = z.object({ title: z.string().describe('Distribution title'), percentage: z.number().describe('Token percentage'), description: z.string().describe('Distribution detail') })
const buyAndSellBannerSchema = z.object({ overlapsNextSection: z.boolean().describe('Overlaps next section').optional(), headline: z.string().describe('Banner headline'), ctaLabel: z.string().describe('CTA label').optional(), cta: z.string().describe('CTA link'), features: z.array(z.object({ icon: z.string().describe('Feature icon'), description: z.string().describe('Feature description') })).describe('Banner features').optional() })

// Contact schema
const contactSchema = z.object({ headline: z.string().describe('Form headline').optional(), subline: z.string().describe('Form subline').optional(), nameLabel: z.string().describe('Name field label').optional(), emailLabel: z.string().describe('Email field label').optional(), messageLabel: z.string().describe('Message field label').optional(), submitLabel: z.string().describe('Submit button label').optional() })

export default defineContentConfig({
  collections: {
    home: defineCollection({
      type: 'page',
      source: 'index.md',
      schema: z.object({
        seo: seoSchema.describe('SEO metadata').optional(),
        hero: heroSchema.extend({ organizations: z.array(organizationSchema).describe('Partner organizations').optional() }).describe('Hero section'),
        appsLink: pillLinkSchema.describe('Apps pill link'),
        apps: z.object({ headline: headlineSchema.describe('Apps headline'), items: z.array(appItemSchema).describe('App items') }).describe('Apps section'),
        banner: z.object({ overlapsNextSection: z.boolean().describe('Overlaps next section').optional().default(false), items: z.array(bannerItemSchema).describe('Banner items') }).describe('Banner section'),
        techLink: pillLinkSchema.describe('Tech pill link'),
        techGrid: techGridSchema.describe('Tech grid section'),
        staking: headlineSchema.extend({ stakingNote: z.string().describe('Staking note').optional() }).describe('Staking section'),
        community: headlineSchema.describe('Community section'),
      }),
    }),

    about: defineCollection({
      type: 'page',
      source: 'about.md',
      schema: z.object({
        seo: seoSchema.describe('SEO metadata').optional(),
        hero: heroSchema.describe('Hero section'),
        media: mediaSchema.describe('Media section'),
        dive: z.object({ headline: headlineSchema.describe('Dive headline'), items: z.array(gridItemSchema).describe('Dive items') }).describe('Deep dive section'),
        mission: z.object({ headline: z.string().describe('Mission headline'), content: z.string().describe('Mission content') }).describe('Mission section'),
        team: z.object({ headline: headlineSchema.describe('Team headline'), items: z.array(largeGridItemSchema).describe('Team items') }).describe('Team section'),
        roadmap: headlineSchema.describe('Roadmap section'),
        feedback: headlineSchema.describe('Feedback section'),
      }),
    }),

    nimiqPay: defineCollection({
      type: 'page',
      source: 'nimiq-pay.md',
      schema: z.object({
        seo: seoSchema.describe('SEO metadata').optional(),
        hero: heroSchema.extend({ playStore: z.string().describe('Play Store link').optional(), appStore: z.string().describe('App Store link').optional(), items: z.array(highlightSchema).describe('Hero highlights').optional() }).describe('Hero section'),
        media: mediaSchema.describe('Media section'),
        logos: logosGridSchema.describe('Logos grid'),
        intro: headlineSchema.describe('Intro section'),
        grid: gridSchema.describe('Feature grid'),
        about: z.object({ headline: headlineSchema.describe('About headline'), items: z.array(cardSchema).describe('About cards') }).describe('About section'),
        easyAsAlways: headlineSchema.describe('Easy as always section'),
        textCarousel: textCarouselSchema.describe('Text carousel'),
        pooling: z.object({ headline: headlineSchema.describe('Pooling headline'), carousel: textCarouselSchema.describe('Pooling carousel') }).describe('Pooling section'),
        discover: z.object({ headline: headlineSchema.describe('Discover headline'), items: z.array(zigzagItemSchema).describe('Discover items') }).describe('Discover section'),
        cta: headlineSchema.extend({ playStore: z.string().describe('Play Store link').optional(), appStore: z.string().describe('App Store link').optional() }).describe('CTA section'),
      }),
    }),

    wallet: defineCollection({
      type: 'page',
      source: 'wallet.md',
      schema: z.object({
        seo: seoSchema.describe('SEO metadata').optional(),
        hero: heroSchema.describe('Hero section'),
        playground: z.object({ url: z.string().describe('Playground URL') }).describe('Playground section'),
        consensus: z.object({ label: z.string().describe('Consensus label'), headline: z.string().describe('Consensus headline'), subline: z.string().describe('Consensus subline'), thisIsYou: z.string().describe('This is you text'), connect: z.string().describe('Connect label'), connecting: z.string().describe('Connecting label') }).describe('Consensus section'),
        intro: headlineSchema.describe('Intro section'),
        currencies: z.object({ items: z.array(z.object({ name: z.string().describe('Currency name'), crypto: z.string().describe('Crypto ticker'), mainFeature: z.string().describe('Main feature'), secondFeature: z.string().describe('Second feature'), thirdFeature: z.string().describe('Third feature'), fee: z.string().describe('Transaction fee'), time: z.string().describe('Transaction time'), adjective: z.string().describe('Currency adjective') })).describe('Currency items'), feeLabel: z.string().describe('Fee column label'), timeLabel: z.string().describe('Time column label') }).describe('Currencies section'),
        staking: headlineSchema.extend({ stakingNote: z.string().describe('Staking note').optional() }).describe('Staking section'),
        banner: z.object({ overlapsNextSection: z.boolean().describe('Overlaps next section').optional(), icon: z.string().describe('Banner icon'), label: z.string().describe('Banner label'), headline: z.string().describe('Banner headline'), subline: z.string().describe('Banner subline'), link: z.string().describe('Banner link'), image: z.string().describe('Banner image') }).describe('Banner section'),
        seed: z.object({ headline: headlineSchema.describe('Seed headline'), items: z.array(gridItemSchema).describe('Seed items') }).describe('Seed phrase section'),
        challenge: z.object({ headline: z.string().describe('Challenge headline'), subline: z.string().describe('Challenge subline'), guessLabel: z.string().describe('Guess label'), chanceLabel: z.string().describe('Chance label'), reward: z.string().describe('Reward text') }).describe('Challenge section'),
        noEmail: headlineSchema.describe('No email section'),
      }),
    }),

    buyAndSell: defineCollection({
      type: 'page',
      source: 'buy-and-sell.md',
      schema: z.object({
        seo: seoSchema.describe('SEO metadata').optional(),
        hero: heroSchema.extend({ nimPriceChartLabel: z.string().describe('Price chart label'), marketCapLabel: z.string().describe('Market cap label'), marketCapInfo: z.string().describe('Market cap info'), volume24HLabel: z.string().describe('24h volume label'), volume24HInfo: z.string().describe('24h volume info'), totalSupplyLabel: z.string().describe('Total supply label'), totalSupplyInfo: z.string().describe('Total supply info'), maxSupplyLabel: z.string().describe('Max supply label'), maxSupplyInfo: z.string().describe('Max supply info'), poweredByLogo: z.string().describe('Powered by logo'), poweredByLink: z.string().describe('Powered by link'), poweredByLabel: z.string().describe('Powered by label') }).describe('Hero section'),
        intro: headlineSchema.extend({ videoTutorial: z.object({ label: z.string().describe('Tutorial label'), videoUrl: z.string().describe('Tutorial video URL') }).describe('Video tutorial').optional() }).describe('Intro section'),
        wallet: z.object({ headline: headlineSchema.describe('Wallet headline'), videoTutorial: z.object({ label: z.string().describe('Tutorial label'), videoUrl: z.string().describe('Tutorial video URL') }).describe('Video tutorial').optional(), content: walletHoverSchema.describe('Wallet content') }).describe('Wallet section'),
        distribution: z.object({ headline: headlineSchema.describe('Distribution headline'), items: z.array(tokenDistributionItemSchema).describe('Distribution items') }).describe('Distribution section'),
        cta: buyAndSellBannerSchema.describe('CTA banner'),
        noDownload: headlineSchema.describe('No download section'),
      }),
    }),

    community: defineCollection({
      type: 'page',
      source: 'community.md',
      schema: z.object({
        seo: seoSchema.describe('SEO metadata').optional(),
        hero: heroSchema.describe('Hero section'),
        stats: newYorkGridSchema.describe('Stats grid'),
        countries: z.object({ headline: headlineSchema.describe('Countries headline'), flags: z.string().describe('Country flags') }).describe('Countries section'),
        social: z.object({ headline: headlineSchema.describe('Social headline'), grid: socialMediaGridSchema.describe('Social media grid') }).describe('Social section'),
        newsletter: z.object({ cta: z.string().describe('Newsletter CTA'), placeholder: z.string().describe('Input placeholder').optional() }).describe('Newsletter section'),
        events: headlineSchema.describe('Events section'),
        apps: z.object({ headline: headlineSchema.describe('Apps headline'), gallery: appGalleryCtaSchema.describe('App gallery') }).describe('Apps section'),
        banner: z.object({ overlapsNextSection: z.boolean().describe('Overlaps next section').optional(), items: z.array(bannerItemSchema).describe('Banner items') }).describe('Banner section'),
        feedback: headlineSchema.describe('Feedback section'),
      }),
    }),

    team: defineCollection({
      type: 'page',
      source: 'team.md',
      schema: z.object({
        seo: seoSchema.describe('SEO metadata').optional(),
        members: z.object({ items: z.array(teamMemberSchema).describe('Team members') }).describe('Members section'),
      }),
    }),

    litepaperPos: defineCollection({
      type: 'page',
      source: 'litepaper-pos.md',
      schema: z.object({ seo: seoSchema.describe('SEO metadata').optional(), headline: z.string().describe('Page headline'), subline: z.string().describe('Page subline'), versionNumber: z.string().describe('Version number'), date: z.string().describe('Publication date') }),
    }),

    litepaperPow: defineCollection({
      type: 'page',
      source: 'litepaper-pow.md',
      schema: z.object({ seo: seoSchema.describe('SEO metadata').optional(), headline: z.string().describe('Page headline'), subline: z.string().describe('Page subline'), versionNumber: z.string().describe('Version number'), date: z.string().describe('Publication date') }),
    }),

    cryptopaymentlink: defineCollection({
      type: 'page',
      source: 'cryptopaymentlink.md',
      schema: z.object({
        seo: seoSchema.describe('SEO metadata').optional(),
        hero: heroSchema.extend({ linkHref: z.string().describe('Hero link URL').optional(), linkLabel: z.string().describe('Hero link label').optional(), items: z.array(highlightSchema).describe('Hero highlights').optional() }).describe('Hero section'),
        tiltedMedia: z.object({ src: z.string().describe('Media source'), poster: z.string().describe('Video poster').optional() }).describe('Tilted media').optional(),
        simpleHeadline: headlineSchema.describe('Simple headline').optional(),
        grid: gridSchema.describe('Feature grid').optional(),
        learnItHeadline: headlineSchema.describe('Learn it headline').optional(),
        textCards: z.object({ items: z.array(cardSchema).describe('Text cards') }).describe('Text cards section').optional(),
        steppedSlides: steppedSlidesSchema.describe('Stepped slides').optional(),
        finalCta: headlineSchema.describe('Final CTA').optional(),
      }),
    }),

    blogPage: defineCollection({
      type: 'page',
      source: 'blog.md',
      schema: z.object({
        seo: seoSchema.describe('SEO metadata').optional(),
        hero: heroSchema.describe('Hero section'),
        grid: z.object({ labelBy: z.string().describe('By author label'), labelLearnMore: z.string().describe('Learn more label'), mediaType: z.string().describe('Media type filter').optional() }).describe('Blog grid'),
        newsletter: z.object({ cta: z.string().describe('Newsletter CTA') }).describe('Newsletter section'),
      }),
    }),

    appsPage: defineCollection({
      type: 'page',
      source: 'apps.md',
      schema: z.object({
        seo: seoSchema.describe('SEO metadata').optional(),
        hero: heroSchema.describe('Hero section'),
        nimiqApps: z.array(appItemSchema).describe('Nimiq apps').optional(),
        cta: headlineSchema.describe('CTA section'),
      }),
    }),

    albatross: defineCollection({
      type: 'page',
      source: 'albatross.md',
      schema: z.object({
        seo: seoSchema.describe('SEO metadata').optional(),
        hero: heroSchema.describe('Hero section'),
        details: z.object({ items: z.array(z.object({ headline: z.string().describe('Detail headline'), description: z.string().describe('Detail description').optional(), image: z.string().describe('Detail image').optional() })).describe('Detail items') }).describe('Details section'),
      }),
    }),

    bugBounty: defineCollection({
      type: 'page',
      source: 'bug-bounty.md',
      schema: z.object({
        seo: seoSchema.describe('SEO metadata').optional(),
        hero: heroSchema.describe('Hero section'),
      }),
    }),

    contact: defineCollection({
      type: 'page',
      source: 'contact.md',
      schema: z.object({
        seo: seoSchema.describe('SEO metadata').optional(),
        hero: heroSchema.describe('Hero section'),
        social: z.object({ gridHeadline: headlineSchema.describe('Grid headline').optional(), headline: headlineSchema.describe('Contact headline'), grid: socialMediaGridSchema.describe('Social media grid') }).describe('Social section'),
        form: contactSchema.describe('Contact form'),
      }),
    }),

    newsletterPage: defineCollection({
      type: 'page',
      source: 'newsletter.md',
      schema: z.object({
        seo: seoSchema.describe('SEO metadata').optional(),
        hero: heroSchema.describe('Hero section'),
        form: z.object({
          emailLabel: z.string().describe('Email field label'),
          permissionTitle: z.string().describe('Permission title'),
          permissionDescription: z.string().describe('Permission description'),
          permissionCheckbox: z.string().describe('Permission checkbox'),
          interestsTitle: z.string().describe('Interests title'),
          interestsDescription: z.string().describe('Interests description'),
          interests: z.array(z.string().describe('Interest option')).describe('Interest options'),
          productsTitle: z.string().describe('Products title'),
          products: z.array(z.string().describe('Product option')).describe('Product options'),
          submitButton: z.string().describe('Submit button label'),
        }).describe('Newsletter form'),
      }),
    }),

    onepager: defineCollection({
      type: 'page',
      source: 'onepager.md',
      schema: z.object({
        seo: seoSchema.describe('SEO metadata').optional(),
        hero: heroSchema.describe('Hero section'),
      }),
    }),

    podcast: defineCollection({
      type: 'page',
      source: 'podcast.md',
      schema: z.object({
        seo: seoSchema.describe('SEO metadata').optional(),
        hero: heroSchema.describe('Hero section'),
        newsletter: z.object({ cta: z.string().describe('Newsletter CTA') }).describe('Newsletter section'),
        grid: z.object({ labelBy: z.string().describe('By author label'), labelLearnMore: z.string().describe('Learn more label'), mediaType: z.string().describe('Media type filter').optional() }).describe('Podcast grid'),
      }),
    }),

    privacy: defineCollection({
      type: 'page',
      source: 'privacy.md',
      schema: z.object({
        seo: seoSchema.describe('SEO metadata').optional(),
        hero: heroSchema.describe('Hero section'),
        content: contentSchema.describe('Page content'),
      }),
    }),

    roadmap: defineCollection({
      type: 'page',
      source: 'roadmap.md',
      schema: z.object({
        seo: seoSchema.describe('SEO metadata').optional(),
        hero: heroSchema.describe('Hero section'),
        roadmap: z.object({ milestones: z.string().describe('Milestones label'), firstLayer: z.string().describe('First layer label'), secondLayer: z.string().describe('Second layer label'), thirdLayer: z.string().describe('Third layer label') }).describe('Roadmap section'),
        newsletter: z.object({ cta: z.string().describe('Newsletter CTA') }).describe('Newsletter section'),
      }),
    }),

    staking: defineCollection({
      type: 'page',
      source: 'staking.md',
      schema: z.object({
        seo: seoSchema.describe('SEO metadata').optional(),
        hero: heroSchema.describe('Hero section'),
        quote: z.object({ text: z.string().describe('Quote text'), author: z.string().describe('Quote author').optional(), learnMoreLink: z.string().describe('Learn more link').optional() }).describe('Quote section'),
        calculator: z.object({ headline: headlineSchema.describe('Calculator headline'), amountLabel: z.string().describe('Amount label'), periodLabel: z.string().describe('Period label'), rewardsLabel: z.string().describe('Rewards label') }).describe('Calculator section'),
        distribution: z.object({ headline: headlineSchema.describe('Distribution headline'), stakedHeadline: z.string().describe('Staked headline').optional(), stakedDescription: z.string().describe('Staked description').optional(), distributedHeadline: z.string().describe('Distributed headline').optional(), distributedDescription: z.string().describe('Distributed description').optional() }).describe('Distribution section'),
        video: z.object({ headline: headlineSchema.describe('Video headline'), embedUrl: z.string().describe('Video embed URL'), poster: z.string().describe('Video poster').optional(), posterMobile: z.string().describe('Mobile poster').optional(), title: z.string().describe('Video title').optional(), description: z.string().describe('Video description').optional() }).describe('Video section'),
        delegate: headlineSchema.describe('Delegate section'),
        banner: z.object({ overlapsNextSection: z.boolean().describe('Overlaps next section').optional(), items: z.array(bannerItemSchema).describe('Banner items') }).describe('Banner section'),
        faq: z.object({ headline: z.string().describe('FAQ headline').optional(), forumLink: z.object({ text: z.string().describe('Forum link text'), href: z.string().describe('Forum link URL') }).describe('Forum link').optional(), items: z.array(z.object({ question: z.string().describe('Question text'), answer: z.string().describe('Answer text') })).describe('FAQ items') }).describe('FAQ section'),
        newsletter: z.object({ cta: z.string().describe('Newsletter CTA') }).describe('Newsletter section').optional(),
        wallet: headlineSchema.extend({ stakingNote: z.string().describe('Staking note').optional() }).describe('Wallet section'),
      }),
    }),

    terms: defineCollection({
      type: 'page',
      source: 'terms.md',
      schema: z.object({
        seo: seoSchema.describe('SEO metadata').optional(),
        headline: z.string().describe('Page headline'),
      }),
    }),

    activationTerms: defineCollection({
      type: 'page',
      source: 'activation-terms.md',
      schema: z.object({
        seo: seoSchema.describe('SEO metadata').optional(),
        headline: z.string().describe('Page headline'),
      }),
    }),

    communityFunding: defineCollection({
      type: 'page',
      source: 'community-funding.md',
      schema: z.object({
        seo: seoSchema.describe('SEO metadata').optional(),
        hero: heroSchema.describe('Hero section'),
        stats: z.object({ items: z.array(z.object({ label: z.string().describe('Stat label'), value: z.string().describe('Stat value') })).describe('Stat items') }).describe('Stats section'),
        steps: steppedSlidesSchema.describe('Steps section'),
        intro: headlineSchema.describe('Intro section'),
        cards: z.object({ items: z.array(z.object({ headline: z.string().describe('Card headline'), description: z.string().describe('Card description').optional(), icon: z.string().describe('Card icon').optional() })).describe('Card items') }).describe('Cards section'),
        account: headlineSchema.describe('Account section'),
      }),
    }),

    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({ title: z.string().describe('Post title'), description: z.string().describe('Post description'), slug: z.string().describe('URL slug'), publishedAt: z.string().describe('Publish date'), updatedAt: z.string().describe('Update date').optional(), authors: z.array(z.string().describe('Author name')).describe('Post authors'), image: z.string().describe('Cover image').optional(), readingTime: z.number().describe('Reading time').optional() }),
    }),

    exchanges: defineCollection({
      type: 'data',
      source: 'collections/exchanges/*.yaml',
      schema: z.object({ name: z.string().describe('Exchange name'), slug: z.string().describe('URL slug'), logo: z.string().describe('Exchange logo'), link: z.string().describe('Exchange link') }),
    }),

    communityApps: defineCollection({
      type: 'data',
      source: communityAppsSource,
      schema: z.object({ apps: z.array(z.object({ name: z.string().describe('App name'), type: z.string().describe('App type'), logo: z.string().describe('App logo'), link: z.string().describe('App link') })).describe('Community apps') }),
    }),

    allApps: defineCollection({
      type: 'data',
      source: allAppsSource,
      schema: z.object({ apps: z.array(z.object({ name: z.string().describe('App name'), type: z.string().describe('App type'), logo: z.string().describe('App logo'), link: z.string().describe('App link'), description: z.string().describe('App description').optional(), developer: z.string().describe('App developer').optional(), screenshot: z.string().describe('App screenshot').optional() })).describe('All apps') }),
    }),

    site: defineCollection({
      type: 'data',
      source: 'collections/site.yaml',
      schema: z.object({
        announcement: z.object({ text: z.string().describe('Announcement text'), href: z.string().describe('Announcement link'), since: z.string().describe('Start date'), until: z.string().describe('End date') }).describe('Site announcement').optional(),
        footer: z.object({ newsletterCta: z.string().describe('Newsletter CTA'), newsletterPlaceholder: z.string().describe('Newsletter placeholder'), socialMediaCta: z.string().describe('Social media CTA'), description: z.string().describe('Footer description'), copyright: z.string().describe('Copyright text') }).describe('Footer content'),
        navigation: z.array(z.object({
          label: z.string().describe('Nav group label'),
          links: z.array(linkSchema.extend({ logo: z.string().describe('Link logo').optional(), image: z.string().describe('Link image').optional() })).describe('Nav links'),
          howTo: z.object({ title: z.string().describe('How-to title'), links: z.array(linkSchema).describe('How-to links') }).describe('How-to section').optional(),
        })).describe('Navigation items'),
        socials: z.array(z.object({ id: z.string().describe('Social ID'), label: z.string().describe('Social label'), link: z.string().describe('Social link'), icon: z.string().describe('Social icon'), color: z.string().describe('Social color') })).describe('Social links'),
      }),
    }),
  },
})
