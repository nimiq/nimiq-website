import { u as i, d as n } from "./DpgSLQ_6.js";
import { q as u, az as l } from "./g1xKa6TI.js";
function v() {
  const o = u().public.validatorsApi, { stakingRatio: t } = i(), { data: s, state: r } = l({ key: ["validators", t.value ?? 0], query: async () => (await $fetch(`${o}/api/v1/validators`)).map((a) => ({ ...a, rewardGainRatio: n({ stakedSupplyRatio: t.value ?? 0, fee: a.fee }).gainRatio })).sort((a, e) => {
    var _a, _b;
    return ((_a = a.score) == null ? void 0 : _a.total) ? ((_b = e.score) == null ? void 0 : _b.total) ? e.score.total - a.score.total : -1 : 1;
  }), staleTime: 60 * 5 * 1e3 });
  return { validators: s, validatorsRequestState: r };
}
export {
  v as u
};
