<script setup lang="ts">
const { data } = await useAsyncData('about', () => queryCollection('about').first())
if (!data.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

const page = data.value
const { data: missionData } = await useAsyncData('about-mission', () => parseMarkdown(page.mission))
const missionContent = missionData.value!

const title = 'About Nimiq'
const description = page.hero.subline
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/about' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/about' }] })
</script>

<template>
  <NuxtLayout show-socials-hexagon-bg>
    <main>
      <section nq-section-gap bg-neutral-0>
        <Hero v-bind="{ headline: page.hero.headline, subline: page.hero.subline }" />
        <ContentTiltedMedia v-bind="page.media" :overlaps-next-section="false" />
      </section>

      <section nq-section-gap bg-neutral-0>
        <Headline v-bind="page.dive.headline" />
        <GridLinks :items="page.dive.items" />
      </section>

      <section nq-section-gap bg-neutral-100>
        <ContentRenderer :value="missionContent" tag="article" f-prose text-neutral-900 children:mx-auto children:max-w-prose />
      </section>

      <section nq-section-gap bg-neutral-0>
        <Headline v-bind="page.team.headline" />
        <GridLarge :items="page.team.items" />
      </section>

      <section nq-section-gap bg-neutral-0>
        <Headline v-bind="page.roadmap" />
      </section>

      <section nq-section-gap dark bg-darkblue scheme-dark>
        <Headline v-bind="page.feedback" />
      </section>
    </main>
  </NuxtLayout>
</template>
