<script setup lang="ts">
import { components } from '~/slices'

const { client } = usePrismic()

const { data: document } = await useAsyncData('page', async () => {
  const document = await client.getSingle('home')
  if (!document)
    throw createError({ statusCode: 404, message: 'Page not found' })
  console.log(document)
  return document
})
</script>

<template>
  <slice-zone :components="components" :slices="document!.data.slices" />
</template>
