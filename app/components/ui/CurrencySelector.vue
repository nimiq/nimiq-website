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
  <ComboboxRoot v-model="selectedCurrency" relative bg="transparent hocus:neutral-200">
    <ComboboxAnchor w-max inline-flex="~ items-center justify-between gap-5">
      <ComboboxTrigger flex="~ gap-3 items-center" px-6 py-3 rounded-4 bg-transparent transition-colors>
        <slot name="trigger" v-bind="{ selectedCurrency }">
          <span f-text="12/16" text-current nq-label>{{ selectedCurrency.toLocaleUpperCase() }}</span>
          <Icon name="nimiq:triangle-down" class="op-60 size-7" />
        </slot>
      </ComboboxTrigger>
    </ComboboxAnchor>

    <ComboboxPortal>
      <ComboboxContent position="popper" will-change="[opacity,transform]" reka-top:animate-slidedownandfade reka-bottom:animate-slide-up-and-fade font-normal overscroll-none max-h-256 w-168 top-0 absolute z-10 of-hidden>
        <ComboboxViewport outline="1.5 ~ offset--1.5 white/10" px-4 pb-4 rounded-4 bg-neutral flex="~ col">
          <label flex="~ items-center gap-8" px-8 pb-6 pt-13 w-full>
            <Icon name="nimiq:magnifying-glass" class="text-neutral-800" />
            <ComboboxInput placeholder="Search" text="16 white" outline="1.5! ~ blue" lh-none px-3 py-2 rounded-4 bg-transparent flex-1 w-full />
          </label>
          <ScrollAreaRoot bg-neutral flex-1 h-full relative of-hidden var:scrollbar-size:10px>
            <div h-16 w-full top-0 absolute z-2 bg-gradient="to-t from-transparent to-neutral" />
            <ScrollAreaViewport py-16 h-218 w-full>
              <ComboboxItem v-for="option in options" :key="option.value" :value="option.value" flex="~ items-center gap-8" bg="hocus:white/10 reka-active:white/10" p-8 rounded-2 transition-colors>
                <Icon :name="option.icon" class="shrink-0 size-20" />
                <span text="f-sm white/95" lh-none>{{ option.value.toLocaleUpperCase() }}</span>
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
