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
  <div class="flex flex-col flex-md:items-center w-full" :class="compact ? 'pb-6' : 'pb-10 md:pb-14'">
    <Icon v-if="icon" class="text-54 op-15 mt-3 md:mt-4" :name="icon" />
    <p v-if="label" class="mb-4 w-max text-xs md:text-sm nq-label md:mx-auto uppercase" block>
      {{ label }}
    </p>
    <h2 v-if="headline && !smallHeading" class="nq-heading font-semibold max-w-none break-keep md:text-center">
      {{ headline }}
    </h2>
    <h2 v-else-if="headline" class="break-keep md:text-center font-normal lh-1.3 text-[clamp(calc(14*1.25*1px),calc(14*1.25*1px+(16*1.4-14*1.25)*((100vw-375px)/(1440-375))),calc(16*1.4*1px))] text-neutral-900 max-w-none">
      {{ headline }}
    </h2>
    <p v-if="subline" class="max-w-prose md:text-center" :class="!headline ? '' : ''">
      {{ subline }}
    </p>
    <ul v-if="actionItems.length" class="flex gap-4 flex-wrap mt-6 md:mt-8 md:mx-auto">
      <li v-for="action in actionItems" :key="action.href">
        <NuxtLink v-if="action.variant === 'arrow' && !action.label" class="nq-arrow nq-pill-lg nq-pill-blue" :to="action.href" />
        <NuxtLink v-else-if="action.variant === 'arrow' && action.label" class="nq-pill-lg nq-pill-blue flex flex-items-center gap-2" :to="action.href" :external="isExternal(action.href)" :target="isExternal(action.href) ? '_blank' : undefined">
          <span>{{ action.label }}</span>
          <Icon class="text-16" name="nimiq:arrow-right" />
        </NuxtLink>
        <NuxtLink v-else class="nq-pill-lg flex flex-items-center gap-2" :to="action.href" :external="isExternal(action.href)" :target="isExternal(action.href) ? '_blank' : undefined" :class="getPillClass(action)">
          <Icon v-if="action.icon" class="text-20" :name="action.icon" />
          <span v-if="action.label">{{ action.label }}</span>
          <Icon v-if="isExternal(action.href) && !action.icon" class="text-16" name="nimiq:arrow-top-right" />
        </NuxtLink>
      </li>
    </ul>
    <slot />
  </div>
</template>
