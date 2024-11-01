<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.ConsensusMapSlice>())
</script>

<template>
  <section v-if="slice.variation === 'twoColumn'" class="dark" bg-darkblue pb-0 pt-160>
    <div flex="~ col xl:row justify-center gap-32" m-0 max-w-none w-full>
      <Headline :headline="slice.primary.headline" :subline="slice.primary.subline" :label="slice.primary.label" left-align max-w-544 flex-1 xl:pb-200 xl:pt-32 />
      <div flex-1>
        <ClientOnly>
          <AlbatrossConsensusMap :connect-label="slice.primary.connect!" :connecting="slice.primary.connecting!" :this-is-you="slice.primary.thisIsYou!" />
        </ClientOnly>
      </div>
    </div>
  </section>
</template>
