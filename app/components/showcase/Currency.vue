<script setup lang="ts">
interface Currency { name: string, crypto: string, mainFeature: string, secondFeature: string, thirdFeature: string, fee: string, time: string, adjective: string }

const { items, feeLabel, timeLabel } = defineProps<{ items: Currency[], feeLabel: string, timeLabel: string }>()

const [DefineCrypto, ReuseCrypto] = createReusableTemplate<Currency & { twoColumns?: boolean }>()
</script>

<template>
  <DefineCrypto>
    <template #default="{ adjective, crypto, fee, mainFeature, name, secondFeature, thirdFeature, time, twoColumns = false }">
      <li :class="{ 'md:grid md:rows-[max-content,auto,auto,auto] md:cols-2 xl:block gap-x-8': twoColumns }">
        <div class="flex flex-items-center gap-3 text-48 col-span-full">
          <Icon v-if="crypto === 'NIM'" name="nimiq:logos-nimiq" />
          <Icon v-else-if="crypto === 'BTC'" name="nimiq:logos-bitcoin" />
          <div v-else-if="crypto === 'USDC/USDT'" class="flex flex-items-center gap-3">
            <Icon name="nimiq:logos-usdc" />
            <div class="my-2.5 bg-neutral-400 w-px self-stretch" />
            <Icon name="nimiq:logos-usdt" />
          </div>
          <span class="font-semibold text-f-xl text-neutral">{{ name }}</span>
          <div v-if="crypto === 'NIM'" class="flex flex-items-center gap-1.5 text-green px-1.5 py-1 rounded-full bg-green-400">
            <Icon class="text-14" name="nimiq:eco" />
            <span class="text-green f-text-xs nq-label">Eco</span>
          </div>
        </div>

        <p class="text-neutral/70 text-f-xs px-2 py-1 rounded-1 bg-neutral-400 h-max w-max f-mt-md nq-label">
          {{ adjective }}
        </p>
        <p class="row-span-4 col-start-1 f-text-lg f-mt-2xs">
          {{ mainFeature }}
        </p>

        <div class="flex gap-2 flex-items-start" :class="{ 'f-mt-sm': !twoColumns, 'row-start-2 col-start-2 f-mt-md': twoColumns }">
          <div class="gradient rounded-full shrink-0 size-7" stack>
            <Icon class="text-14 text-white" :name="crypto === 'NIM' ? 'nimiq:bolt' : crypto === 'BTC' ? 'nimiq:arrows-to-sides' : 'nimiq:balance'" :class="{ 'scale-120': crypto === 'BTC' }" />
          </div>
          <p class="whitespace-nowrap">
            {{ secondFeature }}
          </p>
        </div>

        <div class="flex gap-2 flex-items-center f-mt-2xs">
          <div class="gradient rounded-full shrink-0 size-7" stack>
            <Icon class="text-16 text-white" :name="crypto === 'NIM' ? 'nimiq:leaf-2-filled' : crypto === 'BTC' ? 'nimiq:digital-gold' : 'nimiq:arrows-to-center-triangle'" :class="{ 'scale-80 -bottom-px relative': crypto === 'NIM', 'scale-120 -right-px relative': crypto === 'BTC' }" />
          </div>
          <p class="whitespace-nowrap">
            {{ thirdFeature }}
          </p>
        </div>

        <p class="f-mt-sm">
          {{ feeLabel }}: <span class="text-neutral font-semibold">{{ fee }}</span>
        </p>
        <p>{{ timeLabel }}: <span class="text-neutral font-semibold">{{ time }}</span></p>
      </li>
    </template>
  </DefineCrypto>

  <ul v-if="items.length >= 3" class="grid grid-cols-1 grid-md:cols-2 grid-xl:cols-3">
    <ReuseCrypto class="border-b-1 border-neutral-300 border-xl:b-0 border-md:r-1 p-b-32 p-xl:b-0 p-md:r-32" v-bind="items[0]!" />
    <ReuseCrypto class="border-b-1 border-neutral-300 border-xl:b-0 border-xl:r-1 p-y-32 p-md:t-0 p-xl:y-0 p-md:l-32" v-bind="items[1]!" />
    <ReuseCrypto class="col-span-full col-xl:span-1 p-t-32 p-xl:t-0 p-xl:l-32" v-bind="items[2]!" :two-columns="true" />
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
