<script setup lang="ts">
import '~/assets/css/onepager.css'

const page = await usePage('onepager')

const title = page.seo?.title || page.hero?.title || 'Nimiq in a Nutshell | Nimiq'
const description = page.seo?.description || page.hero?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/onepager' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/onepager' }] })
</script>

<template>
  <NuxtLayout>
    <section class="bg-neutral-100 py-6 md:py-8">
      <div class="mx-auto w-full max-w-full px-0 text-center md:max-w-prose md:px-6">
        <h1 class="nq-heading nq-heading-lg font-bold">
          {{ page.hero?.title }}
        </h1>
        <p v-if="page.hero?.description" class="mx-auto mt-4 text-neutral-700">
          {{ page.hero.description }}
        </p>
      </div>
    </section>

    <section class="bg-neutral-100 pt-16 md:pt-20">
      <ContentRenderer class="onepager-prose nq-prose mx-auto max-w-prose" :value="page" tag="article" />
    </section>
  </NuxtLayout>
</template>
