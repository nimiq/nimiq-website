<script setup lang="ts">
import { filter } from '@prismicio/client'
import type { Content } from '@prismicio/client'
import type { BlogPageDocument } from '~~/prismicio-types'
import ArticleMetadata from '~/components/ArticleMetadata.vue'

const props = defineProps(getSliceComponentProps<Content.BlogpostsGridSlice>())
const { sectionRef } = useSlice(props.slice.id, 'grey')

const showDrafts = true // TODO Change this depending on the NODE_ENV

const { data } = usePrismicDocumentsByType<BlogPageDocument>('blog_page', {
  orderings: { field: 'my.blog_page.publish_date', direction: 'desc' },
  filters: showDrafts ? undefined : [filter.not('my.blog_page.draft', true)],
  pageSize: 20,
})
const posts = computed(() => data.value?.results || [])

function getAbstract(post: BlogPageDocument): string {
  const { prose } = useProse(post)
  return prose.value.slice(0, 120)
}
</script>

<template>
  <section v-if="posts.length > 0" ref="sectionRef" grid="~ cols-1 md:cols-2 lg:cols-3 gap-16">
    <article v-for="(post, i) in posts" :key="i" :class="{ 'md:self-end': i === 1, 'md:self-stretch': i > 1 }" md:first:col-span-2>
      <NuxtLink :to="post.uid" relative h-full nq-hoverable>
        <div v-if="post.data.draft" absolute right-12 top-12 ring="1.5 white" nq-pill-orange>
          <div i-nimiq:locked-lock />
          Draft
        </div>
        <div p-4>
          <PrismicImage :field="post.data.image" h-max w-full rounded-4 object-cover />
        </div>
        <div flex="~ col" h-full p-24>
          <PrismicText wrapper="h2" text-left :field="post.data.title" :style=" i === 0 ? '--font-size-min:30; --font-size-max:26' : '--font-size-min:20;--font-size-max:22'" />
          <p line-clamp-2 mt-8 text="16 neutral-900 left">
            {{ getAbstract(post) }}
          </p>
          <ArticleMetadata :date="new Date(post.data.publish_date!)" :authors="post.data.authors.map(a => a.name).join(', ')" mt-auto h-max gap-x-8 pt-16 />
        </div>
      </NuxtLink>
    </article>
  </section>
</template>
