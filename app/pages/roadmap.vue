<script setup lang="ts">
const page = await queryCollection('roadmap').first()!

const title = page.seo?.title || page.hero?.title || 'Roadmap'
const description = page.seo?.description || page.hero?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/roadmap' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/roadmap' }] })
</script>

<template>
  <NuxtLayout>
    <main>
      <section nq-section-gap bg-neutral-100>
        <Hero v-bind="page.hero" />
      </section>

      <section bg-neutral-100>
        <RoadmapSection v-bind="page.roadmap" />
      </section>

      <section nq-section-gap bg-neutral-100>
        <div flex="~ col items-center" text-center>
          <h2 v-if="page.newsletter.cta" text="neutral-700 f-lg" mb-24>
            {{ page.newsletter.cta }}
          </h2>
          <UiNewsletterEmailInput />
        </div>
      </section>
    </main>
  </NuxtLayout>
</template>
