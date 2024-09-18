interface UseCarouselOptionsInterface {
  onStepChanged?: (index: number) => void
}

export function useCarousel(options: UseCarouselOptionsInterface = {}) {
  const activeIndex = ref(0)
  const scroller = ref<HTMLDivElement>()

  function calculateStep(event: Event) {
    const target = event.target as HTMLDivElement
    const slideWidth = target.offsetWidth
    activeIndex.value = Math.round(target.scrollLeft / slideWidth)
    options?.onStepChanged?.(activeIndex.value)
  }

  function slideTo(index: number) {
    scroller.value?.scrollTo({
      top: 0,
      left: (scroller.value?.querySelectorAll('[data-slide]')[index] as HTMLElement).offsetLeft || 0,
      behavior: 'smooth',
    })
  }

  const slideNext = () => slideTo(activeIndex.value + 1)
  const slidePrev = () => slideTo(activeIndex.value - 1)

  return {
    activeIndex,
    scroller,
    calculateStep,
    slideTo,
    slideNext,
    slidePrev,
  }
}
