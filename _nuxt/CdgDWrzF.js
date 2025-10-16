import { _ as k } from "./CDGVCZAD.js";
import { _ as v } from "./skKO6Fnq.js";
import { d as w, B as i, o as n, C as r, H as C, I as L, e as t, x as a, D as f, g as u, h as l, E as d, f as g, G as _, ag as B } from "./B8biU-UE.js";
import { g as q } from "./CpsPJSKh.js";
import { h as H, a as h } from "./DRbUa3ZN.js";
import { g as I } from "./BzRmGp1f.js";
import "./Fc1-Bd8L.js";
import "./DOgGst0G.js";
import "./B5vKjtsS.js";
const N = { "text-12": "", "f-mt-2xs": "", "nq-label": "" }, P = { flex: "~ gap-24 md:col lg:row", "max-w-lg": "", "f-mt-sm": "" }, $ = w({ __name: "index", props: q(), setup(b) {
  const y = I(b.slice.primary.bgColor);
  function x(o) {
    var _a;
    return "url" in o.videoHigh && "url" in o.videoMedium && "url" in o.videoLow ? "video" : ((_a = o.image) == null ? void 0 : _a.url) ? "image" : "none";
  }
  return (o, z) => {
    const m = k, p = v, c = B;
    return n(), i("section", { class: f(l(y)), "data-slice-type": "zig-zag-content" }, [r("ul", null, [(n(true), i(C, null, L(o.slice.items, (e, s) => (n(), i("li", { key: s, grid: "~ cols-1 gap-x-96 md:cols-2 md:items-center", border: "b neutral-300 last:none", p: "first:pb-64 first:md:pb-96 py-64 md:py-96 last:pt-64 last:md:pt-96 md:odd:r-32 md:even:l-32", "children:even:first:col-start-1": "", "children:even:first:col-start-2": "" }, [x(e) === "image" ? (n(), t(m, { key: 0, field: e.image, ring: "1.5 neutral-400", aspect: "1.39 md:1.48 lg:initial", "rounded-6": "", "pointer-events-none": "", shadow: "", "object-cover": "" }, null, 8, ["field"])) : a("", true), r("div", { "py-32": "", "col-start-1": "", "row-start-2": "", "lg:py-96": "", "md:py-80": "", "xl:py-144": "", "md:flex-1": "", "md:row-start-1": "", "md:items-center": "", class: f({ "xl:pl-32 xl:pr-0 ": s % 2 === 0, "xl:pr-32 xl:pl-0 md:col-start-2": s % 2 !== 0 }) }, [("hasImage" in o ? o.hasImage : l(H))(e.logo) ? (n(), t(m, { key: 0, field: e.logo, "max-md:mx-auto": "" }, null, 8, ["field"])) : a("", true), u(p, { wrapper: "div", "f-mt-sm": "", field: e.headline }, null, 8, ["field"]), r("div", N, d(e.label), 1), u(p, { wrapper: "div", "nq-prose-compact": "", "f-mt-lg": "", field: e.description }, null, 8, ["field"]), r("div", P, [("hasLink" in o ? o.hasLink : l(h))(e.buttonHref) ? (n(), t(c, { key: 0, field: e.buttonHref, "font-semibold": "", "nq-arrow": "", "nq-pill-lg": "", "nq-pill-blue": "" }, { default: g(() => [_(d(e.buttonLabel), 1)]), _: 2 }, 1032, ["field"])) : a("", true), ("hasLink" in o ? o.hasLink : l(h))(e.secondaryButtonHref) ? (n(), t(c, { key: 1, field: e.secondaryButtonHref, "un-text-blue": "", "font-semibold": "", "nq-arrow": "" }, { default: g(() => [_(d(e.secondaryButtonLabel), 1)]), _: 2 }, 1032, ["field"])) : a("", true)])], 2)]))), 128))])], 2);
  };
} });
export {
  $ as default
};
