<script setup lang="ts">
interface Action { href: string, label?: string, icon?: string, variant?: string, color?: string }
const props = defineProps<{ headline?: string, subline?: string, label?: string, icon?: string, actions?: Action[], buttons?: Action[], small?: boolean, compact?: boolean }>()

// Support both actions and buttons (Studio uses buttons)
const actionItems = computed(() => props.actions ?? props.buttons ?? [])

function isExternal(url: string) {
  return url.startsWith('http') || url.startsWith('mailto')
}

// Map Studio color property to nimiq-css pill class
function getPillClass(action: Action) {
  if (action.color)
    return `nq-pill-${action.color}`
  return action.variant || 'nq-pill-blue'
}
</script>

<template>
  <div flex="~ col md:items-center" :class="compact ? 'pb-24' : 'f-pb-40/56'" w-full>
    <Icon v-if="icon" :name="icon" class="text-54 op-15 f-mt-sm" />
    <p v-if="label" mb-16 w-max block f-text-sm nq-label md:mx-auto>
      {{ label }}
    </p>
    <h2 v-if="headline && !small" nq-heading font-semibold max-w-none break-keep md:text-center>
      {{ headline }}
    </h2>
    <h2 v-else-if="headline && small" break-keep md:text-center class="heading-small">
      {{ headline }}
    </h2>
    <p v-if="subline" max-w-prose md:text-center :class="!headline ? '' : ''">
      {{ subline }}
    </p>
    <ul v-if="actionItems.length" flex="~ gap-16 wrap" f-mt-lg md:mx-auto>
      <li v-for="action in actionItems" :key="action.href">
        <NuxtLink v-if="action.variant === 'arrow' && !action.label" :to="action.href" nq-arrow nq-pill-lg nq-pill-blue />
        <NuxtLink v-else-if="action.variant === 'arrow' && action.label" :to="action.href" :external="isExternal(action.href)" :target="isExternal(action.href) ? '_blank' : undefined" nq-pill-lg nq-pill-blue flex="~ items-center gap-8">
          <span>{{ action.label }}</span>
          <Icon name="nimiq:arrow-right" class="text-16" />
        </NuxtLink>
        <NuxtLink v-else :to="action.href" :external="isExternal(action.href)" :target="isExternal(action.href) ? '_blank' : undefined" nq-pill-lg :class="getPillClass(action)" flex="~ items-center gap-8">
          <Icon v-if="action.icon" :name="action.icon" class="text-20" />
          <span v-if="action.label">{{ action.label }}</span>
          <Icon v-if="isExternal(action.href) && !action.icon" name="nimiq:arrow-top-right" class="text-16" />
        </NuxtLink>
      </li>
    </ul>
    <slot />
  </div>
</template>

<style scoped>
/* Small heading style (h4 visual appearance) */
.heading-small {
  font-weight: 400 !important;
  line-height: 1.3 !important;
  font-size: 18px !important;
  color: var(--colors-neutral) !important;
  max-width: none !important;
}
</style>
