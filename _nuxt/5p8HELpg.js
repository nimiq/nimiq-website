import { aP as O, i as v, Z as N, d as y, $ as S, V as w, a2 as D, b as C, o as A, w as g, T as _, u as o, U as R, a5 as P, a3 as T, B as k, ae as q, E as K, bx as j, a as U, m as z, f as L, a9 as X, N as Z } from "./C95QRNzc.js";
import { i as G } from "./CHIgUVhi.js";
import { u as J } from "./FrdfJexk.js";
function Q(a, n) {
  return G(a) ? false : Array.isArray(a) ? a.some((t) => O(t, n)) : O(a, n);
}
function W({ type: a, defaultValue: n, modelValue: t }) {
  const e = t || n;
  return t !== void 0 || n !== void 0 ? Array.isArray(e) ? "multiple" : "single" : a ?? "single";
}
function Y({ type: a, defaultValue: n, modelValue: t }) {
  return a || W({ type: a, defaultValue: n, modelValue: t });
}
function ee({ type: a, defaultValue: n }) {
  return n !== void 0 ? n : a === "single" ? void 0 : [];
}
function ae(a, n) {
  const t = v(() => Y(a)), e = N(a, "modelValue", n, { defaultValue: ee(a), passive: a.modelValue === void 0, deep: true });
  function l(d) {
    if (t.value === "single") e.value = O(d, e.value) ? void 0 : d;
    else {
      const s = Array.isArray(e.value) ? [...e.value || []] : [e.value].filter(Boolean);
      if (Q(s, d)) {
        const u = s.findIndex((p) => O(p, d));
        s.splice(u, 1);
      } else s.push(d);
      e.value = s;
    }
  }
  const i = v(() => t.value === "single");
  return { modelValue: e, changeModelValue: l, isSingle: i };
}
const [E, te] = D("AccordionRoot"), ve = y({ __name: "AccordionRoot", props: { collapsible: { type: Boolean, default: false }, disabled: { type: Boolean, default: false }, dir: {}, orientation: { default: "vertical" }, unmountOnHide: { type: Boolean, default: true }, asChild: { type: Boolean }, as: {}, type: {}, modelValue: {}, defaultValue: {} }, emits: ["update:modelValue"], setup(a, { emit: n }) {
  const t = a, e = n, { dir: l, disabled: i, unmountOnHide: d } = S(t), s = J(l), { modelValue: u, changeModelValue: p, isSingle: m } = ae(t, e), { forwardRef: c, currentElement: f } = w();
  return te({ disabled: i, direction: s, orientation: t.orientation, parentElement: f, isSingle: m, collapsible: t.collapsible, modelValue: u, changeModelValue: p, unmountOnHide: d }), (h, r) => (A(), C(o(R), { ref: o(c), "as-child": h.asChild, as: h.as }, { default: g(() => [_(h.$slots, "default", { modelValue: o(u) })]), _: 3 }, 8, ["as-child", "as"]));
} }), [M, oe] = D("CollapsibleRoot"), ne = y({ __name: "CollapsibleRoot", props: { defaultOpen: { type: Boolean, default: false }, open: { type: Boolean, default: void 0 }, disabled: { type: Boolean }, unmountOnHide: { type: Boolean, default: true }, asChild: { type: Boolean }, as: {} }, emits: ["update:open"], setup(a, { expose: n, emit: t }) {
  const e = a, i = N(e, "open", t, { defaultValue: e.defaultOpen, passive: e.open === void 0 }), { disabled: d, unmountOnHide: s } = S(e);
  return oe({ contentId: "", disabled: d, open: i, unmountOnHide: s, onOpenToggle: () => {
    i.value = !i.value;
  } }), n({ open: i }), w(), (u, p) => (A(), C(o(R), { as: u.as, "as-child": e.asChild, "data-state": o(i) ? "open" : "closed", "data-disabled": o(d) ? "" : void 0 }, { default: g(() => [_(u.$slots, "default", { open: o(i) })]), _: 3 }, 8, ["as", "as-child", "data-state", "data-disabled"]));
} }), le = ["INPUT", "TEXTAREA"];
function ie(a, n, t, e = {}) {
  if (!n || e.enableIgnoredElement && le.includes(n.nodeName)) return null;
  const { arrowKeyOptions: l = "both", attributeName: i = "[data-reka-collection-item]", itemsArray: d = [], loop: s = true, dir: u = "ltr", preventScroll: p = true, focus: m = false } = e, [c, f, h, r, b, x] = [a.key === "ArrowRight", a.key === "ArrowLeft", a.key === "ArrowUp", a.key === "ArrowDown", a.key === "Home", a.key === "End"], B = h || r, $ = c || f;
  if (!b && !x && (!B && !$ || l === "vertical" && $ || l === "horizontal" && B)) return null;
  const V = t ? Array.from(t.querySelectorAll(i)) : d;
  if (!V.length) return null;
  p && a.preventDefault();
  let I = null;
  return $ || B ? I = F(V, n, { goForward: B ? r : u === "ltr" ? c : f, loop: s }) : b ? I = V.at(0) || null : x && (I = V.at(-1) || null), m && (I == null ? void 0 : I.focus()), I;
}
function F(a, n, t, e = a.length) {
  if (--e === 0) return null;
  const l = a.indexOf(n), i = t.goForward ? l + 1 : l - 1;
  if (!t.loop && (i < 0 || i >= a.length)) return null;
  const d = (i + a.length) % a.length, s = a[d];
  return s ? s.hasAttribute("disabled") && s.getAttribute("disabled") !== "false" ? F(a, s, t, e) : s : null;
}
const [H, se] = D("AccordionItem"), me = y({ __name: "AccordionItem", props: { disabled: { type: Boolean }, value: {}, unmountOnHide: { type: Boolean }, asChild: { type: Boolean }, as: {} }, setup(a, { expose: n }) {
  const t = a, e = E(), l = v(() => e.isSingle.value ? t.value === e.modelValue.value : Array.isArray(e.modelValue.value) && e.modelValue.value.includes(t.value)), i = v(() => e.disabled.value || t.disabled), d = v(() => i.value ? "" : void 0), s = v(() => l.value ? "open" : "closed");
  n({ open: l, dataDisabled: d });
  const { currentRef: u, currentElement: p } = w();
  se({ open: l, dataState: s, disabled: i, dataDisabled: d, triggerId: "", currentRef: u, currentElement: p, value: v(() => t.value) });
  function m(c) {
    var _a;
    const f = c.target;
    if (Array.from(((_a = e.parentElement.value) == null ? void 0 : _a.querySelectorAll("[data-reka-collection-item]")) ?? []).findIndex((b) => b === f) === -1) return null;
    ie(c, p.value, e.parentElement.value, { arrowKeyOptions: e.orientation, dir: e.direction.value, focus: true });
  }
  return (c, f) => (A(), C(o(ne), { "data-orientation": o(e).orientation, "data-disabled": d.value, "data-state": s.value, disabled: i.value, open: l.value, as: t.as, "as-child": t.asChild, "unmount-on-hide": o(e).unmountOnHide.value, onKeydown: P(m, ["up", "down", "left", "right", "home", "end"]) }, { default: g(() => [_(c.$slots, "default", { open: l.value })]), _: 3 }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as", "as-child", "unmount-on-hide"]));
} }), de = y({ inheritAttrs: false, __name: "CollapsibleContent", props: { forceMount: { type: Boolean }, asChild: { type: Boolean }, as: {} }, emits: ["contentFound"], setup(a, { emit: n }) {
  const t = a, e = n, l = M();
  l.contentId || (l.contentId = T(void 0, "reka-collapsible-content"));
  const i = k(), { forwardRef: d, currentElement: s } = w(), u = k(0), p = k(0), m = v(() => l.open.value), c = k(m.value), f = k();
  q(() => {
    var _a;
    return [m.value, (_a = i.value) == null ? void 0 : _a.present];
  }, async () => {
    await Z();
    const r = s.value;
    if (!r) return;
    f.value = f.value || { transitionDuration: r.style.transitionDuration, animationName: r.style.animationName }, r.style.transitionDuration = "0s", r.style.animationName = "none";
    const b = r.getBoundingClientRect();
    p.value = b.height, u.value = b.width, c.value || (r.style.transitionDuration = f.value.transitionDuration, r.style.animationName = f.value.animationName);
  }, { immediate: true });
  const h = v(() => c.value && l.open.value);
  return K(() => {
    requestAnimationFrame(() => {
      c.value = false;
    });
  }), j(s, "beforematch", (r) => {
    requestAnimationFrame(() => {
      l.onOpenToggle(), e("contentFound");
    });
  }), (r, b) => (A(), C(o(X), { ref_key: "presentRef", ref: i, present: r.forceMount || o(l).open.value, "force-mount": true }, { default: g(({ present: x }) => {
    var _a;
    return [U(o(R), z(r.$attrs, { id: o(l).contentId, ref: o(d), "as-child": t.asChild, as: r.as, hidden: x ? void 0 : o(l).unmountOnHide.value ? "" : "until-found", "data-state": h.value ? void 0 : o(l).open.value ? "open" : "closed", "data-disabled": ((_a = o(l).disabled) == null ? void 0 : _a.value) ? "" : void 0, style: { "--reka-collapsible-content-height": `${p.value}px`, "--reka-collapsible-content-width": `${u.value}px` } }), { default: g(() => [!o(l).unmountOnHide.value || x ? _(r.$slots, "default", { key: 0 }) : L("", true)]), _: 2 }, 1040, ["id", "as-child", "as", "hidden", "data-state", "data-disabled", "style"])];
  }), _: 3 }, 8, ["present"]));
} }), he = y({ __name: "AccordionContent", props: { forceMount: { type: Boolean }, asChild: { type: Boolean }, as: {} }, setup(a) {
  const n = a, t = E(), e = H();
  return w(), (l, i) => (A(), C(o(de), { role: "region", "as-child": n.asChild, as: l.as, "force-mount": n.forceMount, "aria-labelledby": o(e).triggerId, "data-state": o(e).dataState.value, "data-disabled": o(e).dataDisabled.value, "data-orientation": o(t).orientation, style: { "--reka-accordion-content-width": "var(--reka-collapsible-content-width)", "--reka-accordion-content-height": "var(--reka-collapsible-content-height)" }, onContentFound: i[0] || (i[0] = (d) => o(t).changeModelValue(o(e).value.value)) }, { default: g(() => [_(l.$slots, "default")]), _: 3 }, 8, ["as-child", "as", "force-mount", "aria-labelledby", "data-state", "data-disabled", "data-orientation"]));
} }), re = y({ __name: "CollapsibleTrigger", props: { asChild: { type: Boolean }, as: { default: "button" } }, setup(a) {
  const n = a;
  w();
  const t = M();
  return (e, l) => {
    var _a, _b;
    return A(), C(o(R), { type: e.as === "button" ? "button" : void 0, as: e.as, "as-child": n.asChild, "aria-controls": o(t).contentId, "aria-expanded": o(t).open.value, "data-state": o(t).open.value ? "open" : "closed", "data-disabled": ((_a = o(t).disabled) == null ? void 0 : _a.value) ? "" : void 0, disabled: (_b = o(t).disabled) == null ? void 0 : _b.value, onClick: o(t).onOpenToggle }, { default: g(() => [_(e.$slots, "default")]), _: 3 }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
  };
} }), be = y({ __name: "AccordionTrigger", props: { asChild: { type: Boolean }, as: {} }, setup(a) {
  const n = a, t = E(), e = H();
  e.triggerId || (e.triggerId = T(void 0, "reka-accordion-trigger"));
  function l() {
    const i = t.isSingle.value && e.open.value && !t.collapsible;
    e.disabled.value || i || t.changeModelValue(e.value.value);
  }
  return (i, d) => (A(), C(o(re), { id: o(e).triggerId, ref: o(e).currentRef, "data-reka-collection-item": "", as: n.as, "as-child": n.asChild, "aria-disabled": o(e).disabled.value || void 0, "aria-expanded": o(e).open.value || false, "data-disabled": o(e).dataDisabled.value, "data-orientation": o(t).orientation, "data-state": o(e).dataState.value, disabled: o(e).disabled.value, onClick: l }, { default: g(() => [_(i.$slots, "default")]), _: 3 }, 8, ["id", "as", "as-child", "aria-disabled", "aria-expanded", "data-disabled", "data-orientation", "data-state", "disabled"]));
} });
export {
  ve as _,
  me as a,
  be as b,
  he as c,
  H as d,
  E as i,
  ie as u
};
