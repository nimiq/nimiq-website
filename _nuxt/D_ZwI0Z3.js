import { d, b as S, o as x, w as I, T as _, u as k, U as R, B as u, i as f, ad as g, an as P, a1 as T, I as $, H as v, bA as h, ae as B, ao as N } from "./C95QRNzc.js";
const z = d({ __name: "VisuallyHidden", props: { feature: { default: "focusable" }, asChild: { type: Boolean }, as: { default: "span" } }, setup(a) {
  return (e, m) => (x(), S(k(R), { as: e.as, "as-child": e.asChild, "aria-hidden": e.feature === "focusable" ? "true" : void 0, "data-hidden": e.feature === "fully-hidden" ? "" : void 0, tabindex: e.feature === "fully-hidden" ? "-1" : void 0, style: { position: "absolute", border: 0, width: "1px", height: "1px", padding: 0, margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", clipPath: "inset(50%)", whiteSpace: "nowrap", wordWrap: "normal" } }, { default: I(() => [_(e.$slots, "default")]), _: 3 }, 8, ["as", "as-child", "aria-hidden", "data-hidden", "tabindex"]));
} });
function y() {
  const a = u(), e = f(() => {
    var _a, _b;
    return ["#text", "#comment"].includes((_a = a.value) == null ? void 0 : _a.$el.nodeName) ? (_b = a.value) == null ? void 0 : _b.$el.nextElementSibling : g(a);
  });
  return { primitiveElement: a, currentElement: e };
}
const w = "data-reka-collection-item";
function H(a = {}) {
  const { key: e = "", isProvider: m = false } = a, p = `${e}CollectionProvider`;
  let t;
  if (m) {
    const i = u(/* @__PURE__ */ new Map());
    t = { collectionRef: u(), itemMap: i }, N(p, t);
  } else t = P(p);
  const E = (i = false) => {
    const n = t.collectionRef.value;
    if (!n) return [];
    const l = Array.from(n.querySelectorAll(`[${w}]`)), o = Array.from(t.itemMap.value.values()).sort((s, c) => l.indexOf(s.ref) - l.indexOf(c.ref));
    return i ? o : o.filter((s) => s.ref.dataset.disabled !== "");
  }, b = d({ name: "CollectionSlot", setup(i, { slots: n }) {
    const { primitiveElement: l, currentElement: r } = y();
    return B(r, () => {
      t.collectionRef.value = r.value;
    }), () => v(h, { ref: l }, n);
  } }), C = d({ name: "CollectionItem", inheritAttrs: false, props: { value: { validator: () => true } }, setup(i, { slots: n, attrs: l }) {
    const { primitiveElement: r, currentElement: o } = y();
    return T((s) => {
      if (o.value) {
        const c = $(o.value);
        t.itemMap.value.set(c, { ref: o.value, value: i.value }), s(() => t.itemMap.value.delete(c));
      }
    }), () => v(h, { ...l, [w]: "", ref: r }, n);
  } }), A = f(() => Array.from(t.itemMap.value.values())), M = f(() => t.itemMap.value.size);
  return { getItems: E, reactiveItems: A, itemMapSize: M, CollectionSlot: b, CollectionItem: C };
}
export {
  z as _,
  y as a,
  H as u
};
