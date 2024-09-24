<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.RichTextCarouselSlice>())
const sectionRef = useSection(props.slice.id, props.slice.primary.bgColor)
</script>

<template>
  <section v-if="slice.variation === 'default'" ref="sectionRef" md:flex-row>
    <PrismicRichText class="nq-prose" text="14 md:18 neutral-900" :field="slice.primary.content" last-children:pb-0 />

    <!-- TODO Right now we are using a carousel. This is not right. We must use a card swiper instead, see designs -->
    <SimpleCarousel :slides="slice.items" style="--trigger-size:min(300px,20vw); --r: 12px" :shadow="true">
      <template #default="{ slide: { slide: image } }">
        <PrismicImage :field="image" rounded-8 />
      </template>
    </SimpleCarousel>
  </section>
</template>
