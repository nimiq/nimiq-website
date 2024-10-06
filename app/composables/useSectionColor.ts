// @unocss-include
export function getColorClass(color: 'white' | 'grey' | 'darkblue' = 'grey') {
  switch (color) {
    case 'grey':
      return 'bg-neutral-100'
    case 'darkblue':
      return 'bg-darkblue dark'
    case 'white':
    default:
      return 'bg-neutral-0'
  }
}
