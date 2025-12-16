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

      <section v-if="page.hero2" nq-section-gap bg-neutral-0>
        <HeroSimple :headline="page.hero2.headline" :subline="page.hero2.subline" />
      </section>

      <section v-if="page.simpleHeadline" nq-section-gap bg-neutral-100>
        <HeadlineSimple :headline="page.simpleHeadline.headline" :subline="page.simpleHeadline.subline" />
      </section>

      <section v-if="page.largeGrid?.items" nq-section-gap bg-neutral-100>
        <GridLarge :items="page.largeGrid.items" />
      </section>

      <section v-if="page.howDoesItWorkHeadline" nq-section-gap bg-neutral-100>
        <HeadlineSimple :headline="page.howDoesItWorkHeadline.headline" :subline="page.howDoesItWorkHeadline.subline" />
      </section>

      <section v-if="page.youtube" nq-section-gap bg-neutral-100>
        <ContentYouTube :embed-url="page.youtube.embedUrl" :title="page.youtube.title" />
      </section>

      <section v-if="page.oasisIsAnOpenTecHeadline" nq-section-gap bg-neutral-0>
        <HeadlineSimple :headline="page.oasisIsAnOpenTecHeadline.headline" :subline="page.oasisIsAnOpenTecHeadline.subline" />
      </section>

      <section v-if="page.collaborateWithNimHeadline" nq-section-gap bg-neutral-0>
        <HeadlineSimple :headline="page.collaborateWithNimHeadline.headline" :subline="page.collaborateWithNimHeadline.subline" />
      </section>

      <section v-if="page.contact" nq-section-gap bg-neutral-0>
        <ContactForm :data="page.contact" />
      </section>
    </main>
  </NuxtLayout>
</template>
