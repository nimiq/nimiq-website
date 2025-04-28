import type { CurrencyInfo } from '@nimiq/utils/currency-info'

export interface FormatFiatOptions {
  /**
   * Whether to hide the decimals.
   *
   * @default false
   */
  hideDecimals?: boolean

  /**
   * The maximum relative deviation between the formatted amount and the original amount.
   *
   * @default 0.1
   */
  maxRelativeDeviation?: number

  /**
   * The locale to use for formatting.
   *
   * @default 'en'
   */
  locale?: string

  /**
   * The maximum number of decimals to show.
   */
  maxDecimals?: number
}

export function formatFiat(_amount: MaybeRef<number>, currency: MaybeRef<CurrencyInfo>, options: FormatFiatOptions = {}) {
  return computed(() => {
    const amount = toValue(_amount)
    const currencyInfo = toValue(currency)
    const { hideDecimals = false, locale = 'en', maxDecimals = 8 } = options

    const formatterOptions: Intl.NumberFormatOptions = {
      style: 'currency',
      currency: currencyInfo.code,
      currencyDisplay: 'symbol',
      useGrouping: true,
      minimumFractionDigits: hideDecimals ? 0 : (maxDecimals !== undefined ? Math.min(maxDecimals, currencyInfo.decimals) : currencyInfo.decimals),
      maximumFractionDigits: hideDecimals ? 0 : (maxDecimals !== undefined ? Math.min(maxDecimals, currencyInfo.decimals) : currencyInfo.decimals),
    }

    return amount.toLocaleString([locale, currencyInfo.locale, 'en'], formatterOptions)
  })
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
