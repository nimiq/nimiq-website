<script setup lang="ts">
const page = await queryCollection('appsPage').first()!

const title = page.seo?.title || page.hero?.title || page.meta?.title || 'Nimiq Apps'
const description = page.seo?.description || page.hero?.description || page.meta?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/apps' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/apps' }] })
</script>

<template>
  <NuxtLayout>
    <main>
      <section class="nq-section-gap bg-neutral-0 pt-[148px] pt-md:153 pt-lg:160">
        <h1 class="nq-heading">
          {{ page.hero.title }}
        </h1>
        <p v-if="page.hero.description" class="text-neutral-700 text-center mx-auto max-w-60ch f-mt-xs">
          {{ page.hero.description }}
        </p>
      </section>

      <section class="pt-0! px-0 bg-neutral-0 of-x-clip max-lg:children:max-w-none">
        <ShowcaseAppsAll />
      </section>

      <section class="nq-section-gap text-center bg-neutral-0">
        <Headline v-bind="page.cta" />
      </section>
    </main>
  </NuxtLayout>
</template>
