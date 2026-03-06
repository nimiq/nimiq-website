<script setup lang="ts" generic="T">
const { slides, autoplay = false, interval = 4000 } = defineProps<{ slides: T[], autoplay?: boolean, interval?: number }>()
const emit = defineEmits<{ indexChanged: [index: number] }>()
defineSlots<{ default: (props: { slide: T }) => any }>()

const STACK_OFFSET = 32
const MAX_VISIBLE_BEHIND = 2
const DURATION = 700
const EASING = 'cubic-bezier(0.22, 1, 0.36, 1)'
const TRANSITION = `transform ${DURATION}ms ${EASING}, opacity ${DURATION}ms ${EASING}`

const activeIndex = ref(0)
const progress = ref(0)
const paused = ref(false)
const isAnimating = ref(false)
const snappingCard = ref<number | null>(null)

const containerRef = useTemplateRef<HTMLElement>('containerRef')
const stackRef = useTemplateRef<HTMLElement>('stackRef')

function getStackPos(slideIndex: number) {
  return (slideIndex - activeIndex.value + slides.length) % slides.length
}

function animateGhostOut(prevIndex: number) {
  if (!stackRef.value)
    return
  // Find the DOM element of the card that was at front
  const cards = stackRef.value.querySelectorAll<HTMLElement>(':scope > [data-card]')
  const sourceCard = cards[prevIndex]
  if (!sourceCard)
    return

  // Clone it and position it at the front
  const ghost = sourceCard.cloneNode(true) as HTMLElement
  ghost.removeAttribute('data-card')
  ghost.className = sourceCard.className.replace(/relative!?/g, '')
  ghost.style.cssText = ''
  ghost.style.position = 'absolute'
  ghost.style.inset = '0'
  ghost.style.transform = 'translateX(0) translateY(0) scale(1)'
  ghost.style.opacity = '1'
  ghost.style.zIndex = `${slides.length + 1}`
  ghost.style.transformOrigin = 'bottom left'
  ghost.style.pointerEvents = 'none'
  stackRef.value.appendChild(ghost)

  // Force reflow so the browser registers the initial state
  void ghost.offsetHeight

  // Animate out in the stack direction
  const exitOffset = (MAX_VISIBLE_BEHIND + 1.5) * STACK_OFFSET
  ghost.style.transition = TRANSITION
  ghost.style.transform = `translateX(${exitOffset}px) translateY(${-exitOffset}px) scale(0.85)`
  ghost.style.opacity = '0'

  // Remove after animation
  ghost.addEventListener('transitionend', () => ghost.remove(), { once: true })
  setTimeout(() => ghost.remove(), DURATION + 50) // Fallback
}

function slideTo(index: number) {
  if (index < 0 || index >= slides.length || index === activeIndex.value || isAnimating.value)
    return
  isAnimating.value = true
  const prevIndex = activeIndex.value
  const goingForward = index === (prevIndex + 1) % slides.length

  // Card that wraps around the circular buffer — must snap without transition
  snappingCard.value = goingForward ? prevIndex : index

  // Create a DOM clone of the front card and animate it out
  animateGhostOut(prevIndex)

  // Update active index — cards reposition
  activeIndex.value = index
  progress.value = 0
  emit('indexChanged', index)

  // Re-enable transitions on the snapped card after it's been painted at its new position
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      snappingCard.value = null
    })
  })

  setTimeout(() => {
    isAnimating.value = false
  }, DURATION + 100)
}

function slideNext() {
  slideTo((activeIndex.value + 1) % slides.length)
}

function slidePrev() {
  slideTo((activeIndex.value - 1 + slides.length) % slides.length)
}

// Autoplay
let lastTime = 0
const { pause: pauseRaf } = useRafFn(({ timestamp }) => {
  if (!autoplay || paused.value || slides.length <= 1)
    return
  if (!lastTime)
    lastTime = timestamp
  const delta = timestamp - lastTime
  lastTime = timestamp
  progress.value += delta / interval
  if (progress.value >= 1) {
    progress.value = 0
    slideNext()
  }
}, { immediate: autoplay })

function pauseAutoplay() {
  paused.value = true
}
function resumeAutoplay() {
  paused.value = false
  lastTime = 0
}

// Swipe handling
let pointerStartX = 0
let pointerStartY = 0
let swiping = false

function onPointerDown(e: PointerEvent) {
  if (e.button !== 0)
    return
  pointerStartX = e.clientX
  pointerStartY = e.clientY
  swiping = true
  pauseAutoplay()
}
function onPointerMove(e: PointerEvent) {
  if (!swiping)
    return
  const dx = Math.abs(e.clientX - pointerStartX)
  const dy = Math.abs(e.clientY - pointerStartY)
  if (dy > dx && dy > 10)
    swiping = false
}
function onPointerUp(e: PointerEvent) {
  if (!swiping) {
    resumeAutoplay()
    return
  }
  swiping = false
  const dx = e.clientX - pointerStartX
  if (Math.abs(dx) > 30)
    dx < 0 ? slideNext() : slidePrev()
  resumeAutoplay()
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

onUnmounted(() => pauseRaf())

function getCardStyle(slideIndex: number) {
  const pos = getStackPos(slideIndex)
  const offset = pos * STACK_OFFSET
  const scale = 1 - pos * 0.04
  const visible = pos <= MAX_VISIBLE_BEHIND
  const snap = snappingCard.value === slideIndex
  return {
    transform: `translateX(${offset}px) translateY(${-offset}px) scale(${scale})`,
    zIndex: `${slides.length - pos}`,
    // Snapping card: hidden at new position, will fade in when transition re-enables
    opacity: snap ? '0' : (visible ? (pos === 0 ? '1' : `${1 - pos * 0.15}`) : '0'),
    pointerEvents: (visible && !snap ? 'auto' : 'none') as 'auto' | 'none',
    transition: snap ? 'none' : TRANSITION,
    transformOrigin: 'bottom left',
  }
}
</script>

<template>
  <div
    ref="containerRef" class="flex flex-col items-center" tabindex="0"
    @pointerdown="onPointerDown" @pointermove="onPointerMove" @pointerup="onPointerUp" @pointercancel="() => { swiping = false; resumeAutoplay() }"
    @mouseenter="pauseAutoplay" @mouseleave="resumeAutoplay"
  >
    <div class="relative w-full max-w-[420px] touch-pan-y" :style="{ padding: `${STACK_OFFSET * MAX_VISIBLE_BEHIND}px ${STACK_OFFSET * MAX_VISIBLE_BEHIND}px 0 0` }">
      <div ref="stackRef" class="relative">
        <div
          v-for="(slide, i) in slides" :key="i"
          data-card
          class="absolute inset-0 rounded-[10px] overflow-hidden bg-white shadow-[0px_7px_286px_0px_rgba(31,35,72,0.07),0px_4px_104px_0px_rgba(31,35,72,0.05),0px_2px_51px_0px_rgba(31,35,72,0.04),0px_2px_25px_0px_rgba(31,35,72,0.04),0px_1px_10px_0px_rgba(31,35,72,0.03)]"
          :class="[getStackPos(i) > 0 && getStackPos(i) <= MAX_VISIBLE_BEHIND ? 'cursor-pointer' : '', i === 0 ? 'relative!' : '']"
          :style="getCardStyle(i)"
          @click="getStackPos(i) > 0 && getStackPos(i) <= MAX_VISIBLE_BEHIND ? slideTo(i) : undefined"
        >
          <slot :slide="slide" />
        </div>
      </div>
    </div>

    <div v-if="slides.length > 1" class="flex items-center justify-between w-full max-w-[420px] mt-8">
      <button class="size-8 rounded-full flex items-center justify-center bg-neutral-400 hover:bg-neutral-500 transition-colors cursor-pointer" title="Previous slide" aria-label="Previous slide" @click="slidePrev">
        <svg class="size-4 text-neutral" viewBox="0 0 16 16" fill="none"><path d="M10 3L5.5 8L10 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
      </button>

      <div class="flex items-center gap-2">
        <button
          v-for="(_, i) in slides" :key="i"
          class="relative h-1.5 rounded-[2px] cursor-pointer transition-[width,background-color] duration-300 overflow-hidden"
          :class="activeIndex === i ? 'w-8 bg-neutral-500' : 'w-4 bg-neutral-500 hover:bg-neutral-600'"
          :title="`Go to slide ${i + 1}`"
          :aria-label="`Go to slide ${i + 1}`"
          @click="slideTo(i)"
        >
          <span
            v-if="autoplay && activeIndex === i"
            class="absolute inset-0 rounded-[2px] bg-green origin-left"
            :style="{ transform: `scaleX(${progress})` }"
          />
          <span v-else-if="activeIndex === i" class="absolute inset-0 rounded-[2px] bg-green" />
        </button>
      </div>

      <button class="size-8 rounded-full flex items-center justify-center bg-neutral-400 hover:bg-neutral-500 transition-colors cursor-pointer" title="Next slide" aria-label="Next slide" @click="slideNext">
        <svg class="size-4 text-neutral" viewBox="0 0 16 16" fill="none"><path d="M6 3L10.5 8L6 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
      </button>
    </div>
  </div>
</template>
