<script setup lang="ts">
import type { ImageField, LinkField, RichTextField } from '@prismicio/client'

interface YoutubeVideoSlice {
  primary: {
    bgColor: string | undefined
    poster: ImageField
    youtubeUrl: LinkField
    headline: RichTextField
  }
}

const { slice } = defineProps<{ slice: YoutubeVideoSlice, slices?: any[] }>()
const bgClass = getColorClass(slice.primary.bgColor as any)
</script>

<template>
  <section :class="bgClass.replace('dark', '')" nq-overlaps>
    <div ring="1 neutral-200" stack rounded-8 bg-neutral-0 w-full aspect-video shadow>
      <ProxiedPrismicImage v-if="hasImage(slice.primary.poster)" :field="slice.primary.poster" rounded-8 size-full object-cover />
      <PrismicLink v-if="slice.primary.youtubeUrl" :field="slice.primary.youtubeUrl" aria-label="Play video">
        <div text="48 md:96 gold" drop-shadow i-nimiq:triangle-right />
      </PrismicLink>
      <RichText wrapper="div" :field="slice.primary.headline" w-full self-end justify-self-start z-1 f-text-2xl f-p-sm />
    </div>
  </section>
</template>

<style scoped>
:deep(h2) {
  --uno: 'f-text-2xl';
}
</style>
