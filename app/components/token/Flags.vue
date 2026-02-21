<script setup lang="ts">
import { animate } from 'motion-v'

const { flags } = defineProps<{ flags: string }>()
const el = useTemplateRef<HTMLElement>('el')
let ctrl: ReturnType<typeof animate> | undefined

onMounted(async () => {
  if (!el.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    return
  const img = new Image()
  img.src = flags
  await new Promise<void>((r) => {
    img.onload = () => r()
  })
  const tileW = Math.round((img.naturalWidth / img.naturalHeight) * el.value.clientHeight)
  ctrl = animate(el.value, { backgroundPositionX: ['0px', `-${tileW}px`] }, { duration: 60, ease: 'linear', repeat: Infinity })
})

onUnmounted(() => ctrl?.stop())
</script>

<template>
  <div
    ref="el"
    class="w-full h-[60px] md:h-[80px]"
    :style="{ backgroundImage: `url(${flags})`, backgroundSize: 'auto 100%', backgroundRepeat: 'repeat-x' }"
  />
</template>
