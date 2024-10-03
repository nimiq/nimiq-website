<script setup lang="ts">
import type { Content } from '@prismicio/client'
import { components } from '~/slices'

const uid = useRouteQuery('uid')

// TODO CHange to usePrismic
const { data: page } = usePrismicDocumentByUID<Content.PageDocument>('page', uid.value as string)

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
