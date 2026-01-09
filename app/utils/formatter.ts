import type { CurrencyInfo } from '@nimiq/utils/currency-info'
import { FormattableNumber } from '@nimiq/utils/formattable-number'

export function formatFiat<ReturnNumber = false>(
  amount: number,
  currency: CurrencyInfo,
  locale: string,
  options: { maxDecimals?: number, minDecimals?: number, hideDecimals?: boolean, meaningfulDigits?: number, returnJustNumber?: ReturnNumber } = {},
): ReturnNumber extends true ? number : string {
  const { maxDecimals = 8, minDecimals: explicitMin, hideDecimals = false, meaningfulDigits = 4, returnJustNumber = false } = options

  const baseDecimals = currency.decimals
  const minDecimals = hideDecimals ? 0 : Math.min(baseDecimals, explicitMin ?? baseDecimals)

  let dynamicMax = baseDecimals
  if (!hideDecimals) {
    if (amount !== 0) {
      const absAmount = Math.abs(amount)
      const magnitude = Math.floor(Math.log10(absAmount))

      if (absAmount >= 1) {
        const digitsBeforeDecimal = magnitude + 1
        dynamicMax = Math.max(0, meaningfulDigits - digitsBeforeDecimal)
      }
      else {
        const zerosAfterDecimal = Math.abs(magnitude) - 1
        dynamicMax = zerosAfterDecimal + meaningfulDigits
      }
      dynamicMax = Math.min(maxDecimals, dynamicMax)
      dynamicMax = Math.max(dynamicMax, minDecimals)
    }
  }
  else {
    dynamicMax = 0
  }

  const num = new FormattableNumber(amount)
  const formattedNumber = num.toString({ minDecimals, maxDecimals: dynamicMax, useGrouping: true })

  type ReturnedValue = ReturnNumber extends true ? number : string
  if (returnJustNumber)
    return Number.parseFloat(formattedNumber) as ReturnedValue
  return surroundWithCurrencySymbol(formattedNumber, currency, locale, minDecimals, dynamicMax) as ReturnedValue
}

function surroundWithCurrencySymbol(formattedNumber: string, currency: CurrencyInfo, locale: string, minDecimals: number, maxDecimals: number): string {
  const parts = new Intl.NumberFormat(locale, { style: 'currency', currency: currency.code, minimumFractionDigits: minDecimals, maximumFractionDigits: maxDecimals, currencyDisplay: 'symbol' }).formatToParts(1.23)
  const intIndex = parts.findIndex(p => p.type === 'integer')
  const prefix = parts.slice(0, intIndex).map(p => p.value).join('')
  const fracIndex = parts.findIndex(p => p.type === 'fraction')
  const suffix = parts.slice(fracIndex >= 0 ? fracIndex + 1 : intIndex + 1).map(p => p.value).join('')
  return `${prefix}${formattedNumber}${suffix}`
}

export function formatPercentage(input: number, locale: string) {
  const percentageFormatter = new Intl.NumberFormat(locale, { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 })
  return percentageFormatter.format(input)
}

export function formatNim(input: number, locale: string, options: Intl.NumberFormatOptions = {}) {
  const nimFormatter = new Intl.NumberFormat(locale, { notation: 'compact', compactDisplay: 'short', minimumFractionDigits: 0, maximumFractionDigits: 2, ...options })
  return nimFormatter.format(input)
}

export function formatDecimal(input: number, locale: string, options: Intl.NumberFormatOptions = {}) {
  const decimalFormatter = new Intl.NumberFormat(locale, { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 6, ...options })
  return decimalFormatter.format(input)
}
