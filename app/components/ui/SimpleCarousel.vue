<script setup lang="ts" generic="T">
const { slides, shadow = false } = defineProps<{ slides: T[], shadow?: boolean }>()
const emit = defineEmits<{ indexChanged: [index: number] }>()
defineSlots<{ default: (props: { slide: T }) => any }>()

const { activeIndex, scroller, slideNext, slidePrev, slideTo } = useCarousel({ onStepChanged: (index: number) => emit('indexChanged', index) })
</script>

<template>
  <div class="flex flex-col cursor-default">
    <div class="mx-auto h-full max-w-full relative rounded-$r" :class="{ shadow }">
      <div class="arrow h-full items-center absolute z-20 md:flex" hidden :class="activeIndex > 0 ? 'visible' : 'invisible'">
        <button class="prev rounded-full bg-neutral-300 opacity-0 grid size-16 cursor-pointer transition-opacity place-items-center z-30 hover:opacity-100" tabindex="-1" aria-label="Prev slide" @click="slidePrev">
          <Icon name="nimiq:chevron-left" />
        </button>
      </div>
      <div class="mx-0 h-full z-10 rounded-$r">
        <ul ref="scroller" class="max-w-[min(100vw,512px)] scroll-smooth flex h-full overflow-x-auto nq-scrollbar-hide rounded-$r" snap="x mandatory" @scroll.passive="() => {}">
          <li v-for="(slide, i) in slides" :key="i" class="grid grid-place-items-center mx-2 shrink-0 size-full rounded-$r" snap="center always" data-slide>
            <slot :slide />
          </li>
        </ul>
      </div>
      <div class="arrow h-full items-center right-0 topacity-0 absolute z-20 md:flex" hidden :class="activeIndex < slides.length - 1 ? 'visible' : 'invisible'">
        <button class="next rounded-full bg-neutral-300 opacity-0 grid size-16 cursor-pointer transition-opacity place-items-center z-30 hover:opacity-100" tabindex="-1" aria-label="Next slide" @click="slideNext">
          <Icon name="nimiq:chevron-right" />
        </button>
      </div>
    </div>

    <div class="mx-auto flex relative mt-6 md:mt-8">
      <button v-for="(_, i) in slides" :key="i" class="rounded-full bg-neutral-400 size-2 transition-transform delay-75 relative first:ml-0 last:mr-1" :class="activeIndex === i ? 'ml-2 mr-2 scale-0' : 'ml-1 mr-1 scale-100'" :title="`Go to slide ${i}`" @click="() => slideTo(i)" />
      <div class="h-2 w-full pointer-events-none absolute" rounded>
        <div class="rounded-full bg-green h-full w-4 transition-all duration-300" :style="`margin-left: ${16 * activeIndex - (activeIndex === 0 ? 4 : 0)}px`" />
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
