<script setup lang="ts">
const { txSecLabel = 'TX/sec', averageRewardsLabel = 'Avg rewarsd', txSpeedLabel = 'TX Speed' } = defineProps<{
  txSecLabel?: string
  txSpeedLabel?: string
  averageRewardsLabel?: string
}>()

const { txPerSecond, blockTime } = storeToRefs(useAlbatrossStats())

const [DefineStat, ReuseStat] = createReusableTemplate<{ icon: string, iconBgColor: string, value: number, label: string, decimals?: number, suffix?: string }>()
</script>

<template>
  <DefineStat v-slot="{ icon, iconBgColor, label, value, decimals = 1, suffix }">
    <div flex="~ col max-sm:items-center gap-12">
      <span font-semibold text="26 lg:32 neutral" lh-none flex="~">
        <TweenedNumber :value :decimals :animation-duration="500" />
        {{ suffix }}
      </span>
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
  <ul flex="~ items-center justify-between gap-32 lg:gap-48 sm:row col">
    <li>
      <ReuseStat icon="i-nimiq:sand-clock size-14" icon-bg-color="bg-gradient-orange" :value="txPerSecond" :label="txSecLabel" />
    </li>
    <li>
      <ReuseStat icon="i-nimiq:bolt size-14" icon-bg-color="bg-gradient-gold" :value="blockTime" :label="txSpeedLabel" :decimals="0" suffix="&nbsp;sec" />
    </li>
    <li>
      <ReuseStat icon="i-nimiq:leaf-2 size-12 ml-1" icon-bg-color="bg-gradient-green" :value="0" :label="averageRewardsLabel" suffix="% p.a" />
    </li>
  </ul>
</template>
