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
            {{ post.readingTime }} min
          </p>
        </div>

        <NuxtImg v-if="post.image" :src="post.image" :alt="post.title" mx-auto rounded-8 w-full object-contain view-transition-post-img f-mt-2xl />
      </header>
    </div>

    <ContentRenderer :value="post" nq-prose wrapper="article" />

    <nav v-if="prev || next" data-section flex="~ col sm:row gap-16 sm:gap-32" max-w="$nq-prose-max-width" px="32 lg:64" f-pt-xl>
      <NuxtLink v-if="prev" :to="`/blog/${prev.slug}`" flex="~ col 1" p-24 rounded-8 bg-neutral-100 ring="1 neutral-400" nq-hoverable>
        <span text="12 neutral-800" nq-label>Previous</span>
        <span text="16 neutral-900" mt-8 line-clamp-2>{{ prev.title }}</span>
      </NuxtLink>
      <div v-else flex-1 />
      <NuxtLink v-if="next" :to="`/blog/${next.slug}`" flex="~ col 1" ring="1 neutral-400" p-24 text-right rounded-8 bg-neutral-100 nq-hoverable>
        <span text="12 neutral-800" nq-label>Next</span>
        <span text="16 neutral-900" mt-8 line-clamp-2>{{ next.title }}</span>
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
