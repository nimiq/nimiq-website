<script setup lang="ts">
import { components } from '~/slices'

const { client } = usePrismic()

const { data: document, status } = await useAsyncData('page', async () => {
  const document = await client.getSingle('home')
  if (!document)
    throw createError({ statusCode: 404, message: 'Page not found' })
  return document
})
</script>

<template>
  <slice-zone v-if="status === 'success'" :components="components" :slices="document?.data.body" />
</template>
