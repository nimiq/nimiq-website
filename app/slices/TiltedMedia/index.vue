<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.TiltedMediaSlice>())
const { sectionRef } = useSection(props.slice.id, 'grey', { limitWidth: false, paddingX: false })
const url = computed(() => {
  if (props.slice.variation === 'default')
    // @ts-expect-error The URL is always present in this case
    return props.slice.primary.media.url
  return ''
})
</script>

<template>
  <section ref="sectionRef">
    <TiltedMedia v-if="slice.variation === 'default'">
      <NuxtImg :src="url" />
    </TiltedMedia>
  </section>
</template>
