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

const txCount = computed(() => props.block.transactions.length)
const hashes = computed(() => props.block.transactions.slice(0, MAX_TXS).map(tx => tx.hash.substring(0, 8)))

const fontSizeClass = computed(() => {
  if (props.block.number > 999999)
    return 'text-[15px]/[13.5px]'
  if (props.block.number > 99999)
    return 'text-17'
  if (props.block.number > 9999)
    return 'text-20'
  return 'text-24/[19px]'
})
</script>

<template>
  <div title="Micro Block">
    <header v-if="block.isSkip" class="-mt-22 py-[4px] rounded-t-8 w-160 bg-gradient-orange text-12 text-white text-center nq-label">
      Skip Block
    </header>

    <div class="flex flex-col shrink-0 text-neutral bg-neutral-0 size-160 relative" style="color-scheme: light" :class="!block.isSkip ? 'rounded-8' : 'rounded-b-8'">
      <div class="flex items-center justify-between text-15 px-16 pb-10 pt-14">
        <p class="font-bold" :class="fontSizeClass">
          #{{ block.number }}
        </p>
        <p v-if="txCount > 0" class="text-13 font-semibold leading-none">
          {{ txCount }} TX
        </p>
      </div>

      <div v-if="!txCount" class="text-neutral-700 text-13 text-center font-semibold mt-80 grow">
        No Transactions
      </div>
      <div v-else class="grow">
        <AlbatrossLiveviewTransactionCanvas class="origin-bottom-left scale-50 bottom-0 left-0 absolute" :hashes />
      </div>
    </div>

    <footer class="flex items-center justify-between gap-[6px] pt-[2px] w-full text-neutral-800 text-12">
      <p class="whitespace-nowrap">
        Slot {{ block.producer.slotNumber }}
      </p>
      <p v-if="duration !== '?' && Number(duration.replace('s', '')) > 0" class="whitespace-nowrap">
        {{ duration }} block time
      </p>
    </footer>
  </div>
</template>
