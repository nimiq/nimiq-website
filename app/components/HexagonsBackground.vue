<script setup lang="ts">
const { bgColor, withSocials = false } = defineProps<{ bgColor: 'white' | 'grey' | 'darkblue', withSocials?: boolean }>()

const { data: socialMedias } = await useSocialMedias()

const bgClass = getColorClass(() => bgColor)

const rows = computed(() => 5)
const { width } = useWindowSize()
const columns = ref(0)
const gap = ref(12)
const hexagonWidth = computed(() => gap.value * 8.75)

const isVisible = shallowRef(false)
const sectionRef = useTemplateRef<HTMLElement>('section')

useIntersectionObserver(
  sectionRef,
  ([entry]) => {
    isVisible.value = entry?.isIntersecting || false
  },
  { threshold: 0.2, rootMargin: '100px' },
)

function calculateOpacity(rowIndex: number, colIndex: number) {
  const normalizedRow = rowIndex / (rows.value - 1)
  const normalizedCol = colIndex / (columns.value - 1)
  const distance = Math.abs(normalizedRow + normalizedCol - 1)
  const threshold = 0.8
  if (distance > threshold)
    return 0
  else
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
  columns.value = (Math.floor(width.value / hexagonWidth.value) + 4) & ~1
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
  <section ref="section" :class="bgClass" group mx-0 px-0 w-full relative z-2 of-x-hidden f-pt-2xl>
    <div
      aria-hidden="true"
      class="grid-parent" max-w-none
      :style="`--rows:${rows}; --cols:${columns}; --gap:${gap}px;--hexagon-w: ${hexagonWidth}px;`"
    >
      <div
        v-for="item in items"
        :key="`${item.rowIndex}-${item.colIndex}`"
        :style="{
          '--row': item.rowIndex,
          '--col': item.colIndex,
          'opacity': item.opacity && !item.social ? item.opacity : 1,
        }"
        i-nimiq:logos-nimiq-mono
        transition="opacity duration-300 ease-out"
        :class="{
          'text-[red]': item.social === 'youtube' && isVisible,
          'text-black': item.social === 'x' && isVisible,
          'text-[#1877f2]': item.social === 'facebook' && isVisible,
          'text-neutral-300 dark:text-neutral-500 hocus:dark:text-neutral-700 hocus:text-neutral-500': !item.social,
          'opacity-0': item.social && !isVisible,
          'opacity-100': item.social && isVisible,
        }"
        :data-social="item.social"
      >
        <NuxtLink
          v-if="item.social && isVisible" external
          flex="~ justify-center items-center"
          target="_blank" size-full
          :to="socialMedias?.[item.social]?.link ? getLink(socialMedias[item.social].link) : ''"
          transition="opacity duration-300 ease-out"
          :aria-label="`Visit Nimiq on ${item.social === 'x' ? 'Twitter' : item.social}`"
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
.grid-parent {
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

  @media (prefers-reduced-motion: no-preference) {
    > [data-social] {
      transition:
        opacity 300ms ease-out,
        transform 300ms ease-out;
    }
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

  > [data-social]:hover {
    transform: scale(1.05);
  }
}

/* Respect user's motion preferences */
@media (prefers-reduced-motion: reduce) {
  .grid-parent > * {
    transition: none !important;
    animation: none !important;
  }
}
</style>
