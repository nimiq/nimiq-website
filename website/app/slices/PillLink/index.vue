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
  <section class="pt-200" :class="{ dark: slice.primary.dark }">
    <PillLinks :items />
  </section>
</template>
