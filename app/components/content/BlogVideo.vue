<script setup lang="ts">
import type { ImageField, LinkToMediaField } from '@prismicio/client'

interface BlogVideoSlice {
  primary: {
    video: LinkToMediaField
    poster: ImageField
    bgColor?: 'white' | 'green' | 'grey'
    aspect?: 'auto' | '16:9' | '9:16' | '1:1'
    caption: string
    autoplay: boolean
    loop: boolean
    hideControls?: boolean
  }
}

const { slice } = defineProps<{ slice: BlogVideoSlice }>()

const isPlaying = ref(false)
const videoEl = ref<HTMLVideoElement | null>(null)

const videoUrl = computed(() => getUrl(slice.primary.video))
const hasVideo = computed(() => Boolean(videoUrl.value))
const hasPoster = computed(() => hasImage(slice.primary.poster))

const bgClass = computed(() => {
  switch (slice.primary.bgColor) {
    case 'green': return 'bg-green'
    case 'grey': return 'bg-neutral-100'
    default: return 'bg-neutral-0'
  }
})

const aspectRatio = computed(() => {
  switch (slice.primary.aspect) {
    case '16:9':
      return '16 / 9'
    case '9:16':
      return '9 / 16'
    case '1:1':
      return '1 / 1'
    default:
      return null
  }
})

const aspectStyle = computed(() => {
  if (aspectRatio.value)
    return `aspect-ratio: ${aspectRatio.value}`
  if (hasPoster.value)
    return `aspect-ratio: ${getAspectRatio(slice.primary.poster)}`
  return undefined
})

function play() {
  if (!hasVideo.value)
    return
  isPlaying.value = true
  nextTick(() => {
    videoEl.value?.play()
  })
}

if (import.meta.dev && import.meta.client) {
  const warned = ref(false)
  onMounted(() => {
    if (warned.value)
      return
    if (!hasVideo.value) {
      warned.value = true
      console.warn('[BlogVideo] Missing video URL in Prismic slice; rendering poster only.', slice)
    }
  })
}
</script>

<template>
  <section :class="bgClass" py-0 data-slice-type="video-blog">
    <figure
      f-my-lg
      max-w-920px
      w="[calc(100%+16px)]"
      mx="[-8px]"
      md:w-full
      md:mx-auto
    >
      <!-- Missing video: render poster only (avoid <video src="">) -->
      <div v-if="!hasVideo && hasPoster" relative rounded-6 overflow-hidden bg-neutral-100>
        <ProxiedPrismicImage
          :field="slice.primary.poster"
          w-full
          object-cover
          :style="aspectStyle"
        />
      </div>

      <!-- Video with poster overlay -->
      <div v-else-if="hasPoster && !isPlaying && !slice.primary.autoplay" relative rounded-6 overflow-hidden bg-neutral-100>
        <ProxiedPrismicImage
          :field="slice.primary.poster"
          w-full
          object-cover
          :style="aspectStyle"
        />
        <button
          absolute
          inset-0
          stack
          bg="neutral/30"
          cursor-pointer
          transition-colors
          hover:bg="neutral/40"
          @click="play"
        >
          <div bg="white/90" ring="1.5 white/20" stack rounded-full size-64 md:size-80 shadow-lg>
            <div text="neutral-900 32 md:40" i-nimiq:triangle-right ml-4 md:ml-6 />
          </div>
        </button>
      </div>

      <!-- Video player -->
      <video
        v-else-if="hasVideo"
        ref="videoEl"
        :src="videoUrl"
        :poster="hasPoster ? getImage(slice.primary.poster) : undefined"
        :loop="slice.primary.loop"
        :autoplay="slice.primary.autoplay || undefined"
        :muted="slice.primary.autoplay || undefined"
        :controls="!slice.primary.hideControls"
        :style="aspectStyle"
        playsinline
        w-full
        rounded-6
        bg-neutral-100
        @loadeddata="slice.primary.autoplay && ($event.target as HTMLVideoElement).play()"
      />

      <!-- Caption -->
      <figcaption v-if="slice.primary.caption" text="sm neutral-700" mt-12 text-center>
        {{ slice.primary.caption }}
      </figcaption>
    </figure>
  </section>
</template>

<style scoped>
:global(section:has(+ section[data-slice-type="video-blog"]) [nq-prose] p:last-child) {
  padding-bottom: 0;
}
</style>
