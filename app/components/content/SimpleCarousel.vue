<script setup lang="ts">
import RichTextComponent from '~/components/RichText.vue'
import SimpleCarouselComponent from '~/components/SimpleCarousel.vue'

interface SimpleCarouselSlice {
  items: any[]
  variation?: string
}

const { slice } = defineProps<{ slice: SimpleCarouselSlice, slices?: any[] }>()
</script>

<template>
  <section class="white mx-0 bg-neutral-0 f-text-lg children:max-w-none">
    <SimpleCarouselComponent v-if="slice.variation === 'default'" :slides="slice.items" curtains>
      <template #default="{ slide }: { slide: any }">
        <div flex="~ col gap-y-32" sm:text-center>
          <RichTextComponent wrapper="div" text-neutral font-bold w-full italic :field="slide.quote" />
          <div flex="~ items-baseline gap-x-8 sm:justify-center" text-12 nq-label class="author">
            <span text-neutral>{{ slide.author }}</span>
            <RichTextComponent wrapper="div" :field="slide.authorDetail" />
          </div>
        </div>
      </template>
    </SimpleCarouselComponent>
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
