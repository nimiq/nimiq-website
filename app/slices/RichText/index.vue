<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.RichTextSlice>())

const { sectionRef } = useSection(props.slice.id, 'grey')
</script>

<template>
  <PrismicRichText ref="sectionRef" class="nq-prose" text="18 neutral-900/90" wrapper="article" :field="slice.primary.richText" />
</template>
