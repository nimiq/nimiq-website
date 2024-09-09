<script setup lang="ts">
import { components } from '~/slices'

const prismic = usePrismic()
const { data: page } = useAsyncData('[home_2024]', () => prismic.client.getSingle('home_2024'))

useHead({
  title: page.value?.data.meta_title,
  meta: [
    {
      name: 'description',
      content: page.value?.data.meta_description,
    },
  ],
})
</script>

<template>
  <SliceZone wrapper="main" :slices="page?.data.slices ?? []" :components="components" />
</template>
