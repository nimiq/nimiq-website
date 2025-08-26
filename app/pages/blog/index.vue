<script setup lang="ts">
import type { PageDocument } from '~~/prismicio-types'
import { components } from '~/slices'

const route = useRoute()
const pageIndex = ref(Number(route.query.page) || 1)

// Watch for query param changes to update page index for SEO
watch(() => route.query.page, (val) => {
  pageIndex.value = Number(val) || 1
})

const { data: page } = await usePrismicPage('blog')

// Ensure page is available for template
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Blog page not found', fatal: true })
}

// Type assertion to help TypeScript
const blogPage = page as Ref<PageDocument>

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
    <SliceZone wrapper="main" :slices="blogPage?.data?.slices ?? []" :components />
  </NuxtLayout>
</template>
