<script setup lang="ts">
import type { Content } from '@prismicio/client'
import { components } from '~/slices'

const params = useRoute().params as { uid: string }
const isGrandchildPage = params.uid.length === 2
const uid = params.uid === '' ? 'home' : params.uid.at(-1)
const isHome = uid === 'home'
const { data: page } = usePrismicDocumentByUID<Content.PageDocument>('page', uid!)

const router = useRouter()

definePageMeta({
  middleware: [
    async function (to) {
      // console.log('to.path:', to.path)
      if (to.path !== '/supersimpleswap')
        return
      // console.log('Loading bg-blue-sss.css')
      await import('~/assets/css/bg-blue-sss.css')
    },
  ],
})

// We check that the page.links is not empty if isGrandchildPage and that the links defined are the same as in the URL
watch(page, () => {
  if (!isGrandchildPage)
    return
  const notValid
    = (page.value?.data.parents.length !== params.uid.length - 1) // Check that the page has the same number of parents as the URL
    || page.value?.data.parents.some((parent, i) => (parent as { uid: string }).uid !== params.uid[i]) // Check that the parents are the same as in the URL
  if (notValid)
    router.push('/404')
})

useHead({
  title: page.value?.data.meta_title,
  meta: [
    { name: 'description', content: page.value?.data.meta_description },
  ],
})

const darkHeader = computed(() => page.value?.data.darkHeader || isHome)
const footerBgColor = computed(() => (page.value?.data.slices.at(-1)?.primary as { bgColor: 'white' | 'grey' | 'darkblue' })?.bgColor)

const draft = computed(() => page.value?.data && 'draft' in page.value.data && page.value?.data.draft)

const showSocialsHexagonBg = isHome
// defineOgImageComponent('DefaultImage')
</script>

<template>
  <NuxtLayout :footer-bg-color :dark-header :draft :show-socials-hexagon-bg>
    <SliceZone wrapper="main" :slices="page?.data.slices ?? []" :components />
  </NuxtLayout>
</template>
