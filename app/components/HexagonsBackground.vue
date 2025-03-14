<script setup lang="ts">
import { computed } from 'vue'

const { bgColor, withSocials = false } = defineProps<{ bgColor: 'white' | 'grey' | 'darkblue', withSocials?: boolean }>()

const { socialMedias } = await useSocialMedias()

const colors = getColorClass(() => bgColor)

const rows = computed(() => 5)
const { width } = useWindowSize()
const columns = ref(0)

function calculateOpacity(rowIndex: number, colIndex: number) {
  const normalizedRow = rowIndex / (rows.value - 1)
  const normalizedCol = colIndex / (columns.value - 1)
  const distance = Math.abs(normalizedRow + normalizedCol - 1)
  const threshold = 0.8 // Adjust this value to control the path width
  if (distance > threshold) // Hide items far from the path
    return 0
  else // Adjust opacity based on distance from the path
    return 1 - (distance / threshold)
}

const socialCoords = {
  youtube: [2, 6],
  x: [3, 7],
  facebook: [1, 9],
}
const socials = Object.keys(socialCoords) as (keyof typeof socialCoords)[]

const items = ref<{ rowIndex: number, colIndex: number, opacity: number, social: 'x' | 'youtube' | 'facebook' | undefined }[]>([])

onMounted(() => {
  if (import.meta.server)
    return
  const result = []
  columns.value = (Math.floor(width.value / 140) + 4) & ~1
  for (let rowIndex = 0; rowIndex < rows.value; rowIndex++) {
    const isEvenRow = rowIndex % 2 === 0
    const startCol = isEvenRow ? 0 : 1
    for (let colIndex = startCol; colIndex < columns.value; colIndex += 2) {
      const opacity = calculateOpacity(rowIndex, colIndex)
      let social
      if (withSocials)
        social = socials.find(s => socialCoords[s][0] === rowIndex && socialCoords[s][1] === colIndex)
      result.push({ rowIndex, colIndex, opacity, social })
    }
  }
  items.value = result
})
</script>

<template>
  <section :class="colors" group relative z-2 mx-0 w-full of-x-hidden px-0 f-pt-2xl>
    <div
      aria-hidden="true"
      class="grid-parent" max-w-none
      :style="`--rows:${rows}; --cols:${columns}`"
    >
      <div
        v-for="item in items"
        :key="`${item.rowIndex}-${item.colIndex}`"
        :style="{
          '--row': item.rowIndex,
          '--col': item.colIndex,
          'opacity': item.opacity && !item.social ? item.opacity : 1,
          'animation-delay': `${item.rowIndex * 0.1 + item.colIndex * 0.15}s`,
          'animation-duration': `${(rows - item.rowIndex) * 2 + 4}s`,
        }"
        i-nimiq:logos-nimiq-mono
        motion-safe:transition="colors duration-800 hocus:duration-100"
        motion-safe:animate="pulse group-hocus:none"
        :class="{
          'text-[red]': item.social === 'youtube',
          'text-black': item.social === 'x',
          'text-[#1877f2]': item.social === 'facebook',
          'text-neutral-300 dark:text-neutral-500 hocus:dark:text-neutral-700 hocus:text-neutral-500': !item.social,
        }"
        :data-social="item.social"
      >
        <NuxtLink
          v-if="item.social" external
          flex="~ justify-center items-center"
          target="_blank" size-full
          :to="getLink(socialMedias[item.social]!.link)"
          :class="{ '!animate-none': item.social }"
        >
          <div v-if="item.social === 'youtube'" i-nimiq:logos-youtube-mono text="53 white" />
          <div v-if="item.social === 'x'" i-nimiq:logos-twitter-mono text="64 white" />
          <div v-if="item.social === 'facebook'" i-nimiq:logos-facebook-mono text="62 white" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes pulse {
  0%,
  100% {
    background-color: rgb(var(--nq-neutral-400));
  }
  50% {
    background-color: rgb(var(--nq-neutral-500));
  }
}

.grid-parent {
  --gap: 16px;
  --hexagon-w: 140px;
  --hexagon-h: calc(var(--hexagon-w) / 1.1111);
  --hexagon-h-half: calc(var(--hexagon-h) / 2);
  display: grid;
  row-gap: calc(var(--gap) / 2);
  grid-template-columns: repeat(var(--cols), var(--gap) calc(var(--hexagon-w) - (2 * var(--gap)))) var(--gap);
  grid-template-rows: repeat(var(--rows), var(--hexagon-h-half));
  height: calc(var(--rows) * (var(--hexagon-h-half) * 1px) + var(--rows) * var(--gap));
  margin-left: calc(-1 * var(--hexagon-w) / 2);
  position: relative;
  content-visibility: auto;

  > *:not([data-social]) {
    animation: pulse 2s infinite;
  }

  > :where(div, a) {
    width: var(--hexagon-w);
    height: var(--hexagon-h);
    grid-row: span 2;
    grid-column: span 2;

    &:nth-child(even) {
      margin-top: var(--hexagon-h-half);
      grid-row-end: span 3;
    }
  }
}
</style>
