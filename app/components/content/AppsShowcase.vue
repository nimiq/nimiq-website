<script setup lang="ts">
interface AppsShowcaseSlice {
  primary: {
    apps: any
    labelAll?: string | undefined
    labelOfficial?: string | undefined
    labelCommunity?: string | undefined
    labelBy?: string | undefined
    labelLearnMore?: string | undefined
    labelInnovation?: string | undefined
    labelTeamNimiq?: string | undefined
  }
  variation?: string
}

const { slice } = defineProps<{ slice: AppsShowcaseSlice, slices?: any[] }>()
</script>

<template>
  <section px-0 bg-neutral-0 max-lg:children:max-w-none of-x-clip :class="{ 'pb-20 md:pb-22': slice.variation === 'nimiqsApps', 'pt-0!' : slice.variation !== 'nimiqsApps' }">
    <AppsShowcaseNimiq v-if="slice.variation === 'nimiqsApps'" :items="slice.primary.apps" />
    <AppsShowcaseAll f-px="8/256" v-else-if="slice.variation === 'default'" v-bind="slice.primary as any" />
  </section>
</template>
