<script setup lang="ts">
import type { RichTextField, TitleField } from '@prismicio/client'

const props = defineProps<{ headline: TitleField, subHeadline: RichTextField, bgColor?: 'grey' | 'white' | 'darkblue' | null }>()

const { sectionRef } = useSlice('hero', props.bgColor, { paddingY: false })
</script>

<template>
  <section ref="sectionRef" relative of-hidden pt="148 md:153 lg:160">
    <div z-10 children:md:mx-auto>
      <PrismicText :field="headline" wrapper="h1" />
      <PrismicRichText v-if="subHeadline" :field="subHeadline" wrapper="p" />
    </div>
  </section>
</template>
