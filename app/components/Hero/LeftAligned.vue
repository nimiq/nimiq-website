<script setup lang="ts">
import type { RichTextField, TitleField } from '@prismicio/client'
import type { BackgroundColor } from '~/composables/useSectionColor'

const { color = 'bg-neutral-100' } = defineProps<{ headline: TitleField, subline: RichTextField, color?: BackgroundColor }>()
</script>

<template>
  <section :class="color">
    <Headline :headline :subline left-align px-32 max-w-780px w-full />
    <div flex="~ justify-start" px-32 max-w-780px w-full f-mt-xs>
      <slot name="bottom" />
    </div>
  </section>
</template>
