import type { SocialMediaDocument } from '~~/prismicio-types.js'

export type SocialMediaAttributes = SocialMediaDocument['data'] & { color: `#${string}`, icon: string }

type SocialMediaName = Exclude<SocialMediaAttributes['platform'], null>

export const SocialMedia: Record<SocialMediaName, SocialMediaName> = { x: 'x', telegram: 'telegram', discord: 'discord', facebook: 'facebook', github: 'github', instagram: 'instagram', nimiqForum: 'nimiqForum', reddit: 'reddit', youtube: 'youtube' }

// @unocss-include
const socialMediaConfigs: Record<SocialMediaName, Pick<SocialMediaAttributes, 'color' | 'icon'>> = {
  x: { color: '#1da1f2', icon: 'i-nimiq:logos-twitter-mono' },
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

  const { data: socialMediaPrismic } = useAsyncData('socialMedia', () => client.getByType('socialMedia'))

  const socialMedias = computed(() => {
    if (!socialMediaPrismic.value)
      return {} as Record<SocialMediaName, SocialMediaAttributes>

    return Object.fromEntries(
      Object.entries(socialMediaConfigs).map(([socialMedia, config]) => {
        const prismicData = socialMediaPrismic.value!.results.find(item => item.data.platform === socialMedia)?.data
        if (!prismicData) {
          throw new Error(`Platform data not found for ${socialMedia}`)
        }
        return [socialMedia, { ...prismicData, ...config }]
      }),
    ) as Record<SocialMediaName, SocialMediaAttributes>
  })

  return {
    navigation,
    socialMedias,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGlobalContent, import.meta.hot))
}
