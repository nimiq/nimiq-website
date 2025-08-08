import { _ as h } from "./DlAUqK2U.js";
import { c as i, o as a, e, d as C, q as S, s as T, z as B, bF as P, b as d, f as p, w as I, g as o, t as l, u as s, aU as N, F as V, r as A, a as $, n as z, af as j, C as D } from "./C95QRNzc.js";
import { g as F, d as O } from "./CCkBGt8y.js";
import { u as R } from "./DJne-mAn.js";
const U = {}, E = { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 148 148", text: "green data-inverted:white" };
function L(c, n) {
  return a(), i("svg", E, n[0] || (n[0] = [e("radialGradient", { id: "a", cx: "-791", cy: "458", r: "1", gradientTransform: "matrix(-83 0 0 83.5341 -66014 -38208)", gradientUnits: "userSpaceOnUse" }, [e("stop", { offset: "0", "stop-color": "#41a38e" }), e("stop", { offset: "1", "stop-color": "#21bca5" })], -1), e("circle", { cx: "73.76", cy: "73.76", r: "51.76", "stroke-opacity": ".8", "stroke-width": "3", style: { "--delay": "200ms" }, stroke: "currentColor", "op-0": "", class: "ripple" }, null, -1), e("circle", { cx: "73.76", cy: "73.76", r: "61.76", "stroke-opacity": ".6", "stroke-width": "3", style: { "--delay": "400ms" }, stroke: "currentColor", "op-0": "", class: "ripple" }, null, -1), e("circle", { cx: "73.76", cy: "73.76", r: "71.76", "stroke-opacity": ".4", "stroke-width": "3", style: { "--delay": "600ms" }, stroke: "currentColor", "op-0": "", class: "ripple" }, null, -1), e("circle", { cx: "73.76", cy: "73.76", r: "41.76", fill: "url(#a)", "un-fill": "data-inverted:white" }, null, -1), e("path", { stroke: "white data-inverted:!green", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "4", d: "M72.53 75.07v16.61m0-16.61C60.13 75.07 56 68.33 56 55c15.5 0 16.53 6.64 16.53 20.07Zm18.71-9.5c0 12.4-6.31 18.89-18.71 18.89 0-17.56 5.28-18.89 18.71-18.89Z", "translate-y-3": "" }, null, -1)]));
}
const Z = Object.assign(h(U, [["render", L], ["__scopeId", "data-v-f8955561"]]), { __name: "AnimatedStakingRipple" }), G = { flex: "~ col md:items-center", group: "" }, H = { bg: "green/15 data-inverted:white/30", text: "green data-inverted:white", "data-percentage": "", "px-10": "", "py-3": "", "rounded-4": "", "inline-flex": "~" }, M = { key: 2, flex: "~ gap-16 lg:gap-20 wrap" }, J = C({ __name: "Staking", props: { headline: {}, subline: {}, links: { default: () => [] }, showStakingIcon: { type: Boolean, default: false }, primaryPill: { type: Boolean } }, async setup(c) {
  var _a, _b;
  let n, m;
  const { annualRewardPercentage: y } = R(), { client: k } = S(), { data: u } = ([n, m] = T(() => B("staking_values", () => k.getSingle("stakingValues").then((t) => t.data))), n = await n, m(), n);
  if (!u) throw new Error("No staking values found");
  const w = ((_b = (_a = c.headline) == null ? void 0 : _a.at(0)) == null ? void 0 : _b.type.replace("heading", "h")) || "h2", g = F(c.headline).split("{{ interestPerAnnum }}"), _ = `terms-note-${P()}`;
  return (t, f) => {
    var _a2;
    const x = Z, v = D, b = j;
    return a(), i("div", G, [t.showStakingIcon ? (a(), d(x, { key: 0, "size-120": "" })) : p("", true), (a(), d(N(s(w)), { "f-mt-md": "", text: "data-inverted:white wrap md:balance" }, { default: I(() => [o(l(s(g)[0]) + " ", 1), e("span", H, [o(" ~" + l(s(y)), 1), e("div", { "text-14": "", "translate-y-8": "", "i-nimiq:asterisk": "", "aria-labelledby": _ })]), o(" " + l(s(g)[1]), 1)]), _: 1 })), ("hasText" in t ? t.hasText : s(O))(t.subline) ? (a(), d(v, { key: 1, wrapper: "p", field: t.subline, "data-inverted:text": "white/80" }, null, 8, ["field"])) : p("", true), t.links.length > 0 ? (a(), i("ul", M, [(a(true), i(V, null, A(t.links, (r, q) => (a(), i("li", { key: q }, [$(b, { field: r, "f-mt-lg": "", "nq-arrow": "", "nq-pill-lg": "", "md:mx-auto": "", class: z({ "nq-pill-blue": r.variant === "nq-pill-blue", "nq-pill-secondary": r.variant === "nq-pill-secondary", "nq-pill-tertiary bg-white text-neutral": r.variant === "nq-pill-tertiary" }) }, null, 8, ["field", "class"])]))), 128))])) : p("", true), e("small", { id: _, text: "green-1100 data-inverted:white/80 sm:center", "data-note": "", "transition-colors": "", "duration-400": "", "f-mt-md": "", "sm:max-w-32ch": "" }, [f[0] || (f[0] = e("div", { "aria-hidden": "", "size-0.4em": "", "i-nimiq:asterisk": "", "un-translate": "x--8 sm:x-4 y-4 sm:y-8" }, null, -1)), o(" " + l((_a2 = s(u)) == null ? void 0 : _a2.stakingNote), 1)])]);
  };
} }), Y = Object.assign(h(J, [["__scopeId", "data-v-e4e1b3a2"]]), { __name: "HeadlineStaking" });
export {
  Y as _
};
