<script setup lang="ts">
import type { Content } from '@prismicio/client'

// TODO Replace CtaSectionSlice with your slice
const props = defineProps(getSliceComponentProps<Content.RichTextCarouselSlice>())
const { sectionRef } = useSection(props.slice.id, 'white')
</script>

<template>
  <section v-if="slice.variation === 'default'" ref="sectionRef" md:flex-row>
    <PrismicRichText class="nq-prose" :field="slice.primary.content" last-children:pb-0 />

    <!-- TODO Right now we are using a carousel. This is not right. We must use a card swiper instead, see designs -->
    <SimpleCarousel :slides="slice.items" shadow style="--trigger-size:min(300px,20vw); --r: 12px">
      <template #default="{ slide: { slide: image } }">
        <PrismicImage :field="image" rounded-8 />
      </template>
    </SimpleCarousel>
  </section>
</template>
