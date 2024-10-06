<script lang="ts" setup>
const { scale = 1 } = defineProps<{ scale?: number /* value from 0 to 1 */ }>()

const delay = useState(`ember-${scale}`, () => Math.floor(Math.random() * 6000))

const shouldJump = ref(false)

// Randomly jump and flip the icon :)
function onHover() {
  if (shouldJump.value)
    return

  shouldJump.value = Math.random() < 0.07
  setTimeout(() => shouldJump.value = false, 500)
}
</script>

<template>
  <div
    :class="{ 'jump-and-flip': shouldJump }"
    :style="`--delay: ${delay}ms; --scale: ${scale}`"
    i-nimiq:logos-shiny-nim
    absolute
    z-1 size-28 before="content-empty absolute size-[150%] top--7 left--7 blur-64 mix-blend-screen rounded-full op-70"
    after="content-empty absolute size-[250%] top--21 left--21 blur-12 mix-blend-overlay rounded-full op-70"
    op-80
    @mouseover="onHover"
  />
</template>

<style scoped>
div {
  --animation-play-state: running;
  animation: float 15s ease-in-out infinite;
  animation-play-state: var(--animation-play-state);
  animation-delay: var(--delay, 0);
  transition:
    filter 0.3s ease,
    transform 0.5s ease;
  transform: scale(var(--scale));

  &:hover {
    --animation-play-state: paused;
  }

  &::after,
  &::before {
    background: radial-gradient(rgba(var(--nq-neutral) / 0.25) 0%, rgba(var(--nq-neutral) / 0) 100%);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(calc(var(--scale)));
  }
  50% {
    transform: translate3d(0, -20px, 0) scale(calc(0.05 + var(--scale)));
  }
}

@keyframes jump-flip {
  0%,
  100% {
    transform: translate3d(0, 0, 0) rotateY(0deg) scale(var(--scale));
  }
  50% {
    transform: translate3d(0, -20px, 0) rotateY(180deg) scale(calc(0.05 + var(--scale)));
  }
  100% {
    transform: translate3d(0, 0, 0) rotateY(360deg) scale(var(--scale));
  }
}

.jump-and-flip {
  animation: jump-flip 0.5s ease-out;
}
</style>
