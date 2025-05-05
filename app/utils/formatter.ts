import type { CurrencyInfo } from '@nimiq/utils/currency-info'
import { FormattableNumber } from '@nimiq/utils/formattable-number'

export function formatFiat(
  amount: number,
  currency: CurrencyInfo,
  options: {
    maxDecimals?: number // absolute cap on decimals, default 8
    minDecimals?: number // absolute floor, default = currency’s “normal” decimals
    hideDecimals?: boolean // force integer
  } = {},
): string {
  const { maxDecimals = 8, minDecimals: explicitMin, hideDecimals = false } = options

  const baseDecimals = currency.decimals

  const minDecimals = hideDecimals ? 0 : Math.min(baseDecimals, explicitMin ?? baseDecimals)

  // if it’s a tiny number (<1), allow a few extra digits up to maxDecimals
  const dynamicMax = hideDecimals
    ? 0
    : Math.min(maxDecimals, Math.max(
        explicitMin ?? baseDecimals,
        amount < 1 ? Math.ceil(-Math.log10(amount)) + 1 : baseDecimals,
      ))

  // 3) format the numeric part
  const num = new FormattableNumber(amount)
  const formattedNumber = num.toString({ minDecimals, maxDecimals: dynamicMax, useGrouping: true })

  // 4) combine with symbol (adjust spacing as you like)
  return surroundWithCurrencySymbol(formattedNumber, currency, minDecimals, dynamicMax)
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

export function formatNim(input: number) {
  const locale = useLocale()
  const nimFormatter = new Intl.NumberFormat(locale.value, { notation: 'compact', compactDisplay: 'short', minimumFractionDigits: 0, maximumFractionDigits: 2 })
  return nimFormatter.format(input)
}

export function formatDecimal(input: number) {
  const locale = useLocale()
  const decimalFormatter = new Intl.NumberFormat(locale.value, { minimumFractionDigits: 4, maximumFractionDigits: 4 })
  return decimalFormatter.format(input)
}
