<script setup lang="ts">
const page = await usePage('activationTerms')

const title = page.seo?.title || page.hero?.headline || 'NIM Activation Terms'
const description = page.seo?.description || page.hero?.subline
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/activation-terms' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/activation-terms' }] })
</script>

<template>
  <NuxtLayout>
    <main>
      <section class="nq-section-gap bg-neutral-100">
        <Hero :title="page.hero?.headline" :description="page.hero?.subline" />
      </section>

      <section class="nq-section-gap bg-neutral-0">
        <ContentRenderer class="f-prose text-neutral-900" :value="page" tag="article" children:mx-auto children:max-w-prose />
      </section>
    </main>
  </NuxtLayout>
</template>
