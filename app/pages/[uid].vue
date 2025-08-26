<script setup lang="ts">
import { components } from '~/slices'

const params = useRoute().params as { uid: string }
const uid = params.uid

if (!uid)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

const route = useRoute()

const { data: page } = await usePrismicPage(uid)

if (page.value?.uid !== uid) {
  console.error(`Page with UID "${uid}" not found: ${JSON.stringify(page.value)}`)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
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

const darkHeader = computed(() => page.value?.data.darkHeader || uid === 'supersimpleswap')
const footerBgColor = computed(() => (page.value?.data.slices.at(-1)?.primary as { bgColor: 'white' | 'grey' | 'darkblue' })?.bgColor)

const draft = computed(() => page.value?.data && 'draft' in page.value.data && page.value?.data.draft)

// CMS takes precedence over slice data for better content management control
const slice = page.value.data.slices.at(0)
const { meta_title: cmsTitle, meta_description: cmsDescription, meta_image: cmsImage, meta_keywords: cmsKeywords } = page.value.data

// @ts-expect-error this is dangerous, but we control the data
const firstSliceTitle = slice ? getText(slice.primary?.title || slice.primary?.headline) : undefined
// @ts-expect-error this is dangerous, but we control the data
const firstSliceDescription = slice ? getText(slice.primary?.description || slice.primary?.subline) : undefined

const title = cmsTitle || firstSliceTitle || 'Nimiq'
const description = cmsDescription || firstSliceDescription || ''

// Site config ensures consistency across all SEO-related modules
const url = 'https://nimiq.com'
const canonicalUrl = `${url}${route.path}`

const keywords = cmsKeywords || 'Nimiq, cryptocurrency, blockchain, digital money, payments'

// Canonical URL still needs to be handled separately in current version
useHead({
  link: [
    { rel: 'canonical', href: canonicalUrl },
  ],
})

// Centralized SEO meta ensures all social platforms get consistent data
useSeoMeta({
  title,
  description,
  keywords,

  ogTitle: title,
  ogDescription: description,
  ogUrl: canonicalUrl,
  ogType: 'website',
  ogSiteName: 'Nimiq',
  ogLocale: 'en_US',

  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterSite: '@nimiq',
  twitterCreator: '@nimiq',

  // Robots handled globally in nuxt.config.ts for environment-specific control
  author: 'Nimiq Team',
  publisher: 'Nimiq',
})

// Custom images take precedence over generated ones for better brand control
if (hasImage(cmsImage)) {
  useSeoMeta({
    ogImage: cmsImage.url,
    ogImageAlt: title,
    ogImageWidth: cmsImage.dimensions?.width,
    ogImageHeight: cmsImage.dimensions?.height,
    twitterImage: cmsImage.url,
    twitterImageAlt: title,
  })
}

setOgImage({
  title,
  subline: description,
  image: cmsImage,
  type: 'page',
})
</script>

<template>
  <NuxtLayout :footer-bg-color :dark-header :draft>
    <SliceZone wrapper="main" :slices="page?.data.slices ?? []" :components />
  </NuxtLayout>
</template>
