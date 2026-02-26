<script setup lang="ts">
const { statsUiTooltipContent } = defineProps<{
  networkNotice?: string
  statsUiTooltipContent?: string
  txSecLabel?: string
  txSpeedLabel?: string
  averageRewardsLabel?: string
}>()

const tooltipParagraphs = computed(() => {
  if (!statsUiTooltipContent)
    return []
  return statsUiTooltipContent.split('\n')
})
</script>

<template>
  <div class="flex flex-col lg:flex-row gap-y-20 gap-x-24 pb-px max-sm:mx-24">
    <div class="flex flex-col md:flex-row items-center justify-center gap-x-80 gap-y-32 ring-[1.5px] ring-neutral-500 font-semibold px-32 py-20 rounded-8 max-w-[712px] relative">
      <AlbatrossStats :average-rewards-label :tx-sec-label :tx-speed-label />
      <div v-if="statsUiTooltipContent" class="absolute right-12 top-12">
        <UiTooltip aria-label="Notice about these stats">
          <p v-for="(p, i) in tooltipParagraphs" :key="i" class="text-f-sm">
            {{ p }}
          </p>
        </UiTooltip>
      </div>
    </div>
    <div v-if="networkNotice" class="flex flex-wrap gap-16 justify-center items-center text-14 text-neutral bg-white/5 px-32 py-24 rounded-8 self-stretch">
      <Icon name="nimiq:tools-wench-screwdriver" class="size-24 lg:size-[38px]" />
      <p class="text-[15px]/[21px] md:text-[16px]/[22px] max-md:text-center text-neutral-900 font-semibold lg:max-w-[15ch]">
        {{ networkNotice }}
      </p>
    </div>
  </div>
</template>
