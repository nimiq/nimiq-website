<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.BuySellWalletSlice>())
</script>

<template>
  <section class="white bg-neutral-0">
    <div flex="~ col lg:row">
      <Headline children:text-left :headline="slice.primary.headline" :subline="slice.primary.text" :cta-href="slice.primary.linkHref" :cta-label="slice.primary.linkLabel" />

      <ul v-if="slice.items.length > 0" nq-mt-96 grid="~ cols-1 sm:cols-2 lg:cols-1 xl:cols-2 gap-x-16 gap-y-24" mt="80 lg:0" pl="lg:16 2xl:64">
        <li v-for="({ cost, description, extraFee, isOfficial, label, logo, paymentMethod }, i) in slice.items" :key="i" shrink-0 :data-inverted="isOfficial ? '' : undefined">
          <div bg="inverted:blue neutral" p="24 xl:32" nq-no-color rounded-6 text-white>
            <PrismicImage max-h-24 op-60 :field="logo" />
            <PrismicRichText v-if="paymentMethod" nq-mt-12 children:text-left children:text="neutral-0 inverted:white" :field="paymentMethod" />
            <PrismicRichText v-if="description" text="inverted:white/80 neutral-800" :field="description" min-h-3lh nq-mt-16 />

            <p v-if="label" text="12 neutral-800 inverted:neutral-300" nq-mt-32 nq-label>
              {{ label }}
            </p>
          </div>

          <div nq-mt-24>
            <span v-if="cost" text="green min-22 max-26" font-semibold>{{ cost }}</span>
            <span v-if="extraFee" text-sm lg:inline sm:block xl:block>{{ extraFee }}</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
