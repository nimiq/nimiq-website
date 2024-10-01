interface UseCarouselOptionsInterface {
  onStepChanged?: (index: number) => void
}

export function useCarousel(options: UseCarouselOptionsInterface = {}) {
  const activeIndex = ref(0)
  const scroller = ref<HTMLDivElement>()
  const items = computed(() => scroller.value?.querySelectorAll('[data-slide]'))

  function calculateStep(event: Event) {
    const target = event.target as HTMLDivElement
    const slideWidth = target.offsetWidth
    activeIndex.value = Math.round(target.scrollLeft / slideWidth)
    options?.onStepChanged?.(activeIndex.value)
  }

  let automaticScroll = false
  function slideTo(index: number) {
    automaticScroll = true
    setTimeout(() => automaticScroll = false, 500)

    scroller.value?.scrollTo({
      top: 0,
      left: (scroller.value?.querySelectorAll('[data-slide]')[index] as HTMLElement)?.offsetLeft || 0,
      behavior: 'smooth',
    })
    activeIndex.value = index
  }

  useScroll(scroller, {
    onScroll: (event) => {
      if (automaticScroll)
        return
      calculateStep(event)
    },
  })

  const slideNext = () => slideTo(Math.min(activeIndex.value + 1, (items.value?.length || 1) - 1))
  const slidePrev = () => slideTo(Math.max(activeIndex.value - 1, 0))

  return {
    activeIndex,
    scroller,
    calculateStep,
    slideTo,
    slideNext,
    slidePrev,
    canSlideNext: computed(() => {
      const itemCount = items.value?.length ?? 0
      return activeIndex.value < itemCount - 1
    }),
    canSlidePrev: computed(() => activeIndex.value > 0),
  }
}
