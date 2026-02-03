<script setup lang="ts">
const page = await usePage('bugBounty')

const title = page.seo?.title || page.hero?.title || 'Bug Bounty Program | Nimiq'
const description = page.seo?.description || page.hero?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/bug-bounty' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/bug-bounty' }] })
</script>

<template>
  <NuxtLayout>
    <section class="bg-neutral-100">
      <article class="nq-prose text-xl">
        <h1>{{ page.hero?.title }}</h1>
        <p>{{ page.hero?.description }}</p>
        <ContentRenderer :value="page" />
      </article>
    </section>
  </NuxtLayout>
</template>
