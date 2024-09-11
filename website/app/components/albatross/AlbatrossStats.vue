<script setup lang="ts">
const { txSecLabel = 'TX/sec', averageRewardsLabel = 'Avg rewarsd', txSpeedLabel = 'TX Speed' } = defineProps<{
  txSecLabel?: string
  txSpeedLabel?: string
  averageRewardsLabel: string
}>()

const { stats } = storeToRefs(useAlbatrossStats())

const [DefineStat, ReuseStat] = createReusableTemplate<{ icon: string, iconBgColor: string, value: number, label: string, decimals?: number }>()
</script>

<template>
  <DefineStat v-slot="{ icon, iconBgColor, label, value, decimals = 1 }">
    <div flex="~ col gap-12">
      <TweenedNumber font-semibold text="26 lg:32" lh-none :value :decimals :animation-duration="500" />
      <div flex="~ items-center gap-8">
        <div size="20 lg:24" rounded-full :class="iconBgColor" flex="~ items-center justify-center">
          <div text-neutral-0 :class="icon" />
        </div>
        <p text="15/27 lg:16/27 neutral-800" font-semibold>
          {{ label }}
        </p>
      </div>
    </div>
  </DefineStat>
  <ul flex="~ items-center justify-between gap-32 col md:row">
    <li>
      <ReuseStat icon="i-nimiq:sand-clock size-14" icon-bg-color="bg-gradient-orange" :value="stats.throughput" :label="txSecLabel" />
    </li>
    <li>
      <ReuseStat icon="i-nimiq:bolt size-14" icon-bg-color="bg-gradient-gold" :value="stats.blockTime" :label="txSpeedLabel" />
    </li>
    <li>
      <ReuseStat icon="i-nimiq:leaf-2 size-12 ml-1" icon-bg-color="bg-gradient-green" :value="stats.txLimit" :label="averageRewardsLabel" />
    </li>
  </ul>
</template>
