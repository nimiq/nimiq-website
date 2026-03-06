<script setup lang="ts">
const page = await usePage('terms')

const title = page.seo?.title || page.headline || 'Terms | Nimiq'
const description = page.seo?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/terms' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/terms' }] })
</script>

<template>
  <NuxtLayout>
    <section class="nq-section-gap bg-neutral-100">
      <ContentRenderer class="nq-prose text-neutral-900" :value="page" tag="article" children:mx-auto children:max-w-prose />
    </section>
  </NuxtLayout>
</template>
