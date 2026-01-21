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
    <NuxtLink class="outline-solid outline-1.5 outline-neutral-300 p-8 p-md:40 p-lg:48 p-b-0! rounded-2 of-hidden grid gap-x-12 grid-lg:gap-x-20 grid-md:rows-[auto_auto_1fr] grid-md:cols-[221px_1fr] grid-lg:rows-[repeat(4,auto)] grid-lg:cols-1" :to="app.link">
      <!-- Icon -->
      <div v-if="app.item === 'Nimiq Pay'" class="size-12 size-lg:56 rounded-3 bg-gradient-gold grid grid-place-content-center lg:mx-auto">
        <Icon class="text-32 text-[#ededee]" name="nimiq:logos-nimiq-pay-vertical-mono" />
      </div>
      <Icon v-else-if="app.item === 'CPL'" class="size-12 lg:mx-auto lg:size-14" name="nimiq:logos-cpl-tag" />

      <!-- Title -->
      <h3 class="text-22/28.6 text-lg:28/36.4 font-semibold mt-4 lg:text-center">
        {{ app.title }}
      </h3>

      <!-- Description -->
      <p class="mt-3 max-w-28ch lg:mx-auto text-16/24 text-md:17/25.5 text-lg:18/28 text-neutral-800 lg:text-center">
        {{ app.description }}
      </p>

      <!-- Mobile arrow -->
      <div class="grid grid-place-content-center mb-8 rounded-full bg-gradient-blue size-8 max-md:mt-3 md:hidden">
        <Icon class="text-9 text-white" name="nimiq:chevron-right" />
      </div>

      <!-- Preview image -->
      <div
        class="h-[196px] md:mx-auto lg:mt-10 lg:row-span-1 md:row-span-full lg:col-start-1 md:col-start-2" :class="{
          'max-md:-mr-32 md:ml-4': app.item === 'CPL',
          'md:max-w-[245px]': app.item === 'Nimiq Pay',
        }"
      >
        <NuxtImg :src="app.preview" :alt="app.title" />
      </div>
    </NuxtLink>
  </DefineSmallCard>

  <!-- Define large card template -->
  <DefineLargeCard v-slot="{ app }">
    <NuxtLink class="outline-solid outline-1.5 outline-neutral-300 p-8 p-md:40 p-lg:48 p-b-0! grid gap-x-12 grid-lg:gap-x-20 grid-md:rows-[auto_auto_1fr] grid-md:cols-[221px_1fr] rounded-2 w-full of-hidden" :to="app.link">
      <!-- Icon -->
      <Icon v-if="app.item === 'Nimiq Wallet'" class="text-56 lg:ml-6" name="nimiq:logos-nimiq" />
      <Icon v-else-if="app.item === 'Multisig Wallet'" class="text-56 lg:ml-6" name="nimiq:logos-multisig" />

      <!-- Title -->
      <h3 class="text-22/28.6 text-lg:28/36.4 font-semibold mt-4 text-left lg:ml-6">
        {{ app.title }}
      </h3>

      <!-- Description -->
      <p class="mt-3 max-w-28ch text-16/24 text-md:17/25.5 text-lg:18/28 text-neutral-800 lg:ml-6">
        {{ app.description }}
      </p>

      <!-- Mobile arrow -->
      <div class="grid grid-place-content-center mb-8 rounded-full bg-gradient-blue size-8 max-md:mt-3 md:hidden">
        <Icon class="text-9 text-white" name="nimiq:chevron-right" />
      </div>

      <!-- Preview image -->
      <div class="h-[196px] lg:-mb-[120px] lg:ml-auto md:row-span-full md:col-start-2 lg:h-[490px] lg:w-[640px]" :class="{ 'max-md:-mr-32 -mr-32': app.item === 'Nimiq Wallet' || app.item === 'Multisig Wallet' }">
        <NuxtImg :src="app.preview" :alt="app.title" :class="{ 'max-xl:scale-155 scale-120 max-xl:transform-origin-top-left -bottom-8 relative': app.item === 'Nimiq Wallet' || app.item === 'Multisig Wallet' }" />
      </div>
    </NuxtLink>
  </DefineLargeCard>

  <!-- Grid with apps -->
  <ul class="grid grid-cols-1 grid-lg:cols-2 gap-5 grid-md:gap-[22px] f-px-sm">
    <!-- Regular apps (small cards) -->
    <li v-for="app in regularApps" :key="app.item" class="bg-neutral-300 bg-hocus:neutral-0 p-0 of-initial isolate nq-hoverable" style="--ring-color: transparent">
      <SmallCard :app />
    </li>

    <!-- Highlighted apps (large cards) -->
    <li v-for="app in highlightedApps" :key="app.item" class="bg-neutral-300 bg-hocus:neutral-0 p-0 of-initial isolate nq-hoverable lg:col-span-full" style="--ring-color: transparent">
      <UiRibbonContainer v-if="app.item === 'Multisig Wallet'" color="purple" label="New Release" icon="nimiq:verified-filled" var:top:25px>
        <LargeCard :app />
      </UiRibbonContainer>
      <LargeCard v-else :app />
    </li>
  </ul>
</template>
