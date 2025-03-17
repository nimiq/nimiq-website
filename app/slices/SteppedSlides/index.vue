<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.SteppedSlidesSlice>())

const step = ref(1)
const scroller = ref<HTMLUListElement>()
const slides = computed(() => Array.from(scroller.value?.querySelectorAll('li') || []))

const { width } = useWindowSize()

const slideWidth = computed(() => Math.min(0.872 * width.value, 684))
const padding = computed(() => width.value - slideWidth.value)
const numberOfSlides = computed(() => props.slice.items.length)

function calculateStep(event: Event) {
  const target = event.target as HTMLDivElement

  const scrollableWidth = target.scrollWidth - padding.value
  const gap = (scrollableWidth - slideWidth.value * numberOfSlides.value) / (numberOfSlides.value - 1)

  step.value = Math.round(target.scrollLeft / (slideWidth.value + gap)) + 1
}

function goToSlide(slide: HTMLLIElement) {
  scroller.value!.scrollTo({ top: 0, left: slide.offsetLeft - padding.value / 2, behavior: 'smooth' })
}

function goToStep(step: number) {
  const slide = slides.value?.at(step - 1)
  if (!slide)
    return
  goToSlide(slide)
}
</script>

<template>
  <section mx-0 of-x-clip bg-neutral-0 px-0 children:max-w-none>
    <Headline :headline="slice.primary.headline" :subline="slice.primary.description" px="$px" />

    <ul flex="~ gap-6" mx-auto f-mt-lg>
      <li v-for="i in slice.items.length" :key="i" :data-state="step - 1 === i ? 'active' : undefined" max-w-384 flex-1>
        <button bg="neutral-400 hocus:neutral-500 data-active:green" mx-auto h-4 w-full transition-colors />
      </li>
    </ul>

    <ul ref="scroller" flex="~ gap-16 md:gap-32 xl:gap-48" px="[calc((100%-min(87.2%,684px))/2)]" snap="x mandatory" m-x-auto of-y-hidden nq-scrollbar-hide f-pb-md f-mt-2xl @scroll.passive="calculateStep">
      <li
        v-for="(item, i) in slice.items" :key="i"
        :data-state="step - 1 === i ? 'active' : undefined" snap="center always" cursor="active:default pointer"
        op="20 data-active:100" max-w-784 w-full shrink-0 transition-opacity duration-400 @click="() => goToStep(i + 1)"
      >
        <PrismicImage v-if="'image' in item" :field="item.image" rounded-6 object-cover shadow />
        <!-- <VLottie
          v-else-if="slice.variation === 'withAnimations'"
          :src="item.source.url"
          :is-running="i === step - 1"
          :preload="i <= step + 1"
          :loop="i === 0"
        /> -->
        <p text="neutral-800 f-xs" px="8 md:32 xl:48" nq-label f-mt-lg>
          {{ item.label }}
        </p>
        <RichText wrapper="div" px="8 md:32 xl:48" :field="item.description" nq-prose-compact f-mt-2xs text="neutral-800 children:f-xl" />
      </li>
    </ul>
  </section>
</template>
