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

export function useFiatAmount(amount?: MaybeRef<number>, options: FiatAmountOptions = {}) {
  const { hideDecimals = false, maxRelativeDeviation = 0.1 } = options

  const locale = useLocale()
  const { currencyInfo } = useUserCurrency()

  const formattedFiat = computed(() => {
    if (!amount)
      return ''
    return formatFiat(toValue(amount), currencyInfo.value, { hideDecimals, maxRelativeDeviation, locale: locale.value })
  })

  return { formattedFiat, formatFiat }
}
