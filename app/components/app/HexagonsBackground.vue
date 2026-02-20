<script setup lang="ts">
const { withSocials = false, bgColor = 'darkblue' } = defineProps<{ withSocials?: boolean, bgColor?: keyof typeof bgClasses }>()
const bgClasses = { grey: 'bg-neutral-100', white: 'bg-neutral-0', darkblue: 'bg-darkerblue dark' }
const site = await useSite()
const socialLinks = Object.fromEntries(site.socials?.map(s => [s.id, s.link]) ?? [])
const darkHexOpacityFactor = computed(() => bgColor === 'darkblue' ? 0.58 : 1)

const rows = computed(() => 5)
const { width } = useWindowSize()
const columns = ref(0)
const gap = ref(12)
const hexagonWidth = computed(() => gap.value * 8.75)

const isVisible = shallowRef(false)
const sectionRef = useTemplateRef<HTMLElement>('section')
const gridParent = useTemplateRef<HTMLElement>('gridParent')

useIntersectionObserver(sectionRef, ([entry]) => {
  isVisible.value = entry?.isIntersecting || false
}, { threshold: 0.2, rootMargin: '100px' })

function calculateOpacity(rowIndex: number, colIndex: number) {
  const normalizedRow = rowIndex / (rows.value - 1)
  const normalizedCol = colIndex / (columns.value - 1)
  const distance = Math.abs(normalizedRow + normalizedCol - 1)
  const threshold = 0.8
  return distance > threshold ? 0 : 1 - (distance / threshold)
}

function getHexOpacity(baseOpacity: number) {
  return Math.min(1, baseOpacity * darkHexOpacityFactor.value)
}

const socialCoords = { youtube: [2, 6], x: [3, 7], facebook: [1, 9] } as const
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
      const social = withSocials ? socials.find(s => socialCoords[s][0] === rowIndex && socialCoords[s][1] === colIndex) : undefined
      result.push({ rowIndex, colIndex, opacity, social })
    }
  }
  items.value = result
})

// Wave animation: comet sweeps across the grid with evolving direction
const WAVE_CYCLE = 6000 // ms per sweep
const DIR_CYCLE = 20000 // ms per direction oscillation
const FRONT_W = 0.08 // sharp rise width
const TRAIL_W = 0.28 // long fading tail width
const FRONT_BOOST = 0.3
const TRAIL_BOOST = 0.15

function getWaveBoost(diagPhase: number, horizPhase: number, waveT: number, blend: number): number {
  // blend 0 = pure diagonal, 0.5 = half horizontal
  const hexPhase = diagPhase * (1 - blend) + horizPhase * blend
  let offset = hexPhase - waveT
  if (offset > 0.5)
    offset -= 1
  if (offset < -0.5)
    offset += 1
  if (offset >= 0 && offset < FRONT_W)
    return FRONT_BOOST * (1 - offset / FRONT_W)
  if (offset < 0 && offset > -TRAIL_W)
    return TRAIL_BOOST * (1 - Math.abs(offset) / TRAIL_W)
  return 0
}

let waveT = 0
let dirT = 0
let lastTs = 0

const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

const { pause, resume } = useRafFn(({ timestamp }) => {
  const dt = lastTs ? timestamp - lastTs : 0
  lastTs = timestamp
  waveT = (waveT + dt / WAVE_CYCLE) % 1
  dirT = (dirT + dt / DIR_CYCLE) % 1
  const blend = Math.sin(dirT * Math.PI * 2) * 0.25 + 0.25

  const parent = gridParent.value
  if (!parent)
    return
  const children = parent.children
  const arr = items.value
  const rowMax = rows.value - 1
  const colMax = columns.value - 1

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]!
    if (item.social || !item.opacity)
      continue
    const nr = item.rowIndex / rowMax
    const nc = item.colIndex / colMax
    const boost = getWaveBoost((nr + nc) / 2, nc, waveT, blend)
    const el = children[i] as HTMLElement | undefined
    if (el)
      el.style.opacity = String(getHexOpacity(Math.min(1, item.opacity + boost)))
  }
}, { immediate: false })

watchEffect(() => {
  if (isVisible.value && !reducedMotion.value) {
    lastTs = 0
    resume()
  }
  else {
    pause()
    const parent = gridParent.value
    if (!parent)
      return
    items.value.forEach((item, i) => {
      if (item.social || !item.opacity)
        return
      const el = parent.children[i] as HTMLElement | undefined
      if (el)
        el.style.opacity = String(getHexOpacity(item.opacity))
    })
  }
})
</script>

<template>
  <div ref="section" class="group mx-0 px-0 w-full relative z-2 overflow-x-hidden pt-12 md:pt-16" :class="bgClasses[bgColor]">
    <div ref="gridParent" class="grid-parent max-w-none" aria-hidden="true" :style="`--rows:${rows}; --cols:${columns}; --gap:${gap}px;--hexagon-w: ${hexagonWidth}px;`">
      <div
        v-for="item in items" :key="`${item.rowIndex}-${item.colIndex}`" class="relative flex items-center justify-center transition-opacity transition-duration-300 transition-ease-out" :style="{ '--row': item.rowIndex, '--col': item.colIndex, 'opacity': item.opacity && !item.social ? getHexOpacity(item.opacity) : 1 }" :class="{
          'text-[red]': item.social === 'youtube' && isVisible,
          'text-black': item.social === 'x' && isVisible,
          'text-[#1877f2]': item.social === 'facebook' && isVisible,
          'text-neutral-300 dark:text-neutral-200 hocus:dark:text-neutral-100 hocus:text-neutral-500': !item.social,
          'opacity-0': item.social && !isVisible,
          'opacity-100': item.social && isVisible,
        }" :data-social="item.social"
      >
        <Icon class="size-full inset-0 absolute" name="nimiq:logos-nimiq-mono" />
        <NuxtLink v-if="item.social && isVisible && socialLinks[item.social]" class="flex justify-center items-center size-full inset-0 absolute z-1 transition-opacity transition-duration-300 transition-ease-out" target="_blank" external :to="socialLinks[item.social]" :aria-label="`Visit Nimiq on ${item.social === 'x' ? 'Twitter' : item.social}`">
          <Icon v-if="item.social === 'youtube'" class="text-53 text-white" name="nimiq:logos-youtube-mono" />
          <Icon v-if="item.social === 'x'" class="text-64 text-white" name="nimiq:logos-twitter-mono" />
          <Icon v-if="item.social === 'facebook'" class="text-62 text-white" name="nimiq:logos-facebook-mono" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid-parent {
  --hexagon-h: calc(var(--hexagon-w) / 1.1111);
  --hexagon-h-half: calc(var(--hexagon-h) / 2);

  :deep(.iconify.absolute) {
    width: 100% !important;
    height: 100% !important;
  }

  /* Social media icons inside links should be square */
  :deep(a .iconify) {
    width: 1em !important;
  }
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

@media (prefers-reduced-motion: reduce) {
  .grid-parent > * {
    transition: none !important;
    animation: none !important;
  }
}
</style>
