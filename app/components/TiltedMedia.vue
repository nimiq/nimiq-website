<script setup lang="ts">
const media = ref<HTMLDivElement>()

const { top } = useElementBounding(media)
const { y } = useWindowScroll()

const rotateVar = useCssVar('--rotate-x', media, { initialValue: '30deg' })
const translateY = useCssVar('--translate-y', media, { initialValue: '-100px' })

watch([top, y], () => {
  rotateVar.value = y.value < top.value ? `${(1 - y.value / top.value) * 30}deg` : '0deg'
  translateY.value = y.value < top.value ? `${y.value / top.value * 100 - 100}px` : '0'
}, { immediate: true })
</script>

<template>
  <div px-32 pt-32 w-full of-x-clip>
    <div ref="media" style="--rotate-x:30deg;--translate-y:-100px;transform: perspective(1800px) rotateX(var(--rotate-x)) translateY(var(--translate-y))" origin="[center_70%]" transition="transform duration-350 ease-[cubic-bezier(0,0,0.25,1)]" mx-auto h-full min-h-500 children:w-full>
      <slot />
    </div>
  </div>
</template>
