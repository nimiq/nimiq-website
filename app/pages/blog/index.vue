<script setup lang="ts">
import type { BlogPageDocument } from '~~/prismicio-types'
import { filter } from '@prismicio/client'
import { getBlogMetadata } from '~~/shared/utils/blog-post'

const route = useRoute()
const router = useRouter()
const page = ref(Number(route.query.page) || 1)

// Configuration
const itemsPerPage = 25
const { showDrafts } = useRuntimeConfig().public

// Watch for query param changes
watch(() => route.query.page, (val) => {
  page.value = Number(val) || 1
})

// Update URL when page changes
watch(page, (val) => {
  router.replace({ query: { ...route.query, page: val !== 1 ? val : undefined } })
  if (import.meta.client) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
})

const { client } = usePrismic()
const { data: result } = await useAsyncData(`blog-posts-page-${page.value}`, async () => {
  return await client.getByType('blog_page', {
    orderings: { field: 'my.blog_page.publish_date', direction: 'desc' },
    filters: showDrafts ? undefined : [filter.not('my.blog_page.draft', true)],
    pageSize: itemsPerPage,
    page: page.value,
  })
}, {
  server: true,
  watch: [page],
})

const posts = computed(() => {
  if (!result.value?.results)
    return []
  return result.value.results.map(r => getBlogMetadata(r as BlogPageDocument))
})

const totalPages = computed(() => result.value?.total_pages ?? 1)

// SEO
useHead({
  title: page.value === 1 ? 'Blog' : `Blog - Page ${page.value}`,
  meta: [
    { name: 'description', content: 'Latest articles and insights from the Nimiq team' },
  ],
})
</script>

<template>
  <div>
    <header py-32>
      <h1 text-4xl font-bold text-center>
        Blog
      </h1>
      <p text-muted-foreground mt-4 text-center>
        Latest articles and insights from the Nimiq team
      </p>
    </header>

    <main>
      <div v-if="posts.length > 0" grid="~ cols-1 lg:cols-2 xl:cols-3 gap-16" mx-auto px-16 w-full max-w-screen-xl>
        <article
          v-for="({ uid, href, draft, image, hasImage, title, abstract, date, authors }, i) in posts"
          :key="uid"
          :class="page === 1 ? { 'md:first:col-span-2': true } : 'self-stretch'"
        >
          <NuxtLink :to="href" p-0 h-full relative nq-hoverable>
            <PageInfo :draft right-12 top-12 absolute z-10 />
            <div p-4>
              <PrismicImage
                v-if="hasImage"
                :field="image"
                rounded-6
                h-max
                w-full
                object-cover
                :class="[i === 0 ? 'h-max lg:h-280' : 'h-max']"
                loading="lazy"
              />
              <div v-else-if="showDrafts" text-green-400 py-64 rounded-4 flex-1 size-full bg-gradient-green grid="~ place-content-center">
                <div flex="~ items-center gap-12">
                  <div text-32 op-70 i-nimiq:tools-wench-hammer />
                  <p font-bold f-text-xl>
                    Image not found
                  </p>
                </div>
                <p font-semibold mt-8 op-80 max-w-40ch>
                  Something great is being redacted just right now and there is no image yet. 🤫
                </p>
                <p op-70 italic f-text-2xs f-mt-2xs>
                  This is a development-only message.
                </p>
              </div>
            </div>
            <div flex="~ col" p-24 h-full>
              <PrismicRichText
                wrapper="h2"
                text-left
                :field="title"
                :class="{ 'f-text-3xl': i === 0, 'f-text-2xl': i === 1, 'f-text-xl': i > 1 }"
              />
              <p mt-8 line-clamp-2 text="16 neutral-900 left">
                {{ abstract }}
              </p>
              <ArticleMetadata
                style="--content: 'Learn more'"
                :class="i === 1 ? 'mt-4' : 'mt-auto'"
                after="text-blue content-$content text-16"
                :date
                :authors="authors.join(', ')"
                pt-16
                gap-x-8
                h-max
                nq-hoverable-cta
              />
              <span sr-only>Learn more</span>
            </div>
          </NuxtLink>
        </article>
      </div>

      <!-- Pagination -->
      <nav v-if="totalPages > 1" aria-label="Blog pagination" py-32>
        <PaginationRoot v-model:page="page" :total="totalPages * itemsPerPage" :items-per-page="itemsPerPage" show-edges>
          <PaginationList v-slot="{ items }" flex="~ gap-16 items-center justify-center">
            <PaginationPrev class="item">
              <div text-9 op-70 i-nimiq:chevron-left />
            </PaginationPrev>
            <template v-for="(pageItem, index) in items">
              <PaginationListItem v-if="pageItem.type === 'page'" :key="index" class="item" :value="pageItem.value">
                {{ pageItem.value }}
              </PaginationListItem>
              <PaginationEllipsis v-else :key="pageItem.type" :index="index" class="item">
                &#8230;
              </PaginationEllipsis>
            </template>
            <PaginationNext class="item">
              <div text-9 op-70 i-nimiq:chevron-right />
            </PaginationNext>
          </PaginationList>
        </PaginationRoot>
      </nav>
    </main>
  </div>
</template>

<style scoped>
.item {
  --uno: 'rounded-4 size-32 shrink-0 bg-neutral-100 text-neutral-900 text-12 font-semibold hocus:bg-neutral-200 transition-colors ring-1.5 ring-neutral-400 flex items-center justify-center';
  &[data-selected] {
    --uno: 'bg-blue text-white ring-none';
  }
}
</style>
