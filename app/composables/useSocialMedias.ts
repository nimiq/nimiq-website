export type SocialMediaName = 'x' | 'telegram' | 'discord' | 'facebook' | 'github' | 'instagram' | 'nimiqForum' | 'reddit' | 'youtube'

export interface SocialMediaData {
  platform: SocialMediaName
  link: string
  label: string
  color: string
  icon: string
}

// @unocss-include
const socialMediaConfigs: Record<SocialMediaName, Pick<SocialMediaData, 'color' | 'icon'>> = {
  x: { color: 'oklch(0 0 0)', icon: 'i-nimiq:logos-twitter-mono' },
  telegram: { color: 'oklch(0.6 0.14119 241.5546)', icon: 'i-nimiq:logos-telegram-mono scale-97' },
  reddit: { color: 'oklch(0.66 0.229356 35.4025)', icon: 'i-nimiq:logos-reddit-mono scale-105' },
  github: { color: 'oklch(0.32 0 0)', icon: 'i-nimiq:logos-github-mono' },
  youtube: { color: 'oklch(0.63 0.2577 29.23)', icon: 'i-nimiq:logos-youtube-mono scale-85' },
  discord: { color: 'oklch(0.58 0.2091 273.85)', icon: 'i-nimiq:logos-discord-mono scale-86' },
  nimiqForum: { color: 'oklch(0.79 0.1593 85.61)', icon: 'i-nimiq:logos-nimiq-forum-mono' },
  facebook: { color: 'oklch(0.52 0.1259 262.97)', icon: 'i-nimiq:logos-facebook-mono' },
  instagram: { color: 'oklch(0.56 0.1907 350.4)', icon: 'i-nimiq:logos-instagram-mono' },
}

export function useSocialMedias() {
  return useAsyncData('$socialMedias', async () => {
    const data = await queryCollection('socialMedia').first()

    if (!data)
      throw new Error('Social media data not found')

    const socialMedias = Object.fromEntries(
      Object.entries(socialMediaConfigs).map(([platform, config]) => {
        const item = data[platform as SocialMediaName]
        if (!item)
          throw new Error(`Platform data not found for ${platform}`)

        return [platform, { ...item, ...config }]
      }),
    ) as Record<SocialMediaName, SocialMediaData>

    return socialMedias
  })
}
