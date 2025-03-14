import type { CurrencyInfo } from '@nimiq/utils/currency-info'
import { FormattableNumber } from '@nimiq/utils/formattable-number'

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

const FIAT_AMOUNT_NUMBER_REGEX = /\D*(\d+)(\.(\d+))?/
const FIAT_AMOUNT_DECIMAL_SEPARATOR_REGEX = /(\d)\D(\d)/
const FIAT_AMOUNT_CURRENCY_CODE_REGEX = /[A-Z]{3}\s?/i
const FIAT_AMOUNT_SYMBOL_TRAILING_ALPHA_REGEX = /[A-Z.]$/i

export function formatFiat(_amount: MaybeRef<number>, currency: MaybeRef<CurrencyInfo>, options: FormatFiatOptions = {}) {
  return computed(() => {
    const amount = toValue(_amount)
    const { decimals, symbol, code } = toValue(currency)
    const { hideDecimals = false, maxRelativeDeviation = 0.1, locale = 'en', maxDecimals } = options

    const formattingOptions = {
      style: 'currency',
      currency: code,
      currencyDisplay: 'code',
      useGrouping: false,
      numberingSystem: 'latn',
      // Default to the currency decimals. We'll adjust below if needed.
      minimumFractionDigits: hideDecimals ? 0 : decimals,
      maximumFractionDigits: hideDecimals ? 0 : maxDecimals || decimals,
    } satisfies Intl.NumberFormatOptions

    // If decimals are hidden, just do a single format and return.
    if (hideDecimals) {
      let singleFormat = amount
        .toLocaleString([locale, 'en'], {
          ...formattingOptions,
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
        .replace(FIAT_AMOUNT_DECIMAL_SEPARATOR_REGEX, '$1.$2')

      singleFormat = singleFormat.replace(
        FIAT_AMOUNT_CURRENCY_CODE_REGEX,
        (_match, position) => {
          if (position !== 0 || !FIAT_AMOUNT_SYMBOL_TRAILING_ALPHA_REGEX.test(symbol)) {
            return symbol
          }
          return `${symbol}\u00A0`
        },
      )

      return singleFormat
    }

    let bestFormat = ''
    let bestDeviation = Number.POSITIVE_INFINITY
    let bestIntegers = ''

    // Loop from 0 to 20 decimals.
    for (let decimalsCount = 0; decimalsCount <= Math.min((maxDecimals || 20), 20); decimalsCount++) {
      formattingOptions.minimumFractionDigits = decimalsCount
      formattingOptions.maximumFractionDigits = decimalsCount

      const tentative = amount
        .toLocaleString([locale, 'en'], formattingOptions)
        .replace(FIAT_AMOUNT_DECIMAL_SEPARATOR_REGEX, '$1.$2')

      const match = tentative.match(FIAT_AMOUNT_NUMBER_REGEX)
      if (!match || match.length < 4)
        continue

      // e.g. match[1] might be the integer part, match[2] might be .xx, etc.
      const sign = match[1]
      const decimalsWithSep = match[2] + (match[3] ? `.${match[3]}` : '')
      const numericString = `${sign || ''}${decimalsWithSep}`
      const numericValue = Number.parseFloat(numericString)
      const deviation = Math.abs((amount - numericValue) / amount)

      if (deviation < bestDeviation) {
        bestDeviation = deviation
        bestFormat = tentative
        bestIntegers = match[2] ?? ''
      }

      // If we are within the threshold, we can stop.
      if (!maxDecimals && bestDeviation <= maxRelativeDeviation) {
        break
      }
    }

    // Replace the currency code with the currency symbol.
    bestFormat = bestFormat.replace(
      FIAT_AMOUNT_CURRENCY_CODE_REGEX,
      (_match, position) => {
        if (position !== 0 || !FIAT_AMOUNT_SYMBOL_TRAILING_ALPHA_REGEX.test(symbol)) {
          return symbol
        }
        return `${symbol}\u00A0`
      },
    )

    // Add grouping if the integer part has more than 4 digits.
    if (bestIntegers.length > 4) {
      bestFormat = bestFormat.replace(
        bestIntegers,
        new FormattableNumber(bestIntegers).toString(true),
      )
    }

    return bestFormat
  })
}

const percentageFormatter = new Intl.NumberFormat('en', { style: 'percent', minimumFractionDigits: 0, maximumFractionDigits: 2 })

export function formatPercentage(input: number) {
  return percentageFormatter.format(input)
}
