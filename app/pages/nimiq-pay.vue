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
    <TiltedMedia v-bind="page.media" animate-on-scroll />

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

    <!-- Section: Easy as always headline (grey bg) -->
    <section class="nq-section-gap bg-neutral-100 relative">
      <Headline v-bind="page.easyAsAlways" />
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

    <!-- Section: Get it now CTA (grey bg) -->
    <section class="nq-section-gap bg-neutral-100 relative">
      <Headline v-bind="page.cta">
        <ul v-if="page.cta.appStore || page.cta.playStore" class="f-mt-md flex flex-wrap gap-32 lg:gap-40 justify-center">
          <li v-if="page.cta.appStore">
            <NuxtLink :to="page.cta.appStore" external target="_blank">
              <NuxtImg class="h-[clamp(36px,calc(36px+(52-36)*((100vw-375px)/(1440-375))),52px)]" src="/assets/images/apple-store-badge.png" alt="Get it on Apple Store" />
            </NuxtLink>
          </li>
          <li v-if="page.cta.playStore">
            <NuxtLink :to="page.cta.playStore" external target="_blank">
              <NuxtImg class="h-[clamp(36px,calc(36px+(52-36)*((100vw-375px)/(1440-375))),52px)]" src="/assets/images/google-play-badge.svg" alt="Get it on Google Play" />
            </NuxtLink>
          </li>
        </ul>
      </Headline>
    </section>
  </NuxtLayout>
</template>
