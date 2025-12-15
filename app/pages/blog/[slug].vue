<script setup lang="ts">
import mediumZoom from 'medium-zoom'

const route = useRoute()
const slug = route.params.slug as string

const { data: post } = await useAsyncData(`blog-${slug}`, () =>
  queryCollection('blog').where('slug', '=', slug).first())

if (!post.value)
  throw createError({ statusCode: 404, statusMessage: 'Blog post not found', fatal: true })

const readingTime = computed(() => calculateReadingTime(post.value?.description || ''))

const meta = {
  title: post.value.title,
  description: post.value.description,
}

useHead({ title: meta.title })
useSeoMeta({ ...meta, ogTitle: meta.title, ogDescription: meta.description, twitterTitle: meta.title, twitterDescription: meta.description, twitterCard: 'summary_large_image' })

const articleRef = ref<HTMLElement>()
onMounted(() => {
  useIntersectionObserver(articleRef, () => {
    mediumZoom(':is(header,article) img:not(a *)', { margin: 24, background: 'rgb(var(--nq-neutral-0) / 1)' })
  })
})
</script>

<template>
  <NuxtLayout v-if="post" footer-bg-color="grey">
    <div ref="articleRef">
      <header data-section max-w="$nq-prose-max-width" f-pt="96/136" px="32 lg:64" pb-0>
        <h1 style="--nq-font-size-min: 32;--nq-font-size-max: 40" view-transition-post-title>
          {{ post.title }}
        </h1>
        <p text-neutral-800 style="--nq-font-size-min: 18;--nq-font-size-max: 20">
          {{ post.description }}
        </p>

        <div mt="18 lg:24" flex="~ items-center gap-x-16 wrap" text="12 neutral" lh="[2]" nq-label md:justify-center>
          <NuxtTime v-if="new Date(post.publishedAt).getFullYear() === new Date().getFullYear()" :datetime="post.publishedAt" month="short" day="numeric" />
          <NuxtTime v-else :datetime="post.publishedAt" month="short" day="numeric" year="numeric" />
          <address flex="~ gap-1ch" not-italic>
            <span text-neutral-800>by</span>
            <span text-blue>{{ post.authors?.join(', ') || 'Team Nimiq' }}</span>
          </address>
          <div rounded-full bg-neutral-500 size-4 hidden sm:block />
          <p text-neutral-800>
            {{ readingTime }} min
          </p>
        </div>

        <NuxtImg v-if="post.image" :src="post.image" :alt="post.title" mx-auto rounded-8 w-full object-contain view-transition-post-img f-mt-2xl />
      </header>
    </div>

    <ContentRenderer :value="post" nq-prose wrapper="article" />

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

:global([nq-prose] > :where(h2, h3, h4, h5, h6) > *) {
  --uno: 'text-1em';
}

:global([nq-prose] > :where(h2, h3, h4, h5, h6):not(:first-child)) {
  --uno: 'mt-1.5lh';
}

:global(section:has(article[nq-prose])) {
  --uno: 'f-pt-2xl';
}
</style>
