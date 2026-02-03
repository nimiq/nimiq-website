<script lang="ts" setup>
const id = useId()
const delay = useState(`ember-${id}`, () => Math.floor(Math.random() * 6000))

const shouldJump = ref(false)
const { start: resetJump } = useTimeoutFn(() => {
  shouldJump.value = false
}, 500, { immediate: false })

// Randomly jump and flip the icon :)
function onHover() {
  if (shouldJump.value)
    return
  shouldJump.value = true
  resetJump()
}
</script>

<template>
  <div class="ui-ember opacity-80 size-7 absolute z-1" :class="{ 'jump-and-flip': shouldJump }" :style="`--delay: ${delay}ms;`" v-bind="$attrs" @mouseover="onHover">
    <svg viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g class="filter-url(#filter0_i_874_198)">
        <path d="M17.6357 7.04307C18.1214 7.86814 18.1214 8.88467 17.6357 9.70974L14.4954 15.0431C14.0096 15.8681 13.1118 16.3764 12.1402 16.3764H5.85976C4.88817 16.3764 3.99038 15.8681 3.50458 15.0431L0.364347 9.70974C-0.121449 8.88467 -0.121449 7.86814 0.364347 7.04307L3.50458 1.70974C3.99038 0.884668 4.88817 0.376404 5.85976 0.376404L12.1402 0.376404C13.1118 0.376404 14.0096 0.884668 14.4954 1.70974L17.6357 7.04307Z" fill="url(#paint0_linear_874_198)" fill-opacity="0.6" />
      </g>
      <path class="stroke-width-0.521017" d="M17.4112 7.17525C17.8489 7.91874 17.8489 8.83406 17.4112 9.57756L14.2709 14.9109C13.8328 15.655 13.0212 16.1159 12.1402 16.1159H5.85976C4.97876 16.1159 4.1672 15.655 3.72907 14.9109L0.588834 9.57756C0.151067 8.83406 0.151067 7.91874 0.588834 7.17525L3.72907 1.84191C4.1672 1.0978 4.97877 0.636912 5.85976 0.636912L12.1402 0.636913C13.0212 0.636913 13.8328 1.0978 14.2709 1.84191L17.4112 7.17525Z" stroke="url(#paint1_linear_874_198)" stroke-opacity="0.3" />
      <path d="M0.364347 9.70974C-0.121449 8.88467 -0.121449 7.86814 0.364347 7.04307L3.50459 1.70974C3.99038 0.884667 4.88817 0.376404 5.85976 0.376404H12.1402C13.1118 0.376404 14.0096 0.884667 14.4954 1.70974L17.6357 7.04307C18.1214 7.86814 18.1214 8.88467 17.6357 9.70974L14.4954 15.0431C14.0096 15.8681 13.1118 16.3764 12.1402 16.3764L5.85976 16.3764C4.88817 16.3764 3.99038 15.8681 3.50459 15.0431L0.364347 9.70974Z" fill="url(#paint2_linear_874_198)" />
      <path class="stroke-width-0.629765" d="M0.635689 9.54997C0.207947 8.8235 0.207947 7.92931 0.635689 7.20283L3.77593 1.8695C4.20411 1.14228 4.99767 0.691286 5.85976 0.691286H12.1402C13.0023 0.691286 13.7959 1.14228 14.2241 1.8695L17.3643 7.20283C17.7921 7.92931 17.7921 8.8235 17.3643 9.54997L14.2241 14.8833C13.7959 15.6105 13.0023 16.0615 12.1402 16.0615L5.85976 16.0615C4.99767 16.0615 4.20411 15.6105 3.77593 14.8833L0.635689 9.54997Z" stroke="url(#paint3_linear_874_198)" stroke-opacity="0.25" />
      <defs>
        <filter id="filter0_i_874_198" x="0" y="0.376404" width="18" height="16.5094" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="0.509439" />
          <feGaussianBlur stdDeviation="1.01888" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_874_198" />
        </filter>
        <linearGradient id="paint0_linear_874_198" x1="1.425" y1="0.976403" x2="14.2688" y2="17.4794" gradientUnits="userSpaceOnUse">
          <stop stop-color="#CCE8FE" />
          <stop offset="0.241554" stop-color="#CDA0FF" />
          <stop offset="0.4" stop-color="#8489F5" />
          <stop offset="0.713254" stop-color="#CDF1FF" />
          <stop offset="1" stop-color="#B591E9" />
        </linearGradient>
        <linearGradient id="paint1_linear_874_198" x1="1.425" y1="0.976403" x2="14.2688" y2="17.4794" gradientUnits="userSpaceOnUse">
          <stop stop-color="#CCE8FE" />
          <stop offset="0.241554" stop-color="#CDA0FF" />
          <stop offset="0.4" stop-color="#8489F5" />
          <stop offset="0.713254" stop-color="#CDF1FF" />
          <stop offset="1" stop-color="#B591E9" />
        </linearGradient>
        <linearGradient id="paint2_linear_874_198" x1="18" y1="16.3334" x2="2.76447" y2="2.67017" gradientUnits="userSpaceOnUse">
          <stop stop-color="#79AEE7" />
          <stop offset="0.331593" stop-color="#4960A7" />
          <stop offset="1" stop-color="#1B2030" stop-opacity="0.25" />
        </linearGradient>
        <linearGradient id="paint3_linear_874_198" x1="2.15857" y1="15.639" x2="13.3384" y2="3.2748" gradientUnits="userSpaceOnUse">
          <stop stop-color="#EBF8FC" />
          <stop offset="0.295134" stop-color="#7FB8EF" />
          <stop offset="0.57639" stop-color="#5142F1" />
          <stop offset="1" stop-color="#1D1D29" />
        </linearGradient>
      </defs>
    </svg>
  </div>
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
  filter: drop-shadow(0 0 32px color-mix(in oklch, var(--color-neutral) 25%, transparent));

  &:hover {
    --animation-play-state: paused;
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
