<script setup lang="ts" generic="T">
const { multiple = true, items } = defineProps<{ items: T[], multiple?: boolean }>()

const { slidePrev, scroller, slideNext, activeIndex, slideTo, canSlideNext, canSlidePrev } = useCarousel({ multiple })

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
  <div group h-full max-w-none stack>
    <button bg="neutral-400 disabled:neutral-200  not-disabled:hocus:neutral-500" op="0 group-hover:100 disabled:70" :disabled="!canSlidePrev" invisible z-5 ml-12 w-max justify-self-start rounded-full p-16 shadow transition md:visible stack hocus:cursor-pointer @click="slidePrev">
      <div i-nimiq:chevron-left translate-x--1 text-xl />
    </button>

    <ul ref="scroller" flex="~ gap-16 md:gap-32 items-stretch" snap="x mandatory" scroll-px="$px" pb="$pb" v-bind="$attrs" h-full w-full justify-self-start of-x-auto nq-scrollbar-hide>
      <li v-for="(item, i) in items" :key="i" data-slide h-full snap="start always" p="first:l-$px last:r-$px" flex-1 shrink-0>
        <slot :item />
      </li>
    </ul>

    <button bg="neutral-400 disabled:neutral-200 not-disabled:hocus:neutral-500" op="0 group-hover:100 disabled:0" :disabled="!canSlideNext" invisible z-5 mr-12 w-max justify-self-end rounded-full p-16 shadow transition md:visible stack hocus:cursor-pointer @click="slideNext">
      <div i-nimiq:chevron-right translate-x-1 text-xl />
    </button>

    <ul flex="~ gap-6 justify-center" relative mb-20 self-end>
      <li v-for="i in items.length" :key="i" data-slide flex>
        <button :title="`Slide to number ${i + 1}`" bg="neutral-300 data-active:green hocus:neutral-400" relative size-8 rounded-full transition-colors @click="slideTo(i - 1)" />
      </li>
      <div :style="indicatorsStyles" aria-hidden absolute left-0 top-0 h-8 rounded-full bg-green shadow transition="[transform,width]" />
    </ul>
  </div>
</template>
