<script setup lang="ts" generic="T">
import { AnimatePresence, motion } from 'motion-v'

const { slides } = defineProps<{ slides: T[] }>()
const emit = defineEmits<{ indexChanged: [index: number] }>()
defineSlots<{ default: (props: { slide: T }) => any }>()

const activeIndex = ref(0)
const direction = ref(1) // 1 = forward, -1 = backward

function slideTo(index: number) {
  if (index < 0 || index >= slides.length || index === activeIndex.value)
    return
  direction.value = index > activeIndex.value ? 1 : -1
  activeIndex.value = index
  emit('indexChanged', index)
}
function slideNext() {
  slideTo(activeIndex.value + 1)
}

function slidePrev() {
  slideTo(activeIndex.value - 1)
}

// Swipe handling
const containerRef = useTemplateRef<HTMLElement>('containerRef')
let pointerStartX = 0
let pointerStartY = 0
let swiping = false

function onPointerDown(e: PointerEvent) {
  if (e.button !== 0)
    return
  pointerStartX = e.clientX
  pointerStartY = e.clientY
  swiping = true
}
function onPointerMove(e: PointerEvent) {
  if (!swiping)
    return
  const dx = Math.abs(e.clientX - pointerStartX)
  const dy = Math.abs(e.clientY - pointerStartY)
  // If vertical movement dominates, cancel swipe to allow scrolling
  if (dy > dx && dy > 10)
    swiping = false
}
function onPointerUp(e: PointerEvent) {
  if (!swiping)
    return
  swiping = false
  const dx = e.clientX - pointerStartX
  if (Math.abs(dx) > 30) {
    if (dx < 0)
      slideNext()
    else slidePrev()
  }
}

// Keyboard navigation
onMounted(() => {
  useEventListener('keydown', (e: KeyboardEvent) => {
    if (!containerRef.value?.contains(document.activeElement as Node))
      return
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      slideNext()
    }
    else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      slidePrev()
    }
  })
})

const enterFrom = computed(() => ({ opacity: 0, x: direction.value * 60 }))
const exitTo = computed(() => ({ opacity: 0, x: direction.value * -60 }))
</script>

<template>
  <div
    ref="containerRef" class="flex flex-col items-center" tabindex="0"
    @pointerdown="onPointerDown" @pointermove="onPointerMove" @pointerup="onPointerUp" @pointercancel="() => swiping = false"
  >
    <!-- Card stack -->
    <div class="relative w-full max-w-[420px] touch-pan-y" :style="{ paddingTop: '48px' }">
      <!-- Back decoration card -->
      <div v-if="slides.length > 2" class="absolute top-0 left-[48px] right-0 bottom-[48px] bg-white rounded-[10px]" />
      <!-- Middle decoration card -->
      <div v-if="slides.length > 1" class="absolute top-[24px] left-[24px] right-0 bottom-[24px] bg-white rounded-[10px] shadow-[0px_7px_286px_0px_rgba(31,35,72,0.07)]" />
      <!-- Active card -->
      <div class="relative overflow-hidden rounded-[10px] shadow-[0px_7px_286px_0px_rgba(31,35,72,0.07),0px_4px_104px_0px_rgba(31,35,72,0.05),0px_2px_51px_0px_rgba(31,35,72,0.04),0px_2px_25px_0px_rgba(31,35,72,0.04),0px_1px_10px_0px_rgba(31,35,72,0.03)]">
        <AnimatePresence mode="wait">
          <motion.div
            :key="activeIndex"
            :initial="enterFrom"
            :animate="{ opacity: 1, x: 0 }"
            :exit="exitTo"
            :transition="{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }"
          >
            <slot :slide="slides[activeIndex]!" />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>

    <!-- Dot indicators -->
    <div v-if="slides.length > 1" class="flex items-center gap-1.5 mt-6">
      <button
        v-for="(_, i) in slides" :key="i"
        class="rounded-full transition-all duration-300 cursor-pointer"
        :class="activeIndex === i ? 'w-4 h-2 bg-green' : 'size-2 bg-neutral-400 hover:bg-neutral-500'"
        :title="`Go to slide ${i + 1}`"
        @click="slideTo(i)"
      />
    </div>
  </div>
</template>
