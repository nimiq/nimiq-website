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
const draft = computed(() => page.value?.data && 'draft' in page.value.data && page.value?.data.draft)

defineOgImage({ url: '/assets/og-images/home.jpg' })
</script>

<template>
  <NuxtLayout :footer-bg-color dark-header :draft>
    <SliceZone wrapper="main" :slices="page?.data.slices ?? []" :components />
  </NuxtLayout>
</template>
