<script setup lang="ts">
import type { Content } from '@prismicio/client'
import { components } from '~/slices'

const params = useRoute().params
// const { client } = usePrismic()
// const { data: page } = await useAsyncData('page', () =>
//   client.getByUID('page', params.value!.uid))
// @ts-expect-error This is valid
const { data: page } = usePrismicDocumentByUID<Content.PageDocument>('page', params.uid as string)

useHead({
  title: page.value?.data.meta_title,
  meta: [
    { name: 'description', content: page.value?.data.meta_description },
  ],
})

const footerBgColor = computed(() => (page.value?.data.slices.at(-1)?.primary as { bgColor: 'white' | 'grey' | 'darkblue' })?.bgColor)
const draft = computed(() => page.value?.data && 'draft' in page.value.data && page.value?.data.draft)

defineOgImageComponent('DefaultImage')
</script>

<template>
  <NuxtLayout :footer-bg-color :dark-header="false" :draft>
    <SliceZone wrapper="main" :slices="page?.data.slices ?? []" :components />
  </NuxtLayout>
</template>
