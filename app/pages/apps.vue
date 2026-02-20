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
      <h1>{{ page.hero.title }}</h1>
      <p v-if="page.hero.description" class="font-400 text-neutral-800 dark:text-neutral-900" style="--font-size-min: 20; --font-size-max: 22">
        {{ page.hero.description }}
      </p>
    </section>

    <section class="!pt-0 px-0 bg-neutral-0 overflow-x-clip max-lg:[&>*]:max-w-none">
      <ShowcaseAppsAll />
    </section>

    <section class="nq-section-gap text-center bg-neutral-0 relative border-t border-neutral-400" style="--f-pb-min: 128; --f-pb-max: 196">
      <Headline v-bind="page.cta" />
    </section>
  </NuxtLayout>
</template>
