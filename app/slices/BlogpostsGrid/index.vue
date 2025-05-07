<script setup lang="ts">
import type { Content } from '@prismicio/client'
import { filter } from '@prismicio/client'
import ArticleMetadata from '~/components/ArticleMetadata.vue'

defineProps(getSliceComponentProps<Content.BlogpostsGridSlice>())

const showDrafts = import.meta.dev // TODO Change this depending on the NODE_ENV

const itemsPerPage = 25
const page = useRouteQuery<number>('page', 1, { transform: Number })

const { client } = usePrismic()

const { data: result } = await useAsyncData('blog_posts', async () => {
  return await client.getByType('blog_page', {
    orderings: { field: 'my.blog_page.publish_date', direction: 'desc' },
    filters: showDrafts ? undefined : [filter.not('my.blog_page.draft', true)],
    pageSize: itemsPerPage,
    page: page.value,
  })
}, { watch: [page] })
if (!result.value || result.value.results.length === 0)
  throw new Error('No blog posts found')
const { results, total_pages: totalPages } = result.value
const posts = results.map(useProse)

const active = useState()
const isDev = import.meta.dev
</script>

<template>
  <section bg-neutral-100>
    <div grid="~ cols-1 lg:cols-2 xl:cols-3 gap-16" w-full>
      <article v-for="({ uid, href, draft, image, hasImage, title, abstract, publishDate, authors }, i) in posts" :key="uid" :class="page === 1 ? { 'md:self-end': i === 1, 'md:self-stretch': i > 1, 'md:first:col-span-2': true } : 'self-stretch'">
        <NuxtLink :to="href" relative h-full p-0 nq-hoverable @click="active = uid">
          <PageInfo :draft absolute right-12 top-12 />
          <div p-4>
            <PrismicImage v-if="hasImage" :field="image" h-max w-full rounded-6 object-cover :class="{ 'view-transition-post-img contain-layout': active === uid }" />
            <div v-else-if="isDev" size-full flex-1 rounded-4 py-64 text-green-400 bg-gradient-green grid="~ place-content-center">
              <div flex="~ items-center gap-12">
                <div text-32 op-70 i-nimiq:tools-wench-hammer />

                <p font-bold f-text-xl>
                  Image not found
                </p>
              </div>
              <p mt-8 max-w-40ch font-semibold op-80>
                Something great is being redacted just right now and there is no image yet. 🤫
              </p>
              <p italic op-70 f-text-2xs f-mt-2xs>
                This is a development-only message.
              </p>
            </div>
          </div>
          <div flex="~ col" h-full p-24>
            <PrismicText
              wrapper="h2" text-left :field="title" :style=" i === 0 ? '--nq-font-size-min:30; --nq-font-size-max:26' : '--nq-font-size-min:20;--nq-font-size-max:22'"
              :class="{ 'view-transition-post-title contain-layout': active === uid }"
            />

            <p line-clamp-2 mt-8 text="16 neutral-900 left">
              {{ abstract }}
            </p>
            <ArticleMetadata :style="`--content: '${slice.primary.labelLearnMore}'`" after="text-blue content-$content text-16" :date="new Date(publishDate)" :authors="authors.map(a => a.name).join(', ')" mt-auto h-max gap-x-8 pt-16 nq-hoverable-cta />
            <span sr-only>{{ slice.primary.labelLearnMore }}</span>
          </div>
        </NuxtLink>
      </article>
      <PaginationRoot v-model:page="page" :total="totalPages * itemsPerPage" :items-per-page show-edges col-span-full mt-32>
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
