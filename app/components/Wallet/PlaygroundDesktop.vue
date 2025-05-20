<script setup lang="ts">
</script>

<template>
  <div relative>
    <div max-w="$nq-max-width" stack mx-auto size-full>
      <!-- Ribbon fold -->
      <div self-start="!" justify-self-end="!" aria-hidden mr--18 mt-48 w-44 origin-bottom-right rotate--45 z-1 border="22 x-transparent t-0 #EC991C" />

      <WalletPlaygroundBackground />

      <div p="t-48 x-10 b-10" size-full z-1>
        <!-- iframe / you can remove bg-slate-200 once the iframe is implemented -->
        <div rounded-4 bg-slate-200 size-full />
      </div>

      <!-- Ribbon -->
      <div self-start="!" justify-self-end="!" mr--18 mt-11 w-max relative z-10>
        <AnimatedFloatingStars translate="-50%" absolute left="50%" top="50%" z-1 />
        <div bg="#E9B213" text="f-lg white" rounded="6 br-0" font-semibold ml-auto px-20 py-16 w-max relative z-2>
          Try live preview
        </div>
      </div>

      <!-- Selector -->
      <WalletActionSelector translate-y="[calc(50%-10px)]" />
    </div>

    <WalletCurrencies f-mt-lg />
  </div>
</template>

<style scoped>
@keyframes slide {
  0% {
    --uno: 'translate-x-0';
  }
  100% {
    --uno: 'translate-x-200';
  }
}

.slide {
  animation: slide var(--d) ease-out forwards;
}
</style>
