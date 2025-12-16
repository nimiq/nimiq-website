<script setup lang="ts">
interface Action { href: string, label?: string, icon?: string, variant?: 'arrow' | 'primary' | 'secondary' }
defineProps<{ headline: string, subline?: string, label?: string, icon?: string, actions?: Action[] }>()

function isExternal(url: string) {
  return url.startsWith('http') || url.startsWith('mailto')
}
</script>

<template>
  <div flex="~ col md:items-center" f-pb="56/96">
    <Icon v-if="icon" :name="icon" class="text-54 op-15 f-mt-sm" />
    <p v-if="label" mb-16 w-max block f-text-sm nq-label md:mx-auto>
      {{ label }}
    </p>
    <h2 nq-heading font-semibold max-w-none break-keep md:text-center>
      {{ headline }}
    </h2>
    <p v-if="subline" max-w-prose md:text-center>
      {{ subline }}
    </p>
    <div v-if="actions?.length" flex="~ gap-16 wrap" f-mt-lg md:mx-auto>
      <template v-for="action in actions" :key="action.href">
        <NuxtLink v-if="action.variant === 'arrow'" :to="action.href" nq-arrow nq-pill-lg nq-pill-blue />
        <NuxtLink v-else :to="action.href" :external="isExternal(action.href)" :target="isExternal(action.href) ? '_blank' : undefined" nq-pill-lg :class="action.variant === 'secondary' ? 'nq-pill-secondary' : 'nq-pill-blue'" flex="~ items-center gap-8">
          <Icon v-if="action.icon" :name="action.icon" class="text-20" />
          <span v-if="action.label">{{ action.label }}</span>
        </NuxtLink>
      </template>
    </div>
    <slot />
  </div>
</template>
