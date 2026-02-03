<script setup lang="ts">
interface Currency { name: string, crypto: string, mainFeature: string, secondFeature: string, thirdFeature: string, fee: string, time: string, adjective: string }

const { items, feeLabel, timeLabel } = defineProps<{ items: Currency[], feeLabel: string, timeLabel: string }>()

const [DefineCrypto, ReuseCrypto] = createReusableTemplate<Currency & { twoColumns?: boolean }>()
</script>

<template>
  <DefineCrypto>
    <template #default="{ adjective, crypto, fee, mainFeature, name, secondFeature, thirdFeature, time, twoColumns = false }">
      <li :class="{ 'md:grid md:rows-[max-content,auto,auto,auto] md:cols-2 xl:block gap-x-8': twoColumns }">
        <div class="flex items-center gap-3 text-48 col-span-full">
          <Icon v-if="crypto === 'NIM'" name="nimiq:logos-nimiq" />
          <Icon v-else-if="crypto === 'BTC'" name="nimiq:logos-bitcoin" />
          <div v-else-if="crypto === 'USDC/USDT'" class="flex items-center gap-3">
            <Icon name="nimiq:logos-usdc" />
            <div class="my-2.5 bg-neutral-400 w-px self-stretch" />
            <Icon name="nimiq:logos-usdt" />
          </div>
          <span class="font-semibold text-lg md:text-xl text-neutral">{{ name }}</span>
          <div v-if="crypto === 'NIM'" class="flex items-center gap-1.5 text-green px-1.5 py-1 rounded-full bg-green-400">
            <Icon class="text-14" name="nimiq:eco" />
            <span class="text-green text-[11px] md:text-xs nq-label">Eco</span>
          </div>
        </div>

        <p class="text-neutral/70 text-[11px] md:text-xs px-2 py-1 rounded-1 bg-neutral-400 h-max w-max mt-4 md:mt-6 nq-label">
          {{ adjective }}
        </p>
        <p class="row-span-4 col-start-1 text-base md:text-lg mt-1 md:mt-1.5">
          {{ mainFeature }}
        </p>

        <div class="flex gap-2 items-start" :class="{ 'mt-3 md:mt-4': !twoColumns, 'row-start-2 col-start-2 mt-4 md:mt-6': twoColumns }">
          <div class="gradient rounded-full shrink-0 size-7" stack>
            <Icon class="text-14 text-white" :name="crypto === 'NIM' ? 'nimiq:bolt' : crypto === 'BTC' ? 'nimiq:arrows-to-sides' : 'nimiq:balance'" :class="{ 'scale-120': crypto === 'BTC' }" />
          </div>
          <p class="whitespace-nowrap">
            {{ secondFeature }}
          </p>
        </div>

        <div class="flex gap-2 items-center mt-1 md:mt-1.5">
          <div class="gradient rounded-full shrink-0 size-7" stack>
            <Icon class="text-16 text-white" :name="crypto === 'NIM' ? 'nimiq:leaf-2-filled' : crypto === 'BTC' ? 'nimiq:digital-gold' : 'nimiq:arrows-to-center-triangle'" :class="{ 'scale-80 -bottom-px relative': crypto === 'NIM', 'scale-120 -right-px relative': crypto === 'BTC' }" />
          </div>
          <p class="whitespace-nowrap">
            {{ thirdFeature }}
          </p>
        </div>

        <p class="mt-3 md:mt-4">
          {{ feeLabel }}: <span class="text-neutral font-semibold">{{ fee }}</span>
        </p>
        <p>{{ timeLabel }}: <span class="text-neutral font-semibold">{{ time }}</span></p>
      </li>
    </template>
  </DefineCrypto>

  <ul v-if="items.length >= 3" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
    <ReuseCrypto class="border-b border-neutral-300 xl:border-b-0 md:border-r pb-8 xl:pb-0 md:pr-8" v-bind="items[0]!" />
    <ReuseCrypto class="border-b border-neutral-300 xl:border-b-0 xl:border-r py-8 md:pt-0 xl:py-0 md:pl-8" v-bind="items[1]!" />
    <ReuseCrypto class="col-span-full xl:col-span-1 pt-8 xl:pt-0 xl:pl-8" v-bind="items[2]!" :two-columns="true" />
  </ul>
</template>

<style scoped>
.gradient {
  background: radial-gradient(
    78.95% 73.1% at 12.5% 14.72%,
    color-mix(in oklch, var(--color-neutral) 40%, transparent) 0%,
    color-mix(in oklch, var(--color-neutral) 25%, transparent) 100%
  );
}
</style>
