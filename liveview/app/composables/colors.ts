type Color = 'blue' | 'gold' | 'orange' | 'red' | 'purple' | 'pink' | 'green'

const colors: Color[] = ['blue', 'gold', 'orange', 'red', 'purple', 'pink', 'green']

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

const colorsValues: Record<Color, string> = {
  blue: '#0582CA',
  gold: '#E9B213',
  orange: '#FC8702',
  red: '#d94432',
  purple: '#5F4B8B',
  pink: '#FA7268',
  green: '#21BCA5',
}

type Arg = { hash: string } | { nonce: number }

function getColor(options: Arg) {
  if ('hash' in options) {
    return colors[Number.parseInt(options.hash, 16) % colors.length]!
  }
  else {
    return colors[options.nonce % colors.length]!
  }
}

export const getBgColor = (options: Arg) => colorsBg[getColor(options)]
export const getPillColor = (options: Arg) => colorsPill[getColor(options)]
export const getColorValue = (options: Arg) => colorsValues[getColor(options)]
