import { _ as k } from "./RJkaeARB.js";
import { _ as v } from "./CDGVCZAD.js";
import { _ as y } from "./skKO6Fnq.js";
import { g as b } from "./CpsPJSKh.js";
import { d as w, B as t, o as e, C as i, g as _, x as o, H as B, I as C, e as p, E as l } from "./B8biU-UE.js";
import "./DRbUa3ZN.js";
import "./Fc1-Bd8L.js";
import "./DOgGst0G.js";
import "./B5vKjtsS.js";
const H = { "bg-neutral-0": "" }, N = { flex: "~ col lg:row" }, P = { key: 0, "f-mt-2xl": "", grid: "~ cols-1 sm:cols-2 lg:cols-1 xl:cols-2 gap-x-16 gap-y-24", mt: "80 lg:0", pl: "lg:16 2xl:64" }, V = ["data-inverted"], q = { bg: "data-inverted:blue neutral", p: "24 xl:32", "nq-no-color": "", "text-white": "", "rounded-6": "" }, E = { key: 2, text: "12 neutral-800 data-inverted:neutral-300", "f-mt-md": "", "nq-label": "" }, I = { "f-mt-sm": "" }, L = { key: 0, text: "green min-22 max-26", "font-semibold": "" }, S = { key: 1, "f-text-sm": "", "lg:inline": "", "sm:block": "", "xl:block": "" }, O = w({ __name: "index", props: b(), setup(D) {
  return (n, R) => {
    const u = k, f = v, r = y;
    return e(), t("section", H, [i("div", N, [_(u, { "children:text-left": "", headline: n.slice.primary.headline, subline: n.slice.primary.text, "cta-href": n.slice.primary.linkHref, "cta-label": n.slice.primary.linkLabel }, null, 8, ["headline", "subline", "cta-href", "cta-label"]), n.slice.items.length > 0 ? (e(), t("ul", P, [(e(true), t(B, null, C(n.slice.items, ({ cost: s, description: a, extraFee: d, isOfficial: h, label: m, logo: x, paymentMethod: c }, g) => (e(), t("li", { key: g, "shrink-0": "", "data-inverted": h ? "" : void 0 }, [i("div", q, [_(f, { "op-60": "", "max-h-24": "", field: x }, null, 8, ["field"]), c ? (e(), p(r, { key: 0, wrapper: "div", "f-mt-2xs": "", "children:text-left": "", "children:text": "neutral-0 data-inverted:white", field: c }, null, 8, ["field"])) : o("", true), a ? (e(), p(r, { key: 1, wrapper: "div", text: "data-inverted:white/80 neutral-800", field: a, "min-h-3lh": "", "f-mt-xs": "" }, null, 8, ["field"])) : o("", true), m ? (e(), t("p", E, l(m), 1)) : o("", true)]), i("div", I, [s ? (e(), t("span", L, l(s), 1)) : o("", true), d ? (e(), t("span", S, l(d), 1)) : o("", true)])], 8, V))), 128))])) : o("", true)])]);
  };
} });
export {
  O as default
};
