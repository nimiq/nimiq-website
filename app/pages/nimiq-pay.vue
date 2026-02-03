<script setup lang="ts">
const page = await usePage('nimiqPay')

const title = page.seo?.title || page.hero?.title || 'Nimiq Pay'
const description = page.seo?.description || page.hero?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/nimiq-pay' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/nimiq-pay' }] })
</script>

<template>
  <NuxtLayout>
    <!-- Section: Hero (grey bg) -->
    <section class="bg-neutral-100 relative">
      <HeroPay v-bind="page.hero" />
    </section>

    <!-- Section: TiltedMedia (grey bg with hexagons) -->
    <TiltedMedia v-bind="page.media" />

    <!-- Section: Logos (grey bg) -->
    <section class="bg-neutral-100">
      <GridLogos v-bind="page.logos" />
    </section>

    <!-- Section: Pay your way headline (white bg) -->
    <section class="nq-section-gap bg-neutral-0 relative">
      <Headline v-bind="page.intro" />
    </section>

    <!-- Section: Grid (white bg) -->
    <section class="bg-neutral-0">
      <GridSection v-bind="page.grid" />
    </section>

    <!-- Section: What is Nimiq pay app headline (white bg) -->
    <section class="nq-section-gap bg-neutral-0 relative">
      <Headline v-bind="page.about.headline" />
    </section>

    <!-- Section: RichTextCards (white bg) -->
    <section class="bg-neutral-0">
      <RichTextCards :items="page.about.items" />
    </section>

    <!-- Section: How to start carousel (grey bg) -->
    <section class="bg-neutral-100">
      <RichTextCarousel v-bind="page.textCarousel" variation="default" />
    </section>

    <!-- Section: One app to pool them all headline (white bg) -->
    <section class="nq-section-gap bg-neutral-0 relative">
      <Headline v-bind="page.pooling.headline" />
    </section>

    <!-- Section: Carousel with tabs (white bg) -->
    <section class="bg-neutral-0">
      <RichTextCarousel v-bind="page.pooling.carousel" variation="withTabs" />
    </section>

    <!-- Section: Discover ecosystem headline (white bg) -->
    <section class="nq-section-gap bg-neutral-0 relative">
      <Headline v-bind="page.discover.headline" />
    </section>

    <!-- Section: ZigZag (white bg) -->
    <section class="bg-neutral-0">
      <ZigZag :items="page.discover.items" />
    </section>
  </NuxtLayout>
</template>
