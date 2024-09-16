<script setup lang="ts">
import type { Content } from '@prismicio/client'
import type { BlogPageDocument } from '~~/prismicio-types'
import { filter } from '@prismicio/client'
import ArticleMetadata from '~/components/ArticleMetadata.vue'

const props = defineProps(getSliceComponentProps<Content.BlogpostsGridSlice>())
const { sectionRef } = useSlice(props.slice.id, 'grey')

const showDrafts = true // TODO Change this depending on the NODE_ENV

const itemsPerPage = 25
const page = useRouteQuery<number>('page', 1, { transform: Number })

const { client } = usePrismic()

const { data: result } = useAsyncData('blog_posts', async () => {
  return await client.getByType('blog_page', {
    orderings: { field: 'my.blog_page.publish_date', direction: 'desc' },
    filters: showDrafts ? undefined : [filter.not('my.blog_page.draft', true)],
    pageSize: itemsPerPage,
    page: page.value,
  })
}, { watch: [page] })
const posts = computed(() => result.value?.results ?? [])
const totalPages = computed(() => result.value?.total_pages ?? 0)

function getAbstract(post: BlogPageDocument): string {
  const { prose } = useProse(post)
  return prose.value.slice(0, 120)
}

const active = useState()
</script>

<template>
  <section ref="sectionRef" grid="~ cols-1 md:cols-2 lg:cols-3 gap-16">
    <article v-for="(post, i) in posts" :key="post.id" :class="page === 1 ? { 'md:self-end': i === 1, 'md:self-stretch': i > 1, 'md:first:col-span-2': true } : 'self-stretch'">
      <NuxtLink :to="`/blog/${post.uid}`" relative h-full nq-hoverable @click="active = post.uid">
        <div v-if="post.data.draft" absolute right-12 top-12 ring="1.5 white" nq-pill-orange>
          <div i-nimiq:locked-lock />
          Draft
        </div>
        <div p-4>
          <PrismicImage :field="post.data.image" h-max w-full rounded-4 object-cover :class="{ 'view-transition-post-img contain-layout': active === post.uid }" />
        </div>
        <div flex="~ col" h-full p-24>
          <PrismicText
            wrapper="h2" text-left :field="post.data.title" :style=" i === 0 ? '--font-size-min:30; --font-size-max:26' : '--font-size-min:20;--font-size-max:22'"
            :class="{ 'view-transition-post-title contain-layout': active === post.uid }"
          />

          <p line-clamp-2 mt-8 text="16 neutral-900 left">
            {{ getAbstract(post) }}
          </p>
          <ArticleMetadata :style="`--content: '${slice.primary.labelLearnMore}'`" after="text-blue content-$content text-16" :date="new Date(post.data.publish_date!)" :authors="post.data.authors.map(a => a.name).join(', ')" mt-auto h-max gap-x-8 pt-16 nq-hoverable-cta />
          <span sr-only>{{ slice.primary.labelLearnMore }}</span>
        </div>
      </NuxtLink>
    </article>
    <PaginationRoot v-model:page="page" :total="totalPages * itemsPerPage" :items-per-page show-edges col-span-full mt-32>
      <PaginationList v-slot="{ items }" flex="~ gap-16 items-center justify-center">
        <PaginationPrev class="item">
          <div i-nimiq:chevron-left text-9 op-70 />
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
          <div i-nimiq:chevron-right text-9 op-70 />
        </PaginationNext>
      </PaginationList>
    </PaginationRoot>
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
