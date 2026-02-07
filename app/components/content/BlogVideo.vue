<script setup lang="ts">
import type { ImageField, LinkToMediaField } from '@prismicio/client'

interface BlogVideoSlice {
  primary: {
    video: LinkToMediaField
    poster: ImageField
    bgColor?: 'white' | 'green'
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
const hasPoster = computed(() => hasImage(slice.primary.poster))

const bgClass = computed(() => slice.primary.bgColor === 'green' ? 'bg-green' : 'bg-neutral-0')

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
  isPlaying.value = true
  nextTick(() => {
    videoEl.value?.play()
  })
}
</script>

<template>
  <section :class="bgClass" py-0>
    <figure
      f-my-lg
      max-w="$nq-prose-max-width"
      w="[calc(100%+16px)]"
      mx="[-8px]"
      md:w-full
      md:mx-0
    >
      <!-- Video with poster overlay -->
      <div v-if="hasPoster && !isPlaying && !slice.primary.autoplay" relative rounded-6 overflow-hidden bg-neutral-100>
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
        v-else
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
