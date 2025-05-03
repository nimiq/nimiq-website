<script setup lang="ts">
import { components } from '~/slices'

const params = useRoute().params as { uid: string[] }
const pathParams = typeof params.uid === 'string' ? [] : params?.uid.filter(Boolean) || []
const isGrandchildPage = pathParams.length === 2
const uid = pathParams.at(-1) || 'home'
const isHome = uid === 'home'
const isBlog = uid === 'blog'

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

const pageMeta = computed(() => ({
  title: page.value?.data.meta_title || (isHome && 'Nimiq Website') || (page?.value?.slugs[0]?.replace("-", " ").replace(/\b\w/g, char => char.toUpperCase()))|| (uid.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase())) || (isBlog && 'Blog - Nimiq Website')||'Nimiq Website',
  description: page.value?.data.meta_description || (isBlog && 'Stay updated with the latest news and articles from Nimiq') || 'The most accepted crypto in the World',
  image: (isHome && '/assets/og-images/home.jpg') || (isBlog && '/assets/og-images/blog.jpg') || '/assets/og-images/page.jpg',
  layout: (isHome && 'image') || 'overlay',
}))

useHead({
  title: pageMeta.value.title,
  meta: [
    { name: 'description', content: pageMeta.value.description },
  ],
})

const darkHeader = computed(() => page.value?.data.darkHeader || isHome || uid === 'supersimpleswap')
const footerBgColor = computed(() => (page.value?.data.slices.at(-1)?.primary as { bgColor: 'white' | 'grey' | 'darkblue' })?.bgColor)

const draft = computed(() => page.value?.data && 'draft' in page.value.data && page.value?.data.draft)

const showSocialsHexagonBg = isHome

console.log(isBlog);

defineOgImageComponent('OgMultilayout', {
  title: pageMeta.value.title,
  description: pageMeta.value.description,
  image: pageMeta.value.image,
  layout: pageMeta.value.layout,
})

</script>

<template>
  <NuxtLayout :footer-bg-color :dark-header :draft :show-socials-hexagon-bg>
    <SliceZone wrapper="main" :slices="page?.data.slices ?? []" :components />
  </NuxtLayout>
</template>
