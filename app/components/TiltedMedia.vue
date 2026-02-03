<script setup lang="ts">
const { src, poster } = defineProps<{ src: string, poster?: string }>()

// Disabled scroll-based tilt animation for visual parity with production
// The animation was causing inconsistent screenshot captures

const isYouTube = computed(() => src.includes('youtube.com') || src.includes('youtu.be'))
const embedUrl = computed(() => {
  if (!isYouTube.value)
    return src
  const videoId = src.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/)?.[1]
  return videoId ? `https://www.youtube.com/embed/${videoId}` : src
})
</script>

<template>
  <!-- eslint-disable-next-line vue/no-restricted-html-elements - section required to match prod structure -->
  <section class="mx-0 px-0 bg-neutral-100" style="--px: 0;" :class="{ 'nq-overlaps': !isYouTube }">
    <!-- Hexagon background decoration - invisible/subtle decorative element -->
    <div class="max-w-screen w-full relative overflow-x-clip">
      <div class="w-[320vw] md:w-[140vw] h-screen max-w-none pointer-events-none inset-0 absolute bg-hexagons" />
    </div>
    <!-- Tilted media content with 3D perspective transform -->
    <div class="px-32 w-full overflow-x-clip max-md:max-w-none mb-24 md:mb-32">
      <div class="mx-auto h-full min-h-[500px] [&>*]:w-full" style="transform: perspective(1800px) rotateX(30deg) translateY(-100px); transform-origin: center 70%;">
        <template v-if="isYouTube">
          <NuxtLink v-if="poster" class="mx-auto flex items-center justify-center relative [&>*]:rounded-lg" :to="src" external target="_blank">
            <NuxtImg class="rounded-lg w-full" :src="poster" />
            <div class="bg-gradient-to-b from-neutral/30 to-neutral/60 size-full absolute inset-0 rounded-lg" />
            <Icon class="text-56 text-white absolute" name="nimiq:triangle-right" />
          </NuxtLink>
          <iframe v-else class="rounded-lg w-full aspect-video" :src="embedUrl" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        </template>
        <NuxtImg v-else :src />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Hexagon background - uses SVG mask with very subtle opacity (0.01-0.06) */
.bg-hexagons {
  background-color: var(--color-neutral-800);
  mask-image: url('/assets/custom-icons/bg-hexagons.svg');
  mask-mode: alpha;
  mask-repeat: no-repeat;
  mask-size: contain;
}
</style>
