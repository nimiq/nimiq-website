<script setup lang="ts">
const page = await usePage('activationTerms')

const title = page.seo?.title || page.headline || 'NIM Activation Terms'
const description = page.seo?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/activation-terms' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/activation-terms' }] })
</script>

<template>
  <NuxtLayout>
    <section class="nq-section-gap bg-neutral-100">
      <ContentRenderer class="nq-prose text-neutral-900" :value="page" tag="article" children:mx-auto children:max-w-prose />
    </section>
  </NuxtLayout>
</template>
