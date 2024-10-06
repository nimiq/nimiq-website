<script setup lang="ts" generic="T">
const { slides, curtains = false, shadow } = defineProps<{ slides: T[], curtains?: boolean, shadow?: boolean }>()

const emit = defineEmits(['indexChanged'])
defineSlots<{ default: (props: { slide: T }) => any }>()

const { activeIndex, calculateStep, scroller, slideNext, slidePrev, slideTo } = useCarousel({ onStepChanged: (index: number) => emit('indexChanged', index) })
</script>

<template>
  <div flex="~ col" cursor-default>
    <div relative mx-auto h-full max-w-full rounded="$r" :class="{ shadow }">
      <template v-if="curtains">
        <div pointer-events-none absolute inset-y-0 left-0 z-1 w-16 bg-gradient="to-r from-$bg to-transparent" />
        <div pointer-events-none absolute inset-y-0 right-0 z-1 w-16 bg-gradient="to-l from-$bg to-transparent" />
      </template>

      <div class="arrow" :class="activeIndex > 0 ? 'visible' : 'invisible'">
        <button tabindex="-1" aria-label="Prev slide" role="button" class="prev" @click="slidePrev">
          <div i-nimiq:chevron-left />
        </button>
      </div>
      <div z-10 mx-0 h-full rounded="$r">
        <ul
          ref="scroller" max-w="[min(100vw,512px)]" snap="x mandatory" h-full flex of-x-auto scroll-smooth nq-scrollbar-hide rounded="$r"
          @scroll.passive="calculateStep"
        >
          <!-- Slides -->
          <li v-for="(slide, i) in slides" :key="i" snap="center always" data-slide grid="~ place-items-center" mx-8 size-full shrink-0 rounded="$r">
            <slot :slide />
          </li>
        </ul>
      </div>
      <div class="arrow" right-0 top-0 :class="activeIndex < slides.length - 1 ? 'visible' : 'invisible'">
        <button tabindex="-1" aria-label="Next slide" role="button" class="prev" @click="slideNext">
          <div i-nimiq:chevron-right />
        </button>
      </div>
    </div>

    <div relative mx-auto flex nq-mt-48>
      <button
        v-for="(_, i) in slides" :key="i" relative size-8 rounded-full bg-neutral-400 transition-transform delay-75 first:ml-0 last:mr-4
        :class="activeIndex === i ? 'ml-8 mr-8 scale-0' : 'ml-4 mr-4 scale-100'" :title="`Go to slide ${i}`"
        @click="() => slideTo(i)"
      />
      <div pointer-events-none absolute h-8 w-full rounded>
        <div h-full w-16 rounded-full bg-green transition-all duration-300 :style="`margin-left: ${16 * activeIndex - (activeIndex === 0 ? 4 : 0)}px`" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.arrow {
  --uno: 'absolute z-20 h-full md:flex items-center hidden';

  button {
    --uno: 'bg-neutral-300 rounded-full grid place-items-center size-64 transition-opacity cursor-pointer z-30 op-0 hover:op-100';

    &.prev {
      --uno: 'after:pl-32';
      right: calc(var(--trigger-size) / 4);
    }

    &.next {
      left: calc(var(--trigger-size) / 4);
      --uno: 'after:pr-32';
    }
  }
}
</style>
