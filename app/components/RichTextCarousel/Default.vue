<script setup lang="ts">
const { content, images } = defineProps<{ content: string, images: string[] }>()
const validImages = computed(() => images?.filter(Boolean) || [])
</script>

<template>
  <div class="flex gap-8 flex-md:gap-10 flex-lg:gap-12 flex-xl:gap-16 flex-col flex-md:row">
    <MDC class="nq-prose-compact text-14 text-md:18 text-neutral-900" :value="content" wrapper="div" />

    <ClientOnly v-if="validImages.length > 0">
      <UiSimpleCarousel :slides="validImages" style="--trigger-size:min(300px,20vw); --r: 12px" :shadow="true">
        <template #default="{ slide }">
          <NuxtImg v-if="slide" class="rounded-2" :src="slide" />
        </template>
      </UiSimpleCarousel>
      <template #fallback>
        <NuxtImg class="rounded-2" :src="validImages[0]" />
      </template>
    </ClientOnly>
  </div>
</template>
