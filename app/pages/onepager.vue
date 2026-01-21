<script setup lang="ts">
import '~/assets/css/onepager.css'

const page = await usePage('onepager')
const content = await parseMarkdown(page.content?.richText || '')

const title = page.seo?.title || page.hero?.title || 'Nimiq in a Nutshell | Nimiq'
const description = page.seo?.description || page.hero?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/onepager' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/onepager' }] })
</script>

<template>
  <NuxtLayout>
    <section class="bg-neutral-100 f-py-lg">
      <div class="mx-auto max-w-prose px-6">
        <h1 class="nq-heading font-bold">
          {{ page.hero?.title }}
        </h1>
        <p v-if="page.hero?.description" class="text-neutral-700 mt-4">
          {{ page.hero.description }}
        </p>
      </div>
    </section>

    <section class="nq-section-gap bg-neutral-100">
      <ContentRenderer class="nq-prose mx-auto max-w-prose" :value="content" tag="article" />
    </section>
  </NuxtLayout>
</template>
