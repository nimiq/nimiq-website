import { i as L, _ as T, a as z, b as x, d as K, c as U, u as $ } from "./ZXfttXAr.js";
import { u as _, P as b, c as j, a as Y, b as E, e as V, f as W } from "./DvG5VWlW.js";
import { d as m, b as v, o as f, w as d, R as g, c as k, m as y, u as t, j as X, a as h, h as N, U as q, B as P, S as F, T as S, E as H, aj as G, $ as A, e as C, n as D, i as J } from "./ClGJWWej.js";
import { d as Q, _ as Z, a as ee, c as te, b as oe } from "./DsoEoSLB.js";
const ae = { key: 0, d: "M0 0L6 6L12 0" }, se = { key: 1, d: "M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0" }, ne = m({ __name: "Arrow", props: { width: { default: 10 }, height: { default: 5 }, rounded: { type: Boolean }, asChild: { type: Boolean }, as: { default: "svg" } }, setup(p) {
  const a = p;
  return _(), (e, o) => (f(), v(t(b), y(a, { width: e.width, height: e.height, viewBox: e.asChild ? void 0 : "0 0 12 6", preserveAspectRatio: e.asChild ? void 0 : "none" }), { default: d(() => [g(e.$slots, "default", {}, () => [e.rounded ? (f(), k("path", se)) : (f(), k("path", ae))])]), _: 3 }, 16, ["width", "height", "viewBox", "preserveAspectRatio"]));
} }), ie = { top: "bottom", right: "left", bottom: "top", left: "right" }, re = m({ inheritAttrs: false, __name: "PopperArrow", props: { width: {}, height: {}, rounded: { type: Boolean }, asChild: { type: Boolean }, as: { default: "svg" } }, setup(p) {
  const { forwardRef: a } = _(), e = L(), o = X(() => ie[e.placedSide.value]);
  return (s, n) => {
    var _a, _b, _c, _d;
    return f(), k("span", { ref: (r) => {
      t(e).onArrowChange(r);
    }, style: N({ position: "absolute", left: ((_a = t(e).arrowX) == null ? void 0 : _a.value) ? `${(_b = t(e).arrowX) == null ? void 0 : _b.value}px` : void 0, top: ((_c = t(e).arrowY) == null ? void 0 : _c.value) ? `${(_d = t(e).arrowY) == null ? void 0 : _d.value}px` : void 0, [o.value]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[t(e).placedSide.value], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[t(e).placedSide.value], visibility: t(e).shouldHideArrow.value ? "hidden" : void 0 }) }, [h(ne, y(s.$attrs, { ref: t(a), style: { display: "block" }, as: s.as, "as-child": s.asChild, rounded: s.rounded, width: s.width, height: s.height }), { default: d(() => [g(s.$slots, "default")]), _: 3 }, 16, ["as", "as-child", "rounded", "width", "height"])], 4);
  };
} }), [O, le] = j("PopoverRoot"), de = m({ __name: "PopoverRoot", props: { defaultOpen: { type: Boolean, default: false }, open: { type: Boolean, default: void 0 }, modal: { type: Boolean, default: false } }, emits: ["update:open"], setup(p, { emit: a }) {
  const e = p, o = a, { modal: s } = q(e), n = Y(e, "open", o, { defaultValue: e.defaultOpen, passive: e.open === void 0 }), r = P(), c = P(false);
  return le({ contentId: "", triggerId: "", modal: s, open: n, onOpenChange: (i) => {
    n.value = i;
  }, onOpenToggle: () => {
    n.value = !n.value;
  }, triggerElement: r, hasCustomAnchor: c }), (i, l) => (f(), v(t(T), null, { default: d(() => [g(i.$slots, "default", { open: t(n) })]), _: 3 }));
} }), pe = m({ __name: "PopoverArrow", props: { width: { default: 10 }, height: { default: 5 }, rounded: { type: Boolean }, asChild: { type: Boolean }, as: { default: "svg" } }, setup(p) {
  const a = p;
  return _(), (e, o) => (f(), v(t(re), F(S(a)), { default: d(() => [g(e.$slots, "default")]), _: 3 }, 16));
} }), ue = m({ __name: "PopoverTrigger", props: { asChild: { type: Boolean }, as: { default: "button" } }, setup(p) {
  const a = p, e = O(), { forwardRef: o, currentElement: s } = _();
  return e.triggerId || (e.triggerId = E(void 0, "reka-popover-trigger")), H(() => {
    e.triggerElement.value = s.value;
  }), (n, r) => (f(), v(G(t(e).hasCustomAnchor.value ? t(b) : t(z)), { "as-child": "" }, { default: d(() => [h(t(b), { id: t(e).triggerId, ref: t(o), type: n.as === "button" ? "button" : void 0, "aria-haspopup": "dialog", "aria-expanded": t(e).open.value, "aria-controls": t(e).contentId, "data-state": t(e).open.value ? "open" : "closed", as: n.as, "as-child": a.asChild, onClick: t(e).onOpenToggle }, { default: d(() => [g(n.$slots, "default")]), _: 3 }, 8, ["id", "type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])]), _: 3 }));
} }), ce = m({ __name: "PopoverPortal", props: { to: {}, disabled: { type: Boolean }, defer: { type: Boolean }, forceMount: { type: Boolean } }, setup(p) {
  const a = p;
  return (e, o) => (f(), v(t(Q), F(S(a)), { default: d(() => [g(e.$slots, "default")]), _: 3 }, 16));
} }), R = m({ __name: "PopoverContentImpl", props: { trapFocus: { type: Boolean }, side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {}, disableOutsidePointerEvents: { type: Boolean } }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"], setup(p, { emit: a }) {
  const e = p, o = a, s = x(V(e, "trapFocus", "disableOutsidePointerEvents")), { forwardRef: n } = _(), r = O();
  return K(), (c, i) => (f(), v(t(ee), { "as-child": "", loop: "", trapped: c.trapFocus, onMountAutoFocus: i[5] || (i[5] = (l) => o("openAutoFocus", l)), onUnmountAutoFocus: i[6] || (i[6] = (l) => o("closeAutoFocus", l)) }, { default: d(() => [h(t(Z), { "as-child": "", "disable-outside-pointer-events": c.disableOutsidePointerEvents, onPointerDownOutside: i[0] || (i[0] = (l) => o("pointerDownOutside", l)), onInteractOutside: i[1] || (i[1] = (l) => o("interactOutside", l)), onEscapeKeyDown: i[2] || (i[2] = (l) => o("escapeKeyDown", l)), onFocusOutside: i[3] || (i[3] = (l) => o("focusOutside", l)), onDismiss: i[4] || (i[4] = (l) => t(r).onOpenChange(false)) }, { default: d(() => [h(t(U), y(t(s), { id: t(r).contentId, ref: t(n), "data-state": t(r).open.value ? "open" : "closed", "aria-labelledby": t(r).triggerId, style: { "--reka-popover-content-transform-origin": "var(--reka-popper-transform-origin)", "--reka-popover-content-available-width": "var(--reka-popper-available-width)", "--reka-popover-content-available-height": "var(--reka-popper-available-height)", "--reka-popover-trigger-width": "var(--reka-popper-anchor-width)", "--reka-popover-trigger-height": "var(--reka-popper-anchor-height)" }, role: "dialog" }), { default: d(() => [g(c.$slots, "default")]), _: 3 }, 16, ["id", "data-state", "aria-labelledby"])]), _: 3 }, 8, ["disable-outside-pointer-events"])]), _: 3 }, 8, ["trapped"]));
} }), fe = m({ __name: "PopoverContentModal", props: { side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {}, disableOutsidePointerEvents: { type: Boolean } }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"], setup(p, { emit: a }) {
  const e = p, o = a, s = O(), n = P(false);
  te(true);
  const r = $(e, o), { forwardRef: c, currentElement: i } = _();
  return oe(i), (l, u) => (f(), v(R, y(t(r), { ref: t(c), "trap-focus": t(s).open.value, "disable-outside-pointer-events": "", onCloseAutoFocus: u[0] || (u[0] = A((w) => {
    var _a;
    o("closeAutoFocus", w), n.value || ((_a = t(s).triggerElement.value) == null ? void 0 : _a.focus());
  }, ["prevent"])), onPointerDownOutside: u[1] || (u[1] = (w) => {
    o("pointerDownOutside", w);
    const B = w.detail.originalEvent, I = B.button === 0 && B.ctrlKey === true, M = B.button === 2 || I;
    n.value = M;
  }), onFocusOutside: u[2] || (u[2] = A(() => {
  }, ["prevent"])) }), { default: d(() => [g(l.$slots, "default")]), _: 3 }, 16, ["trap-focus"]));
} }), ge = m({ __name: "PopoverContentNonModal", props: { side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {}, disableOutsidePointerEvents: { type: Boolean } }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"], setup(p, { emit: a }) {
  const e = p, o = a, s = O(), n = P(false), r = P(false), c = $(e, o);
  return (i, l) => (f(), v(R, y(t(c), { "trap-focus": false, "disable-outside-pointer-events": false, onCloseAutoFocus: l[0] || (l[0] = (u) => {
    var _a;
    o("closeAutoFocus", u), u.defaultPrevented || (n.value || ((_a = t(s).triggerElement.value) == null ? void 0 : _a.focus()), u.preventDefault()), n.value = false, r.value = false;
  }), onInteractOutside: l[1] || (l[1] = async (u) => {
    var _a;
    o("interactOutside", u), u.defaultPrevented || (n.value = true, u.detail.originalEvent.type === "pointerdown" && (r.value = true));
    const w = u.target;
    ((_a = t(s).triggerElement.value) == null ? void 0 : _a.contains(w)) && u.preventDefault(), u.detail.originalEvent.type === "focusin" && r.value && u.preventDefault();
  }) }), { default: d(() => [g(i.$slots, "default")]), _: 3 }, 16));
} }), ve = m({ __name: "PopoverContent", props: { forceMount: { type: Boolean }, side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {}, disableOutsidePointerEvents: { type: Boolean } }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"], setup(p, { emit: a }) {
  const e = p, o = a, s = O(), n = $(e, o), { forwardRef: r } = _();
  return s.contentId || (s.contentId = E(void 0, "reka-popover-content")), (c, i) => (f(), v(t(W), { present: c.forceMount || t(s).open.value }, { default: d(() => [t(s).modal.value ? (f(), v(fe, y({ key: 0 }, t(n), { ref: t(r) }), { default: d(() => [g(c.$slots, "default")]), _: 3 }, 16)) : (f(), v(ge, y({ key: 1 }, t(n), { ref: t(r) }), { default: d(() => [g(c.$slots, "default")]), _: 3 }, 16))]), _: 3 }, 8, ["present"]));
} }), me = m({ __name: "Tooltip", props: { dark: { type: Boolean } }, setup(p) {
  return (a, e) => {
    const o = ue, s = pe, n = ve, r = ce, c = de;
    return f(), v(c, null, { default: d(() => [h(o, y(a.$attrs, { "h-max": "", "bg-transparent": "" }), { default: d(() => [g(a.$slots, "trigger", {}, () => [e[0] || (e[0] = C("div", { "text-12": "", "text-neutral-700": "", "i-nimiq:info": "" }, null, -1))], true)]), _: 3 }, 16), h(r, null, { default: d(() => [h(n, { "as-child": "", class: "tooltip-animation", "side-offset": 8, "collision-padding": 8, side: "bottom", flex: "~ col", "max-w-360": "" }, { default: d(() => [C("div", { class: D(a.dark ? "bg-white" : "bg-gradient-neutral shadow dark"), "z-300": "", "rounded-8": "", "p-16": "", text: "neutral-900/80" }, [g(a.$slots, "default", {}, void 0, true)], 2), h(s, { "as-child": "" }, { default: d(() => [C("div", { "rotate-180": "", class: D({ dark: a.dark }) }, e[1] || (e[1] = [C("div", { "aria-hidden": "", "mt--1": "", "h-8": "", "w-16": "", "i-nimiq:tooltip-triangle": "", class: "tooltip-animation", text: "neutral dark:white" }, null, -1)]), 2)]), _: 1 })]), _: 3 })]), _: 3 })]), _: 3 });
  };
} }), Pe = Object.assign(J(me, [["__scopeId", "data-v-8154bd24"]]), { __name: "Tooltip" });
export {
  Pe as _,
  re as a
};
