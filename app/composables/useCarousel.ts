export interface CarouselOptions { initialIndex?: number, keyboard?: boolean, onStepChanged?: (index: number) => void }

export function useCarousel(options: CarouselOptions = {}) {
  const { initialIndex = 0, keyboard = true } = options

  const activeIndex = ref<number>(initialIndex)
  const scroller = ref<HTMLDivElement>()
  const items = ref<Element[]>([])
  const automaticScroll = ref(false)
  const { start: resetAutomaticScroll } = useTimeoutFn(() => {
    automaticScroll.value = false
  }, 500, { immediate: false })

  function setupSlides() {
    if (!scroller.value)
      return
    items.value = Array.from(scroller.value.querySelectorAll('[data-slide]'))
    if (initialIndex > 0 && initialIndex < items.value.length)
      nextTick(() => slideTo(initialIndex))
  }

  function slideTo(index: number) {
    if (index < 0 || !items.value.length || index >= items.value.length)
      return
    automaticScroll.value = true
    resetAutomaticScroll()
    const slide = items.value[index] as HTMLElement | undefined
    if (slide && scroller.value) {
      scroller.value.scrollTo({ top: 0, left: slide.offsetLeft, behavior: 'smooth' })
      activeIndex.value = index
      options.onStepChanged?.(activeIndex.value)
    }
  }

  const slideNext = () => slideTo(Math.min(activeIndex.value + 1, items.value.length - 1))
  const slidePrev = () => slideTo(Math.max(activeIndex.value - 1, 0))

  function calculateStep(event: Event) {
    if (!scroller.value || automaticScroll.value)
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

  watch(() => scroller.value, (val) => {
    if (val)
      setupSlides()
  }, { immediate: true })
  onMounted(async () => {
    await nextTick()
    if (scroller.value)
      setupSlides()
  })

  if (keyboard) {
    onMounted(() => {
      useEventListener('keydown', (e: KeyboardEvent) => {
        if (!scroller.value?.contains(document.activeElement as Node))
          return
        e.preventDefault()
        if (e.key === 'ArrowRight')
          slideNext()
        else if (e.key === 'ArrowLeft')
          slidePrev()
      })
    })
  }

  useEventListener(scroller, 'scroll', calculateStep)

  return { activeIndex: readonly(activeIndex), scroller, items: readonly(items), calculateStep, slideTo, slideNext, slidePrev, canSlideNext: computed(() => items.value.length > 0 && activeIndex.value < items.value.length - 1), canSlidePrev: computed(() => items.value.length > 0 && activeIndex.value > 0) }
}
