import type { SocialMediaDocument } from '~~/prismicio-types'

export type SocialMediaAttributes = SocialMediaDocument['data'] & {
  color: `#${string}`
  icon: string
  id: string
}

export type SocialMediaName = Exclude<SocialMediaAttributes['platform'], null>

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

export function useSocialMedias() {
  const { client } = usePrismic()

  return useAsyncData('$socialMedias', async () => {
    const socialMediasData = await client.getByType('socialMedia').then(doc => doc.results!)

    if (!socialMediasData?.length)
      throw new Error('Social media data not found')

    const socialMedias = Object.fromEntries(
      Object.entries(socialMediaConfigs).map(([socialMedia, config]) => {
        const prismicData = socialMediasData.find(item => item.data.platform === socialMedia)
        if (!prismicData) {
          throw new Error(`Platform data not found for ${socialMedia}`)
        }
        return [socialMedia, { ...prismicData.data, id: prismicData.id, ...config }]
      }),
    ) as Record<SocialMediaName, SocialMediaAttributes>
    return socialMedias
  }, {
    default() {
      return {} as Record<SocialMediaName, SocialMediaAttributes>
    },
  })
}
