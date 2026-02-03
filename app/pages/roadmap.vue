<script setup lang="ts">
const page = await usePage('roadmap')

const title = page.seo?.title || page.hero?.title || 'Roadmap'
const description = page.seo?.description || page.hero?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/roadmap' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/roadmap' }] })
</script>

<template>
  <NuxtLayout>
    <main>
      <section class="bg-neutral-0">
        <Hero v-bind="page.hero" />
      </section>

      <section class="nq-no-color bg-neutral-0">
        <RoadmapSection v-bind="page.roadmap" />
      </section>

      <section class="bg-neutral-100" data-slice-type="newsletter-subscription">
        <h3 class="text-center">
          {{ page.newsletter?.cta }}
        </h3>
        <UiNewsletterEmailInput class="text-2xl mt-8 md:mt-10 lg:mt-12 xl:mt-14" />
      </section>
    </main>
  </NuxtLayout>
</template>
