<script setup lang="ts">

</script>

<template>
  <div class="playground-background">
    <div aria-hidden pointer-events-none absolute inset-0 size-full of-hidden w="[calc(100%+(var(--px)*2))]" left="[calc(-1*var(--px))]">
      <div class="float-cloud" i-custom:cloud relative top-110 h-180 w-337 />
      <div class="float-cloud" i-custom:cloud relative top-128 h-288 w-540 />
      <div class="float-cloud" i-custom:cloud relative bottom-110 h-96 w-180 />
      <div class="float-cloud" i-custom:cloud relative bottom-18 h-90 w-168 />
    </div>

    <svg z-1 width="1096" height="658" viewBox="0 0 1096 658" fill="none" xmlns="http://www.w3.org/2000/svg" size-full>
      <g filter="url(#filter0_bi_1395_10769)">
        <mask id="white-border" fill="white">
          <path d="M0 7.99999C0 3.58171 3.58172 0 8 0H1088C1092.42 0 1096 3.58172 1096 8V650C1096 654.418 1092.42 658 1088 658H7.99997C3.58169 658 0 654.418 0 650V7.99999Z" />
        </mask>
        <path d="M0 7.99999C0 3.58171 3.58172 0 8 0H1088C1092.42 0 1096 3.58172 1096 8V650C1096 654.418 1092.42 658 1088 658H7.99997C3.58169 658 0 654.418 0 650V7.99999Z" fill="#DADBE2" fill-opacity="0.1" />
        <path d="M8 1.5H1088V-1.5H8V1.5ZM1094.5 8V650H1097.5V8H1094.5ZM1088 656.5H7.99997V659.5H1088V656.5ZM1.5 650V7.99999H-1.5V650H1.5ZM7.99997 656.5C4.41013 656.5 1.5 653.59 1.5 650H-1.5C-1.5 655.247 2.75326 659.5 7.99997 659.5V656.5ZM1094.5 650C1094.5 653.59 1091.59 656.5 1088 656.5V659.5C1093.25 659.5 1097.5 655.247 1097.5 650H1094.5ZM1088 1.5C1091.59 1.5 1094.5 4.41014 1094.5 8H1097.5C1097.5 2.7533 1093.25 -1.5 1088 -1.5V1.5ZM8 -1.5C2.7533 -1.5 -1.5 2.75328 -1.5 7.99999H1.5C1.5 4.41014 4.41015 1.5 8 1.5V-1.5Z" fill="url(#paint0_linear_1395_10769)" fill-opacity="0.5" mask="url(#white-border)" />
      </g>

      <!-- Safari control buttons -->
      <g opacity="0.5">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21 26C23.7614 26 26 23.7614 26 21C26 18.2386 23.7614 16 21 16C18.2386 16 16 18.2386 16 21C16 23.7614 18.2386 26 21 26Z" fill="#1F2348" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M37 26C39.7614 26 42 23.7614 42 21C42 18.2386 39.7614 16 37 16C34.2386 16 32 18.2386 32 21C32 23.7614 34.2386 26 37 26Z" fill="#1F2348" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M53 26C55.7614 26 58 23.7614 58 21C58 18.2386 55.7614 16 53 16C50.2386 16 48 18.2386 48 21C48 23.7614 50.2386 26 53 26Z" fill="#1F2348" />
      </g>

      <!-- Search Bar -->
      <g opacity="0.5">
        <rect x="368" y="12" width="360" height="14" rx="7" fill="#1F2348" />
      </g>
      <defs>
        <filter id="filter0_bi_1395_10769" x="-21.209" y="-21.209" width="1138.42" height="700.418" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="10.6045" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1395_10769" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1395_10769" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="60" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1395_10769" />
        </filter>
        <linearGradient id="paint0_linear_1395_10769" x1="589.197" y1="0" x2="589.197" y2="658" gradientUnits="userSpaceOnUse">
          <stop stop-color="#E2E2E8" />
          <stop offset="1" stop-color="#E2E2E8" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<style scoped>

</style>
