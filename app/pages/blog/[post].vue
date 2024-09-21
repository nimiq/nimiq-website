<script setup lang="ts">
import mediumZoom from 'medium-zoom'
import { ref } from 'vue'
import { components } from '~/slices'

const postSlug = useRouteParams<string>('post')

const { client } = usePrismic()
const { data: post } = useAsyncData('blog_page', () => client.getByUID('blog_page', postSlug.value))
if (!import.meta.dev && post.value?.data.draft)
  throw new Error(`Post ${post.value?.href} is in draft but somehow we tried to generate it :/`)

const { readingTime, title, description, image } = useProse(post)

useHead({ title: title.value })
useSeoMeta({ description: description.value, twitterTitle: title.value, twitterDescription: description.value, twitterCard: 'summary_large_image' })
defineOgImage(image.value)

const isDraft = computed(() => post.value?.data.draft === undefined ? true : post.value?.data.draft)

const articleRef = ref<HTMLElement>()
useIntersectionObserver(articleRef, () => {
  mediumZoom(':is(header,article) img', { margin: 24, background: 'rgb(var(--nq-neutral-0) / 1)' })
})

useDark()
</script>

<template>
  <NuxtLayout v-if="post">
    <NuxtRouteAnnouncer />
    <div ref="articleRef">
      <LockBadge v-if="isDraft" fixed bottom-32 right-32 z-102 />

      <header data-section max-w="$nq-prose-max-width" pt="148 md:153 lg:160" px="32 lg:64">
        <PrismicText wrapper="h1" :field="post.data.title" style="--nq-font-size-min: 32;--nq-font-size-max: 40" view-transition-post-title />
        <PrismicText wrapper="p" text-neutral-800 :field="post.data.subline" style="--nq-font-size-min: 18;--nq-font-size-max: 20" />
        <ArticleMetadata mt="18 lg:24" :date="new Date(post.last_publication_date)" :authors="post.data.authors.map(a => a.name).join(', ')" md:justify-center>
          <template #after>
            <div hidden size-4 rounded-full bg-neutral-500 sm:block />
            <p text-neutral-800>
              {{ readingTime }} min
            </p>
          </template>
        </ArticleMetadata>
        <PrismicImage :field="post.data.image" mx-auto mt-104 max-w-1440 w-full rounded-8 object-contain view-transition-post-img />
      </header>
    </div>
    <SliceZone pt="80 lg:96" wrapper="main" :slices="post?.data.body ?? []" :components />
    <Disclaimer />
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
