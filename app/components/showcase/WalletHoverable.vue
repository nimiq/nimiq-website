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
  <NuxtLink class="grid grid-cols-1 grid-md:cols-[1fr_3fr] grid-rows-[1fr_auto] gap-x-24 gap-y-8 grid-md:gap-y-32 bg-neutral-0 w-full p-6 md:p-8 nq-hoverable" :to="data.link" target="_blank" external>
    <div class="flex flex-col">
      <Icon class="text-56 lg:ml-6" name="nimiq:logos-nimiq" />
      <h3 class="text-22/28.6 text-lg:28/36.4 font-semibold mt-4 text-left lg:ml-6">
        {{ data.title }}
      </h3>
      <p class="mt-3 max-w-28ch lg:mx-auto text-16/24 text-md:17/25.5 text-lg:18/28 text-neutral-800 lg:ml-6">
        {{ data.description }}
      </p>
    </div>

    <div class="row-span-2 relative">
      <div class="w-125% h-145% border-16 border-solid border-neutral-400 rounded-6 inset-0 absolute">
        <NuxtImg class="rounded-2 w-full" :src="data.screenshot" :alt="data.title" />
      </div>
    </div>

    <div class="flex flex-col">
      <p v-if="data.poweredByLabel" class="nq-label">
        {{ data.poweredByLabel }}
      </p>
      <ul v-if="data.poweredByLogos?.length" class="flex gap-4 mt-2 md:mt-3">
        <li v-for="({ logo }, i) in data.poweredByLogos" :key="i">
          <NuxtImg class="w-full h-6 md:h-8 object-contain" :src="logo" />
        </li>
      </ul>
    </div>
  </NuxtLink>
</template>
