<script setup lang="ts">
import type { AppsShowcaseSliceNimiqsAppsPrimaryAppsItem } from '~~/prismicio-types'

defineProps<{ items: AppsShowcaseSliceNimiqsAppsPrimaryAppsItem[] }>()
</script>

<template>
  <ul grid="~ cols-1 lg:cols-2 gap-20 md:gap-22">
    <li
      v-for="({ description, highlight, item, preview, title, link }, i) in items" :key="i" :class="{ 'lg:col-span-full': highlight }"
    >
      <PrismicLink internal-component="a" p="32 md:40 lg:48 b-0" :field="link" of-hidden nq-hoverable bg="neutral-300 hocus:neutral-0" style="--ring-color: transparent" grid="~ gap-x-48 lg:gap-x-80 md:rows-[auto_auto_1fr] md:cols-[221px_1fr]" :class="{ 'lg:rows-[repeat(4,auto)] lg:cols-1': !highlight }">
        <div v-if="item === 'Nimiq Pay'" size="48 lg:56" rounded-12 bg-gradient-gold grid="~ place-content-center" :class="{ 'lg:mx-auto': !highlight, 'max-xl:row-span-ful': highlight }">
          <div i-nimiq:logos-nimiq-pay-vertical-mono text="32 [#ededee]" />
        </div>
        <div v-else-if="item === 'CPL'" size="48 lg:56" i-nimiq:logos-cpl-tag :class="{ 'lg:mx-auto': !highlight, 'lg:ml-24': highlight }" />
        <div v-else-if="item === 'Nimiq Wallet'" text-56 i-nimiq:logos-nimiq :class="{ 'lg:mx-auto': !highlight, 'lg:ml-24': highlight }" />
        <h3 text="22/28.6 lg:28/36.4" mt-16 font-semibold :class="!highlight ? 'lg:text-center' : 'text-left lg:ml-24'">
          {{ title }}
        </h3>
        <p mt-12 max-w-28ch lg:mx-auto text="16/24 md:17/25.5 lg:18/28 neutral-800" :class="{ 'lg:text-center': !highlight, 'lg:ml-24': highlight }">
          {{ description }}
        </p>
        <div grid="~ place-content-center" mb-32 size-32 rounded-full bg-gradient-blue max-md:mt-12 md:hidden>
          <div i-nimiq:chevron-right text="9 white" />
        </div>
        <div h-196 :class="{ 'max-md:mr--128 md:ml-16': item === 'CPL', 'max-md:mr--128': item === 'Nimiq Wallet', 'md:max-w-245': item === 'Nimiq Pay', 'lg:mt-40 md:row-span-full md:col-start-2 lg:row-span-1 lg:col-start-1': !highlight, 'md:row-span-full md:col-start-2 lg:h-490 lg:mb--68': highlight }" md:mx-auto>
          <NuxtImg :src="$prismic.asImageSrc(preview)!" :class="{ 'max-xl:scale-155 max-xl:transform-origin-top-left': item === 'Nimiq Wallet' }" />
        </div>
      </PrismicLink>
    </li>
  </ul>
</template>
