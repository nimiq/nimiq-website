import { CurrencyInfo } from '@nimiq/utils/currency-info'
import { FiatCurrency } from '@nimiq/utils/fiat-api'
import { useStorage } from '@vueuse/core'

export const supportedFiatCurrencies = ['AED', 'ARS', 'AUD', 'BRL', 'CAD', 'CHF', 'CLP', 'CNY', 'CRC', 'CZK', 'DKK', 'EUR', 'GBP', 'GMD', 'GTQ', 'HKD', 'HUF', 'IDR', 'ILS', 'INR', 'JPY', 'KRW', 'MXN', 'MYR', 'NGN', 'NOK', 'NZD', 'PHP', 'PKR', 'PLN', 'RUB', 'SEK', 'SGD', 'THB', 'TRY', 'TWD', 'UAH', 'USD', 'VND', 'XOF', 'ZAR'] as const
export const fiatCurrencies = supportedFiatCurrencies.map(ticker => FiatCurrency[ticker])

function guessUserCurrency() {
  const languageRegex = /^(\w+)(?:-\w{3,4})*(?:-(\w{2})\b)?/
  const locale = useLocale()
  const match = locale.value?.match(languageRegex)
  if (!match)
    return FiatCurrency.USD
  const [, language, region] = match

  if (region) {
    const currencyRegionRegex = new RegExp(`^${region}`, 'i')
    const currencyByRegion = fiatCurrencies.find(currency => currencyRegionRegex.test(currency))
    if (currencyByRegion)
      return currencyByRegion
    const euroZoneRegex = /^(?:AT|BE|CY|EE|FI|FR|DE|GR|HR|IE|IT|LV|LT|LU|MT|NL|PT|SK|SI|ES)$/i
    if (euroZoneRegex.test(region))
      return FiatCurrency.EUR
  }

  const euroLanguageRegex = /^(?:de|fr|nl|el|et|fi|sv|ga|hr|it|lv|lt|lb|mt|sk|sl)$/i
  if (language && euroLanguageRegex.test(language))
    return FiatCurrency.EUR

  return FiatCurrency.USD
}

export function useUserCurrency() {
  const currency = useStorage<FiatCurrency>('user-currency', guessUserCurrency(), undefined, { mergeDefaults: false })
  const locale = useLocale()

  // SSR-safe currencyInfo with guaranteed valid locale
  const currencyInfo = computed(() => {
    if (import.meta.server) {
      // Use simple USD formatting in SSR to avoid navigator issues
      return new CurrencyInfo(currency.value, 'en-US')
    }

    let localeValue = locale.value || 'en-US'
    // Additional sanitization: remove @posix and other invalid suffixes
    if (typeof localeValue === 'string')
      localeValue = localeValue.split('@')[0]?.trim() || 'en-US'

    // Validate format: should be xx or xx-XX
    if (!/^[a-z]{2}(?:-[A-Z]{2})?$/i.test(localeValue))
      localeValue = 'en-US'

    try {
      return new CurrencyInfo(currency.value, localeValue)
    }
    catch (error) {
      // Fallback to en-US if locale is still invalid
      console.warn(`Invalid locale "${localeValue}", falling back to en-US`, error)
      return new CurrencyInfo(currency.value, 'en-US')
    }
  })

  return { currency, currencyInfo }
}
