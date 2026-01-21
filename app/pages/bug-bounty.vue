<script setup lang="ts">
const page = await queryCollection('bugBounty').first()!
const content = await parseMarkdown(page.content?.richText || '')

const title = page.seo?.title || page.hero?.title || 'Bug Bounty Program | Nimiq'
const description = page.seo?.description || page.hero?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/bug-bounty' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/bug-bounty' }] })
</script>

<template>
  <NuxtLayout>
    <section class="nq-section-gap bg-neutral-100">
      <ContentRenderer class="nq-prose mx-auto max-w-prose" :value="content" article />
    </section>
  </NuxtLayout>
</template>
