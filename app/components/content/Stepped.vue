<script setup lang="ts">
interface SlideItem { image: string, label: string, description: string }
const props = defineProps<{ headline: string, description?: string, items: SlideItem[] }>()

const step = ref(1)
const scroller = ref<HTMLUListElement>()
const slides = computed(() => Array.from(scroller.value?.querySelectorAll('li') || []))

const { width } = useWindowSize()

const slideWidth = computed(() => Math.min(0.872 * width.value, 684))
const padding = computed(() => width.value - slideWidth.value)
const numberOfSlides = computed(() => props.items.length)

function calculateStep(event: Event) {
  const target = event.target as HTMLDivElement
  const scrollableWidth = target.scrollWidth - padding.value
  const gap = (scrollableWidth - slideWidth.value * numberOfSlides.value) / (numberOfSlides.value - 1)
  step.value = Math.round(target.scrollLeft / (slideWidth.value + gap)) + 1
}

function goToSlide(slide: HTMLLIElement) {
  scroller.value!.scrollTo({ top: 0, left: slide.offsetLeft - padding.value / 2, behavior: 'smooth' })
}

function goToStep(stepNum: number) {
  const slide = slides.value?.at(stepNum - 1)
  if (!slide)
    return
  goToSlide(slide as HTMLLIElement)
}
</script>

<template>
  <div mx-0 px-0 of-x-clip children:max-w-none>
    <div flex="~ col md:items-center" px="$px">
      <h2 nq-heading md:text-center>
        {{ headline }}
      </h2>
      <p v-if="description" text="neutral-700 f-lg md:center" mt-16 max-w-prose>
        {{ description }}
      </p>
    </div>

    <ul flex="~ gap-6" mx-auto w-max f-mt-lg>
      <li v-for="i in items.length" :key="i" :data-state="step === i ? 'active' : undefined" flex-1 max-w-96 w-full>
        <button bg="neutral-400 hocus:neutral-500 data-active:green" before="absolute inset--16" mx-auto rounded-2 h-4 w-96 transition-colors relative @click="() => goToStep(i)" />
      </li>
    </ul>

    <ul ref="scroller" flex="~ gap-16 md:gap-32 xl:gap-48" px="[calc((100%-min(87.2%,684px))/2)]" snap="x mandatory" m-x-auto of-y-hidden f-pb-md f-mt-2xl nq-scrollbar-hide @scroll.passive="calculateStep">
      <li
        v-for="(item, i) in items" :key="i"
        :data-state="step - 1 === i ? 'active' : undefined" snap="center always" cursor="active:default pointer"
        op="20 data-active:100" flex="~ col" shrink-0 max-w-784 w-full transition-opacity duration-400 @click="() => goToStep(i + 1)"
      >
        <NuxtImg :src="item.image" rounded-6 shadow object-cover f-mb-lg />
        <p text="neutral-800 f-xs" px="8 md:32 xl:48" mt-auto nq-label>
          {{ item.label }}
        </p>
        <p text="neutral-800 f-xl" px="8 md:32 xl:48" f-mt-2xs>
          {{ item.description }}
        </p>
      </li>
    </ul>
  </div>
</template>
