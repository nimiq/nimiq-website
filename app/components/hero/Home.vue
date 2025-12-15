<script setup lang="ts">
interface Organization { logo: string, url: string }
defineProps<{ headline: string, subheadline?: string, link?: string, organizations?: Organization[] }>()

const showMap = ref(false)
onMounted(() => showMap.value = true)
</script>

<template>
  <div flex="grow ~ col justify-center" z-10 children:md:mx-auto>
    <h1 nq-heading-lg text-neutral-0>
      {{ headline }}
    </h1>
    <p v-if="subheadline" text="neutral-800 f-xl">
      {{ subheadline }}
    </p>
    <NuxtLink v-if="link" :to="link" mt-40 nq-arrow nq-pill-lg nq-pill-blue>
      Go to Wallet
    </NuxtLink>
    <div v-if="organizations?.length" mt-80 flex="~ col md:row wrap" gap-32 justify="start md:center" items="start md:center">
      <span text-neutral-700 nq-label>Works with</span>
      <div flex="~ wrap" gap-32 justify="start md:center" items-center>
        <NuxtLink v-for="(item, i) in organizations" :key="i" :to="item.url" :class="item.url?.startsWith('https://naka.com') ? 'h-26' : 'h-32'" op="85 hocus:100" transition-opacity target="_blank">
          <NuxtImg :src="item.logo" h-full w-auto />
        </NuxtLink>
      </div>
    </div>
  </div>

  <!-- Background effects -->
  <NuxtImg width="1600" height="900" src="/assets/images/gods-light.webp" alt="Nimiq Gods Rays Background" loading="eager" priority m-0 size-full pointer-events-none inset-0 absolute blur-60 brightness-80 />
  <div bg-gradient="to-b from-darkblue/0 to-darkblue" m-0 op-80 pointer-events-none inset-0 absolute />
  <UiEmber left-100 top="77 sm:112 md:200" style="--scale: 1.05" />
  <UiEmber right-80 top-170 style="--scale: 0.7" />
  <UiEmber bottom="302 md:430" left="56vw md:30vw" style="--scale: 0.92" />
  <UiEmber bottom-460 right-32 style="--scale: 1" />

  <!-- Map -->
  <div mt-120 max-w-none w-full flex="~ justify-center">
    <div class="map-container" w="80%" pt-23 min-w-680 relative z-1>
      <div class="ellipse-shape" bg-neutral-300 z--1 mix-blend-multiply blur-20 />
      <div class="ellipse-shape" z--2 blur-120 style="background: radial-gradient(100% 100% at 100% 100%, #0b7ff2 0%, #0ca6fe 100%)" />
      <div class="ellipse-shape" bg-white z--1 />
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
  .ellipse-shape {
    --uno: 'absolute left-50% translate-x--50% w-$width h-$height rounded-50% top-0 shrink-0';
  }
}
.fade-enter-active {
  transition: opacity 0.3s var(--nq-ease);
}
.fade-enter-from {
  opacity: 0;
}
</style>
