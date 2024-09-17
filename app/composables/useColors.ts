type Color = 'blue' | 'gold' | 'orange' | 'red' | 'purple' | 'pink' | 'green'

const colorsList: Color[] = ['blue', 'gold', 'orange', 'red', 'purple', 'pink', 'green']

// @unocss-include

const colorsBg: Record<Color, string> = {
  blue: 'bg-blue',
  gold: 'bg-gold',
  orange: 'bg-orange',
  red: 'bg-red',
  purple: 'bg-purple',
  pink: 'bg-[#FA7268]',
  green: 'bg-green',
}

const colorsPill: Record<Color, string> = {
  blue: 'nq-pill-blue',
  gold: 'nq-pill-gold',
  orange: 'nq-pill-orange',
  red: 'nq-pill-red',
  purple: 'nq-pill bg-purple hocus:bg-purple/95',
  pink: 'nq-pill bg-[#FA7268] hocus:bg-[#FA7268]/95',
  green: 'nq-pill-green',
}

export const colors: Record<Color, string> = {
  // blue: '#0582CA',
  blue: 'rgb(var(--nq-blue) / 1)',
  gold: '#E9B213',
  orange: '#FC8702',
  red: '#d94432',
  purple: '#5F4B8B',
  pink: '#FA7268',
  green: '#21BCA5',
}

type Arg = { hash: string } | { nonce: number } | { publicKey: string }

function getColor(options: Arg) {
  let index

  if ('hash' in options) {
    index = Number.parseInt(options.hash, 16) % colorsList.length
  }
  else if ('publicKey' in options) {
    index = Number.parseInt(options.publicKey.substring(0, 8), 16) % colorsList.length
  }
  else {
    index = options.nonce % colorsList.length
  }
  return colorsList[index]!
}

export const getLiveviewBgColor = (options: Arg) => colorsBg[getColor(options)]
export const getLiveviewPillColor = (options: Arg) => colorsPill[getColor(options)]
export const getLiveviewColorValue = (options: Arg) => colors[getColor(options)]
