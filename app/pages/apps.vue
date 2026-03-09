<script setup lang="ts">
const page = await usePage('appsPage')

const title = page.seo?.title || page.hero?.title || 'Nimiq Apps'
const description = page.seo?.description || page.hero?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/apps' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/apps' }] })
</script>

<template>
  <NuxtLayout footer-bg-color="white">
    <section class="bg-neutral-0 relative">
      <Hero v-bind="page.hero" />
    </section>

    <section class="!pt-0 px-0 bg-neutral-0 overflow-x-clip max-lg:[&>*]:max-w-none">
      <ShowcaseAppsAll />
    </section>

    <section class="nq-section-gap text-center bg-neutral-0 relative border-t border-neutral-300" style="--f-pb-min: 128; --f-pb-max: 196">
      <Headline v-bind="page.cta" />
    </section>
  </NuxtLayout>
</template>
