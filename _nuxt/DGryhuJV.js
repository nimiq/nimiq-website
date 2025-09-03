import { u as i, d as n } from "./C9NbhepC.js";
import { A as u, aM as l } from "./BSLliBk6.js";
function v() {
  const o = u().public.validatorsApi, { stakingRatio: t } = i(), { data: s, state: r } = l({ key: ["validators", t.value ?? 0], query: async () => (await $fetch(`${o}/api/v1/validators`)).map((a) => ({ ...a, rewardGainRatio: n({ stakedSupplyRatio: t.value ?? 0, fee: a.fee }).gainRatio })).sort((a, e) => {
    var _a, _b;
    return ((_a = a.score) == null ? void 0 : _a.total) ? ((_b = e.score) == null ? void 0 : _b.total) ? e.score.total - a.score.total : -1 : 1;
  }), staleTime: 300 * 1e3 });
  return { validators: s, validatorsRequestState: r };
}
export {
  v as u
};
