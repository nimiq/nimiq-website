<script setup lang="ts" generic="T">
const { multiple = true, items } = defineProps<{ items: T[], multiple?: boolean }>()

const carousel = multiple ? useCarouselMultipleItems() : useCarousel()

const {
  scroller,
  slideTo,
  slideNext,
  slidePrev,
  canSlideNext,
  canSlidePrev,
} = carousel

// Get activeIndex or activeIndexes based on multiple mode
const activeIndex = multiple
  ? (carousel as ReturnType<typeof useCarouselMultipleItems>).activeIndexes
  : (carousel as ReturnType<typeof useCarousel>).activeIndex

const indicatorsStyles = computed(() => {
  if (!multiple) {
    // single
    const index = activeIndex.value as number
    return {
      width: '8px',
      transform: `translateX(${index * 8}px)`,
    }
  }
  else {
    // multiple
    const arr = (activeIndex.value as number[]).sort((a, b) => a - b)
    if (!arr.length)
      return { width: '0px', transform: 'translateX(0px)' }
    const firstIndex = arr[0]
    const lastIndex = arr[arr.length - 1]
    const count = lastIndex! - firstIndex! + 1
    // each dot is 8px wide, with 6px gap between
    const width = (count * 8) + (count - 1) * 6
    const translateX = firstIndex! * 14 // 8 + 6 = 14 per dot
    return {
      width: `${width}px`,
      transform: `translateX(${translateX}px)`,
    }
  }
})
</script>

<template>
  <div group stack h-full max-w-none>
    <button bg="neutral-400 disabled:neutral-200  not-disabled:hocus:neutral-500" op="0 group-hover:100 disabled:0" :disabled="!canSlidePrev" data-prev stack ml-12 p-16 rounded-full w-max invisible shadow transition justify-self-start z-5 md:visible hocus:cursor-pointer @click="slidePrev">
      <div translate-x--1 f-text-xl i-nimiq:chevron-left />
    </button>

    <ul ref="scroller" flex="~ gap-16 md:gap-32 items-stretch" snap="x mandatory" scroll-px="$px" pb="$pb" v-bind="$attrs" h-full w-full justify-self-start of-x-auto nq-scrollbar-hide>
      <li v-for="(item, i) in items" :key="typeof item === 'object' && item && 'name' in item ? (item.name as any) : i" snap="start always" p="first:l-$px last:r-$px" data-slide flex-1 shrink-0 h-full>
        <slot :item />
      </li>
    </ul>

    <button bg="neutral-400 disabled:neutral-200 not-disabled:hocus:neutral-500" op="0 group-hover:100 disabled:0" :disabled="!canSlideNext" data-next stack mr-12 p-16 rounded-full w-max invisible shadow transition justify-self-end z-5 md:visible hocus:cursor-pointer @click="slideNext">
      <div translate-x-1 f-text-xl i-nimiq:chevron-right />
    </button>

    <ul flex="~ gap-6 justify-center" mb-20 self-end relative>
      <li v-for="i in items.length" :key="i" data-slide flex>
        <button :title="`Slide to number ${i + 1}`" bg="neutral-300 data-active:green hocus:neutral-400" rounded-full size-8 transition-colors relative @click="slideTo(i - 1)" />
      </li>
      <div :style="indicatorsStyles" aria-hidden rounded-full bg-green h-8 shadow left-0 top-0 absolute transition="[transform,width]" />
    </ul>
  </div>
</template>
