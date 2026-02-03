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
  <NuxtLink class="grid grid-cols-1 md:grid-cols-[1fr_3fr] grid-rows-[1fr_auto] gap-x-24 gap-y-8 md:gap-x-96 md:gap-y-32 lg:gap-y-128 bg-neutral-0 w-full p-6 md:p-10 lg:p-12 nq-hoverable" :to="data.link" target="_blank" external>
    <div class="flex flex-col">
      <Icon class="text-56 lg:ml-6" name="nimiq:logos-nimiq" />
      <h3 class="text-22 leading-[28.6px] lg:text-28 lg:leading-[36.4px] font-semibold mt-4 text-left lg:ml-6">
        {{ data.title }}
      </h3>
      <p class="mt-3 max-w-28ch lg:mx-auto text-16 leading-6 md:text-17 md:leading-[25.5px] lg:text-18 lg:leading-7 text-neutral-800 lg:ml-6">
        {{ data.description }}
      </p>
    </div>

    <div class="row-span-2 relative">
      <div class="w-[125%] h-[145%] border-[16px] border-solid border-neutral-400 rounded-6 inset-0 absolute">
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
