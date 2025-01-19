<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.AlbatrossLiveviewSlice>())
</script>

<template>
  <section class="dark" mx-0 bg-darkerblue px-0 f-p-xl children:max-w-none>
    <AlbatrossLiveviewBlockchain w-full />
  </section>
</template>
