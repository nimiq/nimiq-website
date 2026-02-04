<script setup lang="ts">
const page = await usePage('about')
const missionContent = await parseMarkdown(page.mission.content)

const title = page.seo?.title || page.hero?.title || 'About Nimiq'
const description = page.seo?.description || page.hero?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/about' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/about' }] })
</script>

<template>
  <NuxtLayout show-socials-hexagon-bg>
    <section class="bg-neutral-100 about-hero">
      <Hero v-bind="page.hero" />
    </section>
    <TiltedMedia v-bind="page.media" />

    <section class="bg-neutral-100" nq-section-gap>
      <Headline v-bind="page.dive.headline" small-heading />
    </section>

    <section class="bg-neutral-100">
      <GridLinks :items="page.dive.items" />
    </section>

    <section class="bg-neutral-0" nq-section-gap>
      <Headline :headline="page.mission.headline" compact />
    </section>

    <section class="bg-neutral-0">
      <ContentRenderer class="nq-prose" :value="missionContent" tag="article" children:mx-auto children:max-w-prose />
    </section>

    <section class="bg-neutral-100" nq-section-gap>
      <Headline v-bind="page.team.headline" />
    </section>

    <section class="bg-neutral-100">
      <GridLarge :items="page.team.items" />
    </section>

    <section class="bg-neutral-100" nq-section-gap>
      <Headline v-bind="page.roadmap" />
    </section>

    <section class="bg-neutral-100" nq-section-gap>
      <Headline v-bind="page.feedback" />
    </section>
  </NuxtLayout>
</template>
