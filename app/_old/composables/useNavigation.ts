interface NavLink {
  text: string
  href: string
}

interface NavigationData {
  projectGroupName?: string
  projectLinks?: NavLink[]
  techGroupName?: string
  techLinks?: NavLink[]
  appsGroupName?: string
  appsLinks?: NavLink[]
  getStartedGroupName?: string
  getStartedLinks?: NavLink[]
  communityGroupName?: string
  communityLinks?: NavLink[]
  andMoreGroupName?: string
  andMoreLinks?: NavLink[]
  newsletterCta?: string
  newsletterPlaceholder?: string
  socialMediaCta?: string
  nimiqShortDescription?: string
  hottext?: string
  hotsince?: string
  hotuntil?: string
  hothref?: string
}

export function useNavigation() {
  return useAsyncData('$navigation', async () => {
    const navigation = await queryCollection('navigation').first() as NavigationData | null
    if (!navigation)
      throw new Error('Navigation data not found')

    const { hotCtaLink, hotCtaText } = getHotCta(navigation)
    const blocks = getNavigationBlocks(navigation)

    return {
      ...navigation,
      blocks,
      copyrightNotice: `© Nimiq Foundation 2017-${new Date().getFullYear()}`,
      hotCtaLink,
      hotCtaText,
    }
  })
}

function getHotCta(navigation: NavigationData) {
  if (!navigation.hottext || !navigation.hotsince || !navigation.hotuntil)
    return { hotCtaLink: undefined, hotCtaText: undefined }
  const currentDate = new Date()
  if (new Date(navigation.hotsince) > currentDate || new Date(navigation.hotuntil) < currentDate)
    return { hotCtaLink: undefined, hotCtaText: undefined }
  return {
    hotCtaLink: navigation.hothref,
    hotCtaText: navigation.hottext,
  }
}

function getNavigationBlocks(navigation: NavigationData) {
  return [
    {
      areaName: 'project',
      label: navigation.projectGroupName,
      links: navigation.projectLinks || [],
    },
    {
      areaName: 'tech',
      label: navigation.techGroupName,
      links: navigation.techLinks || [],
    },
    {
      areaName: 'apps',
      label: navigation.appsGroupName,
      links: navigation.appsLinks || [],
    },
    {
      areaName: 'get-started',
      label: navigation.getStartedGroupName,
      links: navigation.getStartedLinks || [],
    },
    {
      areaName: 'community',
      label: navigation.communityGroupName,
      links: navigation.communityLinks || [],
    },
    {
      areaName: 'and-more',
      label: navigation.andMoreGroupName,
      links: navigation.andMoreLinks || [],
    },
  ] as const
}
