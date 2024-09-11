<script setup lang="ts">
const { txSecLabel = 'TX/sec', averageRewardsLabel = 'Avg rewarsd', txSpeedLabel = 'TX Speed' } = defineProps<{
  txSecLabel?: string
  txSpeedLabel?: string
  averageRewardsLabel: string
}>()

const { stats } = storeToRefs(useAlbatrossStats())
</script>

<template>
  <ul flex="~ items-center justify-between gap-32 col md:row">
    <li>
      <div text="24/none neutral">
        <TweenedNumber :value="stats.throughput" :decimals="1" :animation-duration="500" />
        tx/s
      </div>
      <p text="14 neutral-800">
        {{ txSecLabel }}
      </p>
    </li>
    <li>
      <div text="24/none neutral">
        <TweenedNumber :value="stats.txLimit" :decimals="0" :animation-duration="500" />
        tx/s
      </div>
      <p text="14 neutral-800">
        {{ txSpeedLabel }}
      </p>
    </li>
    <li>
      <div text="24/none neutral">
        <TweenedNumber :value="stats.blockTime" :decimals="1" :animation-duration="500" />
        s
      </div>
      <p text="14 neutral-800">
        {{ averageRewardsLabel }}
      </p>
    </li>
  </ul>
</template>
