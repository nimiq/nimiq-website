<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.SimpleCarouselSlice>())
</script>

<template>
  <section class="white mx-0 bg-neutral-0 f-text-lg children:max-w-none">
    <SimpleCarousel v-if="slice.variation === 'default'" :slides="slice.items" curtains>
      <template #default="{ slide }">
        <div flex="~ col gap-y-32" sm:text-center>
          <RichText wrapper="div" text-neutral font-bold w-full italic :field="slide.quote" />
          <div flex="~ items-baseline gap-x-8 sm:justify-center" text-12 nq-label class="author">
            <span text-neutral>{{ slide.author }}</span>
            <RichText wrapper="div" :field="slide.authorDetail" />
          </div>
        </div>
      </template>
    </SimpleCarousel>
  </section>
</template>

<style scoped>
.author {
  /* TODO Move this to global? */
  :global(a) {
    --uno: 'text-blue';
  }
}
</style>
