<script setup lang="ts">
import type { RTImageNode, RTLabelNode, RTLinkNode } from '@prismicio/client'
import type { PrismicRichTextProps } from '@prismicio/vue'
import { transformPrismicUrl } from '~~/shared/utils/prismic-images-client'

const props = defineProps<PrismicRichTextProps>()

// Node types are augmented with `text` at runtime by asTree (not in TS types)
type AugmentedNode<T> = T & { text?: string }

const RichTextLabel = defineComponent({
  props: { node: { type: Object as PropType<AugmentedNode<RTLabelNode>>, required: true } },
  setup(props) {
    const { data, text = '' } = props.node
    if (data?.label === 'HTML')
      return () => h('div', { innerHTML: text })
    if (data?.label === 'text-gold nq_large-text')
      return () => h('p', { class: 'text-gold font-semibold f-text-3xl' }, text)
    return () => h('span', text)
  },
})

const RichTextHyperlink = defineComponent({
  props: { node: { type: Object as PropType<AugmentedNode<RTLinkNode>>, required: true } },
  setup(props, { slots }) {
    const { url, target } = props.node.data as { url?: string, target?: string }
    return () => h('a', { href: transformPrismicUrl(url || ''), target, rel: 'noopener' }, slots.default?.())
  },
})

const RichTextImage = defineComponent({
  props: { node: { type: Object as PropType<RTImageNode>, required: true } },
  setup(props) {
    const { url, alt, dimensions } = props.node
    return () => h('img', { src: transformPrismicUrl(url), alt: alt || '', width: dimensions?.width, height: dimensions?.height })
  },
})

const components = { label: RichTextLabel, hyperlink: RichTextHyperlink, image: RichTextImage }
</script>

<template>
  <PrismicRichText v-bind="{ ...props, ...$attrs }" :components />
</template>
