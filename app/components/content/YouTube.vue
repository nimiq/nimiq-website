<script setup lang="ts">
defineProps<{ embedUrl: string, poster?: string, title?: string }>()
const isPlaying = ref(false)
</script>

<template>
  <div relative w-full aspect-video rounded-8 of-hidden shadow-lg>
    <iframe
      v-if="isPlaying"
      :src="embedUrl"
      :title="title || 'YouTube video'"
      class="absolute inset-0 size-full"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
    <template v-else>
      <NuxtImg v-if="poster" :src="poster" :alt="title" class="size-full object-cover" loading="lazy" />
      <div v-else bg-neutral-300 class="size-full" />
      <button type="button" aria-label="Play video" absolute inset-0 flex="~ items-center justify-center" bg="black/30 hocus:black/40" transition-colors cursor-pointer @click="isPlaying = true">
        <Icon name="nimiq:play" class="size-80 text-white op-90" />
      </button>
    </template>
  </div>
</template>
