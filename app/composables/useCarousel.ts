// Common types for both carousel composables
export interface BaseCarouselOptions {
  initialIndex?: number
  keyboard?: boolean
}

export interface BaseCarouselResponse {
  scroller: Ref<HTMLDivElement | undefined>
  items: Ref<Element[]>
  slideTo: (index: number) => void
  slideNext: () => void
  slidePrev: () => void
  canSlideNext: ComputedRef<boolean>
  canSlidePrev: ComputedRef<boolean>
  reset: () => void
}

// Single item carousel types
export interface CarouselOptions extends BaseCarouselOptions {
  onStepChanged?: (index: number) => void
}

export interface CarouselResponse extends BaseCarouselResponse {
  activeIndex: Ref<number>
  calculateStep: (event: Event) => void
}

// Common utility functions for both carousels
export function setupCarouselKeyboardNavigation(
  scroller: Ref<HTMLDivElement | undefined>,
  slideNextFn: () => void,
  slidePrevFn: () => void,
): void {
  useEventListener('keydown', (e: KeyboardEvent) => {
    if (document.activeElement !== scroller.value
      || !scroller.value?.contains(document.activeElement as Node)) {
      return
    }
    e.preventDefault()
    if (e.key === 'ArrowRight')
      slideNextFn()
    else if (e.key === 'ArrowLeft')
      slidePrevFn()
  })
}

/**
 * Carousel composable for single item display with smooth scrolling and keyboard navigation.
 *
 * Provides programmatic control over carousel navigation with automatic slide detection
 * and optional keyboard support (arrow keys). Handles smooth scrolling and index tracking.
 *
 * @param options - Configuration object with initialIndex, keyboard, and onStepChanged callback
 */
export function useCarousel(options: CarouselOptions = {}): CarouselResponse {
  const { initialIndex = 0, keyboard = true } = options

  const activeIndex = ref<number>(initialIndex)
  const scroller = ref<HTMLDivElement>()
  const items = ref<Element[]>([])
  const initialized = ref(false)
  let automaticScroll = false

  // Setup slides and prepare carousel
  function setupSlides(): void {
    if (!scroller.value)
      return

    const slides = scroller.value.querySelectorAll('[data-slide]')
    items.value = Array.from(slides)

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

    automaticScroll = true
    setTimeout(() => (automaticScroll = false), 500)

    const slide = items.value[index] as HTMLElement | undefined
    if (slide && scroller.value) {
      scroller.value.scrollTo({
        top: 0,
        left: slide.offsetLeft,
        behavior: 'smooth',
      })

      activeIndex.value = index
      options.onStepChanged?.(activeIndex.value)
    }
  }

  const slideNext = (): void => {
    slideTo(Math.min(activeIndex.value + 1, items.value.length - 1))
  }

  const slidePrev = (): void => {
    slideTo(Math.max(activeIndex.value - 1, 0))
  }

  // Handles resetting the carousel to initial state
  function reset(): void {
    activeIndex.value = initialIndex

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
      setupSlides()
    }
  }, { immediate: true })

  onMounted(async () => {
    await nextTick()
    if (scroller.value)
      setupSlides()
  })

  // Setup keyboard navigation if enabled
  if (keyboard) {
    onMounted(() => {
      setupCarouselKeyboardNavigation(scroller, slideNext, slidePrev)
    })
  }

  // Figure out the "leading" slide
  function calculateStep(event: Event): void {
    if (!scroller.value)
      return

    const target = event.target as HTMLDivElement
    const slideWidth = target.offsetWidth

    if (slideWidth <= 0)
      return

    const newIndex = Math.round(target.scrollLeft / slideWidth)

    if (activeIndex.value !== newIndex) {
      activeIndex.value = newIndex
      options.onStepChanged?.(activeIndex.value)
    }
  }

  // Set up scroll handling
  function handleScroll(event: Event): void {
    if (automaticScroll)
      return
    calculateStep(event)
  }

  // Use event listener for scroll handling instead of useScroll options
  useEventListener(scroller, 'scroll', handleScroll)

  return {
    activeIndex,
    scroller,
    items,
    calculateStep,
    slideTo,
    slideNext,
    slidePrev,
    reset,
    canSlideNext: computed(() => items.value.length > 0 && activeIndex.value < items.value.length - 1),
    canSlidePrev: computed(() => items.value.length > 0 && activeIndex.value > 0),
  }
}
