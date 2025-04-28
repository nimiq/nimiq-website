<script setup lang="ts">
import type { Content, RichTextField } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.PriceChartSlice>())

const { currency, currencyInfo } = useUserCurrency()

const { marketCapChange, maxSupplyFormatted, currentSupplyFormatted, volumeChange, volumeFormatted, marketCapUserCurrencyFormatted } = useNimMetrics()
const { data: historicPrices, lastUpdated, period, periodOptions } = useNimPriceHistory(currency)
const { deltaPrice } = useNimPrice()

const [DefineMetric, ReuseMetric] = createReusableTemplate<{ metricValue: MaybeRef<string>, metricChange?: number, label: string, tooltipInfo?: RichTextField }>()
const [DefinePrice, Price] = createReusableTemplate<{ data: [number, number], deltaPriceOneDay?: number }>()
</script>

<template>
  <section flex="~ col items-center" of-x-clip bg-neutral-0 f-pt-2xl>
    <DefineMetric v-slot="{ metricValue, metricChange, label, tooltipInfo }">
      <div flex="~ col gap-8" z-1>
        <div flex="~ gap-8 items-center">
          <span font-semibold text="f-lg neutral" lh-none>
            {{ metricValue }}
          </span>
          <div v-if="metricChange" :class="metricChange < 0 ? 'text-red' : 'text-green'" flex="~ gap-2 items-center">
            <div :class="{ 'rotate-180': metricChange < 0 }" aria-hidden size-7 i-nimiq:triangle-up />
            <span font-semibold f-text-sm>{{ formatPercentage(metricChange) }}</span>
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
      <div bg-neutral-0 flex="~ col gap-8">
        <p text="blue f-3xl" font-semibold lh-none>
          {{ formatFiat(price, currencyInfo, { maxDecimals: Number.POSITIVE_INFINITY }) }}
        </p>
        <NuxtTime v-if="!deltaPriceOneDay" :datetime="ts" year="numeric" month="long" day="numeric" hour="2-digit" minute="2-digit" nq-label text="11/1 right" />
        <div v-else flex="~ items-center" text="f-sm neutral-700" font-semibold>
          <div mr-4 size-8 i-nimiq:triangle-up :class="{ 'rotate-180': deltaPriceOneDay < 0 }" />
          <span>{{ Math.abs(deltaPriceOneDay) }} ({{ formatPercentage(deltaPriceOneDay / price) }})</span>
        </div>
      </div>
    </DefinePrice>

    <RibbonContainer :label="slice.primary.nimPriceChartLabel!" min-h-45vh>
      <div grid="~ cols-1 md:cols-[max-content_1fr]" size-full>
        <aside border="r-1 solid neutral-400" f-p-md flex="~ col gap-row-24">
          <ReuseMetric :metric-value="marketCapUserCurrencyFormatted" :metric-change="marketCapChange" :label="slice.primary.marketCapLabel!" :tooltip-info="slice.primary.marketCapInfo" />
          <ReuseMetric :metric-value="volumeFormatted" :metric-change="volumeChange" :label="slice.primary.volume24HLabel!" :tooltip-info="slice.primary.volume24HInfo" />
          <ReuseMetric :metric-value="currentSupplyFormatted" :label="slice.primary.totalSupplyLabel!" :tooltip-info="slice.primary.totalSupplyInfo" />
          <ReuseMetric :metric-value="maxSupplyFormatted" :label="slice.primary.maxSupplyLabel!" :tooltip-info="slice.primary.maxSupplyInfo" />
          <div v-if="lastUpdated" mt-auto flex="~ col gap-8" text="f-2xs neutral-800" lh-none>
            <span>Last updated</span>
            <NuxtTime :datetime="lastUpdated" year="numeric" month="long" day="numeric" hour="2-digit" minute="2-digit" />
          </div>
        </aside>
        <div group relative f-pb-xs>
          <ChartLine :data="historicPrices || []">
            <template #default="{ data: [ts, price] }">
              <Price :data="[ts, price]" />
            </template>
          </ChartLine>

          <div absolute left-32 top-32>
            <Price op="100 leader-hocus:0" transition-opacity :data="historicPrices?.at(-1) || [0, 0]" :delta-price />
          </div>

          <div absolute bottom-64 f-right-md>
            <PillSelector v-model="period" :options="periodOptions" self-end justify-self-end f-mt-md />
          </div>
        </div>
      </div>
    </RibbonContainer>

    <p flex="~ items-center gap-8" f-mt-md text="center f-sm">
      {{ slice.primary.poweredByLabel }} <PrismicLink :field="slice.primary.poweredByLink">
        <PrismicImage op="80 hocus:100" :field="slice.primary.poweredByLogo" h-32 w-full transition-opacity />
      </PrismicLink>
    </p>
  </section>
</template>
