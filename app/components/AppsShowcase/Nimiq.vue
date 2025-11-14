<script setup lang="ts">
import type { AppsShowcaseSliceNimiqsAppsPrimaryAppsItem } from '~~/prismicio-types'

const { items: _items } = defineProps<{ items: AppsShowcaseSliceNimiqsAppsPrimaryAppsItem[] }>()

const { showDrafts } = useRuntimeConfig().public
const items = computed(() => _items.filter(item => showDrafts || !item.draft))

const [DefineItem, Item] = createReusableTemplate<AppsShowcaseSliceNimiqsAppsPrimaryAppsItem>()
</script>

<template>
  <DefineItem v-slot="{ description, highlight, item, preview, title, link }">
    <PrismicLink
      outline="solid 1.5 neutral-300"
      p="32 md:40 lg:48 b-0!" rounded-8 of-hidden
      :field="link" grid="~ gap-x-48 lg:gap-x-80 md:rows-[auto_auto_1fr] md:cols-[221px_1fr]"
      :class="{
        'lg:rows-[repeat(4,auto)] lg:cols-1': !highlight,
      }"
    >
      <div v-if="item === 'Nimiq Pay'" size="48 lg:56" rounded-12 bg-gradient-gold grid="~ place-content-center" :class="{ 'lg:mx-auto': !highlight, 'max-xl:row-span-ful': highlight }">
        <div i-nimiq:logos-nimiq-pay-vertical-mono text="32 [#ededee]" />
      </div>
      <div v-else-if="item === 'CPL'" size="48 lg:56" i-nimiq:logos-cpl-tag :class="{ 'lg:mx-auto': !highlight, 'lg:ml-24': highlight }" />
      <div v-else-if="item === 'Nimiq Wallet'" text-56 i-nimiq:logos-nimiq :class="{ 'lg:mx-auto': !highlight, 'lg:ml-24': highlight }" />
      <div v-else-if="item === 'Multisig Wallet'" text-56 i-nimiq:logos-multisig :class="{ 'lg:mx-auto': !highlight, 'lg:ml-24': highlight }" />
      <h3 text="22/28.6 lg:28/36.4" font-semibold mt-16 :class="!highlight ? 'lg:text-center' : 'text-left lg:ml-24'">
        {{ title }}
      </h3>
      <p mt-12 max-w-28ch lg:mx-auto text="16/24 md:17/25.5 lg:18/28 neutral-800" :class="{ 'lg:text-center': !highlight, 'lg:ml-24': highlight }">
        {{ description }}
      </p>
      <div grid="~ place-content-center" mb-32 rounded-full size-32 bg-gradient-blue max-md:mt-12 md:hidden>
        <div i-nimiq:chevron-right text="9 white" />
      </div>
      <div
        :class="{
          'max-md:mr--128 md:ml-16': item === 'CPL',
          'max-md:mr--128 mr--128': item === 'Nimiq Wallet' || item === 'Multisig Wallet',
          'md:max-w-245': item === 'Nimiq Pay',
          'lg:mt-40 md:row-span-full md:col-start-2 lg:row-span-1 lg:col-start-1 md:mx-auto': !highlight,
          'md:row-span-full md:col-start-2 lg:h-490 lg:mb--120 lg:ml-auto lg:w-640': highlight }"
        h-196
      >
        <ProxiedPrismicImage
          :field="preview"
          :class="{
            'max-xl:scale-155 scale-120 max-xl:transform-origin-top-left bottom--32 relative': item === 'Nimiq Wallet' || item === 'Multisig Wallet',
          }"
        />
      </div>
    </PrismicLink>
  </DefineItem>
    <ul grid="~ cols-1 lg:cols-2 gap-20 md:gap-22">
      <li v-for="(item, i) in items" :key="i" :class="{ 'lg:col-span-full': item.highlight }" style="--ring-color: transparent" bg="neutral-300 hocus:neutral-0" p-0 of-initial nq-hoverable isolate>
        <Item v-if="item.item !== 'Multisig Wallet'" v-bind="item" />
        <RibbonContainer v-else outline-transparent bg-transparent color="purple" label="New Release" var:top:25px icon="i-nimiq:verified-filled">
          <Item v-bind="item" w-full />
        </RibbonContainer>
      </li>
    </ul>
</template>
