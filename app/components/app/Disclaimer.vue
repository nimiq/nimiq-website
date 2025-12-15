<script setup lang="ts">
defineProps<{ bgColor?: 'grey' | 'white' | 'darkblue' }>()
</script>

<template>
  <aside :class="bgColor === 'darkblue' ? 'bg-darkerblue dark' : bgColor === 'white' ? 'bg-neutral-0' : 'bg-neutral-100'" group nq-prose mx-0 transition-colors children:max-w-none children:text="f-sm neutral-800 group-hocus:neutral-900">
    <h2 px-0>
      Disclaimer
    </h2>
    <p lh="[1.75]" px-0 f-mt-xs>
      None of the statements must be viewed as an endorsement or recommendation for Nimiq, any cryptocurrency, or investment product. Neither the information, nor any opinion contained herein constitutes a solicitation or offer by the creators or participants to buy or sell any securities or other financial instruments or provide any investment advice or service. All statements contained in statements made in Nimiq's web pages, blogs, social media, press releases, or in any place accessible by the public, and oral statements that may be made by Nimiq or project associates that are not statements of historical fact, constitute "forward-looking statements". These forward-looking statements involve known and unknown risks, uncertainties, and other factors that may cause the actual future results, performance, or achievements to be materially different from any future results, performance, or achievements expected, expressed, or implied by such forward-looking statements. The final decision of implementing any changes to the Nimiq protocol, including its parameters, always remains with the decentralized node operators who agree what version and parameters to deploy and support.
    </p>
  </aside>
</template>
