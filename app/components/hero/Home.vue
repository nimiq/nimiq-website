<script setup lang="ts">
interface Organization { logo: string, url: string }
const { title, description, link, organizations } = defineProps<{ title: string, description?: string, link?: { href: string, label?: string }, organizations?: Organization[] }>()

const showMap = ref(false)
onMounted(() => showMap.value = true)
const isExternal = computed(() => link?.href?.startsWith('http'))
</script>

<template>
  <div class="flex-grow flex flex-col flex-justify-center z-10" children:md:mx-auto>
    <h1 class="nq-heading-lg text-white">
      {{ title }}
    </h1>
    <p v-if="description" class="text-neutral-800 text-lg md:text-xl">
      {{ description }}
    </p>
    <NuxtLink v-if="link" class="mt-10 nq-arrow nq-pill-lg nq-pill-blue" :to="link.href" :external="isExternal" :target="isExternal ? '_blank' : undefined">
      {{ link.label || 'Go to Wallet' }}
    </NuxtLink>
    <div v-if="organizations?.length" class="mt-20 flex flex-col flex-md:row flex-wrap gap-8 justify-start justify-md:center items-start items-md:center">
      <span class="text-neutral-700 nq-label">Works with</span>
      <div class="flex flex-wrap gap-8 justify-start justify-md:center items-center">
        <NuxtLink v-for="(item, i) in organizations" :key="i" class="op-85 op-hocus:100 transition-opacity" :to="item.url" :class="item.url?.startsWith('https://naka.com') ? 'h-[26px]' : 'h-8'" target="_blank">
          <NuxtImg class="h-full w-auto" :src="item.logo" />
        </NuxtLink>
      </div>
    </div>
  </div>

  <!-- Background effects -->
  <NuxtImg class="m-0 size-full pointer-events-none inset-0 absolute blur-60 brightness-80" width="1600" height="900" src="/assets/images/gods-light.webp" alt="Nimiq Gods Rays Background" loading="eager" priority />
  <div class="bg-gradient-to-b from-darkblue/0 to-darkblue m-0 op-80 pointer-events-none inset-0 absolute" />
  <UiEmber class="left-[100px] top-[77px] top-sm:112 top-md:200" style="--scale: 1.05" />
  <UiEmber class="right-20 top-[170px]" style="--scale: 0.7" />
  <UiEmber class="bottom-[302px] bottom-md:430 left-56vw left-md:30vw" style="--scale: 0.92" />
  <UiEmber class="bottom-[460px] right-8" style="--scale: 1" />

  <!-- Map -->
  <div class="mt-[120px] max-w-none w-full flex flex-justify-center">
    <div class="map-container w-80% pt-[23px] min-w-[680px] relative z-1">
      <div class="ellipse-shape rounded-[50%] bg-neutral-300 shrink-0 h-[--height] w-[--width] translate-x--1/2 left-1/2 top-0 absolute z--1 mix-blend-multiply blur-20" />
      <div class="ellipse-shape rounded-[50%] shrink-0 h-[--height] w-[--width] translate-x--1/2 left-1/2 top-0 absolute z--2 blur-120" style="background: radial-gradient(100% 100% at 100% 100%, #0b7ff2 0%, #0ca6fe 100%)" />
      <div class="ellipse-shape rounded-[50%] bg-white shrink-0 h-[--height] w-[--width] translate-x--1/2 left-1/2 top-0 absolute z--1" />
      <Transition name="fade" appear>
        <NuxtImg v-if="showMap" src="/assets/images/home-hero/map.svg" alt="World map" />
      </Transition>
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
.fade-enter-active {
  transition: opacity 0.3s var(--nq-ease);
}
.fade-enter-from {
  opacity: 0;
}
</style>
