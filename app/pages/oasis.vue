<script setup lang="ts">
const { data } = await useAsyncData('oasis', () => queryCollection('oasis').first())
if (!data.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

const page = data.value
const title = `${page.hero.headline} | Nimiq`
const description = page.hero.subline
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/oasis' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/oasis' }] })
</script>

<template>
  <NuxtLayout>
    <main>
      <section nq-section-gap bg-neutral-100>
        <Hero v-bind="page.hero" />
      </section>

      <section nq-section-gap bg-neutral-0>
        <Hero v-bind="page.secondHero" />
      </section>

      <section nq-section-gap bg-neutral-100>
        <Headline v-bind="page.about.headline" />
      </section>

      <section nq-section-gap bg-neutral-100>
        <GridLarge :items="page.about.items" />
      </section>

      <section nq-section-gap bg-neutral-100>
        <Headline v-bind="page.howItWorks.headline" />
      </section>

      <section nq-section-gap bg-neutral-100>
        <ContentYouTube :embed-url="page.howItWorks.embedUrl" :title="page.howItWorks.title" />
      </section>

      <section nq-section-gap bg-neutral-0>
        <Headline v-bind="page.openTech" />
      </section>

      <section nq-section-gap bg-neutral-0>
        <Headline v-bind="page.collaborate" />
      </section>

      <section nq-section-gap bg-neutral-0>
        <ContactForm :data="page.form" />
      </section>
    </main>
  </NuxtLayout>
</template>
