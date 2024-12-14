<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.AlbatrossLiveviewSlice>())
</script>

<template>
  <section mx-0 bg-darkerblue class="dark" px-0 nq-pt-72 children:max-w-none>
    <AlbatrossLiveviewBlockchain w-full />
  </section>
</template>
