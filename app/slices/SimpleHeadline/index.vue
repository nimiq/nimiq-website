<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.SimpleHeadlineSlice>())
const colors = getColorClass(props.slice.primary.bgColor)
</script>

<template>
  <section v-if="slice.variation === 'default'" :class="colors" relative>
    <Headline
      :headline="slice.primary.headline"
      :subline="slice.primary.subline"
      :cta-href="slice.primary.linkHref"
      :cta-label="slice.primary.linkLabel"
      :label="slice.primary.label" :icon-name="slice.primary.iconName"
    />
  </section>
</template>
