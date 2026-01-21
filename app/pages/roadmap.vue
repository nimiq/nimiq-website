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
      <section class="nq-section-gap bg-neutral-100">
        <Hero v-bind="page.hero" />
      </section>

      <section class="bg-neutral-100">
        <RoadmapSection v-bind="page.roadmap" />
      </section>

      <section class="nq-section-gap bg-neutral-100">
        <div class="flex flex-col flex-items-center text-center">
          <h2 v-if="page.newsletter.cta" class="text-neutral-700 text-f-lg mb-6">
            {{ page.newsletter.cta }}
          </h2>
          <UiNewsletterEmailInput />
        </div>
      </section>
    </main>
  </NuxtLayout>
</template>
