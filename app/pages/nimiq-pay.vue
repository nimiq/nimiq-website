<script setup lang="ts">
const page = await usePage('nimiqPay')

const title = page.seo?.title || page.hero?.title || 'Nimiq Pay'
const description = page.seo?.description || page.hero?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/nimiq-pay' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/nimiq-pay' }] })
</script>

<template>
  <NuxtLayout>
    <section class="bg-neutral-100 relative">
      <HeroPay v-bind="page.hero" />
    </section>

    <TiltedMedia v-bind="page.media" animate-on-scroll />

    <section class="bg-neutral-100">
      <GridLogos v-bind="page.logos" />
    </section>

    <section class="nq-section-gap bg-neutral-0 relative">
      <Headline v-bind="page.intro" />
    </section>

    <section class="bg-neutral-0">
      <GridSection v-bind="page.grid" />
    </section>

    <section class="nq-section-gap bg-neutral-0 relative">
      <Headline v-bind="page.about.headline" />
    </section>

    <section class="bg-neutral-0">
      <RichTextCards :items="page.about.items" />
    </section>

    <section class="nq-section-gap bg-neutral-100 relative">
      <Headline v-bind="page.easyAsAlways" />
    </section>

    <section class="bg-neutral-100">
      <RichTextCarousel v-bind="page.textCarousel" variation="default" />
    </section>

    <section class="nq-section-gap bg-neutral-0 relative">
      <Headline v-bind="page.pooling.headline" />
    </section>

    <section class="bg-neutral-0">
      <RichTextCarousel v-bind="page.pooling.carousel" variation="withTabs" />
    </section>

    <section class="nq-section-gap bg-neutral-0 relative">
      <Headline v-bind="page.discover.headline" />
    </section>

    <section class="bg-neutral-0">
      <ZigZag :items="page.discover.items" />
    </section>

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
