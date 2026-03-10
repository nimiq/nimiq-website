<script setup lang="ts">
import { motion } from 'motion-v'

const route = useRoute()
const pageIndex = computed(() => Number(route.query.page) || 1)

watch(pageIndex, () => window.scrollTo(0, 0))
const itemsPerPage = 25

const { data: page } = await useAsyncData('blog-page', () => queryCollection('blogPage').first())
if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Blog page not found', fatal: true })

const { data: posts } = await useAsyncData('blog-posts-all', () =>
  queryCollection('blog')
    .select('title', 'slug', 'description', 'publishedAt', 'image', 'authors')
    .order('publishedAt', 'DESC')
    .all())
const totalPages = computed(() => Math.ceil((posts.value?.length || 0) / itemsPerPage))
const paginatedPosts = computed(() => {
  const start = (pageIndex.value - 1) * itemsPerPage
  return (posts.value || []).slice(start, start + itemsPerPage)
})

const active = useState('active-blog-post', () => '')
const hoveredSlug = ref<string | null>(null)

const springTransition = { type: 'spring' as const, stiffness: 300, damping: 25 }

useHead({ title: pageIndex.value === 1 ? 'Blog' : `Blog - Page ${pageIndex.value}` })
useSeoMeta({ description: 'Latest articles and insights from the Nimiq team' })
</script>

<template>
  <NuxtLayout :dark-header="false" :show-socials-hexagon-bg="false" footer-bg-color="grey">
    <section class="bg-neutral-100 relative">
      <div class="flex flex-col md:items-center">
        <h1 class="md:text-center md:mx-auto">
          {{ page.hero.title }}
        </h1>
        <p v-if="page.hero.description" class="font-normal text-neutral-800 md:text-center md:mx-auto">
          {{ page.hero.description }}
        </p>
      </div>
    </section>

    <section class="bg-neutral-100" style="--f-pt-min: 96; --f-pt-max: 128">
      <div v-if="paginatedPosts.length" class="blog-grid grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16 w-full">
        <article v-for="(post, i) in paginatedPosts" :key="post.slug" :class="pageIndex === 1 ? { 'md:first:col-span-2': true } : 'self-stretch'">
          <NuxtLink class="p-0 h-full relative nq-hoverable" :to="`/blog/${post.slug}`" @click="active = post.slug" @mouseenter="hoveredSlug = post.slug" @mouseleave="hoveredSlug = null" @focusin="hoveredSlug = post.slug" @focusout="hoveredSlug = null">
            <div class="p-2">
              <NuxtImg v-if="post.image" class="rounded-6 w-full object-cover" :src="post.image" :alt="post.title" loading="lazy" :class="[i === 1 && pageIndex === 1 ? 'h-max lg:h-[280px]' : 'h-max', { 'view-transition-post-img contain-layout': active === post.slug }]" />
            </div>
            <div class="flex flex-col p-6 pt-4 h-full">
              <h2 class="text-left f-text-2xl" :class="{ 'view-transition-post-title contain-layout': active === post.slug }">
                {{ post.title }}
              </h2>
              <p class="mt-2 line-clamp-2 text-16 text-neutral-900 text-left">
                {{ post.description }}
              </p>
              <div class="relative overflow-hidden mt-16 h-[24px]" :class="i === 1 ? 'mt-4' : 'mt-auto'">
                <motion.div
                  class="flex items-center gap-x-16 flex-wrap text-12 text-neutral leading-[24px] nq-label"
                  :animate="{ opacity: hoveredSlug === post.slug ? 0 : 1, y: hoveredSlug === post.slug ? -8 : 0 }"
                  :transition="springTransition"
                >
                  <NuxtTime v-if="new Date(post.publishedAt).getFullYear() === new Date().getFullYear()" :datetime="post.publishedAt" month="short" day="numeric" />
                  <NuxtTime v-else :datetime="post.publishedAt" month="short" day="numeric" year="numeric" />
                  <address class="flex gap-[1ch] not-italic">
                    <span class="text-neutral-800">{{ page.grid.labelBy }}</span>
                    <span class="text-blue">{{ post.authors?.join(', ') || 'Team Nimiq' }}</span>
                  </address>
                </motion.div>
                <motion.div
                  class="absolute inset-0 flex items-center text-blue font-bold f-text-sm"
                  :animate="{ opacity: hoveredSlug === post.slug ? 1 : 0, y: hoveredSlug === post.slug ? 0 : 8 }"
                  :transition="springTransition"
                >
                  {{ page.grid.labelLearnMore }} →
                </motion.div>
              </div>
            </div>
          </NuxtLink>
        </article>

        <PaginationRoot class="mt-32 col-span-full" :page="pageIndex" :total="totalPages * itemsPerPage" :items-per-page="itemsPerPage" show-edges>
          <PaginationList v-slot="{ items }" class="flex gap-16 items-center justify-center">
            <PaginationPrev v-if="pageIndex > 1" class="pagination-item" as-child>
              <NuxtLink :to="pageIndex === 2 ? '/blog' : `/blog?page=${pageIndex - 1}`" aria-label="Previous page">
                <Icon class="text-[9px] opacity-70" name="nimiq:chevron-left" />
              </NuxtLink>
            </PaginationPrev>
            <span v-else class="pagination-item pagination-disabled" aria-hidden="true">
              <Icon class="text-[9px] opacity-70" name="nimiq:chevron-left" />
            </span>

            <template v-for="(pageItem, index) in items">
              <PaginationListItem v-if="pageItem.type === 'page'" :key="index" class="pagination-item" :value="pageItem.value" as-child>
                <NuxtLink :to="pageItem.value === 1 ? '/blog' : `/blog?page=${pageItem.value}`">
                  {{ pageItem.value }}
                </NuxtLink>
              </PaginationListItem>
              <PaginationEllipsis v-else :key="pageItem.type" class="pagination-item" :index="index">
                &#8230;
              </PaginationEllipsis>
            </template>

            <PaginationNext v-if="pageIndex < totalPages" class="pagination-item" as-child>
              <NuxtLink :to="`/blog?page=${pageIndex + 1}`" aria-label="Next page">
                <Icon class="text-[9px] opacity-70" name="nimiq:chevron-right" />
              </NuxtLink>
            </PaginationNext>
            <span v-else class="pagination-item pagination-disabled" aria-hidden="true">
              <Icon class="text-[9px] opacity-70" name="nimiq:chevron-right" />
            </span>
          </PaginationList>
        </PaginationRoot>
      </div>
    </section>

    <BannerNewsletter v-bind="page.newsletter" />
  </NuxtLayout>
</template>

<style scoped>
/* Masonry: progressive enhancement for browsers that support it */
@supports (grid-template-rows: masonry) {
  .blog-grid {
    grid-template-rows: masonry;
  }
}

@supports (display: grid-lanes) {
  .blog-grid {
    display: grid-lanes;
  }
}

.pagination-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 4px;
  background-color: var(--color-neutral-100);
  color: var(--color-neutral-900);
  font-size: 12px;
  font-weight: 600;
  box-shadow: 0 0 0 1.5px var(--color-neutral-400);
  transition-property: color, background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.pagination-item:hover,
.pagination-item:focus {
  background-color: var(--color-neutral-200);
}
.pagination-item[data-selected='true'] {
  background-color: var(--color-darkblue);
  color: white;
  box-shadow: none;
}
.pagination-disabled {
  opacity: 0.3;
  pointer-events: none;
  cursor: default;
}
</style>
