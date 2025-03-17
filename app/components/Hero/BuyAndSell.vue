<script setup lang="ts">
import type { RichTextField } from '@prismicio/client'

defineProps<{ headline: RichTextField, subline: RichTextField }>()

const { fiatAmount, cryptoAmount, fiatCurrency } = useSyncAmountInputs()
</script>

<template>
  <section bg-neutral-0>
    <Headline :headline :subline />
    <form flex="~ items-center gap-x-24" mt-40 h-max @submit.prevent>
      <div group relative>
        <AmountInput v-model="fiatAmount" required f-text-2xl />
        <div absolute right-0 top-6 text="neutral-600 group-hover:blue/50 group-focus-within:blue!">
          <TriangleSelect v-model:selected="fiatCurrency" :options="fiatCurrencies" />
        </div>
      </div>
      <p h-max text-32>
        =
      </p>
      <div group relative>
        <AmountInput v-model="cryptoAmount" required f-text-2xl />
        <div absolute inset-y-12 right-12 font-bold transition-colors text="neutral-600 group-hover:blue/50 group-focus-within:blue!">
          NIM
        </div>
      </div>
    </form>
  </section>
</template>
