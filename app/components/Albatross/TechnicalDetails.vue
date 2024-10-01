<script setup lang="ts">
import Modal, { ModalName } from '../Modal.vue'

const { client } = usePrismic()
const { data } = useAsyncData('technical_details', () => client.getByType('albatrossSingleType'))

const buttonLabel = computed(() => data.value?.results.at(0)?.data.buttonLabel)
const slides = computed(() => data.value?.results.at(0)?.data.slides)

const { slidePrev, scroller, slideNext, activeIndex, slideTo, canSlideNext, canSlidePrev } = useCarousel()
const sectionRef = useSection('technical_details', 'darkblue', { paddingY: false })
</script>

<template>
  <section ref="sectionRef">
    <Modal :name="ModalName.TechnicalDetails" text-18 nq-pill-lg nq-pill-tertiary @close="activeIndex = 0">
      <template #trigger>
        <div i-custom:cli-docs mr-8 />
        <span>{{ buttonLabel }}</span>
        <div i-nimiq:info ml-8 text-11 op-60 />
      </template>

      <template #top>
        <ul flex="~ gap-8" mb-32 mt--8 h-12 w-full px-8 lh-none>
          <li v-for="i in slides?.length" :key="i" flex-1>
            <button :class="activeIndex === i - 1 ? 'bg-green' : 'bg-neutral-500'" h-4 w-full rounded-full transition-colors @click="slideTo(i - 1)" />
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
        <div relative mx--32 w-full px-16 w="![calc(100%+64px)]">
          <ul ref="scroller" snap="x mandatory" flex="~ items-start gap-16" w-full of-x-auto class="nq-scrollbar-hide">
            <li v-for="({ richText }, i) in slides" :key="i" snap="center always" data-slide w-full shrink-0 px-8>
              <PrismicRichText class="nq-prose-compact nq-prose" :field="richText" pb-32 />
            </li>
          </ul>
          <div bg-gradient="to-l from-neutral-0 to-transparent" pointer-events-none absolute inset-y-0 right-12 w-12 />
          <div bg-gradient="to-r from-neutral-0 to-transparent" pointer-events-none absolute inset-y-0 left-12 w-12 />
        </div>
        <div flex="~" border="t neutral-500" w="[calc(100%+80px)]" sticky bottom-0 mx--40 mb--32 rounded-b-8>
          <button :disabled="!canSlidePrev" bg="neutral-300 disabled:!neutral-200 :hocus:neutral-400" flex-1 shrink-0 py-24 transition disabled:op-70 text="24 neutral-700 disabled:!neutral-700 hocus:neutral-900" border="r neutral-500" @click="slidePrev">
            <div i-nimiq:chevron-left mx-auto />
          </button>
          <button bg="neutral-300 disabled:!neutral-200 hocus:neutral-400" flex-1 text="24 neutral-700 disabled:!neutral-700 hocus:neutral-900" shrink-0 py-24 transition border="r neutral-500" :disabled="!canSlideNext" disabled:op-70 @click="slideNext">
            <div i-nimiq:chevron-right mx-auto />
          </button>
        </div>
      </template>
    </Modal>
  </section>
</template>

<style>
.modal-container .nq-prose {
  h3 {
    /* --uno: 'text-2xl text-center'; */
    --nq-font-size-min: 20;
    --nq-font-size-max: 24;
    text-align: center;
  }
  img {
    /* --uno: 'w-160 mx-auto'; */
    width: 160px;
    margin: auto;
  }
}
</style>
