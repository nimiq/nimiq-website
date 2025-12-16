<script setup lang="ts">
const { data } = await useAsyncData('team', () => queryCollection('team').first())
if (!data.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

const page = data.value
const title = `${page.hero.headline} | Nimiq`
const description = page.hero.subline
useSeoMeta({ title, description, ogTitle: title, ogDescription: description })
</script>

<template>
  <NuxtLayout>
    <main>
      <section bg-neutral-0>
        <Hero v-bind="page.hero" />
      </section>

      <section bg-neutral-0>
        <TeamMembers v-bind="page.members" />
      </section>

      <section bg-neutral-100>
        <Headline v-bind="page.cta" />
      </section>
    </main>
  </NuxtLayout>
</template>
