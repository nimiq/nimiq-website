<script setup lang="ts">
const { txSecLabel = 'TX/sec', averageRewardsLabel = 'Est. Avg. rewards', txSpeedLabel = 'TX Speed' } = defineProps<{
  txSecLabel?: string
  txSpeedLabel?: string
  averageRewardsLabel?: string
}>()

const { annualRewardPercentage } = useStakingInfo()

const [DefineStat, ReuseStat] = createReusableTemplate<{ icon: string, iconBgColor: string, value: number | string, label: string, suffix?: string }>()
</script>

<template>
  <DefineStat v-slot="{ icon, iconBgColor, label, value, suffix }">
    <div class="flex flex-col max-sm:items-center gap-12">
      <span class="text-f-3xl text-neutral font-semibold leading-none flex">
        <span>{{ value }}</span>
        {{ suffix }}
      </span>
      <div class="flex items-center gap-[8px]">
        <div class="size-20 lg:size-24 rounded-full flex items-center justify-center" :class="iconBgColor">
          <Icon :name="icon" class="text-neutral-0 -mr-0.5" />
        </div>
        <p class="text-[15px]/[27px] lg:text-[16px]/[27px] text-neutral-800 font-semibold">
          {{ label }}
        </p>
      </div>
    </div>
  </DefineStat>
  <ul class="flex items-center justify-between gap-32 lg:gap-48 flex-col sm:flex-row">
    <li>
      <ReuseStat icon="nimiq:sand-clock" icon-bg-color="bg-gradient-orange" :value="1000" :label="txSecLabel" />
    </li>
    <li>
      <ReuseStat icon="nimiq:bolt" icon-bg-color="bg-gradient-gold" :value="1" :label="txSpeedLabel" suffix="&nbsp;sec" />
    </li>
    <li>
      <ReuseStat icon="nimiq:leaf-2" icon-bg-color="bg-gradient-green" :value="`~${annualRewardPercentage} p.a.`" :label="averageRewardsLabel" />
    </li>
  </ul>
</template>
