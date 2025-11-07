<script setup lang="ts">
import type { ImageField } from '@prismicio/client'
import { breakpointsTailwind } from '@vueuse/core'

interface StakingSliceSlice {
  primary: {
    image: {
      small: ImageField
      medium: ImageField
      large: ImageField
    }
  }
}

const props = defineProps<{ slice: StakingSliceSlice }>()

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
  <section mx-0 px-0 bg-neutral-100 children:max-w-none>
    <ProxiedPrismicImage :field="image" size-full />
  </section>
</template>
