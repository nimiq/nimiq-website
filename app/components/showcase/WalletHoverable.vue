<script setup lang="ts">
interface WalletHover {
  title: string
  description: string
  screenshot: string
  link: string
  poweredByLabel?: string
  poweredByLogos?: { logo: string }[]
}

defineProps<{ data: WalletHover }>()
</script>

<template>
  <NuxtLink class="grid grid-cols-1 grid-md:cols-[1fr_3fr] grid-rows-[1fr_auto] grid-gap-x-96 grid-gap-y-32 grid-md:gap-y-128 bg-neutral-0 w-full f-p-lg nq-hoverable" :to="data.link" target="_blank" external>
    <div class="flex flex-col">
      <Icon class="text-56 lg:ml-24" name="nimiq:logos-nimiq" />
      <h3 class="text-22/28.6 text-lg:28/36.4 font-semibold mt-16 text-left lg:ml-24">
        {{ data.title }}
      </h3>
      <p class="mt-12 max-w-28ch lg:mx-auto text-16/24 text-md:17/25.5 text-lg:18/28 text-neutral-800 lg:ml-24">
        {{ data.description }}
      </p>
    </div>

    <div class="row-span-2 relative">
      <div class="w-125% h-145% border-16 border-solid border-neutral-400 rounded-24 inset-0 absolute">
        <NuxtImg class="rounded-8 w-full" :src="data.screenshot" :alt="data.title" />
      </div>
    </div>

    <div class="flex flex-col">
      <p v-if="data.poweredByLabel" class="nq-label">
        {{ data.poweredByLabel }}
      </p>
      <ul v-if="data.poweredByLogos?.length" class="flex flex-gap-16 f-mt-xs">
        <li v-for="({ logo }, i) in data.poweredByLogos" :key="i">
          <NuxtImg class="w-full f-h-24/32 object-contain" :src="logo" />
        </li>
      </ul>
    </div>
  </NuxtLink>
</template>
