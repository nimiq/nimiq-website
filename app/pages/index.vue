<script setup lang="ts">
const { data } = await useAsyncData('home', () => queryCollection('home').first())
if (!data.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

const page = data.value
const title = page.meta.title
const description = page.meta.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com' }] })
</script>

<template>
  <NuxtLayout show-socials-hexagon-bg dark-header>
    <main>
      <section text-neutral mx-0 py-0 bg-darkblue scheme-dark relative of-hidden children:max-w-none max-md:min-h-auto pt="148 md:153 lg:160" min-h="auto md:100vh lg:110vh" flex="~ col justify-between">
        <HeroHome v-bind="page.hero" />
      </section>

      <section bg-neutral-0 relative style="--pt: 0">
        <UiPillLink v-bind="page.appsLink" style="--c: var(--colors-blue)" />
        <Headline v-bind="page.apps.headline" />
        <ShowcaseApps :apps="page.apps.items" :banner="page.banner" />
      </section>

      <section bg-darkerblue relative>
        <UiPillLink v-bind="page.techLink" style="--c: var(--colors-green)" />
        <GridTech v-bind="page.techGrid" />
      </section>

      <section bg-darkerblue scheme-light class="staking-gradient">
        <HeadlineStaking v-bind="page.staking" />
      </section>

      <section bg-neutral-100>
        <Headline v-bind="page.community" />
      </section>
    </main>
  </NuxtLayout>
</template>
