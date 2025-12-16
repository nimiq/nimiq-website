<script setup lang="ts">
const { data: page } = await useAsyncData('about', () => queryCollection('about').first())
if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

const title = page.value.hero?.headline ? `${page.value.hero.headline} | Nimiq` : 'About Nimiq'
const description = page.value.hero?.subline || ''
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/about' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/about' }] })

// Colors defined in page, not in content
const gridColors = ['var(--colors-orange)', 'var(--colors-purple)', 'var(--colors-red)']
const largeGridColors = ['var(--colors-blue)']

const gridItemsWithColors = computed(() => page.value?.grid?.items.map((item, i) => ({ ...item, color: gridColors[i] })) || [])
const largeGridItemsWithColors = computed(() => page.value?.largeGrid?.items.map((item, i) => ({ ...item, color: largeGridColors[i] })) || [])
</script>

<template>
  <NuxtLayout>
    <main v-if="page">
      <!-- Hero section -->
      <section v-if="page.hero" nq-section-gap bg-neutral-100>
        <HeroSimple :headline="page.hero.headline" :subline="page.hero.subline" />
      </section>

      <!-- Tilted Media (Video) -->
      <ContentTiltedMedia v-if="page.tiltedMedia" :video="page.tiltedMedia.video" :headline="page.tiltedMedia.headline" :poster="page.tiltedMedia.poster" />

      <!-- Take a deep dive -->
      <section v-if="page.simpleHeadline" nq-section-gap bg-neutral-100>
        <HeadlineSimple :headline="page.simpleHeadline.headline" :label="page.simpleHeadline.label" />
      </section>

      <!-- Grid links (whitepaper, onepager, etc) -->
      <section v-if="page.grid?.items" nq-section-gap bg-neutral-100>
        <GridLinks :items="gridItemsWithColors" />
      </section>

      <!-- Nimiq's Mission -->
      <section v-if="page.nimiqSMissionHeadline" nq-section-gap bg-neutral-0>
        <HeadlineSimple :headline="page.nimiqSMissionHeadline.headline" />
      </section>

      <!-- Rich text content -->
      <ContentRichText v-if="page.content" :rich-text="page.content.richText" :center-heading="page.content.centerHeading" />

      <!-- Meet the people -->
      <section v-if="page.meetThePeopleBehiHeadline" nq-section-gap bg-neutral-100>
        <HeadlineSimple :headline="page.meetThePeopleBehiHeadline.headline" />
      </section>

      <!-- Large grid (Team link) -->
      <section v-if="page.largeGrid?.items" nq-section-gap bg-neutral-100>
        <GridLarge :items="largeGridItemsWithColors" />
      </section>

      <!-- Roadmap -->
      <section v-if="page.roadmapHeadline" nq-section-gap bg-neutral-100>
        <HeadlineSimple :headline="page.roadmapHeadline.headline" :subline="page.roadmapHeadline.subline" :links="page.roadmapHeadline.links" />
      </section>

      <!-- Feedback -->
      <section v-if="page.feedbackHeadline" nq-section-gap bg-neutral-100>
        <HeadlineSimple :headline="page.feedbackHeadline.headline" :subline="page.feedbackHeadline.subline" :links="page.feedbackHeadline.links" />
      </section>
    </main>
  </NuxtLayout>
</template>
