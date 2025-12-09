<script setup lang="ts">
import { createReusableTemplate } from '@vueuse/core'

interface AppItem { highlight?: boolean, title: string, description: string, preview: string, item: string, link: string, draft?: boolean }
interface BannerItem { headline: string, subline?: string, link?: string }

const { apps } = defineProps<{ apps: AppItem[], banner?: { items: BannerItem[] } }>()

const { showDrafts } = useRuntimeConfig().public
const visibleApps = computed(() => apps.filter(app => showDrafts || !app.draft))
const highlightedApps = computed(() => visibleApps.value.filter(app => app.highlight))
const regularApps = computed(() => visibleApps.value.filter(app => !app.highlight))

const [DefineSmallCard, SmallCard] = createReusableTemplate<{ app: AppItem }>()
const [DefineLargeCard, LargeCard] = createReusableTemplate<{ app: AppItem }>()
</script>

<template>
  <!-- Define small card template -->
  <DefineSmallCard v-slot="{ app }">
    <NuxtLink
      :to="app.link"
      outline="solid 1.5 neutral-300" p="32 md:40 lg:48 b-0!" rounded-8 of-hidden
      grid="~ gap-x-48 lg:gap-x-80 md:rows-[auto_auto_1fr] md:cols-[221px_1fr] lg:rows-[repeat(4,auto)] lg:cols-1"
    >
      <!-- Icon -->
      <div v-if="app.item === 'Nimiq Pay'" size="48 lg:56" rounded-12 bg-gradient-gold grid="~ place-content-center" lg:mx-auto>
        <div i-nimiq:logos-nimiq-pay-vertical-mono text="32 [#ededee]" />
      </div>
      <div v-else-if="app.item === 'CPL'" size="48 lg:56" i-nimiq:logos-cpl-tag lg:mx-auto />

      <!-- Title -->
      <h3 text="22/28.6 lg:28/36.4" font-semibold mt-16 lg:text-center>
        {{ app.title }}
      </h3>

      <!-- Description -->
      <p mt-12 max-w-28ch lg:mx-auto text="16/24 md:17/25.5 lg:18/28 neutral-800" lg:text-center>
        {{ app.description }}
      </p>

      <!-- Mobile arrow -->
      <div grid="~ place-content-center" mb-32 rounded-full size-32 bg-gradient-blue max-md:mt-12 md:hidden>
        <div i-nimiq:chevron-right text="9 white" />
      </div>

      <!-- Preview image -->
      <div
        :class="{
          'max-md:mr--128 md:ml-16': app.item === 'CPL',
          'md:max-w-245': app.item === 'Nimiq Pay',
        }"
        h-196 md:mx-auto lg:mt-40 lg:row-span-1 md:row-span-full lg:col-start-1 md:col-start-2
      >
        <NuxtImg :src="app.preview" :alt="app.title" h-full w-auto />
      </div>
    </NuxtLink>
  </DefineSmallCard>

  <!-- Define large card template -->
  <DefineLargeCard v-slot="{ app }">
    <NuxtLink
      :to="app.link"
      outline="solid 1.5 neutral-300" p="32 md:40 lg:48 b-0!"
      grid="~ gap-x-48 lg:gap-x-80 md:rows-[auto_auto_1fr] md:cols-[221px_1fr]"
      rounded-8 w-full of-hidden
    >
      <!-- Icon -->
      <div v-if="app.item === 'Nimiq Wallet'" text-56 i-nimiq:logos-nimiq lg:ml-24 />
      <div v-else-if="app.item === 'Multisig Wallet'" text-56 i-nimiq:logos-multisig lg:ml-24 />

      <!-- Title -->
      <h3 text="22/28.6 lg:28/36.4" font-semibold mt-16 text-left lg:ml-24>
        {{ app.title }}
      </h3>

      <!-- Description -->
      <p mt-12 max-w-28ch text="16/24 md:17/25.5 lg:18/28 neutral-800" lg:ml-24>
        {{ app.description }}
      </p>

      <!-- Mobile arrow -->
      <div grid="~ place-content-center" mb-32 rounded-full size-32 bg-gradient-blue max-md:mt-12 md:hidden>
        <div i-nimiq:chevron-right text="9 white" />
      </div>

      <!-- Preview image -->
      <div
        h-196 lg:mb--120 lg:ml-auto md:row-span-full md:col-start-2 lg:h-490 lg:w-640
        :class="{ 'max-md:mr--128 mr--128': app.item === 'Nimiq Wallet' || app.item === 'Multisig Wallet' }"
      >
        <NuxtImg
          :src="app.preview" :alt="app.title"
          :class="{ 'max-xl:scale-155 scale-120 max-xl:transform-origin-top-left bottom--32 relative': app.item === 'Nimiq Wallet' || app.item === 'Multisig Wallet' }"
        />
      </div>
    </NuxtLink>
  </DefineLargeCard>

  <!-- Grid with apps and banner -->
  <ul grid="~ cols-1 lg:cols-2 gap-20 md:gap-22" f-px-sm>
    <!-- Regular apps (small cards) -->
    <li
      v-for="app in regularApps" :key="app.item"
      style="--ring-color: transparent"
      bg="neutral-300 hocus:neutral-0" p-0 of-initial isolate nq-hoverable
    >
      <SmallCard :app />
    </li>

    <!-- Highlighted apps (large cards) -->
    <li
      v-for="app in highlightedApps" :key="app.item"

      style="--ring-color: transparent"
      bg="neutral-300 hocus:neutral-0" p-0 of-initial isolate nq-hoverable lg:col-span-full
    >
      <UiRibbonContainer v-if="app.item === 'Multisig Wallet'" color="purple" label="New Release" icon="i-nimiq:verified-filled" var:top:25px>
        <LargeCard :app />
      </UiRibbonContainer>
      <LargeCard v-else :app />
    </li>

    <!-- Banner card (full width) -->
    <li v-if="banner?.items?.[0]" p-0 lg:col-span-full>
      <UiBannerViewAllApps :headline="banner.items[0].headline" :subline="banner.items[0].subline" :link="banner.items[0].link" />
    </li>
  </ul>
</template>
