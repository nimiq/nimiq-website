<script setup lang="ts">
const { content, images } = defineProps<{ content: string, images: string[] }>()
const validImages = computed(() => images?.filter(Boolean) || [])
</script>

<template>
  <div class="flex flex-gap-32 flex-md:gap-40 flex-lg:gap-48 flex-xl:gap-64 flex-col flex-md:row">
    <MDC class="nq-prose-compact text-14 text-md:18 text-neutral-900" :value="content" wrapper="div" />

    <ClientOnly v-if="validImages.length > 0">
      <UiSimpleCarousel :slides="validImages" style="--trigger-size:min(300px,20vw); --r: 12px" :shadow="true">
        <template #default="{ slide }">
          <NuxtImg v-if="slide" class="rounded-8" :src="slide" />
        </template>
      </UiSimpleCarousel>
      <template #fallback>
        <NuxtImg class="rounded-8" :src="validImages[0]" />
      </template>
    </ClientOnly>
  </div>
</template>
