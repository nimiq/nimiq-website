import { _ as O } from "./DakKeHV_.js";
import { d as $, b as h, o as s, w as n, Q as _, m as D, u as e, af as I, Z as L, ag as V, p as j, ah as E, X as U, G, a as p, a3 as F, $ as Q, e as o, c as m, f as X, i as R, s as Z, v as H, z as J, F as B, r as M, n as K, t as W } from "./gdLxT4Lf.js";
import { i as N, _ as Y, c as ee, d as te, a as oe, b as ne } from "./DzxZsifD.js";
import { u as S, P as A } from "./BI3535uL.js";
import { g as ae } from "./CpsPJSKh.js";
import { u as se } from "./mUzFeepZ.js";
import "./eRMYwULF.js";
import "./DYDUvkDP.js";
import "./ViQ2U2w0.js";
import "./B8QP58w5.js";
const le = $({ __name: "DialogClose", props: { asChild: { type: Boolean }, as: { default: "button" } }, setup(l) {
  const r = l;
  S();
  const d = N();
  return (u, c) => (s(), h(e(A), D(r, { type: u.as === "button" ? "button" : void 0, onClick: c[0] || (c[0] = (f) => e(d).onOpenChange(false)) }), { default: n(() => [_(u.$slots, "default")]), _: 3 }, 16, ["type"]));
} }), re = $({ __name: "DialogDescription", props: { asChild: { type: Boolean }, as: { default: "p" } }, setup(l) {
  const r = l;
  S();
  const d = N();
  return (u, c) => (s(), h(e(A), D(r, { id: e(d).descriptionId }), { default: n(() => [_(u.$slots, "default")]), _: 3 }, 16, ["id"]));
} }), ie = $({ __name: "DialogTitle", props: { asChild: { type: Boolean }, as: { default: "h2" } }, setup(l) {
  const r = l, d = N();
  return S(), (u, c) => (s(), h(e(A), D(r, { id: e(d).titleId }), { default: n(() => [_(u.$slots, "default")]), _: 3 }, 16, ["id"]));
} }), de = { "py-32": "", "bg-neutral-0": "", relative: "", ring: "1.5 neutral/3", class: "modal-container" }, ue = { key: 0, "mt--32": "" }, pe = { "mt-12": "", "px-24": "", "rounded-b-8": "", "lg:px-40": "" };
var z = ((l) => (l.TechnicalDetails = "technical-details", l))(z || {});
const ce = $({ __name: "Modal", props: I({ name: {} }, { open: { type: Boolean }, openModifiers: {} }), emits: I(["close"], ["update:open"]), setup(l, { emit: r }) {
  const d = l, u = r, c = L(), f = V(l, "open"), b = j(), w = E(), v = "modal";
  return f.value = b.query[v] === d.name, U(f, (i) => {
    requestAnimationFrame(() => w.replace({ query: { ...b.query, [v]: i ? d.name : void 0 } })), i || u("close");
  }), G(() => w.replace({ query: { ...b.query, [v]: void 0 } })), (i, g) => {
    const y = ee, q = oe, T = ie, P = re, k = le, t = ne, C = te, a = Y;
    return s(), h(a, { open: f.value, "onUpdate:open": g[1] || (g[1] = (x) => f.value = x) }, { default: n(() => [p(y, D(i.$attrs, { "bg-transparent": "" }), { default: n(() => [_(i.$slots, "trigger", {}, void 0, true)]), _: 3 }, 16), p(C, null, { default: n(() => [p(F, { name: "backdrop" }, { default: n(() => [p(q, { "bg-darkblue": "", "op-60": "", "inset-0": "", fixed: "", "z-200": "" })]), _: 1 }), p(F, { name: "modal" }, { default: n(() => [(s(), h(t, { key: i.name, lg: "top-1/2 left-1/2 translate--1/2", rounded: "t-8 lg:8", "outline-none": "", "data-modal": "", "h-max": "", "max-h-85dvh": "", "w-full": "", "shadow-lg": "", transform: "", "bottom-0": "", fixed: "", "z-200": "", "of-y-auto": "", "lg:max-w-500": "", onOpenAutoFocus: g[0] || (g[0] = Q(() => {
    }, ["prevent"])) }, { default: n(() => [o("div", de, [c.top ? (s(), m("div", ue, [_(i.$slots, "top", {}, void 0, true)])) : X("", true), p(T, { text: "24 center neutral lh-24", "font-bold": "", "lh-none": "", "mb-12": "", "px-24": "", "lg:px-40": "", as: "h2" }, { default: n(() => [_(i.$slots, "title", {}, void 0, true)]), _: 3 }), p(P, { text: "center neutral", "px-24": "", block: "", "lg:px-40": "" }, { default: n(() => [_(i.$slots, "description", {}, void 0, true)]), _: 3 }), o("div", pe, [_(i.$slots, "content", {}, void 0, true)]), p(k, { "aria-label": "Close", "close-btn": "", "text-28": "", "right-16": "", "top-16": "", absolute: "" })])]), _: 3 }))]), _: 3 })]), _: 3 })]), _: 3 }, 8, ["open"]);
  };
} }), me = Object.assign(R(ce, [["__scopeId", "data-v-824c1785"]]), { __name: "Modal" }), _e = { class: "dark", "text-neutral": "", "pt-0": "", "bg-darkerblue": "", "scheme-dark": "" }, fe = { "nq-prose-compact": "", "text-neutral-800": "", "f-mt-xs": "" }, be = { flex: "~ gap-8", "lh-none": "", "mb-32": "", "mt--8": "", "px-8": "", "h-12": "", "w-full": "" }, ge = ["aria-selected", "tabindex", "onClick"], xe = { mx: "-24 lg:-40", w: "[calc(100%+48px)] lg:[calc(100%+80px)]", "rounded-b-8": "", relative: "" }, he = ["aria-hidden"], ve = { flex: "~", border: "t neutral-500", w: "[calc(100%+48px)] lg:[calc(100%+80px)]", mx: "-24 lg:-40", "mb--32": "", "bottom-0": "", sticky: "", "of-hidden": "", "lg:rounded-b-8": "" }, ye = ["disabled"], ke = ["disabled"], Ce = { key: 1, "gap-x-64": "", "max-w-80ch": "", "break-inside-avoid": "", "f-pt-lg": "", "md:columns-2": "" }, $e = $({ __name: "index", props: ae(), async setup(l) {
  let r, d;
  const { client: u } = Z(), { data: c } = ([r, d] = H(() => J("technical_details", () => u.getSingle("albatrossSingleType").then((k) => k.data))), r = await r, d(), r), { buttonLabel: f, slides: b } = c.value, w = se({ initialIndex: 0 }), { slidePrev: v, scroller: i, slideNext: g, activeIndex: y, slideTo: q, canSlideNext: T, canSlidePrev: P } = w;
  return (k, t) => {
    const C = O;
    return s(), m("section", _e, [o("div", fe, [p(C, { field: k.slice.primary.subline }, null, 8, ["field"])]), k.slice.primary.asModal ? (s(), h(me, { key: 0, name: e(z).TechnicalDetails, outline: "~ 1.5 neutral-500", "text-18": "", "f-mt-sm": "", "nq-pill-lg": "", "nq-pill-tertiary": "" }, { trigger: n(() => [t[2] || (t[2] = o("div", { "i-custom:cli-docs": "", "mr-8": "" }, null, -1)), o("span", null, W(e(f)), 1), t[3] || (t[3] = o("div", { "text-11": "", "ml-8": "", "op-60": "", "i-nimiq:info": "" }, null, -1))]), top: n(() => {
      var _a;
      return [o("ul", be, [(s(true), m(B, null, M((_a = e(b)) == null ? void 0 : _a.length, (a) => (s(), m("li", { key: a, "flex-1": "" }, [o("button", { class: K(e(y) === a - 1 ? "bg-green" : "bg-neutral-500"), "rounded-full": "", "h-4": "", "w-full": "", "transition-colors": "", role: "tab", "aria-selected": e(y) === a - 1, tabindex: e(y) === a - 1 ? 0 : -1, onClick: (x) => e(q)(a - 1) }, null, 10, ge)]))), 128))])];
    }), title: n(() => t[4] || (t[4] = [o("p", { "sr-only": "" }, " Albatross Technical Details ", -1)])), description: n(() => t[5] || (t[5] = [o("p", { "sr-only": "" }, " Learn about the technical details of Nimiq's Albatross and what each of the elements are ", -1)])), content: n(() => [o("div", xe, [o("ul", { ref_key: "scroller", ref: i, role: "tablist", snap: "x mandatory", flex: "~ items-start gap-16", "w-full": "", "of-x-auto": "", class: "nq-scrollbar-hide", tabindex: "0" }, [(s(true), m(B, null, M(e(b), ({ richText: a }, x) => (s(), m("li", { key: x, snap: "center always", "data-slide": "", "px-24": "", "shrink-0": "", "w-full": "", role: "tabpanel", "aria-hidden": e(y) !== x }, [p(C, { wrapper: "div", "nq-prose-compact": "", field: a, "pb-32": "" }, null, 8, ["field"])], 8, he))), 128))], 512)]), o("div", ve, [o("button", { disabled: !e(P), bg: "neutral-300 disabled:!neutral-200 hocus:neutral-400", "py-24": "", "flex-1": "", "shrink-0": "", transition: "", "disabled:op-70": "", text: "24 neutral-700 disabled:!neutral-700 hocus:neutral-900", border: "r neutral-500", "aria-label": "Previous slide", onClick: t[0] || (t[0] = (...a) => e(v) && e(v)(...a)) }, t[6] || (t[6] = [o("div", { "mx-auto": "", "i-nimiq:chevron-left": "" }, null, -1)]), 8, ye), o("button", { bg: "neutral-300 disabled:!neutral-200 hocus:neutral-400", text: "24 neutral-700 disabled:!neutral-700 hocus:neutral-900", border: "r neutral-500", disabled: !e(T), "py-24": "", "flex-1": "", "shrink-0": "", transition: "", "disabled:op-70": "", "aria-label": "Next slide", onClick: t[1] || (t[1] = (...a) => e(g) && e(g)(...a)) }, t[7] || (t[7] = [o("div", { "mx-auto": "", "i-nimiq:chevron-right": "" }, null, -1)]), 8, ke)])]), _: 1 }, 8, ["name"])) : (s(), m("article", Ce, [(s(true), m(B, null, M(e(b), (a, x) => (s(), h(C, { key: x, wrapper: "div", "nq-prose-compact": "", field: a.richText, "f-mt-md": "" }, null, 8, ["field"]))), 128))]))]);
  };
} }), Ie = R($e, [["__scopeId", "data-v-1f9bd190"]]);
export {
  Ie as default
};
