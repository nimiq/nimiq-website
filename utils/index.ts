export function roundToSignificant(number: number, places = 1) {
  const roundingFactor = number < 0.01
    ? 10 ** (2 + places)
    : number < 0.1
      ? 10 ** (1 + places)
      : number < 10
        ? 10 ** (places)
        : 1

  return Math.round(number * roundingFactor) / roundingFactor
}
