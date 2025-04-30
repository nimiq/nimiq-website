import type { MaybeRef } from 'vue'
import type { NimPrice } from './useNimPriceHistory'
import { computed } from 'vue'

export type ControlPosition = 'top' | 'bottom'

/**
 * Determines the optimal position for chart controls based on price data trend
 * to avoid overlapping important chart areas.
 *
 * @param priceData Array of price data points [timestamp, price]
 * @param defaultPosition Default position if analysis is inconclusive
 * @returns Computed ref with the recommended position ('top' or 'bottom')
 */
export function useChartControlsPosition(
  priceData: MaybeRef<NimPrice[] | undefined | null>,
  defaultPosition: ControlPosition = 'bottom',
) {
  const position = computed<ControlPosition>(() => {
    const data = toValue(priceData)

    // If no data, return default position
    if (!data || data.length < 2)
      return defaultPosition

    // Find min and max prices in the entire dataset
    let minPrice = Infinity
    let maxPrice = -Infinity

    for (const [, price] of data) {
      if (price < minPrice)
        minPrice = price
      if (price > maxPrice)
        maxPrice = price
    }

    // Get a sample of the most recent data points (last 25%)
    const recentDataCount = Math.max(5, Math.floor(data.length / 4))
    const recentData = data.slice(-recentDataCount)

    // Calculate average price of recent data
    let totalRecentPrice = 0
    for (const [, price] of recentData) {
      totalRecentPrice += price
    }
    const avgRecentPrice = totalRecentPrice / recentData.length

    // Calculate midpoint of price range
    const priceMidpoint = minPrice + (maxPrice - minPrice) / 2

    // If recent prices are closer to max, put controls at bottom
    // If recent prices are closer to min, put controls at top
    return avgRecentPrice >= priceMidpoint ? 'bottom' : 'top'
  })

  return position
}
