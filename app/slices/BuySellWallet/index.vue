<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.BuySellWalletSlice>())
</script>

<template>
  <section bg-neutral-0>
    <div flex="~ col lg:row">
      <Headline children:text-left :headline="slice.primary.headline" :subline="slice.primary.text" :cta-href="slice.primary.linkHref" :cta-label="slice.primary.linkLabel" />
      <ul v-if="slice.items.length > 0" f-mt-2xl grid="~ cols-1 sm:cols-2 lg:cols-1 xl:cols-2 gap-x-16 gap-y-24" mt="80 lg:0" pl="lg:16 2xl:64">
        <li v-for="({ cost, description, extraFee, isOfficial, label, logo, paymentMethod }, i) in slice.items" :key="i" shrink-0 :data-inverted="isOfficial ? '' : undefined">
          <div bg="data-inverted:blue neutral" p="24 xl:32" nq-no-color text-white rounded-6>
            <ProxiedPrismicImage op-60 max-h-24 :field="logo" />
            <RichText v-if="paymentMethod" wrapper="div" f-mt-2xs children:text-left children:text="neutral-0 data-inverted:white" :field="paymentMethod" />
            <RichText v-if="description" wrapper="div" text="data-inverted:white/80 neutral-800" :field="description" min-h-3lh f-mt-xs />

            <p v-if="label" text="12 neutral-800 data-inverted:neutral-300" f-mt-md nq-label>
              {{ label }}
            </p>
          </div>

          <div f-mt-sm>
            <span v-if="cost" text="green min-22 max-26" font-semibold>{{ cost }}</span>
            <span v-if="extraFee" f-text-sm lg:inline sm:block xl:block>{{ extraFee }}</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
