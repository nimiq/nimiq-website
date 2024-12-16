import { FiatCurrency } from '@nimiq/utils'

export const fiatCurrencies = ([
  'AED',
  'ARS',
  'AUD',
  'BRL',
  'CAD',
  'CHF',
  'CLP',
  'CNY',
  'CRC',
  'CZK',
  'DKK',
  'EUR',
  'GBP',
  'GMD',
  'GTQ',
  'HKD',
  'HUF',
  'IDR',
  'ILS',
  'INR',
  'JPY',
  'KRW',
  'MXN',
  'MYR',
  'NGN',
  'NOK',
  'NZD',
  'PHP',
  'PKR',
  'PLN',
  'RUB',
  'SEK',
  'SGD',
  'THB',
  'TRY',
  'TWD',
  'UAH',
  'USD',
  'VND',
  'XOF',
  'ZAR',
] as const).map(ticker => FiatCurrency[ticker])

// Code from https://github.com/nimiq/wallet/blob/54aae531ba3ae75c4986fe7621ba524a7c31d248/src/lib/Constants.ts#L15
function guessUserCurrency() {
  // parse navigator.language which is formatted according to https://tools.ietf.org/html/bcp47#section-2.1
  const languageRegex = new RegExp(
    '^'
    + '(\\w+)' // obligatory language
    + '(?:-\\w{3,4})*' // non-capturing group for optional extlang or script subtags which are 3 to 4 chars long
    + '(?:-(\\w{2})\\b)?', // region tag which is exactly 2 chars long
  )
  const locale = useLocale()
  const match = locale.value.match(languageRegex)
  if (!match)
    return FiatCurrency.USD
  const [, language, region] = match

  // Find currency by region
  if (region) {
    // Find a currency which starts by a region
    const currencyRegionRegex = new RegExp(`^${region}`, 'i')
    const currencyByRegion = fiatCurrencies.find(currency => currencyRegionRegex.test(currency))
    if (currencyByRegion)
      return currencyByRegion

    // check whether it's a country in the euro zone.
    const euroZoneRegex = /^(?:AT|BE|CY|EE|FI|FR|DE|GR|HR|IE|IT|LV|LT|LU|MT|NL|PT|SK|SI|ES)$/i
    if (euroZoneRegex.test(region))
      return FiatCurrency.EUR
  }

  // Check for languages in the euro zone (but leaving out some that are also spoken in other regions)
  const euroLanguageRegex = /^(?:de|fr|nl|el|et|fi|sv|ga|hr|it|lv|lt|lb|mt|sk|sl)$/i
  if (language && euroLanguageRegex.test(language))
    return FiatCurrency.EUR

  // Use USD by default
  return FiatCurrency.USD
}

export function useUserCurrency() {
  const currency = useSyncedState<FiatCurrency>('user-currency', guessUserCurrency)

  return {
    currency,
  }
}
