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

const { sectionRef } = useSlice(props.slice.id, slice.value.primary.bgColor)
</script>

<template>
  <section ref="sectionRef" class="pb-16 *:mx-0 max-md:items-start" :data-slice="slice">
    <PillLinks :items />
  </section>
</template>
