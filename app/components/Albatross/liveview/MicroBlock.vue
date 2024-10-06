<script setup lang="ts">
const props = defineProps<{ block: LiveviewMicroBlock }>()

const MAX_TXS = 1102

const { language } = useNavigatorLanguage()
const durationFormatter = new Intl.NumberFormat(language.value, {
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
    <header v-if="block.isSkip" text="12 neutral-0 center" mt--22 w-160 rounded-t-8 py-4 bg-gradient-orange nq-label>
      Skip Block
    </header>

    <div flex="~ col shrink-0" relative size-160 bg-white text-darkblue :class="!block.isSkip ? 'rounded-8' : 'rounded-b-8'">
      <div px-16 pb-10 pt-14 flex="~ items-center justify-between" text-15>
        <p font-bold :class="fontSizeClass">
          #{{ block.number }}
        </p>
        <p v-if="txCount > 0" text-13 font-semibold lh-none>
          {{ txCount }} TX
        </p>
      </div>

      <div v-if="!txCount" text="neutral-700 13 center" mt-80 grow-1 font-semibold>
        No Transactions
      </div>
      <div v-else grow-1>
        <AlbatrossLiveviewTransactionCanvas absolute bottom-0 left-0 origin="[0_100%]" scale-50 :nonces :hashes />
      </div>
    </div>

    <footer flex="~ items-center justify-between gap-6" w-full pt-2 text="neutral-800 12">
      <p whitespace-nowrap>
        Slot {{ block.producer.slotNumber }}
      </p>
      <p whitespace-nowrap>
        {{ duration }} block time
      </p>
    </footer>
  </div>
</template>
