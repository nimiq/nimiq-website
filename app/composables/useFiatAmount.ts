export interface FiatAmountOptions {
  /**
   * Whether to hide the decimals.
   *
   * @default false
   */
  hideDecimals?: boolean
}

export function useFiatAmount(amount?: MaybeRef<number>, options: FiatAmountOptions = {}) {
  const { hideDecimals = false } = options

  const { currencyInfo } = useUserCurrency()

  const formattedFiat = computed(() => {
    if (!amount)
      return ''
    return formatFiat(toValue(amount), currencyInfo.value, { hideDecimals })
  })

  return { formattedFiat, formatFiat }
}
