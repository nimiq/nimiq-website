import { _ as b } from "./9erUq_gT.js";
import { d as q, j as s, o as e, k as i, F as m, r as c, l as p, g as d, n, t as v, h as f, e as w, ab as B } from "./Dzy_QPZd.js";
import { g as L } from "./CpsPJSKh.js";
import { a as N } from "./BiHuLGzs.js";
import { g as V } from "./tGZIKLS1.js";
import "./CMqLQgad.js";
import "./CR0Fnf8w.js";
const F = { grid: "~ cols-1 gap-20 md:cols-2" }, P = { key: 1, "f-mt-sm": "", "nq-label": "", text: "f-xs neutral-600" }, S = { "f-mt-md": "", flex: "~ gap-14 wrap" }, G = q({ __name: "index", props: L(), setup(u) {
  const _ = V(u.slice.primary.bgColor);
  return (t, z) => {
    const r = b, g = B;
    return e(), s("section", { class: n(f(_)) }, [i("ul", F, [(e(true), s(m, null, c(t.slice.items, ({ description: k, icon: a, links: h, pillLabel: o, title: x }, C) => (e(), s("li", { key: C, "rounded-6": "", "f-p-lg": "", ring: "1.5 neutral-400" }, [a ? (e(), s("div", { key: 0, class: n(a), "f-text": "~ min-58 max-64", "op-60": "", "f-mt-xs": "" }, null, 2)) : p("", true), o ? (e(), s("span", P, v(o), 1)) : p("", true), d(r, { wrapper: "div", field: x }, null, 8, ["field"]), d(r, { wrapper: "div", field: k, "f-mt-sm": "" }, null, 8, ["field"]), i("div", S, [(e(true), s(m, null, c(h.filter("hasLink" in t ? t.hasLink : f(N)), (y, l) => (e(), w(g, { key: l, field: y, class: n(l === 0 ? "nq-pill-blue" : "nq-pill-secondary"), "nq-arrow": "" }, null, 8, ["field", "class"]))), 128))])]))), 128))])], 2);
  };
} });
export {
  G as default
};
