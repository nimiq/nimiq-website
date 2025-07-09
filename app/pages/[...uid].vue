<script setup lang="ts">
import { components } from '~/slices'

const params = useRoute().params as { uid: string[] }
const pathParams = typeof params.uid === 'string' ? [] : params?.uid.filter(Boolean) || []
const isGrandchildPage = pathParams.length >= 2
const uid = pathParams.at(-1) || 'home'
const isHome = uid === 'home'

const { showDrafts } = useRuntimeConfig().public
const route = useRoute()
const { site } = useRuntimeConfig().public

const { client } = usePrismic()
const { data: page } = await useAsyncData(`prismic-page-${pathParams.join('-')}`, () => client.getByUID('page', uid)
  .catch((error) => {
    console.error(`Page with UID "${uid}" not found in Prismic:`, error)
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
  }))

if (!page.value) {
  console.error(`Page with UID "${uid}" not found`)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

if (!showDrafts && page.value?.data.draft) {
  console.error(`Page with UID "${uid}" is a draft and showDraft is set to \`${showDrafts}\``)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

if (page.value.uid !== uid) {
  console.error(`Page with UID "${uid}" not found: ${JSON.stringify(page.value)}`)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

// We check that the page.links is not empty if isGrandchildPage and that the links defined are the same as in the URL
if (isGrandchildPage) {
  const parentsLengthMatches = page.value?.data.parents.length === pathParams.length - 1
  const parentsSubpathMatches = page.value?.data.parents.every((parent, index) => (parent as { uid: string }).uid === pathParams[index])

  const notValid = !parentsLengthMatches || !parentsSubpathMatches
  if (notValid) {
    throw createError({ statusCode: 404, statusMessage: `The page with UID "${uid}" has incorrect parent structure`, fatal: true })
  }
}

definePageMeta({
  middleware: [
    async function (to) {
      // if (to.path === '/supersimpleswap')
      //   await import('~/assets/css/bg-blue-sss.css')
      if (to.path === '/onepager')
        await import('~/assets/css/onepager.css')
    },
  ],
})

const darkHeader = computed(() => page.value?.data.darkHeader || isHome || uid === 'supersimpleswap')
const footerBgColor = computed(() => (page.value?.data.slices.at(-1)?.primary as { bgColor: 'white' | 'grey' | 'darkblue' })?.bgColor)

const draft = computed(() => page.value?.data && 'draft' in page.value.data && page.value?.data.draft)

const showSocialsHexagonBg = isHome

// SEO Stuff - We load title and description from the `meta` field of the page otherwise we use the first slice title and description
const slice = page.value.data.slices.at(0)
const { meta_title: cmsTitle, meta_description: cmsDescription, meta_image: cmsImage, meta_keywords: cmsKeywords } = page.value.data

// @ts-expect-error this is dangerous, but we control the data
const firstSliceTitle = slice ? getText(slice.primary?.title || slice.primary?.headline) : undefined
// @ts-expect-error this is dangerous, but we control the data
const firstSliceDescription = slice ? getText(slice.primary?.description || slice.primary?.subline) : undefined

const title = cmsTitle || firstSliceTitle || 'Nimiq'
let description = cmsDescription || firstSliceDescription || ''

if (isHome) {
  const { cryptoMapLocationsCount: locationsCount } = useCryptoMapStats()
  description = description.replace(/\{\{\s*locations\s*\}\}/, locationsCount.value.toString())
}

// Build the canonical URL
const canonicalUrl = `${site?.url || 'https://nimiq.com'}${route.path}`

// Extract keywords from CMS or use defaults
const keywords = cmsKeywords || 'Nimiq, cryptocurrency, blockchain, digital money, payments'

// Comprehensive SEO meta tags
useSeoMeta({
  title,
  description,
  keywords,

  // Open Graph tags
  ogTitle: title,
  ogDescription: description,
  ogUrl: canonicalUrl,
  ogType: 'website',
  ogSiteName: 'Nimiq',
  ogLocale: 'en_US',

  // Twitter tags
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterSite: '@nimiq',
  twitterCreator: '@nimiq',

  // Additional meta tags
  robots: draft.value ? 'noindex, nofollow' : 'index, follow',
  author: 'Nimiq Team',
  publisher: 'Nimiq',

  // Canonical URL
  canonical: canonicalUrl,
})

// Handle Open Graph images
if (hasImage(cmsImage)) {
  useSeoMeta({
    ogImage: cmsImage.url,
    ogImageAlt: title,
    ogImageWidth: cmsImage.dimensions?.width,
    ogImageHeight: cmsImage.dimensions?.height,
    twitterImage: cmsImage.url,
    twitterImageAlt: title,
  })
  setOgImage({ title, subline: description, image: cmsImage })
}
else if (isHome) {
  defineOgImageComponent('OgImageHome', { title, subline: description })
}
else {
  defineOgImageComponent('OgImagePage', { title, subline: description })
}
</script>

<template>
  <NuxtLayout :footer-bg-color :dark-header :draft :show-socials-hexagon-bg>
    <SliceZone wrapper="main" :slices="page?.data.slices ?? []" :components />
  </NuxtLayout>
</template>
