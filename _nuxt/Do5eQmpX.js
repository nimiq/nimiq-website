import { bp as O, a as m, j as N, d as y, t as S, s as w, k as D, e as C, o as A, f as g, l as _, h as o, P as R, z as q, m as M, r as k, Q as P, n as j, bm as K, g as z, J as L, x as U, y as J, q as Q } from "./B8biU-UE.js";
import { i as X } from "./CHIgUVhi.js";
import { u as G } from "./DIegsOBI.js";
function W(t, n) {
  return X(t) ? false : Array.isArray(t) ? t.some((a) => O(a, n)) : O(t, n);
}
function Y({ type: t, defaultValue: n, modelValue: a }) {
  const e = a || n;
  return a !== void 0 || n !== void 0 ? Array.isArray(e) ? "multiple" : "single" : t ?? "single";
}
function Z({ type: t, defaultValue: n, modelValue: a }) {
  return t || Y({ type: t, defaultValue: n, modelValue: a });
}
function ee({ type: t, defaultValue: n }) {
  return n !== void 0 ? n : t === "single" ? void 0 : [];
}
function te(t, n) {
  const a = m(() => Z(t)), e = N(t, "modelValue", n, { defaultValue: ee(t), passive: t.modelValue === void 0, deep: true });
  function l(d) {
    if (a.value === "single") e.value = O(d, e.value) ? void 0 : d;
    else {
      const s = Array.isArray(e.value) ? [...e.value || []] : [e.value].filter(Boolean);
      if (W(s, d)) {
        const u = s.findIndex((p) => O(p, d));
        s.splice(u, 1);
      } else s.push(d);
      e.value = s;
    }
  }
  const i = m(() => a.value === "single");
  return { modelValue: e, changeModelValue: l, isSingle: i };
}
const [E, ae] = D("AccordionRoot"), me = y({ __name: "AccordionRoot", props: { collapsible: { type: Boolean, default: false }, disabled: { type: Boolean, default: false }, dir: {}, orientation: { default: "vertical" }, unmountOnHide: { type: Boolean, default: true }, asChild: { type: Boolean }, as: {}, type: {}, modelValue: {}, defaultValue: {} }, emits: ["update:modelValue"], setup(t, { emit: n }) {
  const a = t, e = n, { dir: l, disabled: i, unmountOnHide: d } = S(a), s = G(l), { modelValue: u, changeModelValue: p, isSingle: v } = te(a, e), { forwardRef: c, currentElement: f } = w();
  return ae({ disabled: i, direction: s, orientation: a.orientation, parentElement: f, isSingle: v, collapsible: a.collapsible, modelValue: u, changeModelValue: p, unmountOnHide: d }), (h, r) => (A(), C(o(R), { ref: o(c), "as-child": h.asChild, as: h.as }, { default: g(() => [_(h.$slots, "default", { modelValue: o(u) })]), _: 3 }, 8, ["as-child", "as"]));
} }), [T, oe] = D("CollapsibleRoot"), ne = y({ __name: "CollapsibleRoot", props: { defaultOpen: { type: Boolean, default: false }, open: { type: Boolean, default: void 0 }, disabled: { type: Boolean }, unmountOnHide: { type: Boolean, default: true }, asChild: { type: Boolean }, as: {} }, emits: ["update:open"], setup(t, { expose: n, emit: a }) {
  const e = t, i = N(e, "open", a, { defaultValue: e.defaultOpen, passive: e.open === void 0 }), { disabled: d, unmountOnHide: s } = S(e);
  return oe({ contentId: "", disabled: d, open: i, unmountOnHide: s, onOpenToggle: () => {
    i.value = !i.value;
  } }), n({ open: i }), w(), (u, p) => (A(), C(o(R), { as: u.as, "as-child": e.asChild, "data-state": o(i) ? "open" : "closed", "data-disabled": o(d) ? "" : void 0 }, { default: g(() => [_(u.$slots, "default", { open: o(i) })]), _: 3 }, 8, ["as", "as-child", "data-state", "data-disabled"]));
} }), le = ["INPUT", "TEXTAREA"];
function ie(t, n, a, e = {}) {
  if (!n || e.enableIgnoredElement && le.includes(n.nodeName)) return null;
  const { arrowKeyOptions: l = "both", attributeName: i = "[data-reka-collection-item]", itemsArray: d = [], loop: s = true, dir: u = "ltr", preventScroll: p = true, focus: v = false } = e, [c, f, h, r, b, x] = [t.key === "ArrowRight", t.key === "ArrowLeft", t.key === "ArrowUp", t.key === "ArrowDown", t.key === "Home", t.key === "End"], B = h || r, $ = c || f;
  if (!b && !x && (!B && !$ || l === "vertical" && $ || l === "horizontal" && B)) return null;
  const V = a ? Array.from(a.querySelectorAll(i)) : d;
  if (!V.length) return null;
  p && t.preventDefault();
  let I = null;
  return $ || B ? I = F(V, n, { goForward: B ? r : u === "ltr" ? c : f, loop: s }) : b ? I = V.at(0) || null : x && (I = V.at(-1) || null), v && (I == null ? void 0 : I.focus()), I;
}
function F(t, n, a, e = t.length) {
  if (--e === 0) return null;
  const l = t.indexOf(n), i = a.goForward ? l + 1 : l - 1;
  if (!a.loop && (i < 0 || i >= t.length)) return null;
  const d = (i + t.length) % t.length, s = t[d];
  return s ? s.hasAttribute("disabled") && s.getAttribute("disabled") !== "false" ? F(t, s, a, e) : s : null;
}
const [H, se] = D("AccordionItem"), ve = y({ __name: "AccordionItem", props: { disabled: { type: Boolean }, value: {}, unmountOnHide: { type: Boolean }, asChild: { type: Boolean }, as: {} }, setup(t, { expose: n }) {
  const a = t, e = E(), l = m(() => e.isSingle.value ? a.value === e.modelValue.value : Array.isArray(e.modelValue.value) && e.modelValue.value.includes(a.value)), i = m(() => e.disabled.value || a.disabled), d = m(() => i.value ? "" : void 0), s = m(() => l.value ? "open" : "closed");
  n({ open: l, dataDisabled: d });
  const { currentRef: u, currentElement: p } = w();
  se({ open: l, dataState: s, disabled: i, dataDisabled: d, triggerId: "", currentRef: u, currentElement: p, value: m(() => a.value) });
  function v(c) {
    var _a;
    const f = c.target;
    if (Array.from(((_a = e.parentElement.value) == null ? void 0 : _a.querySelectorAll("[data-reka-collection-item]")) ?? []).findIndex((b) => b === f) === -1) return null;
    ie(c, p.value, e.parentElement.value, { arrowKeyOptions: e.orientation, dir: e.direction.value, focus: true });
  }
  return (c, f) => (A(), C(o(ne), { "data-orientation": o(e).orientation, "data-disabled": d.value, "data-state": s.value, disabled: i.value, open: l.value, as: a.as, "as-child": a.asChild, "unmount-on-hide": o(e).unmountOnHide.value, onKeydown: q(v, ["up", "down", "left", "right", "home", "end"]) }, { default: g(() => [_(c.$slots, "default", { open: l.value })]), _: 3 }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as", "as-child", "unmount-on-hide"]));
} }), de = y({ inheritAttrs: false, __name: "CollapsibleContent", props: { forceMount: { type: Boolean }, asChild: { type: Boolean }, as: {} }, emits: ["contentFound"], setup(t, { emit: n }) {
  const a = t, e = n, l = T();
  l.contentId || (l.contentId = M(void 0, "reka-collapsible-content"));
  const i = k(), { forwardRef: d, currentElement: s } = w(), u = k(0), p = k(0), v = m(() => l.open.value), c = k(v.value), f = k();
  P(() => {
    var _a;
    return [v.value, (_a = i.value) == null ? void 0 : _a.present];
  }, async () => {
    await Q();
    const r = s.value;
    if (!r) return;
    f.value = f.value || { transitionDuration: r.style.transitionDuration, animationName: r.style.animationName }, r.style.transitionDuration = "0s", r.style.animationName = "none";
    const b = r.getBoundingClientRect();
    p.value = b.height, u.value = b.width, c.value || (r.style.transitionDuration = f.value.transitionDuration, r.style.animationName = f.value.animationName);
  }, { immediate: true });
  const h = m(() => c.value && l.open.value);
  return j(() => {
    requestAnimationFrame(() => {
      c.value = false;
    });
  }), K(s, "beforematch", (r) => {
    requestAnimationFrame(() => {
      l.onOpenToggle(), e("contentFound");
    });
  }), (r, b) => (A(), C(o(J), { ref_key: "presentRef", ref: i, present: r.forceMount || o(l).open.value, "force-mount": true }, { default: g(({ present: x }) => {
    var _a;
    return [z(o(R), L(r.$attrs, { id: o(l).contentId, ref: o(d), "as-child": a.asChild, as: r.as, hidden: x ? void 0 : o(l).unmountOnHide.value ? "" : "until-found", "data-state": h.value ? void 0 : o(l).open.value ? "open" : "closed", "data-disabled": ((_a = o(l).disabled) == null ? void 0 : _a.value) ? "" : void 0, style: { "--reka-collapsible-content-height": `${p.value}px`, "--reka-collapsible-content-width": `${u.value}px` } }), { default: g(() => [!o(l).unmountOnHide.value || x ? _(r.$slots, "default", { key: 0 }) : U("", true)]), _: 2 }, 1040, ["id", "as-child", "as", "hidden", "data-state", "data-disabled", "style"])];
  }), _: 3 }, 8, ["present"]));
} }), he = y({ __name: "AccordionContent", props: { forceMount: { type: Boolean }, asChild: { type: Boolean }, as: {} }, setup(t) {
  const n = t, a = E(), e = H();
  return w(), (l, i) => (A(), C(o(de), { role: "region", "as-child": n.asChild, as: l.as, "force-mount": n.forceMount, "aria-labelledby": o(e).triggerId, "data-state": o(e).dataState.value, "data-disabled": o(e).dataDisabled.value, "data-orientation": o(a).orientation, style: { "--reka-accordion-content-width": "var(--reka-collapsible-content-width)", "--reka-accordion-content-height": "var(--reka-collapsible-content-height)" }, onContentFound: i[0] || (i[0] = (d) => o(a).changeModelValue(o(e).value.value)) }, { default: g(() => [_(l.$slots, "default")]), _: 3 }, 8, ["as-child", "as", "force-mount", "aria-labelledby", "data-state", "data-disabled", "data-orientation"]));
} }), re = y({ __name: "CollapsibleTrigger", props: { asChild: { type: Boolean }, as: { default: "button" } }, setup(t) {
  const n = t;
  w();
  const a = T();
  return (e, l) => {
    var _a, _b;
    return A(), C(o(R), { type: e.as === "button" ? "button" : void 0, as: e.as, "as-child": n.asChild, "aria-controls": o(a).contentId, "aria-expanded": o(a).open.value, "data-state": o(a).open.value ? "open" : "closed", "data-disabled": ((_a = o(a).disabled) == null ? void 0 : _a.value) ? "" : void 0, disabled: (_b = o(a).disabled) == null ? void 0 : _b.value, onClick: o(a).onOpenToggle }, { default: g(() => [_(e.$slots, "default")]), _: 3 }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
  };
} }), be = y({ __name: "AccordionTrigger", props: { asChild: { type: Boolean }, as: {} }, setup(t) {
  const n = t, a = E(), e = H();
  e.triggerId || (e.triggerId = M(void 0, "reka-accordion-trigger"));
  function l() {
    const i = a.isSingle.value && e.open.value && !a.collapsible;
    e.disabled.value || i || a.changeModelValue(e.value.value);
  }
  return (i, d) => (A(), C(o(re), { id: o(e).triggerId, ref: o(e).currentRef, "data-reka-collection-item": "", as: n.as, "as-child": n.asChild, "aria-disabled": o(e).disabled.value || void 0, "aria-expanded": o(e).open.value || false, "data-disabled": o(e).dataDisabled.value, "data-orientation": o(a).orientation, "data-state": o(e).dataState.value, disabled: o(e).disabled.value, onClick: l }, { default: g(() => [_(i.$slots, "default")]), _: 3 }, 8, ["id", "as", "as-child", "aria-disabled", "aria-expanded", "data-disabled", "data-orientation", "data-state", "disabled"]));
} });
export {
  me as _,
  ve as a,
  be as b,
  he as c,
  H as d,
  E as i,
  ie as u
};
