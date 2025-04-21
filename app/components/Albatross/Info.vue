<script setup lang="ts">
import { getLiveviewPillColor } from '~/composables/useColors'

const { statsTooltipContent } = defineProps<{
  networkNotice?: string
  statsTooltipContent?: string
  txSecLabel?: string
  txSpeedLabel?: string
  averageRewardsLabel?: string
  averageRewardsValue?: string
}>()

const { status, animationActive, nonce, canSendTx, sendTx } = useAlbatrossDummyTx()
const pillClass = computed(() => getLiveviewPillColor({ nonce: nonce.value }))

const tooltipParagraphs = computed(() => {
  if (!statsTooltipContent)
    return []
  return statsTooltipContent.split('\n')
})
</script>

<template>
  <div flex="~ col lg:row gap-y-20 gap-x-24" pb-1 max-sm:mx-24>
    <div flex="~ items-center justify-center gap-x-80 gap-y-32 col md:row" ring="1.5 solid neutral-500" relative max-w-712 rounded-8 px-32 py-20 font-semibold>
      <AlbatrossStats :average-rewards-label :tx-sec-label :tx-speed-label :average-rewards-value />
      <button v-if="canSendTx" :disabled="animationActive || status !== 'idle'" select-none :class="pillClass" @click="sendTx">
        Send Test Transaction
      </button>
      <Tooltip v-if="statsTooltipContent" dark absolute right-12 top-12 aria-label="Notice about these stats">
        <p v-for="(p, i) in tooltipParagraphs" :key="i" style="font-size: var(--nq-font-size)" f-text-sm>
          {{ p }}
        </p>
      </Tooltip>
    </div>
    <div v-if="networkNotice" text="14 neutral" bg="white/5" flex="~ gap-16 wrap justify-center items-center" self-stretch rounded-8 px-32 py-24>
      <div i-nimiq:tools-wench-screwdriver size="24 lg:38" />
      <p text="15/21 md:16/22 max-md:center neutral-900" font-semibold lg:max-w-15ch>
        {{ networkNotice }}
      </p>
    </div>
  </div>
</template>
