<script setup lang="ts">
const page = await usePage('home')

const title = page.seo?.title || page.hero?.title || 'Nimiq'
const description = page.seo?.description || page.hero?.description
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: 'https://nimiq.com/' })
useHead({ link: [{ rel: 'canonical', href: 'https://nimiq.com/' }] })
</script>

<template>
  <NuxtLayout show-socials-hexagon-bg dark-header>
    <main>
      <!-- Section 0: Hero (prod: pt=160, pb=0) -->
      <section class="dark text-neutral mx-0 bg-darkblue relative overflow-hidden max-md:min-h-auto min-h-auto md:min-h-[100vh] lg:min-h-[110vh] flex flex-col justify-between [&>*]:max-w-none !pt-[148px] md:!pt-[153px] lg:!pt-[160px] !pb-0">
        <HeroHome v-bind="page.hero" />
      </section>

      <!-- Section 1: Apps pill link (prod: pt=200, pb=2) -->
      <section class="nq-section-gap bg-neutral-0" style="--pb: 2px">
        <UiPillLink v-bind="page.appsLink" style="--c: var(--color-blue)" />
      </section>

      <!-- Section 2: Apps headline (prod: pt=24, pb=48) -->
      <section class="nq-section-gap bg-neutral-0" style="--pt: 24px; --pb: 48px">
        <Headline v-bind="page.apps.headline" />
      </section>

      <!-- Section 3: Apps showcase cards (prod: pt=48, pb=22, px=0) -->
      <section class="bg-neutral-0" style="--pt: 48px; --pb: 22px; --px: 0px">
        <ShowcaseAppsCards :apps="page.apps.items" />
      </section>

      <!-- Section 4: Apps banner (prod: pt=0, pb=200, f-px-sm) -->
      <section class="bg-neutral-0" style="--pt: 0px; --f-px-min: 16; --f-px-max: 24">
        <ShowcaseAppsBanner :banner="page.banner" />
      </section>

      <!-- Section 5: Tech pill link (prod: pt=200, pb=2) -->
      <section class="dark nq-section-gap bg-darkerblue" style="--pb: 2px">
        <UiPillLink v-bind="page.techLink" style="--c: var(--color-green)" />
      </section>

      <!-- Section 6: Tech headline (prod: pt=24, pb=48) -->
      <section class="dark bg-darkerblue nq-section-gap" style="--pt: 24px; --pb: 48px">
        <GridTechHeadline v-bind="page.techGrid" />
      </section>

      <!-- Section 7: Tech grid items (prod: pt=48, pb=48) -->
      <section class="dark bg-darkerblue" style="--pt: 48px; --pb: 48px">
        <GridTechItems :items="page.techGrid.items" />
      </section>

      <!-- Section 8: Staking (prod: pt=152, pb=200) - staking has internal padding -->
      <section class="dark gradient-transparent-green bg-darkerblue" style="--pt: 140px">
        <HeadlineStaking v-bind="page.staking" />
      </section>

      <!-- Section 9: Community (prod: pt=200, pb=48) -->
      <section class="nq-section-gap bg-neutral-0" style="--pb: 48px">
        <Headline v-bind="page.community" />
      </section>
    </main>
  </NuxtLayout>
</template>
