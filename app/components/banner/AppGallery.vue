<script setup lang="ts">
interface Props {
  title: string
  description: string
  categoriesLabel?: string
  categoriesDescription?: string
  cta: string
}
defineProps<Props>()

const { data: apps } = useApps()

const appsToShow = computed(() => {
  if (!apps.value?.communityApps)
    return []
  return [...apps.value.communityApps].sort(() => Math.random() - 0.5).slice(0, 6)
})
</script>

<template>
  <NuxtLink :to="cta" grid="~ cols-1 md:cols-[1fr_3fr] rows-[1fr_auto] gap-x-96 gap-y-32 md:gap-y-128" bg-neutral-0 w-full f-p-lg nq-hoverable>
    <div flex="~ col">
      <Icon name="custom:apps" class="size-40" />
      <h3 font-bold text-f-lg f-mt-xs>
        {{ title }}
      </h3>
      <p text-neutral-800 f-mt-2xs>
        {{ description }}
      </p>
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
      <p v-if="categoriesLabel" nq-label>
        {{ categoriesLabel }}
      </p>
      <p v-if="categoriesDescription" text-neutral-800 f-mt-xs>
        {{ categoriesDescription }}
      </p>
    </div>
  </NuxtLink>
</template>
