<script setup lang="ts">
import { components } from '~/slices'

const { client } = usePrismic()

const { data: page } = useAsyncData('page', () => client.getByUID('home_2024', 'home'))

useHead({
  title: page.value?.data.meta_title,
  meta: [
    { name: 'description', content: page.value?.data.meta_description },
  ],
})

const footerBgColor = computed(() => (page.value?.data.slices.at(-1)?.primary as { bgColor: 'white' | 'grey' | 'darkblue' })?.bgColor)

defineOgImageComponent('DefaultImage')
</script>

<template>
  <NuxtLayout :footer-bg-color show-socials-hexagon-bg dark-header>
    <SliceZone wrapper="main" :slices="page?.data.slices ?? []" :components />
  </NuxtLayout>
</template>
