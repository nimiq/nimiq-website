<script setup lang="ts">
defineProps({
  placeholder: {
    default: null,
    type: String,
  },
  isInverted: {
    default: false,
    type: Boolean,
  },
  isBig: {
    default: false,
    type: Boolean,
  },
})

const email = ref('')
// eslint-disable-next-line regexp/no-unused-capturing-group
const regex = /^((?!\.)[\w\-.]*[^.])(@\w+)(\.\w+(\.\w+)?\w)$/
const isEmailValid = computed(() => email.value.length > 0 && regex.test(email.value))
</script>

<template>
  <form
    action="https://nimiq.us16.list-manage.com/subscribe/post?u=2ea4eaf6edab73606137ddf65&id=237bea39f9"
    method="post"
    name="mc-embedded-subscribe-form"
    :class="{ 'is-valid': isEmailValid }"
    class="newsletter-subscription relative z-1"
  >
    <input
      v-model="email"
      type="email"
      name="EMAIL"
      required
      class="text-ellipsis rounded-full py-8 pr-40 text-14 nq-input-box focus:[--ring-color:lightBlue]"
      :placeholder="placeholder || 'Enter email address...'"
    >

    <!-- Hidden input for form bot detection that should not be filled in by users. -->
    <input class="hidden" name="b_2ea4eaf6edab73606137ddf65_237bea39f9" type="text" tabindex="-1" aria-hidden="true">

    <button type="submit" class="submit-button" :disabled="!isEmailValid">
      <div class="nq-arrow" mr-3 text-12 />
    </button>
  </form>
</template>

<style scoped>
.submit-button {
  @apply flex items-center absolute right-4 top-2 justify-center size-32 rounded-full transition-colors bg-neutral/10 cursor-not-allowed;
}

.newsletter-subscription {
  @apply flex gap-8 h-40 relative;

  .nq-arrow {
    @apply text-neutral-700;
  }

  &.is-valid {
    .submit-button {
      @apply bg-none bg-gradient-blue hocus:bg-gradient-blue cursor-pointer;
    }

    .nq-arrow {
      @apply text-white;
    }
  }
}
</style>
