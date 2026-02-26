<script setup lang="ts">
const { embedUrl } = defineProps<{ embedUrl: string, poster?: string, posterMobile?: string, title?: string }>()
const isPlaying = ref(false)

const isVideo = computed(() => embedUrl.endsWith('.mp4') || embedUrl.endsWith('.webm') || embedUrl.endsWith('.mov'))
</script>

<template>
  <div class="video-container mx-auto relative w-full max-w-[900px] rounded-2 overflow-hidden shadow-lg aspect-video">
    <template v-if="isVideo">
      <video v-if="isPlaying" class="absolute inset-0 size-full object-cover" :src="embedUrl" autoplay controls loop muted playsinline />
      <template v-else>
        <picture v-if="poster" class="absolute inset-0 size-full">
          <source v-if="posterMobile" media="(max-width: 767px)" :srcset="posterMobile">
          <img class="size-full object-cover" :src="poster" :alt="title" loading="lazy">
        </picture>
        <div v-else class="absolute inset-0 size-full bg-neutral-300" />
        <slot />
        <button class="absolute inset-0 z-20 flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer" type="button" aria-label="Play video" @click="isPlaying = true">
          <div class="bg-neutral/50 backdrop-blur-sm flex items-center justify-center rounded-full size-[72px]">
            <Icon class="size-8 text-white translate-x-0.5" name="nimiq:triangle-right" />
          </div>
        </button>
      </template>
    </template>
    <template v-else>
      <iframe v-if="isPlaying" class="absolute inset-0 size-full" :src="embedUrl" :title="title || 'YouTube video'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
      <template v-else>
        <picture v-if="poster" class="absolute inset-0 size-full">
          <source v-if="posterMobile" media="(max-width: 767px)" :srcset="posterMobile">
          <img class="size-full object-cover" :src="poster" :alt="title" loading="lazy">
        </picture>
        <div v-else class="absolute inset-0 size-full bg-neutral-300" />
        <button class="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 focus:bg-black/40 transition-colors cursor-pointer" type="button" aria-label="Play video" @click="isPlaying = true">
          <Icon class="size-20 text-white opacity-90" name="nimiq:play" />
        </button>
      </template>
    </template>
  </div>
</template>
