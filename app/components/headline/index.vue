<script setup lang="ts">
interface Action { href: string, label?: string, icon?: string, variant?: string, color?: string }
const props = defineProps<{ headline?: string, subline?: string, label?: string, icon?: string, actions?: Action[], buttons?: Action[], smallHeading?: boolean, compact?: boolean }>()

const actionItems = computed(() => props.actions ?? props.buttons ?? [])

function isExternal(url: string) {
  return url.startsWith('http') || url.startsWith('mailto')
}

function isPlainTertiary(action: Action) {
  return action.variant === 'tertiary' || action.variant === 'nq-pill-tertiary'
}

function getPillClass(action: Action) {
  if (action.color)
    return `nq-pill-${action.color}`
  if (action.variant?.startsWith('nq-pill-'))
    return action.variant
  if (action.variant === 'arrow')
    return 'nq-pill-blue'
  return action.variant ? `nq-pill-${action.variant}` : 'nq-pill-blue'
}
</script>

<template>
  <div class="flex flex-col md:items-center z-1">
    <Icon v-if="icon" class="text-54 opacity-15 mt-16 md:mt-20 lg:mt-24" :name="icon" />
    <p v-if="$slots.headline || label" class="mb-16 w-max block text-18 nq-label md:mx-auto">
      <slot name="headline" mdc-unwrap="p">
        {{ label }}
      </slot>
    </p>
    <h2 v-if="($slots.title || headline) && !smallHeading" class="nq-heading break-keep">
      <slot name="title" mdc-unwrap="p">
        {{ headline }}
      </slot>
    </h2>
    <h2 v-else-if="$slots.title || headline" class="break-keep font-normal leading-[1.3] text-neutral-900 max-w-none" style="--font-size-min: 17.5; --font-size-max: 22.4; font-size: var(--f-font-size)">
      <slot name="title" mdc-unwrap="p">
        {{ headline }}
      </slot>
    </h2>
    <h2 v-if="($slots.description || subline) && smallHeading && !headline && !$slots.title" class="break-keep">
      <slot name="description" mdc-unwrap="p">
        {{ subline }}
      </slot>
    </h2>
    <p v-else-if="$slots.description || subline" class="max-w-prose md:text-center">
      <slot name="description" mdc-unwrap="p">
        {{ subline }}
      </slot>
    </p>
    <ul v-if="actionItems.length" class="flex gap-16 lg:gap-20 flex-wrap f-mt-md">
      <li v-for="action in actionItems" :key="action.href">
        <NuxtLink v-if="!action.label" class="nq-arrow nq-pill-lg nq-pill-blue md:mx-auto" :to="action.href" :external="isExternal(action.href)" :target="isExternal(action.href) ? '_blank' : undefined" />
        <NuxtLink v-else-if="isPlainTertiary(action)" class="nq-arrow md:mx-auto font-semibold text-blue hover:text-blue-1100 focus:text-blue-1100 transition-colors" :to="action.href" :external="isExternal(action.href)" :target="isExternal(action.href) ? '_blank' : undefined">
          {{ action.label }}
        </NuxtLink>
        <NuxtLink v-else class="nq-arrow nq-pill-lg md:mx-auto" :to="action.href" :external="isExternal(action.href)" :target="isExternal(action.href) ? '_blank' : undefined" :class="getPillClass(action)">
          {{ action.label }}
        </NuxtLink>
      </li>
    </ul>
    <slot />
  </div>
</template>
