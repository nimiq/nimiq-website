<script setup lang="ts">
import type { RichTextField } from '@prismicio/client'

defineProps<{ headline: RichTextField, subline: RichTextField }>()

const { fiatAmount, cryptoAmount, fiatCurrency } = useSyncAmountInputs()
</script>

<template>
  <section bg-neutral-0>
    <Headline :headline :subline />
    <form flex="~ md:row col items-center gap-x-24" mt-40 h-max @submit.prevent>
      <div group relative w-full flex="~ items-center gap-12">
        <AmountInput v-model="fiatAmount" required pr-64 f-text-2xl :decimals="8" />
        <div absolute right-4 top-10 text="neutral-600 group-hover:blue/50 group-focus-within:blue!">
          <CurrencySelector v-model="fiatCurrency" />
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
  </section>
</template>
