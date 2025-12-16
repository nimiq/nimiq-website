<script setup lang="ts">
const { data } = await useAsyncData('roadmap', () => queryCollection('roadmap').first())
if (!data.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

const page = data.value
const title = `${page.hero.headline} | Nimiq`
const description = page.hero.subline
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
        <RoadmapSection :milestones="page.milestones" />
      </section>

      <section nq-section-gap bg-neutral-100>
        <div flex="~ col items-center" text-center>
          <p v-if="page.newsletter.cta" text="neutral-700 f-lg" mb-24>
            {{ page.newsletter.cta }}
          </p>
          <UiNewsletterEmailInput />
        </div>
      </section>
    </main>
  </NuxtLayout>
</template>
