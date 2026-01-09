<script setup lang="ts">
interface Action { href: string, label?: string, icon?: string, variant?: string }
defineProps<{ headline?: string, subline?: string, label?: string, icon?: string, actions?: Action[], small?: boolean, compact?: boolean }>()

function isExternal(url: string) {
  return url.startsWith('http') || url.startsWith('mailto')
}
</script>

<template>
  <div flex="~ col md:items-center" :class="compact ? 'pb-24' : 'f-pb-40/56'" w-full>
    <Icon v-if="icon" :name="icon" class="text-54 op-15 f-mt-sm" />
    <p v-if="label" mb-16 w-max block nq-label f-text-sm md:mx-auto>
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
    <ul v-if="actions?.length" flex="~ gap-16 wrap" f-mt-lg md:mx-auto>
      <li v-for="action in actions" :key="action.href">
        <NuxtLink v-if="action.variant === 'arrow' && !action.label" :to="action.href" nq-arrow nq-pill-lg nq-pill-blue />
        <NuxtLink v-else-if="action.variant === 'arrow' && action.label" :to="action.href" :external="isExternal(action.href)" :target="isExternal(action.href) ? '_blank' : undefined" nq-pill-lg nq-pill-blue flex="~ items-center gap-8">
          <span>{{ action.label }}</span>
          <Icon name="nimiq:arrow-right" class="text-16" />
        </NuxtLink>
        <NuxtLink v-else :to="action.href" :external="isExternal(action.href)" :target="isExternal(action.href) ? '_blank' : undefined" nq-pill-lg :class="action.variant || 'nq-pill-blue'" flex="~ items-center gap-8">
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
