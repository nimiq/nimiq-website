<script setup lang="ts">
interface AlbatrossLiveviewSlice {
  primary: Record<string, never>
}

defineProps<{ slice: AlbatrossLiveviewSlice, slices?: any[] }>()
</script>

<template>
  <section class="dark" mx-0 px-0 bg-darkerblue f-pt-xl children:max-w-none>
    <AlbatrossLiveviewBlockchain w-full />
  </section>
</template>
