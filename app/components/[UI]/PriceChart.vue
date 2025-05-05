<script setup lang="ts">
import type { FiatCurrency } from '@nimiq/utils/fiat-api'
import type { Content, RichTextField } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.HeroSectionSlice>())

// Just to make ts happy
if (slice.variation !== 'buyAndSell')
  throw new Error('Invalid slice variation. Expected "buyAndSell".')

const { currency, currencyInfo } = useUserCurrency()

const { marketCapChange, marketCapFormatted } = useNimMarketCap()
const { currentSupplyFormatted, maxSupplyFormatted } = useNimSupply()
const { volumeChange, volumeFormatted, error: volumeError, volumeIsLoading } = useNimVolume()
const { data: historicPrices, lastUpdated, period, periodOptions, isLoading: priceIsLoading } = useNimPriceHistory(currency)
const { deltaPrice, price1DayAgoLoading, priceLoading } = useNimPrice()

const isLoading = computed(() => priceIsLoading.value || priceLoading.value || price1DayAgoLoading.value || volumeIsLoading.value)

// Create a reactive dependency on both period and currency to ensure positions are recalculated
// when either changes - this is important for ensuring the control position updates correctly
const positionDependencies = computed(() => ({
  period: period.value,
  currency: currency.value,
  data: historicPrices.value,
}))

// Determine optimal control position based on price trend, with explicit reactivity to period and currency
const controlsPosition = useChartControlsPosition(positionDependencies)

const [DefineMetric, ReuseMetric] = createReusableTemplate<{ metricValue: MaybeRef<string>, metricChange?: number, label: string, tooltipInfo?: RichTextField }>()
const [DefinePrice, Price] = createReusableTemplate<{ data: [number, number], deltaPriceOneDay?: number }>()

type ControlPosition = 'top' | 'bottom'

/**
 * Determines the optimal position for chart controls based on price data trend
 * to avoid overlapping important chart areas.
 *
 * The function is now reactive to both period and currency changes through the dependencies object.
 *
 * @param dependencies Object containing price data and other dependencies to trigger reactivity
 * @param defaultPosition Default position if analysis is inconclusive
 * @returns Computed ref with the recommended position ('top' or 'bottom')
 */
function useChartControlsPosition(
  dependencies: MaybeRef<{
    period: HistoricNimPricePeriod
    currency: FiatCurrency
    data: NimPrice[] | undefined | null
  }>,
  defaultPosition: ControlPosition = 'bottom',
) {
  const position = computed<ControlPosition>(() => {
    // Extract data from dependencies to ensure reactivity
    const deps = toValue(dependencies)
    const data = deps.data

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
</script>

<template>
  <div data-allow-mismatch>
    <DefineMetric v-slot="{ metricValue, metricChange, label, tooltipInfo }">
      <div flex="~ col gap-8" relative :data-state="metricValue === '0' ? 'inactive' : 'active'" z-1 reka-inactive:animate-pulse>
        <div absolute inset--12 z--1 outline="~ 1.5 neutral-200 offset--1.5" h-full w-full rounded-6 bg-neutral-100 reka-active:hidden w="[calc(100%+24px)]" />
        <div flex="~ gap-8 items-center">
          <span text="f-lg neutral" whitespace-nowrap font-semibold lh-none>
            {{ metricValue }}
          </span>
          <div v-if="metricChange" :class="metricChange < 0 ? 'text-red' : 'text-green'" flex="~ gap-2 items-center">
            <div :class="{ 'rotate-180': metricChange < 0 }" aria-hidden size-7 i-nimiq:triangle-up />
            <span w-6ch font-semibold lh-none f-text-sm>{{ formatPercentage(metricChange) }}</span>
          </div>
        </div>
        <div flex="~ gap-6 items-center">
          <p text="f-xs neutral-800" w-max font-normal lh-none>
            {{ label }}
          </p>
          <Tooltip v-if="tooltipInfo">
            <RichText wrapper="div" :field="tooltipInfo" />
          </Tooltip>
        </div>
      </div>
    </DefineMetric>

    <DefinePrice v-slot="{ data: [ts, price], deltaPriceOneDay }">
      <div flex="~ col gap-8" relative bg-neutral-0 f="$side $side-min-20 $side-max-24" f-py-xs :class="{ 'top-21 mx-20': !deltaPriceOneDay }">
        <div absolute inset-y-0 left="[calc(var(--f-side)*-1)]" w="$f-side" bg-gradient="from-transparent to-neutral-0 to-r" />
        <div absolute inset-y-0 right="[calc(var(--f-side)*-1)]" w="$f-side" bg-gradient="from-neutral-0 to-transparent to-r" f-w-md />
        <p text="blue f-3xl" font-semibold lh-none>
          {{ formatFiat(price, currencyInfo) }}
        </p>
        <NuxtTime v-if="!deltaPriceOneDay" :datetime="ts" year="numeric" month="long" day="numeric" hour="2-digit" minute="2-digit" text="f-2xs right neutral-700" lh-none nq-label />
        <div v-else flex="~ items-center" text="f-2xs neutral-700" font-semibold lh-none>
          <div mr-4 size-8 i-nimiq:triangle-up :class="{ 'rotate-180': deltaPriceOneDay < 0 }" />
          <span>{{ formatDecimal(Math.abs(deltaPriceOneDay)) }} ({{ formatPercentage(deltaPriceOneDay / price) }})</span>
        </div>
      </div>
    </DefinePrice>

    <RibbonContainer :label="slice.primary.nimPriceChartLabel!" z-3 shadow md:min-h-480 outline-color="white/20">
      <div v-if="volumeError" absolute bottom--1lh h-1lh text-red text-f-xs>
        {{ volumeError }}
      </div>
      <div grid="~ cols-1 md:cols-[max-content_1fr]" relative size-full of-hidden>
        <aside md:border="r-1 solid neutral-400" grid="~ cols-[repeat(4,1fr)] md:cols-1 gap-col-20 gap-row-24" relative w-full f-p-md max-md:row-start-2 max-md:of-x-auto>
          <transition enter-active-class="transition duration-200 ease-out" enter-from-class="op-0" enter-to-class="op-100" leave-active-class="transition duration-200 ease-out" leave-from-class="op-100" leave-to-class="op-0">
            <div v-if="isLoading" flex="~ items-center gap-8" text=" gold f-sm" translate-x="100%" absolute right--1 top--1 z-30 rounded-br-6 bg-white py-4 f-px-xs border="b r neutral-400">
              <div scale-90 i-nimiq:spinner />
              <p>
                Loading...
              </p>
            </div>
          </transition>

          <ReuseMetric :metric-value="marketCapFormatted" :metric-change="marketCapChange" :label="slice.primary.marketCapLabel!" :tooltip-info="slice.primary.marketCapInfo" />
          <ReuseMetric :metric-value="volumeFormatted" :metric-change="volumeChange" :label="slice.primary.volume24HLabel!" :tooltip-info="slice.primary.volume24HInfo" />
          <ReuseMetric :metric-value="currentSupplyFormatted" :label="slice.primary.totalSupplyLabel!" :tooltip-info="slice.primary.totalSupplyInfo" />
          <ReuseMetric :metric-value="maxSupplyFormatted" :label="slice.primary.maxSupplyLabel!" :tooltip-info="slice.primary.maxSupplyInfo" />
          <div v-if="lastUpdated" max-md="col-span-full sticky left-0 w-[calc(100vw-80px)] w-max" flex="~ md:col gap-col-4 gap-row-8 max-md:justify-center" text="f-2xs neutral-800" lh-none md:mt-auto>
            <span>Last updated:</span>
            <NuxtTime :datetime="lastUpdated" year="numeric" month="long" day="numeric" hour="2-digit" minute="2-digit" />
          </div>
        </aside>
        <div group relative f-pb-xs>
          <ChartLine :data="historicPrices || []" leader h-full rounded-8>
            <template #default="{ data: [ts, price] }">
              <Price :data="[ts, price]" />
            </template>
          </ChartLine>

          <div absolute right-32 top-32 z-20>
            <Price transition-opacity leader-hocus:invisible :data="historicPrices?.at(-1) || [0, 0]" :delta-price-one-day="deltaPrice" />
          </div>

          <!-- Position controls based on the chart trend -->
          <div data-allow-mismatch :class="controlsPosition === 'top' ? 'top-128' : 'bottom-64'" flex="~ items-center gap-8" absolute z-20 f-right-md>
            <PillSelector v-model="period" :options="periodOptions" self-end justify-self-end ring="white 3" />
            <CurrencySelector v-model="currency" bg="darkblue hocus:neutral-200" transition="[background-color]" h-full rounded-full px-2 text-14 font-normal nq-label text="white hocus:neutral" ring="white 3" border="~ 1.5 neutral-200">
              <template #trigger="{ selectedCurrency }">
                {{ selectedCurrency.toLocaleUpperCase() }}
              </template>
            </CurrencySelector>
          </div>
        </div>
      </div>
    </RibbonContainer>

    <p flex="~ items-center justify-center gap-8" f-mt-md text="center f-sm">
      {{ slice.primary.poweredByLabel }} <PrismicLink :field="slice.primary.poweredByLink">
        <PrismicImage op="80 hocus:100" :field="slice.primary.poweredByLogo" w-full transition-opacity f-h-sm />
      </PrismicLink>
    </p>
  </div>
</template>
