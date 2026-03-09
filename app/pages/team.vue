<script setup lang="ts">
const page = await usePage('team')

const title = page.seo?.title || 'Team'
const description = page.seo?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/team' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/team' }] })
</script>

<template>
  <NuxtLayout>
    <ContentRenderer :value="page" />
  </NuxtLayout>
</template>
