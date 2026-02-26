<script setup lang="ts">
const { content, images } = defineProps<{ content: string, images: string[] }>()
const validImages = computed(() => images?.filter(Boolean) || [])
</script>

<template>
  <div class="flex gap-8 md:gap-10 lg:gap-12 xl:gap-16 flex-col md:flex-row">
    <MDC class="nq-prose-compact text-14 md:text-18 text-neutral-900" :value="content" wrapper="div" />

    <ClientOnly v-if="validImages.length > 0">
      <UiStackedCarousel v-slot="{ slide }" :slides="validImages">
        <NuxtImg v-if="slide" class="rounded-[10px] w-full" :src="slide" />
      </UiStackedCarousel>
      <template #fallback>
        <NuxtImg class="rounded-[10px]" :src="validImages[0]" />
      </template>
    </ClientOnly>
  </div>
</template>
