<script setup lang="ts">
import type { ImageField, LinkToMediaField } from '@prismicio/client'

interface BlogVideoSlice {
  primary: {
    video: LinkToMediaField
    poster: ImageField
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

function play() {
  isPlaying.value = true
  nextTick(() => {
    videoEl.value?.play()
  })
}
</script>

<template>
  <section bg-neutral-100 py-0>
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
          :style="`aspect-ratio: ${getAspectRatio(slice.primary.poster)}`"
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
