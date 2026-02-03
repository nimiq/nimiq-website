<script setup lang="ts">
const page = await usePage('appsPage')

const title = page.seo?.title || page.hero?.title || 'Nimiq Apps'
const description = page.seo?.description || page.hero?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/apps' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/apps' }] })
</script>

<template>
  <NuxtLayout>
    <section class="bg-neutral-0 relative">
      <h1>{{ page.hero.title }}</h1>
      <p v-if="page.hero.description" class="font-400 dark:text-neutral-900">
        {{ page.hero.description }}
      </p>
    </section>

    <section class="!pt-0 px-0 bg-neutral-0 overflow-x-clip max-lg:[&>*]:max-w-none">
      <ShowcaseAppsAll />
    </section>

    <section class="nq-section-gap text-center bg-neutral-0 relative">
      <Headline v-bind="page.cta" />
    </section>
  </NuxtLayout>
</template>
