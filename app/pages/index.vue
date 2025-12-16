<script setup lang="ts">
const { data: page } = await useAsyncData('home', () => queryCollection('home').first())
if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

// Page-specific SEO (globals in nuxt.config.ts)
const title = page.value.meta?.title || 'Nimiq'
const description = page.value.meta?.description || ''
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com' }] })
</script>

<template>
  <NuxtLayout show-socials-hexagon-bg dark-header>
    <main v-if="page">
      <!-- Hero section -->
      <section v-if="page.hero" text-neutral mx-0 py-0 bg-darkblue scheme-dark relative of-hidden children:max-w-none max-md:min-h-auto pt="148 md:153 lg:160" min-h="auto md:100vh lg:110vh" flex="~ col justify-between">
        <HeroHome :headline="page.hero.headline" :subheadline="page.hero.subheadline" :link="page.hero.link" :organizations="page.hero.organizations" />
      </section>

      <!-- The Apps section -->
      <section v-if="page.simpleHeadline && page.apps?.apps" bg-neutral-0 relative style="--pt: 0">
        <UiPillLink v-if="page.pillLink" :item="page.pillLink.item" :label="page.pillLink.label" />
        <HeadlineSimple :headline="page.simpleHeadline.headline" :subline="page.simpleHeadline.subline" />
        <ShowcaseApps :apps="page.apps.apps" :banner="page.banner" />
      </section>

      <!-- The Tech section -->
      <section bg-darkerblue relative>
        <UiPillLink v-if="page.pillLink2" :item="page.pillLink2.item" :label="page.pillLink2.label" />
        <GridTech
          v-if="page.anInstantZeroFeeHeadline && page.grid?.items"
          :headline="page.anInstantZeroFeeHeadline.headline"
          :subline="page.anInstantZeroFeeHeadline.subline"
          :items="page.grid.items"
        />
      </section>

      <!-- Staking section -->
      <HeadlineStaking
        v-if="page.stakingHeadline"
        :headline="page.stakingHeadline.headline"
        :subline="page.stakingHeadline.subline"
        :link="page.stakingHeadline.link"
        :staking-note="page.stakingHeadline.stakingNote"
      />
    </main>
  </NuxtLayout>
</template>
