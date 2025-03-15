<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.SteppedLottieSlice>())

const colors = getColorClass('darkblue')

// const index = ref(0)

const { scroller } = useCarousel()
</script>

<template>
  <section :class="colors" nq-overlaps>
    <div bg-darkerblue rounded-6 size-full w-full relative f-p-xl>
      <div bg="white/10" rounded-8 inset-0 absolute />
      <ul ref="scroller" flex="~ items-center" snap="x mandatory" nq-scrollbar-hide of-x-auto>
        <!-- <li v-for="({}, i) in slice.items" :key="i" snap="center always" data-slide w-full shrink-0 grid="~ cols-1 lg:cols-[minmax(auto,440px),1fr] lg:rows-[1fr,auto]" gap="y-16 lg:x-32 lg:y-24 xl:x-48 xl:y-40">
          <RichText wrapper="div"
            :field="
              index === 0
                ? [...slice.primary.title, ...slice.primary.description]
                : [...slice.items[index - 1]!.stepTitle, ...slice.items[index - 1]!.stepDescription]
            "
            f-mt-4
          />
          <div>Animation</div>
        </li> -->
      </ul>
    </div>
  </section>
</template>
