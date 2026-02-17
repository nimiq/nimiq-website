<script setup lang="ts">
import mediumZoom from 'medium-zoom'

const route = useRoute('blog-slug')
const slug = route.params.slug

const post = await usePrerenderData(`blog-${slug}`, () =>
  queryCollection('blog').where('slug', '=', slug).first())

if (!post)
  throw createError({ statusCode: 404, statusMessage: 'Blog post not found', fatal: true })

const surroundings = await usePrerenderData(`blog-surroundings-${slug}`, () =>
  queryCollectionItemSurroundings('blog', post.path, { fields: ['title', 'slug'] }))

const prev = computed(() => surroundings?.[0])
const next = computed(() => surroundings?.[1])

const meta = {
  title: post.title,
  description: post.description,
}

useHead({ title: meta.title })
useSeoMeta({ ...meta, ogTitle: meta.title, ogDescription: meta.description, twitterTitle: meta.title, twitterDescription: meta.description, twitterCard: 'summary_large_image' })

const articleRef = ref<HTMLElement>()
onMounted(() => {
  useIntersectionObserver(articleRef, () => {
    mediumZoom(':is(header,article) img:not(a *)', { margin: 24, background: 'var(--color-neutral-0)' })
  })
})
</script>

<template>
  <NuxtLayout v-if="post" footer-bg-color="grey">
    <div ref="articleRef">
      <header class="max-w-[var(--nq-prose-max-width)] pt-24 md:pt-[136px] px-8 lg:px-16 pb-0" data-section>
        <h1 class="view-transition-post-title" style="--nq-font-size-min: 32;--nq-font-size-max: 40">
          {{ post.title }}
        </h1>
        <p class="text-neutral-800" style="--nq-font-size-min: 18;--nq-font-size-max: 20">
          {{ post.description }}
        </p>

        <div class="mt-[18px] lg:mt-6 flex items-center gap-x-4 flex-wrap text-xs text-neutral leading-8 nq-label md:justify-center">
          <NuxtTime v-if="new Date(post.publishedAt).getFullYear() === new Date().getFullYear()" :datetime="post.publishedAt" month="short" day="numeric" />
          <NuxtTime v-else :datetime="post.publishedAt" month="short" day="numeric" year="numeric" />
          <address class="flex gap-[1ch] not-italic">
            <span class="text-neutral-800">by</span>
            <span class="text-blue">{{ post.authors?.join(', ') || 'Team Nimiq' }}</span>
          </address>
          <div class="rounded-full bg-neutral-500 size-1 hidden sm:block" />
          <p class="text-neutral-800">
            {{ post.readingTime }} min
          </p>
        </div>

        <NuxtImg v-if="post.image" class="mx-auto rounded-2 w-full object-contain mt-12 md:mt-16 view-transition-post-img" :src="post.image" :alt="post.title" />
      </header>
    </div>

    <ContentRenderer class="nq-prose" :value="post" wrapper="article" />

    <nav v-if="prev || next" class="flex flex-col sm:flex-row gap-4 sm:gap-8 max-w-[var(--nq-prose-max-width)] px-8 lg:px-16 pt-8 md:pt-12" data-section>
      <NuxtLink v-if="prev" class="flex flex-col flex-1 p-6 rounded-2 bg-neutral-100 ring-1 ring-neutral-400 nq-hoverable" :to="`/blog/${prev.slug}`">
        <span class="text-xs text-neutral-800 nq-label">Previous</span>
        <span class="text-base text-neutral-900 mt-2 line-clamp-2">{{ prev.title }}</span>
      </NuxtLink>
      <div v-else class="flex-1" />
      <NuxtLink v-if="next" class="flex flex-col flex-1 ring-1 ring-neutral-400 p-6 text-right rounded-2 bg-neutral-100 nq-hoverable" :to="`/blog/${next.slug}`">
        <span class="text-xs text-neutral-800 nq-label">Next</span>
        <span class="text-base text-neutral-900 mt-2 line-clamp-2">{{ next.title }}</span>
      </NuxtLink>
    </nav>

    <Disclaimer />
  </NuxtLayout>
</template>

<style scoped>
:global(article img) {
  background-color: white;
}
.medium-zoom-overlay {
  z-index: 100;
}
:global(.medium-zoom-image--opened) {
  border-radius: 8px;
  margin-top: 0;
  background-color: white;
  z-index: 101;
}

:global([nq-prose] > *:not(img, video, iframe, figure, blockquote, pre, code)) {
  padding-left: 0;
  padding-right: 0;
}

:global([nq-prose] > :where(h2, h3, h4, h5, h6) > *) {
  font-size: 1em;
}

:global([nq-prose] > :where(h2, h3, h4, h5, h6):not(:first-child)) {
  margin-top: 0.5lh;
}

:global(section:has(article[nq-prose])) {
  padding-top: 48px;
}
@media (min-width: 768px) {
  :global(section:has(article[nq-prose])) {
    padding-top: 64px;
  }
}
</style>
