<script setup lang="ts">
import type { RichTextField, TitleField } from '@prismicio/client'
import { firstMonth, firstYear, layers, milestones } from '~/components/Roadmap/roadmap-data'

const headline = computed(() => ([{ type: 'heading1', text: 'Roadmap', spans: [] }] as TitleField))
const subline = computed(() => ([{ type: 'paragraph', text: 'Browse the project\'s past and future. Click on milestones to learn more.', spans: [], direction: 'ltr' }] as RichTextField))
// Consistent SEO patterns across all pages reduce maintenance overhead
useSeoMeta({
  title: 'Roadmap',
  description: 'Browse the project\'s past and future. Click on milestones to learn more.',

  ogTitle: 'Roadmap',
  ogDescription: 'Browse the project\'s past and future. Click on milestones to learn more.',
  ogType: 'website',

  twitterCard: 'summary_large_image',
  twitterTitle: 'Roadmap',
  twitterDescription: 'Browse the project\'s past and future. Click on milestones to learn more.',
})

defineOgImageComponent('OgImagePage', {
  title: 'Roadmap',
  subline: 'Browse the project\'s past and future. Click on milestones to learn more.',
})
</script>

<template>
  <NuxtLayout footer-bg-color="grey" draft>
    <HeroDefault :primary="{ headline, subline, bgColor: 'grey' }" />

    <section class="nq-no-color" mx-0 px-0 bg-neutral-100 block children:max-w-none>
      <Roadmap :milestones :layers :first-year :first-month />
    </section>
  </NuxtLayout>
</template>
