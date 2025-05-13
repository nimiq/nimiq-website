<!-- <script setup lang="ts">
import type { RichTextField, TitleField } from '@prismicio/client'
import { firstMonth, firstYear, layers, milestones } from '~/components/Roadmap/roadmap-data'

const headline = computed(() => ([{ type: 'heading1', text: 'Roadmap', spans: [] }] as TitleField))
const subline = computed(() => ([{ type: 'paragraph', text: 'Browse the project\'s past and future. Click on milestones to learn more.', spans: [], direction: 'ltr' }] as RichTextField))
useHead({
  title: 'Roadmap - Nimiq Website',
  meta: [
    { name: 'description', content: 'Browse the project\'s past and future. Click on milestones to learn more.' },
  ],
})
defineOgImageComponent('OgImagePage', {
  title: 'Roadmap',
  subline: 'Browse the project\'s past and future. Click on milestones to learn more.',
})
</script>

<template>
  <NuxtLayout footer-bg-color="grey" draft>
    <HeroDefault :primary="{ headline, subline, bgColor: 'grey' }" />

    <section class="nq-no-color" mx-0 block bg-neutral-100 px-0 children:max-w-none>
      <Roadmap :milestones :layers :first-year :first-month />
    </section>
  </NuxtLayout>
</template> -->

<script setup lang="ts">
import type { RichTextField, TitleField } from '@prismicio/client'
import { layers as defaultLayers, milestones as defaultMilestones, firstMonth, firstYear } from '~/components/Roadmap/roadmap-data'

const isDev = useRuntimeConfig().siteEnv !== 'production'
const showEditor = ref(isDev)
const layers = isDev ? useLocalStorage('roadmap-layers', defaultLayers) : ref(defaultLayers)
const milestones = isDev ? useLocalStorage('roadmap-milestones', defaultMilestones) : ref(defaultMilestones)

const headline = computed(() => ([{ type: 'heading1', text: 'Roadmap', spans: [] }] as TitleField))
const subline = computed(() => ([{ type: 'paragraph', text: 'Browse the project\'s past and future. Click on milestones to learn more.', spans: [], direction: 'ltr' }] as RichTextField))
</script>

<template>
  <NuxtLayout footer-bg-color="grey" draft>
    <HeroDefault :primary="{ headline, subline, bgColor: 'grey' }" />

    <label v-if="isDev" flex="items-center ~ gap-8" ring="1.5 blue/40" fixed bottom-80 right-32 z-100 rounded-full bg-neutral-300 px-12 py-4 text-xs>
      <input v-model="showEditor" type="checkbox" nq-switch>
      <span text="neutral-800" select-none nq-label>
        Hide editor
      </span>
    </label>

    <section v-if="showEditor" nq-wide>
      <TabsRoot w-full :default-value="layers[0]!.name">
        <TabsList rounded-full bg-neutral-300 p-2 ring="1.5 neutral/5" flex="~ items-center gap-16">
          <TabsTrigger value="milestones" bg="neutral-300 data-active:neutral" rounded-full px-12 py-8 text="neutral-900 data-active:neutral-0 xs" nq-label>
            Milestones
          </TabsTrigger>
          <TabsTrigger v-for="item in layers" :key="item.name" :value="item.name" bg="neutral-300 data-active:neutral" rounded-full px-12 py-8 text="neutral-900 data-active:neutral-0 xs" nq-label>
            {{ item.name }}
          </TabsTrigger>
        </TabsList>
        <TabsContent nq-mt-12 value="milestones">
          <textarea
            :value="JSON.stringify(milestones, null, 2)"
            min-h-90vh w-full bg-neutral-100 text-sm font-mono nq-input-box
            @input="(e) => milestones = JSON.parse((e.target as HTMLTextAreaElement).value)"
          />
        </TabsContent>
        <TabsContent v-for="(item, i) in layers" :key="item.name" nq-mt-12 :value="item.name">
          <textarea
            :value="JSON.stringify(item, null, 2)"
            min-h-90vh w-full bg-neutral-100 text-sm font-mono nq-input-box
            @input="(e) => layers[i] = JSON.parse((e.target as HTMLTextAreaElement).value)"
          />
        </TabsContent>
      </TabsRoot>
    </section>

    <section class="nq-no-color" mx-0 block bg-neutral-100 px-0 children:max-w-none>
      <Roadmap :milestones :layers :first-year :first-month />
    </section>
  </NuxtLayout>
</template>
