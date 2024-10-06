<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.TiltedMediaSlice>())
const colors = getColorClass(props.slice.primary.bgColor)
const url = computed(() => {
  if (props.slice.variation === 'default')
    // @ts-expect-error The URL is always present in this case
    return props.slice.primary.media.url
  return ''
})
</script>

<template>
  <section :class="colors" class="mx-0 px-0 children:max-w-none">
    <TiltedMedia v-if="slice.variation === 'default'">
      <NuxtImg :src="url" />
    </TiltedMedia>
  </section>
</template>
