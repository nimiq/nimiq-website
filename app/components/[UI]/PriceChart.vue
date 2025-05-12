<script setup lang="ts">
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
const { deltaPrice, price1DayAgoLoading, priceLoading, price } = useNimPrice()

const isLoading = computed(() => priceIsLoading.value || priceLoading.value || price1DayAgoLoading.value || volumeIsLoading.value)

const [DefineMetric, ReuseMetric] = createReusableTemplate<{ metricValue: MaybeRef<string>, metricChange?: number, label: string, tooltipInfo?: RichTextField }>()
const [DefinePrice, Price] = createReusableTemplate<{ data: [number, number], deltaPriceOneDay?: number }>()

  type ControlPosition = 'top' | 'bottom'

// Determine optimal control position based on price trend, with explicit reactivity to period and currency
const controlsPosition = ref<ControlPosition>('bottom')

watchEffect(() => {
  if (!historicPrices.value || historicPrices.value.length < 2) {
    controlsPosition.value = 'bottom'
    return
  }

  const recentDataCount = Math.max(5, Math.floor(historicPrices.value.length / 4))
  const recentData = historicPrices.value.slice(-recentDataCount).map(([, price]) => price)
  const [minPrice, maxPrice] = [Math.min(...recentData), Math.max(...recentData) * 1.5]
  const totalRecentPrice = recentData.reduce((acc, price) => acc + price, 0)
  const avgRecentPrice = totalRecentPrice / recentData.length || 0
  const priceMidpoint = minPrice + (maxPrice - minPrice) / 2
  // If recent prices are closer to max, put controls at bottom, otherwise at top
  controlsPosition.value = avgRecentPrice >= priceMidpoint ? 'bottom' : 'top'
})

const error = computed(() => {
  if (!priceIsLoading.value && !price.value)
    return 'Unable to load price data'
  if (volumeError.value)
    return volumeError.value
  return null
})
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
            <span font-semibold lh-none f-text-sm>{{ formatPercentage(metricChange) }}</span>
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

    <DefinePrice v-slot="{ data: [ts, historicPrice], deltaPriceOneDay }">
      <div flex="~ col gap-8" relative bg-neutral-0 f="$side $side-min-20 $side-max-24" f-py-xs :class="{ 'top-21 mx-20': !deltaPriceOneDay }">
        <div absolute inset-y-0 left="[calc(var(--f-side)*-1)]" w="$f-side" bg-gradient="from-transparent to-neutral-0 to-r" />
        <div absolute inset-y-0 right="[calc(var(--f-side)*-1)]" w="$f-side" bg-gradient="from-neutral-0 to-transparent to-r" f-w-md />
        <p text="blue f-3xl" font-semibold lh-none>
          {{ formatFiat(historicPrice, currencyInfo) }}
        </p>
        <NuxtTime v-if="!deltaPriceOneDay" :datetime="ts" year="numeric" month="long" day="numeric" hour="2-digit" minute="2-digit" text="f-2xs right neutral-700" lh-none nq-label />
        <div v-else flex="~ items-center" text="f-2xs neutral-700" font-semibold lh-none>
          <div mr-4 size-8 i-nimiq:triangle-up :class="{ 'rotate-180': deltaPriceOneDay < 0 }" />
          <span>{{ formatDecimal(Math.abs(deltaPriceOneDay)) }} ({{ formatPercentage(deltaPriceOneDay / historicPrice) }})</span>
        </div>
      </div>
    </DefinePrice>

    <RibbonContainer :label="slice.primary.nimPriceChartLabel!" z-3 shadow md:min-h-480 outline-color="white/20">
      <div v-if="error" border="1 red-400" bg="neutral-0/20" absolute bottom="-96 md:-120" h-max of-y-auto rounded-8 px-4 py-4 text-red font-semibold font-mono shadow text-f-2xs>
        {{ error }}
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
