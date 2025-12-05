<script setup lang="ts">
interface BannerItem {
  headline: string
  subline?: string
  backgroundPattern?: string
  link?: string
}

const props = defineProps<{
  items: BannerItem[]
  overlapsNextSection?: boolean
}>()
</script>

<template>
  <section nq-section-gap bg-neutral-0 data-slice-type="banner" :class="{ 'mb--80': props.overlapsNextSection }">
    <div grid="~ cols-1 md:cols-2 lg:cols-3 gap-16">
      <NuxtLink
        v-for="(item, i) in props.items"
        :key="i"
        :to="item.link"
        class="group"
        flex="~ col justify-between"
        p-32 rounded-16 bg-neutral-100 min-h-200 nq-hoverable
      >
        <div>
          <h3 font-bold mb-8 f-text-xl>
            {{ item.headline }}
          </h3>
          <p v-if="item.subline" text-neutral-700>
            {{ item.subline }}
          </p>
        </div>
        <div flex="~ items-center gap-8" text-blue mt-16>
          <span font-bold>Learn more</span>
          <div i-nimiq:arrow-right />
        </div>
      </NuxtLink>
    </div>
  </section>
</template>
