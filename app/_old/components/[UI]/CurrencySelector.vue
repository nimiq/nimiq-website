<script setup lang="ts">
import { FiatCurrency } from '@nimiq/utils/fiat-api'

const selectedCurrency = defineModel<FiatCurrency>({ default: FiatCurrency.USD })
const { options } = useCurrencyOptions()

function useCurrencyOptions() {
  // @unocss-include
  const icons: Record<typeof supportedFiatCurrencies[number], string> = {
    AED: 'i-nimiq-flags:ae-hexagon',
    AUD: 'i-nimiq-flags:au-hexagon',
    ARS: 'i-nimiq-flags:ar-hexagon',
    BRL: 'i-nimiq-flags:br-hexagon',
    CAD: 'i-nimiq-flags:ca-hexagon',
    CHF: 'i-nimiq-flags:ch-hexagon',
    CLP: 'i-nimiq-flags:cl-hexagon',
    CNY: 'i-nimiq-flags:cn-hexagon',
    CRC: 'i-nimiq-flags:cr-hexagon',
    CZK: 'i-nimiq-flags:cz-hexagon',
    DKK: 'i-nimiq-flags:dk-hexagon',
    EUR: 'i-nimiq-flags:eu-hexagon',
    GBP: 'i-nimiq-flags:gb-hexagon',
    GMD: 'i-nimiq-flags:gm-hexagon',
    GTQ: 'i-nimiq-flags:gt-hexagon',
    HKD: 'i-nimiq-flags:hk-hexagon',
    HUF: 'i-nimiq-flags:hu-hexagon',
    IDR: 'i-nimiq-flags:id-hexagon',
    ILS: 'i-nimiq-flags:il-hexagon',
    INR: 'i-nimiq-flags:in-hexagon',
    JPY: 'i-nimiq-flags:jp-hexagon',
    KRW: 'i-nimiq-flags:kr-hexagon',
    MXN: 'i-nimiq-flags:mx-hexagon',
    MYR: 'i-nimiq-flags:my-hexagon',
    NGN: 'i-nimiq-flags:ng-hexagon',
    NOK: 'i-nimiq-flags:no-hexagon',
    NZD: 'i-nimiq-flags:nz-hexagon',
    PHP: 'i-nimiq-flags:ph-hexagon',
    PKR: 'i-nimiq-flags:pk-hexagon',
    PLN: 'i-nimiq-flags:pl-hexagon',
    RUB: 'i-nimiq-flags:ru-hexagon',
    SEK: 'i-nimiq-flags:se-hexagon',
    SGD: 'i-nimiq-flags:sg-hexagon',
    THB: 'i-nimiq-flags:th-hexagon',
    TRY: 'i-nimiq-flags:tr-hexagon',
    TWD: 'i-nimiq-flags:tw-hexagon',
    UAH: 'i-nimiq-flags:ua-hexagon',
    USD: 'i-nimiq-flags:um-hexagon',
    VND: 'i-nimiq-flags:vn-hexagon',
    XOF: 'i-nimiq-flags:sn-hexagon',
    ZAR: 'i-nimiq-flags:za-hexagon',
  }

  const options = supportedFiatCurrencies.map(c => ({ value: c, label: c.toLocaleLowerCase(), icon: icons[c] }))
  return {
    options,
  }
}

function displayValue(value: FiatCurrency) {
  // Do not show the selected value in the input
  if (selectedCurrency.value === value)
    return ''

  return value
}
</script>

<template>
  <ComboboxRoot v-model="selectedCurrency" relative bg="transparent hocus:neutral-200">
    <ComboboxAnchor w-max inline-flex="~ items-center justify-between gap-5">
      <ComboboxTrigger flex="~ gap-3 items-center" px-6 py-3 rounded-4 bg-transparent transition-colors>
        <slot name="trigger" v-bind="{ selectedCurrency }">
          <span f-text="12/16" text-current nq-label>
            {{ selectedCurrency.toLocaleUpperCase() }}
          </span>
          <div op-60 size-7 i-nimiq:triangle-down />
        </slot>
      </ComboboxTrigger>
    </ComboboxAnchor>

    <ComboboxPortal>
      <ComboboxContent position="popper" will-change="[opacity,transform]" reka-top:animate-slidedownandfade reka-bottom:animate-slide-up-and-fade font-normal overscroll-none max-h-256 w-168 top-0 absolute z-10 of-hidden>
        <ComboboxViewport outline="1.5 ~ offset--1.5 white/10" px-4 pb-4 rounded-4 bg-neutral flex="~ col">
          <label flex="~ items-center gap-8" px-8 pb-6 pt-13 w-full>
            <div text-neutral-800 i-nimiq:magnifying-glass />
            <ComboboxInput placeholder="Search" text="16 white" outline="1.5! ~ blue" lh-none px-3 py-2 rounded-4 bg-transparent flex-1 w-full :display-value />
          </label>
          <!-- <hr mb-6 h-1.5 w-full rounded-2 border="white/6"> -->
          <ScrollAreaRoot bg-neutral flex-1 h-full relative of-hidden var:scrollbar-size:10px>
            <div h-16 w-full top-0 absolute z-2 bg-gradient="to-t from-transparent to-neutral" />
            <ScrollAreaViewport py-16 h-218 w-full>
              <ComboboxItem v-for="option in options" :key="option.value" :value="option.value" flex="~ items-center gap-8" bg="hocus:white/10 reka-active:white/10" p-8 rounded-2 transition-colors>
                <div :class="option.icon" shrink-0 size-20 />
                <span text="f-sm white/95" lh-none>
                  {{ option.value.toLocaleUpperCase() }}
                </span>
              </ComboboxItem>
            </ScrollAreaViewport>
            <ScrollAreaScrollbar flex="~" bg="neutral-900" p-2 w-10 select-none inset-y-0 z-20 touch-none orientation="vertical">
              <ScrollAreaThumb rounded-5 bg-neutral-700 flex-1 content-empty relative before="absolute top--50% left--50% -translate-x--50% -translate-y--50% size-full min-h-40 min-w-40" />
            </ScrollAreaScrollbar>
            <div h-16 w-full bottom-0 absolute z-2 bg-gradient="to-b from-transparent to-neutral" />
          </ScrollAreaRoot>
        </ComboboxViewport>
        <ComboboxArrow />
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
