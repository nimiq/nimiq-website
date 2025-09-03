import { A as p, aM as s, a as r } from "./BSLliBk6.js";
function i() {
  const { cryptoMapSupabase: t } = p().public, a = (c) => `${t.url}/rest/v1/rpc/${c}?apikey=${t.key}`, { data: e } = s({ key: () => ["get_stats"], query: () => $fetch(a("get_stats")) }), o = r(() => {
    var _a;
    return ((_a = e.value) == null ? void 0 : _a.locations) || 30335;
  }), { data: n } = s({ key: () => ["get_stats_for_all_continents"], query: () => $fetch(a("get_stats_for_all_continents")) });
  return { cryptoMapLocationsCount: o, cryptoMapContinentsStats: n };
}
export {
  i as u
};
