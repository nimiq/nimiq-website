<script setup lang="ts">
const { txSecLabel = 'TX/sec', averageRewardsLabel = 'Est. Avg. rewards', txSpeedLabel = 'TX Speed', averageRewardsValue = '14.9% p.a' } = defineProps<{
  txSecLabel?: string
  txSpeedLabel?: string
  averageRewardsLabel?: string
  averageRewardsValue?: string
}>()

const [DefineStat, ReuseStat] = createReusableTemplate<{ icon: string, iconBgColor: string, value: number | string, label: string, suffix?: string }>()
</script>

<template>
  <DefineStat v-slot="{ icon, iconBgColor, label, value, suffix }">
    <div flex="~ col max-sm:items-center gap-12">
      <span text="3xl neutral" font-semibold lh-none flex="~">
        <span>{{ value }}</span>
        {{ suffix }}
      </span>
      <div flex="~ items-center gap-8">
        <div size="20 lg:24" rounded-full :class="iconBgColor" flex="~ items-center justify-center">
          <div :class="icon" mr--0.5 text-neutral-0 />
        </div>
        <p text="15/27 lg:16/27 neutral-800" font-semibold>
          {{ label }}
        </p>
      </div>
    </div>
  </DefineStat>
  <ul flex="~ items-center justify-between gap-32 lg:gap-48 sm:row col">
    <li>
      <!-- <ReuseStat icon="i-nimiq:sand-clock size-14" icon-bg-color="bg-gradient-orange" :value="stats.txPerSecond || 0" :label="txSecLabel" /> -->
      <ReuseStat icon="i-nimiq:sand-clock size-14" icon-bg-color="bg-gradient-orange" :value="1000" :label="txSecLabel" :decimals="0" />
    </li>
    <li>
      <ReuseStat icon="i-nimiq:bolt size-14" icon-bg-color="bg-gradient-gold" :value="1" :label="txSpeedLabel" :decimals="1" suffix="&nbsp;sec" />
    </li>
    <li>
      <ReuseStat icon="i-nimiq:leaf-2 size-12 ml-1" icon-bg-color="bg-gradient-green" :value="averageRewardsValue" :label="averageRewardsLabel" />
    </li>
  </ul>
</template>
