import { _ as b } from "./DakKeHV_.js";
import { d as q, c as s, o as e, e as i, F as m, r as c, f as p, a as d, n as t, t as v, u as f, b as w, Y as B } from "./gdLxT4Lf.js";
import { g as L } from "./CpsPJSKh.js";
import { a as N } from "./D7zdd4-D.js";
import { g as V } from "./DzQE7UG-.js";
import "./eRMYwULF.js";
import "./DYDUvkDP.js";
const F = { grid: "~ cols-1 gap-20 md:cols-2" }, P = { key: 1, "f-mt-sm": "", "nq-label": "", text: "f-xs neutral-600" }, S = { "f-mt-md": "", flex: "~ gap-14 wrap" }, G = q({ __name: "index", props: L(), setup(u) {
  const _ = V(u.slice.primary.bgColor);
  return (n, z) => {
    const r = b, g = B;
    return e(), s("section", { class: t(f(_)) }, [i("ul", F, [(e(true), s(m, null, c(n.slice.items, ({ description: k, icon: a, links: h, pillLabel: o, title: x }, C) => (e(), s("li", { key: C, "rounded-6": "", "f-p-lg": "", ring: "1.5 neutral-400" }, [a ? (e(), s("div", { key: 0, class: t(a), "f-text": "~ min-58 max-64", "op-60": "", "f-mt-xs": "" }, null, 2)) : p("", true), o ? (e(), s("span", P, v(o), 1)) : p("", true), d(r, { wrapper: "div", field: x }, null, 8, ["field"]), d(r, { wrapper: "div", field: k, "f-mt-sm": "" }, null, 8, ["field"]), i("div", S, [(e(true), s(m, null, c(h.filter("hasLink" in n ? n.hasLink : f(N)), (y, l) => (e(), w(g, { key: l, "internal-component": "a", field: y, class: t(l === 0 ? "nq-pill-blue" : "nq-pill-secondary"), "nq-arrow": "" }, null, 8, ["field", "class"]))), 128))])]))), 128))])], 2);
  };
} });
export {
  G as default
};
