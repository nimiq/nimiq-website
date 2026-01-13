<script setup lang="ts">
const page = await queryCollection('about').first()!
const missionContent = await parseMarkdown(page.mission.content)

const title = page.seo?.title || page.hero?.title || 'About Nimiq'
const description = page.seo?.description || page.hero?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/about' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/about' }] })
</script>

<template>
  <NuxtLayout show-socials-hexagon-bg>
    <section bg-neutral-100 relative>
      <Hero v-bind="page.hero" />
    </section>
    <TiltedMedia v-bind="page.media" />

    <section nq-section-gap bg-neutral-100>
      <Headline v-bind="page.dive.headline" small-heading />
      <GridLinks :items="page.dive.items" />
    </section>

    <section nq-section-gap bg-neutral-0>
      <Headline :headline="page.mission.headline" compact />
      <ContentRenderer :value="missionContent" tag="article" nq-prose text-neutral-900 children:mx-auto children:max-w-prose />
    </section>

    <section nq-section-gap bg-neutral-100>
      <Headline v-bind="page.team.headline" />
      <GridLarge :items="page.team.items" />
    </section>

    <section nq-section-gap bg-neutral-100>
      <Headline v-bind="page.roadmap" />
    </section>

    <section nq-section-gap bg-neutral-100>
      <Headline v-bind="page.feedback" />
    </section>
  </NuxtLayout>
</template>
