<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <div class="relative size-full flex items-start justify-start px-16 py-12" style="font-family: 'Mulish'">
    <svg xmlns="http://www.w3.org/2000/svg" class="absolute bottom-32 right--45 h-90 w-100 op-6" width="20" height="18" fill="none"><path fill="#1F2348" d="M19.73 8.16 15.58.84c-.3-.52-.85-.84-1.45-.84H5.82c-.6 0-1.14.32-1.44.84L.22 8.16c-.3.52-.3 1.16 0 1.68l4.16 7.32c.3.52.85.84 1.44.84h8.31c.6 0 1.15-.32 1.44-.84l4.16-7.32c.3-.52.3-1.16 0-1.68Z" /></svg>
    <svg xmlns="http://www.w3.org/2000/svg" class="absolute bottom--90 left--40 h-135 w-150 op-4" width="20" height="18" fill="none"><path fill="#1F2348" d="M19.73 8.16 15.58.84c-.3-.52-.85-.84-1.45-.84H5.82c-.6 0-1.14.32-1.44.84L.22 8.16c-.3.52-.3 1.16 0 1.68l4.16 7.32c.3.52.85.84 1.44.84h8.31c.6 0 1.15-.32 1.44-.84l4.16-7.32c.3-.52.3-1.16 0-1.68Z" /></svg>
    <div class="mt-10 w-full flex flex-1 flex-col items-center justify-center">
      <p class="text-20 text-[#1f2348] font-bold">
        {{ title }}
      </p>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-28 self-center" width="76" height="19" fill="none"><path fill="url(#a)" d="m20.05 8.65-4.2-7.3c-.3-.53-.86-.85-1.46-.85H5.97c-.6 0-1.15.32-1.45.84L.32 8.65a1.7 1.7 0 0 0 0 1.7l4.2 7.3c.3.53.85.85 1.45.85h8.42c.6 0 1.15-.32 1.45-.85l4.2-7.3a1.7 1.7 0 0 0 .01-1.7Z" /><path fill="#1F2348" d="M35 4.15h1.83v10.7h-1.41l-5.75-7.46v7.45h-1.82V4.15h1.4L35 11.61V4.15Zm5.47 10.69V4.15h1.96v10.7h-1.96ZM54.9 4.15h1.55v10.7h-1.68V8.22l-2.88 6.61h-1.26l-2.87-6.6v6.6h-1.69V4.15h1.55l3.64 8.37 3.65-8.37Zm5.2 10.69V4.15h1.96v10.7H60.1Zm15.07-2.44a4.44 4.44 0 0 1-2.25 2.14c.1.22.53.81.86 1.15.32.35.67.7 1.1 1.05l-1.32 1.06a8.96 8.96 0 0 1-2.5-2.83l-.45.01a5.51 5.51 0 0 1-2.77-.66 4.38 4.38 0 0 1-1.8-1.91 6.59 6.59 0 0 1-.62-2.91c0-1.14.21-2.08.63-2.91a4.44 4.44 0 0 1 1.8-1.91c.78-.45 1.7-.67 2.76-.67 1.06 0 2 .23 2.77.67a4.38 4.38 0 0 1 1.8 1.91c.41.83.62 1.77.62 2.9a6.6 6.6 0 0 1-.63 2.92Zm-6.93.01a2.92 2.92 0 0 0 2.37 1.03 2.9 2.9 0 0 0 2.38-1.03c.56-.68.85-1.64.85-2.91 0-1.26-.29-2.25-.85-2.92a2.93 2.93 0 0 0-2.38-1.02c-1.02 0-1.81.34-2.37 1-.57.68-.85 1.67-.85 2.94s.28 2.23.85 2.91Z" /><defs><radialGradient id="a" cx="0" cy="0" r="1" gradientTransform="matrix(20.2 0 0 20.26 15.27 18.26)" gradientUnits="userSpaceOnUse"><stop stop-color="#EC991C" /><stop offset="1" stop-color="#E9B213" /></radialGradient></defs></svg>
  </div>
</template>
