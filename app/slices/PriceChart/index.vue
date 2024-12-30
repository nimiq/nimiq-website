<script setup lang="ts">
import type { Content, RichTextField } from '@prismicio/client'
import PillSelector from '~/components/PillSelector.vue'

const { slice } = defineProps(getSliceComponentProps<Content.PriceChartSlice>())

const locale = useLocale()
const dateFormatter = new Intl.DateTimeFormat(locale.value, { hour: 'numeric', minute: 'numeric', hour12: true, month: 'short', day: 'numeric', year: 'numeric' })
const percentageFormatter = new Intl.NumberFormat(locale.value, { style: 'percent', maximumFractionDigits: 2 })

const { marketCapChange, maxSupplyFormatted, totalSupplyFormatted, volumeChange, volumeUserCurrencyFormatted, marketCapUserCurrencyFormatted } = useNimMetrics()
const { historicPrices, historicPriceRangeOptions, selectedHistoricPricePeriod } = useNimPrice()

const lastUpdatedLabel = computed(() => {
  const mostRecentPriceDate = historicPrices.value?.at(-1)?.at(0)
  if (!mostRecentPriceDate)
    return ''
  const formattedDate = dateFormatter.format(new Date(mostRecentPriceDate))
  return slice.primary.lastUpdatedLabel!.replace('{{ timestamp }}', formattedDate)
})

const [DefineMetric, ReuseMetric] = createReusableTemplate<{ metricValue: string, metricChange?: number, label: string, tooltipInfo?: RichTextField }>()
</script>

<template>
  <section flex="~ col items-center" of-x-clip bg-neutral-0 nq-pt-96>
    <DefineMetric v-slot="{ metricValue, metricChange, label, tooltipInfo }">
      <div flex="~ col-reverse gap-8">
        <div flex="~ gap-6 items-center">
          <h3 text="xs neutral-800" w-max font-normal lh-none>
            {{ label }}
          </h3>
          <Tooltip v-if="tooltipInfo">
            <PrismicRichText :field="tooltipInfo" />
          </Tooltip>
        </div>
        <div flex="~ gap-8 items-center">
          <span font-semibold text="lg neutral">
            {{ metricValue }}
          </span>
          <div v-if="metricChange" :class="metricChange < 0 ? 'text-red' : 'text-green'" flex="~ gap-2 items-center">
            <div :class="{ 'rotate-180': metricChange < 0 }" aria-hidden i-nimiq:triangle-up text-12 />
            <span font-semibold text-sm>{{ percentageFormatter.format(metricChange) }}</span>
          </div>
        </div>
      </div>
    </DefineMetric>

    <div ring="1.5 neutral/15" relative w-full rounded-8 bg-neutral-0 shadow nq-pt-32 stack style="--ribbong-r: -18px; --ribbong-t: calc(var(--nq-pt) * -1 - 11px)">
      <!-- Ribbon fold -->
      <div aria-hidden relative z-1 w-44 origin-bottom-right rotate--45 self-start justify-self-end border="22 x-transparent t-0 #EC991C" style="right: var(--ribbong-r); top: var(--ribbong-t)" />
      <!-- Ribbon -->
      <div relative z-10 w-max self-start justify-self-end style="right: var(--ribbong-r); top: var(--ribbong-t)">
        <AnimatedFloatingStars translate="-50%" absolute left="50%" top="50%" z-1 />
        <div bg="#E9B213" text="lg white" rounded="6 br-0" relative z-2 ml-auto w-max px-20 py-16 font-semibold>
          {{ slice.primary.nimPriceChartLabel }}
        </div>
      </div>

      <div flex="~ gap-20" w-max self-start justify-self-start nq-px-32>
        <ReuseMetric :metric-value="marketCapUserCurrencyFormatted" :metric-change="marketCapChange" :label="slice.primary.marketCapLabel!" :tooltip-info="slice.primary.marketCapInfo" />
        <ReuseMetric :metric-value="volumeUserCurrencyFormatted" :metric-change="volumeChange" :label="slice.primary.volume24HLabel!" :tooltip-info="slice.primary.volume24HInfo" />
        <ReuseMetric :metric-value="totalSupplyFormatted" :label="slice.primary.totalSupplyLabel!" :tooltip-info="slice.primary.totalSupplyInfo" />
        <ReuseMetric :metric-value="maxSupplyFormatted" :label="slice.primary.maxSupplyLabel!" :tooltip-info="slice.primary.maxSupplyInfo" />
      </div>

      <div w-full nq-pb-12 nq-pt-32>
        <ChartLine :data="historicPrices" />
      </div>

      <PillSelector v-model="selectedHistoricPricePeriod" :options="historicPriceRangeOptions" self-end justify-self-end nq-m-32 />
    </div>
    <div flex="~ col items-center gap-8" nq-mt-32>
      <p flex="~ items-center gap-8" text="center sm">
        {{ slice.primary.poweredByLabel }} <PrismicLink :field="slice.primary.poweredByLink">
          <PrismicImage op="80 hocus:100" :field="slice.primary.poweredByLogo" h-32 w-full transition-opacity />
        </PrismicLink>
      </p>
      <p text-xs>
        {{ lastUpdatedLabel }}
      </p>
    </div>
  </section>
</template>
