// @unocss-include
function getColorClass(color: 'white' | 'grey' | 'darkblue') {
  switch (color) {
    case 'grey':
      return 'bg-neutral-100'
    case 'darkblue':
      return 'bg-darkblue dark text-neutral'
    case 'white':
    default:
      return 'bg-neutral-0'
  }
}

export function useSlice(_sliceType: string, color?: 'white' | 'grey' | 'darkblue' | null) {
  const sectionRef = ref<HTMLElement>()
  const sliceType = _sliceType.split('$').at(0)

  watchEffect(() => {
    if (!sectionRef.value)
      return
    sectionRef.value.dataset.sliceType = sliceType
    sectionRef.value.classList.remove('bg-neutral-0', 'bg-neutral-100', 'bg-darkblue', 'dark', 'text-neutral')
    sectionRef.value.classList.add(...getColorClass(color || 'grey').split(' '))
  })

  return { sectionRef, id: sliceType }
}
