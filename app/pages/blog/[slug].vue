<script setup lang="ts">
import mediumZoom from 'medium-zoom'

const route = useRoute('blog-slug')
const slug = route.params.slug

const { data: post } = await useAsyncData(`blog-${slug}`, () =>
  queryCollection('blog').where('slug', '=', slug).first())

if (!post.value)
  throw createError({ statusCode: 404, statusMessage: 'Blog post not found', fatal: true })

const { data: surroundings } = await useAsyncData(`blog-surroundings-${slug}`, () =>
  queryCollectionItemSurroundings('blog', post.value!.path, { fields: ['title', 'slug'] }))

const prev = computed(() => surroundings.value?.[0])
const next = computed(() => surroundings.value?.[1])

const meta = {
  title: post.value.title,
  description: post.value.description,
}

useHead({ title: meta.title })
useSeoMeta({ ...meta, ogTitle: meta.title, ogDescription: meta.description, twitterTitle: meta.title, twitterDescription: meta.description, twitterCard: 'summary_large_image' })

const articleRef = ref<HTMLElement>()
onMounted(() => {
  useIntersectionObserver(articleRef, () => {
    mediumZoom(':is(header,article) img:not(a *)', { margin: 24, background: 'var(--colors-neutral-0)' })
  })
})
</script>

<template>
  <NuxtLayout v-if="post" footer-bg-color="grey">
    <div ref="articleRef">
      <header class="max-w-$nq-prose-max-width pt-24 md:pt-[136px] px-8 px-lg:64 pb-0" data-section>
        <h1 style="--nq-font-size-min: 32;--nq-font-size-max: 40" view-transition-post-title>
          {{ post.title }}
        </h1>
        <p class="text-neutral-800" style="--nq-font-size-min: 18;--nq-font-size-max: 20">
          {{ post.description }}
        </p>

        <div class="mt-[18px] mt-lg:24 flex flex-items-center gap-x-4 flex-wrap text-12 text-neutral lh-[2] nq-label md:justify-center">
          <NuxtTime v-if="new Date(post.publishedAt).getFullYear() === new Date().getFullYear()" :datetime="post.publishedAt" month="short" day="numeric" />
          <NuxtTime v-else :datetime="post.publishedAt" month="short" day="numeric" year="numeric" />
          <address class="flex flex-gap-1ch not-italic">
            <span class="text-neutral-800">by</span>
            <span class="text-blue">{{ post.authors?.join(', ') || 'Team Nimiq' }}</span>
          </address>
          <div class="rounded-full bg-neutral-500 size-1 sm:block" hidden />
          <p class="text-neutral-800">
            {{ post.readingTime }} min
          </p>
        </div>

        <NuxtImg v-if="post.image" class="mx-auto rounded-2 w-full object-contain mt-12 md:mt-16" :src="post.image" :alt="post.title" view-transition-post-img />
      </header>
    </div>

    <ContentRenderer class="nq-prose" :value="post" wrapper="article" />

    <nav v-if="prev || next" class="flex flex-col flex-sm:row gap-4 flex-sm:gap-8 max-w-$nq-prose-max-width px-8 px-lg:64 pt-8 md:pt-12" data-section>
      <NuxtLink v-if="prev" class="flex flex-col flex-1 p-6 rounded-2 bg-neutral-100 ring-1 ring-neutral-400 nq-hoverable" :to="`/blog/${prev.slug}`">
        <span class="text-12 text-neutral-800 nq-label">Previous</span>
        <span class="text-16 text-neutral-900 mt-2 line-clamp-2">{{ prev.title }}</span>
      </NuxtLink>
      <div v-else class="flex-1" />
      <NuxtLink v-if="next" class="flex flex-col flex-1 ring-1 ring-neutral-400 p-6 text-right rounded-2 bg-neutral-100 nq-hoverable" :to="`/blog/${next.slug}`">
        <span class="text-12 text-neutral-800 nq-label">Next</span>
        <span class="text-16 text-neutral-900 mt-2 line-clamp-2">{{ next.title }}</span>
      </NuxtLink>
    </nav>

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
  --uno: 'z-101 rounded-2 mt-0 bg-white';
}

:global([nq-prose] > *:not(img, video, iframe, figure, blockquote, pre, code)) {
  --uno: 'px-0';
}

:global([nq-prose] > :where(h2, h3, h4, h5, h6) > *) {
  --uno: 'text-1em';
}

:global([nq-prose] > :where(h2, h3, h4, h5, h6):not(:first-child)) {
  --uno: 'mt-px.5lh';
}

:global(section:has(article[nq-prose])) {
  --uno: 'pt-12 md:pt-16';
}
</style>
