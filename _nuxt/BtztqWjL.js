import { d as v, c as i, o as n, e as r, F as x, r as w, b as t, f as a, n as f, a as u, u as l, t as d, w as g, g as _, D as L, af as C } from "./C95QRNzc.js";
import { g as B } from "./CpsPJSKh.js";
import { _ as q } from "./iXO873XU.js";
import { h as H, a as b } from "./CCkBGt8y.js";
import { g as I } from "./CVc7iRBp.js";
import "./DEpc-rVb.js";
import "./BPgVFFXt.js";
const N = { "text-12": "", "f-mt-2xs": "", "nq-label": "" }, V = { flex: "~ gap-24 md:col lg:row", "max-w-lg": "", "f-mt-sm": "" }, M = v({ __name: "index", props: B(), setup(h) {
  const y = I(h.slice.primary.bgColor);
  function k(o) {
    var _a;
    return "url" in o.videoHigh && "url" in o.videoMedium && "url" in o.videoLow ? "video" : ((_a = o.image) == null ? void 0 : _a.url) ? "image" : "none";
  }
  return (o, P) => {
    const m = L, p = q, c = C;
    return n(), i("section", { class: f(l(y)), "data-slice-type": "zig-zag-content" }, [r("ul", null, [(n(true), i(x, null, w(o.slice.items, (e, s) => (n(), i("li", { key: s, grid: "~ cols-1 gap-x-96 md:cols-2 md:items-center", border: "b neutral-300 last:none", p: "first:pb-64 first:md:pb-96 py-64 md:py-96 last:pt-64 last:md:pt-96 md:odd:r-32 md:even:l-32", "children:even:first:col-start-1": "", "children:even:first:col-start-2": "" }, [k(e) === "image" ? (n(), t(m, { key: 0, field: e.image, ring: "1.5 neutral-400", aspect: "1.39 md:1.48 lg:initial", "rounded-6": "", "pointer-events-none": "", shadow: "", "object-cover": "" }, null, 8, ["field"])) : a("", true), r("div", { "py-32": "", "col-start-1": "", "row-start-2": "", "lg:py-96": "", "md:py-80": "", "xl:py-144": "", "md:flex-1": "", "md:row-start-1": "", "md:items-center": "", class: f({ "xl:pl-32 xl:pr-0 ": s % 2 === 0, "xl:pr-32 xl:pl-0 md:col-start-2": s % 2 !== 0 }) }, [("hasImage" in o ? o.hasImage : l(H))(e.logo) ? (n(), t(m, { key: 0, field: e.logo, "max-md:mx-auto": "" }, null, 8, ["field"])) : a("", true), u(p, { wrapper: "div", "f-mt-sm": "", field: e.headline }, null, 8, ["field"]), r("div", N, d(e.label), 1), u(p, { wrapper: "div", "nq-prose-compact": "", "f-mt-lg": "", field: e.description }, null, 8, ["field"]), r("div", V, [("hasLink" in o ? o.hasLink : l(b))(e.buttonHref) ? (n(), t(c, { key: 0, field: e.buttonHref, "font-semibold": "", "nq-arrow": "", "nq-pill-lg": "", "nq-pill-blue": "" }, { default: g(() => [_(d(e.buttonLabel), 1)]), _: 2 }, 1032, ["field"])) : a("", true), ("hasLink" in o ? o.hasLink : l(b))(e.secondaryButtonHref) ? (n(), t(c, { key: 1, field: e.secondaryButtonHref, "un-text-blue": "", "font-semibold": "", "nq-arrow": "" }, { default: g(() => [_(d(e.secondaryButtonLabel), 1)]), _: 2 }, 1032, ["field"])) : a("", true)])], 2)]))), 128))])], 2);
  };
} });
export {
  M as default
};
