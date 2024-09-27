<script setup lang="ts">
import type { Content } from '@prismicio/client'
import { components } from '~/slices'

const route = useRoute()

// @ts-expect-error - `uid` is defined
const uid = route.params.uid

const { data: page } = usePrismicDocumentByUID<Content.PageDocument>('page', uid)

useHead({
  title: page.value?.data.meta_title,
  meta: [
    { name: 'description', content: page.value?.data.meta_description },
  ],
})

const footerBgColor = computed(() => (page.value?.data.slices.at(-1)?.primary as { bgColor: 'white' | 'grey' | 'darkblue' })?.bgColor)

// TODO Do image
defineOgImageComponent('DefaultImage')
</script>

<template>
  <NuxtLayout :footer-bg-color :draft="page?.data.draft">
    <SliceZone :slices="page?.data.slices ?? []" :components="components" />
  </NuxtLayout>
</template>
