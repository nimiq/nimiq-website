<template>
  <div relative pb-32>
    <div absolute inset-0 class="bg" left="[calc(var(--px)*-1)]" w="[calc(100%+var(--px)*2)]" top--160 z--1 />
    <WalletActionSelector mx-auto w-max />

    <div w="[calc(100%+48px)]" f-mt-40 relative left--24 aspect-0.7 size-full rounded-14 bg-neutral-300 p-8 op-50 backdrop-blur-3.5 style="box-shadow: inset 0px 0px 40px #FFFFFF;">
      <div size-full rounded-8 bg-white />
    </div>

    <WalletCurrencies mt-24 />
  </div>
</template>

<style scoped>
.bg {
  --gradient-shape: to bottom in oklch;
  --gradient-1-size: calc(100% * (1 / 1.8) + 1px); /* from original grid="~ rows-[1fr_0.8fr]" */
  --gradient-1: linear-gradient(
    var(--gradient-shape),
    oklch(0.41150469274331075 0.10583049548165781 276.66014489473963 / 1) 0%,
    oklch(0.4142135236722443 0.10642338330152949 276.15440478036044 / 1) 12.5%,
    oklch(0.42234001645904484 0.10820204676114457 274.63718443722286 / 1) 25%,
    oklch(0.43588417110371247 0.11116648586050303 272.1084838653269 / 1) 37.5%,
    oklch(0.4548459876062471 0.11531670059960486 268.5683030646725 / 1) 50%,
    oklch(0.4792254659666488 0.12065269097845008 264.01664203525974 / 1) 62.5%,
    oklch(0.5090226061849176 0.1271744569970387 258.45350077708855 / 1) 75%,
    oklch(0.5442374082610533 0.13488199865537068 251.878879290159 / 1) 87.5%,
    oklch(0.5848698721950562 0.14377531595344603 244.29277757447107 / 1) 100%
  );
  --gradient-2-size: calc(100% * (0.8 / 1.8)); /* from original grid="~ rows-[1fr_0.8fr]" */
  --gradient-2: linear-gradient(
    var(--gradient-shape),
    oklch(0.5848698721950562 0.14377531595344603 244.29277757447107 / 1) 0%,
    oklch(0.579131109122486 0.14207849232464118 244.8602151123167 / 1) 12.5%,
    oklch(0.5619148199047753 0.13698802143822664 246.56252772585358 / 1) 25%,
    oklch(0.5332210045419243 0.12850390329420242 249.39971541508174 / 1) 37.5%,
    oklch(0.493049663033933 0.11662613789256851 253.37177818000114 / 1) 50%,
    oklch(0.44140079538080124 0.1013547252333249 258.4787160206118 / 1) 62.5%,
    oklch(0.3782744015825291 0.0826896653164716 264.72052893691375 / 1) 75%,
    oklch(0.30367048163911653 0.0606309581420086 272.0972169289069 / 1) 87.5%,
    oklch(0.21758903555056358 0.03517860370993592 280.60877999659135 / 1) 100%
  );

  background:
    var(--gradient-1) no-repeat,
    var(--gradient-2) no-repeat;

  background-size:
    var(--total-width) var(--gradient-1-size),
    var(--total-width) var(--gradient-2-size);

  background-position:
    0 0,
    0 100%;
}
</style>
