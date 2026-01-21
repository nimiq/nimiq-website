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
    <section class="bg-neutral-100 relative">
      <Hero v-bind="page.hero" />
    </section>
    <TiltedMedia v-bind="page.media" />

    <section class="nq-section-gap bg-neutral-100">
      <Headline v-bind="page.dive.headline" small-heading />
      <GridLinks :items="page.dive.items" />
    </section>

    <section class="nq-section-gap bg-neutral-0">
      <Headline :headline="page.mission.headline" compact />
      <ContentRenderer class="nq-prose text-neutral-900" :value="missionContent" tag="article" children:mx-auto children:max-w-prose />
    </section>

    <section class="nq-section-gap bg-neutral-100">
      <Headline v-bind="page.team.headline" />
      <GridLarge :items="page.team.items" />
    </section>

    <section class="nq-section-gap bg-neutral-100">
      <Headline v-bind="page.roadmap" />
    </section>

    <section class="nq-section-gap bg-neutral-100">
      <Headline v-bind="page.feedback" />
    </section>
  </NuxtLayout>
</template>
