<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.YoutubeVideoSlice>())
const colors = getColorClass(slice.primary.bgColor)
</script>

<template>
  <section :class="colors.replace('dark', '')" nq-overlaps>
    <div ring="1 neutral-200" aspect-video w-full rounded-8 bg-neutral-0 shadow stack>
      <PrismicImage v-if="hasImage(slice.primary.poster)" :field="slice.primary.poster" size-full rounded-8 object-cover />
      <NuxtLink v-if="slice.primary.youtubeUrl" :to="getUrl(slice.primary.youtubeUrl)" external target="_blank">
        <div text="48 md:96 gold" drop-shadow i-nimiq:triangle-right />
      </NuxtLink>
      <RichText wrapper="div" :field="slice.primary.headline" style="--nq-font-size: 14px" z-1 w-max self-end justify-self-start f-text-2xl f-p-sm />
    </div>
  </section>
</template>

<style scoped>
:deep(h2) {
  --uno: 'f-text-2xl';
}
</style>
