<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.YoutubeVideoSlice>())
const colors = getColorClass(slice.primary.bgColor)
</script>

<template>
  <section :class="colors.replace('dark', '')" nq-overlaps>
    <div ring="1 neutral-200" stack rounded-8 bg-neutral-0 w-full aspect-video shadow>
      <PrismicImage v-if="hasImage(slice.primary.poster)" :field="slice.primary.poster" rounded-8 size-full object-cover />
      <NuxtLink :to="getUrl(slice.primary.youtubeUrl)" external target="_blank">
        <div text="48 md:96 gold" i-nimiq:triangle-right drop-shadow />
      </NuxtLink>
      <RichText wrapper="div" :field="slice.primary.headline" style="--nq-font-size: 14px" self-end justify-self-start z-1 f-mt-md f-mt-xs />
    </div>
  </section>
</template>

<style scoped>
:deep(h2) {
  --uno: 'f-text-2xl';
}
</style>
