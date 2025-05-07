<script setup lang="ts">
import { components } from '~/slices'

const params = useRoute().params as { uid: string[] }
const pathParams = typeof params.uid === 'string' ? [] : params?.uid.filter(Boolean) || []
const isGrandchildPage = pathParams.length === 2
const uid = pathParams.at(-1) || 'home'
const isHome = uid === 'home'

const { showDrafts } = useRuntimeConfig().public

const { client } = usePrismic()
const { data: page } = await useAsyncData('$prismic-page', () => client.getByUID('page', uid)
  .catch((error) => {
    console.error(`Page with UID "${uid}" not found:`, error)
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
  }))

if (!page.value || (!showDrafts && page.value?.data.draft)) {
  console.error(`Page with UID "${uid}" not found`)
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
      if (to.path === '/supersimpleswap')
        await import('~/assets/css/bg-blue-sss.css')
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
const { meta_title: cmsTitle, meta_description: cmsDescription, meta_image: cmsImage } = page.value.data

// @ts-expect-error this is dangerous, but we control the data
const firstSliceTitle = slice ? getText(slice.primary?.title || slice.primary?.headline) : undefined
// @ts-expect-error this is dangerous, but we control the data
const firstSliceDescription = slice ? getText(slice.primary?.description || slice.primary?.subline) : undefined

const title = cmsTitle || firstSliceTitle || 'Nimiq'
const description = cmsDescription || firstSliceDescription || ''

useHead({ title, meta: description ? [{ name: 'description', content: description }] : [] })

if (hasImage(cmsImage))
  setOgImage({ title, subline: description, image: cmsImage })
else
  defineOgImageComponent('OgImagePage', { title, subline: description })
</script>

<template>
  <NuxtLayout :footer-bg-color :dark-header :draft :show-socials-hexagon-bg>
    <SliceZone wrapper="main" :slices="page?.data.slices ?? []" :components />
  </NuxtLayout>
</template>
