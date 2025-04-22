<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.YoutubeVideoSlice>())
const bgClass = getColorClass(slice.primary.bgColor)
</script>

<template>
  <section :class="bgClass.replace('dark', '')" nq-overlaps>
    <div ring="1 neutral-200" aspect-video w-full rounded-8 bg-neutral-0 shadow stack>
      <PrismicImage v-if="hasImage(slice.primary.poster)" :field="slice.primary.poster" size-full rounded-8 object-cover />
      <PrismicLink v-if="slice.primary.youtubeUrl" :field="slice.primary.youtubeUrl">
        <div text="48 md:96 gold" drop-shadow i-nimiq:triangle-right />
      </PrismicLink>
      <RichText wrapper="div" :field="slice.primary.headline" z-1 w-full self-end justify-self-start f-text-2xl f-p-sm />
    </div>
  </section>
</template>

<style scoped>
:deep(h2) {
  --uno: 'f-text-2xl';
}
</style>
