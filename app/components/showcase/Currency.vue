<script setup lang="ts">
interface Currency { name: string, crypto: string, mainFeature: string, secondFeature: string, thirdFeature: string, fee: string, time: string, adjective: string }

const { items, feeLabel, timeLabel } = defineProps<{ items: Currency[], feeLabel: string, timeLabel: string }>()

const [DefineCrypto, ReuseCrypto] = createReusableTemplate<Currency & { twoColumns?: boolean }>()
</script>

<template>
  <DefineCrypto>
    <template #default="{ adjective, crypto, fee, mainFeature, name, secondFeature, thirdFeature, time, twoColumns = false }">
      <li :class="{ 'md:grid md:rows-[max-content,auto,auto,auto] md:cols-2 xl:block gap-x-32': twoColumns }">
        <div flex="~ items-center gap-12" text-48 col-span-full>
          <Icon v-if="crypto === 'NIM'" name="nimiq:logos-nimiq" />
          <Icon v-else-if="crypto === 'BTC'" name="nimiq:logos-bitcoin" />
          <div v-else-if="crypto === 'USDC/USDT'" flex="~ items-center gap-12">
            <Icon name="nimiq:logos-usdc" />
            <div my-10 bg-neutral-400 w-1 self-stretch />
            <Icon name="nimiq:logos-usdt" />
          </div>
          <span font-semibold text="f-xl neutral">{{ name }}</span>
          <div v-if="crypto === 'NIM'" flex="~ items-center gap-6" text-green px-6 py-4 rounded-full bg-green-400>
            <Icon name="nimiq:eco" class="text-14" />
            <span text-green f-text-xs nq-label>Eco</span>
          </div>
        </div>

        <p text="neutral/70 f-xs" px-8 py-4 rounded-4 bg-neutral-400 h-max w-max f-mt-md nq-label>
          {{ adjective }}
        </p>
        <p row-span-4 col-start-1 f-text-lg f-mt-2xs>
          {{ mainFeature }}
        </p>

        <div flex="~ gap-8 items-start" :class="{ 'f-mt-sm': !twoColumns, 'row-start-2 col-start-2 f-mt-md': twoColumns }">
          <div class="gradient" stack rounded-full shrink-0 size-28>
            <Icon :name="crypto === 'NIM' ? 'nimiq:bolt' : crypto === 'BTC' ? 'nimiq:arrows-to-sides' : 'nimiq:balance'" class="text-14 text-white" :class="{ 'scale-120': crypto === 'BTC' }" />
          </div>
          <p whitespace-nowrap>
            {{ secondFeature }}
          </p>
        </div>

        <div flex="~ gap-8 items-center" f-mt-2xs>
          <div class="gradient" stack rounded-full shrink-0 size-28>
            <Icon :name="crypto === 'NIM' ? 'nimiq:leaf-2-filled' : crypto === 'BTC' ? 'nimiq:digital-gold' : 'nimiq:arrows-to-center-triangle'" class="text-16 text-white" :class="{ 'scale-80 bottom--1 relative': crypto === 'NIM', 'scale-120 right--1 relative': crypto === 'BTC' }" />
          </div>
          <p whitespace-nowrap>
            {{ thirdFeature }}
          </p>
        </div>

        <p f-mt-sm>
          {{ feeLabel }}: <span text-neutral font-semibold>{{ fee }}</span>
        </p>
        <p>{{ timeLabel }}: <span text-neutral font-semibold>{{ time }}</span></p>
      </li>
    </template>
  </DefineCrypto>

  <ul v-if="items.length >= 3" grid="~ cols-1 md:cols-2 xl:cols-3">
    <ReuseCrypto v-bind="items[0]!" border="b-1 neutral-300 xl:b-0 md:r-1" p="b-32 xl:b-0 md:r-32" />
    <ReuseCrypto v-bind="items[1]!" border="b-1 neutral-300 xl:b-0 xl:r-1" p="y-32 md:t-0 xl:y-0 md:l-32" />
    <ReuseCrypto v-bind="items[2]!" col="span-full xl:span-1" p="t-32 xl:t-0 xl:l-32" :two-columns="true" />
  </ul>
</template>

<style scoped>
.gradient {
  background: radial-gradient(
    78.95% 73.1% at 12.5% 14.72%,
    color-mix(in oklch, var(--colors-neutral) 40%, transparent) 0%,
    color-mix(in oklch, var(--colors-neutral) 25%, transparent) 100%
  );
}
</style>
