<script setup lang="ts" generic="T">
const { slides, shadow = false } = defineProps<{ slides: T[], shadow?: boolean }>()
const emit = defineEmits<{ indexChanged: [index: number] }>()
defineSlots<{ default: (props: { slide: T }) => any }>()

const { activeIndex, scroller, slideNext, slidePrev, slideTo } = useCarousel({ onStepChanged: (index: number) => emit('indexChanged', index) })
</script>

<template>
  <div flex="~ col" cursor-default>
    <div mx-auto h-full max-w-full relative rounded="$r" :class="{ shadow }">
      <div class="arrow" h-full hidden items-center absolute z-20 md:flex :class="activeIndex > 0 ? 'visible' : 'invisible'">
        <button tabindex="-1" aria-label="Prev slide" class="prev" rounded-full bg-neutral-300 op-0 grid size-64 cursor-pointer transition-opacity place-items-center z-30 hover:op-100 @click="slidePrev">
          <Icon name="nimiq:chevron-left" />
        </button>
      </div>
      <div mx-0 h-full z-10 rounded="$r">
        <ul ref="scroller" max-w="[min(100vw,512px)]" snap="x mandatory" scroll-smooth flex h-full of-x-auto nq-scrollbar-hide rounded="$r" @scroll.passive="() => {}">
          <li v-for="(slide, i) in slides" :key="i" snap="center always" grid="~ place-items-center" data-slide mx-8 shrink-0 size-full rounded="$r">
            <slot :slide />
          </li>
        </ul>
      </div>
      <div class="arrow" h-full hidden items-center right-0 top-0 absolute z-20 md:flex :class="activeIndex < slides.length - 1 ? 'visible' : 'invisible'">
        <button tabindex="-1" aria-label="Next slide" class="next" rounded-full bg-neutral-300 op-0 grid size-64 cursor-pointer transition-opacity place-items-center z-30 hover:op-100 @click="slideNext">
          <Icon name="nimiq:chevron-right" />
        </button>
      </div>
    </div>

    <div mx-auto flex relative f-mt-lg>
      <button v-for="(_, i) in slides" :key="i" rounded-full bg-neutral-400 size-8 transition-transform delay-75 relative first:ml-0 last:mr-4 :class="activeIndex === i ? 'ml-8 mr-8 scale-0' : 'ml-4 mr-4 scale-100'" :title="`Go to slide ${i}`" @click="() => slideTo(i)" />
      <div rounded h-8 w-full pointer-events-none absolute>
        <div rounded-full bg-green h-full w-16 transition-all duration-300 :style="`margin-left: ${16 * activeIndex - (activeIndex === 0 ? 4 : 0)}px`" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.arrow {
  button {
    &.prev {
      right: calc(var(--trigger-size, 200px) / 4);
    }
    &.next {
      left: calc(var(--trigger-size, 200px) / 4);
    }
  }
}
</style>
