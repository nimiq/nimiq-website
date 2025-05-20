<script setup lang="ts">
import type { Content } from '@prismicio/client'
import Modal, { ModalName } from '~/components/Modal.vue'

defineProps(getSliceComponentProps<Content.AlbatrossTechnicalDetailsSlice>())
const { client } = usePrismic()
const { data } = await useAsyncData('technical_details', () => client.getSingle('albatrossSingleType').then(doc => doc.data))
const { buttonLabel, slides } = data.value!

const carousel = useCarousel({ initialIndex: 0 })
const { slidePrev, scroller, slideNext, activeIndex, slideTo, canSlideNext, canSlidePrev } = carousel
</script>

<template>
  <section class="dark" text-neutral pt-0 bg-darkerblue>
    <div nq-prose-compact text-neutral-800 f-mt-xs>
      <RichText :field="slice.primary.subline" />
    </div>
    <Modal v-if="slice.primary.asModal" :name="ModalName.TechnicalDetails" outline="~ 1.5 neutral-500" text-18 f-mt-sm nq-pill-lg nq-pill-tertiary>
      <template #trigger>
        <div i-custom:cli-docs mr-8 />
        <span>{{ buttonLabel }}</span>
        <div text-11 ml-8 op-60 i-nimiq:info />
      </template>

      <template #top>
        <ul flex="~ gap-8" lh-none mb-32 mt--8 px-8 h-12 w-full>
          <li v-for="i in slides?.length" :key="i" flex-1>
            <button :class="activeIndex === i - 1 ? 'bg-green' : 'bg-neutral-500'" rounded-full h-4 w-full transition-colors role="tab" :aria-selected="activeIndex === i - 1" :tabindex="activeIndex === i - 1 ? 0 : -1" @click="slideTo(i - 1)" />
          </li>
        </ul>
      </template>

      <template #title>
        <p sr-only>
          Albatross Technical Details
        </p>
      </template>
      <template #description>
        <p sr-only>
          Learn about the technical details of Nimiq's Albatross and what each of the elements are
        </p>
      </template>

      <template #content>
        <div mx="-24 lg:-40" w="[calc(100%+48px)] lg:[calc(100%+80px)]" rounded-b-8 relative>
          <ul ref="scroller" role="tablist" snap="x mandatory" flex="~ items-start gap-16" w-full of-x-auto class="nq-scrollbar-hide" tabindex="0">
            <li v-for="({ richText }, i) in slides" :key="i" snap="center always" data-slide px-24 shrink-0 w-full role="tabpanel" :aria-hidden="activeIndex !== i">
              <RichText wrapper="div" nq-prose-compact :field="richText" pb-32 />
            </li>
          </ul>
        </div>
        <div flex="~" border="t neutral-500" w="[calc(100%+48px)] lg:[calc(100%+80px)]" mx="-24 lg:-40" mb--32 bottom-0 sticky of-hidden lg:rounded-b-8>
          <button :disabled="!canSlidePrev" bg="neutral-300 disabled:!neutral-200 hocus:neutral-400" py-24 flex-1 shrink-0 transition disabled:op-70 text="24 neutral-700 disabled:!neutral-700 hocus:neutral-900" border="r neutral-500" aria-label="Previous slide" @click="slidePrev">
            <div mx-auto i-nimiq:chevron-left />
          </button>
          <button bg="neutral-300 disabled:!neutral-200 hocus:neutral-400" text="24 neutral-700 disabled:!neutral-700 hocus:neutral-900" border="r neutral-500" :disabled="!canSlideNext" py-24 flex-1 shrink-0 transition disabled:op-70 aria-label="Next slide" @click="slideNext">
            <div mx-auto i-nimiq:chevron-right />
          </button>
        </div>
      </template>
    </Modal>
    <article v-else grid="~  cols-[repeat(auto-fit,minmax(320px,1fr))] gap-x-64" max-w="$nq-prose-max-width" f-pt-lg>
      <RichText v-for="(slide, i) in slides" :key="i" wrapper="div" nq-prose-compact :field="slide.richText" f-mt-md />
    </article>
  </section>
</template>

<style>
.modal-container h3 {
  --uno: 'f-text-2xl text-center';
}

.modal-container [nq-prose-compact] .block-img img {
  --uno: 'mx-auto w-160';
}
</style>

<style scoped>
article {
  &:deep(h3) {
    --uno: 'text-neutral f-mb-xs';
  }
  &:deep(p) {
    --uno: 'text-neutral-800';
  }
  &:deep(img) {
    --uno: 'bg-white/90 w-160 rounded-12 ml-0 f-mb-xs';
  }
}
</style>
