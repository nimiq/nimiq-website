<script setup lang="ts">
defineProps<{ headline: string, subline: string, link: string }>()
</script>

<template>
  <div flex="grow ~ col justify-center items-center" px-24 text-center z-10>
    <h1 nq-heading-lg text-neutral-0 whitespace-pre-line>
      {{ headline.replace(/\\L/g, '\n') }}
    </h1>
    <p text="neutral-800 f-xl" mt-24 max-w-prose whitespace-pre-line>
      {{ subline }}
    </p>
    <NuxtLink :to="link" external mt-40 nq-arrow nq-pill-lg nq-pill-blue target="_blank">
      Go to Wallet
    </NuxtLink>
  </div>

  <!-- Background effects -->
  <NuxtImg width="1600" height="900" src="/assets/images/gods-light.webp" alt="" loading="eager" priority m-0 size-full pointer-events-none inset-0 absolute blur-60 brightness-80 />
  <div bg-gradient="to-b from-darkblue/0 to-darkblue" m-0 op-80 pointer-events-none inset-0 absolute />
  <UiEmber left-100 top="77 sm:112 md:200" style="--scale: 1.05" />
  <UiEmber right-80 top-170 style="--scale: 0.7" />
  <UiEmber bottom="200 md:300" left="56vw md:30vw" style="--scale: 0.92" />
  <UiEmber bottom-260 right-32 style="--scale: 1" />
</template>
