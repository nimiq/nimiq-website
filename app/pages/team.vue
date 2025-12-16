<script setup lang="ts">
const { data: page } = await useAsyncData('team', () => queryCollection('team').first())
if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

const title = page.value.hero?.headline ? `${page.value.hero.headline} | Nimiq` : 'Team | Nimiq'
const description = page.value.hero?.subline || ''
useSeoMeta({ title, description, ogTitle: title, ogDescription: description })
</script>

<template>
  <NuxtLayout>
    <main v-if="page">
      <section v-if="page.hero" nq-section-gap bg-neutral-0>
        <HeroSimple :headline="page.hero.headline" :subline="page.hero.subline" />
      </section>

      <TeamMembers v-if="page.team?.items" :items="page.team.items" />

      <section v-if="page.simpleHeadline" nq-section-gap bg-neutral-100>
        <HeadlineSimple
          :headline="page.simpleHeadline.headline"
          :subline="page.simpleHeadline.subline"
          :link-href="page.simpleHeadline.linkHref"
          :link-label="page.simpleHeadline.linkLabel"
        />
      </section>
    </main>
  </NuxtLayout>
</template>
