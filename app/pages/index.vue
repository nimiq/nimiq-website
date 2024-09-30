<script setup lang="ts">
import { components } from '~/slices'

const { client } = usePrismic()
const { data: page } = useAsyncData('home', () => client.getByType('home_2024'), { transform: data => data.results[0] })

useHead({
  title: page.value?.data.meta_title,
  meta: [
    { name: 'description', content: page?.value?.data.meta_description },
  ],
})

defineOgImageComponent('DefaultImage', { title: 'Nimiq' })

const darkHeader = computed(() => (page.value?.data.slices.at(0)?.primary as { bgColor: string }).bgColor === 'darkblue')
</script>

<template>
  <NuxtLayout :dark-header>
    <SliceZone :slices="page?.data.slices ?? []" :components relative />
  </NuxtLayout>
</template>
