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
  <div class="mx-0 px-0 of-x-clip" children:max-w-none>
    <div class="flex flex-col flex-md:items-center px-$px">
      <h2 class="nq-heading md:text-center">
        {{ headline }}
      </h2>
      <p v-if="description" class="text-neutral-700 text-base md:text-lg text-md:center mt-4 max-w-prose">
        {{ description }}
      </p>
    </div>

    <ul class="flex gap-1.5 mx-auto w-max mt-6 md:mt-8">
      <li v-for="i in items.length" :key="i" class="flex-1 max-w-24 w-full" :data-state="step === i ? 'active' : undefined">
        <button class="bg-neutral-400 bg-hocus:neutral-500 bg-data-active:green mx-auto rounded-0.5 h-1 w-24 transition-colors relative" before="absolute -inset-4" @click="() => goToStep(i)" />
      </li>
    </ul>

    <ul ref="scroller" class="flex gap-4 flex-md:gap-8 flex-xl:gap-12 px-[calc((100%-min(87.2%,684px))/2)] m-x-auto of-y-hidden pb-4 md:pb-6 mt-12 md:mt-16 nq-scrollbar-hide" snap="x mandatory" @scroll.passive="calculateStep">
      <li v-for="(item, i) in items" :key="i" class="cursor-active:default cursor-pointer op-20 op-data-active:100 flex flex-col shrink-0 max-w-[784px] w-full transition-opacity duration-400" :data-state="step - 1 === i ? 'active' : undefined" snap="center always" @click="() => goToStep(i + 1)">
        <NuxtImg class="rounded-1.5 object-cover mb-6 md:mb-8" :src="item.image" shadow />
        <p class="text-neutral-800 text-[11px] md:text-xs px-2 px-md:32 px-xl:48 mt-auto nq-label">
          {{ item.label }}
        </p>
        <p class="text-neutral-800 text-lg md:text-xl px-2 px-md:32 px-xl:48 mt-1 md:mt-1.5">
          {{ item.description }}
        </p>
      </li>
    </ul>
  </div>
</template>
