<script setup lang="ts">
import { components } from '~/slices'

const params = useRoute().params
const slug = computed(() => 'slug' in params ? params.slug : undefined)
const isHome = computed(() => slug.value?.length === 0)
const uid = computed(() => slug.value?.at(-1))
const parent = computed(() => slug.value?.at(-2))

const { client } = usePrismic()
const { data: page } = useAsyncData('page', async () => {
  if (isHome.value)
    return await client.getByUID('home_2024', 'home')
  else if (parent.value)
    return await client.getByUID('child_page', uid.value!)
  else
    return await client.getByUID('page', uid.value!)
})

useHead({
  title: page.value?.data.meta_title,
  meta: [
    { name: 'description', content: page.value?.data.meta_description },
  ],
})

const footerBgColor = computed(() => (page.value?.data.slices.at(-1)?.primary as { bgColor: 'white' | 'grey' | 'darkblue' })?.bgColor)
const darkHeader = computed(() => isHome.value)
const draft = computed(() => page.value?.data && 'draft' in page.value.data && page.value?.data.draft)

if (isHome.value)
  defineOgImage({ url: '/assets/og-images/home.jpg' })
else
  defineOgImageComponent('DefaultImage')
</script>

<template>
  <NuxtLayout :footer-bg-color :dark-header :draft>
    <SliceZone wrapper="main" :slices="page?.data.slices ?? []" :components />
  </NuxtLayout>
</template>
