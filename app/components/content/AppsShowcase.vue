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
  <section children:f-px="8/256" px-0 bg-neutral-0 max-lg:children:max-w-none>
    <AppsShowcaseNimiq v-if="slice.variation === 'nimiqsApps'" :items="slice.primary.apps" />
    <AppsShowcaseAll v-else-if="slice.variation === 'default'" v-bind="slice.primary as any" />
  </section>
</template>
