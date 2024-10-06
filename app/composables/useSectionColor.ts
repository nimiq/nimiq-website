// @unocss-include
export function getColorClass(color: 'white' | 'grey' | 'darkblue' = 'grey') {
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
