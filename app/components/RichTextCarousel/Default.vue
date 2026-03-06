<script setup lang="ts">
const { content, images } = defineProps<{ content: string, images: string[] }>()
const validImages = computed(() => images?.filter(Boolean) || [])
</script>

<template>
  <div class="flex gap-8 md:gap-12 lg:gap-16 flex-col md:flex-row md:items-start">
    <MDC class="nq-prose nq-prose-no-pb nq-prose-no-px pt-24 md:pt-40 md:sticky md:top-32 md:w-2/5 md:shrink-0" :value="content" tag="div" />

    <ClientOnly v-if="validImages.length > 0">
      <UiStackedCarousel v-slot="{ slide }" :slides="validImages" autoplay class="md:w-3/5">
        <NuxtImg v-if="slide" class="rounded-[10px] w-full" :src="slide" alt="" />
      </UiStackedCarousel>
      <template #fallback>
        <NuxtImg class="rounded-[10px]" :src="validImages[0]" alt="" />
      </template>
    </ClientOnly>
  </div>
</template>

<style>
.nq-prose:where(.md\:w-2\/5) :where(h3, h4, ProseH3, ProseH4) {
  --font-size-min-em: 1.25;
  --font-size-max-em: 1.5;
  font-weight: 600;
  margin-top: 0;
}

.nq-prose:where(.md\:w-2\/5) :where(ul) {
  padding-left: 1.5em;
}
</style>
