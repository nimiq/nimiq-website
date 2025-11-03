<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.NewYorkGridSlice>())
</script>

<template>
  <ContentNewYorkGrid :slice="slice as any" />
</template>

<style scoped>
.one-image {
  grid-template-areas:
    'block1-image' 'block1-stat1' 'block1-stat2' 'block2-image' 'block2-stat1'
    'block2-stat2';

  @screen md {
    grid-template-areas: 'block1-image block1-image' 'block1-stat1 block1-stat2' 'block2-image block2-image' 'block2-stat1 block2-stat2';
  }

  @screen lg {
    grid-template-areas: 'block1-image block1-image block2-stat1 block2-stat2' 'block1-image block1-image block2-image block2-image' 'block1-stat1 block1-stat2 block2-image block2-image';
  }
}

.multiple-images {
  grid-template-areas: 'block1-image' 'block1-stat1' 'block2-image' 'block2-stat1';

  @screen lg {
    grid-template-areas: 'block1-image block2-stat1' 'block1-image block2-image' 'block1-stat1 block2-image';
  }
}
</style>
