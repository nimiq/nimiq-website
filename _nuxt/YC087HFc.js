import { q as p, aA as a, j as r } from "./gdLxT4Lf.js";
function i() {
  const { supabase: t } = p().public, s = (c) => `${t.url}/rest/v1/rpc/${c}?apikey=${t.key}`, { data: e } = a({ key: () => ["get_stats"], query: () => $fetch(s("get_stats")) }), o = r(() => {
    var _a;
    return ((_a = e.value) == null ? void 0 : _a.locations) || 30335;
  }), { data: n } = a({ key: () => ["get_stats_for_all_continents"], query: () => $fetch(s("get_stats_for_all_continents")) });
  return { cryptoMapLocationsCount: o, cryptoMapContinentsStats: n };
}
export {
  i as u
};
