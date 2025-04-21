<script setup lang="ts">
import Modal, { ModalName } from '../Modal.vue'

const { client } = usePrismic()
const { data } = await useAsyncData('technical_details', () => client.getSingle('albatrossSingleType').then(doc => doc.data))
const { buttonLabel, slides } = data.value!

const carousel = useCarousel({ initialIndex: 0 })
const { slidePrev, scroller, slideNext, activeIndex, slideTo, canSlideNext, canSlidePrev } = carousel
</script>

<template>
  <section class="dark" bg-darkerblue pt-0 text-neutral>
    <p text-neutral-800 f-mt-xs>
      This is a preview of the live blockchain
    </p>
    <Modal :name="ModalName.TechnicalDetails" outline="~ 1.5 neutral-500" text-18 nq-pill-lg nq-pill-tertiary f-mt-sm>
      <template #trigger>
        <div i-custom:cli-docs mr-8 />
        <span>{{ buttonLabel }}</span>
        <div ml-8 text-11 op-60 i-nimiq:info />
      </template>

      <template #top>
        <ul flex="~ gap-8" mb-32 mt--8 h-12 w-full px-8 lh-none>
          <li v-for="i in slides?.length" :key="i" flex-1>
            <button
              :class="activeIndex === i - 1 ? 'bg-green' : 'bg-neutral-500'"
              h-4 w-full rounded-full transition-colors
              role="tab"
              :aria-selected="activeIndex === i - 1"
              :tabindex="activeIndex === i - 1 ? 0 : -1"
              @click="slideTo(i - 1)"
            />
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
        <div mx="-24 lg:-40" w="[calc(100%+48px)] lg:[calc(100%+80px)]" relative rounded-b-8>
          <ul
            ref="scroller"
            role="tablist"
            snap="x mandatory"
            flex="~ items-start gap-16"
            w-full of-x-auto
            class="nq-scrollbar-hide"
            tabindex="0"
          >
            <li
              v-for="({ richText }, i) in slides"
              :key="i"
              snap="center always"

              data-slide w-full shrink-0 px-24
              role="tabpanel"
              :aria-hidden="activeIndex !== i"
            >
              <RichText wrapper="div" nq-prose-compact :field="richText" pb-32 />
            </li>
          </ul>
        </div>
        <div flex="~" border="t neutral-500" w="[calc(100%+48px)] lg:[calc(100%+80px)]" mx="-24 lg:-40" sticky bottom-0 mb--32 of-hidden lg:rounded-b-8>
          <button
            :disabled="!canSlidePrev"
            bg="neutral-300 disabled:!neutral-200 hocus:neutral-400"

            flex-1 shrink-0 py-24 transition disabled:op-70
            text="24 neutral-700 disabled:!neutral-700 hocus:neutral-900"
            border="r neutral-500"
            aria-label="Previous slide"
            @click="slidePrev"
          >
            <div mx-auto i-nimiq:chevron-left />
          </button>
          <button
            bg="neutral-300 disabled:!neutral-200 hocus:neutral-400"

            text="24 neutral-700 disabled:!neutral-700 hocus:neutral-900"

            border="r neutral-500"
            :disabled="!canSlideNext"
            flex-1 shrink-0 py-24 transition disabled:op-70
            aria-label="Next slide"
            @click="slideNext"
          >
            <div mx-auto i-nimiq:chevron-right />
          </button>
        </div>
      </template>
    </Modal>
  </section>
</template>

<style>
.modal-container .nq-prose-compact {
  h3 {
    /* --uno: 'f-text-2xl text-center'; */
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
