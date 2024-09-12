import type { NimiqAppDocument, NimiqAppDocumentData, SocialMediaDocument } from '~~/prismicio-types.js'

export type SocialMediaAttributes = SocialMediaDocument['data'] & { color: `#${string}`, icon: string }
export type AppsAttributes = NimiqAppDocument['data'] & { color: `#${string}` }

const appColor: Record<Exclude<NimiqAppDocumentData['type'], null>, string> = {
  'E-commerce': 'rgb(var(--nq-blue) / 1)',
  'Games': 'rgb(var(--nq-purple) / 1)',
  'Infrastructure': 'rgb(var(--nq-red) / 1)',
  'Insights': 'rgb(var(--nq-green) / 1)',
  'Miner': 'rgb(var(--nq-neutral) / 1)',
  'Wallets': 'rgb(var(--nq-orange) / 1)',
  'Bots': 'rgb(var(--nq-gold) / 1)',
  'Faucet': '#FA7268', // pink
  'Promotion': '#795548', // brown
}

type SocialMediaName = Exclude<SocialMediaAttributes['platform'], null>

export const SocialMedia: Record<SocialMediaName, SocialMediaName> = { x: 'x', telegram: 'telegram', discord: 'discord', facebook: 'facebook', github: 'github', instagram: 'instagram', nimiqForum: 'nimiqForum', reddit: 'reddit', youtube: 'youtube' }

// @unocss-include
const socialMediaConfigs: Record<SocialMediaName, Pick<SocialMediaAttributes, 'color' | 'icon'>> = {
  x: { color: '#000', icon: 'i-nimiq:logos-twitter-mono' },
  telegram: { color: '#0088cc', icon: 'i-nimiq:logos-telegram-mono scale-97' },
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

  const { data: navigation } = useAsyncData('navigation', () => client.getSingle('navigation'))

  const { data: socialMediaPrismic } = useAsyncData('socialMedia', () => client.getByType('socialMedia'), { transform: data => data.results })

  const socialMedias = computed(() => {
    if (!socialMediaPrismic.value)
      return {} as Record<SocialMediaName, SocialMediaAttributes>

    return Object.fromEntries(
      Object.entries(socialMediaConfigs).map(([socialMedia, config]) => {
        const prismicData = socialMediaPrismic.value!.find(item => item.data.platform === socialMedia)?.data
        if (!prismicData) {
          throw new Error(`Platform data not found for ${socialMedia}`)
        }
        return [socialMedia, { ...prismicData, ...config }]
      }),
    ) as Record<SocialMediaName, SocialMediaAttributes>
  })

  const { data: nimiqAppsPrismic } = useAsyncData('apps', () => client.getByType('nimiq_app'), { transform: data => data.results })
  const nimiqApps = computed(() => {
    if (!nimiqAppsPrismic.value)
      return {} as Record<string, AppsAttributes>

    return Object.fromEntries(
      nimiqAppsPrismic.value.map((app) => {
        const data = app.data
        return [data.name, { ...data, color: data.type ? appColor[data.type] : '#000' }]
      }),
    ) as Record<string, AppsAttributes>
  })

  return {
    navigation,
    socialMedias,
    nimiqApps,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGlobalContent, import.meta.hot))
}
