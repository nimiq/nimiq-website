<script setup lang="ts">
const page = await usePage('roadmap')

const title = page.seo?.title || page.hero?.title || 'Roadmap'
const description = page.seo?.description || page.hero?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/roadmap' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/roadmap' }] })
</script>

<template>
  <NuxtLayout footer-bg-color="white">
    <main>
      <section class="bg-neutral-0">
        <Hero v-bind="page.hero" />
      </section>

      <section class="nq-no-color bg-neutral-0" style="--px: 0; --nq-max-width: none">
        <RoadmapSection v-bind="page.roadmap" />
      </section>

      <section class="bg-neutral-0">
        <BannerNewsletter v-bind="page.newsletter" />
      </section>
    </main>
  </NuxtLayout>
</template>
