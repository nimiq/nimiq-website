import { CurrencyInfo } from '@nimiq/utils/currency-info'
import { FiatCurrency } from '@nimiq/utils/fiat-api'
import { useStorage } from '@vueuse/core'

export const supportedFiatCurrencies = ['AED', 'ARS', 'AUD', 'BRL', 'CAD', 'CHF', 'CLP', 'CNY', 'CRC', 'CZK', 'DKK', 'EUR', 'GBP', 'GMD', 'GTQ', 'HKD', 'HUF', 'IDR', 'ILS', 'INR', 'JPY', 'KRW', 'MXN', 'MYR', 'NGN', 'NOK', 'NZD', 'PHP', 'PKR', 'PLN', 'RUB', 'SEK', 'SGD', 'THB', 'TRY', 'TWD', 'UAH', 'USD', 'VND', 'XOF', 'ZAR'] as const
export const fiatCurrencies = supportedFiatCurrencies.map(ticker => FiatCurrency[ticker])

function guessUserCurrency() {
  const languageRegex = /^(\w+)(?:-\w{3,4})*(?:-(\w{2})\b)?/
  const locale = useLocale()
  const match = locale.value.match(languageRegex)
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
  const currencyInfo = computed(() => new CurrencyInfo(currency.value, locale.value))
  return { currency, currencyInfo }
}
