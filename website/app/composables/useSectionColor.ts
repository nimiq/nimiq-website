// @unocss-include
export function useSectionColor(color: 'white' | 'grey' | 'darkblue') {
  switch (color) {
    case 'grey':
      return 'bg-neutral-100'
    case 'darkblue':
      return 'bg-neutral dark text-neutral-0'
    case 'white':
    default:
      return 'bg-neutral-0'
  }
}
