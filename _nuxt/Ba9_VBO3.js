import { _ as q } from "./DDjqKod7.js";
import { d as T, B as h, j as n, c as l, o as a, a as v, e as s, F as g, r as b, u as y, b as L, f as N, t as P, D as V } from "./ClGJWWej.js";
import { g as j } from "./CpsPJSKh.js";
import { _ as A } from "./D3wyXQF5.js";
import { f as D } from "./CEBR9iVI.js";
import "./SvaN8giD.js";
import "./YKo2rOHu.js";
const F = { "mx-0": "", "of-x-clip": "", "bg-neutral-0": "", "px-0": "", "children:max-w-none": "" }, M = { flex: "~ gap-6", "mx-auto": "", "w-max": "", "f-mt-lg": "" }, $ = ["data-state"], z = ["onClick"], E = ["data-state", "onClick"], H = { text: "neutral-800 f-xs", px: "8 md:32 xl:48", "mt-auto": "", "nq-label": "" }, U = T({ __name: "index", props: j(), setup(k) {
  const w = k, r = h(1), i = h(), S = n(() => {
    var _a;
    return Array.from(((_a = i.value) == null ? void 0 : _a.querySelectorAll("li")) || []);
  }), { width: m } = D(), c = n(() => Math.min(0.872 * m.value, 684)), p = n(() => m.value - c.value), f = n(() => w.slice.items.length);
  function C(e) {
    const o = e.target, d = (o.scrollWidth - p.value - c.value * f.value) / (f.value - 1);
    r.value = Math.round(o.scrollLeft / (c.value + d)) + 1;
  }
  function B(e) {
    i.value.scrollTo({ top: 0, left: e.offsetLeft - p.value / 2, behavior: "smooth" });
  }
  function _(e) {
    var _a;
    const o = (_a = S.value) == null ? void 0 : _a.at(e - 1);
    o && B(o);
  }
  return (e, o) => {
    const x = q, d = V, W = A;
    return a(), l("section", F, [v(x, { headline: e.slice.primary.headline, subline: e.slice.primary.description, px: "$px" }, null, 8, ["headline", "subline"]), s("ul", M, [(a(true), l(g, null, b(e.slice.items.length, (t) => (a(), l("li", { key: t, "data-state": y(r) === t ? "active" : void 0, "max-w-96": "", "w-full": "", "flex-1": "" }, [s("button", { bg: "neutral-400 hocus:neutral-500 data-active:green", before: "absolute inset--16", relative: "", "mx-auto": "", "h-4": "", "w-96": "", "rounded-2": "", "transition-colors": "", onClick: () => _(t) }, null, 8, z)], 8, $))), 128))]), s("ul", { ref_key: "scroller", ref: i, flex: "~ gap-16 md:gap-32 xl:gap-48", px: "[calc((100%-min(87.2%,684px))/2)]", snap: "x mandatory", "m-x-auto": "", "of-y-hidden": "", "nq-scrollbar-hide": "", "f-pb-md": "", "f-mt-2xl": "", onScrollPassive: C }, [(a(true), l(g, null, b(e.slice.items, (t, u) => (a(), l("li", { key: u, "data-state": y(r) - 1 === u ? "active" : void 0, snap: "center always", cursor: "active:default pointer", op: "20 data-active:100", "max-w-784": "", "w-full": "", "shrink-0": "", "transition-opacity": "", flex: "~ col", "duration-400": "", onClick: () => _(u + 1) }, ["image" in t ? (a(), L(d, { key: 0, field: t.image, "rounded-6": "", "object-cover": "", shadow: "", "f-mb-lg": "" }, null, 8, ["field"])) : N("", true), s("p", H, P(t.label), 1), v(W, { wrapper: "div", px: "8 md:32 xl:48", field: t.description, "nq-prose-compact": "", "f-mt-2xs": "", text: "neutral-800 children:f-xl" }, null, 8, ["field"])], 8, E))), 128))], 544)]);
  };
} });
export {
  U as default
};
