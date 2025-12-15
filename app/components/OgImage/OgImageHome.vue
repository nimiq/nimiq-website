<script setup lang="ts">
const { title = 'The World\'s Most Accepted Crypto' } = defineProps<{ title?: string, subline?: string }>()
</script>

<template>
  <div class="bg-[#EEEEEF] flex flex-col h-full w-full justify-center" style="font-family: 'Mulish'">
    <img src="/assets/og-images/og-background-home.jpg" alt="Background" class="h-full w-full left-0 top-0 absolute">
    <div class="flex h-full items-start justify-start">
      <div class="mt-12 px-8 pt-16 flex flex-col h-full w-full items-center">
        <h1 class="text-[64px] text-[#fff] lh-[1] font-bold text-center text-left">
          {{ title }}
        </h1>
        <p v-if="subline" class="text-[40px] text-[#fff] lh-none text-center text-left opacity-80">
          {{ subline }}
        </p>
      </div>
    </div>
  </div>
</template>
