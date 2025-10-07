import { _ as B } from "./ByuBp1u4.js";
import { _ as P } from "./65QI6cPr.js";
import { _ as T } from "./9erUq_gT.js";
import { g as L } from "./CpsPJSKh.js";
import { e as N } from "./CMqLQgad.js";
import { d as V, v as h, a as n, j as l, o as a, g as v, k as s, F as g, r as b, h as k, e as j, l as A, t as F } from "./Dzy_QPZd.js";
import "./BiHuLGzs.js";
import "./CJG5GsA3.js";
import "./CR0Fnf8w.js";
const M = { "mx-0": "", "px-0": "", "bg-neutral-0": "", "of-x-clip": "", "children:max-w-none": "" }, $ = { flex: "~ gap-6", "mx-auto": "", "w-max": "", "f-mt-lg": "" }, z = ["data-state"], D = ["onClick"], E = ["data-state", "onClick"], H = { text: "neutral-800 f-xs", px: "8 md:32 xl:48", "mt-auto": "", "nq-label": "" }, Y = V({ __name: "index", props: L(), setup(y) {
  const w = y, r = h(1), i = h(), S = n(() => {
    var _a;
    return Array.from(((_a = i.value) == null ? void 0 : _a.querySelectorAll("li")) || []);
  }), { width: m } = N(), c = n(() => Math.min(0.872 * m.value, 684)), p = n(() => m.value - c.value), f = n(() => w.slice.items.length);
  function C(e) {
    const o = e.target, d = (o.scrollWidth - p.value - c.value * f.value) / (f.value - 1);
    r.value = Math.round(o.scrollLeft / (c.value + d)) + 1;
  }
  function W(e) {
    i.value.scrollTo({ top: 0, left: e.offsetLeft - p.value / 2, behavior: "smooth" });
  }
  function _(e) {
    var _a;
    const o = (_a = S.value) == null ? void 0 : _a.at(e - 1);
    o && W(o);
  }
  return (e, o) => {
    const x = B, d = P, q = T;
    return a(), l("section", M, [v(x, { headline: e.slice.primary.headline, subline: e.slice.primary.description, px: "$px" }, null, 8, ["headline", "subline"]), s("ul", $, [(a(true), l(g, null, b(e.slice.items.length, (t) => (a(), l("li", { key: t, "data-state": k(r) === t ? "active" : void 0, "flex-1": "", "max-w-96": "", "w-full": "" }, [s("button", { bg: "neutral-400 hocus:neutral-500 data-active:green", before: "absolute inset--16", "mx-auto": "", "rounded-2": "", "h-4": "", "w-96": "", "transition-colors": "", relative: "", onClick: () => _(t) }, null, 8, D)], 8, z))), 128))]), s("ul", { ref_key: "scroller", ref: i, flex: "~ gap-16 md:gap-32 xl:gap-48", px: "[calc((100%-min(87.2%,684px))/2)]", snap: "x mandatory", "m-x-auto": "", "of-y-hidden": "", "f-pb-md": "", "f-mt-2xl": "", "nq-scrollbar-hide": "", onScrollPassive: C }, [(a(true), l(g, null, b(e.slice.items, (t, u) => (a(), l("li", { key: u, "data-state": k(r) - 1 === u ? "active" : void 0, snap: "center always", cursor: "active:default pointer", op: "20 data-active:100", flex: "~ col", "shrink-0": "", "max-w-784": "", "w-full": "", "transition-opacity": "", "duration-400": "", onClick: () => _(u + 1) }, ["image" in t ? (a(), j(d, { key: 0, field: t.image, "rounded-6": "", shadow: "", "object-cover": "", "f-mb-lg": "" }, null, 8, ["field"])) : A("", true), s("p", H, F(t.label), 1), v(q, { wrapper: "div", px: "8 md:32 xl:48", field: t.description, "nq-prose-compact": "", "f-mt-2xs": "", text: "neutral-800 children:f-xl" }, null, 8, ["field"])], 8, E))), 128))], 544)]);
  };
} });
export {
  Y as default
};
