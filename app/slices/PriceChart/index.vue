<script setup lang="ts">
import type { Content, RichTextField } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.PriceChartSlice>())

const locale = useLocale()
const dateFormatter = new Intl.DateTimeFormat(locale.value, { hour: 'numeric', minute: 'numeric', hour12: true, month: 'short', day: 'numeric', year: 'numeric' })
const percentageFormatter = new Intl.NumberFormat(locale.value, { style: 'percent', maximumFractionDigits: 2 })

const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000)
const lastUpdatedLabel = computed(() => {
  const formattedDate = dateFormatter.format(tenMinutesAgo)
  return slice.primary.lastUpdatedLabel!.replace('{{ timestamp }}', formattedDate)
})

const { marketCapChange, maxSupplyFormatted, totalSupplyFormatted, volumeChange, volumeUserCurrencyFormatted, marketCapUserCurrencyFormatted } = useTokenMetrics()

const [DefineMetric, ReuseMetric] = createReusableTemplate<{ metricValue: string, metricChange?: number, label: string, tooltipInfo?: RichTextField }>()
</script>

<template>
  <section bg-neutral-0 nq-pt-96 flex="~ col items-center">
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

    <div ring="1.5 neutral/15" relative w-full rounded-8 bg-neutral-0 p-32 shadow stack>
      <!-- Ribbon fold -->
      <div self-start="!" justify-self-end="!" aria-hidden z-1 mr--18 mt-48 w-44 origin-bottom-right rotate--45 border="22 x-transparent t-0 #EC991C" />
      <!-- Ribbon -->
      <div self-start="!" justify-self-end="!" relative z-10 mr--18 mt-11 w-max>
        <AnimatedFloatingStars translate="-50%" absolute left="50%" top="50%" z-1 />
        <div bg="#E9B213" text="lg white" rounded="6 br-0" relative z-2 ml-auto w-max px-20 py-16 font-semibold>
          {{ slice.primary.nimPriceChartLabel }}
        </div>
      </div>

      <div flex="~ col gap-20" w-max>
        <ReuseMetric :metric-value="marketCapUserCurrencyFormatted" :metric-change="marketCapChange" :label="slice.primary.marketCapLabel!" :tooltip-info="slice.primary.marketCapInfo" />
        <ReuseMetric :metric-value="volumeUserCurrencyFormatted" :metric-change="volumeChange" :label="slice.primary.volume24HLabel!" :tooltip-info="slice.primary.volume24HInfo" />
        <ReuseMetric :metric-value="totalSupplyFormatted" :label="slice.primary.totalSupplyLabel!" :tooltip-info="slice.primary.totalSupplyInfo" />
        <ReuseMetric :metric-value="maxSupplyFormatted" :label="slice.primary.maxSupplyLabel!" :tooltip-info="slice.primary.maxSupplyInfo" />
      </div>
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
