<script setup lang="ts">
import type { ImageField, RichTextField } from '@prismicio/client'

defineProps<{ content: RichTextField, images: ImageField<never>[] }>()
</script>

<template>
  <div flex="~ gap-32 md:gap-40 lg:gap-48 xl:gap-64 col md:row">
    <RichText wrapper="div" nq-prose-compact text="14 md:18 neutral-900" :field="content" />

    <!-- TODO Right now we are using a carousel. This is not right. We must use a card swiper instead, see designs -->
    <SimpleCarousel :slides="images" style="--trigger-size:min(300px,20vw); --r: 12px" :shadow="true">
      <template #default="{ slide: image }">
        <ProxiedPrismicImage :field="image" rounded-8 />
      </template>
    </SimpleCarousel>
  </div>
</template>
