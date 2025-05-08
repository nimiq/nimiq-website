import { d as x, at as w, c as i, o, e as t, F as L, r as C, b as r, f as a, n as f, a as u, u as s, t as d, w as g, g as b, D as q, Y as B } from "./ClGJWWej.js";
import { g as z } from "./CpsPJSKh.js";
import { _ as H } from "./D3wyXQF5.js";
import { c as I, h as _ } from "./SvaN8giD.js";
import { m as N } from "./bWEtUbjf.js";
import { g as T } from "./Dxc61GTl.js";
import { u as V } from "./CEBR9iVI.js";
import "./YKo2rOHu.js";
const P = { "text-12": "", "nq-label": "", "f-mt-2xs": "" }, R = { flex: "~ gap-24 md:col lg:row", "max-w-lg": "", "f-mt-sm": "" }, A = x({ __name: "index", props: z(), setup(h) {
  const y = T(h.slice.primary.bgColor);
  function k(n) {
    var _a;
    return "url" in n.videoHigh && "url" in n.videoMedium && "url" in n.videoLow ? "video" : ((_a = n.image) == null ? void 0 : _a.url) ? "image" : "none";
  }
  const v = w("section");
  return V(v, () => {
    N('[data-slice-type="zig-zag-content"] img', { margin: 24, background: "rgb(var(--nq-neutral-0) / 1)" });
  }), (n, F) => {
    const m = q, c = H, p = B;
    return o(), i("section", { ref: "section", class: f(s(y)), "data-slice-type": "zig-zag-content" }, [t("ul", null, [(o(true), i(L, null, C(n.slice.items, (e, l) => (o(), i("li", { key: l, grid: "~ cols-1 gap-x-96 md:cols-2 md:items-center", border: "b neutral-300 last:none", p: "first:pb-64 first:md:pb-96 py-64 md:py-96 last:pt-64 last:md:pt-96 md:odd:r-32 md:even:l-32", "children:even:first:col-start-1": "", "children:even:first:col-start-2": "" }, [k(e) === "image" ? (o(), r(m, { key: 0, field: e.image, ring: "1.5 neutral-400", aspect: "1.39 md:1.48 lg:initial", "rounded-6": "", "object-cover": "", shadow: "" }, null, 8, ["field"])) : a("", true), t("div", { "col-start-1": "", "row-start-2": "", "py-32": "", "md:row-start-1": "", "md:flex-1": "", "md:items-center": "", "lg:py-96": "", "md:py-80": "", "xl:py-144": "", class: f({ "xl:pl-32 xl:pr-0 ": l % 2 === 0, "xl:pr-32 xl:pl-0 md:col-start-2": l % 2 !== 0 }) }, [("hasImage" in n ? n.hasImage : s(I))(e.logo) ? (o(), r(m, { key: 0, field: e.logo, "max-md:mx-auto": "" }, null, 8, ["field"])) : a("", true), u(c, { wrapper: "div", "f-mt-sm": "", field: e.headline }, null, 8, ["field"]), t("div", P, d(e.label), 1), u(c, { wrapper: "div", "nq-prose-compact": "", "f-mt-lg": "", field: e.description }, null, 8, ["field"]), t("div", R, [("hasLink" in n ? n.hasLink : s(_))(e.buttonHref) ? (o(), r(p, { key: 0, "internal-component": "a", field: e.buttonHref, "font-semibold": "", "nq-arrow": "", "nq-pill-lg": "", "nq-pill-blue": "" }, { default: g(() => [b(d(e.buttonLabel), 1)]), _: 2 }, 1032, ["field"])) : a("", true), ("hasLink" in n ? n.hasLink : s(_))(e.secondaryButtonHref) ? (o(), r(p, { key: 1, "internal-component": "a", field: e.secondaryButtonHref, "un-text-blue": "", "font-semibold": "", "nq-arrow": "" }, { default: g(() => [b(d(e.secondaryButtonLabel), 1)]), _: 2 }, 1032, ["field"])) : a("", true)])], 2)]))), 128))])], 2);
  };
} });
export {
  A as default
};
