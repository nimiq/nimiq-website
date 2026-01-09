<script setup lang="ts">
const { src, poster } = defineProps<{ src: string, poster?: string }>()

const media = ref<HTMLDivElement>()
const { top } = useElementBounding(media)
const { y } = useWindowScroll()

const rotateVar = useCssVar('--rotate-x', media, { initialValue: '30deg' })
const translateY = useCssVar('--translate-y', media, { initialValue: '-100px' })

watch([top, y], () => {
  rotateVar.value = y.value < top.value ? `${(1 - y.value / top.value) * 30}deg` : '0deg'
  translateY.value = y.value < top.value ? `${y.value / top.value * 100 - 100}px` : '0'
}, { immediate: true })

const isYouTube = computed(() => src.includes('youtube.com') || src.includes('youtu.be'))
const embedUrl = computed(() => {
  if (!isYouTube.value)
    return src
  const videoId = src.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/)?.[1]
  return videoId ? `https://www.youtube.com/embed/${videoId}` : src
})
</script>

<template>
  <!-- eslint-disable-next-line vue/no-restricted-html-elements - section required to match prod structure -->
  <section mx-0 px-0 bg-neutral-100>
    <!-- Hexagon background decoration -->
    <div max-w-screen w-full relative of-x-clip>
      <div w="320vw md:140vw" i-custom:bg-hexagons text-neutral-800 h-full h-screen max-w-none pointer-events-none inset-0 absolute />
    </div>
    <!-- Tilted media content -->
    <div px-32 w-full of-x-clip max-md:max-w-none style="--f-mb-min: 96; --f-mb-max: 128;">
      <div ref="media" style="--rotate-x:30deg;--translate-y:-100px;transform: perspective(1800px) rotateX(var(--rotate-x)) translateY(var(--translate-y))" origin="[center_70%]" transition="transform duration-350 ease-[cubic-bezier(0,0,0.25,1)]" mx-auto h-full min-h-500 children:w-full>
        <template v-if="isYouTube">
          <NuxtLink v-if="poster" :to="src" external stack mx-auto children:rounded-8 target="_blank">
            <NuxtImg :src="poster" rounded-8 w-full />
            <div bg-gradient="to-b from-neutral/30 to-neutral/60" size-full />
            <Icon name="nimiq:triangle-right" text="56 white" />
          </NuxtLink>
          <iframe v-else :src="embedUrl" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen rounded-8 w-full aspect-video />
        </template>
        <NuxtImg v-else :src rounded-8 />
      </div>
    </div>
  </section>
</template>
