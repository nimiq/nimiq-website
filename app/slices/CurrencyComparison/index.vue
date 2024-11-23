<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.CurrencyComparisonSlice>())
const bgColor = getColorClass(props.slice.primary.bgColor)
</script>

<template>
  <section :class="bgColor">
    <ul flex="~ col lg:row">
      <li v-for="({ adjetive, crypto, fee, mainFeature, name, secondFeature, thirdFeature, time }) in slice.primary.currencies" :key="crypto" border="b-1 lg:b-0 lg:r-1 neutral-400 last:none" p="max-lg:y-32 last:b-0 first:t-0 lg:x-32">
        <div flex="~ items-center gap-12" text-48>
          <div v-if="crypto === 'NIM'" i-nimiq:logos-nimiq />
          <div v-else-if="crypto === 'BTC'" i-nimiq:logos-bitcoin />
          <div v-else-if="crypto === 'USDC/USDT'" flex="~ items-center gap-12">
            <div i-nimiq:logos-usdc />
            <div my-10 w-1 self-stretch bg-neutral-400 />
            <div i-nimiq:logos-usdt />
          </div>
          <span font-semibold text="xl neutral">
            {{ name }}
          </span>
          <div v-if="crypto === 'NIM'" flex="~ items-center gap-6" rounded-full bg-green-400 px-6 py-4 text-green>
            <div i-nimiq:eco text-14 />
            <span text-green text-xs nq-label>Eco</span>
          </div>
        </div>

        <p text="neutral-900 xs" w-max rounded-4 bg-neutral-400 px-8 py-4 nq-mt-32 nq-label>
          {{ adjetive }}
        </p>
        <p text-lg nq-mt-12>
          {{ mainFeature }}
        </p>

        <div flex="~ gap-8 items-start" nq-mt-24>
          <div size-28 shrink-0 rounded-full bg-gradient-blue stack>
            <div text="14 white" :class="{ 'i-nimiq:bolt': crypto === 'NIM', 'i-nimiq:arrows-to-sides': crypto === 'BTC', 'i-nimiq:balance': crypto === 'USDC/USDT' }" />
          </div>
          <p>
            {{ secondFeature }}
          </p>
        </div>

        <div flex="~ gap-8 items-center" nq-mt-12>
          <div size-28 shrink-0 rounded-full bg-gradient-blue stack>
            <div text="16 white" :class="{ 'i-nimiq:leaft-2-filled': crypto === 'NIM', 'i-nimiq:digital-gold': crypto === 'BTC', 'i-nimiq:arrows-to-center-triangle': crypto === 'USDC/USDT' }" />
          </div>
          <p>
            {{ thirdFeature }}
          </p>
        </div>

        <p nq-mt-24>
          {{ slice.primary.feeLabel }}: <span text-neutral font-semibold>{{ fee }}</span>
        </p>

        <p>
          {{ slice.primary.timeLabel }}: <span text-neutral font-semibold>{{ time }}</span>
        </p>
      </li>
    </ul>
  </section>
</template>
