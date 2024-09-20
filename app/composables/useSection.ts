// @unocss-include
function getColorClass(color: 'white' | 'grey' | 'darkblue') {
  switch (color) {
    case 'grey':
      return { classes: 'bg-neutral-100 grey', css: 'rgb(var(--nq-neutral-100))' }
    case 'darkblue':
      return { classes: 'bg-darkblue darkblue dark text-neutral', css: 'rgb(var(--nq-darkblue))' }
    case 'white':
    default:
      return { classes: 'bg-neutral-0 white', css: 'rgb(var(--nq-neutral-0))' }
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
  limitWidth?: boolean

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

  /**
   * Change the base font size
   * @default undefined
   */
  text?: 'lg' | 'xl'
}

export function useSection(_sliceType: string, color?: 'white' | 'grey' | 'darkblue', options: SliceUIOptions = {}) {
  const { limitWidth = true, paddingY = true, paddingX = true, text = undefined } = options

  const sectionRef = ref<HTMLElement>()
  const sliceType = _sliceType.split('$').at(0)

  watchEffect(() => {
    const el: HTMLElement | undefined = sectionRef.value && '$el' in sectionRef.value ? sectionRef.value.$el as HTMLElement : sectionRef.value
    if (!el)
      return
    el.dataset.sliceType = sliceType

    const { classes, css } = getColorClass(color || 'grey')
    el.classList.add(...classes.split(' '))
    el.style.setProperty('--bg', css)

    if (!limitWidth) {
      el.classList.add('nq-no-mx')
      el.style.setProperty('--nq-max-width', 'none')
    }
    if (!paddingY)
      el.classList.add('nq-no-py')
    if (!paddingX)
      el.classList.add('nq-no-px')
    if (text) {
      if (text === 'lg') {
        sectionRef.value!.style.setProperty('--nq-font-size-min', '16')
        sectionRef.value!.style.setProperty('--nq-font-size-max', '24')
      }
      if (text === 'xl') {
        sectionRef.value!.style.setProperty('--nq-font-size-min', '24')
        sectionRef.value!.style.setProperty('--nq-font-size-max', '32')
      }
    }
  })

  return { sectionRef, id: sliceType }
}
