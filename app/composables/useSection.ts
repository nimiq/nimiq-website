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

export interface SliceUIOptions {
  /**
   * Whether the slice should be full width.
   * If you need to remove the max-width only for a child you can do so by adding the class `nq-no-max-width` to the child
   * or adding `mx-0 max-w-none` to the child.
   *
   * @default true
   */
  maxWidth?: boolean

  /**
   * Have padding on the y-axis. This can be also overridden using classes
   * @default true
   */
  paddingY?: boolean

  /**
   * Have a padding on x-axis. This can be also overridden using classes
   * @default true
   */
  paddingX?: boolean
}

export function useSection(_sliceType: string, color?: 'white' | 'grey' | 'darkblue' | null, options: SliceUIOptions = {}) {
  const { maxWidth = true, paddingY = true, paddingX = true } = options

  const sectionRef = ref<HTMLElement>()
  const sliceType = _sliceType.split('$').at(0)

  watchEffect(() => {
    const el: HTMLElement | undefined = sectionRef.value && '$el' in sectionRef.value ? sectionRef.value.$el as HTMLElement : sectionRef.value
    if (!el)
      return
    el.dataset.sliceType = sliceType
    el.classList.remove('bg-neutral-0', 'bg-neutral-100', 'bg-darkblue', 'dark', 'text-neutral')
    el.classList.add(...getColorClass(color || 'grey').split(' '))
    if (!maxWidth)
      el.classList.add('nq-no-mx')
    if (!paddingY)
      el.classList.add('nq-no-py')
    if (!paddingX)
      el.classList.add('nq-no-px')
  })

  return { sectionRef, id: sliceType }
}
