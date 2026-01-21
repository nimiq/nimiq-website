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
      <section class="bg-neutral-100 f-pt-3xl">
        <h1>{{ page.hero.title }}</h1>
        <p v-if="page.hero.description" class="text-neutral-800 f-mt-sm">
          {{ page.hero.description }}
        </p>
      </section>

      <section class="bg-neutral-100 f-pt-3xl">
        <div v-if="posts?.length" class="grid grid-cols-1 grid-lg:cols-2 grid-xl:cols-3 gap-4 w-full">
          <article v-for="(post, i) in posts" :key="post.slug" :class="pageIndex === 1 ? { 'md:first:col-span-2': true } : 'self-stretch'">
            <NuxtLink class="p-0 h-full relative nq-hoverable" :to="`/blog/${post.slug}`" @click="active = post.slug">
              <div class="p-1">
                <NuxtImg v-if="post.image" class="rounded-1.5 h-max w-full object-cover" :src="post.image" :alt="post.title" loading="lazy" :class="[i === 1 ? 'h-max lg:h-[280px]' : 'h-max', { 'view-transition-post-img contain-layout': active === post.slug }]" />
              </div>
              <div class="flex flex-col p-6 h-full">
                <h2 class="text-left" :class="[{ 'view-transition-post-title contain-layout': active === post.slug }, i === 0 ? 'f-text-3xl' : i === 1 ? 'f-text-2xl' : 'f-text-xl']">
                  {{ post.title }}
                </h2>
                <p class="mt-2 line-clamp-2 text-16 text-neutral-900 text-left">
                  {{ post.description }}
                </p>
                <div class="flex flex-items-center gap-x-4 flex-wrap text-12 text-neutral lh-[2] pt-4 gap-x-2 h-max nq-label nq-hoverable-cta" :style="`--content: '${page.grid.labelLearnMore}'`" :class="i === 1 ? 'mt-1' : 'mt-auto'" after="text-blue content-$content text-16">
                  <NuxtTime v-if="new Date(post.publishedAt).getFullYear() === new Date().getFullYear()" :datetime="post.publishedAt" month="short" day="numeric" />
                  <NuxtTime v-else :datetime="post.publishedAt" month="short" day="numeric" year="numeric" />
                  <address class="flex flex-gap-1ch not-italic">
                    <span class="text-neutral-800">{{ page.grid.labelBy }}</span>
                    <span class="text-blue">{{ post.authors?.join(', ') || 'Team Nimiq' }}</span>
                  </address>
                </div>
                <span class="sr-only">{{ page.grid.labelLearnMore }}</span>
              </div>
            </NuxtLink>
          </article>

          <PaginationRoot class="mt-8 col-span-full" :page="pageIndex" :total="totalPages * itemsPerPage" :items-per-page="itemsPerPage" show-edges>
            <PaginationList v-slot="{ items }" class="flex gap-4 flex-items-center flex-justify-center">
              <PaginationPrev class="pagination-item" as-child>
                <NuxtLink :to="pageIndex > 1 ? (pageIndex === 2 ? '/blog' : `/blog?page=${pageIndex - 1}`) : undefined">
                  <Icon class="text-9 op-70" name="nimiq:chevron-left" />
                </NuxtLink>
              </PaginationPrev>

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

              <PaginationNext class="pagination-item" as-child>
                <NuxtLink :to="pageIndex < totalPages ? `/blog?page=${pageIndex + 1}` : undefined">
                  <Icon class="text-9 op-70" name="nimiq:chevron-right" />
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
  --uno: 'rounded-1 size-8 shrink-0 bg-neutral-100 text-neutral-900 text-12 font-semibold hocus:bg-neutral-200 transition-colors ring-1.5 ring-neutral-400 flex items-center justify-center reka-selected:bg-blue reka-selected:text-white reka-selected:ring-none';
}
</style>
