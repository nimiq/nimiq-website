import { d as p, B as e, o as t, g as s, f as u, x as f, E as d, h as x, J as b, aK as g, H as h } from "./B8biU-UE.js";
import { c as T } from "./DOgGst0G.js";
const k = ["innerHTML"], R = { key: 1, "text-gold": "", "font-semibold": "", "f-text-3xl": "" }, L = p({ __name: "RichText", props: { field: {}, fallback: {}, components: {}, linkResolver: {}, serializer: { type: Function }, wrapper: {} }, setup(a) {
  const l = a, [r, c] = T(), i = { label: c };
  return (_, y) => {
    const m = g;
    return t(), e(h, null, [s(x(r), null, { default: u(({ node: { data: n, text: o } }) => [(n == null ? void 0 : n.label) === "HTML" ? (t(), e("div", { key: 0, innerHTML: o }, null, 8, k)) : (n == null ? void 0 : n.label) === "text-gold nq_large-text" ? (t(), e("p", R, d(o), 1)) : f("", true)]), _: 1 }), s(m, b({ ...l, ..._.$attrs }, { components: i }), null, 16)], 64);
  };
} }), C = Object.assign(L, { __name: "RichText" });
export {
  C as _
};
