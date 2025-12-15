<script setup lang="ts">
interface HeroData {
  headline: string
  subline?: string
  nimPriceChartLabel?: string
  marketCapLabel?: string
  marketCapInfo?: string
  volume24HLabel?: string
  volume24HInfo?: string
  totalSupplyLabel?: string
  totalSupplyInfo?: string
  maxSupplyLabel?: string
  maxSupplyInfo?: string
  poweredByLogo?: string
  poweredByLink?: string
  poweredByLabel?: string
}

defineProps<{ data: HeroData }>()

const { marketCapFormatted } = useNimMarketCap()
const { volumeFormatted } = useNimVolume()
const { currentSupplyFormatted, maxSupplyFormatted } = useNimSupply()
</script>

<template>
  <section px-0 bg-neutral-0 relative of-x-clip>
    <div py="80 md:120" flex="~ col items-center" text-center>
      <h1 nq-heading-lg max-w-prose>
        {{ data.headline }}
      </h1>
      <p v-if="data.subline" text="neutral-700 f-lg" mt-24 max-w-prose>
        {{ data.subline }}
      </p>

      <!-- Price chart ribbon placeholder -->
      <div mt-64 w-full>
        <UiRibbonContainer v-if="data.nimPriceChartLabel" :label="data.nimPriceChartLabel" shadow>
          <div grid="~ cols-1 md:cols-[max-content_1fr]" size-full min-h-400 relative of-hidden>
            <!-- Metrics sidebar -->
            <aside md:border="r-1 solid neutral-400" grid="~ cols-2 md:cols-1 gap-col-20 gap-row-24" w-full relative f-p-md max-md:row-start-2>
              <div v-if="data.marketCapLabel" flex="~ col gap-8">
                <span text="f-lg neutral" font-semibold lh-none>{{ marketCapFormatted }}</span>
                <p text="f-xs neutral-800" font-normal lh-none>
                  {{ data.marketCapLabel }}
                </p>
              </div>
              <div v-if="data.volume24HLabel" flex="~ col gap-8">
                <span text="f-lg neutral" font-semibold lh-none>{{ volumeFormatted }}</span>
                <p text="f-xs neutral-800" font-normal lh-none>
                  {{ data.volume24HLabel }}
                </p>
              </div>
              <div v-if="data.totalSupplyLabel" flex="~ col gap-8">
                <span text="f-lg neutral" font-semibold lh-none>{{ currentSupplyFormatted }}</span>
                <p text="f-xs neutral-800" font-normal lh-none>
                  {{ data.totalSupplyLabel }}
                </p>
              </div>
              <div v-if="data.maxSupplyLabel" flex="~ col gap-8">
                <span text="f-lg neutral" font-semibold lh-none>{{ maxSupplyFormatted }}</span>
                <p text="f-xs neutral-800" font-normal lh-none>
                  {{ data.maxSupplyLabel }}
                </p>
              </div>
            </aside>

            <!-- Chart placeholder -->
            <div flex="~ items-center justify-center" text="neutral-600 f-lg" p-32>
              Price chart coming soon
            </div>
          </div>
        </UiRibbonContainer>
      </div>

      <p v-if="data.poweredByLabel && data.poweredByLogo" flex="~ items-center justify-center gap-8" f-mt-md text="center f-sm">
        {{ data.poweredByLabel }}
        <NuxtLink v-if="data.poweredByLink" :to="data.poweredByLink" external target="_blank">
          <img :src="data.poweredByLogo" op="80 hocus:100" w-full transition-opacity f-h-sm>
        </NuxtLink>
        <img v-else :src="data.poweredByLogo" op-80 w-full f-h-sm>
      </p>
    </div>
  </section>
</template>
