import { a as d, T as f, b as _, c as F, d as S, e as m } from "./Bz4-DFcF.js";
import { j as T, as as y, ar as w } from "./ClGJWWej.js";
import { u as R } from "./xLWJwwMd.js";
function A(a, t) {
  if (t < 0 && (a = 1 / a, t *= -1), !t) return 1;
  let n = 1;
  for (; t > 1; ) t % 2 && (n *= a, t -= 1), a *= a, t /= 2;
  return a * n;
}
function D(a, { network: t = "main-albatross" } = {}) {
  const n = a - d.getTime();
  if (n < 0) throw new Error(`Invalid timestamp: ${a}. It must be greater than ${d.getTime()}.`);
  return (f - (f - (t === "test-albatross" ? _ : F) * 1e5) * A(S, n)) / 1e5;
}
function h(a) {
  const { amount: t = 1e5, days: n = 365, autoRestake: s = true, stakedSupplyRatio: e, network: i = "main-albatross", fee: o = 0 } = a;
  if (e < 0 || e > 1) throw new Error(`Invalid stakedSupplyRatio: ${e}. It must be in the range [0, 1].`);
  if (o < 0 || o > 1) throw new Error(`Invalid fee: ${o}. It must be between 0 and 1.`);
  const r = i === "test-albatross" ? _ : F, u = d.getTime() + 24 * 60 * 60 * 1e3, l = D(u, { network: i }) - r, p = Math.E ** (-3432600460362e-16 * n);
  let c = 0;
  s ? c = l / (m * e * r) * (1 - p) : c = 1 / e * (Math.log(m * r * (1 / p) + l * (1 / p) - l) - m * n - Math.log(m * r)), c *= 1 - o;
  const g = t * (1 + c);
  return { totalAmount: g, gain: g - t, gainRatio: c };
}
function k(a, t, n = {}) {
  return T(() => {
    const s = y(a), e = y(t), { hideDecimals: i = false, locale: o = "en", maxDecimals: r = 8 } = n, u = { style: "currency", currency: e.code, currencyDisplay: "symbol", useGrouping: true, minimumFractionDigits: i ? 0 : r !== void 0 ? Math.min(r, e.decimals) : e.decimals, maximumFractionDigits: i ? 0 : r !== void 0 ? Math.min(r, e.decimals) : e.decimals };
    return s.toLocaleString([o, e.locale, "en"], u);
  });
}
function I(a) {
  const t = R();
  return new Intl.NumberFormat(t.value, { style: "percent", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(a);
}
function v(a) {
  const t = R();
  return new Intl.NumberFormat(t.value, { notation: "compact", compactDisplay: "short", minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(a);
}
function L() {
  const a = "https://dev.validators-api-mainnet.pages.dev", { data: t, state: n } = w({ key: ["staking_distribution"], query: async () => {
    const { circulating: e, staking: i } = await $fetch(`${a}/api/v1/supply`);
    return i / e;
  }, staleTime: 3e5, placeholderData: (e) => e }), s = T(() => {
    if (!t.value) return 0;
    const e = h({ stakedSupplyRatio: t.value });
    return I(e.gainRatio);
  });
  return { stakingRatio: t, stakingRatioState: n, annualRewardPercentage: s };
}
export {
  v as a,
  I as b,
  h as c,
  k as f,
  D as p,
  L as u
};
