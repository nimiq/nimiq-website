import { u as T, g as R, _ as $ } from "./OyFcecuz.js";
import { c as j } from "./CEBR9iVI.js";
import { d as h, c as d, o as l, a as r, e, w as S, g as z, t as m, n as b, u as t, F as y, j as f, f as w, b as L, r as A, L as V, k as q } from "./ClGJWWej.js";
import { _ as I } from "./BVy4Ey-L.js";
import { a as k } from "./B0V233La.js";
import "./CVtsTRWS.js";
import "./Bz4-DFcF.js";
import "./xLWJwwMd.js";
import "./YKo2rOHu.js";
import "./B9j71pJ-.js";
import "./ZXfttXAr.js";
import "./DsoEoSLB.js";
import "./DvG5VWlW.js";
const B = { flex: "~ col max-sm:items-center gap-12" }, P = { text: "f-3xl neutral", "font-semibold": "", "lh-none": "", flex: "~" }, D = { flex: "~ items-center gap-8" }, M = { text: "15/27 lg:16/27 neutral-800", "font-semibold": "" }, E = { flex: "~ items-center justify-between gap-32 lg:gap-48 sm:row col" }, F = h({ __name: "Stats", props: { txSecLabel: { default: "TX/sec" }, txSpeedLabel: { default: "TX Speed" }, averageRewardsLabel: { default: "Est. Avg. rewards" }, averageRewardsValue: { default: "14.9% p.a" } }, setup(p) {
  const [u, o] = j();
  return (s, _) => (l(), d(y, null, [r(t(u), null, { default: S(({ icon: i, iconBgColor: c, label: g, value: a, suffix: n }) => [e("div", B, [e("span", P, [e("span", null, m(a), 1), z(" " + m(n), 1)]), e("div", D, [e("div", { size: "20 lg:24", "rounded-full": "", class: b(c), flex: "~ items-center justify-center" }, [e("div", { class: b(i), "mr--0.5": "", "text-neutral-0": "" }, null, 2)], 2), e("p", M, m(g), 1)])])]), _: 1 }), e("ul", E, [e("li", null, [r(t(o), { icon: "i-nimiq:sand-clock size-14", "icon-bg-color": "bg-gradient-orange", value: 1e3, label: s.txSecLabel, decimals: 0 }, null, 8, ["label"])]), e("li", null, [r(t(o), { icon: "i-nimiq:bolt size-14", "icon-bg-color": "bg-gradient-gold", value: 1, label: s.txSpeedLabel, decimals: 1, suffix: "\xA0sec" }, null, 8, ["label"])]), e("li", null, [r(t(o), { icon: "i-nimiq:leaf-2 size-12 ml-1", "icon-bg-color": "bg-gradient-green", value: s.averageRewardsValue, label: s.averageRewardsLabel }, null, 8, ["value", "label"])])])], 64));
} }), O = Object.assign(F, { __name: "AlbatrossStats" }), Q = { flex: "~ col lg:row gap-y-20 gap-x-24", "pb-1": "", "max-sm:mx-24": "" }, X = { flex: "~ items-center justify-center gap-x-80 gap-y-32 col md:row", ring: "1.5 solid neutral-500", relative: "", "max-w-712": "", "rounded-8": "", "px-32": "", "py-20": "", "font-semibold": "" }, G = ["disabled"], H = { key: 0, text: "14 neutral", bg: "white/5", flex: "~ gap-16 wrap justify-center items-center", "self-stretch": "", "rounded-8": "", "px-32": "", "py-24": "" }, J = { text: "15/21 md:16/22 max-md:center neutral-900", "font-semibold": "", "lg:max-w-15ch": "" }, K = h({ __name: "Info", props: { networkNotice: {}, statsTooltipContent: {}, txSecLabel: {}, txSpeedLabel: {}, averageRewardsLabel: {}, averageRewardsValue: {} }, setup(p) {
  const { status: u, animationActive: o, nonce: s, canSendTx: _, sendTx: i } = T(), c = f(() => R({ nonce: s.value })), g = f(() => p.statsTooltipContent ? p.statsTooltipContent.split(`
`) : []);
  return (a, n) => {
    const x = O, N = I;
    return l(), d("div", Q, [e("div", X, [r(x, { "average-rewards-label": a.averageRewardsLabel, "tx-sec-label": a.txSecLabel, "tx-speed-label": a.txSpeedLabel, "average-rewards-value": a.averageRewardsValue }, null, 8, ["average-rewards-label", "tx-sec-label", "tx-speed-label", "average-rewards-value"]), t(_) ? (l(), d("button", { key: 0, disabled: t(o) || t(u) !== "idle", "select-none": "", class: b(t(c)), onClick: n[0] || (n[0] = (...v) => t(i) && t(i)(...v)) }, " Send Test Transaction ", 10, G)) : w("", true), a.statsTooltipContent ? (l(), L(N, { key: 1, dark: "", absolute: "", "right-12": "", "top-12": "", "aria-label": "Notice about these stats" }, { default: S(() => [(l(true), d(y, null, A(t(g), (v, C) => (l(), d("p", { key: C, style: { "font-size": "var(--nq-font-size)" }, "f-text-sm": "" }, m(v), 1))), 128))]), _: 1 })) : w("", true)]), a.networkNotice ? (l(), d("div", H, [n[1] || (n[1] = e("div", { "i-nimiq:tools-wench-screwdriver": "", size: "24 lg:38" }, null, -1)), e("p", J, m(a.networkNotice), 1)])) : w("", true)]);
  };
} }), U = Object.assign(K, { __name: "AlbatrossInfo" }), W = { flex: "~ col items-center", "w-full": "", "of-x-hidden": "" }, Y = "Showing live Proof of Stake testnet data", Z = "This information is meant solely to project potential NIM staking rewards for Nimiq PoS. The rewards percentage is subject to change based on the actual percentage of NIM  staked compared to the total circulating NIM.", pe = h({ __name: "albatross-liveview", setup(p) {
  const u = k("allow-send-tx"), o = f(() => u.value === "true"), { canSendTx: s } = T();
  V(() => o.value, (c) => s.value = c || false, { immediate: true });
  const _ = k("theme"), i = f(() => _.value === "light" ? "bg-neutral-0" : "bg-darkblue dark");
  return (c, g) => {
    const a = $, n = U, x = q;
    return l(), L(x, { name: "iframe", class: b(t(i)) }, { default: S(() => [e("div", W, [r(a, { "w-screen": "" }), r(n, { "network-notice": Y, "stats-tooltip-content": Z, "allow-send-tx": t(o), mt: "32 lg:48 xl:72" }, null, 8, ["allow-send-tx"])])]), _: 1 }, 8, ["class"]);
  };
} });
export {
  pe as default
};
