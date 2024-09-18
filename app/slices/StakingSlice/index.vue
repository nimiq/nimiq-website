<script setup lang="ts">
import type { Content } from '@prismicio/client'
import { breakpointsTailwind } from '@vueuse/core'

const props = defineProps(getSliceComponentProps<Content.StakingSliceSlice>())
const { sectionRef } = useSection(props.slice.id, 'grey', { limitWidth: false, paddingX: false })

const { smallerOrEqual } = useBreakpoints(breakpointsTailwind)

const image = computed(() => {
  if (smallerOrEqual('sm'))
    return props.slice.primary.image.small

  else if (smallerOrEqual('md'))
    return props.slice.primary.image.medium

  return props.slice.primary.image.large
})
</script>

<template>
  <section ref="sectionRef">
    <PrismicImage :field="image" size-full />
  </section>
</template>
