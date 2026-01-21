<script setup lang="ts">
const page = await queryCollection('community').first()!

const title = page.seo?.title || page.hero?.title || 'Nimiq Community'
const description = page.seo?.description || page.hero?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/community' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/community' }] })
</script>

<template>
  <NuxtLayout>
    <main>
      <section class="nq-section-gap bg-neutral-0">
        <Hero v-bind="page.hero" />
        <GridNewYork v-bind="page.stats" />
      </section>

      <section class="nq-section-gap bg-neutral-0">
        <Headline v-bind="page.countries.headline" />
        <TokenFlags :flags="page.countries.flags" />
      </section>

      <section class="nq-section-gap bg-neutral-100">
        <Headline v-bind="page.social.headline" />
        <GridSocialMedia v-bind="page.social.grid" />
        <BannerNewsletter v-bind="page.newsletter" />
      </section>

      <section class="nq-section-gap bg-neutral-100">
        <Headline v-bind="page.events" />
      </section>

      <section class="nq-section-gap bg-neutral-0">
        <Headline v-bind="page.apps.headline" />
        <BannerAppGallery v-bind="page.apps.gallery" />
        <Banner v-bind="page.banner" />
      </section>

      <section class="nq-section-gap bg-darkblue" dark scheme-dark>
        <Headline v-bind="page.feedback" />
      </section>
    </main>
  </NuxtLayout>
</template>
