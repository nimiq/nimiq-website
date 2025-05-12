import type { CurrencyInfo } from '@nimiq/utils/currency-info'
import { FormattableNumber } from '@nimiq/utils/formattable-number'

export function formatFiat<ReturnNumber = false>(
  amount: number,
  currency: CurrencyInfo,
  options: {
    maxDecimals?: number // absolute cap on decimals, default 8
    minDecimals?: number // absolute floor, default = currency's "normal" decimals
    hideDecimals?: boolean // force integer
    meaningfulDigits?: number // show this many meaningful digits, default 4
    returnJustNumber?: ReturnNumber // if true, return just the number without currency symbol
  } = {},
): ReturnNumber extends true ? number : string {
  const { maxDecimals = 8, minDecimals: explicitMin, hideDecimals = false, meaningfulDigits = 4, returnJustNumber = false } = options

  const baseDecimals = currency.decimals
  const minDecimals = hideDecimals ? 0 : Math.min(baseDecimals, explicitMin ?? baseDecimals)

  // Calculate dynamic max based on meaningful digits approach
  let dynamicMax = baseDecimals
  if (!hideDecimals) {
    // Find position of first non-zero digit
    if (amount !== 0) {
      const absAmount = Math.abs(amount)
      const magnitude = Math.floor(Math.log10(absAmount))

      if (absAmount >= 1) {
        // For numbers >= 1, we want to show up to meaningfulDigits - (digits before decimal)
        const digitsBeforeDecimal = magnitude + 1
        dynamicMax = Math.max(0, meaningfulDigits - digitsBeforeDecimal)
      }
      else {
        // For numbers < 1, we count zeros after decimal point and add meaningfulDigits
        const zerosAfterDecimal = Math.abs(magnitude) - 1
        dynamicMax = zerosAfterDecimal + meaningfulDigits
      }

      // Cap at maxDecimals
      dynamicMax = Math.min(maxDecimals, dynamicMax)

      // Ensure we respect minDecimals
      dynamicMax = Math.max(dynamicMax, minDecimals)
    }
  }
  else {
    dynamicMax = 0
  }

  // Format the numeric part
  const num = new FormattableNumber(amount)
  const formattedNumber = num.toString({ minDecimals, maxDecimals: dynamicMax, useGrouping: true })

  type ReturnedValue = ReturnNumber extends true ? number : string
  if (returnJustNumber)
    return Number.parseFloat(formattedNumber) as ReturnedValue // Combine with symbol
  // Combine with symbol
  return surroundWithCurrencySymbol(formattedNumber, currency, minDecimals, dynamicMax) as ReturnedValue
}

function surroundWithCurrencySymbol(formattedNumber: string, currency: CurrencyInfo, minDecimals: number, maxDecimals: number): string {
  const locale = useLocale()
  // Ask Intl for its parts for a dummy value
  const parts = new Intl.NumberFormat(locale.value, {
    style: 'currency',
    currency: currency.code,
    minimumFractionDigits: minDecimals,
    maximumFractionDigits: maxDecimals,
    currencyDisplay: 'symbol',
  }).formatToParts(1.23)

  // Everything *before* the integer part is your "prefix"
  const intIndex = parts.findIndex(p => p.type === 'integer')
  const prefix = parts.slice(0, intIndex).map(p => p.value).join('')
  // Everything *after* the fractional part is your "suffix"
  const fracIndex = parts.findIndex(p => p.type === 'fraction')
  const suffix = parts.slice(fracIndex >= 0 ? fracIndex + 1 : intIndex + 1).map(p => p.value).join('')

  return `${prefix}${formattedNumber}${suffix}`
}

export function formatPercentage(input: number) {
  const locale = useLocale()
  const percentageFormatter = new Intl.NumberFormat(locale.value, { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 })
  return percentageFormatter.format(input)
}

export function formatNim(input: number, options: Intl.NumberFormatOptions = {}) {
  const locale = useLocale()
  const nimFormatter = new Intl.NumberFormat(locale.value, { notation: 'compact', compactDisplay: 'short', minimumFractionDigits: 0, maximumFractionDigits: 2, ...options })
  return nimFormatter.format(input)
}

export function formatNimWithMeaningfulDigits(amount: number, meaningfulDigits = 4) {
  if (amount === 0)
    return 0

  const absAmount = Math.abs(amount)
  const magnitude = Math.floor(Math.log10(absAmount))
  let decimals = 0

  if (absAmount >= 1) {
    // For numbers >= 1, we want to show up to meaningfulDigits - (digits before decimal)
    const digitsBeforeDecimal = magnitude + 1
    decimals = Math.max(0, meaningfulDigits - digitsBeforeDecimal)

    // Check if we need decimals at all (if the number has enough digits before decimal)
    if (digitsBeforeDecimal >= meaningfulDigits)
      decimals = 4
  }
  else {
    // For numbers < 1, we count zeros after decimal point and add meaningfulDigits
    const zerosAfterDecimal = Math.abs(magnitude) - 1
    decimals = zerosAfterDecimal + meaningfulDigits
  }

  const locale = useLocale()
  const nimFormatter = new Intl.NumberFormat(locale.value, {
    minimumFractionDigits: 0, // Always allow showing no decimals when not needed
    maximumFractionDigits: decimals,
    useGrouping: true,
  })
  return Number.parseFloat(nimFormatter.format(amount))
}

export function formatDecimal(input: number) {
  const locale = useLocale()
  const decimalFormatter = new Intl.NumberFormat(locale.value, { minimumFractionDigits: 4, maximumFractionDigits: 4 })
  return decimalFormatter.format(input)
}
