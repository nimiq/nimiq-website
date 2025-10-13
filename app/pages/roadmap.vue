<script setup lang="ts">
import type { Content, RichTextField, TitleField } from '@prismicio/client'
import { layers as defaultLayers, milestones as defaultMilestones, firstMonth, firstYear } from '~/components/Roadmap/roadmap-data'
import NewsletterSubscription from '~/slices/NewsletterSubscription/index.vue'

const isDev = useRuntimeConfig().public.environment.isProduction === false
const showEditor = ref(isDev)

const milestonesJson = isDev
  ? useLocalStorage('roadmap-milestones-json', JSON.stringify(defaultMilestones, null, 2))
  : ref(JSON.stringify(defaultMilestones, null, 2))

const layersJson = isDev
  ? defaultLayers.map((layer, i) => useLocalStorage(`roadmap-layer-${i}-json`, JSON.stringify(layer, null, 2)))
  : defaultLayers.map(layer => ref(JSON.stringify(layer, null, 2)))

const milestones = computed(() => JSON.parse(milestonesJson.value))
const layers = computed(() => layersJson.map(json => JSON.parse(json.value)))

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

    <section v-if="showEditor" nq-wide>
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
          <textarea v-model="milestonesJson" font-mono bg-neutral-100 min-h-90vh w-full f-text-sm nq-input-box />
        </TabsContent>
        <TabsContent v-for="(item, i) in layers" :key="item.name" nq-mt-12 :value="item.name">
          <textarea v-model="layersJson[i]" font-mono bg-neutral-100 min-h-90vh w-full f-text-sm nq-input-box />
        </TabsContent>
      </TabsRoot>
    </section>

    <section class="nq-no-color" mx-32 px-0 bg-neutral-100 block children:max-w-none>
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
