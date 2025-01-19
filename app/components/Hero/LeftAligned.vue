<script setup lang="ts">
import type { RichTextField, TitleField } from '@prismicio/client'
import type { BackgroundColor } from '~/composables/useSectionColor'

const { color = 'bg-neutral-100' } = defineProps<{ headline: TitleField, subline: RichTextField, color?: BackgroundColor }>()
</script>

<template>
  <section :class="color">
    <Headline :headline :subline left-align max-w-780px w-full px-32 />
    <div flex="~ justify-start" max-w-780px w-full px-32 f-m-xs>
      <slot name="bottom" />
    </div>
  </section>
</template>
