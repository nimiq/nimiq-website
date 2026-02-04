<script setup lang="ts">
import { createReusableTemplate } from '@vueuse/core'

const { apps } = defineProps<{ apps: AppItem[] }>()

interface AppItem { highlight?: boolean, title: string, description: string, preview: string, item: string, link: string }

const highlightedApps = computed(() => apps.filter(app => app.highlight))
const regularApps = computed(() => apps.filter(app => !app.highlight))

const [DefineSmallCard, SmallCard] = createReusableTemplate<{ app: AppItem }>()
const [DefineLargeCard, LargeCard] = createReusableTemplate<{ app: AppItem }>()
</script>

<template>
  <!-- Define small card template -->
  <DefineSmallCard v-slot="{ app }">
    <NuxtLink class="outline outline-[1.5px] outline-neutral-300 p-[32px] md:p-[40px] lg:p-[48px] !pb-0 rounded-lg overflow-hidden grid gap-x-[48px] lg:gap-x-[80px] md:grid-rows-[auto_auto_1fr] md:grid-cols-[221px_1fr] lg:grid-rows-[repeat(4,auto)] lg:grid-cols-1" :to="app.link">
      <!-- Icon -->
      <div v-if="app.item === 'Nimiq Pay'" class="size-[48px] lg:size-[56px] rounded-xl bg-gradient-to-br from-gold to-gold-1100 grid place-content-center lg:mx-auto">
        <Icon class="text-[32px] text-[#ededee]" name="nimiq:logos-nimiq-pay-vertical-mono" />
      </div>
      <Icon v-else-if="app.item === 'CPL'" class="text-[48px] lg:mx-auto lg:text-[56px]" name="nimiq:logos-cpl-tag" />

      <!-- Title -->
      <h3 class="text-[22px]/[28.6px] lg:text-[28px]/[36.4px] font-semibold mt-4 lg:text-center">
        {{ app.title }}
      </h3>

      <!-- Description -->
      <p class="mt-3 max-w-[28ch] lg:mx-auto text-[16px]/[24px] md:text-[17px]/[25.5px] lg:text-[18px]/[28px] text-neutral-800 lg:text-center">
        {{ app.description }}
      </p>

      <!-- Mobile arrow -->
      <div class="grid place-content-center mb-[32px] rounded-full bg-gradient-to-br from-blue to-blue-1100 size-[32px] max-md:mt-3 md:hidden">
        <Icon class="text-[9px] text-white" name="nimiq:chevron-right" />
      </div>

      <!-- Preview image -->
      <div
        class="h-[196px] md:mx-auto lg:mt-[40px] lg:row-span-1 md:row-span-full lg:col-start-1 md:col-start-2" :class="{
          'max-md:-mr-[128px] md:ml-[16px]': app.item === 'CPL',
          'md:max-w-[245px]': app.item === 'Nimiq Pay',
        }"
      >
        <img :src="app.preview" :alt="app.title" loading="lazy">
      </div>
    </NuxtLink>
  </DefineSmallCard>

  <!-- Define large card template -->
  <DefineLargeCard v-slot="{ app }">
    <NuxtLink class="outline outline-[1.5px] outline-neutral-300 p-[32px] md:p-[40px] lg:p-[48px] !pb-0 grid gap-x-[48px] lg:gap-x-[80px] md:grid-rows-[auto_auto_1fr] md:grid-cols-[221px_1fr] rounded-lg w-full overflow-hidden" :to="app.link">
      <!-- Icon -->
      <Icon v-if="app.item === 'Nimiq Wallet'" class="text-[56px] lg:ml-6" name="nimiq:logos-nimiq" />
      <Icon v-else-if="app.item === 'Multisig Wallet'" class="text-[56px] lg:ml-6" name="nimiq:logos-multisig" />

      <!-- Title -->
      <h3 class="text-[22px]/[28.6px] lg:text-[28px]/[36.4px] font-semibold mt-4 text-left lg:ml-6">
        {{ app.title }}
      </h3>

      <!-- Description -->
      <p class="mt-3 max-w-[28ch] text-[16px]/[24px] md:text-[17px]/[25.5px] lg:text-[18px]/[28px] text-neutral-800 lg:ml-6">
        {{ app.description }}
      </p>

      <!-- Mobile arrow -->
      <div class="grid place-content-center mb-[32px] rounded-full bg-gradient-to-br from-blue to-blue-1100 size-[32px] max-md:mt-3 md:hidden">
        <Icon class="text-[9px] text-white" name="nimiq:chevron-right" />
      </div>

      <!-- Preview image -->
      <div class="h-[196px] lg:-mb-[120px] lg:ml-auto md:row-span-full md:col-start-2 lg:h-[490px] lg:w-[640px]" :class="{ 'max-md:-mr-[128px] -mr-[128px]': app.item === 'Nimiq Wallet' || app.item === 'Multisig Wallet' }">
        <img :src="app.preview" :alt="app.title" loading="lazy" :class="{ 'max-xl:scale-[1.55] scale-[1.2] max-xl:origin-top-left relative bottom-[-32px]': app.item === 'Nimiq Wallet' || app.item === 'Multisig Wallet' }">
      </div>
    </NuxtLink>
  </DefineLargeCard>

  <!-- Grid with apps -->
  <ul class="grid grid-cols-1 lg:grid-cols-2 gap-[20px] md:gap-[22px]" f-px-sm>
    <!-- Regular apps (small cards) -->
    <li v-for="app in regularApps" :key="app.item" class="bg-neutral-300 hocus:bg-neutral-0 p-0 overflow-visible isolate nq-hoverable" style="--ring-color: transparent">
      <SmallCard :app />
    </li>

    <!-- Highlighted apps (large cards) -->
    <li v-for="app in highlightedApps" :key="app.item" class="bg-neutral-300 hocus:bg-neutral-0 p-0 overflow-visible isolate nq-hoverable lg:col-span-full" style="--ring-color: transparent">
      <UiRibbonContainer v-if="app.item === 'Multisig Wallet'" class="outline-transparent bg-transparent" color="purple" label="New Release" icon="nimiq:verified-filled" style="--top: 25px">
        <LargeCard :app />
      </UiRibbonContainer>
      <LargeCard v-else :app />
    </li>
  </ul>
</template>
