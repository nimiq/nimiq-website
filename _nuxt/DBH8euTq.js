import { d, e as A, o as S, f as R, Q as _, h as k, R as I, v as u, a as f, aa as g, am as P, Z as $, E as T, D as v, bo as h, x as B, an as N } from "./Dzy_QPZd.js";
const z = d({ __name: "VisuallyHidden", props: { feature: { default: "focusable" }, asChild: { type: Boolean }, as: { default: "span" } }, setup(a) {
  return (e, m) => (S(), A(k(I), { as: e.as, "as-child": e.asChild, "aria-hidden": e.feature === "focusable" ? "true" : void 0, "data-hidden": e.feature === "fully-hidden" ? "" : void 0, tabindex: e.feature === "fully-hidden" ? "-1" : void 0, style: { position: "absolute", border: 0, width: "1px", height: "1px", padding: 0, margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", clipPath: "inset(50%)", whiteSpace: "nowrap", wordWrap: "normal" } }, { default: R(() => [_(e.$slots, "default")]), _: 3 }, 8, ["as", "as-child", "aria-hidden", "data-hidden", "tabindex"]));
} });
function y() {
  const a = u(), e = f(() => {
    var _a, _b;
    return ["#text", "#comment"].includes((_a = a.value) == null ? void 0 : _a.$el.nodeName) ? (_b = a.value) == null ? void 0 : _b.$el.nextElementSibling : g(a);
  });
  return { primitiveElement: a, currentElement: e };
}
const E = "data-reka-collection-item";
function D(a = {}) {
  const { key: e = "", isProvider: m = false } = a, p = `${e}CollectionProvider`;
  let t;
  if (m) {
    const l = u(/* @__PURE__ */ new Map());
    t = { collectionRef: u(), itemMap: l }, N(p, t);
  } else t = P(p);
  const w = (l = false) => {
    const n = t.collectionRef.value;
    if (!n) return [];
    const o = Array.from(n.querySelectorAll(`[${E}]`)), i = Array.from(t.itemMap.value.values()).sort((s, c) => o.indexOf(s.ref) - o.indexOf(c.ref));
    return l ? i : i.filter((s) => s.ref.dataset.disabled !== "");
  }, C = d({ name: "CollectionSlot", setup(l, { slots: n }) {
    const { primitiveElement: o, currentElement: r } = y();
    return B(r, () => {
      t.collectionRef.value = r.value;
    }), () => v(h, { ref: o }, n);
  } }), b = d({ name: "CollectionItem", inheritAttrs: false, props: { value: { validator: () => true } }, setup(l, { slots: n, attrs: o }) {
    const { primitiveElement: r, currentElement: i } = y();
    return $((s) => {
      if (i.value) {
        const c = T(i.value);
        t.itemMap.value.set(c, { ref: i.value, value: l.value }), s(() => t.itemMap.value.delete(c));
      }
    }), () => v(h, { ...o, [E]: "", ref: r }, n);
  } }), M = f(() => Array.from(t.itemMap.value.values())), x = f(() => t.itemMap.value.size);
  return { getItems: w, reactiveItems: M, itemMapSize: x, CollectionSlot: C, CollectionItem: b };
}
export {
  z as _,
  y as a,
  D as u
};
