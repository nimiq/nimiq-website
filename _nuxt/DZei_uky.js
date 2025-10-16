import { _ as S } from "./DdfeLySK.js";
import { c as y } from "./DOgGst0G.js";
import { d as g, B as d, o, H as x, g as s, C as e, h as n, f, G as L, E as u, D as _, a as v, x as b, e as w, I as N, i as T } from "./B8biU-UE.js";
import { _ as C } from "./D-k9HlQ8.js";
import { a as R } from "./CQkxAz7J.js";
import "./D0DW2WUk.js";
import "./DlAUqK2U.js";
import "./uct_JH4F.js";
import "./B5vKjtsS.js";
import "./DBRxGtFx.js";
import "./CoPlYyca.js";
const $ = { flex: "~ col max-sm:items-center gap-12" }, j = { text: "f-3xl neutral", "font-semibold": "", "lh-none": "", flex: "~" }, z = { flex: "~ items-center gap-8" }, V = { text: "15/27 lg:16/27 neutral-800", "font-semibold": "" }, I = { flex: "~ items-center justify-between gap-32 lg:gap-48 sm:row col" }, q = g({ __name: "Stats", props: { txSecLabel: { default: "TX/sec" }, txSpeedLabel: { default: "TX Speed" }, averageRewardsLabel: { default: "Est. Avg. rewards" }, averageRewardsValue: { default: "14.9% p.a" } }, setup(m) {
  const [l, t] = y();
  return (a, p) => (o(), d(x, null, [s(n(l), null, { default: f(({ icon: r, iconBgColor: i, label: c, value: h, suffix: k }) => [e("div", $, [e("span", j, [e("span", null, u(h), 1), L(" " + u(k), 1)]), e("div", z, [e("div", { size: "20 lg:24", "rounded-full": "", class: _(i), flex: "~ items-center justify-center" }, [e("div", { class: _(r), "text-neutral-0": "", "mr--0.5": "" }, null, 2)], 2), e("p", V, u(c), 1)])])]), _: 1 }), e("ul", I, [e("li", null, [s(n(t), { icon: "i-nimiq:sand-clock size-14", "icon-bg-color": "bg-gradient-orange", value: 1e3, label: a.txSecLabel, decimals: 0 }, null, 8, ["label"])]), e("li", null, [s(n(t), { icon: "i-nimiq:bolt size-14", "icon-bg-color": "bg-gradient-gold", value: 1, label: a.txSpeedLabel, decimals: 1, suffix: "\xA0sec" }, null, 8, ["label"])]), e("li", null, [s(n(t), { icon: "i-nimiq:leaf-2 size-12 ml-1", "icon-bg-color": "bg-gradient-green", value: a.averageRewardsValue, label: a.averageRewardsLabel }, null, 8, ["value", "label"])])])], 64));
} }), A = Object.assign(q, { __name: "AlbatrossStats" }), B = { flex: "~ col lg:row gap-y-20 gap-x-24", "pb-1": "", "max-sm:mx-24": "" }, D = { flex: "~ items-center justify-center gap-x-80 gap-y-32 col md:row", ring: "1.5 solid neutral-500", "font-semibold": "", "px-32": "", "py-20": "", "rounded-8": "", "max-w-712": "", relative: "" }, E = { key: 0, text: "14 neutral", bg: "white/5", flex: "~ gap-16 wrap justify-center items-center", "px-32": "", "py-24": "", "rounded-8": "", "self-stretch": "" }, M = { text: "15/21 md:16/22 max-md:center neutral-900", "font-semibold": "", "lg:max-w-15ch": "" }, P = g({ __name: "Info", props: { networkNotice: {}, statsTooltipContent: {}, txSecLabel: {}, txSpeedLabel: {}, averageRewardsLabel: {}, averageRewardsValue: {} }, setup(m) {
  const l = v(() => m.statsTooltipContent ? m.statsTooltipContent.split(`
`) : []);
  return (t, a) => {
    const p = A, r = C;
    return o(), d("div", B, [e("div", D, [s(p, { "average-rewards-label": t.averageRewardsLabel, "tx-sec-label": t.txSecLabel, "tx-speed-label": t.txSpeedLabel, "average-rewards-value": t.averageRewardsValue }, null, 8, ["average-rewards-label", "tx-sec-label", "tx-speed-label", "average-rewards-value"]), t.statsTooltipContent ? (o(), w(r, { key: 0, dark: "", "right-12": "", "top-12": "", absolute: "", "aria-label": "Notice about these stats" }, { default: f(() => [(o(true), d(x, null, N(n(l), (i, c) => (o(), d("p", { key: c, style: { "font-size": "var(--nq-font-size)" }, "f-text-sm": "" }, u(i), 1))), 128))]), _: 1 })) : b("", true)]), t.networkNotice ? (o(), d("div", E, [a[0] || (a[0] = e("div", { "i-nimiq:tools-wench-screwdriver": "", size: "24 lg:38" }, null, -1)), e("p", M, u(t.networkNotice), 1)])) : b("", true)]);
  };
} }), O = Object.assign(P, { __name: "AlbatrossInfo" }), X = { flex: "~ col items-center", "w-full": "", "of-x-hidden": "" }, F = "Showing live Proof of Stake testnet data", G = "This information is meant solely to project potential NIM staking rewards for Nimiq PoS. The rewards percentage is subject to change based on the actual percentage of NIM  staked compared to the total circulating NIM.", oe = g({ __name: "albatross-liveview", setup(m) {
  const l = R("theme"), t = v(() => l.value === "light" ? "bg-neutral-0" : "bg-darkblue dark");
  return (a, p) => {
    const r = S, i = O, c = T;
    return o(), w(c, { name: "iframe", class: _(n(t)) }, { default: f(() => [e("div", X, [s(r, { "w-screen": "" }), s(i, { "network-notice": F, "stats-tooltip-content": G, mt: "32 lg:48 xl:72" })])]), _: 1 }, 8, ["class"]);
  };
} });
export {
  oe as default
};
