<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.HeroSectionSlice>())

// Just to make ts happy
if (slice.variation !== 'buyAndSell')
  throw new Error('Invalid slice variation. Expected "buyAndSell".')

const { fiatAmount, cryptoAmount } = useSyncAmountInputs()
const { currency } = useUserCurrency()

function useSyncAmountInputs() {
  const { price } = useNimPrice()

  const cryptoAmount = ref(1)
  const fiatAmount = computed<number>({
    get: () => cryptoAmount.value * (price.value || 0),
    set: fiat => cryptoAmount.value = price.value ? fiat / price.value : 0,
  })

  return { cryptoAmount, fiatAmount }
}
</script>

<template>
  <section relative of-x-clip bg-neutral-0 px-0>
    <BgBuyAndSell w-full>
      <Headline :headline="slice.primary.headline" :subline="slice.primary.subline" px="$px" />
      <form flex="~ md:row col items-center  gap-x-24" mx-auto mt-40 h-max w-max px="$px" @submit.prevent>
        <div group relative w-full flex="~ items-center gap-12">
          <AmountInput v-model="fiatAmount" required pr-64 f-text-2xl :decimals="8" />
          <div absolute right-4 top-10 text="neutral-600 group-hover:blue/50 group-focus-within:blue!">
            <CurrencySelector v-model="currency" />
          </div>
        </div>
        <p h-max text-32 max-md:hidden>
          =
        </p>
        <div group relative w-full>
          <AmountInput v-model="cryptoAmount" required f-text-2xl />
          <div absolute inset-y-12 right-12 font-bold transition-colors text="neutral-600 group-hover:blue/50 group-focus-within:blue!">
            NIM
          </div>
        </div>
      </form>
      <PriceChart v-bind="$props" px="16 md:$px" nq-wide mt-96 max-md:w="[calc(100%+64px)]" />
    </BgBuyAndSell>
  </section>
</template>
