<script setup lang="ts">
const { color } = defineProps<{ color?: 'grey' | 'white' | 'darkblue' }>()
const colors = getColorClass(color)
</script>

<template>
  <section :class="colors" group mx-0 children:max-w-none>
    <div class="nq-prose" transition-colors children:text="f-sm neutral-800 group-hocus:neutral-900">
      <h2>
        Disclaimer
      </h2>
      <p lh="[1.75]" f-mt-xs>
        None of the statements must be viewed as an endorsement or recommendation for Nimiq, any cryptocurrency, or
        investment product. Neither the information, nor any opinion contained herein constitutes a solicitation or offer
        by the creators or participants to buy or sell any securities or other financial instruments or provide any
        investment advice or service. All statements contained in statements made in Nimiq’s web pages, blogs, social
        media, press releases, or in any place accessible by the public, and oral statements that may be made by Nimiq or
        project associates that are not statements of historical fact, constitute “forward-looking statements”. These
        forward-looking statements involve known and unknown risks, uncertainties, and other factors that may cause the
        actual future results, performance, or achievements to be materially different from any future results,
        performance, or achievements expected, expressed, or implied by such forward-looking statements. The final decision of implementing any changes to the Nimiq protocol, including its parameters, always remains with the decentralized node operators who agree what version and parameters to deploy and support.
      </p>
    </div>
  </section>
</template>

<!-- <style>
section:not(.children:max-w-none, [children:max-w-none]) > * {
  max-width: var(--nq-max-width);
}
</style> -->
