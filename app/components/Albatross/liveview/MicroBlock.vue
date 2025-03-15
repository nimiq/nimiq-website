<script setup lang="ts">
const props = defineProps<{ block: LiveviewMicroBlock }>()

const MAX_TXS = 1102

const locale = useLocale()
const durationFormatter = new Intl.NumberFormat(locale.value, {
  style: 'unit',
  unit: 'second',
  unitDisplay: 'short',
  maximumFractionDigits: 1,
})

const duration = computed(() => {
  if (!props.block.duration)
    return '?'
  return durationFormatter.format(props.block.duration / 1000)
})

const txCount = computed(() => props.block.matchedTxs.length + props.block.unmatchedTxs.length)
const nonces = computed(() => props.block.matchedTxs.slice(0, MAX_TXS))
const hashes = computed(() => props.block.unmatchedTxs.slice(0, MAX_TXS - nonces.value.length))

// @unocss-include

const fontSizeClass = computed(() => {
  if (props.block.number > 999999)
    return 'text-15/13.5'
  if (props.block.number > 99999)
    return 'text-17'
  if (props.block.number > 9999)
    return 'text-20'
  return 'text-24/19'
})
</script>

<template>
  <div title="Micro Block">
    <header v-if="block.isSkip" text="12 white center" bg-gradient-orange nq-label mt--22 py-4 rounded-t-8 w-160>
      Skip Block
    </header>

    <div flex="~ col shrink-0" text-neutral-0 bg-neutral size-160 relative :class="!block.isSkip ? 'rounded-8' : 'rounded-b-8'">
      <div flex="~ items-center justify-between" text-15 px-16 pb-10 pt-14>
        <p font-bold :class="fontSizeClass">
          #{{ block.number }}
        </p>
        <p v-if="txCount > 0" lh-none text-13 font-semibold>
          {{ txCount }} TX
        </p>
      </div>

      <div v-if="!txCount" text="neutral-700 13 center" font-semibold mt-80 grow-1>
        No Transactions
      </div>
      <div v-else grow-1>
        <AlbatrossLiveviewTransactionCanvas origin="[0_100%]" scale-50 bottom-0 left-0 absolute :nonces :hashes />
      </div>
    </div>

    <footer flex="~ items-center justify-between gap-6" pt-2 w-full text="neutral-800 12">
      <p whitespace-nowrap>
        Slot {{ block.producer.slotNumber }}
      </p>
      <p whitespace-nowrap>
        {{ duration }} block time
      </p>
    </footer>
  </div>
</template>
