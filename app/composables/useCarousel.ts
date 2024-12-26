interface UseCarouselOptions<Multiple extends boolean> {
  onStepChanged?: (index: number | number[]) => void
  multiple?: Multiple
}

interface UseCarouselResponse<Multiple extends boolean> {
  activeIndex: globalThis.ComputedRef<Multiple extends true ? number[] : number>
  scroller: Ref<HTMLDivElement | undefined>
  items: Ref<Element[]>
  visibleCount: Ref<number>
  calculateStep: (event: Event) => void
  slideTo: (index: number) => void
  slideNext: () => void
  slidePrev: () => void
  canSlideNext: Ref<boolean>
  canSlidePrev: Ref<boolean>
}

export function useCarousel<Multiple extends boolean>(
  options: UseCarouselOptions<Multiple> = {},
): UseCarouselResponse<Multiple> {
  const { multiple = false } = options

  // Single or multiple
  const singleActiveIndex = ref(0)
  const multipleActiveIndexes = ref<number[]>([])

  const scroller = ref<HTMLDivElement>()
  const items = ref<Element[]>([])
  const visibleIndexes = ref<Set<number>>(new Set())

  onMounted(() => {
    if (!scroller.value)
      return

    const slides = scroller.value.querySelectorAll('[data-slide]')
    items.value = Array.from(slides)

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

          // If we're in multiple mode, update array of visible slides
          if (multiple) {
            multipleActiveIndexes.value = Array.from(visibleIndexes.value).sort((a, b) => a - b)
            options.onStepChanged?.(multipleActiveIndexes.value)
          }
        },
        {
          root: scroller.value,
          threshold: 0.5,
        },
      )
    })
  })

  onBeforeUnmount(() => {
    visibleIndexes.value.clear()
  })

  const visibleCount = computed(() => visibleIndexes.value.size)

  // Figure out the "leading" slide if single mode
  function calculateStep(event: Event) {
    if (multiple)
      return // In multiple mode we skip this and rely on intersection

    const target = event.target as HTMLDivElement
    const slideWidth = target.offsetWidth
    singleActiveIndex.value = Math.round(target.scrollLeft / slideWidth)
    options.onStepChanged?.(singleActiveIndex.value)
  }

  let automaticScroll = false
  function slideTo(index: number) {
    automaticScroll = true
    setTimeout(() => (automaticScroll = false), 500)

    const slide = items.value[index] as HTMLElement | undefined
    if (slide) {
      scroller.value?.scrollTo({
        top: 0,
        left: slide.offsetLeft,
        behavior: 'smooth',
      })

      if (multiple) {
        // If we want to jump to a specific slide in multiple mode,
        // we can assume the "leading" index is the one we scrolled to.
        // The actual array of visible indexes will refresh once scrolling happens.
        options.onStepChanged?.(multipleActiveIndexes.value)
      }
      else {
        singleActiveIndex.value = index
        options.onStepChanged?.(singleActiveIndex.value)
      }
    }
  }

  useScroll(scroller, {
    onScroll: (event) => {
      if (automaticScroll)
        return
      calculateStep(event)
    },
  })

  const slideNext = () => {
    if (multiple) {
      // In multiple mode, you could decide how far to jump.
      // For simplicity, jump by 1 from the highest visible index.
      const maxVisible = Math.max(...(multipleActiveIndexes.value.length
        ? multipleActiveIndexes.value
        : [0]))
      slideTo(Math.min(maxVisible + 1, items.value.length - 1))
    }
    else {
      // Single
      slideTo(Math.min(singleActiveIndex.value + 1, items.value.length - 1))
    }
  }

  const slidePrev = () => {
    if (multiple) {
      // Jump back by 1 from the smallest visible index
      const minVisible = Math.min(...(multipleActiveIndexes.value.length
        ? multipleActiveIndexes.value
        : [0]))
      slideTo(Math.max(minVisible - 1, 0))
    }
    else {
      // Single
      slideTo(Math.max(singleActiveIndex.value - 1, 0))
    }
  }

  const activeIndex = computed<Multiple extends true ? number[] : number>(() => (multiple ? multipleActiveIndexes.value : singleActiveIndex.value) as any)

  return {
    activeIndex,

    scroller,
    items,
    visibleCount,
    calculateStep,
    slideTo,
    slideNext,
    slidePrev,

    canSlideNext: computed(() => {
      if (!multiple)
        return singleActiveIndex.value < items.value.length - 1
      // If no slides are visible, there's nothing to do
      if (!multipleActiveIndexes.value.length)
        return false

      const maxVisible = Math.max(...multipleActiveIndexes.value)
      return maxVisible < items.value.length - 1
    }),

    canSlidePrev: computed(() => {
      if (!multiple)
        return singleActiveIndex.value > 0
      if (!multipleActiveIndexes.value.length)
        return false

      const minVisible = Math.min(...multipleActiveIndexes.value)
      return minVisible > 0
    }),
  } satisfies UseCarouselResponse<Multiple>
}
