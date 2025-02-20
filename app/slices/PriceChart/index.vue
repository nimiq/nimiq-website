<script setup lang="ts">
import type { Content, RichTextField } from '@prismicio/client'
import PillSelector from '~/components/PillSelector.vue'

const { slice } = defineProps(getSliceComponentProps<Content.PriceChartSlice>())

const locale = useLocale()
const dateFormatter = new Intl.DateTimeFormat(locale.value, { hour: 'numeric', minute: 'numeric', hour12: true, month: 'short', day: 'numeric', year: 'numeric' })
const dateFormatterShort = new Intl.DateTimeFormat(locale.value, { month: 'short', day: 'numeric', year: '2-digit' })
const percentageFormatter = new Intl.NumberFormat(locale.value, { style: 'percent', maximumFractionDigits: 2 })

const { currencyInfo, currency } = useUserCurrency()

const { marketCapChange, maxSupplyFormatted, currentSupplyFormatted, volumeChange, volumeUserCurrencyFormatted, marketCapUserCurrencyFormatted } = useNimMetrics()
const { data: historicPrices, period, periodOptions } = useNimPriceHistory(currency)

const lastUpdatedLabel = computed(() => {
  const mostRecentPriceDate = historicPrices.value?.at(-1)?.at(0)
  if (!mostRecentPriceDate)
    return ''
  const formattedDate = dateFormatter.format(new Date(mostRecentPriceDate))
  return slice.primary.lastUpdatedLabel!.replace('{{ timestamp }}', formattedDate)
})

const [DefineMetric, ReuseMetric] = createReusableTemplate<{ metricValue: MaybeRef<string>, metricChange?: number, label: string, tooltipInfo?: RichTextField }>()
const [DefineCrosshair, ReuseCrosshair] = createReusableTemplate<{ data: [number, number] }>()
</script>

<template>
  <section flex="~ col items-center" of-x-clip bg-neutral-0 f-pt-2xl>
    <DefineCrosshair v-slot="{ data: [ts, price] }">
      <div backdrop-blur-12 f-pt-2xs f-pt-xs flex="~ col gap-8">
        <p text="blue f-3xl" font-semibold lh-none>
          {{ formatFiat(price, currencyInfo, { maxDecimals: Number.POSITIVE_INFINITY }) }}
        </p>

        <time :datetime="(new Date(ts)).toISOString()" text="11/1 right" nq-label>
          {{ dateFormatterShort.format(new Date(ts)) }}
        </time>
      </div>
    </DefineCrosshair>

    <DefineMetric v-slot="{ metricValue, metricChange, label, tooltipInfo }">
      <div flex="~ col-reverse gap-8" z-1>
        <div flex="~ gap-8 items-center">
          <span font-semibold text="f-lg neutral">
            {{ metricValue }}
          </span>
          <div v-if="metricChange" :class="metricChange < 0 ? 'text-red' : 'text-green'" flex="~ gap-2 items-center">
            <div :class="{ 'rotate-180': metricChange < 0 }" aria-hidden i-nimiq:triangle-up text-12 />
            <span font-semibold f-text-sm>{{ percentageFormatter.format(metricChange) }}</span>
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

    <div ring="1.5 neutral/15" relative w-full rounded-8 bg-neutral-0 shadow f-pt-md stack style="--ribbong-r: -18px; --ribbong-t: calc(var(--f-pt) * -1 - 11px)">
      <!-- Ribbon fold -->
      <div aria-hidden relative z-1 w-44 origin-bottom-right rotate--45 self-start justify-self-end border="22 x-transparent t-0 #EC991C" style="right: var(--ribbong-r); top: var(--ribbong-t)" />
      <!-- Ribbon -->
      <div relative z-10 w-max self-start justify-self-end style="right: var(--ribbong-r); top: var(--ribbong-t)">
        <AnimatedFloatingStars translate="-50%" absolute left="50%" top="50%" z-1 />
        <div bg="#E9B213" text="f-lg white" rounded="6 br-0" relative z-2 ml-auto w-max px-20 py-16 font-semibold>
          {{ slice.primary.nimPriceChartLabel }}
        </div>
      </div>

      <div flex="~ gap-20" f-pt-md-max self-start justify-self-start>
        <ReuseMetric :metric-value="marketCapUserCurrencyFormatted" :metric-change="marketCapChange" :label="slice.primary.marketCapLabel!" :tooltip-info="slice.primary.marketCapInfo" />
        <ReuseMetric :metric-value="volumeUserCurrencyFormatted" :metric-change="volumeChange" :label="slice.primary.volume24HLabel!" :tooltip-info="slice.primary.volume24HInfo" />
        <ReuseMetric :metric-value="currentSupplyFormatted" :label="slice.primary.totalSupplyLabel!" :tooltip-info="slice.primary.totalSupplyInfo" />
        <ReuseMetric :metric-value="maxSupplyFormatted" :label="slice.primary.maxSupplyLabel!" :tooltip-info="slice.primary.maxSupplyInfo" />
      </div>

      <div leader w-full f-pt-md>
        <ChartLine :data="historicPrices || []">
          <template #default="{ data: [ts, price] }">
            <ReuseCrosshair :data="[ts, price]" />
          </template>
        </ChartLine>
      </div>

      <ReuseCrosshair self-start justify-self-end op="100 leader-hocus:0" transition-opacity :data="historicPrices?.at(-1) || [0, 0]" />

      <PillSelector v-model="period" :options="periodOptions" self-end justify-self-end f-mt-md />
    </div>
    <div flex="~ col items-center gap-8" f-mt-md>
      <p flex="~ items-center gap-8" text="center f-sm">
        {{ slice.primary.poweredByLabel }} <PrismicLink :field="slice.primary.poweredByLink">
          <PrismicImage op="80 hocus:100" :field="slice.primary.poweredByLogo" h-32 w-full transition-opacity />
        </PrismicLink>
      </p>
      <p f-text-xs>
        {{ lastUpdatedLabel }}
      </p>
    </div>
  </section>
</template>
