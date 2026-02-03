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
  <div class="mx-0 px-0 overflow-x-clip [&>*]:max-w-none">
    <div class="flex flex-col md:items-center px-[var(--px)]">
      <h2 class="nq-heading md:text-center">
        {{ headline }}
      </h2>
      <p v-if="description" class="md:text-center">
        {{ description }}
      </p>
    </div>

    <ul class="flex gap-1.5 mx-auto w-max mt-32 md:mt-40 lg:mt-48">
      <li v-for="i in items.length" :key="i" class="flex-1 max-w-24 w-full">
        <button class="bg-neutral-400 hover:bg-neutral-500 focus:bg-neutral-500 mx-auto rounded-0.5 h-1 w-24 transition-colors relative before:absolute before:-inset-4" :class="step === i ? 'bg-green!' : ''" @click="() => goToStep(i)" />
      </li>
    </ul>

    <ul ref="scroller" class="flex gap-4 md:gap-8 xl:gap-12 px-[calc((100%-min(87.2%,684px))/2)] mx-auto overflow-y-hidden pb-24 md:pb-28 lg:pb-32 mt-64 md:mt-80 lg:mt-96 nq-scrollbar-hide snap-x snap-mandatory" @scroll.passive="calculateStep">
      <li v-for="(item, i) in items" :key="i" class="cursor-pointer data-[state=active]:cursor-default opacity-20 data-[state=active]:opacity-100 flex flex-col shrink-0 max-w-[784px] w-full transition-opacity duration-400 snap-center snap-always" :data-state="step - 1 === i ? 'active' : undefined" @click="() => goToStep(i + 1)">
        <NuxtImg class="rounded-1.5 object-cover mb-32 md:mb-40 lg:mb-48 shadow" :src="item.image" width="1368" height="556" />
        <p class="text-neutral-800 text-10 md:text-11 lg:text-12 px-2 md:px-8 xl:px-12 mt-auto nq-label">
          {{ item.label }}
        </p>
        <div class="px-2 md:px-8 xl:px-12 nq-prose-compact mt-8 md:mt-10 lg:mt-12 text-neutral-800 [&>*]:text-20 md:[&>*]:text-22">
          <p>{{ item.description }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
