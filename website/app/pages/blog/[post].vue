<script setup lang="ts">
import type { Content } from '@prismicio/client'
import mediumZoom from 'medium-zoom'
import { ref } from 'vue'
import { components } from '~/slices'

// @ts-expect-error - `post` is defined
const postSlug = useRoute().params.post

const { data: post } = usePrismicDocumentByUID<Content.BlogPageDocument>('blog_page', postSlug)

useHead({
  title: post.value?.data.meta_title,
  meta: [
    { name: 'description', content: post.value?.data.meta_description },
  ],
})

// TODO Image
defineOgImageComponent('DefaultImage')

const { readingTime } = useProse(post)

// TODO Add "Draft" badge logic

const articleRef = ref<HTMLElement | null>(null)
useIntersectionObserver(articleRef, () => {
  mediumZoom(':is(header,article) img', { margin: 24, background: 'rgb(var(--nq-neutral-0) / 1)' })
})

useDark()
</script>

<template>
  <NuxtLayout v-if="post">
    <NuxtRouteAnnouncer />
    <div ref="articleRef">
      <div v-if="post.data.draft" title="The current blog post is a draft, and therefore it won't be shown in the Nimiq Blog." fixed bottom-32 right-32 z-102 cursor-default gap-8 shadow nq-pill-lg nq-pill-orange>
        <div i-nimiq:locked-lock />
        Draft
      </div>

      <header data-section max-w="$nq-prose-max-width" pt="148 md:153 lg:160" px="32 lg:64">
        <PrismicText wrapper="h1" :field="post.data.title" style="--font-size-min: 32;--font-size-max: 40" />
        <PrismicText wrapper="p" text-neutral-800 :field="post.data.subline" style="--font-size-min: 18;--font-size-max: 20" />
        <ArticleMetadata mt="18 lg:24" :date="new Date(post.last_publication_date)" :authors="post.data.authors.map(a => a.name).join(', ')" md:justify-center>
          <template #after>
            <div hidden size-4 rounded-full bg-neutral-500 sm:block />
            <p text-neutral-800>
              {{ readingTime }} min
            </p>
          </template>
          <PrismicImage :field="post.data.image" mx-auto mt-104 max-w-1440 w-full rounded-8 object-contain />
        </articlemetadata>
      </header>
    </div>
    <SliceZone pt="80 lg:96" wrapper="main" :slices="post?.data.body ?? []" :components />
  </NuxtLayout>
</template>

<style scoped>
:global(article img) {
  --uno: 'bg-white';
}
.medium-zoom-overlay {
  --uno: 'z-100';
}
:global(.medium-zoom-image--opened) {
  --uno: 'z-101 rounded-8 mt-0 bg-white';
}
</style>
