<script setup lang="ts">
interface Organization { logo: string, url: string }
const { title, description, link, organizations } = defineProps<{ title: string, description?: string, link?: { href: string, label?: string }, organizations?: Organization[] }>()

const mapVisible = ref(false)
onMounted(() => {
  // Small delay for fade-in animation after hydration
  setTimeout(() => mapVisible.value = true, 100)
})
const isExternal = computed(() => link?.href?.startsWith('http'))
</script>

<template>
  <div class="flex-grow flex flex-col justify-center z-10 [&>*]:md:mx-auto">
    <h1 class="nq-heading-lg text-white text-balance">
      {{ title }}
    </h1>
    <p v-if="description" class="text-lg md:text-xl" style="color: oklch(0.5889 0.0335 281.21)">
      {{ description }}
    </p>
    <NuxtLink v-if="link" class="mt-40 nq-arrow nq-pill-lg nq-pill-blue" :to="link.href" :external="isExternal" :target="isExternal ? '_blank' : undefined">
      {{ link.label || 'Create Wallet' }}
    </NuxtLink>
    <div v-if="organizations?.length" class="mt-80 flex flex-col md:flex-row flex-wrap gap-32 justify-start md:justify-center items-start md:items-center">
      <span class="text-neutral-700 nq-label">Works with</span>
      <div class="flex flex-wrap gap-32 justify-start md:justify-center items-center">
        <NuxtLink v-for="(item, i) in organizations" :key="i" class="opacity-85 hocus:opacity-100 transition-opacity" :to="item.url" :class="item.url?.startsWith('https://naka.com') ? 'h-[26px]' : 'h-32'" target="_blank">
          <NuxtImg class="h-full w-auto" :src="item.logo" />
        </NuxtLink>
      </div>
    </div>
  </div>

  <!-- Background effects -->
  <NuxtImg class="m-0 size-full pointer-events-none inset-0 absolute blur-[60px] brightness-[0.8]" width="1600" height="900" src="/assets/images/gods-light.webp" alt="Nimiq Gods Rays Background" loading="eager" priority />
  <div class="bg-gradient-to-b from-darkblue/0 to-darkblue m-0 opacity-80 pointer-events-none inset-0 absolute" />
  <UiEmber class="left-[100px] top-[77px] sm:top-[112px] md:top-[200px]" style="--scale: 1.05" />
  <UiEmber class="right-20 top-[170px]" style="--scale: 0.7" />
  <UiEmber class="bottom-[302px] md:bottom-[430px] left-[56vw] md:left-[30vw]" style="--scale: 0.92" />
  <UiEmber class="bottom-[460px] right-8" style="--scale: 1" />

  <!-- Map -->
  <div class="mt-[120px] max-w-none w-full flex justify-center">
    <div class="map-container w-[80%] pt-[23px] min-w-[680px] relative z-[1]">
      <div class="ellipse-shape rounded-[50%] bg-neutral-300 shrink-0 h-[var(--height)] w-[var(--width)] -translate-x-1/2 left-1/2 top-0 absolute -z-[1] mix-blend-multiply blur-[20px]" />
      <div class="ellipse-shape rounded-[50%] shrink-0 h-[var(--height)] w-[var(--width)] -translate-x-1/2 left-1/2 top-0 absolute -z-[2] blur-[120px]" style="background: radial-gradient(100% 100% at 100% 100%, #0b7ff2 0%, #0ca6fe 100%)" />
      <div class="ellipse-shape rounded-[50%] bg-white shrink-0 h-[var(--height)] w-[var(--width)] -translate-x-1/2 left-1/2 top-0 absolute -z-[1]" />
      <NuxtImg src="/assets/images/home-hero/map.svg" alt="World map" width="1440" height="400" class="w-full h-auto transition-opacity duration-300" :class="mapVisible ? 'opacity-100' : 'opacity-0'" />
    </div>
  </div>
</template>

<style scoped>
.map-container {
  --width: calc(2018 * (100vw / 1440));
  --height: calc(1098 * (100vw / 1440));
  @media (max-width: 1152px) {
    --width: calc(2411 * (100vw / 1152));
    --height: calc(2183 * (100vw / 1152));
  }
  @media (max-width: 768px) {
    --width: 1048px;
    --height: 605px;
  }
}
</style>
