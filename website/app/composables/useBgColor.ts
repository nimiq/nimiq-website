export function useBgColor(color: 'white' | 'grey' | 'darkblue') {
  switch (color) {
    case 'white':
    case 'grey':
      return color
    case 'darkblue':
      return 'darkblue dark'
    default:
      return 'white'
  }
}
