<script setup lang="ts">
import type { LinkField, RichTextField } from '@prismicio/client'

interface BannerItem { headline: RichTextField, subline: RichTextField, bgItems: any[], bgColor: string, backgroundPattern: string, label: string, link: LinkField, hasBgItems: boolean }

defineProps<{ items: BannerItem[] }>()

// @unocss-include
const classesPositions = ['bottom--40 right--30 md:right-88 md:bottom--44 xl:right-180', 'invisible md:visible md:right--18 md:bottom-50 lg:bottom-100 lg:right--32 xl:right-70 xl:bottom-60', 'invisible md:visible md:left-88 md:bottom--52 xl:left-180', 'invisible md:visible md:left--36 md:bottom-42 lg:bottom-92 xl:left-70 xl:bottom-60', 'invisible xl:visible xl:bottom--40 xl:left--30', 'invisible xl:visible xl:bottom--40 xl:right--30']
</script>

<template>
  <div v-for="({ headline, subline, bgItems, bgColor, backgroundPattern, label, link, hasBgItems }, i) in items" :key="i" outline="1.5 offset--1.5 white/20" :style="`background: rgb(var(--nq-${bgColor || 'neutral-0'}))`" :data-inverted="bgColor === 'green' ? '' : undefined" py="24 lg:72" mx-auto px-32 rounded-8 w-full shadow relative of-hidden bg-neutral-0>
    <PrismicLink v-for="({ classes, color, icon, link: linkItem, name }, j) in bgItems" :key="j" :aria-label="name" :field="linkItem" tabindex="-1" :style="{ backgroundColor: 'transparent'||color }" :class="[classes]" pointer-cursor stack text-white rounded-full size-104 absolute>
      <NuxtImg :src="icon" pointer-events-none z-1 />
      <div i-nimiq:logos-nimiq-mono text-neutral-200 size-104 />
    </PrismicLink>
    <div v-if="bgColor === 'white'" class="curtain" pointer-events-none inset-0 absolute />
    <div v-else-if="bgColor === 'green'" rounded-6 pointer-events-none inset-1.5 absolute bg-gradient-green />

    <div v-if="backgroundPattern === 'Nimiq Hexagon'" text="200 md:300 lg:400" pointer-events-none absolute bottom="-10 lg:-0.2775em" right="-0.2em lg:-0.25em">
      <div text-transparent i-nimiq:logos-nimiq-mono>
        <div size-full bg-gradient="to-bl from-transparent via-transparent to-neutral/20" />
      </div>
    </div>

    <div max-w-full relative z-10 :class="{ 'lg:max-w-60ch md:items-center flex-col md:mx-auto w-max': hasBgItems, 'items-end w-full': !hasBgItems }" flex="~ wrap justify-between">
      <div max-w-60ch>
        <p v-if="label" :class="{ 'f-mt-md': bgColor !== 'green', 'f-mt-xs': bgColor === 'green' }" text-12 nq-label>{{ label }}</p>
        <RichText wrapper="div" :field="headline" :class="{ 'md:text-center': backgroundPattern === 'Nimiq Apps' || backgroundPattern === 'Social Media', 'children:!text-white': bgColor === 'green' }" />
        <RichText wrapper="div" :field="subline" :class="{ 'md:text-center f-mt-xs': hasBgItems, 'f-mt-md': !hasBgItems && bgColor !== 'green', 'children:text-white/70 f-mt-sm': bgColor === 'green' }" />
      </div>
      <PrismicLink v-if="hasLink(link)" :field="link" mt="32 md:24" nq-arrow nq-pill-lg :class="{ 'md:mx-auto nq-pill-blue': hasBgItems, 'lg:mr-128 nq-pill-tertiary text-blue': !hasBgItems }" />
    </div>
  </div>
</template>

<style scoped>
.curtain {
  background: linear-gradient(180deg, rgb(var(--nq-neutral-0) / 0.1) 50%, rgb(var(--nq-neutral-0) / 0.5) 100%);
  box-shadow: inset 0px 0px 101.171px rgba(var(--nq-neutral-0) / 0.75);
}
</style>
