import { a as N, u as w, c as D, P as R, b as S, s as q, f as P } from "./CMmzeBWC.js";
import { aq as O, j as m, d as y, U as M, b as C, o as A, w as g, R as _, u as o, W as j, C as k, Y as K, G as U, a as z, m as L, f as G, a2 as W } from "./BguRs3jF.js";
import { i as X } from "./CHIgUVhi.js";
import { u as Y } from "./qA1gjzOk.js";
function J(t, n) {
  return X(t) ? false : Array.isArray(t) ? t.some((a) => O(a, n)) : O(t, n);
}
function Q({ type: t, defaultValue: n, modelValue: a }) {
  const e = a || n;
  return a !== void 0 || n !== void 0 ? Array.isArray(e) ? "multiple" : "single" : t ?? "single";
}
function Z({ type: t, defaultValue: n, modelValue: a }) {
  return t || Q({ type: t, defaultValue: n, modelValue: a });
}
function ee({ type: t, defaultValue: n }) {
  return n !== void 0 ? n : t === "single" ? void 0 : [];
}
function te(t, n) {
  const a = m(() => Z(t)), e = N(t, "modelValue", n, { defaultValue: ee(t), passive: t.modelValue === void 0, deep: true });
  function l(r) {
    if (a.value === "single") e.value = O(r, e.value) ? void 0 : r;
    else {
      const s = Array.isArray(e.value) ? [...e.value || []] : [e.value].filter(Boolean);
      if (J(s, r)) {
        const u = s.findIndex((p) => O(p, r));
        s.splice(u, 1);
      } else s.push(r);
      e.value = s;
    }
  }
  const i = m(() => a.value === "single");
  return { modelValue: e, changeModelValue: l, isSingle: i };
}
const [E, ae] = D("AccordionRoot"), ve = y({ __name: "AccordionRoot", props: { collapsible: { type: Boolean, default: false }, disabled: { type: Boolean, default: false }, dir: {}, orientation: { default: "vertical" }, unmountOnHide: { type: Boolean, default: true }, asChild: { type: Boolean }, as: {}, type: {}, modelValue: {}, defaultValue: {} }, emits: ["update:modelValue"], setup(t, { emit: n }) {
  const a = t, e = n, { dir: l, disabled: i, unmountOnHide: r } = M(a), s = Y(l), { modelValue: u, changeModelValue: p, isSingle: v } = te(a, e), { forwardRef: c, currentElement: f } = w();
  return ae({ disabled: i, direction: s, orientation: a.orientation, parentElement: f, isSingle: v, collapsible: a.collapsible, modelValue: u, changeModelValue: p, unmountOnHide: r }), (h, d) => (A(), C(o(R), { ref: o(c), "as-child": h.asChild, as: h.as }, { default: g(() => [_(h.$slots, "default", { modelValue: o(u) })]), _: 3 }, 8, ["as-child", "as"]));
} }), [T, oe] = D("CollapsibleRoot"), ne = y({ __name: "CollapsibleRoot", props: { defaultOpen: { type: Boolean, default: false }, open: { type: Boolean, default: void 0 }, disabled: { type: Boolean }, unmountOnHide: { type: Boolean, default: true }, asChild: { type: Boolean }, as: {} }, emits: ["update:open"], setup(t, { expose: n, emit: a }) {
  const e = t, i = N(e, "open", a, { defaultValue: e.defaultOpen, passive: e.open === void 0 }), { disabled: r, unmountOnHide: s } = M(e);
  return oe({ contentId: "", disabled: r, open: i, unmountOnHide: s, onOpenToggle: () => {
    i.value = !i.value;
  } }), n({ open: i }), w(), (u, p) => (A(), C(o(R), { as: u.as, "as-child": e.asChild, "data-state": o(i) ? "open" : "closed", "data-disabled": o(r) ? "" : void 0 }, { default: g(() => [_(u.$slots, "default", { open: o(i) })]), _: 3 }, 8, ["as", "as-child", "data-state", "data-disabled"]));
} }), le = ["INPUT", "TEXTAREA"];
function ie(t, n, a, e = {}) {
  if (!n || e.enableIgnoredElement && le.includes(n.nodeName)) return null;
  const { arrowKeyOptions: l = "both", attributeName: i = "[data-reka-collection-item]", itemsArray: r = [], loop: s = true, dir: u = "ltr", preventScroll: p = true, focus: v = false } = e, [c, f, h, d, b, I] = [t.key === "ArrowRight", t.key === "ArrowLeft", t.key === "ArrowUp", t.key === "ArrowDown", t.key === "Home", t.key === "End"], B = h || d, $ = c || f;
  if (!b && !I && (!B && !$ || l === "vertical" && $ || l === "horizontal" && B)) return null;
  const V = a ? Array.from(a.querySelectorAll(i)) : r;
  if (!V.length) return null;
  p && t.preventDefault();
  let x = null;
  return $ || B ? x = F(V, n, { goForward: B ? d : u === "ltr" ? c : f, loop: s }) : b ? x = V.at(0) || null : I && (x = V.at(-1) || null), v && (x == null ? void 0 : x.focus()), x;
}
function F(t, n, a, e = t.length) {
  if (--e === 0) return null;
  const l = t.indexOf(n), i = a.goForward ? l + 1 : l - 1;
  if (!a.loop && (i < 0 || i >= t.length)) return null;
  const r = (i + t.length) % t.length, s = t[r];
  return s ? s.hasAttribute("disabled") && s.getAttribute("disabled") !== "false" ? F(t, s, a, e) : s : null;
}
const [H, se] = D("AccordionItem"), he = y({ __name: "AccordionItem", props: { disabled: { type: Boolean }, value: {}, unmountOnHide: { type: Boolean }, asChild: { type: Boolean }, as: {} }, setup(t, { expose: n }) {
  const a = t, e = E(), l = m(() => e.isSingle.value ? a.value === e.modelValue.value : Array.isArray(e.modelValue.value) && e.modelValue.value.includes(a.value)), i = m(() => e.disabled.value || a.disabled), r = m(() => i.value ? "" : void 0), s = m(() => l.value ? "open" : "closed");
  n({ open: l, dataDisabled: r });
  const { currentRef: u, currentElement: p } = w();
  se({ open: l, dataState: s, disabled: i, dataDisabled: r, triggerId: "", currentRef: u, currentElement: p, value: m(() => a.value) });
  function v(c) {
    var _a;
    const f = c.target;
    if (Array.from(((_a = e.parentElement.value) == null ? void 0 : _a.querySelectorAll("[data-reka-collection-item]")) ?? []).findIndex((b) => b === f) === -1) return null;
    ie(c, p.value, e.parentElement.value, { arrowKeyOptions: e.orientation, dir: e.direction.value, focus: true });
  }
  return (c, f) => (A(), C(o(ne), { "data-orientation": o(e).orientation, "data-disabled": r.value, "data-state": s.value, disabled: i.value, open: l.value, as: a.as, "as-child": a.asChild, "unmount-on-hide": o(e).unmountOnHide.value, onKeydown: j(v, ["up", "down", "left", "right", "home", "end"]) }, { default: g(() => [_(c.$slots, "default", { open: l.value })]), _: 3 }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as", "as-child", "unmount-on-hide"]));
} }), re = y({ inheritAttrs: false, __name: "CollapsibleContent", props: { forceMount: { type: Boolean }, asChild: { type: Boolean }, as: {} }, emits: ["contentFound"], setup(t, { emit: n }) {
  const a = t, e = n, l = T();
  l.contentId || (l.contentId = S(void 0, "reka-collapsible-content"));
  const i = k(), { forwardRef: r, currentElement: s } = w(), u = k(0), p = k(0), v = m(() => l.open.value), c = k(v.value), f = k();
  K(() => {
    var _a;
    return [v.value, (_a = i.value) == null ? void 0 : _a.present];
  }, async () => {
    await W();
    const d = s.value;
    if (!d) return;
    f.value = f.value || { transitionDuration: d.style.transitionDuration, animationName: d.style.animationName }, d.style.transitionDuration = "0s", d.style.animationName = "none";
    const b = d.getBoundingClientRect();
    p.value = b.height, u.value = b.width, c.value || (d.style.transitionDuration = f.value.transitionDuration, d.style.animationName = f.value.animationName);
  }, { immediate: true });
  const h = m(() => c.value && l.open.value);
  return U(() => {
    requestAnimationFrame(() => {
      c.value = false;
    });
  }), q(s, "beforematch", (d) => {
    requestAnimationFrame(() => {
      l.onOpenToggle(), e("contentFound");
    });
  }), (d, b) => (A(), C(o(P), { ref_key: "presentRef", ref: i, present: d.forceMount || o(l).open.value, "force-mount": true }, { default: g(({ present: I }) => {
    var _a;
    return [z(o(R), L(d.$attrs, { id: o(l).contentId, ref: o(r), "as-child": a.asChild, as: d.as, hidden: I ? void 0 : o(l).unmountOnHide.value ? "" : "until-found", "data-state": h.value ? void 0 : o(l).open.value ? "open" : "closed", "data-disabled": ((_a = o(l).disabled) == null ? void 0 : _a.value) ? "" : void 0, style: { "--reka-collapsible-content-height": `${p.value}px`, "--reka-collapsible-content-width": `${u.value}px` } }), { default: g(() => [!o(l).unmountOnHide.value || I ? _(d.$slots, "default", { key: 0 }) : G("", true)]), _: 2 }, 1040, ["id", "as-child", "as", "hidden", "data-state", "data-disabled", "style"])];
  }), _: 3 }, 8, ["present"]));
} }), be = y({ __name: "AccordionContent", props: { forceMount: { type: Boolean }, asChild: { type: Boolean }, as: {} }, setup(t) {
  const n = t, a = E(), e = H();
  return w(), (l, i) => (A(), C(o(re), { role: "region", "as-child": n.asChild, as: l.as, "force-mount": n.forceMount, "aria-labelledby": o(e).triggerId, "data-state": o(e).dataState.value, "data-disabled": o(e).dataDisabled.value, "data-orientation": o(a).orientation, style: { "--reka-accordion-content-width": "var(--reka-collapsible-content-width)", "--reka-accordion-content-height": "var(--reka-collapsible-content-height)" }, onContentFound: i[0] || (i[0] = (r) => o(a).changeModelValue(o(e).value.value)) }, { default: g(() => [_(l.$slots, "default")]), _: 3 }, 8, ["as-child", "as", "force-mount", "aria-labelledby", "data-state", "data-disabled", "data-orientation"]));
} }), de = y({ __name: "CollapsibleTrigger", props: { asChild: { type: Boolean }, as: { default: "button" } }, setup(t) {
  const n = t;
  w();
  const a = T();
  return (e, l) => {
    var _a, _b;
    return A(), C(o(R), { type: e.as === "button" ? "button" : void 0, as: e.as, "as-child": n.asChild, "aria-controls": o(a).contentId, "aria-expanded": o(a).open.value, "data-state": o(a).open.value ? "open" : "closed", "data-disabled": ((_a = o(a).disabled) == null ? void 0 : _a.value) ? "" : void 0, disabled: (_b = o(a).disabled) == null ? void 0 : _b.value, onClick: o(a).onOpenToggle }, { default: g(() => [_(e.$slots, "default")]), _: 3 }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
  };
} }), ge = y({ __name: "AccordionTrigger", props: { asChild: { type: Boolean }, as: {} }, setup(t) {
  const n = t, a = E(), e = H();
  e.triggerId || (e.triggerId = S(void 0, "reka-accordion-trigger"));
  function l() {
    const i = a.isSingle.value && e.open.value && !a.collapsible;
    e.disabled.value || i || a.changeModelValue(e.value.value);
  }
  return (i, r) => (A(), C(o(de), { id: o(e).triggerId, ref: o(e).currentRef, "data-reka-collection-item": "", as: n.as, "as-child": n.asChild, "aria-disabled": o(e).disabled.value || void 0, "aria-expanded": o(e).open.value || false, "data-disabled": o(e).dataDisabled.value, "data-orientation": o(a).orientation, "data-state": o(e).dataState.value, disabled: o(e).disabled.value, onClick: l }, { default: g(() => [_(i.$slots, "default")]), _: 3 }, 8, ["id", "as", "as-child", "aria-disabled", "aria-expanded", "data-disabled", "data-orientation", "data-state", "disabled"]));
} });
export {
  ve as _,
  he as a,
  ge as b,
  be as c,
  H as d,
  E as i,
  ie as u
};
