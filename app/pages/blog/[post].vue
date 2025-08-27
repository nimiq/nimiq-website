<script setup lang="ts">
import mediumZoom from 'medium-zoom'
import { components } from '~/slices'

const postSlug = useRouteParams<string>('post')

const { data: post } = await usePrismicPage(postSlug.value, 'blog_page')

const { readingTime, meta, draft, image } = getBlogMetadata(post.value as BlogPageDocument)

useHead(meta)
useSeoMeta({ ...meta, twitterTitle: meta.title, twitterDescription: meta.description, twitterCard: 'summary_large_image' })

setOgImage({
  title: meta.title,
  subline: meta.description,
  image,
  type: 'blog',
})

const articleRef = ref<HTMLElement>()
useIntersectionObserver(articleRef, () => {
  mediumZoom(':is(header,article) img', { margin: 24, background: 'rgb(var(--nq-neutral-0) / 1)' })
})

const blogPost = post.value as BlogPageDocument
if (blogPost.data.body.at(0)?.primary) {
  blogPost.data.body[0]!.primary.bgColor = 'grey'
}
</script>

<template>
  <NuxtLayout v-if="post">
    <div ref="articleRef">
      <PageInfo :draft bottom-32 right-32 fixed z-102 />

      <header data-section max-w="$nq-prose-max-width" f-pt="96/136" px="32 lg:64">
        <PrismicText wrapper="h1" :field="(post as BlogPageDocument).data.title" style="--nq-font-size-min: 32;--nq-font-size-max: 40" view-transition-post-title />
        <PrismicText wrapper="p" text-neutral-800 :field="(post as BlogPageDocument).data.subline" style="--nq-font-size-min: 18;--nq-font-size-max: 20" />
        <ArticleMetadata mt="18 lg:24" :date="new Date(post.last_publication_date)" :authors="(post as BlogPageDocument).data.authors.map((a: any) => a.name).join(', ')" md:justify-center>
          <template #after>
            <div rounded-full bg-neutral-500 size-4 hidden sm:block />
            <p text-neutral-800>
              {{ readingTime }} min
            </p>
          </template>
        </ArticleMetadata>
        <ProxiedPrismicImage :field="(post as BlogPageDocument).data.image" mx-auto mt-104 rounded-8 w-full object-contain view-transition-post-img />
      </header>
    </div>
    <SliceZone v-if="(post as BlogPageDocument).data.body.length > 0" :slices="(post as BlogPageDocument)?.data.body ?? []" :components />
    <RichText v-else nq-prose wrapper="article" :field="(post as BlogPageDocument).data.text" />
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

:global([nq-prose] > *:not(img, video, iframe, figure, blockquote, pre, code)) {
  --uno: 'px-0';
}

:global([nq-prose] > :where(h2, h3, h4, h5, h6)) {
  --uno: 'mt-2lh';
}

:global([nq-prose] > h2) {
  --uno: 'mt-2lh';
}

:global([nq-prose] > h3) {
  --uno: 'mt-1.7lh';
}

:global([nq-prose] > h4) {
  --uno: 'mt-1.4lh';
}

:global([nq-prose] > h5) {
  --uno: 'mt-1.2lh';
}

:global([nq-prose] > :where(h2, h3, h4, h5, h6) > *) {
  --uno: 'text-1em';
}
</style>
