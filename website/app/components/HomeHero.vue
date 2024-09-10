<script setup lang="ts">
import type { KeyTextField, LinkField, TitleField } from '@prismicio/client'
import type { Database } from '~/types/database.types'
import TweenedNumber from '../../../base/components/TweenedNumber.vue'
// import type { Database } from '~/types/database.types'

const props = defineProps<{ headline: TitleField, sublineTemplate: KeyTextField, cta: LinkField, ctaLabel: KeyTextField }>()

const supabase = useSupabaseClient<Database>()

const { data: locationsCount } = useAsyncData('locationStats', async () => {
  const { data, error } = await supabase.rpc('get_stats')
  if (error || !data)
    throw createError('Error fetching continent stats')
  const locations = (data as { locations: number }).locations!
  return locations
})

// @unocss-include

const { language } = useNavigatorLanguage()

const locationsSpan = h('span', { class: 'text-blue' }, [
  h(TweenedNumber, {
    value: locationsCount.value || 0,
    min: 0,
    max: locationsCount.value || 20_000,
    animationDuration: 1300,
    locale: language.value,
    digitsCount: 5,
  }),
  ' locations',
])

const subheadline = computed(() => {
  const pre = props.sublineTemplate?.split('{{')[0]?.toString()
  const post = props.sublineTemplate?.split('}}')[1]?.toString()
  return h('p', {}, [pre, locationsSpan, post])
})
</script>

<template>
  <section class="dark pt-96 *:!max-w-initial" relative of-hidden>
    <div z-10 children:md:mx-auto>
      <PrismicText :field="headline" wrapper="h1" />
      <component :is="subheadline" text="white/80" />
      <PrismicLink mt-40 :field="cta" nq-arrow nq-pill-lg nq-pill-blue>
        {{ ctaLabel }}
      </PrismicLink>
    </div>
    <NuxtImg pointer-events-none absolute inset-0 m-0 size-full src="/assets/images/gods-light.webp" />
    <div bg-gradient="to-b from-darkblue/0 to-darkblue" pointer-events-none absolute inset-0 m-0 op-80 />
    <div class="world-container" pointer-events-none absolute bottom-0 flex="~ justify-center" mx-0 of-y-hidden>
      <div class="ellipse blue-ring" of-hidden />
    </div>
    <div bg="darkblue/10" pointer-events-none absolute inset-0 backdrop-blur-40 />
    <div class="world-container" flex="~ justify-center" pointer-events-none mx-0 of-y-hidden>
      <div class="ellipse" flex="~ justify-center" of-hidden bg-white pt="16 lg:24">
        <div h="220 lg:330 xl:550" i-continents:world-dots min-w-600 op-20 lg:w-1200 />
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  --mt-ellipsis: 128px;
  --aspect-ratio: 1.6;
  --uno: '[--ellipsis-width:200vw] md:[--ellipsis-width:300vh]';
  --ellipsis-height: calc(var(--ellipsis-width) / var(--aspect-ratio));

  .world-container {
    margin-top: var(--mt-ellipsis);
    --uno: 'h-220 lg:h-330';

    .ellipse {
      height: var(--ellipsis-height);
      clip-path: ellipse(50% 50% at 50% 50%);
      aspect-ratio: var(--aspect-ratio);
    }

    &:has(.blue-ring) {
      --uno: 'h-252 lg:h-362';
    }

    .blue-ring {
      background: radial-gradient(100% 100% at 100% 100%, #0b7ff2 0%, #0ca6fe 100%);
    }
  }
}
</style>
