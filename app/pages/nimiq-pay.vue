<script setup lang="ts">
const page = await queryCollection('nimiqPay').first()!

const title = page.seo?.title || page.hero?.title || 'Nimiq Pay'
const description = page.seo?.description || page.hero?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/nimiq-pay' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/nimiq-pay' }] })
</script>

<template>
  <NuxtLayout>
    <!-- Section 0: Hero + TiltedMedia + Logos (grey bg) -->
    <section nq-section-gap bg-neutral-100 relative>
      <HeroPay v-bind="page.hero" />
      <TiltedMedia v-bind="page.media" />
      <GridLogos v-bind="page.logos" />
    </section>

    <!-- Section 1: Pay your way + Grid (white bg) -->
    <section nq-section-gap bg-neutral-0>
      <Headline v-bind="page.intro" />
      <GridSection v-bind="page.grid" />
    </section>

    <!-- Section 2: What is Nimiq pay app + Cards (white bg) -->
    <section nq-section-gap bg-neutral-0>
      <Headline v-bind="page.about.headline" />
      <RichTextCards :items="page.about.items" class="nq-container-xl" />
    </section>

    <!-- Section 3: How to start carousel (grey bg) -->
    <section nq-section-gap bg-neutral-100>
      <RichTextCarousel v-bind="page.textCarousel" variation="default" />
    </section>

    <!-- Section 4: One app to pool them all + carousel (white bg) -->
    <section nq-section-gap bg-neutral-0>
      <Headline v-bind="page.pooling.headline" />
      <RichTextCarousel v-bind="page.pooling.carousel" variation="withTabs" />
    </section>

    <!-- Section 5: Discover ecosystem + ZigZag (white bg) -->
    <section nq-section-gap bg-neutral-0>
      <Headline v-bind="page.discover.headline" />
      <ZigZag :items="page.discover.items" />
    </section>
  </NuxtLayout>
</template>
