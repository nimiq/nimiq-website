<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.HeroSectionSlice>())

// Just to make ts happy
if (slice.variation !== 'buyAndSell')
  throw new Error('Invalid slice variation. Expected "buyAndSell".')

const { fiatAmount, cryptoAmount, fiatKey, cryptoKey } = useSyncAmountInputs()
const { currency } = useUserCurrency()
</script>

<template>
  <section px-0 bg-neutral-0 relative of-x-clip data-slice-type="buy-and-sell-hero">
    <BgBuyAndSell w-full>
      <Headline :headline="slice.primary.headline" :subline="slice.primary.subline" px="$px" />
      <form
        grid="~ cols-1 md:cols-[1fr_max-content_1fr] items-center  gap-x-24" max-md:px="$px" mx-auto mt-40 h-max
        max-w-560 w-full @submit.prevent
      >
        <div class="group" w-full relative flex="~ items-center gap-12">
          <AmountInput
            :key="fiatKey" v-model="fiatAmount" rounded="b-0 md:2" required pr-64 f-text-2xl
            max-md:translate-y--1.5 group-focus-within:z-10
          />
          <div
            text="neutral-600 group-hover:blue/50 hocus:!neutral-800 group-focus-within:blue!" right-4 top-auto
            absolute z-40
          >
            <CurrencySelector v-model="currency" />
          </div>
          <div style="background-image: linear-gradient(to right in oklch, transparent, var(--colors-neutral-0))" w-32 pointer-events-none inset-y-0 right-64 absolute />
        </div>
        <p text-32 h-max max-md:hidden>
          =
        </p>
        <div class="group" w-full relative>
          <AmountInput :key="cryptoKey" v-model="cryptoAmount" rounded="t-0 md:2" required pr-54 f-text-2xl group-focus-within:z-10 />
          <div style="background-image: linear-gradient(to right in oklch, transparent, var(--colors-neutral-0))" w-32 pointer-events-none inset-y-0 right-54 absolute />
          <div
            text="neutral-600 group-hover:blue/50 group-focus-within:blue!" transition-colors right-12 top-17
            absolute nq-label f-text="12/16"
          >
            NIM
          </div>
        </div>
      </form>
      <PriceChart v-bind="$props" px="16 md:$px" nq-wide mt-96 max-md:w="[calc(100%+64px)]" />
    </BgBuyAndSell>
  </section>
</template>
