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
        <div text="96 gold" i-nimiq:triangle-right drop-shadow />
      </NuxtLink>
      <PrismicRichText :field="slice.primary.headline" self-end justify-self-start nq-m-32 nq-prose-compact />
    </div>
  </section>
</template>
