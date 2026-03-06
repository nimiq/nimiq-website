<script setup lang="ts">
const page = await usePage('cryptopaymentlink')

const title = page.seo?.title || page.hero?.title || 'Crypto Payment Link'
const description = page.seo?.description || page.hero?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/cryptopaymentlink' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/cryptopaymentlink' }] })
</script>

<template>
  <NuxtLayout>
    <section v-if="page.hero" class="bg-neutral-100 relative">
      <HeroProduct v-bind="page.hero" />
    </section>

    <TiltedMedia v-if="page.tiltedMedia" v-bind="page.tiltedMedia" animate-on-scroll />

    <section v-if="page.simpleHeadline" class="nq-section-gap bg-neutral-0 relative">
      <Headline v-bind="page.simpleHeadline" />
    </section>

    <section v-if="page.grid?.items" class="bg-neutral-0">
      <GridSection v-bind="page.grid" variation="iconGrid" />
    </section>

    <section v-if="page.learnItHeadline" class="nq-section-gap bg-neutral-100 relative">
      <Headline v-bind="page.learnItHeadline" />
    </section>

    <section v-if="page.textCards?.items" class="bg-neutral-100">
      <RichTextCards v-bind="page.textCards" />
    </section>

    <section v-if="page.steppedSlides" class="bg-neutral-0 overflow-x-clip nq-wide">
      <Stepped v-bind="page.steppedSlides" />
    </section>

    <section v-if="page.finalCta" class="nq-section-gap bg-neutral-100 relative">
      <Headline v-bind="page.finalCta" />
    </section>
  </NuxtLayout>
</template>
