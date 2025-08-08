import { d as p, c as e, o as t, F as u, a as s, u as f, w as d, f as x, t as b, aH as g, m as h } from "./C95QRNzc.js";
import { c as T } from "./DEpc-rVb.js";
const k = ["innerHTML"], R = { key: 1, "text-gold": "", "font-semibold": "", "f-text-3xl": "" }, L = p({ __name: "RichText", props: { field: {}, fallback: {}, components: {}, linkResolver: {}, serializer: { type: Function }, wrapper: {} }, setup(a) {
  const l = a, [c, r] = T(), i = { label: r };
  return (m, y) => {
    const _ = g;
    return t(), e(u, null, [s(f(c), null, { default: d(({ node: { data: n, text: o } }) => [(n == null ? void 0 : n.label) === "HTML" ? (t(), e("div", { key: 0, innerHTML: o }, null, 8, k)) : (n == null ? void 0 : n.label) === "text-gold nq_large-text" ? (t(), e("p", R, b(o), 1)) : x("", true)]), _: 1 }), s(_, h({ ...l, ...m.$attrs }, { components: i }), null, 16)], 64);
  };
} }), C = Object.assign(L, { __name: "RichText" });
export {
  C as _
};
