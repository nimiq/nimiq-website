import { i as L, _ as z, u as K, a as U, b as V } from "./DqJc2qEj.js";
import { d as m, S as w, e as g, o as f, f as p, Q as v, j as C, s as y, h as e, R as k, a as W, g as _, q as X, X as Y, W as j, v as O, $ as x, T as E, U as R, aF as N, b2 as q, a5 as H, a3 as G, b3 as Q, a4 as $, b4 as J, ae as A, a0 as S, a6 as Z, B as ee, b5 as oe, O as F, l as te, k as b, n as D } from "./Dzy_QPZd.js";
import { u as ae } from "./CjRg-5kW.js";
import { _ as se } from "./DlAUqK2U.js";
const ne = { key: 0, d: "M0 0L6 6L12 0" }, ie = { key: 1, d: "M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0" }, re = m({ __name: "Arrow", props: { width: { default: 10 }, height: { default: 5 }, rounded: { type: Boolean }, asChild: { type: Boolean }, as: { default: "svg" } }, setup(u) {
  const i = u;
  return w(), (o, a) => (f(), g(e(k), y(i, { width: o.width, height: o.height, viewBox: o.asChild ? void 0 : "0 0 12 6", preserveAspectRatio: o.asChild ? void 0 : "none" }), { default: p(() => [v(o.$slots, "default", {}, () => [o.rounded ? (f(), C("path", ie)) : (f(), C("path", ne))])]), _: 3 }, 16, ["width", "height", "viewBox", "preserveAspectRatio"]));
} }), le = { top: "bottom", right: "left", bottom: "top", left: "right" }, de = m({ inheritAttrs: false, __name: "PopperArrow", props: { width: {}, height: {}, rounded: { type: Boolean }, asChild: { type: Boolean }, as: { default: "svg" } }, setup(u) {
  const { forwardRef: i } = w(), o = L(), a = W(() => le[o.placedSide.value]);
  return (s, t) => {
    var _a, _b, _c, _d;
    return f(), C("span", { ref: (r) => {
      e(o).onArrowChange(r);
    }, style: X({ position: "absolute", left: ((_a = e(o).arrowX) == null ? void 0 : _a.value) ? `${(_b = e(o).arrowX) == null ? void 0 : _b.value}px` : void 0, top: ((_c = e(o).arrowY) == null ? void 0 : _c.value) ? `${(_d = e(o).arrowY) == null ? void 0 : _d.value}px` : void 0, [a.value]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[e(o).placedSide.value], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[e(o).placedSide.value], visibility: e(o).shouldHideArrow.value ? "hidden" : void 0 }) }, [_(re, y(s.$attrs, { ref: e(i), style: { display: "block" }, as: s.as, "as-child": s.asChild, rounded: s.rounded, width: s.width, height: s.height }), { default: p(() => [v(s.$slots, "default")]), _: 3 }, 16, ["as", "as-child", "rounded", "width", "height"])], 4);
  };
} }), [P, pe] = x("PopoverRoot"), ue = m({ __name: "PopoverRoot", props: { defaultOpen: { type: Boolean, default: false }, open: { type: Boolean, default: void 0 }, modal: { type: Boolean, default: false } }, emits: ["update:open"], setup(u, { emit: i }) {
  const o = u, a = i, { modal: s } = Y(o), t = j(o, "open", a, { defaultValue: o.defaultOpen, passive: o.open === void 0 }), r = O(), c = O(false);
  return pe({ contentId: "", triggerId: "", modal: s, open: t, onOpenChange: (n) => {
    t.value = n;
  }, onOpenToggle: () => {
    t.value = !t.value;
  }, triggerElement: r, hasCustomAnchor: c }), (n, l) => (f(), g(e(z), null, { default: p(() => [v(n.$slots, "default", { open: e(t) })]), _: 3 }));
} }), fe = m({ __name: "PopoverArrow", props: { width: { default: 10 }, height: { default: 5 }, rounded: { type: Boolean }, asChild: { type: Boolean }, as: { default: "svg" } }, setup(u) {
  const i = u;
  return w(), (o, a) => (f(), g(e(de), E(R(i)), { default: p(() => [v(o.$slots, "default")]), _: 3 }, 16));
} }), ce = m({ __name: "PopoverPortal", props: { to: {}, disabled: { type: Boolean }, defer: { type: Boolean }, forceMount: { type: Boolean } }, setup(u) {
  const i = u;
  return (o, a) => (f(), g(e(N), E(R(i)), { default: p(() => [v(o.$slots, "default")]), _: 3 }, 16));
} }), I = m({ __name: "PopoverContentImpl", props: { trapFocus: { type: Boolean }, side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {}, disableOutsidePointerEvents: { type: Boolean } }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"], setup(u, { emit: i }) {
  const o = u, a = i, s = q(H(o, "trapFocus", "disableOutsidePointerEvents")), { forwardRef: t } = w(), r = P();
  return K(), (c, n) => (f(), g(e(Q), { "as-child": "", loop: "", trapped: c.trapFocus, onMountAutoFocus: n[5] || (n[5] = (l) => a("openAutoFocus", l)), onUnmountAutoFocus: n[6] || (n[6] = (l) => a("closeAutoFocus", l)) }, { default: p(() => [_(e(G), { "as-child": "", "disable-outside-pointer-events": c.disableOutsidePointerEvents, onPointerDownOutside: n[0] || (n[0] = (l) => a("pointerDownOutside", l)), onInteractOutside: n[1] || (n[1] = (l) => a("interactOutside", l)), onEscapeKeyDown: n[2] || (n[2] = (l) => a("escapeKeyDown", l)), onFocusOutside: n[3] || (n[3] = (l) => a("focusOutside", l)), onDismiss: n[4] || (n[4] = (l) => e(r).onOpenChange(false)) }, { default: p(() => [_(e(U), y(e(s), { id: e(r).contentId, ref: e(t), "data-state": e(r).open.value ? "open" : "closed", "aria-labelledby": e(r).triggerId, style: { "--reka-popover-content-transform-origin": "var(--reka-popper-transform-origin)", "--reka-popover-content-available-width": "var(--reka-popper-available-width)", "--reka-popover-content-available-height": "var(--reka-popper-available-height)", "--reka-popover-trigger-width": "var(--reka-popper-anchor-width)", "--reka-popover-trigger-height": "var(--reka-popper-anchor-height)" }, role: "dialog" }), { default: p(() => [v(c.$slots, "default")]), _: 3 }, 16, ["id", "data-state", "aria-labelledby"])]), _: 3 }, 8, ["disable-outside-pointer-events"])]), _: 3 }, 8, ["trapped"]));
} }), ge = m({ __name: "PopoverContentModal", props: { side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {}, disableOutsidePointerEvents: { type: Boolean } }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"], setup(u, { emit: i }) {
  const o = u, a = i, s = P(), t = O(false);
  ae(true);
  const r = $(o, a), { forwardRef: c, currentElement: n } = w();
  return J(n), (l, d) => (f(), g(I, y(e(r), { ref: e(c), "trap-focus": e(s).open.value, "disable-outside-pointer-events": "", onCloseAutoFocus: d[0] || (d[0] = A((h) => {
    var _a;
    a("closeAutoFocus", h), t.value || ((_a = e(s).triggerElement.value) == null ? void 0 : _a.focus());
  }, ["prevent"])), onPointerDownOutside: d[1] || (d[1] = (h) => {
    a("pointerDownOutside", h);
    const B = h.detail.originalEvent, M = B.button === 0 && B.ctrlKey === true, T = B.button === 2 || M;
    t.value = T;
  }), onFocusOutside: d[2] || (d[2] = A(() => {
  }, ["prevent"])) }), { default: p(() => [v(l.$slots, "default")]), _: 3 }, 16, ["trap-focus"]));
} }), ve = m({ __name: "PopoverContentNonModal", props: { side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {}, disableOutsidePointerEvents: { type: Boolean } }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"], setup(u, { emit: i }) {
  const o = u, a = i, s = P(), t = O(false), r = O(false), c = $(o, a);
  return (n, l) => (f(), g(I, y(e(c), { "trap-focus": false, "disable-outside-pointer-events": false, onCloseAutoFocus: l[0] || (l[0] = (d) => {
    var _a;
    a("closeAutoFocus", d), d.defaultPrevented || (t.value || ((_a = e(s).triggerElement.value) == null ? void 0 : _a.focus()), d.preventDefault()), t.value = false, r.value = false;
  }), onInteractOutside: l[1] || (l[1] = async (d) => {
    var _a;
    a("interactOutside", d), d.defaultPrevented || (t.value = true, d.detail.originalEvent.type === "pointerdown" && (r.value = true));
    const h = d.target;
    ((_a = e(s).triggerElement.value) == null ? void 0 : _a.contains(h)) && d.preventDefault(), d.detail.originalEvent.type === "focusin" && r.value && d.preventDefault();
  }) }), { default: p(() => [v(n.$slots, "default")]), _: 3 }, 16));
} }), me = m({ __name: "PopoverContent", props: { forceMount: { type: Boolean }, side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {}, disableOutsidePointerEvents: { type: Boolean } }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"], setup(u, { emit: i }) {
  const o = u, a = i, s = P(), t = $(o, a), { forwardRef: r } = w();
  return s.contentId || (s.contentId = S(void 0, "reka-popover-content")), (c, n) => (f(), g(e(Z), { present: c.forceMount || e(s).open.value }, { default: p(() => [e(s).modal.value ? (f(), g(ge, y({ key: 0 }, e(t), { ref: e(r) }), { default: p(() => [v(c.$slots, "default")]), _: 3 }, 16)) : (f(), g(ve, y({ key: 1 }, e(t), { ref: e(r) }), { default: p(() => [v(c.$slots, "default")]), _: 3 }, 16))]), _: 3 }, 8, ["present"]));
} }), he = m({ __name: "PopoverTrigger", props: { asChild: { type: Boolean }, as: { default: "button" } }, setup(u) {
  const i = u, o = P(), { forwardRef: a, currentElement: s } = w();
  return o.triggerId || (o.triggerId = S(void 0, "reka-popover-trigger")), ee(() => {
    o.triggerElement.value = s.value;
  }), (t, r) => (f(), g(oe(e(o).hasCustomAnchor.value ? e(k) : e(V)), { "as-child": "" }, { default: p(() => [_(e(k), { id: e(o).triggerId, ref: e(a), type: t.as === "button" ? "button" : void 0, "aria-haspopup": "dialog", "aria-expanded": e(o).open.value, "aria-controls": e(o).contentId, "data-state": e(o).open.value ? "open" : "closed", as: t.as, "as-child": i.asChild, onClick: e(o).onOpenToggle }, { default: p(() => [v(t.$slots, "default")]), _: 3 }, 8, ["id", "type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])]), _: 3 }));
} }), ye = m({ __name: "Tooltip", props: { dark: { type: Boolean, default: false }, side: { default: "bottom" }, sideOffset: { default: 8 }, collisionPadding: { default: 8 } }, setup(u) {
  const i = F(false), o = F(false);
  function a() {
    i.value || (i.value = true);
  }
  function s(t) {
    o.value = t, t && a();
  }
  return (t, r) => {
    const c = he, n = fe, l = me, d = ce, h = ue;
    return f(), g(h, { open: e(o), "onUpdate:open": s }, { default: p(() => [_(c, y(t.$attrs, { "bg-transparent": "", "h-max": "", block: "", onMouseenter: a, onFocus: a }), { default: p(() => [v(t.$slots, "trigger", {}, () => [r[0] || (r[0] = b("div", { "text-12": "", "text-neutral-700": "", "i-nimiq:info": "" }, null, -1))], true)]), _: 3 }, 16), e(i) ? (f(), g(d, { key: 0 }, { default: p(() => [_(l, { "as-child": "", class: "tooltip-animation", "side-offset": t.sideOffset, "collision-padding": t.collisionPadding, side: t.side, flex: "~ col", "max-w-360": "" }, { default: p(() => [b("div", { class: D(t.dark ? "bg-white" : "bg-gradient-neutral shadow dark scheme-dark"), "p-16": "", "rounded-8": "", text: "neutral dark:white" }, [v(t.$slots, "default", {}, void 0, true)], 2), _(n, { "as-child": "" }, { default: p(() => [b("div", { "rotate-180": "", class: D({ dark: t.dark }) }, r[1] || (r[1] = [b("div", { "aria-hidden": "", "mt--1": "", "h-8": "", "w-16": "", "i-nimiq:tooltip-triangle": "", class: "tooltip-animation", text: "darkblue dark:white" }, null, -1)]), 2)]), _: 1 })]), _: 3 }, 8, ["side-offset", "collision-padding", "side"])]), _: 3 })) : te("", true)]), _: 3 }, 8, ["open"]);
  };
} }), Be = Object.assign(se(ye, [["__scopeId", "data-v-bb82668d"]]), { __name: "Tooltip" });
export {
  Be as _,
  de as a
};
