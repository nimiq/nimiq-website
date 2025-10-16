import { _ as B } from "./skKO6Fnq.js";
import { d as q, B as s, o as e, C as i, H as m, I as c, x as p, g as d, D as n, E as v, h as f, e as w, ag as L } from "./B8biU-UE.js";
import { g as b } from "./CpsPJSKh.js";
import { a as N } from "./DRbUa3ZN.js";
import { g as V } from "./BzRmGp1f.js";
import "./DOgGst0G.js";
import "./B5vKjtsS.js";
const D = { grid: "~ cols-1 gap-20 md:cols-2" }, E = { key: 1, "f-mt-sm": "", "nq-label": "", text: "f-xs neutral-600" }, P = { "f-mt-md": "", flex: "~ gap-14 wrap" }, A = q({ __name: "index", props: b(), setup(u) {
  const _ = V(u.slice.primary.bgColor);
  return (t, S) => {
    const r = B, g = L;
    return e(), s("section", { class: n(f(_)) }, [i("ul", D, [(e(true), s(m, null, c(t.slice.items, ({ description: k, icon: a, links: h, pillLabel: o, title: x }, C) => (e(), s("li", { key: C, "rounded-6": "", "f-p-lg": "", ring: "1.5 neutral-400" }, [a ? (e(), s("div", { key: 0, class: n(a), "f-text": "~ min-58 max-64", "op-60": "", "f-mt-xs": "" }, null, 2)) : p("", true), o ? (e(), s("span", E, v(o), 1)) : p("", true), d(r, { wrapper: "div", field: x }, null, 8, ["field"]), d(r, { wrapper: "div", field: k, "f-mt-sm": "" }, null, 8, ["field"]), i("div", P, [(e(true), s(m, null, c(h.filter("hasLink" in t ? t.hasLink : f(N)), (y, l) => (e(), w(g, { key: l, field: y, class: n(l === 0 ? "nq-pill-blue" : "nq-pill-secondary"), "nq-arrow": "" }, null, 8, ["field", "class"]))), 128))])]))), 128))])], 2);
  };
} });
export {
  A as default
};
