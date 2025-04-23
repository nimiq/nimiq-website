// @unocss-include

type Color = 'white' | 'grey' | 'darkblue' | 'blue-s3'

export function getColorClass(color: MaybeRef<Color> | (() => MaybeRef<Color>) = 'grey') {
  return computed(() => {
    switch (toValue(color)) {
      case 'grey':
        return 'bg-neutral-100'
      case 'darkblue':
        return 'bg-darkerblue dark'
      case 'blue-s3':
        return 'bg-blue-sss dark'
      case 'white':
      default:
        return 'bg-neutral-0'
    }
  })
}

export type BackgroundColor = MaybeRefOrGetter<ReturnType<typeof getColorClass>>
