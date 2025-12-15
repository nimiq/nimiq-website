<script setup lang="ts">
const { data: page } = await useAsyncData('bug-bounty', () => queryCollection('bugBounty').first())
if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

const title = 'Bug Bounty Program | Nimiq'
const description = 'Strengthen Nimiq\'s security and earn rewards through our bug bounty program.'
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/bug-bounty' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/bug-bounty' }] })
</script>

<template>
  <NuxtLayout>
    <main v-if="page">
      <ContentRichText v-if="page.content" :rich-text="page.content.richText" :center-heading="page.content.centerHeading" />
    </main>
  </NuxtLayout>
</template>
