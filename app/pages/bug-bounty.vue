<script setup lang="ts">
const { data } = await useAsyncData('bug-bounty', () => queryCollection('bugBounty').first())
if (!data.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

const page = data.value
const { data: contentData } = await useAsyncData('bug-bounty-content', () => parseMarkdown(page.content))
const content = contentData.value!

const title = 'Bug Bounty Program | Nimiq'
const description = 'Strengthen Nimiq\'s security and earn rewards through our bug bounty program.'
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/bug-bounty' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/bug-bounty' }] })
</script>

<template>
  <NuxtLayout>
    <main>
      <section bg-neutral-0>
        <ContentRenderer :value="content" article nq-prose text-20 mx-auto max-w-prose />
      </section>
    </main>
  </NuxtLayout>
</template>
