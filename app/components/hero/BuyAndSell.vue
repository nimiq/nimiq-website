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

// SSR-safe currency and locale
const { currency, currencyInfo } = useUserCurrency()
const locale = useLocale()

const { fiatAmount, cryptoAmount, fiatKey, cryptoKey } = useSyncAmountInputs()
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
  <div class="relative overflow-x-clip w-full">
    <!-- Background gradient and decorative element -->
    <div class="inset-0 absolute z-0 overflow-hidden">
      <div class="inset-0 absolute bg-gradient" />
      <img src="/images/pages/buy-and-sell/buy-and-sell-bg.svg" class="h-auto w-[140vw] md:w-[110vw] absolute bottom-16 md:-bottom-64 -left-16 md:left-0" alt="" aria-hidden="true">
    </div>

    <div class="z-3 relative py-20 md:py-30 flex flex-col items-center px-6 text-center">
      <h1 class="nq-heading-lg max-w-prose">
        {{ data.title }}
      </h1>
      <p v-if="data.description" class="text-neutral-700 text-base md:text-lg mt-6 max-w-prose">
        {{ data.description }}
      </p>

      <!-- USD/NIM Converter Form -->
      <form class="grid grid-cols-1 md:grid-cols-[1fr_max-content_1fr] items-center gap-x-6 max-md:px-6 mx-auto mt-10 h-max max-w-[560px] w-full" @submit.prevent>
        <div class="group w-full relative flex items-center gap-3">
          <UiAmountInput :key="fiatKey" v-model="fiatAmount" class="nq-input-box rounded-b-0 md:rounded-2 pr-16 text-2xl max-md:-translate-y-0.5 group-focus-within:z-10 w-full bg-white outline-neutral/15" required />
          <div class="text-neutral-600 group-hover:text-blue/50 hocus:!text-neutral-800 group-focus-within:!text-blue right-4 absolute z-40">
            <UiCurrencySelector v-model="currency" />
          </div>
          <div class="w-8 pointer-events-none inset-y-0 right-16 absolute" style="background-image: linear-gradient(to right, transparent, var(--color-neutral-0))" />
        </div>
        <p class="text-3xl h-max max-md:hidden">
          =
        </p>
        <div class="group w-full relative">
          <UiAmountInput :key="cryptoKey" v-model="cryptoAmount" class="nq-input-box rounded-t-0 md:rounded-2 pr-14 text-2xl group-focus-within:z-10 w-full bg-white outline-neutral/15" required />
          <div class="w-8 pointer-events-none inset-y-0 right-14 absolute" style="background-image: linear-gradient(to right, transparent, var(--color-neutral-0))" />
          <div class="text-neutral-600 group-hover:text-blue/50 group-focus-within:!text-blue transition-colors right-3 top-4 absolute nq-label text-xs">
            NIM
          </div>
        </div>
      </form>

      <!-- Price chart ribbon -->
      <UiRibbonContainer v-if="data.nimPriceChartLabel" class="z-3 md:min-h-[480px] outline-color-white/20 mt-24 w-full nq-wide max-md:w-[calc(100%+64px)]" :label="data.nimPriceChartLabel" shadow>
        <div class="grid grid-cols-1 md:grid-cols-[max-content_1fr] size-full relative overflow-hidden">
          <aside ref="asideRef" class="md:border-r-1 md:border-solid md:border-neutral-400 grid grid-cols-[repeat(4,1fr)] md:grid-cols-1 grid-gap-col-20 grid-gap-row-24 w-full relative p-4 md:p-6 max-md:row-start-2 max-md:overflow-x-auto">
            <transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition duration-200 ease-out" leave-from-class="opacity-100" leave-to-class="opacity-0">
              <div v-if="isLoading || error" class="flex items-center gap-2 text-orange text-xs md:text-sm translate-x-100% py-1 rounded-br-1.5 bg-white -right-px -top-px absolute z-30 px-2 md:px-3 border-b border-r border-neutral-400 lg:w-max">
                <Icon class="scale-90" :name="isLoading ? 'nimiq:spinner' : 'nimiq:alert'" />
                <p>{{ isLoading ? 'Loading...' : error }}</p>
              </div>
            </transition>

            <div v-if="data.marketCapLabel" class="flex flex-col gap-2 relative z-1 reka-inactive:animate-pulse" :data-state="marketCapFormatted === '0' ? 'inactive' : 'active'">
              <div class="outline outline-1.5 outline-neutral-200 outline-offset--1.5 rounded-1.5 bg-neutral-100 h-full w-full -inset-3 absolute z--1 reka-active:hidden w-[calc(100%+24px)]" />
              <div class="flex gap-2 items-center">
                <span class="text-base md:text-lg text-neutral leading-none font-semibold whitespace-nowrap">{{ marketCapFormatted }}</span>
                <div v-if="marketCapChange" class="flex gap-0.5 items-center" :class="marketCapChange < 0 ? 'text-red' : 'text-green'">
                  <Icon class="size-[7px]" name="nimiq:triangle-up" aria-hidden :class="{ 'rotate-180': marketCapChange < 0 }" />
                  <span class="leading-none font-semibold text-xs md:text-sm">{{ formatPercentage(marketCapChange, locale) }}</span>
                </div>
              </div>
              <p class="text-[11px] md:text-xs text-neutral-800 leading-none font-normal">
                {{ data.marketCapLabel }}
              </p>
            </div>

            <div v-if="data.volume24HLabel" class="flex flex-col gap-2 relative z-1 reka-inactive:animate-pulse" :data-state="volumeFormatted === '0' ? 'inactive' : 'active'">
              <div class="outline outline-1.5 outline-neutral-200 outline-offset--1.5 rounded-1.5 bg-neutral-100 h-full w-full -inset-3 absolute z--1 reka-active:hidden w-[calc(100%+24px)]" />
              <div class="flex gap-2 items-center">
                <span class="text-base md:text-lg text-neutral leading-none font-semibold whitespace-nowrap">{{ volumeFormatted }}</span>
                <div v-if="volumeChange" class="flex gap-0.5 items-center" :class="volumeChange < 0 ? 'text-red' : 'text-green'">
                  <Icon class="size-[7px]" name="nimiq:triangle-up" aria-hidden :class="{ 'rotate-180': volumeChange < 0 }" />
                  <span class="leading-none font-semibold text-xs md:text-sm">{{ formatPercentage(volumeChange, locale) }}</span>
                </div>
              </div>
              <p class="text-[11px] md:text-xs text-neutral-800 leading-none font-normal">
                {{ data.volume24HLabel }}
              </p>
            </div>

            <div v-if="data.totalSupplyLabel" class="flex flex-col gap-2 relative z-1 reka-inactive:animate-pulse" :data-state="currentSupplyFormatted === '0' ? 'inactive' : 'active'">
              <div class="outline outline-1.5 outline-neutral-200 outline-offset--1.5 rounded-1.5 bg-neutral-100 h-full w-full -inset-3 absolute z--1 reka-active:hidden w-[calc(100%+24px)]" />
              <span class="text-base md:text-lg text-neutral leading-none font-semibold">{{ currentSupplyFormatted }}</span>
              <p class="text-[11px] md:text-xs text-neutral-800 leading-none font-normal">
                {{ data.totalSupplyLabel }}
              </p>
            </div>

            <div v-if="data.maxSupplyLabel" class="flex flex-col gap-2 relative z-1 reka-inactive:animate-pulse" :data-state="maxSupplyFormatted === '0' ? 'inactive' : 'active'">
              <div class="outline outline-1.5 outline-neutral-200 outline-offset--1.5 rounded-1.5 bg-neutral-100 h-full w-full -inset-3 absolute z--1 reka-active:hidden w-[calc(100%+24px)]" />
              <span class="text-base md:text-lg text-neutral leading-none font-semibold">{{ maxSupplyFormatted }}</span>
              <p class="text-[11px] md:text-xs text-neutral-800 leading-none font-normal">
                {{ data.maxSupplyLabel }}
              </p>
            </div>

            <div v-show="lastUpdated" class="flex md:flex-col flex-gap-col-4 flex-gap-row-8 flex-max-md:justify-center text-[10px] md:text-[11px] text-neutral-800 leading-none md:mt-auto" max-md="col-span-full sticky left-0 w-[calc(100vw-80px)] w-max">
              <span>Last updated:</span>
              <NuxtTime v-if="lastUpdated" :datetime="lastUpdated" year="numeric" month="long" day="numeric" hour="2-digit" minute="2-digit" />
              <span v-else>Loading...</span>
            </div>
          </aside>
          <div class="group relative pb-2 md:pb-3">
            <ChartLine :key="asideWidth" class="rounded-2 h-full" :data="historicPrices || []" leader>
              <template #default="{ data: [ts, historicPrice] }">
                <div class="flex flex-col gap-2 f-$side f-$side-min-20 f-$side-max-24 mx-5 bg-neutral-0 top-[21px] relative py-2 md:py-3">
                  <div class="inset-y-0 absolute left-[calc(var(--f-side)*-1)] w-$f-side" style="background-image: linear-gradient(to right in oklab, transparent, var(--color-neutral-0))" />
                  <div class="right-[calc(var(--f-side)*-1)] w-$f-side inset-y-0 absolute w-4 md:w-6" style="background-image: linear-gradient(to right in oklab, var(--color-neutral-0), transparent)" />
                  <p class="text-blue text-2xl md:text-3xl leading-none font-semibold">
                    {{ currencyInfo ? formatFiat(historicPrice, currencyInfo, locale) : '' }}
                  </p>
                  <NuxtTime class="text-[10px] md:text-[11px] text-right text-neutral-700 leading-none nq-label" :datetime="ts" year="numeric" month="long" day="numeric" />
                </div>
              </template>
            </ChartLine>

            <div class="right-8 top-8 absolute z-20">
              <div v-if="historicPrices?.at(-1)" class="flex flex-col gap-2 f-$side f-$side-min-20 f-$side-max-24 bg-neutral-0 transition-opacity relative py-2 md:py-3 leader-hocus:invisible">
                <div class="inset-y-0 absolute left-[calc(var(--f-side)*-1)] w-$f-side" style="background-image: linear-gradient(to right in oklab, transparent, var(--color-neutral-0))" />
                <div class="right-[calc(var(--f-side)*-1)] w-$f-side inset-y-0 absolute w-4 md:w-6" style="background-image: linear-gradient(to right in oklab, var(--color-neutral-0), transparent)" />
                <p class="text-blue text-2xl md:text-3xl leading-none font-semibold">
                  {{ currencyInfo ? formatFiat(historicPrices.at(-1)![1], currencyInfo, locale) : '' }}
                </p>
                <div v-if="deltaPrice && currencyInfo" class="flex items-center text-[10px] md:text-[11px] text-neutral-700 leading-none font-semibold">
                  <Icon class="mr-1 size-2" name="nimiq:triangle-up" :class="{ 'rotate-180': deltaPrice < 0 }" />
                  <span>{{ formatDecimal(Math.abs(deltaPrice), locale) }} ({{ formatPercentage(deltaPrice / historicPrices.at(-1)![1], locale) }})</span>
                </div>
              </div>
            </div>

            <div class="flex items-center gap-2 absolute z-20 right-4 md:right-6" data-allow-mismatch :class="controlsPosition === 'top' ? 'top-32' : 'bottom-16'">
              <UiPillSelector v-model="period" class="self-end justify-self-end ring-white ring-3" :options="periodOptions" />
              <UiCurrencySelector v-model="currency" class="bg-darkblue hover:bg-neutral-200 focus:bg-neutral-200 transition-[background-color] text-14 font-normal px-0.5 rounded-full h-full nq-label text-white hover:text-neutral focus:text-neutral ring-white ring-3 border border-1.5 border-neutral-200">
                <template #trigger="{ selectedCurrency }">
                  {{ selectedCurrency.toLocaleUpperCase() }}
                </template>
              </UiCurrencySelector>
            </div>
          </div>
        </div>
      </UiRibbonContainer>

      <p v-if="data.poweredByLabel && data.poweredByLogo" class="flex items-center justify-center gap-2 mt-4 md:mt-6 text-center text-xs md:text-sm">
        {{ data.poweredByLabel }}
        <NuxtLink v-if="data.poweredByLink" :to="data.poweredByLink" external target="_blank">
          <NuxtImg class="opacity-80 hover:opacity-100 focus:opacity-100 w-full transition-opacity h-3 md:h-4" :src="data.poweredByLogo" />
        </NuxtLink>
        <NuxtImg v-else class="opacity-80 w-full h-3 md:h-4" :src="data.poweredByLogo" />
      </p>
    </div>
  </div>
</template>

<style scoped>
:global(:root) {
  --orange: #ec991c;
}
.bg-gradient {
  background: linear-gradient(
    to bottom,
    rgb(255 255 255) 0%,
    rgb(255 255 255) 35%,
    #f9e0b0 50%,
    #ec991c 75%,
    #f5c878 90%,
    rgb(255 255 255) 100%
  );
}
</style>
