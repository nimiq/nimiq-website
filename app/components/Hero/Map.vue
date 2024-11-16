<script setup lang="ts">
import { onMounted, ref } from 'vue'

interface MarkerData {
  id: string
  x: number
  y: number
  width: number
  text?: string
}

const markerWidth = 160 // height is 202
const smallMarkerWidth = 120 // height is 141

// Define the markers with their positions and text
const markers: MarkerData[] = [
  { id: 'europe', x: 350, y: -175, width: markerWidth, text: '2000' },
  { id: 'australia', x: 800, y: 70, width: markerWidth, text: '250' },
]

// Small markers data
const smallMarkers: MarkerData[] = [
  { id: '1', x: -5, y: 3, width: smallMarkerWidth },
  { id: '2', x: 115, y: -94, width: smallMarkerWidth },
  { id: '3', x: 162, y: 41, width: smallMarkerWidth },
  { id: '4', x: 306, y: -43, width: smallMarkerWidth },
  { id: '5', x: 594, y: -65, width: smallMarkerWidth },
]

const isVisible = ref(false)
const isDelayed = ref(true)
onMounted(() => {
  // Trigger the animation after a small delay
  setTimeout(() => {
    isVisible.value = true
    setTimeout(() => {
      isDelayed.value = false
    }, 1000)
  }, 100)
})
</script>

<template>
  <div :class="{ visible: isVisible, delayed: isDelayed }" class="map">
    <NuxtImg class="base-map" src="/assets/images/home-hero/map.svg" alt="World map" />
    <svg viewBox="0 0 977 362" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g class="green-group europe" opacity="1" fill-rule="evenodd" clip-rule="evenodd" fill="#1F2348">
        <path
          d="M432.199 67.438c.084.847-1.017 1.61-2.372 1.694-1.356.085-2.542-.508-2.627-1.355-.084-.847 1.017-1.61 2.372-1.694 1.61-.085 2.627.508 2.627 1.355Z"
        />
        <path
          d="M432.453 71.758c.084.848-1.017 1.61-2.372 1.695-1.356.084-2.542-.508-2.627-1.356-.084-.847 1.017-1.61 2.372-1.694 1.441 0 2.627.593 2.627 1.355Z"
        />
        <path
          d="M439.145 67.1c.084.846-1.017 1.609-2.457 1.694-1.355.084-2.541-.509-2.626-1.44-.085-.848 1.016-1.61 2.457-1.695 1.609-.085 2.626.508 2.626 1.44Z"
        />
        <path
          d="M425.167 67.947c.085.847-1.017 1.61-2.372 1.694-1.356.085-2.542-.508-2.457-1.356-.085-.847 1.017-1.609 2.372-1.694 1.186-.17 2.372.424 2.457 1.356Z"
        />
        <path
          d="M432.114 62.949c.085.847-1.017 1.61-2.457 1.694-1.355.085-2.372-.508-2.457-1.356-.084-.847 1.017-1.61 2.457-1.694 1.186-.085 2.372.508 2.457 1.356Z"
        />
      </g>

      <g class="green-group australia" opacity="1" fill-rule="evenodd" clip-rule="evenodd" fill="#1F2348">
        <path
          d="M882.026 318.444c.085 1.016-.932 1.271-2.372.678-1.44-.593-2.795-1.864-2.88-2.796-.085-1.016.932-1.271 2.372-.678 1.44.593 2.711 1.779 2.88 2.796Z"
        />
        <path
          d="M874.571 315.479c.085 1.016-.931 1.271-2.371.762-1.441-.593-2.796-1.779-2.881-2.795-.084-1.017.932-1.271 2.372-.763 1.44.593 2.626 1.779 2.88 2.796Z"
        />
        <path
          d="M882.789 323.527c.085 1.016-.932 1.27-2.372.677s-2.711-1.863-2.88-2.795c-.085-1.017.931-1.271 2.372-.678 1.524.593 2.795 1.864 2.88 2.796Z"
        />
        <path
          d="M889.396 321.493c.085 1.017-.932 1.271-2.287.763-1.44-.593-2.711-1.864-2.881-2.88-.084-1.017.932-1.271 2.288-.763 1.44.763 2.626 1.949 2.88 2.88Z"
        />
        <path
          d="M881.094 313.361c.085 1.017-.932 1.271-2.287.762-1.355-.508-2.796-1.863-2.88-2.795-.085-1.017.932-1.271 2.287-.763 1.44.678 2.796 1.864 2.88 2.796Z"
        />
      </g>

      <g class="marker-group">
        <g
          v-for="marker in markers"
          :key="marker.id"
          :class="`marker-${marker.id}`"
          :width="marker.width"
        >
          <use
            href="#marker"
            :width="marker.width"
            :x="marker.x"
            :y="marker.y"
            :style="{ opacity: 0 }"
          />
          <use
            href="#marker"
            :width="marker.width"
            :x="marker.x"
            :y="marker.y"
          />
          <text
            :x="marker.x + (marker.width / 2) - 7"
            :y="marker.y + 202 - 18"
            fill="#fff"
            font-weight="600"
            font-size="14px"
          >
            {{ marker.text }}
          </text>
        </g>
      </g>

      <g class="small-marker-group">
        <g
          v-for="marker in smallMarkers"
          :key="marker.id"
          :class="`small-marker-${marker.id}`"
        >
          <use
            href="#small-marker"
            :width="marker.width"
            :x="marker.x"
            :y="marker.y"
            :style="{ opacity: 0 }"
          />
          <use
            href="#small-marker"
            :width="marker.width"
            :x="marker.x"
            :y="marker.y"
          />
        </g>
      </g>

      <symbol id="marker" viewBox="0 0 158 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#a)">
          <path
            d="M119 110.915a8.14 8.14 0 0 1-3.253 6.51l-31.86 23.919a8.14 8.14 0 0 1-9.775 0l-31.86-23.919a8.141 8.141 0 0 1-3.252-6.51V28.801a8.14 8.14 0 0 1 8.14-8.14h63.72A8.14 8.14 0 0 1 119 28.8v82.114Z"
            fill="url(#b)"
          />
        </g>
        <path
          fill-rule="evenodd" clip-rule="evenodd"
          d="M68.495 67.806a50.212 50.212 0 0 1-5.639 5.595c-2.707 2.301-6.89.8-7.515-2.699-.588-3.296-.377-6.115.34-9.927 1.336-7.109 3.093-12.754 8.412-16.502 3.187-2.245 7.203-1.103 10.536.315 2.722 1.159 5.635 1.159 8.35.009 3.358-1.422 7.427-2.587 10.639-.324 5.319 3.748 7.076 9.393 8.412 16.502.717 3.812.928 6.631.339 9.927-.624 3.498-4.808 5-7.515 2.7a50.222 50.222 0 0 1-5.638-5.596c-4.188-4.884-16.745-4.637-20.721 0Zm.965-17.091c.39 0 .706.315.706.705a3.084 3.084 0 0 0 3.084 3.084.705.705 0 0 1 0 1.41 3.084 3.084 0 0 0-3.084 3.084.705.705 0 0 1-1.41 0 3.083 3.083 0 0 0-3.084-3.084.705.705 0 1 1 0-1.41 3.084 3.084 0 0 0 3.083-3.084c0-.39.316-.705.705-.705Zm20.386-.282a1.41 1.41 0 1 0-1.106 2.594 1.41 1.41 0 0 0 1.106-2.594Zm-.814 6.494a1.411 1.411 0 1 1 .522 2.774 1.411 1.411 0 0 1-.522-2.774Zm-2.475-3.203a1.41 1.41 0 1 0-1.106 2.594 1.41 1.41 0 0 0 1.106-2.594Zm5.772-.088a1.411 1.411 0 1 1 .522 2.774 1.411 1.411 0 0 1-.522-2.774Z"
          fill="url(#c)"
        />
        <path
          opacity=".8"
          d="m67.671 98.29-3.09-5.326a1.24 1.24 0 0 0-1.073-.614h-6.182c-.44 0-.849.233-1.07.614l-3.09 5.327c-.221.38-.221.848 0 1.229l3.09 5.326c.221.381.63.615 1.07.615h6.182c.441 0 .85-.234 1.07-.615l3.091-5.326a1.22 1.22 0 0 0 .002-1.23Z"
          fill="#FEFEFE"
        />
        <defs>
          <radialGradient
            id="b" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-80 0 0 -122.314 119 20.66)"
          >
            <stop stop-color="#41A38E" />
            <stop offset="1" stop-color="#21BCA5" />
          </radialGradient>
          <radialGradient
            id="c" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(26.83723 23.02773 -21.7223 25.31583 60.964 47.636)"
          >
            <stop stop-color="#fff" />
            <stop offset="1" stop-color="#fff" stop-opacity=".62" />
          </radialGradient>
          <filter
            id="a" x=".334" y=".31" width="157.331" height="199.645" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2.035" />
            <feGaussianBlur stdDeviation="1.272" />
            <feColorMatrix values="0 0 0 0 0.122709 0 0 0 0 0.138823 0 0 0 0 0.283843 0 0 0 0.02 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_257_31894" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="7.123" />
            <feGaussianBlur stdDeviation="4.324" />
            <feColorMatrix values="0 0 0 0 0.122709 0 0 0 0 0.138823 0 0 0 0 0.283843 0 0 0 0.04 0" />
            <feBlend in2="effect1_dropShadow_257_31894" result="effect2_dropShadow_257_31894" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="18.315" />
            <feGaussianBlur stdDeviation="19.333" />
            <feColorMatrix values="0 0 0 0 0.122709 0 0 0 0 0.138823 0 0 0 0 0.283843 0 0 0 0.07 0" />
            <feBlend in2="effect2_dropShadow_257_31894" result="effect3_dropShadow_257_31894" />
            <feBlend in="SourceGraphic" in2="effect3_dropShadow_257_31894" result="shape" />
          </filter>
        </defs>
      </symbol>

      <symbol id="small-marker" viewBox="0 0 118 139" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#a)">
          <path
            d="M79.507 65.79a4.109 4.109 0 0 1-1.641 3.285L61.785 81.148a4.109 4.109 0 0 1-4.934 0l-16.08-12.073a4.108 4.108 0 0 1-1.642-3.286V24.343a4.109 4.109 0 0 1 4.109-4.108h32.161c2.27 0 4.109 1.84 4.109 4.108V65.79Z"
            fill="#21BCA5"
          />
        </g>
        <defs>
          <filter
            id="a" x=".717" y=".018" width="117.203" height="138.561" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2.022" />
            <feGaussianBlur stdDeviation="1.264" />
            <feColorMatrix values="0 0 0 0 0.122709 0 0 0 0 0.138823 0 0 0 0 0.283843 0 0 0 0.02 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_257_31717" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="7.076" />
            <feGaussianBlur stdDeviation="4.296" />
            <feColorMatrix values="0 0 0 0 0.122709 0 0 0 0 0.138823 0 0 0 0 0.283843 0 0 0 0.04 0" />
            <feBlend in2="effect1_dropShadow_257_31717" result="effect2_dropShadow_257_31717" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="18.195" />
            <feGaussianBlur stdDeviation="19.206" />
            <feColorMatrix values="0 0 0 0 0.122709 0 0 0 0 0.138823 0 0 0 0 0.283843 0 0 0 0.07 0" />
            <feBlend in2="effect2_dropShadow_257_31717" result="effect3_dropShadow_257_31717" />
            <feBlend in="SourceGraphic" in2="effect3_dropShadow_257_31717" result="shape" />
          </filter>
        </defs>
      </symbol>

      <!-- This is the small marker version with a "hole" at the bottom -->
      <!-- <symbol id="small-marker" viewBox="0 0 118 139" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#a)">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M77.866 69.075a4.108 4.108 0 0 0 1.641-3.286V24.343a4.108 4.108 0 0 0-4.108-4.108H43.238a4.109 4.109 0 0 0-4.109 4.108V65.79c0 1.293.608 2.51 1.642 3.286l16.08 12.073a4.109 4.109 0 0 0 4.934 0l16.08-12.073Zm-18.43 4.71a3.4 3.4 0 1 1 0-6.8 3.4 3.4 0 0 1 0 6.8Z"
            fill="#21BCA5" />
        </g>
        <defs>
          <filter id="a" x=".717" y=".018" width="117.203" height="138.561" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2.022" />
            <feGaussianBlur stdDeviation="1.264" />
            <feColorMatrix values="0 0 0 0 0.122709 0 0 0 0 0.138823 0 0 0 0 0.283843 0 0 0 0.02 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1292_45987" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="7.076" />
            <feGaussianBlur stdDeviation="4.296" />
            <feColorMatrix values="0 0 0 0 0.122709 0 0 0 0 0.138823 0 0 0 0 0.283843 0 0 0 0.04 0" />
            <feBlend in2="effect1_dropShadow_1292_45987" result="effect2_dropShadow_1292_45987" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="18.195" />
            <feGaussianBlur stdDeviation="19.206" />
            <feColorMatrix values="0 0 0 0 0.122709 0 0 0 0 0.138823 0 0 0 0 0.283843 0 0 0 0.07 0" />
            <feBlend in2="effect2_dropShadow_1292_45987" result="effect3_dropShadow_1292_45987" />
            <feBlend in="SourceGraphic" in2="effect3_dropShadow_1292_45987" result="shape" />
          </filter>
        </defs>
      </symbol> -->
    </svg>
  </div>
</template>

<style scoped>
.base-map {
  position: absolute;
  z-index: -1;
}

svg {
  width: 100%;
  height: auto;
  overflow: visible;
}

.green-group {
  fill: rgb(var(--nq-green-on-light));
}

.green-group path {
  filter: drop-shadow(0px 0px 2px rgba(var(--nq-green-on-light) / 0.5));
}

.marker-group use + text {
  pointer-events: none;
}

/* Map animation variables */
.map {
  --duration: 0.3s;
  --timing-function: ease-in-out;
  --delay: 0.1s;
}

/* Green groups */
.green-group {
  opacity: 0;

  transition: opacity var(--duration) var(--nq-ease);
}

/* Markers */
.marker-group use + use,
.marker-group use + use + text,
.small-marker-group use + use {
  opacity: 0;
  transform: translateY(16px);
  pointer-events: none;

  transition:
    transform var(--duration) var(--nq-ease),
    filter var(--duration) var(--nq-ease),
    opacity var(--duration) var(--nq-ease);
}

/* Animation for large markers & green groups */
.delayed .marker-group .marker-europe use,
.delayed .marker-group .marker-europe text {
  transition-delay: calc(var(--delay) * 2);
}
.delayed .green-group.europe {
  transition-delay: calc(var(--delay) * 2);
}

.delayed .marker-group .marker-australia use,
.delayed .marker-group .marker-australia text {
  transition-delay: calc(var(--delay) * 3);
}
.delayed .green-group.australia {
  transition-delay: calc(var(--delay) * 3);
}

/* Animation for small markers */
.delayed .small-marker-group .small-marker-1 use {
  transition-delay: calc(var(--delay) * 4);
}
.delayed .small-marker-group .small-marker-2 use {
  transition-delay: calc(var(--delay) * 5);
}
.delayed .small-marker-group .small-marker-3 use {
  transition-delay: calc(var(--delay) * 6);
}
.delayed .small-marker-group .small-marker-4 use {
  transition-delay: calc(var(--delay) * 7);
}
.delayed .small-marker-group .small-marker-5 use {
  transition-delay: calc(var(--delay) * 8);
}

/* Show green groups when visible */
.visible .green-group {
  opacity: 1;
}

/* Show markers when visible */
.visible .marker-group use + use,
.visible .marker-group use + use + text,
.visible .small-marker-group use + use {
  opacity: 1;
  transform: translateY(0);
}

/* Hover states */
.marker-group use:hover + use,
.marker-group use:hover + use + text,
.small-marker-group use:hover + use {
  transform: translateY(-8px);
}

.marker-group use + use,
.small-marker-group use + use {
  filter: drop-shadow(0px 0px 4px rgba(var(--nq-green-on-light) / 0.25));
}
</style>
