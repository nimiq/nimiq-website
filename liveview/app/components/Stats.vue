<script setup lang="ts">
import TweenedNumber from './TweenedNumber.vue'

const { stats } = storeToRefs(useStats())
</script>

<template>
  <ul flex="~ items-center justify-between gap-32 col md:row">
    <li>
      <div text="24/none neutral">
        <TweenedNumber :value="stats.throughput" :decimals="1" :animation-duration="500" />
        tx/s
      </div>
      <p text="14 neutral-800">
        Throughput
      </p>
    </li>
    <li>
      <div text="24/none neutral">
        <TweenedNumber :value="stats.txLimit" :decimals="0" :animation-duration="500" />
        tx/s
      </div>
      <p text="14 neutral-800">
        Capacity
      </p>
    </li>
    <li>
      <div text="24/none neutral">
        <TweenedNumber :value="stats.blockTime" :decimals="1" :animation-duration="500" />
        s
      </div>
      <p text="14 neutral-800">
        Avg. block time
      </p>
    </li>
  </ul>
</template>
