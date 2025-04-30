<script setup lang="ts">
import type { Content, RichTextField } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.PriceChartSlice>())

const { currency, currencyInfo } = useUserCurrency()

const { marketCapChange, maxSupplyFormatted, currentSupplyFormatted, volumeChange, volumeFormatted, marketCapUserCurrencyFormatted } = useNimMetrics()
const { data: historicPrices, lastUpdated, period, periodOptions } = useNimPriceHistory(currency)
const { deltaPrice } = useNimPrice()

// Determine optimal control position based on price trend
const controlsPosition = useChartControlsPosition(historicPrices)

const [DefineMetric, ReuseMetric] = createReusableTemplate<{ metricValue: MaybeRef<string>, metricChange?: number, label: string, tooltipInfo?: RichTextField }>()
const [DefinePrice, Price] = createReusableTemplate<{ data: [number, number], deltaPriceOneDay?: number }>()
</script>

<template>
  <section flex="~ col items-center" of-x-clip bg-neutral-0 max-md="px-16 children:mx-0 children:max-w-none" f-pt-2xl>
    <DefineMetric v-slot="{ metricValue, metricChange, label, tooltipInfo }">
      <div flex="~ col gap-8" z-1>
        <div flex="~ gap-8 items-center">
          <span text="f-lg neutral" data-allow-mismatch whitespace-nowrap font-semibold lh-none>
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

    <DefinePrice v-slot="{ data: [ts, price], deltaPriceOneDay }">
      <div flex="~ col gap-8" relative bg-neutral-0 f="$side $side-min-20 $side-max-24" f-py-xs :class="{ 'top-21 mx-20': !deltaPriceOneDay }">
        <div absolute inset-y-0 left="[calc(var(--f-side)*-1)]" w="$f-side" bg-gradient="from-transparent to-neutral-0 to-r" />
        <div absolute inset-y-0 right="[calc(var(--f-side)*-1)]" w="$f-side" bg-gradient="from-neutral-0 to-transparent to-r" f-w-md />
        <p text="blue f-3xl" font-semibold lh-none>
          {{ formatFiat(price, currencyInfo, { maxDecimals: Number.POSITIVE_INFINITY }) }}
        </p>
        <NuxtTime v-if="!deltaPriceOneDay" :datetime="ts" year="numeric" month="long" day="numeric" hour="2-digit" minute="2-digit" text="f-2xs right neutral-700" lh-none nq-label />
        <div v-else flex="~ items-center" text="f-2xs neutral-700" font-semibold lh-none>
          <div mr-4 size-8 i-nimiq:triangle-up :class="{ 'rotate-180': deltaPriceOneDay < 0 }" />
          <span>{{ Math.abs(deltaPriceOneDay) }} ({{ formatPercentage(deltaPriceOneDay / price) }})</span>
        </div>
      </div>
    </DefinePrice>

    <RibbonContainer :label="slice.primary.nimPriceChartLabel!" md:min-h-45vh>
      <div grid="~ cols-1 md:cols-[max-content_1fr]" size-full of-hidden>
        <aside relative md:border="r-1 solid neutral-400" w-full grid="~ cols-[repeat(4,1fr)] md:cols-1 gap-col-20 gap-row-24" of-x-auto f-p-md max-md:row-start-2>
          <ReuseMetric :metric-value="marketCapUserCurrencyFormatted" :metric-change="marketCapChange" :label="slice.primary.marketCapLabel!" :tooltip-info="slice.primary.marketCapInfo" />
          <ReuseMetric :metric-value="volumeFormatted" :metric-change="volumeChange" :label="slice.primary.volume24HLabel!" :tooltip-info="slice.primary.volume24HInfo" />
          <ReuseMetric :metric-value="currentSupplyFormatted" :label="slice.primary.totalSupplyLabel!" :tooltip-info="slice.primary.totalSupplyInfo" />
          <ReuseMetric :metric-value="maxSupplyFormatted" :label="slice.primary.maxSupplyLabel!" :tooltip-info="slice.primary.maxSupplyInfo" />
          <div v-if="lastUpdated" max-md="col-span-full sticky left-0 w-[calc(100vw-80px)]" flex="~ md:col gap-col-4 gap-row-8 max-md:justify-center" text="f-2xs neutral-800" lh-none md:mt-auto>
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

          <div absolute right-32 top-32>
            <Price transition-opacity leader-hocus:invisible :data="historicPrices?.at(-1) || [0, 0]" :delta-price-one-day="deltaPrice" />
          </div>

          <!-- Position controls based on the chart trend -->
          <div
            absolute
            :class="controlsPosition === 'top' ? 'top-128' : 'bottom-64'"
            f-right-md
            flex="~ items-center gap-8"
          >
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

    <p flex="~ items-center gap-8" f-mt-md text="center f-sm">
      {{ slice.primary.poweredByLabel }} <PrismicLink :field="slice.primary.poweredByLink">
        <PrismicImage op="80 hocus:100" :field="slice.primary.poweredByLogo" w-full transition-opacity f-h-sm />
      </PrismicLink>
    </p>
  </section>
</template>
