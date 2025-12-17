<script setup lang="ts">
defineProps<{
  data: {
    title: string
    description?: string
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
}>()

// SSR-safe currency and locale - only access on client
const userCurrency = import.meta.client ? useUserCurrency() : { currency: ref('USD'), currencyInfo: computed(() => null) }
const currency = userCurrency.currency
const currencyInfo = userCurrency.currencyInfo
const locale = useLocale()

const { marketCapChange, marketCapFormatted } = useNimMarketCap()
const { currentSupplyFormatted, maxSupplyFormatted } = useNimSupply()
const { volumeChange, volumeFormatted, error: volumeError, volumeIsLoading } = useNimVolume()
const { data: historicPrices, lastUpdated, period, periodOptions, isLoading: priceIsLoading } = useNimPriceHistory(currency)
const { deltaPrice, price1DayAgoLoading, priceLoading, price } = useNimPrice()

const isLoading = computed(() => priceIsLoading.value || priceLoading.value || price1DayAgoLoading.value || volumeIsLoading.value)

const asideRef = ref<HTMLElement>()
const { width: asideWidth } = useElementSize(asideRef)

type ControlPosition = 'top' | 'bottom'
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
  <div py="80 md:120" flex="~ col items-center" px-0 text-center bg-neutral-0 relative of-x-clip>
    <h1 nq-heading-lg max-w-prose>
      {{ data.title }}
    </h1>
    <p v-if="data.description" text="neutral-700 f-lg" mt-24 max-w-prose>
      {{ data.description }}
    </p>

    <!-- Price chart ribbon -->
    <div mt-64 w-full>
      <UiRibbonContainer v-if="data.nimPriceChartLabel" :label="data.nimPriceChartLabel" shadow z-3 md:min-h-480 outline-color="white/20">
        <div grid="~ cols-1 md:cols-[max-content_1fr]" size-full relative of-hidden>
          <aside ref="asideRef" md:border="r-1 solid neutral-400" grid="~ cols-[repeat(4,1fr)] md:cols-1 gap-col-20 gap-row-24" w-full relative f-p-md max-md:row-start-2 max-md:of-x-auto>
            <transition enter-active-class="transition duration-200 ease-out" enter-from-class="op-0" enter-to-class="op-100" leave-active-class="transition duration-200 ease-out" leave-from-class="op-100" leave-to-class="op-0">
              <div v-if="isLoading || error" flex="~ items-center gap-8" text=" orange f-sm" translate-x="100%" py-4 rounded-br-6 bg-white right--1 top--1 absolute z-30 f-px-xs border="b r neutral-400" lg:w-max>
                <Icon :name="isLoading ? 'nimiq:spinner' : 'nimiq:alert'" class="scale-90" />
                <p>{{ isLoading ? 'Loading...' : error }}</p>
              </div>
            </transition>

            <div v-if="data.marketCapLabel" flex="~ col gap-8" relative :data-state="marketCapFormatted === '0' ? 'inactive' : 'active'" z-1 reka-inactive:animate-pulse>
              <div outline="~ 1.5 neutral-200 offset--1.5" rounded-6 bg-neutral-100 h-full w-full inset--12 absolute z--1 reka-active:hidden w="[calc(100%+24px)]" />
              <div flex="~ gap-8 items-center">
                <span text="f-lg neutral" lh-none font-semibold whitespace-nowrap>{{ marketCapFormatted }}</span>
                <div v-if="marketCapChange" :class="marketCapChange < 0 ? 'text-red' : 'text-green'" flex="~ gap-2 items-center">
                  <Icon name="nimiq:triangle-up" aria-hidden class="size-7" :class="{ 'rotate-180': marketCapChange < 0 }" />
                  <span lh-none font-semibold f-text-sm>{{ formatPercentage(marketCapChange, locale.value) }}</span>
                </div>
              </div>
              <p text="f-xs neutral-800" lh-none font-normal>
                {{ data.marketCapLabel }}
              </p>
            </div>

            <div v-if="data.volume24HLabel" flex="~ col gap-8" relative :data-state="volumeFormatted === '0' ? 'inactive' : 'active'" z-1 reka-inactive:animate-pulse>
              <div outline="~ 1.5 neutral-200 offset--1.5" rounded-6 bg-neutral-100 h-full w-full inset--12 absolute z--1 reka-active:hidden w="[calc(100%+24px)]" />
              <div flex="~ gap-8 items-center">
                <span text="f-lg neutral" lh-none font-semibold whitespace-nowrap>{{ volumeFormatted }}</span>
                <div v-if="volumeChange" :class="volumeChange < 0 ? 'text-red' : 'text-green'" flex="~ gap-2 items-center">
                  <Icon name="nimiq:triangle-up" aria-hidden class="size-7" :class="{ 'rotate-180': volumeChange < 0 }" />
                  <span lh-none font-semibold f-text-sm>{{ formatPercentage(volumeChange, locale.value) }}</span>
                </div>
              </div>
              <p text="f-xs neutral-800" lh-none font-normal>
                {{ data.volume24HLabel }}
              </p>
            </div>

            <div v-if="data.totalSupplyLabel" flex="~ col gap-8" relative :data-state="currentSupplyFormatted === '0' ? 'inactive' : 'active'" z-1 reka-inactive:animate-pulse>
              <div outline="~ 1.5 neutral-200 offset--1.5" rounded-6 bg-neutral-100 h-full w-full inset--12 absolute z--1 reka-active:hidden w="[calc(100%+24px)]" />
              <span text="f-lg neutral" lh-none font-semibold>{{ currentSupplyFormatted }}</span>
              <p text="f-xs neutral-800" lh-none font-normal>
                {{ data.totalSupplyLabel }}
              </p>
            </div>

            <div v-if="data.maxSupplyLabel" flex="~ col gap-8" relative :data-state="maxSupplyFormatted === '0' ? 'inactive' : 'active'" z-1 reka-inactive:animate-pulse>
              <div outline="~ 1.5 neutral-200 offset--1.5" rounded-6 bg-neutral-100 h-full w-full inset--12 absolute z--1 reka-active:hidden w="[calc(100%+24px)]" />
              <span text="f-lg neutral" lh-none font-semibold>{{ maxSupplyFormatted }}</span>
              <p text="f-xs neutral-800" lh-none font-normal>
                {{ data.maxSupplyLabel }}
              </p>
            </div>

            <div v-show="lastUpdated" max-md="col-span-full sticky left-0 w-[calc(100vw-80px)] w-max" flex="~ md:col gap-col-4 gap-row-8 max-md:justify-center" text="f-2xs neutral-800" lh-none md:mt-auto>
              <span>Last updated:</span>
              <NuxtTime v-if="lastUpdated" :datetime="lastUpdated" year="numeric" month="long" day="numeric" hour="2-digit" minute="2-digit" />
              <span v-else>Loading...</span>
            </div>
          </aside>
          <div group relative f-pb-xs>
            <ChartLine :key="asideWidth" :data="historicPrices || []" leader rounded-8 h-full>
              <template #default="{ data: [ts, historicPrice] }">
                <div flex="~ col gap-8" f="$side $side-min-20 $side-max-24" mx-20 bg-neutral-0 top-21 relative f-py-xs>
                  <div inset-y-0 absolute left="[calc(var(--f-side)*-1)]" w="$f-side" style="background-image: linear-gradient(to right in oklab, transparent, var(--colors-neutral-0))" />
                  <div right="[calc(var(--f-side)*-1)]" w="$f-side" style="background-image: linear-gradient(to right in oklab, var(--colors-neutral-0), transparent)" inset-y-0 absolute f-w-md />
                  <p text="blue f-3xl" lh-none font-semibold>
                    {{ currencyInfo ? formatFiat(historicPrice, currencyInfo, locale.value) : '' }}
                  </p>
                  <NuxtTime :datetime="ts" year="numeric" month="long" day="numeric" text="f-2xs right neutral-700" lh-none nq-label />
                </div>
              </template>
            </ChartLine>

            <div right-32 top-32 absolute z-20>
              <div v-if="historicPrices?.at(-1)" flex="~ col gap-8" f="$side $side-min-20 $side-max-24" bg-neutral-0 transition-opacity relative f-py-xs leader-hocus:invisible>
                <div inset-y-0 absolute left="[calc(var(--f-side)*-1)]" w="$f-side" style="background-image: linear-gradient(to right in oklab, transparent, var(--colors-neutral-0))" />
                <div right="[calc(var(--f-side)*-1)]" w="$f-side" style="background-image: linear-gradient(to right in oklab, var(--colors-neutral-0), transparent)" inset-y-0 absolute f-w-md />
                <p text="blue f-3xl" lh-none font-semibold>
                  {{ currencyInfo ? formatFiat(historicPrices.at(-1)![1], currencyInfo, locale.value) : '' }}
                </p>
                <div v-if="deltaPrice && currencyInfo" flex="~ items-center" text="f-2xs neutral-700" lh-none font-semibold>
                  <Icon name="nimiq:triangle-up" class="mr-4 size-8" :class="{ 'rotate-180': deltaPrice < 0 }" />
                  <span>{{ formatDecimal(Math.abs(deltaPrice), locale.value) }} ({{ formatPercentage(deltaPrice / historicPrices.at(-1)![1], locale.value) }})</span>
                </div>
              </div>
            </div>

            <div data-allow-mismatch :class="controlsPosition === 'top' ? 'top-128' : 'bottom-64'" flex="~ items-center gap-8" absolute z-20 f-right-md>
              <UiPillSelector v-model="period" :options="periodOptions" self-end justify-self-end ring="white 3" />
              <UiCurrencySelector v-model="currency" bg="darkblue hocus:neutral-200" transition="[background-color]" text-14 font-normal px-2 rounded-full h-full nq-label text="white hocus:neutral" ring="white 3" border="~ 1.5 neutral-200">
                <template #trigger="{ selectedCurrency }">
                  {{ selectedCurrency.toLocaleUpperCase() }}
                </template>
              </UiCurrencySelector>
            </div>
          </div>
        </div>
      </UiRibbonContainer>
    </div>

    <p v-if="data.poweredByLabel && data.poweredByLogo" flex="~ items-center justify-center gap-8" f-mt-md text="center f-sm">
      {{ data.poweredByLabel }}
      <NuxtLink v-if="data.poweredByLink" :to="data.poweredByLink" external target="_blank">
        <NuxtImg :src="data.poweredByLogo" op="80 hocus:100" w-full transition-opacity f-h-sm />
      </NuxtLink>
      <NuxtImg v-else :src="data.poweredByLogo" op-80 w-full f-h-sm />
    </p>
  </div>
</template>
