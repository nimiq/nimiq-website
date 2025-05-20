<script setup lang="ts">
import mediumZoom from 'medium-zoom'
import { ref } from 'vue'
import { components } from '~/slices'

const postSlug = useRouteParams<string>('post')

const { client } = usePrismic()
const { data: post } = await useAsyncData(`prismic-post-${postSlug.value}`, () => client.getByUID('blog_page', postSlug.value)
  .catch((error) => {
    console.error(`Blog post with slug "${postSlug.value}" not found:`, error)
    throw createError({ statusCode: 404, statusMessage: 'Article not found', fatal: true })
  }))

const { showDrafts } = useRuntimeConfig().public

if (!post.value || (!showDrafts && post.value?.data.draft)) {
  console.error(`Blog post with slug "${postSlug.value}" not found`)
  throw createError({ statusCode: 404, statusMessage: 'Article not found', fatal: true })
}

const { readingTime, meta, draft, image } = getBlogMetadata(post.value!)

useHead(meta)
useSeoMeta({ ...meta, twitterTitle: meta.title, twitterDescription: meta.description, twitterCard: 'summary_large_image' })

setOgImage({
  title: meta.title,
  subline: meta.description,
  image,
})

const articleRef = ref<HTMLElement>()
useIntersectionObserver(articleRef, () => {
  mediumZoom(':is(header,article) img', { margin: 24, background: 'rgb(var(--nq-neutral-0) / 1)' })
})

useDark()

if (post.value.data.body.at(0)?.primary)
  // @ts-expect-error The background color is always present in this case
  post.value.data.body[0]!.primary.bgColor = 'grey'
</script>

<template>
  <NuxtLayout v-if="post">
    <div ref="articleRef">
      <PageInfo :draft bottom-32 right-32 fixed z-102 />

      <header data-section max-w="$nq-prose-max-width" pt="148 md:153 lg:160" px="32 lg:64">
        <PrismicText wrapper="h1" :field="post.data.title" style="--nq-font-size-min: 32;--nq-font-size-max: 40" view-transition-post-title />
        <PrismicText wrapper="p" text-neutral-800 :field="post.data.subline" style="--nq-font-size-min: 18;--nq-font-size-max: 20" />
        <ArticleMetadata mt="18 lg:24" :date="new Date(post.last_publication_date)" :authors="post.data.authors.map(a => a.name).join(', ')" md:justify-center>
          <template #after>
            <div rounded-full bg-neutral-500 size-4 hidden sm:block />
            <p text-neutral-800>
              {{ readingTime }} min
            </p>
          </template>
        </ArticleMetadata>
        <PrismicImage :field="post.data.image" mx-auto mt-104 rounded-8 w-full object-contain view-transition-post-img />
      </header>
    </div>
    <SliceZone :slices="post?.data.body ?? []" :components />
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
