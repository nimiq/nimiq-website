<script setup lang="ts">
import type { Content, RichTextField, TitleField } from '@prismicio/client'
import { layers as defaultLayers, milestones as defaultMilestones, firstMonth, firstYear } from '~/components/Roadmap/roadmap-data'
import NewsletterSubscription from '~/slices/NewsletterSubscription/index.vue'

const isDev = useRuntimeConfig().public.environment.isProduction === false
const showEditor = ref(isDev)

const milestones = isDev
  ? useLocalStorage('roadmap-milestones-json', JSON.stringify(defaultMilestones, null, 2))
  : ref(JSON.stringify(defaultMilestones, null, 2))

const networkLayer = isDev
  ? useLocalStorage('roadmap-layer-0-json', JSON.stringify(defaultLayers[0], null, 2))
  : ref(JSON.stringify(defaultLayers[0], null, 2))

const appLayer = isDev
  ? useLocalStorage('roadmap-layer-1-json', JSON.stringify(defaultLayers[1], null, 2))
  : ref(JSON.stringify(defaultLayers[1], null, 2))

const adoptionLayer = isDev
  ? useLocalStorage('roadmap-layer-2-json', JSON.stringify(defaultLayers[2], null, 2))
  : ref(JSON.stringify(defaultLayers[2], null, 2))

const parsedMilestones = computed(() => JSON.parse(milestones.value))
const layers = computed(() => [JSON.parse(networkLayer.value), JSON.parse(appLayer.value), JSON.parse(adoptionLayer.value)])

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
  <NuxtLayout footer-bg-color="white">
    <HeroDefault :primary="{ headline, subline, bgColor: 'grey' }" />

    <label v-if="isDev" flex="~ items-center gap-8" ring="1.5 blue/40" px-12 py-4 rounded-full bg-neutral-300 bottom-80 right-32 fixed z-100 f-text-xs>
      <input v-model="showEditor" type="checkbox" nq-switch>
      <span text="neutral-800" select-none nq-label>
        Hide editor
      </span>
    </label>

    <section v-if="showEditor">
      <TabsRoot w-full :default-value="layers[0]!.name">
        <TabsList p-2 rounded-full bg-neutral-300 ring="1.5 neutral/5" flex="~ items-center gap-16">
          <TabsTrigger value="milestones" bg="neutral-300 data-active:neutral" text="neutral-900 data-active:neutral-0 f-xs" px-12 py-8 rounded-full nq-label>
            Milestones
          </TabsTrigger>
          <TabsTrigger v-for="item in layers" :key="item.name" :value="item.name" bg="neutral-300 data-active:neutral" text="neutral-900 data-active:neutral-0 f-xs" px-12 py-8 rounded-full nq-label>
            {{ item.name }}
          </TabsTrigger>
        </TabsList>
        <TabsContent nq-mt-12 value="milestones">
          <textarea v-model="milestones" font-mono bg-neutral-100 min-h-90vh w-full f-text-sm nq-input-box />
        </TabsContent>
        <TabsContent nq-mt-12 value="Network Layer">
          <textarea v-model="networkLayer" font-mono bg-neutral-100 min-h-90vh w-full f-text-sm nq-input-box />
        </TabsContent>
        <TabsContent nq-mt-12 value="App Layer">
          <textarea v-model="appLayer" font-mono bg-neutral-100 min-h-90vh w-full f-text-sm nq-input-box />
        </TabsContent>
        <TabsContent nq-mt-12 value="Adoption Layer">
          <textarea v-model="adoptionLayer" font-mono bg-neutral-100 min-h-90vh w-full f-text-sm nq-input-box />
        </TabsContent>
      </TabsRoot>
    </section>

    <section class="nq-no-color" mx-0 px-0 bg-neutral-100 block children:max-w-none>
      <Roadmap :milestones="parsedMilestones" :layers :first-year :first-month />
    </section>

    <NewsletterSubscription
      :slice="newsletterSlice"
      :index="0"
      :slices="[] as any"
      :context="undefined"
    />
  </NuxtLayout>
</template>
