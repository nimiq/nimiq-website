<script setup lang="ts">
interface WalletHover {
  title: string
  description: string
  screenshot: string
  link: string
  poweredByLabel?: string
  poweredByLogos?: { logo: string }[]
}

defineProps<{ data: WalletHover }>()
</script>

<template>
  <section bg-neutral-0 data-slice-type="nimiq-wallet-hoverable">
    <NuxtLink
      :to="data.link"
      grid="~ cols-1 md:cols-[1fr_3fr] rows-[1fr_auto] gap-x-96 gap-y-32 md:gap-y-128"
      external w-full f-p-lg nq-hoverable target="_blank"
    >
      <div flex="~ col">
        <div text-56 i-nimiq:logos-nimiq lg:ml-24 />
        <h3 text="22/28.6 lg:28/36.4" font-semibold mt-16 text-left lg:ml-24>
          {{ data.title }}
        </h3>
        <p mt-12 max-w-28ch lg:mx-auto text="16/24 md:17/25.5 lg:18/28 neutral-800" lg:ml-24>
          {{ data.description }}
        </p>
      </div>

      <div row-span-2 relative>
        <div w="125%" h="145%" border="16 solid neutral-400" rounded-24 inset-0 absolute>
          <img :src="data.screenshot" :alt="data.title" rounded-8 w-full>
        </div>
      </div>

      <div flex="~ col">
        <p v-if="data.poweredByLabel" nq-label>
          {{ data.poweredByLabel }}
        </p>
        <ul v-if="data.poweredByLogos?.length" flex="~ gap-16" f-mt-xs>
          <li v-for="({ logo }, i) in data.poweredByLogos" :key="i">
            <img :src="logo" w-full f-h="24/32" object-contain>
          </li>
        </ul>
      </div>
    </NuxtLink>
  </section>
</template>

<style>
section[data-slice-type='simple-headline'] + section[data-slice-type='nimiq-wallet-hoverable'] {
  --uno: 'pt-0!';
}
</style>
