<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.AppGallerySlice>())

const bgColor = getColorClass(slice.primary.bgColor || 'grey')

const { data: apps } = useApps()

const appsToShow = computed(() => {
  if (!apps.value?.apps)
    return []
  return [...apps.value.apps]
    .sort(() => Math.random() - 0.5)
    .filter(app => app.developer !== '@nimiq')
    .slice(0, 6)
})
</script>

<template>
  <section :class="bgColor">
    <PrismicLink
      :field="slice.primary.cta"
      grid="~ cols-1 md:cols-[1fr_3fr] rows-[1fr_auto] gap-x-96 gap-y-32 md:gap-y-128" w-full f-p-lg nq-hoverable
    >
      <div flex="~ col">
        <div i-custom:apps size-40 />
        <PrismicRichText :field="slice.primary.title" f-mt-xs />
        <PrismicRichText :field="slice.primary.description" text-neutral-800 f-mt-2xs />
      </div>

      <div row-span-2 relative>
        <div w="125%" h="145%" border="16 solid neutral-400" rounded-24 inset-0 absolute>
          <ul grid="~ cols-3" rounded-8 bg-white size-full f-p-sm f-gap-sm>
            <li v-for="app in appsToShow" :key="app.name" :style="`background: ${app.color}`" stack rounded-8>
              <NuxtImg :src="app.logo" f-size="136/180" object-contain mix-blend-lighten />
            </li>
          </ul>
        </div>
      </div>

      <div flex="~ col">
        <p nq-label>
          {{ slice.primary.categoriesLabel }}
        </p>
        <p text-neutral-800 f-mt-xs>
          {{ slice.primary.categoriesDescription }}
        </p>
      </div>
    </PrismicLink>
  </section>
</template>
