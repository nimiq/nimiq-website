<script setup lang="ts">
const { data: page } = await useAsyncData('roadmap', () => queryCollection('roadmap').first())
if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

const title = page.value.hero?.headline ? `${page.value.hero.headline} | Nimiq` : 'Roadmap | Nimiq'
const description = page.value.hero?.subline || ''
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/roadmap' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/roadmap' }] })
</script>

<template>
  <NuxtLayout>
    <main v-if="page">
      <section v-if="page.hero" nq-section-gap bg-neutral-100>
        <HeroSimple :headline="page.hero.headline" :subline="page.hero.subline" />
      </section>

      <section v-if="page.roadmap" bg-neutral-100>
        <RoadmapSection :roadmap="page.roadmap" />
      </section>

      <section v-if="page.newsletter" nq-section-gap bg-neutral-100>
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
