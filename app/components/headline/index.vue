<script setup lang="ts">
interface Action { href: string, label?: string, icon?: string, variant?: string }
const props = defineProps<{ headline?: string, subline?: string, label?: string, icon?: string, actions?: Action[] }>()

// If we have a label, the subline should be H4 (it's part of the headline group)
// Otherwise it's just a regular description paragraph
const sublineIsHeading = !!props.label

function isExternal(url: string) {
  return url.startsWith('http') || url.startsWith('mailto')
}
</script>

<template>
  <div flex="~ col md:items-center" f-pb="56/96">
    <Icon v-if="icon" :name="icon" class="text-54 op-15 f-mt-sm" />
    <p v-if="label" mb-16 w-max block nq-label text-15 md:mx-auto>
      {{ label }}
    </p>
    <h2 v-if="headline" nq-heading font-semibold max-w-none break-keep md:text-center>
      {{ headline }}
    </h2>
    <h4 v-if="subline && sublineIsHeading" max-w-prose md:text-center text-22 font-semibold>
      {{ subline }}
    </h4>
    <p v-else-if="subline" max-w-prose md:text-center class="text-neutral-700/85">
      {{ subline }}
    </p>
    <ul v-if="actions?.length" flex="~ gap-16 wrap" f-mt-lg md:mx-auto>
      <li v-for="action in actions" :key="action.href">
        <NuxtLink v-if="action.variant === 'arrow' && !action.label" :to="action.href" nq-arrow nq-pill-lg nq-pill-blue />
        <NuxtLink v-else-if="action.variant === 'arrow' && action.label" :to="action.href" :external="isExternal(action.href)" :target="isExternal(action.href) ? '_blank' : undefined" nq-pill-lg nq-pill-blue flex="~ items-center gap-8">
          <span>{{ action.label }}</span>
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
