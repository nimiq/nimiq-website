<script setup lang="ts">
</script>

<template>
  <div relative>
    <WalletActionSelector absolute top-30 w-max sm:hidden left="50%" translate="-50%" />

    <div grid="~ cols-1 rows-1 *:row-span-full *:col-span-full *:self-center *:justify-self-center" nq-wide size-full max-w="$nq-max-width">
      <!-- Ribbon fold -->
      <div self-start="!" justify-self-end="!" aria-hidden z-1 mr--18 mt-48 w-44 origin-bottom-right rotate--45 max-sm:hidden border="22 x-transparent t-0 #EC991C" />

      <WalletPlaygroundBackground />

      <div p="t-48 x-10 b-10" z-1 size-full>
        <!-- iframe / you can remove bg-slate-200 once the iframe is implemented -->
        <div max-sm:aspect="9/16" max-sm:h="[calc(100%-80px)]" size-full rounded-4 bg-slate-200 />
      </div>

      <!-- Ribbon -->
      <div self-start="!" justify-self-end="!" relative z-10 mr--18 mt-11 w-max max-sm:hidden>
        <!-- <AnimatedFloatingStars translate="-50%" absolute left="50%" top="50%" z-1 /> -->
        <div bg="#E9B213" text="lg white" rounded="6 br-0" relative z-2 ml-auto w-max px-20 py-16 font-semibold>
          Try live preview
        </div>
      </div>

      <!-- Selector -->
      <WalletActionSelector max-sm:hidden translate-y="[calc(50%-10px)]" />
    </div>
    <div flex="~ col gap-20 justify-center items-center" nq-mt-48>
      <div flex="~ gap-12 " text="white/40 34">
        <div i-nimiq:logos-nimiq-mono title="NIM" />
        <div i-nimiq:logos-bitcoin-mono title="BTC" />
        <div i-nimiq:logos-usdc-mono title="USDC" />
        <div i-nimiq:logos-usdt-mono title="USDT" />
      </div>
      <h2 nq-label text="white/60 xs center">
        Supported currencies
      </h2>
    </div>
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
