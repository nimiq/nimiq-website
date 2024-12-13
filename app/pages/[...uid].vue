<script setup lang="ts">
import type { Content } from '@prismicio/client'
import { components } from '~/slices'

const params = useRoute().params as { uid: string }
const uid = params.uid === '' ? 'home' : params.uid[0]!
const isHome = uid === 'home'
const { data: page } = usePrismicDocumentByUID<Content.PageDocument>('page', uid)

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
