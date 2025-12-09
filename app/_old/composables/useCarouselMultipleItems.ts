import type { BaseCarouselOptions, BaseCarouselResponse } from './useCarousel'

export interface CarouselMultipleItemsOptions extends BaseCarouselOptions {
  onStepChanged?: (indexes: number[]) => void
}

export interface CarouselMultipleItemsResponse extends BaseCarouselResponse {
  activeIndexes: Ref<number[]>
  visibleCount: Ref<number>
}

/**
 * Carousel composable for multiple items display with intersection observer
 */
export function useCarouselMultipleItems(options: CarouselMultipleItemsOptions = {}): CarouselMultipleItemsResponse {
  const { initialIndex = 0, keyboard = true } = options

  const activeIndexes = ref<number[]>([])
  const scroller = ref<HTMLDivElement>()
  const items = ref<Element[]>([])
  const visibleIndexes = ref<Set<number>>(new Set())
  const initialized = ref(false)

  // Setup intersection observers for slides
  function setupObservers(): void {
    if (!scroller.value)
      return

    const slides = scroller.value.querySelectorAll('[data-slide]')
    items.value = Array.from(slides)

    if (!items.value.length)
      return

    // Watch each slide for visibility
    items.value.forEach((slide, index) => {
      useIntersectionObserver(
        slide as HTMLDivElement,
        ([entry]) => {
          if (!entry)
            return

          if (entry.isIntersecting)
            visibleIndexes.value.add(index)
          else
            visibleIndexes.value.delete(index)

          activeIndexes.value = Array.from(visibleIndexes.value).sort((a, b) => a - b)
          options.onStepChanged?.(activeIndexes.value)
        },
        {
          root: scroller.value,
          threshold: 0.5,
        },
      )
    })

    // Mark as initialized
    initialized.value = true

    // If there's an initial index set, slide to it
    if (initialIndex > 0 && initialIndex < items.value.length) {
      nextTick(() => slideTo(initialIndex))
    }
  }

  function slideTo(index: number): void {
    if (index < 0 || !items.value.length || index >= items.value.length)
      return

    const slide = items.value[index] as HTMLElement | undefined
    if (slide && scroller.value) {
      scroller.value.scrollTo({
        top: 0,
        left: slide.offsetLeft,
        behavior: 'smooth',
      })

      options.onStepChanged?.(activeIndexes.value)
    }
  }

  const slideNext = (): void => {
    // Jump by 1 from the highest visible index.
    const maxVisible = Math.max(...(activeIndexes.value.length
      ? activeIndexes.value
      : [0]))
    slideTo(Math.min(maxVisible + 1, items.value.length - 1))
  }

  const slidePrev = (): void => {
    // Jump back by 1 from the smallest visible index
    const minVisible = Math.min(...(activeIndexes.value.length
      ? activeIndexes.value
      : [0]))
    slideTo(Math.max(minVisible - 1, 0))
  }

  // Handles resetting the carousel to initial state
  function reset(): void {
    activeIndexes.value = []
    visibleIndexes.value.clear()

    // If scroller exists, slide to initial index after a short delay
    // This ensures the reset works even in modal contexts
    if (scroller.value && initialized.value) {
      nextTick(() => {
        slideTo(initialIndex)
      })
    }
  }

  // Watch for scroller element to be ready
  watch(() => scroller.value, (newVal) => {
    if (newVal) {
      setupObservers()
    }
  }, { immediate: true })

  onMounted(async () => {
    await nextTick()
    if (scroller.value)
      setupObservers()
  })

  // Setup keyboard navigation if enabled
  if (keyboard) {
    onMounted(() => {
      setupCarouselKeyboardNavigation(scroller, slideNext, slidePrev)
    })
  }

  onBeforeUnmount(() => {
    visibleIndexes.value.clear()
  })

  const visibleCount = computed(() => visibleIndexes.value.size)

  return {
    activeIndexes,
    scroller,
    items,
    visibleCount,
    slideTo,
    slideNext,
    slidePrev,
    reset,
    canSlideNext: computed(() => {
      if (!items.value.length || !activeIndexes.value.length)
        return false

      const maxVisible = Math.max(...activeIndexes.value)
      return maxVisible < items.value.length - 1
    }),
    canSlidePrev: computed(() => {
      if (!items.value.length || !activeIndexes.value.length)
        return false

      const minVisible = Math.min(...activeIndexes.value)
      return minVisible > 0
    }),
  }
}
