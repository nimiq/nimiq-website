<script setup lang="ts">
interface BlogpostsGridSlice {
  primary: {
    labelLearnMore: string | undefined
  }
}

const { slice } = defineProps<{ slice: BlogpostsGridSlice, slices?: any[] }>()

const itemsPerPage = 25
const route = useRoute()
const page = computed(() => Number(route.query.page) || 1)
const { showDrafts } = useRuntimeConfig().public

const { data: blogPosts } = await useBlogPosts({
  orderings: { field: 'my.blog_page.publish_date', direction: 'desc' },
  pageSize: 100,
})

const allPosts = computed(() => {
  if (!blogPosts.value)
    return []
  return blogPosts.value.map(r => getBlogMetadata(r))
})

const totalPages = computed(() => Math.ceil(allPosts.value.length / itemsPerPage))

const posts = computed(() => {
  if (!allPosts.value.length)
    return []

  const startIndex = (page.value - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  return allPosts.value.slice(startIndex, endIndex)
})

const active = useState('active-blog-post', () => '')
</script>

<template>
  <section bg-neutral-100 f-pt-3xl>
    <div v-if="posts.length > 0" grid="~ cols-1 lg:cols-2 xl:cols-3 gap-16" w-full>
      <article
        v-for="({ uid, href, draft, image, hasImage, title, abstract, date, authors }, i) in posts" :key="uid"
        :class="page === 1 ? { 'md:first:col-span-2': true } : 'self-stretch'"
      >
        <NuxtLink :to="href" p-0 h-full relative nq-hoverable @click="active = uid">
          <PageInfo :draft right-12 top-12 absolute z-10 />
          <div p-4>
            <ProxiedPrismicImage
              v-if="hasImage" :field="image" rounded-6 h-max w-full object-cover
              :class="[i === 1 ? 'h-max lg:h-280' : 'h-max', { 'view-transition-post-img contain-layout': active === uid }]"
              loading="lazy"
            />
            <div
              v-else-if="showDrafts" text-green-400 py-64 rounded-4 flex-1 size-full bg-gradient-green
              grid="~ place-content-center"
            >
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
            <PrismicText
              wrapper="h2" text-left :field="title"
              :class="{ 'view-transition-post-title contain-layout': active === uid, 'f-text-3xl': i === 0, 'f-text-2xl': i === 1, 'f-text-xl': i > 1 }"
            />

            <p mt-8 line-clamp-2 text="16 neutral-900 left">
              {{ abstract }}
            </p>
            <ArticleMetadata
              :style="`--content: '${slice.primary.labelLearnMore}'`"
              :class="i === 1 ? 'mt-4' : 'mt-auto'" after="text-blue content-$content text-16" :date
              :authors="authors.join(', ')" pt-16 gap-x-8 h-max nq-hoverable-cta
            />
            <span sr-only>{{ slice.primary.labelLearnMore }}</span>
          </div>
        </NuxtLink>
      </article>
      <PaginationRoot
        :page :total="totalPages * itemsPerPage" :items-per-page="itemsPerPage" show-edges mt-32
        col-span-full
      >
        <PaginationList v-slot="{ items }" flex="~ gap-16 items-center justify-center">
          <PaginationPrev as-child class="item">
            <NuxtLink :to="page > 1 ? (page === 2 ? '/blog' : `/blog?page=${page - 1}`) : undefined">
              <div text-9 op-70 i-nimiq:chevron-left />
            </NuxtLink>
          </PaginationPrev>

          <template v-for="(pageItem, index) in items">
            <PaginationListItem v-if="pageItem.type === 'page'" :key="index" :value="pageItem.value" as-child class="item">
              <NuxtLink :to="pageItem.value === 1 ? '/blog' : `/blog?page=${pageItem.value}`">
                {{ pageItem.value }}
              </NuxtLink>
            </PaginationListItem>
            <PaginationEllipsis v-else :key="pageItem.type" :index="index" class="item">
              &#8230;
            </PaginationEllipsis>
          </template>

          <PaginationNext as-child class="item">
            <NuxtLink :to="page < totalPages ? `/blog?page=${page + 1}` : undefined">
              <div text-9 op-70 i-nimiq:chevron-right />
            </NuxtLink>
          </PaginationNext>
        </PaginationList>
      </PaginationRoot>
    </div>
  </section>
</template>

<style scoped>
.item {
  --uno: 'rounded-4 size-32 shrink-0 bg-neutral-100 text-neutral-900 text-12 font-semibold hocus:bg-neutral-200 transition-colors ring-1.5 ring-neutral-400 flex items-center justify-center';

  &[data-selected] {
    --uno: 'bg-blue text-white ring-none';
  }
}
</style>
