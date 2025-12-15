<script setup lang="ts">
const { data: page } = await useAsyncData('about', () => queryCollection('about').first())
if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

const title = page.value.hero?.headline ? `${page.value.hero.headline} | Nimiq` : 'About Nimiq'
const description = page.value.hero?.subline || ''
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/about' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/about' }] })
</script>

<template>
  <NuxtLayout>
    <main v-if="page">
      <!-- Hero section -->
      <section v-if="page.hero" nq-section-gap bg-neutral-100>
        <HeroSimple :headline="page.hero.headline" :subline="page.hero.subline" />
      </section>

      <!-- Tilted Media (Video) -->
      <ContentTiltedMedia v-if="page.tilted_media" :video="page.tilted_media.video" :headline="page.tilted_media.headline" :poster="page.tilted_media.poster" />

      <!-- Take a deep dive -->
      <section v-if="page.simple_headline" nq-section-gap bg-neutral-100>
        <HeadlineSimple :headline="page.simple_headline.headline" :label="page.simple_headline.label" />
      </section>

      <!-- Grid links (whitepaper, onepager, etc) -->
      <section v-if="page.grid?.items" nq-section-gap bg-neutral-100>
        <GridSection :items="page.grid.items" variation="withBackground" />
      </section>

      <!-- Nimiq's Mission -->
      <section v-if="page.nimiq_s_mission_headline" nq-section-gap bg-neutral-0>
        <HeadlineSimple :headline="page.nimiq_s_mission_headline.headline" />
      </section>

      <!-- Rich text content -->
      <ContentRichText v-if="page.content" :rich-text="page.content.richText" :center-heading="page.content.centerHeading" />

      <!-- Meet the people -->
      <section v-if="page.meet_the_people_behi_headline" nq-section-gap bg-neutral-100>
        <HeadlineSimple :headline="page.meet_the_people_behi_headline.headline" />
      </section>

      <!-- Large grid (Team link) -->
      <section v-if="page.large_grid?.items" nq-section-gap bg-neutral-100>
        <GridLarge :items="page.large_grid.items" />
      </section>

      <!-- Roadmap -->
      <section v-if="page.roadmap_headline" nq-section-gap bg-neutral-100>
        <HeadlineSimple :headline="page.roadmap_headline.headline" :subline="page.roadmap_headline.subline" :links="page.roadmap_headline.links" />
      </section>

      <!-- Feedback -->
      <section v-if="page.feedback_headline" nq-section-gap bg-neutral-100>
        <HeadlineSimple :headline="page.feedback_headline.headline" :subline="page.feedback_headline.subline" :links="page.feedback_headline.links" />
      </section>
    </main>
  </NuxtLayout>
</template>
