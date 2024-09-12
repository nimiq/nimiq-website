// @unocss-include
function getColorClass(color: 'white' | 'grey' | 'darkblue') {
  switch (color) {
    case 'grey':
      return 'bg-neutral-100 light'
    case 'darkblue':
      return 'bg-darkblue dark text-neutral'
    case 'white':
    default:
      return 'bg-neutral-0 light'
  }
}

export function useSlice(_sliceType: string, color: 'white' | 'grey' | 'darkblue') {
  const sectionRef = useTemplateRef<HTMLElement>(_sliceType)
  const sliceType = _sliceType.split('$').at(0)

  onMounted(async () => {
    await nextTick()
    if (!sectionRef.value) {
      throw new Error(`You forgot to add the ref to the element ${sliceType}`)
    }
    sectionRef.value.dataset.sliceType = sliceType
    sectionRef.value.classList.add(...getColorClass(color).split(' '))
  })

  return { sectionRef }
}
