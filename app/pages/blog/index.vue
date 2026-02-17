<script setup lang="ts">
const route = useRoute()
const pageIndex = computed(() => Number(route.query.page) || 1)
const itemsPerPage = 25

const page = await usePrerenderData('blog-page', () => queryCollection('blogPage').first())
if (!page)
  throw createError({ statusCode: 404, statusMessage: 'Blog page not found', fatal: true })

const posts = await usePrerenderData('blog-posts-all', () =>
  queryCollection('blog')
    .select('title', 'slug', 'description', 'publishedAt', 'image', 'authors')
    .order('publishedAt', 'DESC')
    .all())
const totalPages = computed(() => Math.ceil((posts.length || 0) / itemsPerPage))
const paginatedPosts = computed(() => {
  const start = (pageIndex.value - 1) * itemsPerPage
  return posts.slice(start, start + itemsPerPage)
})

const active = useState('active-blog-post', () => '')

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
      <div v-if="paginatedPosts.length" class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16 w-full">
        <article v-for="(post, i) in paginatedPosts" :key="post.slug" :class="pageIndex === 1 ? { 'md:first:col-span-2': true } : 'self-stretch'">
          <NuxtLink class="p-0 h-full relative nq-hoverable" :to="`/blog/${post.slug}`" @click="active = post.slug">
            <div class="p-4">
              <NuxtImg v-if="post.image" class="rounded-6 w-full object-cover" :src="post.image" :alt="post.title" loading="lazy" :class="[i === 1 && pageIndex === 1 ? 'h-max lg:h-[280px]' : 'h-max', { 'view-transition-post-img contain-layout': active === post.slug }]" />
            </div>
            <div class="flex flex-col p-24 h-full">
              <h2 class="text-left" :class="[{ 'view-transition-post-title contain-layout': active === post.slug }, i === 0 && pageIndex === 1 ? 'f-text-3xl' : (i === 1 && pageIndex === 1) ? 'f-text-2xl' : 'f-text-xl']">
                {{ post.title }}
              </h2>
              <p class="mt-8 line-clamp-2 text-16 text-neutral-900 text-left">
                {{ post.description }}
              </p>
              <div class="flex items-center gap-x-16 flex-wrap text-12 text-neutral leading-[2] pt-16 h-max nq-label nq-hoverable-cta" :style="`--nq-content: '${page.grid.labelLearnMore}'`" :class="i === 1 ? 'mt-4' : 'mt-auto'">
                <NuxtTime v-if="new Date(post.publishedAt).getFullYear() === new Date().getFullYear()" :datetime="post.publishedAt" month="short" day="numeric" />
                <NuxtTime v-else :datetime="post.publishedAt" month="short" day="numeric" year="numeric" />
                <address class="flex gap-[1ch] not-italic">
                  <span class="text-neutral-800">{{ page.grid.labelBy }}</span>
                  <span class="text-blue">{{ post.authors?.join(', ') || 'Team Nimiq' }}</span>
                </address>
              </div>
              <span class="sr-only">{{ page.grid.labelLearnMore }}</span>
            </div>
          </NuxtLink>
        </article>

        <PaginationRoot class="mt-32 col-span-full" :page="pageIndex" :total="totalPages * itemsPerPage" :items-per-page="itemsPerPage" show-edges>
          <PaginationList v-slot="{ items }" class="flex gap-16 items-center justify-center">
            <PaginationPrev class="pagination-item" as-child>
              <NuxtLink :to="pageIndex > 1 ? (pageIndex === 2 ? '/blog' : `/blog?page=${pageIndex - 1}`) : undefined">
                <Icon class="text-[9px] opacity-70" name="nimiq:chevron-left" />
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
                <Icon class="text-[9px] opacity-70" name="nimiq:chevron-right" />
              </NuxtLink>
            </PaginationNext>
          </PaginationList>
        </PaginationRoot>
      </div>
    </section>

    <BannerNewsletter :cta="page.newsletter.cta" />
  </NuxtLayout>
</template>

<style scoped>
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
.pagination-item[data-state='on'] {
  background-color: var(--color-blue);
  color: white;
  box-shadow: none;
}
</style>
