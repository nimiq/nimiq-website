<script setup lang="ts">
import type { RTLabelNode, RTLinkNode } from '@prismicio/client'
import type { PrismicRichTextProps } from '@prismicio/vue'

const props = defineProps<PrismicRichTextProps>()

const [DefineLabel, ReuseLabel] = createReusableTemplate<{ node: RTLabelNode & { text: string } }>()
const [DefineHyperlink, ReuseHyperlink] = createReusableTemplate<{ node: RTLinkNode }>()

// Transform prismic.io URLs to local proxied URLs
function transformPrismicUrl(url: string): string {
  if (!url?.includes('images.prismic.io'))
    return url
  const match = url.match(/images\.prismic\.io\/nimiq\/([^_]+)_(.+?)(\?|$)/)
  if (match) {
    const [, id, filename] = match
    return `/assets/images/prismic/${id}_${filename}`
  }
  return url
}

const components = {
  label: ReuseLabel,
  hyperlink: ReuseHyperlink,
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
  <PrismicRichText v-bind="{ ...props, ...$attrs }" :components />
</template>
