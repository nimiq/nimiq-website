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
  <div class="py-20 py-md:120 flex flex-col flex-items-center px-0 text-center bg-neutral-0 relative of-x-clip">
    <h1 class="nq-heading-lg max-w-prose">
      {{ data.title }}
    </h1>
    <p v-if="data.description" class="text-neutral-700 text-f-lg mt-6 max-w-prose">
      {{ data.description }}
    </p>

    <!-- Price chart ribbon -->
    <div class="mt-16 w-full">
      <UiRibbonContainer v-if="data.nimPriceChartLabel" class="z-3 md:min-h-[480px] outline-color-white/20" :label="data.nimPriceChartLabel" shadow>
        <div class="grid grid-cols-1 grid-md:cols-[max-content_1fr] size-full relative of-hidden">
          <aside ref="asideRef" class="md:border-r-1 md:border-solid md:border-neutral-400 grid grid-cols-[repeat(4,1fr)] grid-md:cols-1 grid-gap-col-20 grid-gap-row-24 w-full relative f-p-md max-md:row-start-2 max-md:of-x-auto">
            <transition enter-active-class="transition duration-200 ease-out" enter-from-class="op-0" enter-to-class="op-100" leave-active-class="transition duration-200 ease-out" leave-from-class="op-100" leave-to-class="op-0">
              <div v-if="isLoading || error" class="flex flex-items-center gap-2 text-orange text-f-sm translate-x-100% py-1 rounded-br-1.5 bg-white -right-px -top-px absolute z-30 f-px-xs border-b border-r border-neutral-400 lg:w-max">
                <Icon class="scale-90" :name="isLoading ? 'nimiq:spinner' : 'nimiq:alert'" />
                <p>{{ isLoading ? 'Loading...' : error }}</p>
              </div>
            </transition>

            <div v-if="data.marketCapLabel" class="flex flex-col gap-2 relative z-1 reka-inactive:animate-pulse" :data-state="marketCapFormatted === '0' ? 'inactive' : 'active'">
              <div class="outline outline-1.5 outline-neutral-200 outline-offset--1.5 rounded-1.5 bg-neutral-100 h-full w-full -inset-3 absolute z--1 reka-active:hidden w-[calc(100%+24px)]" />
              <div class="flex gap-2 flex-items-center">
                <span class="text-f-lg text-neutral lh-none font-semibold whitespace-nowrap">{{ marketCapFormatted }}</span>
                <div v-if="marketCapChange" class="flex gap-0.5 flex-items-center" :class="marketCapChange < 0 ? 'text-red' : 'text-green'">
                  <Icon class="size-[7px]" name="nimiq:triangle-up" aria-hidden :class="{ 'rotate-180': marketCapChange < 0 }" />
                  <span class="lh-none font-semibold f-text-sm">{{ formatPercentage(marketCapChange, locale) }}</span>
                </div>
              </div>
              <p class="text-f-xs text-neutral-800 lh-none font-normal">
                {{ data.marketCapLabel }}
              </p>
            </div>

            <div v-if="data.volume24HLabel" class="flex flex-col gap-2 relative z-1 reka-inactive:animate-pulse" :data-state="volumeFormatted === '0' ? 'inactive' : 'active'">
              <div class="outline outline-1.5 outline-neutral-200 outline-offset--1.5 rounded-1.5 bg-neutral-100 h-full w-full -inset-3 absolute z--1 reka-active:hidden w-[calc(100%+24px)]" />
              <div class="flex gap-2 flex-items-center">
                <span class="text-f-lg text-neutral lh-none font-semibold whitespace-nowrap">{{ volumeFormatted }}</span>
                <div v-if="volumeChange" class="flex gap-0.5 flex-items-center" :class="volumeChange < 0 ? 'text-red' : 'text-green'">
                  <Icon class="size-[7px]" name="nimiq:triangle-up" aria-hidden :class="{ 'rotate-180': volumeChange < 0 }" />
                  <span class="lh-none font-semibold f-text-sm">{{ formatPercentage(volumeChange, locale) }}</span>
                </div>
              </div>
              <p class="text-f-xs text-neutral-800 lh-none font-normal">
                {{ data.volume24HLabel }}
              </p>
            </div>

            <div v-if="data.totalSupplyLabel" class="flex flex-col gap-2 relative z-1 reka-inactive:animate-pulse" :data-state="currentSupplyFormatted === '0' ? 'inactive' : 'active'">
              <div class="outline outline-1.5 outline-neutral-200 outline-offset--1.5 rounded-1.5 bg-neutral-100 h-full w-full -inset-3 absolute z--1 reka-active:hidden w-[calc(100%+24px)]" />
              <span class="text-f-lg text-neutral lh-none font-semibold">{{ currentSupplyFormatted }}</span>
              <p class="text-f-xs text-neutral-800 lh-none font-normal">
                {{ data.totalSupplyLabel }}
              </p>
            </div>

            <div v-if="data.maxSupplyLabel" class="flex flex-col gap-2 relative z-1 reka-inactive:animate-pulse" :data-state="maxSupplyFormatted === '0' ? 'inactive' : 'active'">
              <div class="outline outline-1.5 outline-neutral-200 outline-offset--1.5 rounded-1.5 bg-neutral-100 h-full w-full -inset-3 absolute z--1 reka-active:hidden w-[calc(100%+24px)]" />
              <span class="text-f-lg text-neutral lh-none font-semibold">{{ maxSupplyFormatted }}</span>
              <p class="text-f-xs text-neutral-800 lh-none font-normal">
                {{ data.maxSupplyLabel }}
              </p>
            </div>

            <div v-show="lastUpdated" class="flex flex-md:col flex-gap-col-4 flex-gap-row-8 flex-max-md:justify-center text-f-2xs text-neutral-800 lh-none md:mt-auto" max-md="col-span-full sticky left-0 w-[calc(100vw-80px)] w-max">
              <span>Last updated:</span>
              <NuxtTime v-if="lastUpdated" :datetime="lastUpdated" year="numeric" month="long" day="numeric" hour="2-digit" minute="2-digit" />
              <span v-else>Loading...</span>
            </div>
          </aside>
          <div class="group relative f-pb-xs">
            <ChartLine :key="asideWidth" class="rounded-2 h-full" :data="historicPrices || []" leader>
              <template #default="{ data: [ts, historicPrice] }">
                <div class="flex flex-col gap-2 f-$side f-$side-min-20 f-$side-max-24 mx-5 bg-neutral-0 top-[21px] relative f-py-xs">
                  <div class="inset-y-0 absolute left-[calc(var(--f-side)*-1)] w-$f-side" style="background-image: linear-gradient(to right in oklab, transparent, var(--colors-neutral-0))" />
                  <div class="right-[calc(var(--f-side)*-1)] w-$f-side inset-y-0 absolute f-w-md" style="background-image: linear-gradient(to right in oklab, var(--colors-neutral-0), transparent)" />
                  <p class="text-blue text-f-3xl lh-none font-semibold">
                    {{ currencyInfo ? formatFiat(historicPrice, currencyInfo, locale) : '' }}
                  </p>
                  <NuxtTime class="text-f-2xs text-right text-neutral-700 lh-none nq-label" :datetime="ts" year="numeric" month="long" day="numeric" />
                </div>
              </template>
            </ChartLine>

            <div class="right-8 top-8 absolute z-20">
              <div v-if="historicPrices?.at(-1)" class="flex flex-col gap-2 f-$side f-$side-min-20 f-$side-max-24 bg-neutral-0 transition-opacity relative f-py-xs leader-hocus:invisible">
                <div class="inset-y-0 absolute left-[calc(var(--f-side)*-1)] w-$f-side" style="background-image: linear-gradient(to right in oklab, transparent, var(--colors-neutral-0))" />
                <div class="right-[calc(var(--f-side)*-1)] w-$f-side inset-y-0 absolute f-w-md" style="background-image: linear-gradient(to right in oklab, var(--colors-neutral-0), transparent)" />
                <p class="text-blue text-f-3xl lh-none font-semibold">
                  {{ currencyInfo ? formatFiat(historicPrices.at(-1)![1], currencyInfo, locale) : '' }}
                </p>
                <div v-if="deltaPrice && currencyInfo" class="flex flex-items-center text-f-2xs text-neutral-700 lh-none font-semibold">
                  <Icon class="mr-1 size-2" name="nimiq:triangle-up" :class="{ 'rotate-180': deltaPrice < 0 }" />
                  <span>{{ formatDecimal(Math.abs(deltaPrice), locale) }} ({{ formatPercentage(deltaPrice / historicPrices.at(-1)![1], locale) }})</span>
                </div>
              </div>
            </div>

            <div class="flex flex-items-center gap-2 absolute z-20 f-right-md" data-allow-mismatch :class="controlsPosition === 'top' ? 'top-32' : 'bottom-16'">
              <UiPillSelector v-model="period" class="self-end justify-self-end ring-white ring-3" :options="periodOptions" />
              <UiCurrencySelector v-model="currency" class="bg-darkblue bg-hocus:neutral-200 transition-[background-color] text-14 font-normal px-0.5 rounded-full h-full nq-label text-white text-hocus:neutral ring-white ring-3 border border-1.5 border-neutral-200">
                <template #trigger="{ selectedCurrency }">
                  {{ selectedCurrency.toLocaleUpperCase() }}
                </template>
              </UiCurrencySelector>
            </div>
          </div>
        </div>
      </UiRibbonContainer>
    </div>

    <p v-if="data.poweredByLabel && data.poweredByLogo" class="flex flex-items-center flex-justify-center gap-2 f-mt-md text-center text-f-sm">
      {{ data.poweredByLabel }}
      <NuxtLink v-if="data.poweredByLink" :to="data.poweredByLink" external target="_blank">
        <NuxtImg class="op-80 op-hocus:100 w-full transition-opacity f-h-sm" :src="data.poweredByLogo" />
      </NuxtLink>
      <NuxtImg v-else class="op-80 w-full f-h-sm" :src="data.poweredByLogo" />
    </p>
  </div>
</template>
