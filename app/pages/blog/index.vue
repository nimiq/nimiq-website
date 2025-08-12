<script setup lang="ts">
import { components } from '~/slices'

const route = useRoute()
const pageIndex = ref(Number(route.query.page) || 1)

// Watch for query param changes to update page index for SEO
watch(() => route.query.page, (val) => {
  pageIndex.value = Number(val) || 1
})

const { client } = usePrismic()
const { data: page } = await useAsyncData(`prismic-page-blog`, () => client.getByUID('page', 'blog')
  .catch((error) => {
    console.error(`Page with UID "blog" not found in Prismic:`, error)
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
  }), {
  server: true,
})

// SEO
useHead({
  title: pageIndex.value === 1 ? 'Blog' : `Blog - Page ${pageIndex.value}`,
  meta: [
    { name: 'description', content: 'Latest articles and insights from the Nimiq team' },
  ],
})
</script>

<template>
  <NuxtLayout footer-bg-color="grey" :dark-header="false" :show-socials-hexagon-bg="false">
    <SliceZone wrapper="main" :slices="page?.data.slices ?? []" :components />
  </NuxtLayout>
</template>
