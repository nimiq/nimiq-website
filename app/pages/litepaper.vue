<script setup lang="ts">
const { data: page } = await useAsyncData('litepaper', () => queryCollection('litepaper').first())
if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

const title = page.value.meta?.title || 'Whitepaper'
const description = page.value.meta?.description || ''
useSeoMeta({ title, description, ogTitle: title, ogDescription: description })
</script>

<template>
  <NuxtLayout>
    <main v-if="page">
      <ContentWhitepaper v-if="page.whitepaper?.items" :items="page.whitepaper.items" />
    </main>
  </NuxtLayout>
</template>
