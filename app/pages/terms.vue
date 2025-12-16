<script setup lang="ts">
const { data } = await useAsyncData('terms', () => queryCollection('terms').first())
if (!data.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

const page = data.value
const { data: contentData } = await useAsyncData('terms-content', () => parseMarkdown(page.content))
const content = contentData.value!

const title = `${page.hero.headline} | Nimiq`
const description = page.hero.subline
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/terms' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/terms' }] })
</script>

<template>
  <NuxtLayout>
    <main>
      <section nq-section-gap bg-neutral-100>
        <Hero v-bind="page.hero" />
      </section>

      <section nq-section-gap bg-neutral-0>
        <ContentRenderer :value="content" article nq-prose text-20 mx-auto max-w-prose />
      </section>
    </main>
  </NuxtLayout>
</template>
