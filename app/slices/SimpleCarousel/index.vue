<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.SimpleCarouselSlice>())
const { sectionRef } = useSection(props.slice.id, 'grey', { limitWidth: false, text: 'xl' })
</script>

<template>
  <section ref="sectionRef">
    <SimpleCarousel v-if="slice.variation === 'default'" :slides="slice.items" curtains>
      <template #default="{ slide }">
        <div flex="~ col gap-y-32" px="32 sm:64" sm:text-center>
          <PrismicRichText w-full text-neutral font-semibold italic :field="slide.quote" />
          <div flex="~ items-baseline gap-x-8 sm:justify-center" text-12 nq-label class="author">
            <span text-neutral>{{ slide.author }}</span>
            <PrismicRichText :field="slide.authorDetail" />
          </div>
        </div>
      </template>
    </SimpleCarousel>
  </section>
</template>

<style scoped>
.author {
  :global(a) {
    --uno: 'text-blue';
  }
}
</style>
