<script lang="ts">
export enum ModalName {
  TechnicalDetails = 'technical-details',
}
</script>

<script setup lang="ts">
const props = defineProps<{ name: ModalName }>()
const emit = defineEmits<{ close: [] }>()
const slots = defineSlots<{ trigger: () => any, title: () => any, content: () => any, description: () => any, top?: () => any }>()

const open = defineModel<boolean>('open')

// Keep state in the URL
const route = useRoute()
const router = useRouter()
const queryName = 'modal'
open.value = route.query[queryName] === props.name
watch(open, (v) => {
  requestAnimationFrame(() => router.replace({ query: { ...route.query, [queryName]: v ? props.name : undefined } }))
  if (!v)
    emit('close')
})
onUnmounted(() => router.replace({ query: { ...route.query, [queryName]: undefined } }))
</script>

<template>
  <DialogRoot v-model:open="open">
    <DialogTrigger v-bind="$attrs" bg-transparent>
      <slot name="trigger" />
    </DialogTrigger>
    <DialogPortal>
      <Transition name="backdrop">
        <DialogOverlay bg-darkblue op-60 inset-0 fixed z-200 />
      </Transition>
      <Transition name="modal">
        <DialogContent
          :key="name" lg="top-1/2 left-1/2 translate--1/2" rounded="t-8 lg:8"
          outline-none data-modal h-max max-h-85dvh w-full shadow-lg transform bottom-0 fixed z-200 of-y-auto lg:max-w-500
          @open-auto-focus.prevent
        >
          <div py-32 bg-neutral-0 relative ring="1.5 neutral/3" class="modal-container">
            <div v-if="slots.top" mt--32>
              <slot name="top" />
            </div>

            <DialogTitle text="24 center neutral lh-24" font-bold lh-none mb-12 px-24 lg:px-40 as="h2">
              <slot name="title" />
            </DialogTitle>
            <DialogDescription text="center neutral" px-24 block lg:px-40>
              <slot name="description" />
            </DialogDescription>

            <div mt-12 px-24 rounded-b-8 lg:px-40>
              <slot name="content" />
            </div>

            <DialogClose aria-label="Close" close-btn text-28 right-16 top-16 absolute />
          </div>
        </DialogContent>
      </Transition>
    </DialogPortal>
  </DialogRoot>
</template>

<style scoped>
/* https://github.com/nimiq/wallet/blob/a88d34bfa16930adbfd52baaa5b0809c38c5c365/src/components/modals/Modal.vue */

.backdrop-enter-active {
  transition: opacity 650ms cubic-bezier(0.3, 1, 0.2, 1);
}

.backdrop-leave-active {
  transition: opacity 650ms cubic-bezier(0.3, 0, 0, 1);
}

.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}

@screen lt-lg {
  .modal-enter-active,
  .modal-leave-active {
    transition: transform 200ms ease-out;
  }

  .modal-enter-from,
  .modal-leave-to {
    --un-translate-y: 100%;
  }
}

@screen lg {
  .modal-enter-active,
  .modal-leave-active {
    transition:
      opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
      transform 100ms var(--nq-ease);
  }

  .modal-enter-from,
  .modal-leave-to {
    opacity: 0;
    --un-scale-x: 0.96;
    --un-scale-y: 0.96;
    --un-translate-y: calc(-50% - 0.5rem);
  }
}

[data-modal]:not([class*='modal-']) {
  transition:
    transform 400ms ease-out,
    filter 450ms cubic-bezier(0.3, 0, 0, 1);
}
</style>
