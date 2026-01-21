<script setup lang="ts">
defineProps<{ text: string }>()
</script>

<template>
  <section class="relative z-1 f-p-5xl">
    <div class="bg-green h-[200px] max-w-none pointer-events-none inset-x-0 top-0 absolute" />
    <div class="bg h-[600px] max-w-none pointer-events-none inset-x-0 top-[200px] absolute" />
    <div class="text-left text-md:center text-96 text-md:112 text-white" i-nimiq:duotone-safe-lock />
    <p class="text-white text-f-2xl text-left text-md:center max-w-36ch relative z-1 f-mt-md" v-html="text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')" />
  </section>
</template>

<style scoped>
.bg {
  background: linear-gradient(
    180deg,
    rgb(var(--nq-green)) 0%,
    rgba(var(--nq-green) / 0.991615) 11.79%,
    rgba(var(--nq-green) / 0.967585) 21.38%,
    rgba(var(--nq-green) / 0.9296) 29.12%,
    rgba(var(--nq-green) / 0.879348) 35.34%,
    rgba(var(--nq-green) / 0.818519) 40.37%,
    rgba(var(--nq-green) / 0.7488) 44.56%,
    rgba(var(--nq-green) / 0.671881) 48.24%,
    rgba(var(--nq-green) / 0.589452) 51.76%,
    rgba(var(--nq-green) / 0.5032) 55.44%,
    rgba(var(--nq-green) / 0.414815) 59.63%,
    rgba(var(--nq-green) / 0.325985) 64.66%,
    rgba(var(--nq-green) / 0.2384) 70.88%,
    rgba(var(--nq-green) / 0.153748) 78.62%,
    rgba(var(--nq-green) / 0.0737185) 88.21%,
    rgba(var(--nq-green) / 0) 100%
  );

  --uno: 'bg-neutral-100';
}
</style>
