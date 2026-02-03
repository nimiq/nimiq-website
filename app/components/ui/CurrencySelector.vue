<script setup lang="ts">
import { FiatCurrency } from '@nimiq/utils/fiat-api'

const selectedCurrency = defineModel<FiatCurrency>({ default: FiatCurrency.USD })
const { options } = useCurrencyOptions()

function useCurrencyOptions() {
  const icons: Record<typeof supportedFiatCurrencies[number], string> = {
    AED: 'nimiq-flags:ae-hexagon',
    AUD: 'nimiq-flags:au-hexagon',
    ARS: 'nimiq-flags:ar-hexagon',
    BRL: 'nimiq-flags:br-hexagon',
    CAD: 'nimiq-flags:ca-hexagon',
    CHF: 'nimiq-flags:ch-hexagon',
    CLP: 'nimiq-flags:cl-hexagon',
    CNY: 'nimiq-flags:cn-hexagon',
    CRC: 'nimiq-flags:cr-hexagon',
    CZK: 'nimiq-flags:cz-hexagon',
    DKK: 'nimiq-flags:dk-hexagon',
    EUR: 'nimiq-flags:eu-hexagon',
    GBP: 'nimiq-flags:gb-hexagon',
    GMD: 'nimiq-flags:gm-hexagon',
    GTQ: 'nimiq-flags:gt-hexagon',
    HKD: 'nimiq-flags:hk-hexagon',
    HUF: 'nimiq-flags:hu-hexagon',
    IDR: 'nimiq-flags:id-hexagon',
    ILS: 'nimiq-flags:il-hexagon',
    INR: 'nimiq-flags:in-hexagon',
    JPY: 'nimiq-flags:jp-hexagon',
    KRW: 'nimiq-flags:kr-hexagon',
    MXN: 'nimiq-flags:mx-hexagon',
    MYR: 'nimiq-flags:my-hexagon',
    NGN: 'nimiq-flags:ng-hexagon',
    NOK: 'nimiq-flags:no-hexagon',
    NZD: 'nimiq-flags:nz-hexagon',
    PHP: 'nimiq-flags:ph-hexagon',
    PKR: 'nimiq-flags:pk-hexagon',
    PLN: 'nimiq-flags:pl-hexagon',
    RUB: 'nimiq-flags:ru-hexagon',
    SEK: 'nimiq-flags:se-hexagon',
    SGD: 'nimiq-flags:sg-hexagon',
    THB: 'nimiq-flags:th-hexagon',
    TRY: 'nimiq-flags:tr-hexagon',
    TWD: 'nimiq-flags:tw-hexagon',
    UAH: 'nimiq-flags:ua-hexagon',
    USD: 'nimiq-flags:um-hexagon',
    VND: 'nimiq-flags:vn-hexagon',
    XOF: 'nimiq-flags:sn-hexagon',
    ZAR: 'nimiq-flags:za-hexagon',
  }

  const options = supportedFiatCurrencies.map(c => ({ value: c, label: c.toLocaleLowerCase(), icon: icons[c] }))
  return { options }
}
</script>

<template>
  <ComboboxRoot v-model="selectedCurrency" class="relative bg-transparent hover:bg-neutral-200 focus:bg-neutral-200">
    <ComboboxAnchor class="w-max inline-flex-~ items-center justify-between gap-[5px]">
      <ComboboxTrigger class="flex gap-[3px] items-center px-1.5 py-[3px] rounded-1 bg-transparent transition-colors">
        <slot name="trigger" v-bind="{ selectedCurrency }">
          <span class="text-[12px] md:text-[16px] text-current nq-label">{{ selectedCurrency.toLocaleUpperCase() }}</span>
          <Icon class="opacity-60 size-[7px]" name="nimiq:triangle-down" />
        </slot>
      </ComboboxTrigger>
    </ComboboxAnchor>

    <ComboboxPortal>
      <ComboboxContent class="reka-top:animate-slidedownandfade reka-bottom:animate-slide-up-and-fade font-normal overscroll-none max-h-64 w-[168px] top-0 absolute z-10 overflow-hidden" position="popper" will-change="[opacity,transform]">
        <ComboboxViewport class="outline-1.5 outline outline-offset--1.5 outline-white/10 px-1 pb-1 rounded-1 bg-neutral flex flex-col">
          <label class="flex items-center gap-2 px-2 pb-1.5 pt-[13px] w-full">
            <Icon class="text-neutral-800" name="nimiq:magnifying-glass" />
            <ComboboxInput class="text-16 text-white outline-1.5! outline outline-blue leading-none px-[3px] py-0.5 rounded-1 bg-transparent flex-1 w-full" placeholder="Search" />
          </label>
          <ScrollAreaRoot class="bg-neutral flex-1 h-full relative overflow-hidden" var:scrollbar-size:10px>
            <div class="h-4 w-full top-0 absolute z-2 bg-gradient-to-t from-transparent to-neutral" />
            <ScrollAreaViewport class="py-4 h-[218px] w-full">
              <ComboboxItem v-for="option in options" :key="option.value" class="flex items-center gap-2 hover:bg-white/10 focus:bg-white/10 bg-reka-active:white/10 p-2 rounded-0.5 transition-colors" :value="option.value">
                <Icon class="shrink-0 size-5" :name="option.icon" />
                <span class="text-xs md:text-sm text-white/95 leading-none">{{ option.value.toLocaleUpperCase() }}</span>
              </ComboboxItem>
            </ScrollAreaViewport>
            <ScrollAreaScrollbar class="flex bg-neutral-900 p-0.5 w-2.5 select-none inset-y-0 z-20 touch-none" orientation="vertical">
              <ScrollAreaThumb class="rounded-[5px] bg-neutral-700 flex-1 content-empty relative" before="absolute top--50% left--50% -translate-x--50% -translate-y--50% size-full min-h-10 min-w-10" />
            </ScrollAreaScrollbar>
            <div class="h-4 w-full bottom-0 absolute z-2 bg-gradient-to-b from-transparent to-neutral" />
          </ScrollAreaRoot>
        </ComboboxViewport>
        <ComboboxArrow />
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
