<script setup lang="ts">
import type { RTLabelNode } from '@prismicio/client'
import type { PrismicRichTextProps } from '@prismicio/vue'

const props = defineProps<PrismicRichTextProps>()

const [DefineLabel, ReuseLabel] = createReusableTemplate<{ node: RTLabelNode & { text: string } }>()

const components = {
  label: ReuseLabel,
}
</script>

<template>
  <DefineLabel v-slot="{ node: { data, text } }">
    <template v-if="data?.label === 'HTML'">
      <div v-html="text" />
      <!-- Missing labels: nq-large-text, blocquote, center, text-gold nq_small_text -->
    </template>
  </DefineLabel>
  <PrismicRichText v-bind="{ ...props, ...$attrs }" :components />
</template>
