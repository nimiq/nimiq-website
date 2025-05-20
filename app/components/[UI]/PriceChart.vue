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
        <div outline="~ 1.5 neutral-200 offset--1.5" rounded-6 bg-neutral-100 h-full w-full inset--12 absolute z--1 reka-active:hidden w="[calc(100%+24px)]" />
        <div flex="~ gap-8 items-center">
          <span text="f-lg neutral" font-semibold lh-none whitespace-nowrap>
            {{ metricValue }}
          </span>
          <div v-if="metricChange" :class="metricChange < 0 ? 'text-red' : 'text-green'" flex="~ gap-2 items-center">
            <div :class="{ 'rotate-180': metricChange < 0 }" aria-hidden size-7 i-nimiq:triangle-up />
            <span font-semibold lh-none f-text-sm>{{ formatPercentage(metricChange) }}</span>
          </div>
        </div>
        <div flex="~ gap-6 items-center">
          <p text="f-xs neutral-800" font-normal lh-none w-max>
            {{ label }}
          </p>
          <Tooltip v-if="tooltipInfo">
            <RichText wrapper="div" :field="tooltipInfo" />
          </Tooltip>
        </div>
      </div>
    </DefineMetric>

    <DefinePrice v-slot="{ data: [ts, historicPrice], deltaPriceOneDay }">
      <div flex="~ col gap-8" f="$side $side-min-20 $side-max-24" bg-neutral-0 relative f-py-xs :class="{ 'top-21 mx-20': !deltaPriceOneDay }">
        <div inset-y-0 absolute left="[calc(var(--f-side)*-1)]" w="$f-side" bg-gradient="from-transparent to-neutral-0 to-r" />
        <div right="[calc(var(--f-side)*-1)]" w="$f-side" bg-gradient="from-neutral-0 to-transparent to-r" inset-y-0 absolute f-w-md />
        <p text="blue f-3xl" font-semibold lh-none>
          {{ formatFiat(historicPrice, currencyInfo) }}
        </p>
        <NuxtTime v-if="!deltaPriceOneDay" :datetime="ts" year="numeric" month="long" day="numeric" text="f-2xs right neutral-700" lh-none nq-label />
        <div v-else flex="~ items-center" text="f-2xs neutral-700" font-semibold lh-none>
          <div mr-4 size-8 i-nimiq:triangle-up :class="{ 'rotate-180': deltaPriceOneDay < 0 }" />
          <span>{{ formatDecimal(Math.abs(deltaPriceOneDay)) }} ({{ formatPercentage(deltaPriceOneDay / historicPrice) }})</span>
        </div>
      </div>
    </DefinePrice>

    <RibbonContainer :label="slice.primary.nimPriceChartLabel!" shadow z-3 md:min-h-480 outline-color="white/20">
      <div grid="~ cols-1 md:cols-[max-content_1fr]" size-full relative of-hidden>
        <aside md:border="r-1 solid neutral-400" grid="~ cols-[repeat(4,1fr)] md:cols-1 gap-col-20 gap-row-24" w-full relative f-p-md max-md:row-start-2 max-md:of-x-auto>
          <transition enter-active-class="transition duration-200 ease-out" enter-from-class="op-0" enter-to-class="op-100" leave-active-class="transition duration-200 ease-out" leave-from-class="op-100" leave-to-class="op-0">
            <div v-if="isLoading || error" flex="~ items-center gap-8" text=" gold f-sm" translate-x="100%" py-4 rounded-br-6 bg-white right--1 top--1 absolute z-30 f-px-xs border="b r neutral-400">
              <div scale-90 :class="isLoading ? 'i-nimiq:spinner' : 'i-nimiq:alert'" />
              <p>
                {{ isLoading ? 'Loading...' : error }}
              </p>
            </div>
          </transition>

          <ReuseMetric :metric-value="marketCapFormatted" :metric-change="marketCapChange" :label="slice.primary.marketCapLabel!" :tooltip-info="slice.primary.marketCapInfo" />
          <ReuseMetric :metric-value="volumeFormatted" :metric-change="volumeChange" :label="slice.primary.volume24HLabel!" :tooltip-info="slice.primary.volume24HInfo" />
          <ReuseMetric :metric-value="currentSupplyFormatted" :label="slice.primary.totalSupplyLabel!" :tooltip-info="slice.primary.totalSupplyInfo" />
          <ReuseMetric :metric-value="maxSupplyFormatted" :label="slice.primary.maxSupplyLabel!" :tooltip-info="slice.primary.maxSupplyInfo" />

          <!-- We use `v-show` to avoid CLS -->
          <div v-show="lastUpdated" max-md="col-span-full sticky left-0 w-[calc(100vw-80px)] w-max" flex="~ md:col gap-col-4 gap-row-8 max-md:justify-center" text="f-2xs neutral-800" lh-none md:mt-auto>
            <span>Last updated:</span>
            <NuxtTime v-if="lastUpdated" :datetime="lastUpdated" year="numeric" month="long" day="numeric" hour="2-digit" minute="2-digit" />
            <span v-else>Loading...</span>
          </div>
        </aside>
        <div group relative f-pb-xs>
          <ChartLine :data="historicPrices || []" leader rounded-8 h-full>
            <template #default="{ data: [ts, historicPrice] }">
              <Price :data="[ts, historicPrice]" />
            </template>
          </ChartLine>

          <div right-32 top-32 absolute z-20>
            <Price transition-opacity leader-hocus:invisible :data="historicPrices?.at(-1) || [0, 0]" :delta-price-one-day="deltaPrice" />
          </div>

          <!-- Position controls based on the chart trend -->
          <div data-allow-mismatch :class="controlsPosition === 'top' ? 'top-128' : 'bottom-64'" flex="~ items-center gap-8" absolute z-20 f-right-md>
            <PillSelector v-model="period" :options="periodOptions" self-end justify-self-end ring="white 3" />
            <CurrencySelector v-model="currency" bg="darkblue hocus:neutral-200" transition="[background-color]" text-14 font-normal px-2 rounded-full h-full nq-label text="white hocus:neutral" ring="white 3" border="~ 1.5 neutral-200">
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
