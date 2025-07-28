import { P as A, h as x, S as v } from "./CMmzeBWC.js";
import { d as u, b as I, o as R, w as _, R as k, u as P, C as d, j as m, a5 as g, V as $, I as h, Y as T, a6 as j, J as B } from "./BguRs3jF.js";
const O = u({ __name: "VisuallyHidden", props: { feature: { default: "focusable" }, asChild: { type: Boolean }, as: { default: "span" } }, setup(a) {
  return (e, f) => (R(), I(P(A), { as: e.as, "as-child": e.asChild, "aria-hidden": e.feature === "focusable" ? "true" : void 0, "data-hidden": e.feature === "fully-hidden" ? "" : void 0, tabindex: e.feature === "fully-hidden" ? "-1" : void 0, style: { position: "absolute", border: 0, width: "1px", height: "1px", padding: 0, margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", clipPath: "inset(50%)", whiteSpace: "nowrap", wordWrap: "normal" } }, { default: _(() => [k(e.$slots, "default")]), _: 3 }, 8, ["as", "as-child", "aria-hidden", "data-hidden", "tabindex"]));
} });
function y() {
  const a = d(), e = m(() => {
    var _a, _b;
    return ["#text", "#comment"].includes((_a = a.value) == null ? void 0 : _a.$el.nodeName) ? (_b = a.value) == null ? void 0 : _b.$el.nextElementSibling : x(a);
  });
  return { primitiveElement: a, currentElement: e };
}
const w = "data-reka-collection-item";
function V(a = {}) {
  const { key: e = "", isProvider: f = false } = a, p = `${e}CollectionProvider`;
  let t;
  if (f) {
    const o = d(/* @__PURE__ */ new Map());
    t = { collectionRef: d(), itemMap: o }, j(p, t);
  } else t = g(p);
  const C = (o = false) => {
    const n = t.collectionRef.value;
    if (!n) return [];
    const i = Array.from(n.querySelectorAll(`[${w}]`)), l = Array.from(t.itemMap.value.values()).sort((s, c) => i.indexOf(s.ref) - i.indexOf(c.ref));
    return o ? l : l.filter((s) => s.ref.dataset.disabled !== "");
  }, E = u({ name: "CollectionSlot", setup(o, { slots: n }) {
    const { primitiveElement: i, currentElement: r } = y();
    return T(r, () => {
      t.collectionRef.value = r.value;
    }), () => h(v, { ref: i }, n);
  } }), b = u({ name: "CollectionItem", inheritAttrs: false, props: { value: { validator: () => true } }, setup(o, { slots: n, attrs: i }) {
    const { primitiveElement: r, currentElement: l } = y();
    return $((s) => {
      if (l.value) {
        const c = B(l.value);
        t.itemMap.value.set(c, { ref: l.value, value: o.value }), s(() => t.itemMap.value.delete(c));
      }
    }), () => h(v, { ...i, [w]: "", ref: r }, n);
  } }), M = m(() => Array.from(t.itemMap.value.values())), S = m(() => t.itemMap.value.size);
  return { getItems: C, reactiveItems: M, itemMapSize: S, CollectionSlot: E, CollectionItem: b };
}
export {
  O as _,
  y as a,
  V as u
};
