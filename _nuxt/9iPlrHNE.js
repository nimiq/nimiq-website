import { _ as k } from "./CrdsVqms.js";
import { d as b, c as t, o as e, e as i, a as _, f as l, F as v, r as y, b as p, D as w, t as o } from "./gdLxT4Lf.js";
import { g as B } from "./CpsPJSKh.js";
import { _ as C } from "./DakKeHV_.js";
import "./D7zdd4-D.js";
import "./eRMYwULF.js";
import "./DYDUvkDP.js";
const N = { "bg-neutral-0": "" }, V = { flex: "~ col lg:row" }, q = { key: 0, "f-mt-2xl": "", grid: "~ cols-1 sm:cols-2 lg:cols-1 xl:cols-2 gap-x-16 gap-y-24", mt: "80 lg:0", pl: "lg:16 2xl:64" }, D = ["data-inverted"], H = { bg: "data-inverted:blue neutral", p: "24 xl:32", "nq-no-color": "", "text-white": "", "rounded-6": "" }, L = { key: 2, text: "12 neutral-800 data-inverted:neutral-300", "f-mt-md": "", "nq-label": "" }, P = { "f-mt-sm": "" }, S = { key: 0, text: "green min-22 max-26", "font-semibold": "" }, E = { key: 1, "f-text-sm": "", "lg:inline": "", "sm:block": "", "xl:block": "" }, J = b({ __name: "index", props: B(), setup(F) {
  return (n, I) => {
    const u = k, f = w, r = C;
    return e(), t("section", N, [i("div", V, [_(u, { "children:text-left": "", headline: n.slice.primary.headline, subline: n.slice.primary.text, "cta-href": n.slice.primary.linkHref, "cta-label": n.slice.primary.linkLabel }, null, 8, ["headline", "subline", "cta-href", "cta-label"]), n.slice.items.length > 0 ? (e(), t("ul", q, [(e(true), t(v, null, y(n.slice.items, ({ cost: s, description: a, extraFee: d, isOfficial: h, label: c, logo: x, paymentMethod: m }, g) => (e(), t("li", { key: g, "shrink-0": "", "data-inverted": h ? "" : void 0 }, [i("div", H, [_(f, { "op-60": "", "max-h-24": "", field: x }, null, 8, ["field"]), m ? (e(), p(r, { key: 0, wrapper: "div", "f-mt-2xs": "", "children:text-left": "", "children:text": "neutral-0 data-inverted:white", field: m }, null, 8, ["field"])) : l("", true), a ? (e(), p(r, { key: 1, wrapper: "div", text: "data-inverted:white/80 neutral-800", field: a, "min-h-3lh": "", "f-mt-xs": "" }, null, 8, ["field"])) : l("", true), c ? (e(), t("p", L, o(c), 1)) : l("", true)]), i("div", P, [s ? (e(), t("span", S, o(s), 1)) : l("", true), d ? (e(), t("span", E, o(d), 1)) : l("", true)])], 8, D))), 128))])) : l("", true)])]);
  };
} });
export {
  J as default
};
