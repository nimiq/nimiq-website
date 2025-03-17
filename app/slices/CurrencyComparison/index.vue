<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.CurrencyComparisonSlice>())
const bgColor = getColorClass(props.slice.primary.bgColor)

const [DefineCrypto, ReuseCrypto] = createReusableTemplate<Partial<Content.CurrencyComparisonSlice['primary']['currencies'][number]> & { twoColumns?: boolean }>()
</script>

<template>
  <DefineCrypto>
    <template #default="{ adjective, crypto, fee, mainFeature, name, secondFeature, thirdFeature, time, twoColumns = false }">
      <li :class="{ 'md:grid md:rows-[max-content,auto,auto,auto] md:cols-2 xl:block gap-x-32': twoColumns }">
        <div flex="~ items-center gap-12" col-span-full text-48>
          <div v-if="crypto === 'NIM'" i-nimiq:logos-nimiq />
          <div v-else-if="crypto === 'BTC'" i-nimiq:logos-bitcoin />
          <div v-else-if="crypto === 'USDC/USDT'" flex="~ items-center gap-12">
            <div i-nimiq:logos-usdc />
            <div my-10 w-1 self-stretch bg-neutral-400 />
            <div i-nimiq:logos-usdt />
          </div>
          <span font-semibold text="f-xl neutral">
            {{ name }}
          </span>
          <div v-if="crypto === 'NIM'" flex="~ items-center gap-6" rounded-full bg-green-400 px-6 py-4 text-green>
            <div i-nimiq:eco text-14 />
            <span text-green nq-label f-text-xs>Eco</span>
          </div>
        </div>

        <p text="neutral/70 f-xs" h-max w-max rounded-4 bg-neutral-400 px-8 py-4 nq-label f-mt-md>
          {{ adjective }}
        </p>
        <p row-span-4 col-start-1 f-text-lg f-mt-2xs>
          {{ mainFeature }}
        </p>

        <div flex="~ gap-8 items-start" :class="{ 'f-mt-sm': !twoColumns, 'row-start-2 col-start-2 f-mt-md': twoColumns }">
          <div class="gradient" size-28 shrink-0 rounded-full stack>
            <div text="14 white" :class="{ 'i-nimiq:bolt': crypto === 'NIM', 'i-nimiq:arrows-to-sides scale-120': crypto === 'BTC', 'i-nimiq:balance': crypto === 'USDC/USDT' }" />
          </div>
          <p whitespace-nowrap>
            {{ secondFeature }}
          </p>
        </div>

        <div flex="~ gap-8 items-center" f-mt-2xs>
          <div class="gradient" size-28 shrink-0 rounded-full stack>
            <div text="16 white" :class="{ 'i-nimiq:leaf-2-filled scale-80 bottom--1 relative': crypto === 'NIM', 'i-nimiq:digital-gold scale-120 right--1 relative': crypto === 'BTC', 'i-nimiq:arrows-to-center-triangle': crypto === 'USDC/USDT' }" />
          </div>
          <p whitespace-nowrap>
            {{ thirdFeature }}
          </p>
        </div>

        <p f-mt-sm>
          {{ slice.primary.feeLabel }}: <span text-neutral font-semibold>{{ fee }}</span>
        </p>

        <p>
          {{ slice.primary.timeLabel }}: <span text-neutral font-semibold>{{ time }}</span>
        </p>
      </li>
    </template>
  </DefineCrypto>
  <section :class="bgColor">
    <ul grid="~ cols-1 md:cols-2 xl:cols-3">
      <ReuseCrypto v-bind="slice.primary.currencies[0]" border="b-1 neutral-300 xl:b-0 md:r-1" p="b-32 xl:b-0 md:r-32" />
      <ReuseCrypto v-bind="slice.primary.currencies[1]" border="b-1 neutral-300 xl:b-0 xl:r-1" p="y-32 md:t-0 xl:y-0 md:l-32" />
      <ReuseCrypto v-bind="slice.primary.currencies[2]" col="span-full xl:span-1" p="t-32 xl:t-0 xl:l-32" :two-columns="true" />
    </ul>
  </section>
</template>

<style scoped>
.gradient {
  background: radial-gradient(
    78.95% 73.1% at 12.5% 14.72%,
    rgb(var(--nq-neutral) / 0.4) 0%,
    rgb(var(--nq-neutral) / 0.25) 100%
  );
}
</style>
