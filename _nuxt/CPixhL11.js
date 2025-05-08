import { _ as O } from "./D3wyXQF5.js";
import { d as C, b as h, o as s, w as n, R as _, m as q, u as e, a6 as I, Z as z, a7 as V, l as j, a8 as E, L as U, G, a as p, a3 as R, $ as Z, e as o, c as m, f as H, i as F, q as J, s as K, y as Q, F as B, r as M, n as W, t as X } from "./ClGJWWej.js";
import { i as N, _ as Y, c as ee, d as te, a as oe, b as ne } from "./BlGBlRxG.js";
import { u as S, P as A } from "./DvG5VWlW.js";
import { g as ae } from "./CpsPJSKh.js";
import { u as se } from "./DaKIddv2.js";
import "./CEBR9iVI.js";
import "./YKo2rOHu.js";
import "./DsoEoSLB.js";
import "./FVrYAlZa.js";
const le = C({ __name: "DialogClose", props: { asChild: { type: Boolean }, as: { default: "button" } }, setup(l) {
  const r = l;
  S();
  const d = N();
  return (u, c) => (s(), h(e(A), q(r, { type: u.as === "button" ? "button" : void 0, onClick: c[0] || (c[0] = (f) => e(d).onOpenChange(false)) }), { default: n(() => [_(u.$slots, "default")]), _: 3 }, 16, ["type"]));
} }), re = C({ __name: "DialogTitle", props: { asChild: { type: Boolean }, as: { default: "h2" } }, setup(l) {
  const r = l, d = N();
  return S(), (u, c) => (s(), h(e(A), q(r, { id: e(d).titleId }), { default: n(() => [_(u.$slots, "default")]), _: 3 }, 16, ["id"]));
} }), ie = C({ __name: "DialogDescription", props: { asChild: { type: Boolean }, as: { default: "p" } }, setup(l) {
  const r = l;
  S();
  const d = N();
  return (u, c) => (s(), h(e(A), q(r, { id: e(d).descriptionId }), { default: n(() => [_(u.$slots, "default")]), _: 3 }, 16, ["id"]));
} }), de = { relative: "", "bg-neutral-0": "", "py-32": "", ring: "1.5 neutral/3", class: "modal-container" }, ue = { key: 0, "mt--32": "" }, pe = { "mt-12": "", "rounded-b-8": "", "px-24": "", "lg:px-40": "" };
var L = ((l) => (l.TechnicalDetails = "technical-details", l))(L || {});
const ce = C({ __name: "Modal", props: I({ name: {} }, { open: { type: Boolean }, openModifiers: {} }), emits: I(["close"], ["update:open"]), setup(l, { emit: r }) {
  const d = l, u = r, c = z(), f = V(l, "open"), b = j(), w = E(), v = "modal";
  return f.value = b.query[v] === d.name, U(f, (i) => {
    requestAnimationFrame(() => w.replace({ query: { ...b.query, [v]: i ? d.name : void 0 } })), i || u("close");
  }), G(() => w.replace({ query: { ...b.query, [v]: void 0 } })), (i, g) => {
    const y = ee, D = oe, T = re, P = ie, k = le, t = ne, $ = te, a = Y;
    return s(), h(a, { open: f.value, "onUpdate:open": g[1] || (g[1] = (x) => f.value = x) }, { default: n(() => [p(y, q(i.$attrs, { "bg-transparent": "" }), { default: n(() => [_(i.$slots, "trigger", {}, void 0, true)]), _: 3 }, 16), p($, null, { default: n(() => [p(R, { name: "backdrop" }, { default: n(() => [p(D, { fixed: "", "inset-0": "", "z-200": "", "bg-darkblue": "", "op-60": "" })]), _: 1 }), p(R, { name: "modal" }, { default: n(() => [(s(), h(t, { key: i.name, lg: "top-1/2 left-1/2 translate--1/2", rounded: "t-8 lg:8", "data-modal": "", fixed: "", "bottom-0": "", "z-200": "", "h-max": "", "max-h-85dvh": "", "w-full": "", transform: "", "of-y-auto": "", "shadow-lg": "", "outline-none": "", "lg:max-w-500": "", onOpenAutoFocus: g[0] || (g[0] = Z(() => {
    }, ["prevent"])) }, { default: n(() => [o("div", de, [c.top ? (s(), m("div", ue, [_(i.$slots, "top", {}, void 0, true)])) : H("", true), p(T, { text: "24 center neutral lh-24", "mb-12": "", "px-24": "", "font-bold": "", "lh-none": "", "lg:px-40": "", as: "h2" }, { default: n(() => [_(i.$slots, "title", {}, void 0, true)]), _: 3 }), p(P, { text: "center neutral", block: "", "px-24": "", "lg:px-40": "" }, { default: n(() => [_(i.$slots, "description", {}, void 0, true)]), _: 3 }), o("div", pe, [_(i.$slots, "content", {}, void 0, true)]), p(k, { "aria-label": "Close", "close-btn": "", absolute: "", "right-16": "", "top-16": "", "text-28": "" })])]), _: 3 }))]), _: 3 })]), _: 3 })]), _: 3 }, 8, ["open"]);
  };
} }), me = Object.assign(F(ce, [["__scopeId", "data-v-4628726a"]]), { __name: "Modal" }), _e = { class: "dark", "bg-darkerblue": "", "pt-0": "", "text-neutral": "" }, fe = { "nq-prose-compact": "", "text-neutral-800": "", "f-mt-xs": "" }, be = { flex: "~ gap-8", "mb-32": "", "mt--8": "", "h-12": "", "w-full": "", "px-8": "", "lh-none": "" }, ge = ["aria-selected", "tabindex", "onClick"], xe = { mx: "-24 lg:-40", w: "[calc(100%+48px)] lg:[calc(100%+80px)]", relative: "", "rounded-b-8": "" }, he = ["aria-hidden"], ve = { flex: "~", border: "t neutral-500", w: "[calc(100%+48px)] lg:[calc(100%+80px)]", mx: "-24 lg:-40", sticky: "", "bottom-0": "", "mb--32": "", "of-hidden": "", "lg:rounded-b-8": "" }, ye = ["disabled"], ke = ["disabled"], $e = { key: 1, grid: "~  cols-[repeat(auto-fit,minmax(320px,1fr))] gap-x-64", "max-w": "$nq-prose-max-width", "f-pt-lg": "" }, Ce = C({ __name: "index", props: ae(), async setup(l) {
  let r, d;
  const { client: u } = J(), { data: c } = ([r, d] = K(() => Q("technical_details", () => u.getSingle("albatrossSingleType").then((k) => k.data))), r = await r, d(), r), { buttonLabel: f, slides: b } = c.value, w = se({ initialIndex: 0 }), { slidePrev: v, scroller: i, slideNext: g, activeIndex: y, slideTo: D, canSlideNext: T, canSlidePrev: P } = w;
  return (k, t) => {
    const $ = O;
    return s(), m("section", _e, [o("div", fe, [p($, { field: k.slice.primary.subline }, null, 8, ["field"])]), k.slice.primary.asModal ? (s(), h(me, { key: 0, name: e(L).TechnicalDetails, outline: "~ 1.5 neutral-500", "text-18": "", "nq-pill-lg": "", "nq-pill-tertiary": "", "f-mt-sm": "" }, { trigger: n(() => [t[2] || (t[2] = o("div", { "i-custom:cli-docs": "", "mr-8": "" }, null, -1)), o("span", null, X(e(f)), 1), t[3] || (t[3] = o("div", { "ml-8": "", "text-11": "", "op-60": "", "i-nimiq:info": "" }, null, -1))]), top: n(() => {
      var _a;
      return [o("ul", be, [(s(true), m(B, null, M((_a = e(b)) == null ? void 0 : _a.length, (a) => (s(), m("li", { key: a, "flex-1": "" }, [o("button", { class: W(e(y) === a - 1 ? "bg-green" : "bg-neutral-500"), "h-4": "", "w-full": "", "rounded-full": "", "transition-colors": "", role: "tab", "aria-selected": e(y) === a - 1, tabindex: e(y) === a - 1 ? 0 : -1, onClick: (x) => e(D)(a - 1) }, null, 10, ge)]))), 128))])];
    }), title: n(() => t[4] || (t[4] = [o("p", { "sr-only": "" }, " Albatross Technical Details ", -1)])), description: n(() => t[5] || (t[5] = [o("p", { "sr-only": "" }, " Learn about the technical details of Nimiq's Albatross and what each of the elements are ", -1)])), content: n(() => [o("div", xe, [o("ul", { ref_key: "scroller", ref: i, role: "tablist", snap: "x mandatory", flex: "~ items-start gap-16", "w-full": "", "of-x-auto": "", class: "nq-scrollbar-hide", tabindex: "0" }, [(s(true), m(B, null, M(e(b), ({ richText: a }, x) => (s(), m("li", { key: x, snap: "center always", "data-slide": "", "w-full": "", "shrink-0": "", "px-24": "", role: "tabpanel", "aria-hidden": e(y) !== x }, [p($, { wrapper: "div", "nq-prose-compact": "", field: a, "pb-32": "" }, null, 8, ["field"])], 8, he))), 128))], 512)]), o("div", ve, [o("button", { disabled: !e(P), bg: "neutral-300 disabled:!neutral-200 hocus:neutral-400", "flex-1": "", "shrink-0": "", "py-24": "", transition: "", "disabled:op-70": "", text: "24 neutral-700 disabled:!neutral-700 hocus:neutral-900", border: "r neutral-500", "aria-label": "Previous slide", onClick: t[0] || (t[0] = (...a) => e(v) && e(v)(...a)) }, t[6] || (t[6] = [o("div", { "mx-auto": "", "i-nimiq:chevron-left": "" }, null, -1)]), 8, ye), o("button", { bg: "neutral-300 disabled:!neutral-200 hocus:neutral-400", text: "24 neutral-700 disabled:!neutral-700 hocus:neutral-900", border: "r neutral-500", disabled: !e(T), "flex-1": "", "shrink-0": "", "py-24": "", transition: "", "disabled:op-70": "", "aria-label": "Next slide", onClick: t[1] || (t[1] = (...a) => e(g) && e(g)(...a)) }, t[7] || (t[7] = [o("div", { "mx-auto": "", "i-nimiq:chevron-right": "" }, null, -1)]), 8, ke)])]), _: 1 }, 8, ["name"])) : (s(), m("article", $e, [(s(true), m(B, null, M(e(b), (a, x) => (s(), h($, { key: x, wrapper: "div", "nq-prose-compact": "", field: a.richText, "f-mt-md": "" }, null, 8, ["field"]))), 128))]))]);
  };
} }), Ie = F(Ce, [["__scopeId", "data-v-e5960a81"]]);
export {
  Ie as default
};
