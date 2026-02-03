<script setup lang="ts">
const page = await usePage('community')

const title = page.seo?.title || page.hero?.title || 'Nimiq Community'
const description = page.seo?.description || page.hero?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/community' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/community' }] })
</script>

<template>
  <NuxtLayout>
    <section class="nq-section-gap bg-neutral-0">
      <Hero v-bind="page.hero" />
    </section>

    <section class="nq-section-gap bg-neutral-0">
      <GridNewYork v-bind="page.stats" />
    </section>

    <section class="nq-section-gap bg-neutral-0">
      <Headline v-bind="page.countries.headline" />
    </section>

    <section class="bg-neutral-0">
      <TokenFlags :flags="page.countries.flags" />
    </section>

    <section class="nq-section-gap bg-neutral-100">
      <Headline v-bind="page.social.headline" />
    </section>

    <section class="bg-neutral-100">
      <GridSocialMedia v-bind="page.social.grid" />
    </section>

    <section class="bg-neutral-100">
      <BannerNewsletter v-bind="page.newsletter" />
    </section>

    <section class="nq-section-gap bg-neutral-100">
      <Headline v-bind="page.events" />
    </section>

    <section class="nq-section-gap bg-neutral-0">
      <Headline v-bind="page.apps.headline" />
    </section>

    <section class="bg-neutral-0">
      <BannerAppGallery v-bind="page.apps.gallery" />
    </section>

    <section class="bg-neutral-0 pt-0">
      <Banner v-bind="page.banner" />
    </section>

    <section class="nq-section-gap bg-darkblue" dark scheme-dark>
      <Headline v-bind="page.feedback" />
    </section>
  </NuxtLayout>
</template>
