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
  <section class="mx-0 px-0 bg-neutral-100">
    <!-- Hexagon background decoration -->
    <div class="max-w-screen w-full relative of-x-clip">
      <div class="w-320vw w-md:140vw text-neutral-800 h-full h-screen max-w-none pointer-events-none inset-0 absolute" i-custom:bg-hexagons />
    </div>
    <!-- Tilted media content -->
    <div class="px-8 w-full of-x-clip max-md:max-w-none mb-24 md:mb-32">
      <div ref="media" class="origin-[center_70%] transition-transform transition-duration-350 transition-ease-[cubic-bezier(0,0,0.25,1)] mx-auto h-full min-h-[500px]" style="--rotate-x:30deg;--translate-y:-100px;transform: perspective(1800px) rotateX(var(--rotate-x)) translateY(var(--translate-y))" children:w-full>
        <template v-if="isYouTube">
          <NuxtLink v-if="poster" class="mx-auto" :to="src" external stack children:rounded-2 target="_blank">
            <NuxtImg class="rounded-2 w-full" :src="poster" />
            <div class="bg-gradient-to-b from-neutral/30 to-neutral/60 size-full" />
            <Icon class="text-56 text-white" name="nimiq:triangle-right" />
          </NuxtLink>
          <iframe v-else class="rounded-2 w-full aspect-video" :src="embedUrl" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        </template>
        <NuxtImg v-else class="rounded-2" :src />
      </div>
    </div>
  </section>
</template>
