<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.HeroSectionSlice>())

// Just to make ts happy
if (slice.variation !== 'buyAndSell')
  throw new Error('Invalid slice variation. Expected "buyAndSell".')

const { fiatAmount, cryptoAmount, lastEdited } = useSyncAmountInputs()
const { currency, currencyInfo } = useUserCurrency()

function useSyncAmountInputs() {
  const { price } = useNimPrice()

  // Base values
  const cryptoValue = ref(1)
  const fiatValue = ref(price.value ? cryptoValue.value * price.value : 0)

  // Track which input was last edited by the user
  const lastEdited = ref<'crypto' | 'fiat'>()

  const cryptoAmount = computed<number>({
    get: () => cryptoValue.value,
    set: (value) => {
      cryptoValue.value = value
      lastEdited.value = 'crypto'
      fiatValue.value = formatFiat(value * (price.value || 0), currencyInfo.value, { returnJustNumber: true }) as number
    },
  })

  const fiatAmount = computed<number>({
    get: () => fiatValue.value,
    set: (value) => {
      fiatValue.value = value
      lastEdited.value = 'fiat'
      cryptoValue.value = Number.parseFloat(formatNim(price.value ? value / price.value : 0))
    },
  })

  // When price changes, update based on what the user last edited
  watch(price, (newPrice) => {
    if (newPrice) {
      if (lastEdited.value === 'crypto') {
        // Update fiat based on the current crypto value
        fiatValue.value = cryptoValue.value * newPrice
      }
      else {
        // Update crypto based on the current fiat value
        cryptoValue.value = fiatValue.value / newPrice
      }
    }
  })

  setTimeout(() => {
    cryptoAmount.value = 1 // Trigger formatting in fiat
  })

  return { cryptoAmount, fiatAmount, lastEdited }
}
</script>

<template>
  <section px-0 bg-neutral-0 relative of-x-clip>
    <BgBuyAndSell w-full>
      <Headline :headline="slice.primary.headline" :subline="slice.primary.subline" px="$px" />
      <form grid="~ cols-1 md:cols-[1fr_max-content_1fr] items-center  gap-x-24" max-md:px="$px" mx-auto mt-40 h-max max-w-560 w-full @submit.prevent>
        <div class="group" w-full relative flex="~ items-center gap-12">
          <AmountInput :key="lastEdited === 'crypto' ? cryptoAmount : 'fiat'" v-model="fiatAmount" rounded="b-0 md:2" required pr-64 f-text-2xl max-md:translate-y--1.5 group-focus-within:z-10 @blur="lastEdited = undefined" @focus="lastEdited = 'fiat'" />
          <div text="neutral-600 group-hover:blue/50 hocus:!neutral-800 group-focus-within:blue!" right-4 top-auto absolute z-40>
            <CurrencySelector v-model="currency" />
          </div>
        </div>
        <p text-32 h-max max-md:hidden>
          =
        </p>
        <div class="group" w-full relative>
          <AmountInput :key="lastEdited === 'fiat' ? fiatAmount : 'crypto'" v-model="cryptoAmount" required f-text-2xl rounded="t-0 md:2" group-focus-within:z-10 @focus="lastEdited = 'crypto'" @blur="lastEdited = undefined" />
          <div text="neutral-600 group-hover:blue/50 group-focus-within:blue!" transition-colors right-12 top-17 absolute nq-label f-text="12/16">
            NIM
          </div>
        </div>
      </form>
      <PriceChart v-bind="$props" px="16 md:$px" nq-wide mt-96 max-md:w="[calc(100%+64px)]" />
    </BgBuyAndSell>
  </section>
</template>
