import { CurrencyInfo, FormattableNumber } from '@nimiq/utils'

const FIAT_AMOUNT_NUMBER_REGEX = /\D*(\d+)(\.(\d+))?/
const FIAT_AMOUNT_DECIMAL_SEPARATOR_REGEX = /(\d)\D(\d)/
const FIAT_AMOUNT_CURRENCY_CODE_REGEX = /[A-Z]{3}\s?/i
const FIAT_AMOUNT_SYMBOL_TRAILING_ALPHA_REGEX = /[A-Z.]$/i

export interface FiatAmountOptions {
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
}

export function useFiatAmount(_amount: MaybeRef<number>, options: FiatAmountOptions = {}) {
  const { hideDecimals = false, maxRelativeDeviation = 0.1 } = options

  const locale = useLocale()
  const { currency } = useUserCurrency()
  const currencyInfo = computed(() => new CurrencyInfo(currency.value, locale.value))

  const formattingOptions = computed(() => ({
    style: 'currency',
    currency: currency.value,
    currencyDisplay: 'code',
    useGrouping: false,
    numberingSystem: 'latn',
    minimumFractionDigits: hideDecimals ? 0 : currencyInfo.value.decimals,
    maximumFractionDigits: hideDecimals ? 0 : currencyInfo.value.decimals,
  } satisfies Intl.NumberFormatOptions))

  const formattedFiat = computed(() => {
    const amount = toValue(_amount)
    let formatted: string = ''
    let integers: string = ''
    let relativeDeviation: number

    if (!hideDecimals) {
      do {
        formatted = amount.toLocaleString([locale.value, 'en'], formattingOptions.value).replace(FIAT_AMOUNT_DECIMAL_SEPARATOR_REGEX, '$1.$2')

        const regexMatch = formatted.match(FIAT_AMOUNT_NUMBER_REGEX)
        if (!regexMatch || regexMatch.length < 4)
          return ''

        const [/* full match */, sign, /* integers */, decimalsIncludingSeparator, decimals] = regexMatch
        integers = regexMatch[2]!
        const formattedNumber = `${sign || ''}${integers}${decimalsIncludingSeparator || ''}`
        relativeDeviation = Math.abs((amount - Number.parseFloat(formattedNumber)) / amount)

        const nextDecimals = decimals ? decimals.length + 1 : 1
        formattingOptions.value.minimumFractionDigits = nextDecimals
        formattingOptions.value.maximumFractionDigits = nextDecimals
      } while (relativeDeviation > maxRelativeDeviation && formattingOptions.value.minimumFractionDigits <= 20
      )
    }

    formatted = formatted.replace(FIAT_AMOUNT_CURRENCY_CODE_REGEX, (_match, position) => {
      if (position !== 0 || !FIAT_AMOUNT_SYMBOL_TRAILING_ALPHA_REGEX.test(currencyInfo.value.symbol)) {
        return currencyInfo.value.symbol
      }
      return `${currencyInfo.value.symbol}\u00A0`
    })

    if (integers.length <= 4)
      return formatted
    return formatted.replace(integers, new FormattableNumber(integers).toString(true))
  })

  return { formattedFiat }
}
