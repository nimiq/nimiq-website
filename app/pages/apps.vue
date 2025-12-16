<script setup lang="ts">
const { data } = await useAsyncData('apps', () => queryCollection('appsPage').first())
if (!data.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

const page = data.value
const title = page.meta?.title || 'Apps | Nimiq'
const description = page.meta?.description || ''
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/apps' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/apps' }] })
</script>

<template>
  <NuxtLayout>
    <main>
      <section nq-section-gap bg-neutral-0 pt="148 md:153 lg:160">
        <h1 nq-heading>
          {{ page.hero.headline }}
        </h1>
        <p v-if="page.hero.subline" text="neutral-700 center" mx-auto max-w-60ch f-mt-xs>
          {{ page.hero.subline }}
        </p>
      </section>

      <section nq-section-gap bg-neutral-0>
        <ShowcaseAppsAll />
      </section>

      <section nq-section-gap text-center bg-neutral-0>
        <Headline v-bind="page.cta" />
      </section>
    </main>
  </NuxtLayout>
</template>
