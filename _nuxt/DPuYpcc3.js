import { r as m, a as u, af as S, aq as T, d as v, a7 as b, U as h, T as d, bb as p, Q as k, ar as w } from "./B8biU-UE.js";
function E() {
  const n = m(), c = u(() => {
    var _a, _b;
    return ["#text", "#comment"].includes((_a = n.value) == null ? void 0 : _a.$el.nodeName) ? (_b = n.value) == null ? void 0 : _b.$el.nextElementSibling : S(n);
  });
  return { primitiveElement: n, currentElement: c };
}
const M = "data-reka-collection-item";
function N(n = {}) {
  const { key: c = "", isProvider: A = false } = n, f = `${c}CollectionProvider`;
  let e;
  if (A) {
    const o = m(/* @__PURE__ */ new Map());
    e = { collectionRef: m(), itemMap: o }, w(f, e);
  } else e = T(f);
  const y = (o = false) => {
    const t = e.collectionRef.value;
    if (!t) return [];
    const l = Array.from(t.querySelectorAll(`[${M}]`)), a = Array.from(e.itemMap.value.values()).sort((i, s) => l.indexOf(i.ref) - l.indexOf(s.ref));
    return o ? a : a.filter((i) => i.ref.dataset.disabled !== "");
  }, C = v({ name: "CollectionSlot", setup(o, { slots: t }) {
    const { primitiveElement: l, currentElement: r } = E();
    return k(r, () => {
      e.collectionRef.value = r.value;
    }), () => d(p, { ref: l }, t);
  } }), x = v({ name: "CollectionItem", inheritAttrs: false, props: { value: { validator: () => true } }, setup(o, { slots: t, attrs: l }) {
    const { primitiveElement: r, currentElement: a } = E();
    return b((i) => {
      if (a.value) {
        const s = h(a.value);
        e.itemMap.value.set(s, { ref: a.value, value: o.value }), i(() => e.itemMap.value.delete(s));
      }
    }), () => d(p, { ...l, [M]: "", ref: r }, t);
  } }), I = u(() => Array.from(e.itemMap.value.values())), R = u(() => e.itemMap.value.size);
  return { getItems: y, reactiveItems: I, itemMapSize: R, CollectionSlot: C, CollectionItem: x };
}
export {
  E as a,
  N as u
};
