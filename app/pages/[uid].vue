<script setup lang="ts">
import type { Content } from '@prismicio/client'
import { components } from '~/slices'

const route = useRoute()

// @ts-expect-error - `uid` is defined
const uid = route.params.uid

const { data: page } = usePrismicDocumentByUID<Content.PageDocument>('page', uid)

useHead({
  title: page.value?.data.meta_title,
  meta: [
    { name: 'description', content: page.value?.data.meta_description },
  ],
})

// TODO Do image
defineOgImageComponent('DefaultImage')
</script>

<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <SliceZone wrapper="main" :slices="page?.data.slices ?? []" :components="components" />
    <div fixed bottom-32 right-32 z-102>
      <LockBadge v-if="page?.data.draft" />
    </div>
  </NuxtLayout>
</template>
