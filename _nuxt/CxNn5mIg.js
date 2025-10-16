import { u as g } from "./CoPlYyca.js";
import { d as r, aI as u, s as i, e as l, o as p, f as n, l as d, h as a, P as _, x as h, g as v, J as m, y, m as C, n as B, a3 as $, a4 as k, aJ as P } from "./B8biU-UE.js";
const b = r({ __name: "DialogOverlayImpl", props: { asChild: { type: Boolean }, as: {} }, setup(s) {
  const t = u();
  return g(true), i(), (e, o) => (p(), l(a(_), { as: e.as, "as-child": e.asChild, "data-state": a(t).open.value ? "open" : "closed", style: { "pointer-events": "auto" } }, { default: n(() => [d(e.$slots, "default")]), _: 3 }, 8, ["as", "as-child", "data-state"]));
} }), M = r({ __name: "DialogOverlay", props: { forceMount: { type: Boolean }, asChild: { type: Boolean }, as: {} }, setup(s) {
  const t = u(), { forwardRef: e } = i();
  return (o, c) => {
    var _a;
    return ((_a = a(t)) == null ? void 0 : _a.modal.value) ? (p(), l(a(y), { key: 0, present: o.forceMount || a(t).open.value }, { default: n(() => [v(b, m(o.$attrs, { ref: a(e), as: o.as, "as-child": o.asChild }), { default: n(() => [d(o.$slots, "default")]), _: 3 }, 16, ["as", "as-child"])]), _: 3 }, 8, ["present"])) : h("", true);
  };
} }), R = r({ __name: "DialogTrigger", props: { asChild: { type: Boolean }, as: { default: "button" } }, setup(s) {
  const t = s, e = u(), { forwardRef: o, currentElement: c } = i();
  return e.contentId || (e.contentId = C(void 0, "reka-dialog-content")), B(() => {
    e.triggerElement.value = c.value;
  }), (f, D) => (p(), l(a(_), m(t, { ref: a(o), type: f.as === "button" ? "button" : void 0, "aria-haspopup": "dialog", "aria-expanded": a(e).open.value || false, "aria-controls": a(e).open.value ? a(e).contentId : void 0, "data-state": a(e).open.value ? "open" : "closed", onClick: a(e).onOpenToggle }), { default: n(() => [d(f.$slots, "default")]), _: 3 }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
} }), x = r({ __name: "DialogPortal", props: { to: {}, disabled: { type: Boolean }, defer: { type: Boolean }, forceMount: { type: Boolean } }, setup(s) {
  const t = s;
  return (e, o) => (p(), l(a(P), $(k(t)), { default: n(() => [d(e.$slots, "default")]), _: 3 }, 16));
} });
export {
  M as _,
  R as a,
  x as b
};
