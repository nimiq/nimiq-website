<script setup lang="ts">
defineProps<{
  label: string
  href: string
}>()
</script>

<template>
  <a class="flex items-center gap-3 p-2 rounded-1 text-blue hover:bg-blue/6 focus:bg-blue/6 transition-colors" :href="href" target="_blank" rel="noreferrer">
    <span class="grid place-content-center rounded-full ring-[1.5px] ring-blue text-16 size-8">
      <Icon name="nimiq:triangle-right" />
    </span>
    <span class="font-bold">{{ label }}</span>
  </a>
</template>
