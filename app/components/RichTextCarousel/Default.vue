<script setup lang="ts">
const { content, images } = defineProps<{ content: string, images: string[] }>()
const validImages = computed(() => images?.filter(Boolean) || [])
</script>

<template>
  <div flex="~ gap-32 md:gap-40 lg:gap-48 xl:gap-64 col md:row">
    <MDC :value="content" wrapper="div" class="nq-prose-compact" text="14 md:18 neutral-900" />

    <ClientOnly v-if="validImages.length > 0">
      <UiSimpleCarousel :slides="validImages" style="--trigger-size:min(300px,20vw); --r: 12px" :shadow="true">
        <template #default="{ slide }">
          <NuxtImg v-if="slide" :src="slide" rounded-8 />
        </template>
      </UiSimpleCarousel>
      <template #fallback>
        <NuxtImg :src="validImages[0]" rounded-8 />
      </template>
    </ClientOnly>
  </div>
</template>
