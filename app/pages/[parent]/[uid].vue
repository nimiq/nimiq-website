<script setup lang="ts">
import { components } from '~/slices'

const params = useRoute().params

const { client } = usePrismic()
const { data: page } = useAsyncData('page', () =>
  // @ts-expect-error This is valid
  client.getByUID('child_page', params.value!.uid))

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
