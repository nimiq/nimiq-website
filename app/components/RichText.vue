<script setup lang="ts">
import type { RTImageNode, RTLabelNode, RTLinkNode } from '@prismicio/client'
import type { PrismicRichTextProps } from '@prismicio/vue'
import { transformPrismicUrl } from '~~/shared/utils/prismic-images-client'

const props = defineProps<PrismicRichTextProps>()

const [DefineLabel, ReuseLabel] = createReusableTemplate<{ node: RTLabelNode & { text: string } }>()
const [DefineHyperlink, ReuseHyperlink] = createReusableTemplate<{ node: RTLinkNode }>()
const [DefineImage, ReuseImage] = createReusableTemplate<{ node: RTImageNode }>()

const components = {
  label: ReuseLabel,
  hyperlink: ReuseHyperlink,
  image: ReuseImage,
}
</script>

<template>
  <DefineLabel v-slot="{ node: { data, text } }">
    <template v-if="data?.label === 'HTML'">
      <div v-html="text" />
      <!-- Missing labels: nq-large-text, blocquote, center, text-gold nq_small_text -->
    </template>
    <template v-else-if="data?.label === 'text-gold nq_large-text'">
      <p text-gold font-semibold f-text-3xl>
        {{ text }}
      </p>
    </template>
  </DefineLabel>
  <DefineHyperlink v-slot="{ node }">
    <a :href="transformPrismicUrl(node.data.url || '')" :target="node.data.target" rel="noopener"><slot /></a>
  </DefineHyperlink>
  <DefineImage v-slot="{ node }">
    <img :src="transformPrismicUrl(node.url)" :alt="node.alt || ''" :width="node.dimensions?.width" :height="node.dimensions?.height">
  </DefineImage>
  <PrismicRichText v-bind="{ ...props, ...$attrs }" :components />
</template>
