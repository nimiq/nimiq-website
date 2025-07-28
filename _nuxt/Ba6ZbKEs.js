import { g as E, _ as R, a as k, u as B, b as M, c as h, d as K } from "./BIPleKtX.js";
import { g as T } from "./CbA0xmEM.js";
import { a as S, c as V, u as O, b, f as w, P as F } from "./CMmzeBWC.js";
import { d as v, C as _, U as N, R as g, u as e, G as P, b as f, o as m, w as c, a as A, m as y, f as L, S as U, T as j } from "./BguRs3jF.js";
const [C, z] = V("DialogRoot"), Y = v({ inheritAttrs: false, __name: "DialogRoot", props: { open: { type: Boolean, default: void 0 }, defaultOpen: { type: Boolean, default: false }, modal: { type: Boolean, default: true } }, emits: ["update:open"], setup(u, { emit: l }) {
  const t = u, o = S(t, "open", l, { defaultValue: t.defaultOpen, passive: t.open === void 0 }), d = _(), p = _(), { modal: r } = N(t);
  return z({ open: o, modal: r, openModal: () => {
    o.value = true;
  }, onOpenChange: (a) => {
    o.value = a;
  }, onOpenToggle: () => {
    o.value = !o.value;
  }, contentId: "", titleId: "", descriptionId: "", triggerElement: d, contentElement: p }), (a, s) => g(a.$slots, "default", { open: e(o) });
} }), I = v({ __name: "DialogContentImpl", props: { forceMount: { type: Boolean }, trapFocus: { type: Boolean }, disableOutsidePointerEvents: { type: Boolean }, asChild: { type: Boolean }, as: {} }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"], setup(u, { emit: l }) {
  const t = u, n = l, o = C(), { forwardRef: d, currentElement: p } = O();
  return o.titleId || (o.titleId = b(void 0, "reka-dialog-title")), o.descriptionId || (o.descriptionId = b(void 0, "reka-dialog-description")), P(() => {
    o.contentElement = p, E() !== document.body && (o.triggerElement.value = E());
  }), (r, a) => (m(), f(e(k), { "as-child": "", loop: "", trapped: t.trapFocus, onMountAutoFocus: a[5] || (a[5] = (s) => n("openAutoFocus", s)), onUnmountAutoFocus: a[6] || (a[6] = (s) => n("closeAutoFocus", s)) }, { default: c(() => [A(e(R), y({ id: e(o).contentId, ref: e(d), as: r.as, "as-child": r.asChild, "disable-outside-pointer-events": r.disableOutsidePointerEvents, role: "dialog", "aria-describedby": e(o).descriptionId, "aria-labelledby": e(o).titleId, "data-state": e(T)(e(o).open.value) }, r.$attrs, { onDismiss: a[0] || (a[0] = (s) => e(o).onOpenChange(false)), onEscapeKeyDown: a[1] || (a[1] = (s) => n("escapeKeyDown", s)), onFocusOutside: a[2] || (a[2] = (s) => n("focusOutside", s)), onInteractOutside: a[3] || (a[3] = (s) => n("interactOutside", s)), onPointerDownOutside: a[4] || (a[4] = (s) => n("pointerDownOutside", s)) }), { default: c(() => [g(r.$slots, "default")]), _: 3 }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])]), _: 3 }, 8, ["trapped"]));
} }), G = v({ __name: "DialogContentModal", props: { forceMount: { type: Boolean }, trapFocus: { type: Boolean }, disableOutsidePointerEvents: { type: Boolean }, asChild: { type: Boolean }, as: {} }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"], setup(u, { emit: l }) {
  const t = u, n = l, o = C(), d = B(n), { forwardRef: p, currentElement: r } = O();
  return M(r), (a, s) => (m(), f(I, y({ ...t, ...e(d) }, { ref: e(p), "trap-focus": e(o).open.value, "disable-outside-pointer-events": true, onCloseAutoFocus: s[0] || (s[0] = (i) => {
    var _a;
    i.defaultPrevented || (i.preventDefault(), (_a = e(o).triggerElement.value) == null ? void 0 : _a.focus());
  }), onPointerDownOutside: s[1] || (s[1] = (i) => {
    const D = i.detail.originalEvent, $ = D.button === 0 && D.ctrlKey === true;
    (D.button === 2 || $) && i.preventDefault();
  }), onFocusOutside: s[2] || (s[2] = (i) => {
    i.preventDefault();
  }) }), { default: c(() => [g(a.$slots, "default")]), _: 3 }, 16, ["trap-focus"]));
} }), H = v({ __name: "DialogContentNonModal", props: { forceMount: { type: Boolean }, trapFocus: { type: Boolean }, disableOutsidePointerEvents: { type: Boolean }, asChild: { type: Boolean }, as: {} }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"], setup(u, { emit: l }) {
  const t = u, o = B(l);
  O();
  const d = C(), p = _(false), r = _(false);
  return (a, s) => (m(), f(I, y({ ...t, ...e(o) }, { "trap-focus": false, "disable-outside-pointer-events": false, onCloseAutoFocus: s[0] || (s[0] = (i) => {
    var _a;
    i.defaultPrevented || (p.value || ((_a = e(d).triggerElement.value) == null ? void 0 : _a.focus()), i.preventDefault()), p.value = false, r.value = false;
  }), onInteractOutside: s[1] || (s[1] = (i) => {
    var _a;
    i.defaultPrevented || (p.value = true, i.detail.originalEvent.type === "pointerdown" && (r.value = true));
    const D = i.target;
    ((_a = e(d).triggerElement.value) == null ? void 0 : _a.contains(D)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && r.value && i.preventDefault();
  }) }), { default: c(() => [g(a.$slots, "default")]), _: 3 }, 16));
} }), Z = v({ __name: "DialogContent", props: { forceMount: { type: Boolean }, trapFocus: { type: Boolean }, disableOutsidePointerEvents: { type: Boolean }, asChild: { type: Boolean }, as: {} }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"], setup(u, { emit: l }) {
  const t = u, n = l, o = C(), d = B(n), { forwardRef: p } = O();
  return (r, a) => (m(), f(e(w), { present: r.forceMount || e(o).open.value }, { default: c(() => [e(o).modal.value ? (m(), f(G, y({ key: 0, ref: e(p) }, { ...t, ...e(d), ...r.$attrs }), { default: c(() => [g(r.$slots, "default")]), _: 3 }, 16)) : (m(), f(H, y({ key: 1, ref: e(p) }, { ...t, ...e(d), ...r.$attrs }), { default: c(() => [g(r.$slots, "default")]), _: 3 }, 16))]), _: 3 }, 8, ["present"]));
} }), q = v({ __name: "DialogOverlayImpl", props: { asChild: { type: Boolean }, as: {} }, setup(u) {
  const l = C();
  return h(true), O(), (t, n) => (m(), f(e(F), { as: t.as, "as-child": t.asChild, "data-state": e(l).open.value ? "open" : "closed", style: { "pointer-events": "auto" } }, { default: c(() => [g(t.$slots, "default")]), _: 3 }, 8, ["as", "as-child", "data-state"]));
} }), ee = v({ __name: "DialogOverlay", props: { forceMount: { type: Boolean }, asChild: { type: Boolean }, as: {} }, setup(u) {
  const l = C(), { forwardRef: t } = O();
  return (n, o) => {
    var _a;
    return ((_a = e(l)) == null ? void 0 : _a.modal.value) ? (m(), f(e(w), { key: 0, present: n.forceMount || e(l).open.value }, { default: c(() => [A(q, y(n.$attrs, { ref: e(t), as: n.as, "as-child": n.asChild }), { default: c(() => [g(n.$slots, "default")]), _: 3 }, 16, ["as", "as-child"])]), _: 3 }, 8, ["present"])) : L("", true);
  };
} }), te = v({ __name: "DialogTrigger", props: { asChild: { type: Boolean }, as: { default: "button" } }, setup(u) {
  const l = u, t = C(), { forwardRef: n, currentElement: o } = O();
  return t.contentId || (t.contentId = b(void 0, "reka-dialog-content")), P(() => {
    t.triggerElement.value = o.value;
  }), (d, p) => (m(), f(e(F), y(l, { ref: e(n), type: d.as === "button" ? "button" : void 0, "aria-haspopup": "dialog", "aria-expanded": e(t).open.value || false, "aria-controls": e(t).open.value ? e(t).contentId : void 0, "data-state": e(t).open.value ? "open" : "closed", onClick: e(t).onOpenToggle }), { default: c(() => [g(d.$slots, "default")]), _: 3 }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
} }), oe = v({ __name: "DialogPortal", props: { to: {}, disabled: { type: Boolean }, defer: { type: Boolean }, forceMount: { type: Boolean } }, setup(u) {
  const l = u;
  return (t, n) => (m(), f(e(K), U(j(l)), { default: c(() => [g(t.$slots, "default")]), _: 3 }, 16));
} });
export {
  Y as _,
  ee as a,
  Z as b,
  te as c,
  oe as d,
  C as i
};
