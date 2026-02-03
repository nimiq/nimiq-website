<script setup lang="ts">
interface Action { href: string, label?: string, icon?: string, variant?: string, color?: string }
const props = defineProps<{ headline?: string, subline?: string, label?: string, icon?: string, actions?: Action[], buttons?: Action[], smallHeading?: boolean, compact?: boolean }>()

// Support both actions and buttons (Studio uses buttons)
const actionItems = computed(() => props.actions ?? props.buttons ?? [])

function isExternal(url: string) {
  return url.startsWith('http') || url.startsWith('mailto')
}

// Map Studio color property to nimiq-css pill class
function getPillClass(action: Action) {
  if (action.color)
    return `nq-pill-${action.color}`
  // If variant already has nq-pill- prefix, use directly; otherwise add prefix
  if (action.variant?.startsWith('nq-pill-'))
    return action.variant
  return action.variant ? `nq-pill-${action.variant}` : 'nq-pill-blue'
}
</script>

<template>
  <div class="flex flex-col md:items-center z-1" :class="compact ? 'pb-6' : ''">
    <Icon v-if="icon" class="text-54 opacity-15 mt-16 md:mt-20 lg:mt-24" :name="icon" />
    <p v-if="label" class="mb-16 w-max block text-12 md:text-13 lg:text-14 nq-label md:mx-auto">
      {{ label }}
    </p>
    <h2 v-if="headline && !smallHeading" class="break-keep md:text-center">
      {{ headline }}
    </h2>
    <h2 v-else-if="headline" class="break-keep md:text-center font-normal leading-[1.3] text-[clamp(calc(14*1.25*1px),calc(14*1.25*1px+(16*1.4-14*1.25)*((100vw-375px)/(1440-375))),calc(16*1.4*1px))] text-neutral-900 max-w-none">
      {{ headline }}
    </h2>
    <p v-if="subline" class="max-w-prose md:text-center">
      {{ subline }}
    </p>
    <ul v-if="actionItems.length" class="flex gap-16 lg:gap-20 flex-wrap mt-24 md:mt-28 lg:mt-32">
      <li v-for="action in actionItems" :key="action.href">
        <NuxtLink v-if="!action.label" class="nq-arrow nq-pill-lg nq-pill-blue md:mx-auto" :to="action.href" :external="isExternal(action.href)" :target="isExternal(action.href) ? '_blank' : undefined" />
        <NuxtLink v-else class="nq-arrow nq-pill-lg md:mx-auto" :to="action.href" :external="isExternal(action.href)" :target="isExternal(action.href) ? '_blank' : undefined" :class="getPillClass(action)">
          {{ action.label }}
        </NuxtLink>
      </li>
    </ul>
    <slot />
  </div>
</template>
