import type { NavigationDocumentData } from '~~/prismicio-types'

export function useNavigation() {
  async function fetchNavigation() {
    const { client } = usePrismic()

    const navigation = await client.getSingle('navigation').then(doc => doc.data)
    if (!navigation)
      throw new Error('Navigation data not found')

    // TODO Deprecate this in favour of link with text
    const { hotCtaLink, hotCtaText } = getHotCta(navigation)

    function getHotCta(navigation: NavigationDocumentData) {
      if (!navigation.hottext || !navigation.hotsince || !navigation.hotuntil)
        return { hotCtaLink: undefined, hotCtaText: undefined }
      const currentDate = new Date()
      if (new Date(navigation.hotsince) > currentDate || new Date(navigation.hotuntil) < currentDate)
        return { hotCtaLink: undefined, hotCtaText: undefined }
      return {
        hotCtaLink: getLink(navigation.hothref),
        hotCtaText: navigation.hottext,
      }
    }
    const blocks = [
      {
        areaName: 'project',
        label: navigation.projectGroupName,
        links: [...navigation.projectLinks, ...navigation.projectAdditionalFooterLinks],
      },
      {
        areaName: 'tech',
        label: navigation.techGroupName,
        links: [...navigation.techLinks, ...navigation.techAdditionalFooterLinks],
      },
      {
        areaName: 'apps',
        label: navigation.appsGroupName,
        links: [...navigation.appsLinks, ...navigation.appsAdditionalFooterLinks],
      },
      {
        areaName: 'get-started',
        label: navigation.getStartedGroupName,
        links: [...navigation.getStartedLinks, ...navigation.getStartedAdditionalFooterLinks],
      },
      {
        areaName: 'community',
        label: navigation.communityGroupName,
        links: [...navigation.communityLinks, ...navigation.communityAdditionalFooterLinks],
      },
      {
        areaName: 'and-more',
        label: navigation.andMoreGroupName,
        links: navigation.andMoreLinks,
      },
    ]

    return {
      ...navigation,
      blocks,
      copyrightNotice: `© Nimiq Foundation 2017-${new Date().getFullYear()}`,
      hotCtaLink,
      hotCtaText,

    }
  }

  return {
    fetchNavigation,
  }
}
