<script setup lang="ts">
import type { Content } from '@prismicio/client'
import type { PillLinkSliceDefaultPrimary } from '~~/prismicio-types'

const props = defineProps(getSliceComponentProps<Content.PillLinkSlice>())
const slices = toRef(props, 'slices')
const slice = toRef(props, 'slice')
const items = slices.value
  .filter(slice => slice.slice_type === 'pill_link')
  .map(slice => (slice as unknown as { primary: PillLinkSliceDefaultPrimary }).primary)
  .map(primary => ({
    item: primary.item!,
    label: primary.label!,
    active: slice.value.primary.item === primary.item,
  }))
</script>

<template>
  <section class="nq-block-200 pb-16 *:mx-0 max-md:items-start" :class="useSectionColor(slice.primary.bgColor)">
    <PillLinks :items />
  </section>
</template>
