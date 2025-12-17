<script setup lang="ts">
const route = useRoute()
const pageIndex = computed(() => Number(route.query.page) || 1)
const itemsPerPage = 25

const { data: pageData } = await useAsyncData('blog-page', () => queryCollection('blogPage').first())
if (!pageData.value)
  throw createError({ statusCode: 404, statusMessage: 'Blog page not found', fatal: true })

const page = pageData.value

const { data: totalCount } = await useAsyncData('blog-count', () => queryCollection('blog').count())
const totalPages = computed(() => Math.ceil((totalCount.value || 0) / itemsPerPage))

const { data: posts } = await useAsyncData(`blog-posts-${pageIndex.value}`, () =>
  queryCollection('blog')
    .select('title', 'slug', 'description', 'publishedAt', 'image', 'authors')
    .order('publishedAt', 'DESC')
    .skip((pageIndex.value - 1) * itemsPerPage)
    .limit(itemsPerPage)
    .all())

const active = useState('active-blog-post', () => '')

useHead({ title: pageIndex.value === 1 ? 'Blog' : `Blog - Page ${pageIndex.value}` })
useSeoMeta({ description: 'Latest articles and insights from the Nimiq team' })
</script>

<template>
  <NuxtLayout :dark-header="false" :show-socials-hexagon-bg="false" footer-bg-color="grey">
    <main>
      <section bg-neutral-100 f-pt-3xl>
        <h1>{{ page.hero.title }}</h1>
        <p v-if="page.hero.description" text-neutral-800 f-mt-sm>
          {{ page.hero.description }}
        </p>
      </section>

      <section bg-neutral-100 f-pt-3xl>
        <div v-if="posts?.length" grid="~ cols-1 lg:cols-2 xl:cols-3 gap-16" w-full>
          <article v-for="(post, i) in posts" :key="post.slug" :class="pageIndex === 1 ? { 'md:first:col-span-2': true } : 'self-stretch'">
            <NuxtLink :to="`/blog/${post.slug}`" p-0 h-full relative nq-hoverable @click="active = post.slug">
              <div p-4>
                <NuxtImg
                  v-if="post.image" :src="post.image" :alt="post.title" rounded-6 h-max w-full object-cover loading="lazy"
                  :class="[i === 1 ? 'h-max lg:h-280' : 'h-max', { 'view-transition-post-img contain-layout': active === post.slug }]"
                />
              </div>
              <div flex="~ col" p-24 h-full>
                <h2 text-left :class="[{ 'view-transition-post-title contain-layout': active === post.slug }, i === 0 ? 'f-text-3xl' : i === 1 ? 'f-text-2xl' : 'f-text-xl']">
                  {{ post.title }}
                </h2>
                <p mt-8 line-clamp-2 text="16 neutral-900 left">
                  {{ post.description }}
                </p>
                <div :style="`--content: '${page.grid.labelLearnMore}'`" :class="i === 1 ? 'mt-4' : 'mt-auto'" after="text-blue content-$content text-16" flex="~ items-center gap-x-16 wrap" text="12 neutral" lh="[2]" pt-16 gap-x-8 h-max nq-label nq-hoverable-cta>
                  <NuxtTime v-if="new Date(post.publishedAt).getFullYear() === new Date().getFullYear()" :datetime="post.publishedAt" month="short" day="numeric" />
                  <NuxtTime v-else :datetime="post.publishedAt" month="short" day="numeric" year="numeric" />
                  <address flex="~ gap-1ch" not-italic>
                    <span text-neutral-800>{{ page.grid.labelBy }}</span>
                    <span text-blue>{{ post.authors?.join(', ') || 'Team Nimiq' }}</span>
                  </address>
                </div>
                <span sr-only>{{ page.grid.labelLearnMore }}</span>
              </div>
            </NuxtLink>
          </article>

          <PaginationRoot :page="pageIndex" :total="totalPages * itemsPerPage" :items-per-page="itemsPerPage" show-edges mt-32 col-span-full>
            <PaginationList v-slot="{ items }" flex="~ gap-16 items-center justify-center">
              <PaginationPrev as-child class="pagination-item">
                <NuxtLink :to="pageIndex > 1 ? (pageIndex === 2 ? '/blog' : `/blog?page=${pageIndex - 1}`) : undefined">
                  <Icon name="nimiq:chevron-left" class="text-9 op-70" />
                </NuxtLink>
              </PaginationPrev>

              <template v-for="(pageItem, index) in items">
                <PaginationListItem v-if="pageItem.type === 'page'" :key="index" :value="pageItem.value" as-child class="pagination-item">
                  <NuxtLink :to="pageItem.value === 1 ? '/blog' : `/blog?page=${pageItem.value}`">
                    {{ pageItem.value }}
                  </NuxtLink>
                </PaginationListItem>
                <PaginationEllipsis v-else :key="pageItem.type" :index="index" class="pagination-item">
                  &#8230;
                </PaginationEllipsis>
              </template>

              <PaginationNext as-child class="pagination-item">
                <NuxtLink :to="pageIndex < totalPages ? `/blog?page=${pageIndex + 1}` : undefined">
                  <Icon name="nimiq:chevron-right" class="text-9 op-70" />
                </NuxtLink>
              </PaginationNext>
            </PaginationList>
          </PaginationRoot>
        </div>
      </section>

      <BannerNewsletter :cta="page.newsletter.cta" />
    </main>
  </NuxtLayout>
</template>

<style scoped>
.pagination-item {
  --uno: 'rounded-4 size-32 shrink-0 bg-neutral-100 text-neutral-900 text-12 font-semibold hocus:bg-neutral-200 transition-colors ring-1.5 ring-neutral-400 flex items-center justify-center reka-selected:bg-blue reka-selected:text-white reka-selected:ring-none';
}
</style>
