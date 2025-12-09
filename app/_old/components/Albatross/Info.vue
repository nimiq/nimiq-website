<script setup lang="ts">
const { statsTooltipContent } = defineProps<{
  networkNotice?: string
  statsTooltipContent?: string
  txSecLabel?: string
  txSpeedLabel?: string
  averageRewardsLabel?: string
  averageRewardsValue?: string
}>()

const tooltipParagraphs = computed(() => {
  if (!statsTooltipContent)
    return []
  return statsTooltipContent.split('\n')
})
</script>

<template>
  <div flex="~ col lg:row gap-y-20 gap-x-24" pb-1 max-sm:mx-24>
    <div flex="~ items-center justify-center gap-x-80 gap-y-32 col md:row" ring="1.5 solid neutral-500" font-semibold px-32 py-20 rounded-8 max-w-712 relative>
      <AlbatrossStats :average-rewards-label :tx-sec-label :tx-speed-label :average-rewards-value />
      <Tooltip v-if="statsTooltipContent" dark right-12 top-12 absolute aria-label="Notice about these stats">
        <p v-for="(p, i) in tooltipParagraphs" :key="i" style="font-size: var(--nq-font-size)" f-text-sm>
          {{ p }}
        </p>
      </Tooltip>
    </div>
    <div v-if="networkNotice" text="14 neutral" bg="white/5" flex="~ gap-16 wrap justify-center items-center" px-32 py-24 rounded-8 self-stretch>
      <div i-nimiq:tools-wench-screwdriver size="24 lg:38" />
      <p text="15/21 md:16/22 max-md:center neutral-900" font-semibold lg:max-w-15ch>
        {{ networkNotice }}
      </p>
    </div>
  </div>
</template>
