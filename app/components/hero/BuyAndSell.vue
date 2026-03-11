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

const { currency, currencyInfo } = useUserCurrency()
const locale = useLocale()

const { fiatAmount, cryptoAmount, fiatKey, cryptoKey } = useSyncAmountInputs()
const { marketCapChange, marketCapFormatted } = useNimMarketCap()
const { currentSupplyFormatted, maxSupplyFormatted } = useNimSupply()
const { volumeChange, volumeFormatted, error: volumeError, volumeIsLoading } = useNimVolume()
const { data: historicPrices, lastUpdated, period, periodOptions, isLoading: priceIsLoading } = useNimPriceHistory(currency)
const { price1DayAgoLoading, priceLoading, price } = useNimPrice()

const isLoading = computed(() => priceIsLoading.value || priceLoading.value || price1DayAgoLoading.value || volumeIsLoading.value)

const asideRef = ref<HTMLElement>()
const { width: asideWidth } = useElementSize(asideRef)

const error = computed(() => {
  if (!priceIsLoading.value && !price.value)
    return 'Unable to load price data'
  if (volumeError.value)
    return volumeError.value
  return null
})
</script>

<template>
  <div class="absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen z-0 overflow-hidden pointer-events-none" style="max-width: none">
    <div class="inset-0 absolute bg-gradient" />
    <NuxtImg src="/images/pages/buy-and-sell/buy-and-sell-bg.svg" class="h-auto w-[140vw] md:w-[110vw] absolute bottom-16 md:-bottom-64 -left-16 md:left-0" alt="" aria-hidden="true" />
  </div>

  <div class="z-3 relative flex flex-col items-center text-center mx-auto w-full">
    <h1 class="nq-heading-lg max-w-prose">
      <slot name="title" mdc-unwrap="p">
        {{ data.title }}
      </slot>
    </h1>
    <p v-if="$slots.description || data.description" class="text-neutral-700 text-base md:text-lg mt-6 max-w-prose">
      <slot name="description" mdc-unwrap="p">
        {{ data.description }}
      </slot>
    </p>

    <form class="grid grid-cols-1 md:grid-cols-[1fr_max-content_1fr] items-center gap-x-6 max-md:px-6 mx-auto mt-40 h-max max-w-[560px] w-full" @submit.prevent>
      <div class="group w-full relative flex items-center">
        <UiAmountInput :key="fiatKey" v-model="fiatAmount" :aria-label="`Amount in ${currency.toUpperCase()}`" class="nq-input-box relative z-20 rounded-b-0 md:rounded-2 pr-64 text-2xl max-md:-translate-y-0.5 group-focus-within:z-20 w-full bg-white outline-neutral/15" required />
        <div class="w-32 z-30 pointer-events-none absolute inset-y-[1.5px] right-64 rounded-r-2" style="background-image: linear-gradient(to right, transparent, white)" />
        <div class="text-neutral-700 group-hover:!text-blue/50 hocus:!text-neutral-800 group-focus-within:!text-blue right-[4px] absolute z-40">
          <UiCurrencySelector v-model="currency" />
        </div>
      </div>
      <p class="text-32 h-max max-md:hidden">
        =
      </p>
      <div class="group w-full relative">
        <UiAmountInput :key="cryptoKey" v-model="cryptoAmount" aria-label="Amount in NIM" class="nq-input-box relative z-20 rounded-t-0 md:rounded-2 pr-[54px] text-2xl group-focus-within:z-20 w-full bg-white outline-neutral/15" required />
        <div class="w-32 z-30 pointer-events-none absolute inset-y-[1.5px] right-[54px] rounded-r-2" style="background-image: linear-gradient(to right, transparent, white)" />
        <div class="absolute inset-y-0 right-12 z-20 flex items-center pointer-events-none">
          <span class="text-neutral-700 group-hover:text-blue/50 group-focus-within:!text-blue transition-colors nq-label text-12 md:text-16 leading-none">NIM</span>
        </div>
      </div>
    </form>

    <UiRibbonContainer v-if="data.nimPriceChartLabel" class="z-3 md:min-h-[480px] outline-color-white/20 mt-[96px] w-full text-left" style="--top: -25px; --right: -32px" :label="data.nimPriceChartLabel" shadow>
      <div class="flex flex-col md:grid md:grid-cols-[max-content_1fr] size-full relative overflow-hidden">
        <div ref="asideRef" class="md:border-r-1 md:border-solid md:border-neutral-400 flex max-md:overflow-x-auto max-md:gap-x-5 md:flex-col md:gap-y-6 w-full relative p-4 md:p-6 text-left max-md:order-2">
          <transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition duration-200 ease-out" leave-from-class="opacity-100" leave-to-class="opacity-0">
            <div v-if="isLoading || error" class="flex items-center gap-2 text-orange text-xs md:text-sm translate-x-100% py-1 rounded-br-1.5 bg-white -right-px -top-px absolute z-30 px-2 md:px-3 border-b border-r border-neutral-400 lg:w-max">
              <Icon class="scale-90" :name="isLoading ? 'nimiq:spinner' : 'nimiq:alert'" />
              <p>{{ isLoading ? 'Loading...' : error }}</p>
            </div>
          </transition>

          <div v-if="data.marketCapLabel" class="flex flex-col gap-2 relative z-1 shrink-0" :class="{ 'animate-pulse': marketCapFormatted === '0' }">
            <div v-if="marketCapFormatted === '0'" class="outline outline-1.5 outline-neutral-200 outline-offset--1.5 rounded-1.5 bg-neutral-100 h-full w-full -inset-3 absolute z--1 w-[calc(100%+24px)]" />
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

          <div v-if="data.volume24HLabel" class="flex flex-col gap-2 relative z-1 shrink-0" :class="{ 'animate-pulse': volumeFormatted === '0' }">
            <div v-if="volumeFormatted === '0'" class="outline outline-1.5 outline-neutral-200 outline-offset--1.5 rounded-1.5 bg-neutral-100 h-full w-full -inset-3 absolute z--1 w-[calc(100%+24px)]" />
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

          <div v-if="data.totalSupplyLabel" class="flex flex-col gap-2 relative z-1 shrink-0" :class="{ 'animate-pulse': currentSupplyFormatted === '0' }">
            <div v-if="currentSupplyFormatted === '0'" class="outline outline-1.5 outline-neutral-200 outline-offset--1.5 rounded-1.5 bg-neutral-100 h-full w-full -inset-3 absolute z--1 w-[calc(100%+24px)]" />
            <span class="text-base md:text-lg text-neutral leading-none font-semibold">{{ currentSupplyFormatted }}</span>
            <p class="text-[11px] md:text-xs text-neutral-800 leading-none font-normal">
              {{ data.totalSupplyLabel }}
            </p>
          </div>

          <div v-if="data.maxSupplyLabel" class="flex flex-col gap-2 relative z-1 shrink-0" :class="{ 'animate-pulse': maxSupplyFormatted === '0' }">
            <div v-if="maxSupplyFormatted === '0'" class="outline outline-1.5 outline-neutral-200 outline-offset--1.5 rounded-1.5 bg-neutral-100 h-full w-full -inset-3 absolute z--1 w-[calc(100%+24px)]" />
            <span class="text-base md:text-lg text-neutral leading-none font-semibold">{{ maxSupplyFormatted }}</span>
            <p class="text-[11px] md:text-xs text-neutral-800 leading-none font-normal">
              {{ data.maxSupplyLabel }}
            </p>
          </div>

          <div v-show="lastUpdated" class="md:flex-col gap-1 md:gap-2 text-[10px] md:text-[11px] text-neutral-800 leading-none md:mt-auto text-left shrink-0 flex max-md:hidden">
            <span>Last updated:</span>
            <NuxtTime v-if="lastUpdated" :datetime="lastUpdated" year="numeric" month="long" day="numeric" hour="2-digit" minute="2-digit" />
            <span v-else>Loading...</span>
          </div>
        </div>
        <div v-show="lastUpdated" class="flex gap-1 text-[10px] text-neutral-800 leading-none text-left px-4 pb-3 md:hidden order-3">
          <span>Last updated:</span>
          <NuxtTime v-if="lastUpdated" :datetime="lastUpdated" year="numeric" month="long" day="numeric" hour="2-digit" minute="2-digit" />
          <span v-else>Loading...</span>
        </div>
        <div class="group relative md:pb-3 max-md:order-1">
          <LazyChartLine :key="asideWidth" class="rounded-2 h-full" :data="historicPrices || []" leader>
            <template #default="{ data: [ts, historicPrice] }">
              <div class="flex flex-col gap-2 f-$side f-$side-min-20 f-$side-max-24 mx-5 bg-neutral-0 top-[21px] relative isolate py-2 md:py-3">
                <div class="inset-y-0 absolute left-[calc(var(--f-side)*-1)] w-$f-side z-0 pointer-events-none" style="background-image: linear-gradient(to right in oklab, transparent, var(--color-neutral-0))" />
                <div class="right-[calc(var(--f-side)*-1)] w-$f-side inset-y-0 absolute w-4 md:w-6 z-0 pointer-events-none" style="background-image: linear-gradient(to right in oklab, var(--color-neutral-0), transparent)" />
                <p class="text-blue text-2xl md:text-3xl leading-none font-semibold relative z-1">
                  {{ currencyInfo ? formatFiat(historicPrice, currencyInfo, locale) : '' }}
                </p>
                <NuxtTime class="text-[10px] md:text-[11px] text-right text-neutral-700 leading-none nq-label relative z-1" :datetime="ts" year="numeric" month="long" day="numeric" />
              </div>
            </template>
          </LazyChartLine>

          <div class="absolute z-20 right-4 md:right-6 bottom-40 max-md:hidden" data-allow-mismatch>
            <div class="ml-auto flex items-center gap-2 w-max">
              <UiPillSelector v-model="period" class="self-end justify-self-end ring-white ring-3" :options="periodOptions" />
              <UiCurrencySelector v-model="currency" class="bg-darkblue hover:bg-neutral-200 focus:bg-neutral-200 transition-[background-color] rounded-full text-white hover:text-neutral focus:text-neutral ring-white ring-3 border border-1.5 border-neutral-200">
                <template #trigger="{ selectedCurrency }">
                  <span class="text-12 leading-none font-normal nq-label text-white px-2">{{ selectedCurrency.toLocaleUpperCase() }}</span>
                </template>
              </UiCurrencySelector>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-2 px-4 py-3 md:hidden order-4" data-allow-mismatch>
          <UiPillSelector v-model="period" class="ring-white ring-3" :options="periodOptions" />
          <UiCurrencySelector v-model="currency" class="bg-darkblue hover:bg-neutral-200 focus:bg-neutral-200 transition-[background-color] rounded-full text-white hover:text-neutral focus:text-neutral ring-white ring-3 border border-1.5 border-neutral-200">
            <template #trigger="{ selectedCurrency }">
              <span class="text-12 leading-none font-normal nq-label text-white px-2">{{ selectedCurrency.toLocaleUpperCase() }}</span>
            </template>
          </UiCurrencySelector>
        </div>
      </div>
    </UiRibbonContainer>

    <p v-if="data.poweredByLabel && data.poweredByLogo" class="flex items-center justify-center gap-2 mt-4 md:mt-6 text-center text-xs md:text-sm">
      {{ data.poweredByLabel }}
      <NuxtLink v-if="data.poweredByLink" :to="data.poweredByLink" external target="_blank" :aria-label="data.poweredByLabel">
        <NuxtImg class="opacity-80 hover:opacity-100 focus:opacity-100 w-full transition-opacity h-3 md:h-4" :src="data.poweredByLogo" :alt="data.poweredByLabel" />
      </NuxtLink>
      <NuxtImg v-else class="opacity-80 w-full h-3 md:h-4" :src="data.poweredByLogo" :alt="data.poweredByLabel" />
    </p>
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
