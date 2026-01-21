<script setup lang="ts">
defineProps<{ embedUrl: string, poster?: string, title?: string }>()
const isPlaying = ref(false)
</script>

<template>
  <div class="relative w-full aspect-video rounded-8 of-hidden shadow-lg">
    <iframe v-if="isPlaying" class="absolute inset-0 size-full" :src="embedUrl" :title="title || 'YouTube video'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
    <template v-else>
      <NuxtImg v-if="poster" class="size-full object-cover" :src="poster" :alt="title" loading="lazy" />
      <div v-else class="size-full bg-neutral-300" />
      <button class="absolute inset-0 flex flex-items-center flex-justify-center bg-black/30 bg-hocus:black/40 transition-colors cursor-pointer" type="button" aria-label="Play video" @click="isPlaying = true">
        <Icon class="size-80 text-white op-90" name="nimiq:play" />
      </button>
    </template>
  </div>
</template>
