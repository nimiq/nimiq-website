<script setup lang="ts">
import type { BooleanField, RichTextField } from '@prismicio/client'

interface ConsensusMapSlice {
  primary: {
    connect: string | undefined
    connecting: string | undefined
    headline: RichTextField
    label: string | undefined
    subline: RichTextField
    thisIsYou: BooleanField
  }
  variation?: string
}

const { slice } = defineProps<{ slice: ConsensusMapSlice, slices?: any[] }>()
</script>

<template>
  <section v-if="slice.variation === 'twoColumn'" class="dark" px-0 pb-0 pt-160 bg-darkerblue>
    <div flex="~ col xl:row justify-center" m-0 max-w-none w-full>
      <Headline :headline="slice.primary.headline" :subline="slice.primary.subline" :label="slice.primary.label" pl="$px" left-align xl:pb-200 xl:pt-32 xl:w-50vw />
      <div xl:w-50vw>
        <ClientOnly>
          <AlbatrossConsensusMap :connect-label="slice.primary.connect!" :connecting="slice.primary.connecting!" :this-is-you="slice.primary.thisIsYou! as any" />
        </ClientOnly>
      </div>
    </div>
  </section>
</template>

<style scoped>
section :deep(h2 + p) {
  --uno: 'xl:max-w-40ch';
}
</style>
