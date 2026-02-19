<script setup lang="ts">
import mediumZoom from 'medium-zoom'
import { components } from '~/slices'

const postSlug = useRouteParams<string>('post')

const { data: post } = await useBlogPost(postSlug.value)

const { readingTime, meta, draft, image } = getBlogMetadata(post.value!)

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
  mediumZoom(':is(header,article) img:not(a *)', { margin: 24, background: 'rgb(var(--nq-neutral-0) / 1)' })
})

if (post.value?.data.body.at(0)?.primary) {
  post.value.data.body[0]!.primary.bgColor = 'grey'
}
</script>

<template>
  <NuxtLayout v-if="post">
    <div ref="articleRef">
      <PageInfo :draft bottom-32 right-32 fixed z-102 />

      <header data-section max-w="$nq-prose-max-width" f-pt="96/136" px="32 lg:64" pb-0>
        <PrismicText wrapper="h1" :field="post.data.title" style="--nq-font-size-min: 32;--nq-font-size-max: 40" view-transition-post-title />
        <PrismicText wrapper="p" text-neutral-800 :field="post.data.subline" style="--nq-font-size-min: 18;--nq-font-size-max: 20" />
        <ArticleMetadata mt="18 lg:24" :date="new Date(post.last_publication_date)" :authors="post.data.authors.map((a: any) => a.name).join(', ')" md:justify-center>
          <template #after>
            <div rounded-full bg-neutral-500 size-4 hidden sm:block />
            <p text-neutral-800>
              {{ readingTime }} min
            </p>
          </template>
        </ArticleMetadata>
        <ProxiedPrismicImage :field="post.data.image" mx-auto rounded-8 w-full object-contain view-transition-post-img f-mt-2xl />
      </header>
    </div>
    <SliceZone v-if="post.data.body.length > 0" :slices="post.data.body" :components />
    <div v-else data-blog-post-prose>
      <RichText nq-prose wrapper="article" :field="post.data.text" />
    </div>
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

:global([data-blog-post-prose] > article[nq-prose] > *:not(img, video, iframe, figure, blockquote, pre, code)) {
  --uno: 'px-0';
}

:global([data-blog-post-prose] > article[nq-prose] > :where(h2, h3, h4, h5, h6) > *) {
  --uno: 'text-1em';
}

:global([data-blog-post-prose] > article[nq-prose] > :where(h2, h3, h4, h5, h6):not(:first-child)) {
  --uno: 'mt-1.5lh';
}

:global([data-blog-post-prose] > article[nq-prose] :where(h2)) {
  --font-size-min-em: 1.5;
  --font-size-max-em: 1.7;
  line-height: 1.25;
  margin-bottom: 0.75lh;
}

:global([data-blog-post-prose] > article[nq-prose] :where(h3)) {
  --font-size-min-em: 1.25;
  --font-size-max-em: 1.4;
  line-height: 1.25;
  margin-bottom: 0.6lh;
}

:global([data-blog-post-prose] > article[nq-prose] :where(h4)) {
  --font-size-min-em: 1.1;
  --font-size-max-em: 1.25;
  line-height: 1.25;
  margin-bottom: 0.5lh;
}

:global([data-blog-post-prose] > article[nq-prose] :where(strong, b):not(:where(h1, h2, h3, h4, h5, h6) *)) {
  font-weight: 700;
  color: color-mix(in srgb, rgb(var(--nq-neutral-800)) 50%, rgb(var(--nq-neutral-900)) 50%);
}

:global([data-blog-post-prose] > article[nq-prose] > :where(ul, ol) > li) {
  margin-left: 20px;
}

:global([data-blog-post-prose] > article[nq-prose] > ul > li::before) {
  top: 0.6em;
}

:global([data-blog-post-prose] > article[nq-prose] > ol > li::before) {
  top: 0.15em;
}

:global([data-blog-post-prose] > article[nq-prose] > :where(ul, ol)) {
  margin-top: 16px;
  margin-bottom: 16px;
}

:global(section:has([data-blog-post-prose] > article[nq-prose])) {
  --uno: 'f-pt-2xl';
}
</style>
