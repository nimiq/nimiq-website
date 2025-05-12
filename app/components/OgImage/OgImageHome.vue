<script setup lang="ts">
const { title = 'The World’s Most Accepted Crypto' } = defineProps<{ title: string, subline?: string }>()
</script>

<template>
  <div class="h-full w-full flex flex-col justify-center bg-[#EEEEEF]" style="font-family: 'Mulish'">
    <img src="/assets/og-images/og-background-home.jpg" alt="Background" class="absolute left-0 top-0 h-full w-full">
    <div class="h-full flex items-start justify-start">
      <div class="mt-12 h-full w-full flex flex-col items-center px-8 pt-16">
        <h1 class="text-center text-left text-[64px] text-[#fff] font-bold lh-[1]">
          {{ title }}
        </h1>
        <p v-if="subline" class="text-center text-left text-[40px] text-[#fff] lh-none opacity-80">
          {{ subline }}
        </p>
      </div>
    </div>
  </div>
</template>
