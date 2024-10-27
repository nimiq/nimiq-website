<script setup lang="ts">
// No props or logic needed for now
</script>

<template>
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
      <use href="#marker" class="marker-europe" width="160" x="350" y="-175" />
      <use href="#marker" class="marker-australia" width="160" x="800" y="70" />
    </g>

    <g class="small-marker-group">
      <use href="#small-marker" class="small-marker-1" width="80" x="15" y="7" />
      <use href="#small-marker" class="small-marker-2" width="80" x="135" y="-90" />
      <use href="#small-marker" class="small-marker-3" width="80" x="182" y="45" />
      <use href="#small-marker" class="small-marker-4" width="80" x="326" y="-39" />
      <use href="#small-marker" class="small-marker-5" width="80" x="614" y="-61" />
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
        d="M73.29 104.051v-1.327l3.267-3.407c.41-.428.712-.824.907-1.187a2.33 2.33 0 0 0 .294-1.117c0-.475-.15-.833-.447-1.075-.298-.242-.73-.363-1.299-.363a3.51 3.51 0 0 0-1.312.251 4.14 4.14 0 0 0-1.23.754l-.586-1.34c.4-.354.894-.638 1.48-.852a5.49 5.49 0 0 1 1.872-.321c1.06 0 1.876.237 2.443.712.568.475.852 1.154.852 2.039 0 .614-.144 1.2-.433 1.759-.288.55-.735 1.126-1.34 1.732l-2.723 2.722v-.474h4.887v1.494H73.29Zm11.472.139c-1.154 0-2.043-.437-2.667-1.312-.624-.885-.936-2.141-.936-3.77 0-1.648.312-2.9.936-3.757.624-.856 1.513-1.284 2.667-1.284 1.164 0 2.053.428 2.667 1.284.624.857.936 2.104.936 3.743 0 1.638-.312 2.899-.936 3.784-.614.875-1.503 1.312-2.667 1.312Zm0-1.48c.633 0 1.103-.288 1.41-.865.308-.587.461-1.504.461-2.751 0-1.248-.153-2.15-.46-2.71-.308-.567-.778-.851-1.411-.851-.624 0-1.094.284-1.41.852-.308.558-.461 1.461-.461 2.709 0 1.247.153 2.164.46 2.751.317.577.787.865 1.411.865Zm8.373 1.48c-1.155 0-2.044-.437-2.667-1.312-.624-.885-.936-2.141-.936-3.77 0-1.648.312-2.9.936-3.757.623-.856 1.512-1.284 2.667-1.284 1.163 0 2.052.428 2.667 1.284.623.857.935 2.104.935 3.743 0 1.638-.311 2.899-.935 3.784-.615.875-1.504 1.312-2.667 1.312Zm0-1.48c.633 0 1.103-.288 1.41-.865.307-.587.46-1.504.46-2.751 0-1.248-.153-2.15-.46-2.71-.307-.567-.777-.851-1.41-.851-.624 0-1.094.284-1.41.852-.308.558-.461 1.461-.461 2.709 0 1.247.153 2.164.46 2.751.317.577.787.865 1.41.865Zm8.372 1.48c-1.154 0-2.043-.437-2.667-1.312-.623-.885-.935-2.141-.935-3.77 0-1.648.312-2.9.935-3.757.624-.856 1.513-1.284 2.667-1.284 1.164 0 2.053.428 2.668 1.284.623.857.935 2.104.935 3.743 0 1.638-.312 2.899-.935 3.784-.615.875-1.504 1.312-2.668 1.312Zm0-1.48c.633 0 1.104-.288 1.411-.865.307-.587.461-1.504.461-2.751 0-1.248-.154-2.15-.461-2.71-.307-.567-.778-.851-1.411-.851-.623 0-1.093.284-1.41.852-.307.558-.46 1.461-.46 2.709 0 1.247.153 2.164.46 2.751.317.577.787.865 1.41.865Z"
        fill="#FEFEFE"
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
  </svg>
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

.marker-group use,
.small-marker-group use {
  --duration: 0.3s;
  --timing-function: ease-in-out;

  transition:
    transform var(--duration) var(--nq-ease),
    filter var(--duration) var(--nq-ease);

  filter: drop-shadow(0px 0px 4px rgba(var(--nq-green-on-light) / 0.25));
}

.marker-group use:hover,
.small-marker-group use:hover {
  transform: translateY(-8px);
  filter: drop-shadow(0px 0px 8px rgba(var(--nq-green-on-light) / 0.5));
}
</style>
