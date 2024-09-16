<script setup lang="ts">
import type { KeyTextField, LinkField } from '@prismicio/client'

defineProps({
  href: {
    default: () => ({}),
    type: Object as () => LinkField,
  },
  label: {
    default: '',
    type: String as () => KeyTextField,
  },
  disabled: {
    default: false,
    type: Boolean,
  },
  hasArrow: {
    default: false,
    type: Boolean,
  },
})

const emit = defineEmits(['onFocus', 'onBlur', 'onClick'])

const onFocus = () => emit('onFocus')
const onBlur = () => emit('onBlur')
const onClick = () => emit('onClick')
</script>

<template>
  <a
    v-if="href.link_type === 'Web' && label && 'url' in href"
    :href="href.url"
    target="_blank"
    rel="noopener noreferrer"
    :aria-disabled="disabled"
    :class="{ 'nq-arrow': hasArrow }"
    @focus="onFocus"
    @blur="onBlur"
    @click="onClick"
  >
    <slot />
    <span lh="[1.5]">{{ label }}</span>
  </a>

  <nuxt-link
    v-else-if="href.link_type === 'Document' && label && 'uid' in href"
    :to="href.uid"
    :aria-disabled="disabled"
    @focus="onFocus"
    @blur="onBlur"
  >
    <slot />
    <div :class="{ 'nq-arrow': hasArrow }">
      <span lh="[1.5]">{{ label }}</span>
    </div>
  </nuxt-link>
</template>
