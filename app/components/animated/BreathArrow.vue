<script setup lang="ts">
const svgEl = ref<SVGSVGElement | null>(null)
let animations: Animation[] = []

onMounted(() => {
  if (!svgEl.value?.animate || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    return

  const rootGroup = svgEl.value.querySelector<SVGGElement>('[data-breath-root]')
  if (rootGroup?.animate) {
    animations.push(
      rootGroup.animate(
        [
          { transform: 'translateY(0px)' },
          { transform: 'translateY(4px)' },
          { transform: 'translateY(0px)' },
        ],
        { duration: 2000, iterations: Infinity, easing: 'ease-in-out' },
      ),
    )
  }

  const paths = Array.from(svgEl.value.querySelectorAll<SVGPathElement>('[data-breath-path]'))
  const baseOpacities = [1, 0.7, 0.4]
  const delays = [0, 600, 1200]
  paths.forEach((path, i) => {
    const base = baseOpacities[i] ?? 0.4
    const low = Math.max(base - 0.35, 0.1)
    animations.push(
      path.animate(
        [
          { transform: 'translateY(0px)', opacity: String(base) },
          { transform: 'translateY(6px)', opacity: String(low) },
          { transform: 'translateY(0px)', opacity: String(base) },
        ],
        { duration: 2400, iterations: Infinity, easing: 'ease-in-out', delay: delays[i] ?? 0 },
      ),
    )
  })
})

onBeforeUnmount(() => {
  animations.forEach(animation => animation.cancel())
  animations = []
})
</script>

<template>
  <svg ref="svgEl" class="w-[34px] overflow-visible text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 34 41" aria-hidden="true">
    <g data-breath-root>
      <animateTransform attributeName="transform" type="translate" values="0 0;0 4;0 0" dur="2s" repeatCount="indefinite" />
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3">
        <path d="M2.3 2 17 13 31.8 2" opacity="1" data-breath-path>
          <animate attributeName="opacity" values="1;0.65;1" dur="2.4s" repeatCount="indefinite" begin="0s" />
          <animateTransform attributeName="transform" type="translate" values="0 0;0 6;0 0" dur="2.4s" repeatCount="indefinite" begin="0s" />
        </path>
        <path d="M2.3 15 17 26l14.8-11" opacity="0.7" data-breath-path>
          <animate attributeName="opacity" values="0.7;0.35;0.7" dur="2.4s" repeatCount="indefinite" begin="0.6s" />
          <animateTransform attributeName="transform" type="translate" values="0 0;0 6;0 0" dur="2.4s" repeatCount="indefinite" begin="0.6s" />
        </path>
        <path d="M2.3 28 17 39l14.8-11" opacity="0.4" data-breath-path>
          <animate attributeName="opacity" values="0.4;0.15;0.4" dur="2.4s" repeatCount="indefinite" begin="1.2s" />
          <animateTransform attributeName="transform" type="translate" values="0 0;0 6;0 0" dur="2.4s" repeatCount="indefinite" begin="1.2s" />
        </path>
      </g>
    </g>
  </svg>
</template>

<style scoped>
@media (prefers-reduced-motion: reduce) {
  svg :deep(animate),
  svg :deep(animateTransform) {
    display: none;
  }
}
</style>
