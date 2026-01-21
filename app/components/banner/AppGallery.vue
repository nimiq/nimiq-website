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
  <NuxtLink class="grid grid-cols-1 grid-md:cols-[1fr_3fr] grid-rows-[1fr_auto] gap-x-24 gap-y-8 grid-md:gap-y-32 bg-neutral-0 w-full f-p-lg nq-hoverable" :to="cta">
    <div class="flex flex-col">
      <Icon class="size-10" name="custom:apps" />
      <h3 class="font-bold text-f-lg f-mt-xs">
        {{ title }}
      </h3>
      <p class="text-neutral-800 f-mt-2xs">
        {{ description }}
      </p>
    </div>

    <div class="row-span-2 relative">
      <div class="w-125% h-145% border-16 border-solid border-neutral-400 rounded-6 inset-0 absolute">
        <ul class="grid grid-cols-3 rounded-2 bg-white size-full f-p-sm f-gap-sm">
          <li v-for="app in appsToShow" :key="app.name" class="rounded-2" :style="`background: ${app.color}`" stack>
            <NuxtImg class="f-size-136/180 object-contain mix-blend-lighten" :src="app.logo" />
          </li>
        </ul>
      </div>
    </div>

    <div class="flex flex-col">
      <p v-if="categoriesLabel" class="nq-label">
        {{ categoriesLabel }}
      </p>
      <p v-if="categoriesDescription" class="text-neutral-800 f-mt-xs">
        {{ categoriesDescription }}
      </p>
    </div>
  </NuxtLink>
</template>
