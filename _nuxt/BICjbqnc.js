import { d as p, j as e, o as t, g as s, f as u, l as f, t as d, h as x, s as b, aG as g, F as h } from "./BSLliBk6.js";
import { c as T } from "./FOZmO4jG.js";
const k = ["innerHTML"], R = { key: 1, "text-gold": "", "font-semibold": "", "f-text-3xl": "" }, L = p({ __name: "RichText", props: { field: {}, fallback: {}, components: {}, linkResolver: {}, serializer: { type: Function }, wrapper: {} }, setup(a) {
  const l = a, [r, c] = T(), i = { label: c };
  return (_, y) => {
    const m = g;
    return t(), e(h, null, [s(x(r), null, { default: u(({ node: { data: n, text: o } }) => [(n == null ? void 0 : n.label) === "HTML" ? (t(), e("div", { key: 0, innerHTML: o }, null, 8, k)) : (n == null ? void 0 : n.label) === "text-gold nq_large-text" ? (t(), e("p", R, d(o), 1)) : f("", true)]), _: 1 }), s(m, b({ ...l, ..._.$attrs }, { components: i }), null, 16)], 64);
  };
} }), H = Object.assign(L, { __name: "RichText" });
export {
  H as _
};
