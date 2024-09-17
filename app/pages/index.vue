<script setup lang="ts">
import type { Content } from '@prismicio/client'
import { components } from '~/slices'

const { data: page } = useSinglePrismicDocument<Content.Home2024Document>('home_2024')

useHead({
  title: page.value?.data.meta_title,
  meta: [
    { name: 'description', content: page.value?.data.meta_description },
  ],
})

defineOgImageComponent('DefaultImage', { title: 'Nimiq' })
</script>

<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <SliceZone wrapper="main" :slices="page?.data.slices ?? []" :components />
  </NuxtLayout>
</template>
