<script setup lang="ts">
import type { RichTextField, TitleField } from '@prismicio/client'
import { firstMonth, firstYear, layers, milestones } from '~/components/Roadmap/roadmap-data'

const headline = computed(() => ([{ type: 'heading1', text: 'Roadmap', spans: [] }] as TitleField))
const subline = computed(() => ([{ type: 'paragraph', text: 'Browse the project\'s past and future. Click on milestones to learn more.', spans: [], direction: 'ltr' }] as RichTextField))
</script>

<template>
  <NuxtLayout footer-bg-color="grey" draft>
    <HeroDefault :primary="{ headline, subline, bgColor: 'grey' }" />

    <section class="nq-no-color" mx-0 px-0 bg-neutral-100 block children:max-w-none>
      <Roadmap :milestones :layers :first-year :first-month />
    </section>
  </NuxtLayout>
</template>
