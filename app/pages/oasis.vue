<script setup lang="ts">
const { data: page } = await useAsyncData('oasis', () => queryCollection('oasis').first())
if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

const title = page.value.hero?.headline ? `${page.value.hero.headline} | Nimiq` : 'OASIS | Nimiq'
const description = page.value.hero?.subline || ''
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/oasis' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/oasis' }] })
</script>

<template>
  <NuxtLayout>
    <main v-if="page">
      <section v-if="page.hero" nq-section-gap bg-neutral-100>
        <HeroSimple :headline="page.hero.headline" :subline="page.hero.subline" />
      </section>

      <section v-if="page.hero_2" nq-section-gap bg-neutral-0>
        <HeroSimple :headline="page.hero_2.headline" :subline="page.hero_2.subline" />
      </section>

      <section v-if="page.simple_headline" nq-section-gap bg-neutral-100>
        <HeadlineSimple :headline="page.simple_headline.headline" :subline="page.simple_headline.subline" />
      </section>

      <section v-if="page.large_grid?.items" nq-section-gap bg-neutral-100>
        <GridLarge :items="page.large_grid.items" />
      </section>

      <section v-if="page.how_does_it_work_headline" nq-section-gap bg-neutral-100>
        <HeadlineSimple :headline="page.how_does_it_work_headline.headline" :subline="page.how_does_it_work_headline.subline" />
      </section>

      <section v-if="page.youtube" nq-section-gap bg-neutral-100>
        <ContentYouTube :embed-url="page.youtube.embedUrl" :title="page.youtube.title" />
      </section>

      <section v-if="page.oasis_is_an_open_tec_headline" nq-section-gap bg-neutral-0>
        <HeadlineSimple :headline="page.oasis_is_an_open_tec_headline.headline" :subline="page.oasis_is_an_open_tec_headline.subline" />
      </section>

      <section v-if="page.collaborate_with_nim_headline" nq-section-gap bg-neutral-0>
        <HeadlineSimple :headline="page.collaborate_with_nim_headline.headline" :subline="page.collaborate_with_nim_headline.subline" />
      </section>

      <section v-if="page.contact" nq-section-gap bg-neutral-0>
        <ContactForm :data="page.contact" />
      </section>
    </main>
  </NuxtLayout>
</template>
