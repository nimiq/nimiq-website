<script setup lang="ts">
import { Motion, useScroll, useSpring, useTransform } from 'motion-v'

const { src, poster, animateOnScroll = false, compactMobilePadding = false } = defineProps<{ src: string, poster?: string, animateOnScroll?: boolean, compactMobilePadding?: boolean }>()

const sectionRef = useTemplateRef<HTMLElement>('sectionRef')
const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ['start end', 'end start'],
})

const rotateXProgress = useTransform(scrollYProgress, [0, 0.38], [30, 0])
const translateYProgress = useTransform(scrollYProgress, [0, 0.38], [-100, 0])
const rotateX = useSpring(rotateXProgress, { stiffness: 140, damping: 24, mass: 0.7 })
const translateY = useSpring(translateYProgress, { stiffness: 140, damping: 24, mass: 0.7 })

const isYouTube = computed(() => src.includes('youtube.com') || src.includes('youtu.be'))
const embedUrl = computed(() => {
  if (!isYouTube.value)
    return src
  const videoId = src.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/)?.[1]
  return videoId ? `https://www.youtube.com/embed/${videoId}` : src
})

const playMaskStyle = {
  maskImage: 'url(\"data:image/svg+xml;utf8,%3Csvg xmlns=\\\'http://www.w3.org/2000/svg\\\' width=\\\'12\\\' height=\\\'12\\\' viewBox=\\\'0 0 12 12\\\'%3E%3Cpath fill=\\\'currentColor\\\' d=\\\'M2 1.413A.8.8 0 013.212.727l7.645 4.587a.8.8 0 010 1.372l-7.645 4.587A.8.8 0 012 10.587z\\\'/%3E%3C/svg%3E\")',
  WebkitMaskImage: 'url(\"data:image/svg+xml;utf8,%3Csvg xmlns=\\\'http://www.w3.org/2000/svg\\\' width=\\\'12\\\' height=\\\'12\\\' viewBox=\\\'0 0 12 12\\\'%3E%3Cpath fill=\\\'currentColor\\\' d=\\\'M2 1.413A.8.8 0 013.212.727l7.645 4.587a.8.8 0 010 1.372l-7.645 4.587A.8.8 0 012 10.587z\\\'/%3E%3C/svg%3E\")',
  maskSize: '100% 100%',
  WebkitMaskSize: '100% 100%',
  maskRepeat: 'no-repeat',
  WebkitMaskRepeat: 'no-repeat',
  maskPosition: '0% 0%',
  WebkitMaskPosition: '0% 0%',
} as const
</script>

<template>
  <!-- eslint-disable-next-line vue/no-restricted-html-elements - section required to match prod structure -->
  <section
    ref="sectionRef"
    class="mx-0 px-0 bg-neutral-100 relative overflow-hidden nq-wide max-md:[--pb:56px]"
    style="--px: 0;"
    :class="{ 'nq-overlaps': !isYouTube, 'compact-mobile-padding': compactMobilePadding }"
  >
    <!-- Hexagon background decoration - invisible/subtle decorative element -->
    <div class="inset-0 absolute overflow-hidden pointer-events-none">
      <div class="w-full h-full min-h-[500px] max-w-none inset-0 absolute text-neutral-800 bg-hexagons" />
    </div>
    <!-- Tilted media content with 3D perspective transform -->
    <div class="px-32 w-full overflow-x-hidden max-md:max-w-none">
      <Motion
        class="mx-auto h-full min-h-[500px] [&>*]:w-full"
        :style="{
          transformPerspective: '1800px',
          transformOrigin: 'center 70%',
          rotateX: animateOnScroll ? rotateX : 30,
          y: animateOnScroll ? translateY : -100,
        }"
      >
        <template v-if="isYouTube">
          <NuxtLink v-if="poster" class="mx-auto grid relative [&>*]:rounded-lg [&>*]:col-start-1 [&>*]:row-start-1" :to="src" external target="_blank">
            <img class="w-full" :src="poster" width="1280" height="720" alt="Crypto made easy video poster">
            <div class="w-full h-full" />
            <div class="w-[56px] h-[56px] bg-neutral opacity-50 justify-self-center self-center translate-y-[2px] blur-[1.5px]" :style="playMaskStyle" />
            <div class="w-[56px] h-[56px] bg-white rounded-lg justify-self-center self-center" :style="playMaskStyle" />
          </NuxtLink>
          <iframe v-else class="rounded-lg w-full aspect-video" :src="embedUrl" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        </template>
        <NuxtImg v-else :src />
      </Motion>
    </div>
  </section>
</template>

<style scoped>
/* Hexagon background - uses SVG mask with very subtle opacity (0.01-0.06) */
.bg-hexagons {
  background-color: currentcolor;
  mask-image: url('/assets/custom-icons/bg-hexagons.svg');
  mask-mode: alpha;
  mask-repeat: no-repeat;
  mask-size: 2795px 544px;
  mask-position: right bottom;
}

@media (max-width: 767px) {
  .compact-mobile-padding {
    --pb: 24px !important;
  }
}
</style>
