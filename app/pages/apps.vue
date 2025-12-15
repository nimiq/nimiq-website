<script setup lang="ts">
const { data: page } = await useAsyncData('apps', () => queryCollection('appsPage').first())
if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

const title = page.value.meta?.title || 'Apps | Nimiq'
const description = page.value.meta?.description || ''
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/apps' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/apps' }] })
</script>

<template>
  <NuxtLayout>
    <main v-if="page">
      <!-- Hero section -->
      <section v-if="page.hero" nq-section-gap bg-neutral-0 pt="148 md:153 lg:160">
        <h1 nq-heading>
          {{ page.hero.headline }}
        </h1>
        <p v-if="page.hero.subheadline" text="neutral-700 center" mx-auto max-w-60ch f-mt-xs>
          {{ page.hero.subheadline }}
        </p>
      </section>

      <!-- Apps showcase with filter -->
      <section nq-section-gap bg-neutral-0>
        <ShowcaseAppsAll />
      </section>

      <!-- Add your app CTA -->
      <section v-if="page.simple_headline" nq-section-gap text-center bg-neutral-0>
        <HeadlineSimple :headline="page.simple_headline.headline" :subline="page.simple_headline.subline" />
        <NuxtLink v-if="page.simple_headline.cta" :to="page.simple_headline.cta" target="_blank" mx-auto f-mt-lg nq-arrow nq-pill-lg nq-pill-blue>
          Developer Center
        </NuxtLink>
      </section>
    </main>
  </NuxtLayout>
</template>
