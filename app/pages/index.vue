<script setup lang="ts">
const page = await usePage('home')

const title = page.seo?.title || page.hero?.title || 'Nimiq'
const description = page.seo?.description || page.hero?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/' }] })
</script>

<template>
  <NuxtLayout show-socials-hexagon-bg dark-header header-variant="home">
    <section class="dark text-neutral mx-0 bg-darkblue relative overflow-hidden max-md:min-h-auto min-h-auto md:min-h-[100vh] lg:min-h-[110vh] flex flex-col justify-between [&>*]:max-w-none !pt-[148px] md:!pt-[153px] lg:!pt-[160px] !pb-0">
      <HeroHome v-bind="page.hero" />
    </section>

    <section class="nq-section-gap bg-neutral-0" style="--pb: 2px" max-lg:children:max-w-none>
      <UiPillLink v-bind="page.appsLink" style="--c: var(--color-blue)" />
    </section>

    <section class="nq-section-gap bg-neutral-0" style="--pt: 24px" max-lg:children:max-w-none>
      <Headline v-bind="page.apps.headline" />
    </section>

    <section class="bg-neutral-0 apps-cards-pb" style="--px: 0px" max-lg:children:max-w-none>
      <ShowcaseAppsCards :apps="page.apps.items" />
    </section>

    <section class="bg-neutral-0" style="--pt: 0px; --f-px-min: 16; --f-px-max: 21.6" max-lg:children:max-w-none>
      <ShowcaseAppsBanner :banner="page.banner" />
    </section>

    <section class="dark nq-section-gap bg-darkerblue" style="--pb: 2px">
      <UiPillLink v-bind="page.techLink" style="--c: var(--color-green)" />
    </section>

    <section class="dark bg-darkerblue nq-section-gap" style="--pt: 24px">
      <GridTechHeadline v-bind="page.techGrid" />
    </section>

    <section class="dark bg-darkerblue">
      <GridTechItems :items="page.techGrid.items" />
    </section>

    <section class="dark gradient-transparent-green bg-darkerblue staking-pt">
      <HeadlineStaking v-bind="page.staking" />
    </section>

    <section class="nq-section-gap bg-neutral-100">
      <Headline v-bind="page.community" />
    </section>
  </NuxtLayout>
</template>
