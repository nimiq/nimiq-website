<script setup lang="ts">
const { link: _link, name } = defineProps<{ color: string, link: string, logo: string, type: string, name: string, description: string, developer?: string }>()

const url = 'https://nimiq.com'
const link = _link.replace(/\/$/, '').replace(url, '')

// @unocss-include
const logoConfig: Record<string, { classes?: string, invert?: boolean }> = {
  'NIM Donations': { invert: true },
  'Multisig Wallet': { invert: true },
  'Cryptopayment.link': { invert: true, classes: 'scale-90' },
  'NimWorld': { invert: true, classes: 'scale-120' },
  'Nimiq Tip Bot': { classes: 'drop-shadow' },
  'Trust Wallet': { classes: 'scale-130' },
  'Nimtris': { classes: 'scale-130' },
  'Nimiq Game': { classes: 'scale-85' },
  'Nimiq Game Store': { classes: 'scale-70' },
  'Nimiq 2048': { classes: 'scale-70' },
  'Staking Calculator': { classes: 'scale-115' },
}

const logoClasses = computed(() => {
  const config = logoConfig[name]
  if (!config)
    return ''
  const classes = []
  if (config.invert)
    classes.push('invert brightness-0')
  if (config.classes)
    classes.push(config.classes)
  return classes.join(' ')
})
</script>

<template>
  <NuxtLink :to="link" target="_blank" w="[min(calc(100vw-var(--px,32px)*2),350px)]" :style="`--c: ${color}`" external group p-6 rounded-6 gap-24 h-full nq-hoverable :aria-label="`Go to ${name} website`">
    <div bg="$c" stack mb-0 rounded-4 h-240>
      <div v-if="name === 'Nimiq Tip Bot'" text="white/80" size-96 i-nimiq:logos-telegram-mono />
      <NuxtImg v-else :src="logo" max-w="45%" rounded-4 h-auto max-h-full min-w-82 object-cover :class="logoClasses" />
      <p text="12 white/70" self-start right-12 top-12 justify-self-end relative nq-label>
        {{ type }}
      </p>
    </div>
    <div p-26 pt-0 flex-1 flex="~ col gap-12">
      <h3>{{ name }}</h3>
      <p text="neutral-800 group-hover:neutral-900" nq-prose-compact mt-0 transition-colors f-pt-2xs>
        {{ description }}
      </p>

      <div class="nq-hoverable-cta" mt-auto w-max>
        <p v-if="developer" text-14 nq-label>
          By <span text-blue>{{ developer }}</span>
        </p>
      </div>
    </div>
  </NuxtLink>
</template>
