<script setup lang="ts">
import type { Content, RichTextField, TitleField } from '@prismicio/client'
import { firstMonth, firstYear, layers, milestones } from '~/components/Roadmap/roadmap-data'
import NewsletterSubscription from '~/slices/NewsletterSubscription/index.vue'

const headline = computed(() => ([{ type: 'heading1', text: 'Roadmap', spans: [] }] as TitleField))
const subline = computed(() => ([{ type: 'paragraph', text: 'Browse the project\'s past and future.', spans: [], direction: 'ltr' }] as RichTextField))
// Consistent SEO patterns across all pages reduce maintenance overhead
useSeoMeta({
  title: 'Roadmap',
  description: 'Browse the project\'s past and future.',

  ogTitle: 'Roadmap',
  ogDescription: 'Browse the project\'s past and future.',
  ogType: 'website',

  twitterCard: 'summary_large_image',
  twitterTitle: 'Roadmap',
  twitterDescription: 'Browse the project\'s past and future.',
})

setOgImage({
  title: 'Roadmap',
  subline: 'Browse the project\'s past and future.',
  type: 'page',
})

const newsletterSlice: Content.NewsletterSubscriptionSlice = {
  slice_type: 'newsletter_subscription',
  slice_label: null,
  id: 'roadmap-newsletter',
  version: 'v1',
  variation: 'default',
  items: [],
  primary: {
    backgroundColor: 'white',
    bgColor: 'white',
    placeholder: 'Enter email address...',
    cta: [
      {
        type: 'heading2',
        text: 'Stay up to date',
        spans: [],
      },
    ],
  },
}
</script>

<template>
  <NuxtLayout footer-bg-color="white" draft>
    <HeroDefault :primary="{ headline, subline, bgColor: 'grey' }" />

    <section class="nq-no-color" mx-0 px-0 bg-neutral-100 block children:max-w-none>
      <Roadmap :milestones :layers :first-year :first-month />
    </section>

    <NewsletterSubscription
      :slice="newsletterSlice"
      :index="0"
      :slices="[] as any"
      :context="undefined"
    />
  </NuxtLayout>
</template>
