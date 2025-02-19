import type {
  NimiqAppDocument,
  NimiqAppDocumentData,
  SocialMediaDocument,
} from '~~/prismicio-types.js'
import { useRuntimeConfig, useState } from '#imports'
import { useQuery } from '@pinia/colada'
import { defineStore } from 'pinia'
import { computed } from 'vue'

export type SocialMediaAttributes = SocialMediaDocument['data'] & {
  color: `#${string}`
  icon: string
  id: string
}
export type AppsAttributes = NimiqAppDocument['data'] & {
  color: `#${string}`
}

const appColor: Record<Exclude<NimiqAppDocumentData['type'], null>, string> = {
  'E-commerce': colors.blue,
  'Games': colors.purple,
  'Infrastructure': colors.red,
  'Insights': colors.green,
  'Miner': 'rgb(var(--nq-neutral) / 1)',
  'Wallets': colors.orange,
  'Bots': colors.gold,
  'Faucet': '#FA7268', // pink
  'Promotion': '#795548', // brown
}

export type SocialMediaName = Exclude<
  SocialMediaAttributes['platform'],
  null
>

export const SocialMedia: Record<SocialMediaName, SocialMediaName> = {
  x: 'x',
  telegram: 'telegram',
  discord: 'discord',
  facebook: 'facebook',
  github: 'github',
  instagram: 'instagram',
  nimiqForum: 'nimiqForum',
  reddit: 'reddit',
  youtube: 'youtube',
}

// @unocss-include
const socialMediaConfigs: Record<
  SocialMediaName,
  Pick<SocialMediaAttributes, 'color' | 'icon'>
> = {
  x: { color: '#000', icon: 'i-nimiq:logos-twitter-mono' },
  telegram: {
    color: '#0088cc',
    icon: 'i-nimiq:logos-telegram-mono scale-97',
  },
  reddit: { color: '#ff4500', icon: 'i-nimiq:logos-reddit-mono scale-105' },
  github: { color: '#333333', icon: 'i-nimiq:logos-github-mono' },
  youtube: { color: '#ff0000', icon: 'i-nimiq:logos-youtube-mono scale-85' },
  discord: { color: '#5865F2', icon: 'i-nimiq:logos-discord-mono scale-86' },
  nimiqForum: { color: '#E9B213', icon: 'i-nimiq:logos-nimiq-forum-mono' },
  facebook: { color: '#4267B2', icon: 'i-nimiq:logos-facebook-mono' },
  instagram: { color: '#c13584', icon: 'i-nimiq:logos-instagram-mono' },
}

export const useGlobalContent = defineStore('global-content', () => {
  const { client } = usePrismic()

  // Load navigation data with useQuery
  const { data: navigation } = useQuery({
    key: () => ['navigation'],
    query: async () => {
      const res = await client.getSingle('navigation')
      return res.data
    },
  })

  const currentDate = new Date()
  const showHotCta = computed(() =>
    navigation.value?.hottext
    && (navigation.value?.hotsince
      ? new Date(navigation.value.hotsince) <= currentDate
      : true)
    && (navigation.value?.hotuntil
      ? new Date(navigation.value.hotuntil) >= currentDate
      : true),
  )
  const hotCtaLink = computed(() => {
    if (!showHotCta.value)
      return
    if (
      navigation.value?.hothref?.link_type !== 'Document'
      && navigation.value?.hothref?.link_type !== 'Web'
    ) {
      return
    }
    if ((navigation.value?.hothref as { type: string }).type === 'blog_page')
      return `/blog/${(navigation.value?.hothref as { uid: string }).uid}`
    return (navigation.value.hothref as { url: string }).url
  })

  // Load social media data with useQuery
  const socialMediaQuery = useQuery({
    key: () => ['socialMedia'],
    query: async () => {
      const res = await client.getByType('socialMedia')
      return res.results
    },
  })
  const socialMedias = computed(() => {
    if (!socialMediaQuery.state.value.data)
      return {} as Record<SocialMediaName, SocialMediaAttributes>
    return Object.fromEntries(
      Object.entries(socialMediaConfigs).map(([socialMedia, config]) => {
        const prismicData = socialMediaQuery.state.value.data!.find(
          (item: any) => item.data.platform === socialMedia,
        )
        if (!prismicData) {
          throw new Error(`Platform data not found for ${socialMedia}`)
        }
        return [
          socialMedia,
          { ...prismicData.data, id: prismicData.id, ...config },
        ]
      }),
    ) as Record<SocialMediaName, SocialMediaAttributes>
  })

  function getSocialMediaById(id: string) {
    return Object.values(socialMedias.value).find(
      socialMedia => socialMedia.id === id,
    )
  }

  // Load apps data with useQuery
  const { data: apps } = useQuery({
    key: () => ['apps'],
    query: async () => {
      const res = await client.getByType('nimiq_app')
      return res.results
    },
  })
  const nimiqApps = computed(() => {
    if (!apps.value)
      return {} as Record<string, AppsAttributes>
    return Object.fromEntries(
      apps.value.map((app) => {
        const data = app.data
        return [
          data.name,
          { ...data, color: data.type ? appColor[app.data.type] : '#000' },
        ]
      }),
    ) as Record<string, AppsAttributes>
  })

  function getRandomApps(n: number) {
    // Using Nuxt's useState is fine here.
    const randomApps = useState('random_apps', () => {
      const apps = Object.values(nimiqApps.value || []).filter(({ logo }) =>
        hasImage(logo),
      )
      return apps.sort(() => Math.random() - 0.5).slice(0, Math.min(n, apps.length))
    })
    return randomApps
  }

  const { supabase } = useRuntimeConfig().public
  const getSupabaseEndpoint = (fn: string) =>
    `${supabase.url}/rest/v1/rpc/${fn}?apikey=${supabase.key}`

  // Load cryptoMap stats with useQuery
  const { data: cryptoMapStats } = useQuery({
    key: () => ['get_stats'],
    query: () => $fetch<{ locations: number }>(getSupabaseEndpoint('get_stats')),
  })
  const cryptoMapLocationsCount = computed(() => cryptoMapStats.value?.locations || 30335)
  const { data: cryptoMapContinentsStats } = useQuery({
    key: () => ['get_stats_for_all_continents'],
    query: () => $fetch<{ locations: number }>(getSupabaseEndpoint('get_stats_for_all_continents')),
  })

  return {
    navigation,
    navigationBlocks: computed(() =>
      navigation.value
        ? [
            {
              areaName: 'project',
              label: navigation.value.projectGroupName,
              links: [
                ...navigation.value.projectLinks,
                ...navigation.value.projectAdditionalFooterLinks,
              ],
            },
            {
              areaName: 'tech',
              label: navigation.value.techGroupName,
              links: [
                ...navigation.value.techLinks,
                ...navigation.value.techAdditionalFooterLinks,
              ],
            },
            {
              areaName: 'apps',
              label: navigation.value.appsGroupName,
              links: [
                ...navigation.value.appsLinks,
                ...navigation.value.appsAdditionalFooterLinks,
              ],
            },
            {
              areaName: 'get-started',
              label: navigation.value.getStartedGroupName,
              links: [
                ...navigation.value.getStartedLinks,
                ...navigation.value.getStartedAdditionalFooterLinks,
              ],
            },
            {
              areaName: 'community',
              label: navigation.value.communityGroupName,
              links: [
                ...navigation.value.communityLinks,
                ...navigation.value.communityAdditionalFooterLinks,
              ],
            },
            {
              areaName: 'and-more',
              label: navigation.value.andMoreGroupName,
              links: navigation.value.andMoreLinks,
            },
          ]
        : [],
    ),
    copyrightNotice: `© Nimiq Foundation 2017-${new Date().getFullYear()}`,
    hotCtaLink,
    socialMedias,
    nimiqApps,
    getSocialMediaById,
    cryptoMapLocationsCount,
    cryptoMapContinentsStats,
    getRandomApps,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGlobalContent, import.meta.hot))
}
