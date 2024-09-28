<script setup lang="ts">
import type { RichTextField, TitleField } from '@prismicio/client'
import { firstMonth, firstYear, layers, milestones } from '~/components/Roadmap/roadmap-data'

const headline = computed(() => ([{ type: 'heading1', text: 'Roadmap', spans: [] }] as TitleField))
const subline = computed(() => ([{ type: 'paragraph', text: 'Browse the project\'s past and future. Click on milestones to learn more.', spans: [], direction: 'ltr' }] as RichTextField))

const refSection = useSection('roadmap', 'grey', { paddingX: false, limitWidth: false, useDefaultColors: false })
</script>

<template>
  <NuxtLayout footer-bg-color="grey" draft>
    <HeroDefault :primary="{ headline, subline, bgColor: 'grey' }" />

    <section ref="refSection" block>
      <Roadmap :milestones :layers :first-year :first-month />
    </section>
  </NuxtLayout>
</template>
