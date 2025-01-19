<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.YoutubeVideoSlice>())
const colors = getColorClass(slice.primary.bgColor)
</script>

<template>
  <section :class="colors.replace('dark', '')" nq-overlaps>
    <div ring="1 neutral-200" aspect-video w-full rounded-8 bg-neutral-0 shadow stack>
      <PrismicImage v-if="hasImage(slice.primary.poster)" :field="slice.primary.poster" size-full rounded-8 object-cover />
      <NuxtLink :to="getUrl(slice.primary.youtubeUrl)" external target="_blank">
        <div text="48 md:96 gold" i-nimiq:triangle-right drop-shadow />
      </NuxtLink>
      <PrismicRichText :field="slice.primary.headline" style="--nq-font-size: 14px" z-1 self-end justify-self-start f-mx-32 f-mb-16 />
    </div>
  </section>
</template>

<style scoped>
:deep(h2) {
  --uno: 'text-2xl';
}
</style>
