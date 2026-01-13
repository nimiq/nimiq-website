<script setup lang="ts">
interface ZigZagItem { headline: string, description?: string, image?: string, label?: string, buttonLabel?: string, buttonHref?: string, secondaryButtonLabel?: string, secondaryButtonLabelMobile?: string, secondaryButtonHref?: string }
interface Props { items: ZigZagItem[] }

defineProps<Props>()
</script>

<template>
  <ul>
    <li
      v-for="(item, i) in items" :key="i"
      grid="~ cols-1 gap-x-96 md:cols-2 md:items-center" border="b neutral-300 last:none"
      p="first:pb-64 first:md:pb-96 py-64 md:py-96 last:pt-64 last:md:pt-96 md:odd:r-32 md:even:l-32"
    >
      <NuxtImg v-if="item.image" :src="item.image" ring="1.5 neutral-400" aspect="1.39 md:1.48 lg:initial" rounded-6 pointer-events-none shadow object-cover :class="{ 'md:col-start-2': i % 2 === 0 }" />

      <div py-32 col-start-1 row-start-2 lg:py-96 md:py-80 xl:py-144 md:flex-1 md:row-start-1 md:items-center :class="{ 'xl:pl-32 xl:pr-0': i % 2 === 0, 'xl:pr-32 xl:pl-0 md:col-start-2': i % 2 !== 0 }">
        <h3 text="f-2xl" font-bold>
          {{ item.headline }}
        </h3>
        <p v-if="item.label" text-12 f-mt-2xs nq-label>
          {{ item.label }}
        </p>
        <p v-if="item.description" nq-prose-compact f-mt-lg>
          {{ item.description }}
        </p>

        <div flex="~ gap-24 md:col lg:row" max-w-lg f-mt-sm>
          <NuxtLink v-if="item.buttonHref" :to="item.buttonHref" font-semibold nq-arrow nq-pill-lg nq-pill-blue>
            {{ item.buttonLabel }}
          </NuxtLink>
          <NuxtLink v-if="item.secondaryButtonHref" :to="item.secondaryButtonHref" un-text-blue font-semibold nq-arrow>
            <span class="max-md:hidden">{{ item.secondaryButtonLabel }}</span>
            <span class="md:hidden">{{ item.secondaryButtonLabelMobile || item.secondaryButtonLabel }}</span>
          </NuxtLink>
        </div>
      </div>
    </li>
  </ul>
</template>
